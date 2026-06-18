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
  <header>
    <RouterLink to="/">
      <img :src="logoImage" alt="Vue Sneakers Logo" />
      <div>
        <h1>Vue Sneakers</h1>
        <p>The Best Sneakers Shop</p>
      </div>
    </RouterLink>
    <nav>
      <ul>
        <li v-for="item in menuItems" :key="item.href">
          <RouterLink :to="item.href">
            <img :src="item.icon" alt="" />
            <span>{{ item.label }}</span>
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
