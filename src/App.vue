<script setup>
import { onMounted } from 'vue'
import { useProjectsStore } from '@/stores/ProjectsStore.js'

import VSidebar from '@/components/layout/Sidebar.vue'

const projectsStore = useProjectsStore()

onMounted(() => {
  projectsStore.loadAllProjectsFromApi()
})
</script>

<template>
  <div class="wrap">
    <v-sidebar></v-sidebar>
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .wrap {
    height: 100vh;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 100%;
    background-image: url('@/assets/images/background_2.jpg');
    background-size: cover;
    overflow-x: hidden;
  }
  
  .view {
    height: 100vh;
    padding: 42px 80px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: thin;
    scrollbar-color: var(--color_second) var(--color_prime);
    @media (max-width: 768px) {
      padding: 20px 42px;
    }
    @media (max-width: 576px) {
      padding: 20px;
    }
  }

  .view::-webkit-scrollbar {
    width: 8px;
    
  }
  .view::-webkit-scrollbar-track {
    background-color: var(--color_prime);
  }
  .view::-webkit-scrollbar-thumb {
    background: var(--color_second);
  }
</style>
