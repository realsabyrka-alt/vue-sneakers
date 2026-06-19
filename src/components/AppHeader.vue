<script setup lang="ts">
import logoImage from '@/assets/logo.png'
import cartIcon from '@/assets/cart.svg'
import favoritesIcon from '@/assets/heart.svg'
import profileIcon from '@/assets/profile.svg'

const menuItems = [
  {
    icon: cartIcon,
    label: 'Cart',
    href: '/cart',
  },
  {
    icon: favoritesIcon,
    label: 'Favorites',
    href: '/favorites',
  },
  {
    icon: profileIcon,
    label: 'Profile',
    href: '/profile',
  },
]
</script>

<template>
  <header
    class="flex flex-col justify-between items-center gap-5 p-5 border-slate-300 border-b sm:flex-row md:p-10"
  >
    <RouterLink class="flex items-center gap-4 transition hover:scale-105 active:scale-100" to="/">
      <img class="w-10" :src="logoImage" alt="Vue Sneakers Logo" />
      <div>
        <h1 class="text-xl font-bold uppercase">Vue Sneakers</h1>
        <p class="text-sm text-[#9D9D9D]">The Best Sneakers Shop</p>
      </div>
    </RouterLink>
    <nav>
      <ul class="flex items-center gap-5 md:gap-8">
        <li v-for="item in menuItems" :key="item.href">
          <RouterLink
            class="flex items-center gap-2 transition hover:scale-105 active:scale-100"
            :to="item.href"
          >
            <img :src="item.icon" alt="" />
            <span>{{ item.label }}</span>
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
