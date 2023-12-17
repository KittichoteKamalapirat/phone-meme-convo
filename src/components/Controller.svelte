<script lang="ts">
  // imports
  import { cn } from '../lib/cn'
  import { store } from '../lib/store'
  import type { Message } from '../types/Mesasge'

  const MESSAGE_INTERVAL = 1000

  let messageDisplayIndex: number = 0
  let messages: Message[] = []

  let className: string = ''
  let playingInterval: number = 0

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
  }

  const handlePlayPause = () => {
    if (playingInterval !== 0) {
      clearInterval(playingInterval)
      playingInterval = 0
      return
    } else {
      playingInterval = setInterval(() => {
        increment()
      }, MESSAGE_INTERVAL)
    }
  }

  // effects
  store.subscribe((value) => {
    messageDisplayIndex = value.messageDisplayIndex
    messages = value.messages
  })

  let classList = cn('bg-white p-4 rounded-md flex justify-between items-center', className)
</script>

<main class={classList}>
  <div class="border-[1px] border-neutral-300 rounded-md px-4 py-2 w-fit">
    <span class="text-xl font-bold">{messageDisplayIndex + 1}</span> /
    <span class="text-xl font-bold">{messages.length}</span>
  </div>

  <div class="flex gap-2 mt-4">
    <button on:click={increment} class="bg-neutral-700 text-white rounded-md px-4 py-2">+ 1</button>
    <button on:click={decrement} class="bg-neutral-700 text-white rounded-md px-4 py-2">- 1</button>
    <button on:click={handlePlayPause} class="bg-neutral-700 text-white rounded-md px-4 py-2"
      >{playingInterval ? 'Pause' : 'Play'}</button
    >
    {playingInterval}
  </div>
</main>
