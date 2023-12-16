<script lang="ts">
  import { cn } from "../lib/cn";
  import { store } from "../lib/store";
  import type { Message } from "../types/Mesasge";

  

  let className: string = "";
  export { className as class };
  let classList = cn("bg-white p-4 rounded-md", className);

  
  let messages: Message[] = []

  const handleRemovemessage = (id: string) => {
    const newMessages = messages.filter(message => message.id !== id)
    console.log('remove')
    store.update(({messages,...rest}) => ({messages: newMessages,  ...rest }))
    
  }
  

  const moveUp = (id: string) => {
    const newMessages = [...messages]
    
    const index = newMessages.findIndex(message => message.id === id)
    if (index === 0) return
    const message = messages[index]
    newMessages[index] = messages[index - 1]
    newMessages[index - 1] = message
    store.update(({messages,...rest}) => ({messages: newMessages,  ...rest }))

  }

  const moveDown = (id: string) => {
    const newMessages = [...messages]

    const index = messages.findIndex(message => message.id === id)
    if (index === messages.length - 1) return
    const message = messages[index]
    newMessages[index] = messages[index + 1]
    newMessages[index + 1] = message
    store.update(({messages,...rest}) => ({messages: newMessages,  ...rest }))
  
  }

  // effects
  store.subscribe((value) => {
  messages = value.messages

})
</script>

<main class={classList}>
  {#each messages as message (message.id)}
    <div class="card">
      <div class="flex items-center">
        <img class="w-10 h-10 rounded-full mr-4" src={message.avatarUrl} alt="Avatar of Jonathan Reinink">
        <div class="text-sm">
          <p class="text-gray-900 leading-none">{message.content}</p>
        </div>

        <button on:click={() => handleRemovemessage(message.id)}>Delete</button>
        <button on:click={() => moveUp(message.id)}>Up</button>
        <button on:click={() => moveDown(message.id)}>Down</button>
      </div>
    </div>
    {:else}
    <p>Please add a conversation</p>
  {/each}
  
</main>

