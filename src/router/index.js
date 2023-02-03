import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Projects from '@/views/Projects.vue'
import ProjectDetail from '@/views/ProjectDetail.vue'

const router = new createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects,
    },
    {
      path: '/projects/:id/:code',
      name: 'ProjectDetail',
      component: ProjectDetail,
      props: true
    }
  ]
})

export default router