<script lang="ts">
  import Counter from './lib/Counter.svelte';


  interface ChatBubble {
    id: string
    content: string
    avatarUrl: string

  }
  let bubbles: ChatBubble[] = [
    {   id:"1",content: 'foo' , avatarUrl: "https://avatars.githubusercontent.com/u/499270?v=4"},
    {  id:"2",content: 'bar' , avatarUrl: "https://avatars.githubusercontent.com/u/499270?v=4"},
    { id:"3", content: 'baz' , avatarUrl: "https://avatars.githubusercontent.com/u/499270?v=4"},
  ];

  const handleRemoveBubble = (id: string) => {
    bubbles = bubbles.filter(bubble => bubble.id !== id)

  }

</script>

<main>
  <h1 class="text-red-500">Vite + Svelte</h1>
  <div class="card">
    <Counter />
  </div>

  {#each bubbles as bubble (bubble.id)}
    <div class="card">
      <div class="flex items-center">
        <img class="w-10 h-10 rounded-full mr-4" src={bubble.avatarUrl} alt="Avatar of Jonathan Reinink">
        <div class="text-sm">
          <p class="text-gray-900 leading-none">{bubble.content}</p>
        </div>

        <button on:click={() => handleRemoveBubble(bubble.id)}>Delete</button>
      </div>
    </div>
    {:else}
    <p>Please add a conversation</p>
  {/each}
  
</main>

