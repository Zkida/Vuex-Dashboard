<template>
  <div v-chakra my="5rem">
    <div>Cards</div>
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
    <div v-else>NO DATA</div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
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
  mounted() {
    this.getCardsAction()
  },
}
</script>
