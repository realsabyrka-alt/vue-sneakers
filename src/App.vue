<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
</script>

<template>
  <div class="bg-white w-11/12 h-screen mx-auto my-20 rounded-xl shadow-xl 2xl:w-4/5">
    <AppHeader />
    <main>
      <RouterView />
    </main>
  </div>
</template>
