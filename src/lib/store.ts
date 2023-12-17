import { writable, type Writable } from 'svelte/store'
import type { Message } from '../types/Mesasge'

interface Store {
  messages: Message[]
  messageDisplayIndex: number
  // theme: "discord" | "line"
}

const intialStore: Store = {
  messages: [
    {
      id: '1',
      content: 'foo',
      avatarUrl: 'https://avatars.githubusercontent.com/u/499270?v=4',
    },
    {
      id: '3',
      content: 'baz',
      avatarUrl: 'https://avatars.githubusercontent.com/u/499270?v=4',
    },
    {
      id: '2',
      content: 'bar',
      avatarUrl: 'https://avatars.githubusercontent.com/u/499270?v=4',
    },
    {
      id: '4',
      content: 'foo',
      avatarUrl: 'https://avatars.githubusercontent.com/u/499270?v=4',
    },
    {
      id: '5',
      content: 'baz',
      avatarUrl: 'https://avatars.githubusercontent.com/u/499270?v=4',
    },
    {
      id: '6',
      content: 'bar',
      avatarUrl: 'https://avatars.githubusercontent.com/u/499270?v=4',
    },
    {
      id: '7',
      content: 'foo',
      avatarUrl: 'https://avatars.githubusercontent.com/u/499270?v=4',
    },
    {
      id: '8',
      content: 'baz',
      avatarUrl: 'https://avatars.githubusercontent.com/u/499270?v=4',
    },
    {
      id: '9',
      content: 'bar',
      avatarUrl: 'https://avatars.githubusercontent.com/u/499270?v=4',
    },
  ],
  messageDisplayIndex: 0,
}

// export const theme = writable("light");
export const store: Writable<Store> = writable(intialStore)
