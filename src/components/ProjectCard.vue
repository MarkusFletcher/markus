<script setup>
  const props = defineProps({
    title: {
      type: String,
      required: true
    },
    imgUrl: {
      type: String,
      default: '/src/assets/images/placeholder.jpg'
    },
    id: {
      type: Number,
      required: true
    },
    code: {
      type: String,
      required: true
    }
  })
</script>

<template>
  <router-link
    :to="{
      name: 'ProjectDetail',
      params: {
        code: props.code,
        id: props.id
      }
    }"
    class="project frame">
    <div class="project__img-wrap">
      <img class="project__img" :src="imgUrl" alt="">
    </div>
    <div class="project__title">{{ props.title }}</div>
  </router-link>
</template>

<style lang="scss" scoped>
  .project {
    display: block;
    // max-width: 330px;
    width: 100%;

    &__img-wrap {
      height: 196px;
      height: 12vw;
      @media (max-width: 1400px) {
        height: 15vw;
      }
      @media (max-width: 992px) {
        height: 20vw;
      }
      @media (max-width: 768px) {
        height: 42vw;
      }
    }

    &__img {
      width: calc(100% - 42px);
      height: calc(100% - 40px);
      margin: 20px 0 20px 42px;
      object-fit: cover;
      transition: .3s;
      object-position: top;
    }

    &__title {
      background-color: var(--color_prime);
      padding: 12px 42px;
      font-size: 24px;
      font-weight: 200;
    }

    &:hover,
    &:focus {
      .project__img {
        margin: 0;
        height: 100%;
        width: 100%;
        animation: image-scroll 7s infinite;
        // animation-delay: .3s;
      }
    }
  }
</style>