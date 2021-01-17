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
    <div class="qr-code">
      <qrcode-vue
        :value="baseURL + card.uuid"
        size="120"
        level="H"
      ></qrcode-vue>
    </div>
    <div class="qr-actions">
      <vs-button flat block square> Descargar </vs-button>
      <div class="actions-wrapper">
        <nuxt-link
          :to="{ name: 'dashboard-cards-slug', params: { slug: card.uuid } }"
          ><i class="bx bx-edit"></i
        ></nuxt-link>

        <vs-button size="small" icon color="danger" border
          ><i class="bx bxs-trash"></i
        ></vs-button>
      </div>
    </div>
  </div>
</template>

<script>
import QrcodeVue from 'qrcode.vue'
export default {
  props: {
    card: {
      required: true,
      type: Object,
    },
  },
  data() {
    return {
      baseURL: 'http://localhost:300/public/',
    }
  },
  components: {
    QrcodeVue,
  },
}
</script>
