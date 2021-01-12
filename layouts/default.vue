<template>
  <div class="container">
    <div font-family="body">
      <app-nav />
      <div as="main">
        <Nuxt />
      </div>
      <app-footer />
    </div>
  </div>
</template>
<script>
import AppNav from '@/components/AppNav'
import AppFooter from '@/components/AppFooter'
export default {
  name: 'App',
  components: {},
}
</script>
