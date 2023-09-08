<script setup lang="ts">
import SectionHeader from "../../fragments/SectionHeader.vue"
import CardComponent from "../../fragments/CardSmall.vue"
import DiscountCard from "../../fragments/DiscountCard.vue"
import Next from "../../elements/NextButton.vue"
import { ProductType } from "../../../type"
import { Navigation, Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/vue"
import "swiper/css" // Import Swiper styles

const modules = [Navigation, Autoplay]

const { uniqueId } = defineProps<{ uniqueId: string }>()
const products: ProductType[] = [
  { title: "Product1", type: "fashion", price: 10000 },
  { title: "Product2", type: "fashion", price: 10000 },
  { title: "Product3", type: "fashion", price: 10000 },
  { title: "Product4", type: "fashion", price: 10000 },
  { title: "Product4", type: "fashion", price: 10000 },
  { title: "Product4", type: "fashion", price: 10000 },
  { title: "Product4", type: "fashion", price: 10000 },
  { title: "Product4", type: "fashion", price: 10000 },
  { title: "Product4", type: "fashion", price: 10000 },
]
</script>

<template>
  <div class="px-6 py-12 lg:px-28 lg:py-24">
    <div class="relative">
      <div class="absolute z-40 top-1/2 -right-[-6px] lg:-right-[-6px]">
        <Next :id-button="uniqueId" />
      </div>
      <div>
        <SectionHeader labelName="Latest Product" />
      </div>
      <div class="py-8 pe-8 flex relative overflow-hidden">
        <DiscountCard />

        <div
          class="container w-40 lg:w-full absolute ms-40 lg:ms-56 mt-2 lg:mt-8"
        >
          <Swiper
            :autoHeight="true"
            :slides-per-view="1"
            :breakpoints="{
              '640': {
                slidesPerView: 1,
              },
              '1024': {
                slidesPerView: 5,
              },
            }"
            :spaceBetween="24"
            :modules="modules"
            :navigation="{
              enabled: true,
              nextEl: `.swiper-button-next-${uniqueId}`,
            }"
            :loop="true"
          >
            <SwiperSlide v-for="data in products" :key="data.title">
              <CardComponent :products="[data]" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </div>
</template>
