<script setup lang="ts">
import DrawerHead from '@/components/Drawer/DrawerHead.vue'
import DrawerCartList from '@/components/Drawer/DrawerCartList.vue'
import DrawerFoot from '@/components/Drawer/DrawerFoot.vue'
</script>

<template>
  <div class="fixed top-0 left-0 z-10 w-full h-full bg-black opacity-70" />
  <section class="fixed top-0 right-0 z-20 flex flex-col gap-7 w-96 h-full bg-white">
    <DrawerHead />
    <DrawerCartList />
    <DrawerFoot />
  </section>
</template>
