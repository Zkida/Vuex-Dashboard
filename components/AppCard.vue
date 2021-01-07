<template>
  <nuxt-link :to="{ name: 'cards-slug', params: { slug: card.uuid } }">
    <c-box
      class="shadow"
      maxW="sm"
      border-width="1px"
      rounded="lg"
      overflow="hidden"
    >
      <!-- <c-image :src="property.imageUrl" :alt="property.imageAlt" /> -->
      <c-box p="6">
        <c-box d="flex" align-items="baseline">
          <c-badge rounded="full" px="2" variant-color="green"> New </c-badge>
          <c-box
            color="gray.500"
            font-weight="semibold"
            letter-spacing="wide"
            font-size="xs"
            text-transform="uppercase"
            ml="2"
          >
            {{ card.first_name }}
          </c-box>
        </c-box>
        <c-box
          mt="1"
          font-weight="semibold"
          as="h4"
          line-height="tight"
          is-truncated
        >
          {{ card.name }}
        </c-box>
        <c-box>
          {{ card.email }}
          <c-box as="span" color="gray.600" fontSize="sm"> / wk </c-box>
        </c-box>
        <c-box d="flex" mt="2" align-items="center">
          <c-box as="span" ml="2" color="gray.600" font-size="sm">
            {{ card.name }} reviews
          </c-box>
        </c-box>
      </c-box>
    </c-box>
  </nuxt-link>
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
