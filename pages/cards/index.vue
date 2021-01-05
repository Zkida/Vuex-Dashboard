<template>
  <div v-if="authenticated">
    <div>Cards</div>
  </div>
  <div v-else>login</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      authenticated: 'auth/authenticated',
      user: 'auth/user',
    }),
  },
}
</script>
