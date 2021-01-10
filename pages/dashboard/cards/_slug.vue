<template>
  <div v-if="$fetchState.pending">
    <app-card-skeleton />
  </div>
  <p v-else-if="$fetchState.error">An error occurred :(</p>
  <div v-else>
    <div>
      <div>{{ card }}</div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'main',
  data() {
    return {
      card: {},
    }
  },
  async fetch() {
    this.card = await this.$axios
      .get(`api/cards/${this.$route.params.slug}`)
      .then((res) => res.data)
      .catch((e) => {
        //console.log(e.response)
        //this.status = e.response.status
      })
  },
  mounted() {
    this.$fetch()
  },
}
</script>
