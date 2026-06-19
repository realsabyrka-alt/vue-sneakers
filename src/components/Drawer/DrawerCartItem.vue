<script setup lang="ts">
import closeIcon from '@/assets/close.svg'

interface Props {
  id: number
  imgSrc: string
  title: string
  price: number
}

defineProps<Props>()
</script>

<template>
  <article
    class="flex justify-between items-center gap-3 p-5 rounded-[20px] border border-slate-100 transition hover:shadow-xl hover:-translate-y-2 active:shadow-none active:translate-y-0"
  >
    <img :src="imgSrc" alt="" width="70" height="70" />
    <div class="flex flex-col gap-1">
      <h3 class="text-sm">{{ title }}</h3>
      <p class="text-sm font-bold">
        {{
          price.toLocaleString('ru-KZ', {
            style: 'currency',
            currency: 'KZT',
            maximumFractionDigits: 0,
          })
        }}
      </p>
    </div>
    <img
      class="cursor-pointer transition hover:scale-105 active:scale-100"
      :src="closeIcon"
      alt=""
      width="32"
      height="32"
    />
  </article>
</template>
