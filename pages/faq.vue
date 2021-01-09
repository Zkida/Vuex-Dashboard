<template>
  <div>
    <app-cards-skeleton />
  </div>
</template>
<script>
import AppCardsSkeleton from '@/components/AppCardsSkeleton'

export default {
  components: { AppCardsSkeleton },
  auth: false,
}
</script>
