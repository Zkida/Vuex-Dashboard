<template>
  <div class="card-preview-wrapper">
    <div class="card-preview-inner">
      <div
        class="card-header"
        :style="
          'background:' +
          inputData.header_background +
          '; color: ' +
          inputData.header_text
        "
      >
        <div class="card-image" v-if="inputData.image_url">
          <img :src="inputData.image_url" />
        </div>
        <div class="card-info">
          <div v-if="inputData.first_name.length > 0">
            {{ inputData.first_name }} {{ inputData.last_name }}
          </div>
          <div v-else>Esperando datos...</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    inputData: Object,
  },
}
</script>
