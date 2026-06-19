<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
</script>

<template>
  <div class="bg-white max-w-270 mx-auto my-10 sm:my-20 rounded-[20px] shadow-xl">
    <AppHeader />
    <main>
      <RouterView />
    </main>
  </div>
</template>
