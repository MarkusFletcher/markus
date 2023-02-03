import { defineStore } from 'pinia'

export const useMainStore = defineStore('mainStore', {
  state: () => ({
    sidebarIsOpen: false
  }),
  getters: {

  },
  actions: {
    toggleSidebar() {
      this.sidebarIsOpen = !this.sidebarIsOpen
    }
  }
})