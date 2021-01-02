<template>
  <c-flex w="100%">
    <nav
      v-chakra
      w="100%"
      maxW="1200px"
      mx="auto"
      display="flex"
      alignItems="center"
      justify-content="space-between"
      class="site-nav"
    >
      <div class="app-logo">
        <app-logo />
      </div>
      <div class="nav-links">
        <ul v-chakra display="flex" alignItems="center">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Cómo funciona</a></li>
          <li><a class="primary-button" href="#">Iniciar sesión</a></li>
        </ul>
      </div>
    </nav>
  </c-flex>
</template>

<script lang="js">
import {
 CFlex,
 CBox
} from '@chakra-ui/vue';
import AppLogo from '@/components/AppLogo'

export default {
  name: 'App'
}
</script>
