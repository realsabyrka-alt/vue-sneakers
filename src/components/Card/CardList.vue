<script setup lang="ts">
import CardItem from '@/components/Card/CardItem.vue'

interface Props {
  cards: Card[]
}

defineProps<Props>()

defineEmits<{
  (e: 'addToFavorite', product: Product): void
  (e: 'addToCart', product: Product): void
}>()
</script>

<template>
  <ul class="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <li v-for="card in cards" :key="card.id">
      <CardItem
        v-bind="card"
        @add-favorite="$emit('addToFavorite', card)"
        @add-to-cart="$emit('addToCart', card)"
      />
    </li>
  </ul>
</template>
