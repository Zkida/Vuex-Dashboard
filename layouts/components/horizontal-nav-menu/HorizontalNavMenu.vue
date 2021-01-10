<template>
  <div class="relative">
    <div class="navbar-wrapper">
      <div class="nav">
        <div class="nav-left">
          <vs-button icon dark shadow @click="toggleSidebar">
            <i class="bx bx-menu"></i>
          </vs-button>
        </div>
        <div class="nav-right flex">
          <div class="user-email">Hola! {{ loggedInUser.email }}</div>
          <vs-button
            style="min-width: 60px"
            primary
            animation-type="scale"
            @click="logout"
          >
            <i class="bx bx-exit"></i>
            <template #animate> Salir </template>
          </vs-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data: () => ({
    activeSidebar: true,
  }),
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
  },
  methods: {
    ...mapActions({
      setActiveSideBar: 'layout/setActiveSideBar',
    }),
    toggleSidebar() {
      this.activeSidebar = !this.activeSidebar
      this.setActiveSideBar(this.activeSidebar)
    },
    async logout() {
      await this.$auth.logout(/* .... */)
      //this.$router.replace({ name: 'index' })
    },
  },
}
</script>
