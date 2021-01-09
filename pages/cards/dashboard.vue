<template>
  <div>
    <div v-if="$fetchState.pending">
      <app-cards-skeleton />
    </div>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else>
      <template v-if="cards.length">
        <div>
          <app-card v-for="card in cards" :key="card.uuid" :card="card" />
        </div>
      </template>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import AppCardSkeleton from '@/components/AppCardSkeleton'
import AppCard from '@/components/AppCard'
export default {
  middleware: 'auth',
  components: {
    AppCard,
  },
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
