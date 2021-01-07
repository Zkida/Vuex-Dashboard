<template>
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
        <c-badge rounded="full" px="2" variant-color="green"> </c-badge>
        <c-box
          color="gray.500"
          font-weight="semibold"
          letter-spacing="wide"
          font-size="xs"
          text-transform="uppercase"
          ml="2"
        >
        </c-box>
      </c-box>
      <c-box
        mt="1"
        font-weight="semibold"
        as="h4"
        line-height="tight"
        is-truncated
      >
      </c-box>
      <c-box>
        <c-box as="span" color="gray.600" fontSize="sm"> </c-box>
      </c-box>
      <c-box d="flex" mt="2" align-items="center">
        <c-box as="span" ml="2" color="gray.600" font-size="sm"> </c-box>
      </c-box>
    </c-box>
  </c-box>
</template>
