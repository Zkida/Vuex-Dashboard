<template>
  <div class="qr-card mb-base">
    <div class="qr-data">
      <div class="meta">
        <div class="qr-name">
          <i class="bx bx-credit-card-front"></i>
          <h3>{{ card.name }}</h3>
        </div>
        <div class="qr-metadata">
          <div class="summary">
            <i class="bx bx-folder-open"></i>
            <p class="text">{{ card.summary }}</p>
          </div>
          <div class="qr-date">
            <i class="bx bx-time"></i>
            <p>Date</p>
          </div>
        </div>
      </div>
      <div class="qr-link">
        <nuxt-link
          class="no-line"
          :to="{ name: 'dashboard-cards-slug', params: { slug: card.uuid } }"
        >
          <i class="bx bx-link-external"></i>
          Vista previa
        </nuxt-link>
      </div>
    </div>
    <div class="qr-code"></div>
    <div class="qr-actions">BUTTON</div>
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
