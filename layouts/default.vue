<template>
  <div class="container">
    <CThemeProvider>
      <CColorModeProvider>
        <CBox font-family="body">
          <CReset />
          <app-nav />
          <CBox as="main">
            <Nuxt />
          </CBox>
          <app-footer />
        </CBox>
      </CColorModeProvider>
    </CThemeProvider>
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
