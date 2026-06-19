<script setup lang="ts"></script>
<template>
  <footer class="px-7 pb-7">
    <div class="flex items-center justify-between gap-2 mb-5">
      <span>Итого:</span>
      <div class="flex-1 border-b-2 border-b-gray-300 border-dotted h-4"></div>
      <span class="font-bold">21 498 ₸</span>
    </div>
    <div class="flex items-center justify-between gap-2 mb-6">
      <span>Налог 5%:</span>
      <div class="flex-1 border-b-2 border-b-gray-300 border-dotted h-4"></div>
      <span class="font-bold">1 074 ₸</span>
    </div>
    <button
      type="button"
      class="w-full bg-lime-500 text-white rounded-[18px] py-4.5 font-semibold transition hover:bg-lime-600 active:bg-lime-700 text-center cursor-pointer active:scale-95"
    >
      Оформить заказ
    </button>
  </footer>
</template>
