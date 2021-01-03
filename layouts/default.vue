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
import {
  CThemeProvider,
  CColorModeProvider,
  CReset,
  CBox,
} from '@chakra-ui/vue'
import AppNav from '@/components/AppNav'
import AppFooter from '@/components/AppFooter'
export default {
  name: 'App',
  components: {
    CThemeProvider,
    CColorModeProvider,
    CReset,
    CBox,
    AppNav,
  },
}
</script>
