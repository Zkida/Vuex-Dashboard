<template>
  <c-box
    class="shadow"
    maxW="sm"
    border-width="1px"
    rounded="lg"
    overflow="hidden"
  >
    <c-box py="10">
      <c-box
        d="flex"
        alignItems="center"
        justifyContent="center"
        flex-direction="column"
      >
        <c-box>
          <svg
            v-chakra
            w="100px"
            h="100px"
            color="gray.200"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </c-box>
        <c-box
          mt="5"
          w="70%"
          color="gray.500"
          font-weight="semibold"
          letter-spacing="wide"
          font-size="xs"
          text-transform="uppercase"
        >
          <c-box mx="auto" my="2" w="60%" h="15px" bg="gray.200"></c-box>
          <c-box mx="auto" my="2" w="40%" h="15px" bg="gray.200"></c-box>
          <c-box mx="auto" my="2" w="56%" h="15px" bg="gray.200"></c-box>
        </c-box>
      </c-box>
    </c-box>
    <c-box
      d="flex"
      borderTop="1px"
      borderColor="gray.200"
      alignItems="center"
      justifyContent="center"
    >
      <c-box p="5" w="50%" textAlign="center">
        <c-box px="5"><c-box h="20px" bg="gray.200"></c-box></c-box>
      </c-box>
      <c-box w="1px" h="65px" bg="gray.200"></c-box>
      <c-box p="5" w="50%" textAlign="center">
        <c-box px="5"><c-box h="20px" bg="gray.200"></c-box></c-box>
      </c-box>
    </c-box>
  </c-box>
</template>
