<template>
  <div>
    <div v-if="$fetchState.pending" class="flex text-gray">
      Cargando datos...
    </div>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else>
      <template v-if="cards.length">
        <div class="grid">
          <vs-row class="grid-row">
            <vs-col
              sm="6"
              lg="4"
              v-for="card in cards"
              :key="card.uuid"
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              w="12"
            >
              <app-card :card="card" />
            </vs-col>
          </vs-row>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  layout: 'main',
  middleware: 'auth',
  computed: {
    ...mapGetters({
      cards: 'cards/cards',
    }),
  },
  methods: {
    ...mapActions({
      getCardsAction: 'cards/getCards',
    }),
  },
  async fetch() {
    await this.getCardsAction()
  },
  mounted() {
    this.$fetch()
  },
}
</script>
