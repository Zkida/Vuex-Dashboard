<template>
  <c-flex w="100%">
    <nav
      v-chakra
      px="4"
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
          <li v-if="!authenticated">
            <nuxt-link to="/login" class="primary-button"
              >Iniciar sesión</nuxt-link
            >
          </li>
          <li v-if="authenticated">
            <c-menu>
              <c-menu-button fontWeight="400" right-icon="chevron-down">
                {{ user.email }}
              </c-menu-button>
              <c-menu-list>
                <c-menu-item>
                  <c-box
                    ><svg
                      v-chakra
                      w="20px"
                      color="indigo.200"
                      mr="15px"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                      /></svg
                  ></c-box>
                  Mis tarjetas</c-menu-item
                >
                <c-menu-item as="a" href="#" @click.prevent="logout"
                  ><c-box>
                    <svg
                      v-chakra
                      w="20px"
                      color="indigo.200"
                      mr="15px"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                  </c-box>
                  Cerrar sesión
                </c-menu-item>
              </c-menu-list>
            </c-menu>
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
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'App',
  computed: {
	  ...mapGetters({
		  authenticated: 'auth/authenticated',
		  user: 'auth/user',
	  })
  },
  methods: {
	  ...mapActions({
			logoutAction: 'auth/logout'
		}),
		async logout() {
			await this.logoutAction()
			this.$router.replace({ name: 'index' })
		}
  }
}
</script>
