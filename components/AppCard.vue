<template>
  <div class="qr-card mb-base">
    <vs-card>
      <template #title>
        <h3>{{ card.name }}</h3>
      </template>
      <template #img>
        <img src="https://vuesax.com/foto5.png" alt="" />
      </template>
      <template #text>
        <p>{{ card.summary }}</p>
      </template>
      <template #interactions>
        <nuxt-link
          class="no-line"
          :to="{ name: 'dashboard-cards-slug', params: { slug: card.uuid } }"
        >
          <vs-button warn gradient icon>
            <i class="bx bxs-edit"></i>
          </vs-button>
        </nuxt-link>
        <vs-button shadow icon>
          <i class="bx bx-link-external"></i>
        </vs-button>
      </template>
    </vs-card>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      required: true,
      type: Object,
    },
  },
}
</script>
