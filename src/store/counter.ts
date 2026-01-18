// @ts-nocheck
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  // 状态
  state: () => ({
    count: 0,
    name: '用户'
  }),

  // Getters
  getters: {
    doubleCount: (state) => state.count * 2,
    greeting: (state) => `Hello, ${state.name}!`
  },

  // 操作
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
    setName(newName) {
      this.name = newName
    }
  }
})