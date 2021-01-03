<template>
  <c-flex w="100%">
    <nav
      v-chakra
      display="flex"
      alignItems="center"
      justify-content="space-between"
      class="site-nav container"
    >
      <div class="app-logo">
        <app-logo />
      </div>
      <div class="nav-links">
        <ul v-chakra display="flex" alignItems="center">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Cómo funciona</a></li>
          <li>
            <nuxt-link to="/login" class="primary-button"
              >Iniciar sesión</nuxt-link
            >
          </li>
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
