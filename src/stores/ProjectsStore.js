import { defineStore } from 'pinia'
import * as api from '@/api/projects.js'

export const useProjectsStore = defineStore('projectsStore', {
  state: () => ({
    projects: []
  }),
  getters: {
    getAllProjects() {
      return this.projects
    },
    getProjectById() {
      return (id) => this.projects.find(el => el._id === id)
    },
    getProjectByCode() {
      return (code) => this.projects.find(el => el.code === code)
    }
  },
  actions: {
    loadAllProjectsFromApi() {
      this.projects = api.getAllProjects()
    }
  }
})