<template>
  <div w="100%">
    <nav>
      <ul>
        <li>1</li>
      </ul>
    </nav>
  </div>
</template>

<script lang="js">
import AppLogo from '@/components/AppLogo'
import { mapGetters } from 'vuex'
export default {
  computed: {
	 ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  methods: {
		async logout() {
			await this.$auth.logout(/* .... */)
			//this.$router.replace({ name: 'index' })
		}
  }
}
</script>
