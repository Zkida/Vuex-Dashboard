<template>
  <div>{{ loggedInUser }}</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  layout: 'main',
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
  },
}
</script>
