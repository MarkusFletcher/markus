<script setup>
import { useMainStore } from '@/stores/MainStore'

const mainStore = useMainStore()
</script>

<template>
  <aside class="sidebar">
    <button class="sidebar__toggle" @click="mainStore.toggleSidebar">
      <img src="@/assets/icons/sidebar.svg" alt="">
    </button>
    <nav class="sidebar__menu menu" :class="{'menu--open': mainStore.sidebarIsOpen}">
      <router-link class="menu__link" to="/">
        <div class="menu__icon">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.8501 10.9202C3.8501 9.99964 4.30261 9.13787 5.06045 8.61523L14.0001 2.44995L22.9397 8.61523C23.6976 9.13787 24.1501 9.99964 24.1501 10.9202V22.7499C24.1501 24.2963 22.8965 25.5499 21.3501 25.5499H6.6501C5.1037 25.5499 3.8501 24.2963 3.8501 22.7499V10.9202Z" stroke="white" stroke-linejoin="round"/>
            <path d="M10.8501 17.8499C10.8501 17.0768 11.4769 16.4499 12.2501 16.4499H15.7501C16.5233 16.4499 17.1501 17.0768 17.1501 17.8499V25.5499H10.8501V17.8499Z" stroke="white" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="menu__label">Home</div>
      </router-link>
      <router-link class="menu__link" to="/projects">
        <div class="menu__icon">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.4502 16.4501V22.7501C2.4502 24.2965 3.70381 25.5501 5.2502 25.5501H22.7502C24.2966 25.5501 25.5502 24.2965 25.5502 22.7501V16.4501M2.4502 16.4501L2.4502 6.9302C2.45019 5.36205 2.45019 4.57798 2.75538 3.97902C3.02382 3.45217 3.45217 3.02382 3.97902 2.75538C4.57797 2.45019 5.36205 2.45019 6.9302 2.4502L21.0702 2.4502C22.6384 2.4502 23.4224 2.4502 24.0214 2.75539C24.5482 3.02383 24.9766 3.45218 25.245 3.97903C25.5502 4.57798 25.5502 5.36206 25.5502 6.9302V16.4501M2.4502 16.4501H6.31971C7.38027 16.4501 8.34981 17.0493 8.8241 17.9979L9.0263 18.4023C9.5006 19.3508 10.4701 19.9501 11.5307 19.9501H16.4697C17.5303 19.9501 18.4998 19.3508 18.9741 18.4023L19.1763 17.9979C19.6506 17.0493 20.6201 16.4501 21.6807 16.4501H25.5502" stroke="white" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="menu__label">Projects</div>
      </router-link>
      <router-link class="menu__link" to="/contacts">
        <div class="menu__icon">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.5502 8.05V19.95C25.5502 21.4964 24.2966 22.75 22.7502 22.75H5.2502C3.7038 22.75 2.4502 21.4964 2.4502 19.95V8.05M25.5502 8.05C25.5502 6.5036 24.2966 5.25 22.7502 5.25H5.2502C3.7038 5.25 2.4502 6.5036 2.4502 8.05M25.5502 8.05L14.0002 14.7L2.4502 8.05" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="menu__label">Contacts</div>
      </router-link>
    </nav>
  </aside>
</template>

<style lang="scss" scoped>
  .sidebar {
    background-color: var(--color_glass-black);
    backdrop-filter: blur(10px);
    position: relative;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 80px;
      background-color: var(--color_prime);
      z-index: -1;
    }

    &__toggle {
      background-color: transparent;
      border: none;
      padding: 20px 16px;
      cursor: pointer;
      margin-bottom: 20px;

      img {
        width: 48px;
      }
    }

    
  }
  .menu {
    &__link {
      display: grid;
      grid-template-columns: 80px 0;
      transition: .3s;
      animation: closing-link .3s;

      &:hover {
        background-color: var(--color_second);
        color: var(--color_font-black);
      }
      &:hover svg path {
        stroke: var(--color_font-black);
      }
    }
    
    &__icon {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 56px;
    }
    
    &__label {
      transition: margin-left .3s;
      margin-left: -300px;

      display: flex;
      align-items: center;
      padding-left: 40px;
      font-size: 24px;
      font-weight: 200;
      min-width: 240px;
    }

    &--open {
      .menu__link {
        grid-template-columns: 80px auto;
        animation: opening-link .3s;
      }
      .menu__label {
        margin-left: 0;
      }
    }
  }

  svg,
  svg path {
    transition: .3s;
  }

  @keyframes opening-link {
    from {color: transparent}
    50% {color: transparent}
    to {color: inherit}
  }
  @keyframes closing-link {
    from {color: inherit}
    20% {color: transparent}
    to {color: transparent}
  }
</style>