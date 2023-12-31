import { writable, type Writable } from 'svelte/store'
import type { Message } from '../types/Mesasge'

interface Store {
  messages: Message[]
  messageDisplayIndex: number
  // theme: "discord" | "line"
}

const luffy = 'https://avatarfiles.alphacoders.com/844/84463.jpg'
const zoro =
  'data:image/jpeg;base64,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'
const usopp = 'https://i.pinimg.com/736x/e7/cc/4a/e7cc4a4f60632eea049445c24fa3be8a.jpg'
const intialStore: Store = {
  messages: [
    {
      id: '1',
      content: 'foo',
      avatarUrl: luffy,
    },
    {
      id: '3',
      content: 'baz',
      avatarUrl: zoro,
    },
    {
      id: '2',
      content: 'bar',
      avatarUrl: usopp,
    },
    {
      id: '4',
      content: 'foo',
      avatarUrl: luffy,
    },
    {
      id: '5',
      content: 'baz',
      avatarUrl: zoro,
    },
    {
      id: '6',
      content: 'bar',
      avatarUrl: usopp,
    },
    {
      id: '7',
      content: 'foo',
      avatarUrl: luffy,
    },
    {
      id: '8',
      content: 'baz',
      avatarUrl: zoro,
    },
    {
      id: '9',
      content: 'bar',
      avatarUrl: usopp,
    },
  ],
  messageDisplayIndex: 0,
}

// export const theme = writable("light");
export const store: Writable<Store> = writable(intialStore)
