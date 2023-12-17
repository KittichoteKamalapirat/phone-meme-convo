<script lang="ts">
  // imports
  import { cn } from '../lib/cn'
  import { store } from '../lib/store'
  import type { Message } from '../types/Mesasge'

  let messageDisplayIndex: number = 0
  let messages: Message[] = []

  let className: string = ''
  let playingInterval: number = 0
  let betweenMessageInterval: number = 1000

  export { className as class }

  const increment = () => {
    if (messageDisplayIndex >= messages.length - 1) return
    store.update(({ messageDisplayIndex, ...rest }) => ({
      messageDisplayIndex: messageDisplayIndex + 1,
      ...rest,
    }))
  }
  const decrement = () => {
    if (messageDisplayIndex <= -1) return // can show nothing
    store.update(({ messageDisplayIndex, ...rest }) => ({
      messageDisplayIndex: messageDisplayIndex - 1,
      ...rest,
    }))
  }

  // when reach the end, stop playing
  $: if (messageDisplayIndex === messages.length - 1) {
    console.log('clear interval')
    clearInterval(playingInterval)
    playingInterval = 0
  }

  const handleBetweenMessageInterval = (e: Event) => {
    const target = e.target as HTMLInputElement
    betweenMessageInterval = Number(target.value)
  }
  const handlePlayPause = () => {
    if (playingInterval !== 0) {
      clearInterval(playingInterval)
      playingInterval = 0
      return
    } else {
      playingInterval = setInterval(() => {
        increment()
      }, betweenMessageInterval)
    }
  }

  // effects
  store.subscribe((value) => {
    messageDisplayIndex = value.messageDisplayIndex
    messages = value.messages
  })

  let classList = cn('bg-white p-4 rounded-md', className)
</script>

<main class={classList}>
  <div class="flex flex-col">
    <label for="betweenMessageInterval">Interval</label>
    <input
      type="number"
      value={betweenMessageInterval}
      on:input={handleBetweenMessageInterval}
      class="border-[1px] rounded-md px-2 py-1"
    />
  </div>

  <div class="flex gap-2 mt-4 items-stretch">
    <button
      on:click={decrement}
      class="bg-neutral-700 disabled:bg-neutral-300 text-white rounded-md px-4 py-2"
      disabled={Boolean(playingInterval) || messageDisplayIndex < 0}
    >
      - 1</button
    >

    <button
      on:click={increment}
      class="bg-neutral-700 disabled:bg-neutral-300 text-white rounded-md px-4 py-2"
      disabled={Boolean(playingInterval) || messageDisplayIndex === messages.length - 1}
    >
      + 1</button
    >

    <button
      on:click={handlePlayPause}
      class="bg-neutral-700 disabled:bg-neutral-300 text-white rounded-md w-20"
      disabled={messageDisplayIndex === messages.length - 1}
    >
      {playingInterval ? 'Pause' : 'Play'}</button
    >
    <div>
      <span class="text-xl font-bold">{messageDisplayIndex + 1}</span> /
      <span class="text-xl font-bold">{messages.length}</span>
    </div>
  </div>
</main>
