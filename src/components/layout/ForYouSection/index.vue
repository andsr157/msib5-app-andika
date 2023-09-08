<script setup lang="ts">
import SectionHeader from "../../fragments/SectionHeader.vue"
import CardComponent from "../../fragments/Card.vue"

import { ProductType } from "../../../type"
const products: ProductType[] = [
  { title: "Product1", type: "fashion", price: 10000 },
  { title: "Product2", type: "fashion", price: 10000 },
  { title: "Product3", type: "fashion", price: 10000 },
  { title: "Product4", type: "fashion", price: 10000 },
  { title: "Product5", type: "fashion", price: 10000 },
  { title: "Product5", type: "fashion", price: 10000 },
  { title: "Product5", type: "fashion", price: 10000 },
  { title: "Product5", type: "fashion", price: 10000 },
  { title: "Product5", type: "fashion", price: 10000 },
  { title: "Product5", type: "fashion", price: 10000 },
  { title: "Product5", type: "fashion", price: 10000 },
  { title: "Product5", type: "fashion", price: 10000 },
  { title: "Product5", type: "fashion", price: 10000 },
  { title: "Product5", type: "fashion", price: 10000 },
  { title: "Product5", type: "fashion", price: 10000 },
]
</script>

<template>
  <div class="px-6 lg:px-28 pb-24">
    <div class="mb-8">
      <SectionHeader labelName="For You" />
    </div>
    <div class="flex flex-wrap gap-[22px]">
      <div v-for="data in products" :key="data.title">
        <div>
          <CardComponent :products="[data]" />
        </div>
      </div>
    </div>
  </div>
</template>
