
<script lang="ts">
  // imports
import { cn } from "../lib/cn";
import { store } from "../lib/store";

let messageDisplayIndex: number = 0;

let className: string = "";
  
  let classList = cn("bg-white p-4 rounded-md", className);
  export { className as class };


const increment = () => {
  store.update(({messageDisplayIndex,messages}) => ({messages,  messageDisplayIndex: messageDisplayIndex++ }))
}
const decrement = () => {
  store.update(({messageDisplayIndex,messages}) => ({messages,  messageDisplayIndex: messageDisplayIndex-- }))
}

// effects
store.subscribe((value) => {
  messageDisplayIndex = value.messageDisplayIndex
})

</script>

<main class={classList}>
  controller

  <p>Current Message: {messageDisplayIndex}</p>
  
  <button on:click={increment}>+ 1</button>
  <button on:click={decrement}>- 1</button>
</main>

