<script lang="ts">
  import ChatBox from './components/ChatBox.svelte'
  import Container from './components/Container.svelte'
  import Controller from './components/Controller.svelte'
  import Editor from './components/Editor.svelte'
</script>

<main class="my-4">
  <Container>
    <div class="flex flex-col lg:flex-row gap-2 min-h-[95vh]">
      <div class="flex-1 border-[1px] p-4 bg-discord-background rounded-md">
        <ChatBox />
      </div>
      <div class="flex-1 border-[1px] p-4 bg-neutral-100 rounded-md flex flex-col gap-4">
        <Editor class="grow" />
        <Controller />
      </div>
    </div>
  </Container>
</main>
