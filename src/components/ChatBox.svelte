<script lang="ts">
  import { store } from "../lib/store";
  import type { Message } from "../types/Mesasge";


  
  let messages: Message[] = []
  let messageDisplayIndex = 0
  const displayMessages = messages.slice(0, messageDisplayIndex + 1)


store.subscribe((value) => {
  messages = value.messages
  messageDisplayIndex = value.messageDisplayIndex
})

</script>

<main class="bg-white p-4 rounded-md">
  {#each messages as message (message.id)}
    <div class="card">
      <div class="flex items-center">
        <img class="w-10 h-10 rounded-full mr-4" src={message.avatarUrl} alt="Avatar of Jonathan Reinink">
        <div class="text-sm">
          <p class="text-gray-900 leading-none">{message.content}</p>
        </div>

      </div>
    </div>
    {:else}
    <p>Please add a conversation</p>
  {/each}
  
</main>

