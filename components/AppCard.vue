<template>
  <div
    class="shadow"
    maxW="sm"
    border-width="1px"
    rounded="lg"
    overflow="hidden"
  >
    <!-- <c-image :src="property.imageUrl" :alt="property.imageAlt" /> -->
    <div py="10">
      <div
        d="flex"
        alignItems="center"
        justifyContent="center"
        flex-direction="column"
      >
        <c-avatar size="2xl" src="https://bit.ly/chakra-evan-you" />
        <div
          mt="3"
          color="gray.500"
          font-weight="semibold"
          letter-spacing="wide"
          font-size="xs"
          text-transform="uppercase"
        >
          {{ card.first_name }}
        </div>
        <div
          textAlign="center"
          mt="1"
          font-weight="semibold"
          as="h4"
          line-height="tight"
          is-truncated
        >
          {{ card.name }}
        </div>
        <div textAlign="center">
          {{ card.email }}
        </div>
        <div d="flex"
          ><c-link
            color="indigo.400"
            href="https://vue.chakra-ui.com"
            is-external
          >
            Descargar QR
          </c-link></div
        >
      </div>
    </div>
    <div
      d="flex"
      borderTop="1px"
      borderColor="gray.200"
      alignItems="center"
      justifyContent="center"
    >
      <div p="5" w="50%" textAlign="center">
        <nuxt-link
          class="card-link"
          
          w="100%"
          :to="{ name: 'cards-slug', params: { slug: card.uuid } }"
          ><div d="flex" alignItems="center" justifyContent="center"
            ><svg
              
              w="5"
              mr="2"
              color="gray.400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              /></svg
            ><div color="gray.800">Vista Previa</div></div
          ></nuxt-link
        >
      </div>
      <div w="1px" h="65px" bg="gray.200"></div>
      <div p="5" w="50%" textAlign="center">
        <nuxt-link
          class="card-link"
          
          w="100%"
          :to="{ name: 'cards-slug', params: { slug: card.uuid } }"
          ><div d="flex" alignItems="center" justifyContent="center"
            ><svg
              
              w="5"
              mr="2"
              color="gray.400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              /></svg
            ><div color="gray.800">Editar</div></div
          ></nuxt-link
        >
      </div>
    </div>
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
