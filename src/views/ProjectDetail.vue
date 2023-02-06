<script setup>
  import { ref } from 'vue'
  import { useProjectsStore } from '@/stores/ProjectsStore.js';

  const props = defineProps({
    code: {
      type: String,
      required: true
    }
  })

  const projectStore = useProjectsStore()
  const project = projectStore.getProjectByCode(props.code)
</script>

<template>
  <div>
    <button class="button button--back" @click="$router.back()">
      <svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.625 0.875L0.875 14L14.625 27.125" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <div class="project">
      <img class="project__img project__img--left" :src="project.detailImagesUrl[0]" alt="">
      <div class="project__info">
        <h1 class="project__title">{{ project.name }}</h1>
        <div class="project__tags">
          <div class="project__tag" v-for="tag of project.tags">{{ tag }}</div>
        </div>
        <img class="project__img project__img--full" :src="project.detailImagesUrl[0]" alt="">
        <div class="project__description">
          {{ project.description }}
        </div>
        <div class="project__actions">
          <a v-if="project.githubLink" :href="project.githubLink" class="project__github button" target="_blank">Github</a>
          <a v-if="project.viewLink" :href="project.viewLink" class="project__view button" target="_blank">View</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .project {
    padding: 42px;
    background-color: var(--color_third);
    display: grid;
    grid-template-columns: 40vw 1fr;
    gap: 42px;

    &__img {
      width: 100%;
      height: 22vw;
      object-fit: cover;
      object-position: top;
      cursor: pointer;
      
      &:hover {
        animation: image-scroll 10s infinite;
      }

      &--full {
        display: block;
        margin-bottom: 20px;
        @media (min-width: 993px) {
          display: none;
        }
      }

      &--left {
        @media (max-width: 992px) {
          display: none;
        }
      }

      @media (max-width: 992px) {
        height: 35vw;
      }
    }

    &__title {
      margin-bottom: 18px;
    }

    &__tags {
      display: flex;
      flex-wrap: wrap;
      gap: 12px 20px;
      margin-bottom: 42px;
      @media (max-width: 992px) {
        margin-bottom: 20px;
      }
    }

    &__tag {
      background-color: var(--color_second);
      font-size: 14px;
      color: var(--color_font-gray-dark);
      padding: 2px 20px 3px;
    }

    &__description {
      margin-bottom: 18px;
      font-weight: 300;
    }

    &__actions {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
    }

    @media (max-width: 1400px) {
      grid-template-columns: 30vw 1fr;
    }

    @media (max-width: 992px) {
      grid-template-columns: 1fr;
    }

    @media (max-width: 768px) {
      padding: 20px;
    }
  }
</style>