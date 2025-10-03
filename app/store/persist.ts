import { defineStore } from 'pinia'

export const usePersistStore = defineStore('persist', {
  persist: true,
  state: () => ({
    count: 0,
  }),
  actions: {
    increment(payload: number = 1) {
      this.count += payload
    },
    decrement(payload: number = 1) {
      this.count -= payload
    },
  },
})
