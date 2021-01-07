<template>
  <div v-chakra my="5rem">
    <template>
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
        <app-card-skeleton />
        <app-card-skeleton />
        <app-card-skeleton />
        <app-card-skeleton />
        <app-card-skeleton />
        <app-card-skeleton />
      </c-grid>
    </template>
  </div>
</template>

<script>
import AppCardSkeleton from '@/components/AppCardSkeleton'
export default {}
</script>
