<script setup>
import { onMounted } from 'vue'
import ProjectCard from '@/components/ProjectCard.vue'
import { useProjectsStore } from '@/stores/ProjectsStore.js'

const projectsStore = useProjectsStore()

const projects = [...projectsStore.getAllProjects].reverse()

</script>

<template>
  <div class="projects">
    <div class="projects__title frame frame--title">
      <h1>Projects</h1>
    </div>
    <div class="projects__grid">
      <project-card
        v-for="project of projects"
        :key="project._id"
        :title="project.name"
        :code="project.code"
        :imgUrl="project.previewImageUrl">
      </project-card>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .projects {
    &__title {
    }

    &__grid {
      --columns: 4;
      display: grid;
      grid-template-columns: repeat(var(--columns), 1fr);
      @media (max-width: 1400px) {
        --columns: 3;
      }
      @media (max-width: 992px) {
        --columns: 2;
      }
      @media (max-width: 768px) {
        --columns: 1;
      }
      gap: 42px;
    }
  }
</style>