<script lang="ts">
  import { cn } from '../lib/cn'
  import { store } from '../lib/store'
  import type { Message } from '../types/Mesasge'

  const TAB_KEYCODE = 9
  const ENTER_KEYCODE = 13

  let className: string = ''
  export { className as class }
  let classList = cn('bg-white p-4 rounded-md', className)

  let messages: Message[] = []
  let isEditAvatars = messages.map(() => false)

  const handleRemovemessage = (id: string) => {
    const newMessages = messages.filter((message) => message.id !== id)
    console.log('remove')
    store.update(({ messages, ...rest }) => ({ messages: newMessages, ...rest }))
  }

  const handleToggleEditAvatar = (index: number) => {
    // const newEditAvatars = [...isEditAvatars]
    isEditAvatars[index] = !isEditAvatars[index]
  }
  const moveUp = (id: string) => {
    const newMessages = [...messages]

    const index = newMessages.findIndex((message) => message.id === id)
    if (index === 0) return
    const message = messages[index]
    newMessages[index] = messages[index - 1]
    newMessages[index - 1] = message
    store.update(({ messages, ...rest }) => ({ messages: newMessages, ...rest }))
  }

  const moveDown = (id: string) => {
    const newMessages = [...messages]

    const index = messages.findIndex((message) => message.id === id)
    if (index === messages.length - 1) return
    const message = messages[index]
    newMessages[index] = messages[index + 1]
    newMessages[index + 1] = message
    store.update(({ messages, ...rest }) => ({ messages: newMessages, ...rest }))
  }

  const handleContent = (index: number, e: any) => {
    const newMessages = [...messages]
    newMessages[index].content = e.target.value
    store.update(({ messages, ...rest }) => ({ messages: newMessages, ...rest }))
  }
  const handleAvatar = (index: number, e: any) => {
    const newMessages = [...messages]
    newMessages[index].avatarUrl = e.target.value
    store.update(({ messages, ...rest }) => ({ messages: newMessages, ...rest }))
  }

  const handleKeyDownAvatar = (index: number, e: any) => {
    if (e.keyCode === TAB_KEYCODE || e.keyCode === ENTER_KEYCODE) {
      isEditAvatars[index] = false
    }
  }
  // effects
  store.subscribe((value) => {
    messages = value.messages
  })
</script>

<main class={classList}>
  <div class="flex flex-col gap-2">
    {#each messages as message, index (message.id)}
      <div class="">
        <div class="flex items-center gap-4">
          <span>{index + 1}.</span>
          <div class="flex w-full">
            {#if isEditAvatars[index]}
              <input
                on:input={(e) => handleAvatar(index, e)}
                on:keydown={(e) => handleKeyDownAvatar(index, e)}
                class="align-middle border-[1px] border-neutral-300 rounded-md px-2 py-1 text-gray-900 {isEditAvatars[
                  index
                ]
                  ? 'w-10'
                  : 'w-full'}"
              />
            {:else}
              <button on:click={() => handleToggleEditAvatar(index)}>
                <img
                  class="w-10 h-10 rounded-full mr-4"
                  src={message.avatarUrl}
                  alt="Avatar of Jonathan Reinink"
                />
              </button>
            {/if}

            <div class="text-gray-900 w-full rounded-mdpx-2 py-1">
              <!-- <span class="align-middle text-gray-900">{message.content}</span> -->
              <input
                on:input={(e) => handleContent(index, e)}
                value={message.content}
                class="align-middle border-[1px] border-neutral-300 rounded-md px-2 py-1 text-gray-900 w-full"
              />
            </div>
          </div>

          <div class="flex gap-2">
            <button
              class="bg-red-500 rounded-md text-white px-2 py-1 hover:bg-red-400"
              on:click={() => handleRemovemessage(message.id)}>Delete</button
            >
            <button
              class="bg-white rounded-md border-neutral-500 border-[1px] px-2 py-1 hover:bg-neutral-100"
              on:click={() => moveUp(message.id)}>Up</button
            >
            <button
              class="bg-white rounded-md border-neutral-500 border-[1px] px-2 py-1 hover:bg-neutral-100"
              on:click={() => moveDown(message.id)}>Down</button
            >
          </div>
        </div>
      </div>
    {:else}
      <p>Please add a conversation</p>
    {/each}
  </div>
</main>
