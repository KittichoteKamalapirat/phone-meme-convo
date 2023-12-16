<script lang="ts">
  import type { Message } from '../types/Mesasge'

  export let message: Message
</script>

<div class="">
  <div class="flex items-center">
    <img
      class="w-10 h-10 rounded-full mr-4"
      src={message.avatarUrl}
      alt="Avatar of Jonathan Reinink"
    />
    <div class="bg-discord-background-secondary px-4 py-2 rounded-md w-full">
      <p class="text-discord-foreground">{message.content}</p>
    </div>
  </div>
</div>
