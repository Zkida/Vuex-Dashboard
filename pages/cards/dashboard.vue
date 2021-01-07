<template>
  <div v-chakra my="5rem">
    <div v-if="$fetchState.pending">
      <app-cards-skeleton />
    </div>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else>
      <template v-if="cards.length">
        <c-grid
          w="100%"
          :template-columns="[
            'repeat(3, 1fr)',
            'repeat(2, 1fr)',
            'repeat(2, 1fr)',
            'repeat(3, 1fr)',
          ]"
          gap="6"
        >
          <app-card v-for="card in cards" :key="card.uuid" :card="card" />
        </c-grid>
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
