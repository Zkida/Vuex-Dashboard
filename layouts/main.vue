<template>
  <div class="layout--main">
    <v-nav-menu :activeSidebar="activeSidebar" />
    <div id="content-area" :class="{ 'content-area-reduced': activeSidebar }">
      <div class="content-wrapper">
        <horizontal-nav-menu />
        <div class="router-view">
          <div class="router-content">
            <Nuxt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VNavMenu from '@/layouts/components/vertical-nav-menu/VerticalNavMenu'
import HorizontalNavMenu from './components/horizontal-nav-menu/HorizontalNavMenu.vue'
import { mapGetters } from 'vuex'
export default {
  components: { HorizontalNavMenu, VNavMenu },
  mounted() {
    {
      const vh = window.innerHeight * 0.01
      // Then we set the value in the --vh custom property to the root of the document
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }
  },
  computed: {
    ...mapGetters({
      activeSidebar: 'layout/activeSidebar',
    }),
  },
}
</script>
