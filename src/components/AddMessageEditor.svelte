<script lang="ts">
  import { store } from '../lib/store'

  // state
  let content: string = ''
  let avatarUrl: string = ''

  //   handlers
  const handleContent = (e: any) => {
    // TODO fix type
    content = e.target.value
  }
  const handleAvatarUrl = (e: any) => {
    avatarUrl = e.target.value
  }
  const handleAddMessage = (e: any) => {
    avatarUrl = e.target.value
    store.update(({ messages, ...rest }) => ({
      messages: [...messages, { id: String(Date.now()), content, avatarUrl }],
      ...rest,
    }))

    content = ''
    avatarUrl = ''
  }
</script>

<!-- Add new message input -->
<div class="border-[1px] border-neutral-200 rounded-md p-4 mt-4 bg-white">
  <div class="flex flex-col">
    <label for="content">Content</label>
    <input
      type="text"
      on:input={handleContent}
      value={content}
      class="border-[1px] rounded-md px-2 py-1"
    />
  </div>

  <div class="flex flex-col">
    <label for="content">Avatar Image Url</label>
    <input
      type="text"
      on:input={handleAvatarUrl}
      value={avatarUrl}
      class="border-[1px] rounded-md px-2 py-1"
    />
  </div>

  <button class="bg-teal-500 text-white rounded-md px-4 py-1 mt-2" on:click={handleAddMessage}
    >Add</button
  >
</div>
