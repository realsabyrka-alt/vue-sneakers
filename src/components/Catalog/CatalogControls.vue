<script setup lang="ts">
import searchIcon from '@/assets/search.svg'

defineEmits<{
  (e: 'changeSort', event: Event): void
  (e: 'changeSearch', event: Event): void
}>()
</script>

<template>
  <div class="flex flex-row justify-center gap-4">
    <select
      class="w-52.5 h-11.25 px-5 border border-[#F3F3F3] rounded-[10px] bg-white text-[14px] text-[#5C5C5C] appearance-none outline-none"
      @change="$emit('changeSort', $event)"
    >
      <option value="name">По названию</option>
      <option value="price">По цене (дешевые)</option>
      <option value="-price">По цене (дорогие)</option>
    </select>
    <div class="relative">
      <img
        :src="searchIcon"
        alt="Search"
        class="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4"
      />
      <input
        @input="$emit('changeSearch', $event)"
        type="text"
        placeholder="Поиск..."
        class="w-52.5 h-11.25 pl-12 pr-5 border border-[#F3F3F3] rounded-[10px] bg-white text-[14px] text-[#5C5C5C] placeholder:text-[#C4C4C4] outline-none"
      />
    </div>
  </div>
</template>
