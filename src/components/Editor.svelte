<script lang="ts">
  import { cn } from '../lib/cn'
  import AddMessageEditor from './AddMessageEditor.svelte'
  import MessageListEditor from './MessageListEditor.svelte'

  let className: string = ''
  export { className as class }
  let classList = cn('flex flex-col grow', className)
</script>

<main class={classList}>
  <MessageListEditor class="grow" />
  <AddMessageEditor />
</main>
