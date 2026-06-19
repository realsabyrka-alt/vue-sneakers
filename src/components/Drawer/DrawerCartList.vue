<script setup lang="ts">
import DrawerCartItem from '@/components/Drawer/DrawerCartItem.vue'
import sneakers1 from '../../../public/sneakers/sneakers-1.jpg'
import sneakers2 from '../../../public/sneakers/sneakers-2.jpg'

const carts = [
  {
    id: 1,
    imgSrc: sneakers1,
    title: 'Мужские Кроссовки Nike Air Max 270',
    price: 12999,
  },
  {
    id: 2,
    imgSrc: sneakers2,
    title: 'Мужские Кроссовки Nike Air Max 270',
    price: 8499,
  },
  {
    id: 1,
    imgSrc: sneakers1,
    title: 'Мужские Кроссовки Nike Air Max 270',
    price: 12999,
  },
  {
    id: 2,
    imgSrc: sneakers2,
    title: 'Мужские Кроссовки Nike Air Max 270',
    price: 8499,
  },
  {
    id: 1,
    imgSrc: sneakers1,
    title: 'Мужские Кроссовки Nike Air Max 270',
    price: 12999,
  },
  {
    id: 2,
    imgSrc: sneakers2,
    title: 'Мужские Кроссовки Nike Air Max 270',
    price: 8499,
  },
  {
    id: 1,
    imgSrc: sneakers1,
    title: 'Мужские Кроссовки Nike Air Max 270',
    price: 12999,
  },
  {
    id: 2,
    imgSrc: sneakers2,
    title: 'Мужские Кроссовки Nike Air Max 270',
    price: 8499,
  },
  {
    id: 1,
    imgSrc: sneakers1,
    title: 'Мужские Кроссовки Nike Air Max 270',
    price: 12999,
  },
  {
    id: 2,
    imgSrc: sneakers2,
    title: 'Мужские Кроссовки Nike Air Max 270',
    price: 8499,
  },
]
</script>

<template>
  <ul class="grow overflow-auto flex flex-col gap-5 px-7">
    <li v-for="cart in carts" :key="cart.id">
      <DrawerCartItem v-bind="cart" />
    </li>
  </ul>
</template>
