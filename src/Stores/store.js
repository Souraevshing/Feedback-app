import { writable } from 'svelte/store'

export const Store = writable([
  {
    id: 1,
    rating: 9,
    text: 'Java',
  },
  {
    id: 2,
    rating: 3,
    text: 'C',
  },
  {
    id: 3,
    rating: 3,
    text: 'Python',
  },
  {
    id: 4,
    rating: 10,
    text: 'Java',
  },
  {
    id: 5,
    rating: 10,
    text: 'MERN STACK',
  },
])
