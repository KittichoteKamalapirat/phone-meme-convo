<script lang="ts">
  import { store } from '../lib/store'
  import type { Message } from '../types/Mesasge'
  import MessageBubble from './MessageBubble.svelte'

  let messages: Message[] = []
  let messageDisplayIndex = 0
  $: displayMessages = messages.slice(0, messageDisplayIndex + 1)

  store.subscribe((value) => {
    messages = value.messages
    messageDisplayIndex = value.messageDisplayIndex
  })
</script>

<main class="p-4 flex flex-col gap-4 rounded-md">
  {#each displayMessages as message (message.id)}
    <MessageBubble {message} />
  {:else}
    <p>Please add a conversation</p>
  {/each}
</main>
