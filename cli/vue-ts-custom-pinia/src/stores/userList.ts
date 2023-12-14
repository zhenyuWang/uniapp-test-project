import { defineStore } from '../../lib/pinia'

export const useUserListStore = defineStore('userList', {
  state: () => ({
    users: [],
  }),
  getters: {
    userNameList: (state) => state.users.map((user: { id: number, name: string }) => user.name),
    findUserById: (state) => (id: number) => state.users.find((user: { id: number, name: string }) => user.id === id),
  },
  actions: {
    push(name: string) {
      this.users.push({
        id: this.users.length + 1,
        name,
      })
    },
    remove(id: number) {
      const index = this.users.findIndex((user: { id: number, name: string }) => user.id === id)
      this.users.splice(index, 1)
    },
    clear() {
      this.users = []
    },
  },
})
