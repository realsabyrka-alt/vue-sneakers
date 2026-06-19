<script setup lang="ts">
import axios from 'axios'
import { onMounted, ref, watch } from 'vue'
import CatalogHeader from '@/components/Catalog/CatalogHeader.vue'
import CardList from '@/components/Card/CardList.vue'

const cards = ref<Product[]>([])
const filters = ref({
  sortBy: '',
  searchQuery: '',
})

const onSelectChange = (event: Event) => {
  const target = event.currentTarget as HTMLSelectElement
  filters.value.sortBy = target.value
}

const onInputChange = (event: Event) => {
  const target = event.currentTarget as HTMLInputElement
  filters.value.searchQuery = target.value
}

const addToFavorite = async (product: Product) => {
  product.isFavorite = !product.isFavorite
}

const addToCart = async (product: Product) => {
  product.isAdded = !product.isAdded
}

const projectId = 'bef1d60d243fce1a'
const URL = `https://${projectId}.mokky.dev`

const fetchFavorites = async () => {
  try {
    const { data: favorites } = await axios.get<FavoriteProduct[]>(`${URL}/favorites`)
    cards.value = cards.value.map((card) => {
      const favorite = favorites.find((favorite) => favorite.productId === card.id)

      if (!favorite) {
        return card
      }

      return {
        ...card,
        isFavorite: true,
        favoriteId: favorite.id,
      }
    })
  } catch (error) {
    console.error('Failed to fetch products:', error)
  }
}

const fetchProducts = async () => {
  try {
    const params: Record<string, string> = {}

    if (filters.value.sortBy) {
      params.sortBy = filters.value.sortBy
    }

    if (filters.value.searchQuery) {
      params.title = `*${filters.value.searchQuery}*`
    }

    const { data } = await axios.get<Product[]>(`${URL}/cards`, { params })
    cards.value = data.map((card) => ({
      ...card,
      isAdded: false,
      isFavorite: false,
    }))
  } catch (error) {
    console.error('Failed to fetch products:', error)
  }
}

onMounted(async () => {
  await fetchProducts()
  await fetchFavorites()
})

watch(
  filters,
  async () => {
    await fetchProducts()
    await fetchFavorites()
  },
  { deep: true },
)
</script>

<template>
  <section class="flex flex-col gap-5 p-5 md:p-10">
    <CatalogHeader @change-sort="onSelectChange" @change-search="onInputChange" />
    <CardList :cards="cards" @add-to-favorite="addToFavorite" @add-to-cart="addToCart" />
  </section>
</template>
