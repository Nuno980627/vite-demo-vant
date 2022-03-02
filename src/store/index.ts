import { defineStore } from 'pinia'

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useStore = defineStore('main', {
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      counter: 1,
      name: 'Eduardo',
      isAdmin: 'ok',
      user: [
        {
          id: 1,
        },
        {
          id: 2,
        },
      ],
      actionMode: '',
    }
  },
  getters: {
    doubleCountArrow: (state) => state.counter * 2,
    doubleCount(state): number {
      //可以使用state 访问状态也可以用this
      return state.counter * 2
    },
    doubleCountPlusOne(): number {
      // autocompletion 用this访问其他getter
      return this.doubleCount + 1
    },
    getUserById: (state) => {
      // getter accept a argument
      return (userId: number) => state.user.find((user) => user.id === userId)
    },
  },
  actions: {
    increment() {
      this.counter++
    },
    randomizeCounter(countNumber: number) {
      this.counter = countNumber
    },
    setAction(info: string) {
      this.actionMode = info
    },
  },
})
