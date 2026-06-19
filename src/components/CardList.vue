<script setup lang="ts">
import CardItem from '@/components/CardItem.vue'

import sneakers1 from '@/assets/sneakers/sneakers-1.jpg'
import sneakers2 from '@/assets/sneakers/sneakers-2.jpg'
import sneakers3 from '@/assets/sneakers/sneakers-3.jpg'
import sneakers4 from '@/assets/sneakers/sneakers-4.jpg'
import sneakers5 from '@/assets/sneakers/sneakers-5.jpg'
import sneakers6 from '@/assets/sneakers/sneakers-6.jpg'
import sneakers7 from '@/assets/sneakers/sneakers-7.jpg'
import sneakers8 from '@/assets/sneakers/sneakers-8.jpg'
import sneakers9 from '@/assets/sneakers/sneakers-9.jpg'
import sneakers10 from '@/assets/sneakers/sneakers-10.jpg'
import sneakers11 from '@/assets/sneakers/sneakers-11.jpg'
import sneakers12 from '@/assets/sneakers/sneakers-12.jpg'

const cards = [
  {
    id: 1,
    isAdded: true,
    imgSrc: sneakers1,
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 12999,
    isFavorite: false,
  },
  {
    id: 2,
    isAdded: false,
    imgSrc: sneakers2,
    title: 'Мужские Кроссовки Nike Air Max 270',
    price: 12999,
    isFavorite: true,
  },
  {
    id: 3,
    isAdded: true,
    imgSrc: sneakers3,
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 8499,
    isFavorite: true,
  },
  {
    id: 4,
    isAdded: false,
    imgSrc: sneakers4,
    title: 'Кроссовки Puma X Aka Boku Future Rider',
    price: 8999,
    isFavorite: false,
  },
  {
    id: 5,
    isAdded: true,
    imgSrc: sneakers5,
    title: 'Мужские Кроссовки Under Armour Curry 8',
    price: 15199,
    isFavorite: false,
  },
  {
    id: 6,
    isAdded: false,
    imgSrc: sneakers6,
    title: 'Мужские Кроссовки Nike Kyrie 7',
    price: 11299,
    isFavorite: true,
  },
  {
    id: 7,
    isAdded: true,
    imgSrc: sneakers7,
    title: 'Мужские Кроссовки Jordan Air Jordan 11',
    price: 10799,
    isFavorite: true,
  },
  {
    id: 8,
    isAdded: false,
    imgSrc: sneakers8,
    title: 'Мужские Кроссовки Nike LeBron XVIII',
    price: 16499,
    isFavorite: false,
  },
  {
    id: 9,
    isAdded: true,
    imgSrc: sneakers9,
    title: 'Мужские Кроссовки Nike Lebron XVIII Low',
    price: 13999,
    isFavorite: false,
  },
  {
    id: 10,
    isAdded: false,
    imgSrc: sneakers10,
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 8499,
    isFavorite: true,
  },
  {
    id: 11,
    isAdded: true,
    imgSrc: sneakers11,
    title: 'Кроссовки Puma X Aka Boku Future Rider',
    price: 8999,
    isFavorite: true,
  },
  {
    id: 12,
    isAdded: false,
    imgSrc: sneakers12,
    title: 'Мужские Кроссовки Nike Kyrie Flytrap IV',
    price: 11299,
    isFavorite: false,
  },
]
</script>

<template>
  <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <CardItem v-for="card in cards" :key="card.id" v-bind="card" />
  </div>
</template>
