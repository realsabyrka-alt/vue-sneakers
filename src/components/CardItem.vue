<script setup lang="ts">
import likeIcon from '@/assets/like-2.svg'
import unlikeIcon from '@/assets/like-1.svg'
import checkedImage from '@/assets/checked.svg'
import plusImage from '@/assets/plus.svg'

interface Props {
  isAdded: boolean
  imgSrc: string
  title: string
  price: number
  isFavorite: boolean
}

defineProps<Props>()
</script>

<template>
  <article
    class="flex flex-col gap-4 p-7 pt-5 lg:max-w-52.5 border border-slate-100 rounded-[40px] cursor-pointer transition hover:shadow-xl hover:-translate-y-2 active:shadow-none active:translate-y-0"
  >
    <div class="relative">
      <img
        class="absolute cursor-pointer transition hover:scale-105 active:scale-100"
        :src="isFavorite ? likeIcon : unlikeIcon"
        alt=""
        width="32"
        height="32"
      />
      <img :src="imgSrc" alt="" />
    </div>
    <h3 class="text-sm">{{ title }}</h3>
    <div class="flex justify-between">
      <div>
        <span class="text-xs font-medium uppercase text-gray-400">Цена:</span>
        <h4 class="text-xs font-bold">
          {{
            price.toLocaleString('ru-KZ', {
              style: 'currency',
              currency: 'KZT',
              maximumFractionDigits: 0,
            })
          }}
        </h4>
      </div>
      <img
        class="cursor-pointer transition hover:scale-105 active:scale-100"
        :src="isAdded ? checkedImage : plusImage"
        alt=""
        width="32"
        height="32"
      />
    </div>
  </article>
</template>
