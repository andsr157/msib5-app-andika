<script setup lang="ts">
import SectionHeader from "../../fragments/SectionHeader.vue"
import CardComponent from "../../fragments/Card.vue"
import Timer from "../../elements/Timer.vue"
import Next from "../../elements/NextButton.vue"
import { Swiper, SwiperSlide } from "swiper/vue"
import "swiper/swiper-bundle.css" // Import Swiper styles

import { ProductType } from "../../../type"
const products: ProductType[] = [
  { title: "Product1", type: "fashion", price: 10000 },
  { title: "Product2", type: "fashion", price: 10000 },
  { title: "Product3", type: "fashion", price: 10000 },
  { title: "Product4", type: "fashion", price: 10000 },
  { title: "Product5", type: "fashion", price: 10000 },
  { title: "Product6", type: "fashion", price: 10000 },
  { title: "Product7", type: "fashion", price: 10000 },
  { title: "Product8", type: "fashion", price: 10000 },
  { title: "Product9", type: "fashion", price: 10000 },
  { title: "Product10", type: "fashion", price: 10000 },
]
</script>

<template>
  <div class="flex flex-col gap-8 px-6 lg:px-28 py-14 bg-gray-50">
    <div>
      <SectionHeader labelName="Flash Sale">
        <Timer />
      </SectionHeader>
    </div>
    <div class="relative w-full">
      <Swiper
        :slides-per-view="2"
        :breakpoints="{
          '640': {
            slidesPerView: 1,
          },
          '1024': {
            slidesPerView: 5,
          },
        }"
        :pagination="true"
        :space-between="10"
      >
        <SwiperSlide v-for="data in products" :key="data.title">
          <CardComponent :products="[data]" />
        </SwiperSlide>
      </Swiper>

      <div class="absolute z-40 top-1/2 -right-4">
        <Next />
      </div>
    </div>
  </div>
</template>
