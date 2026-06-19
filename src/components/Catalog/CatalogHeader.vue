<script setup lang="ts">
import CatalogControls from '@/components/Catalog/CatalogControls.vue'

defineEmits<{
  (e: 'changeSort', event: Event): void
  (e: 'changeSearch', event: Event): void
}>()
</script>

<template>
  <header class="flex gap-4 flex-col sm:justify-between sm:items-center md:flex-row">
    <h2 class="font-bold text-3xl text-center">Все кроссовки</h2>
    <CatalogControls
      @change-sort="$emit('changeSort', $event)"
      @change-search="$emit('changeSearch', $event)"
    />
  </header>
</template>
