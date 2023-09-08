<script setup lang="ts">
import SectionHeader from "../../fragments/SectionHeader.vue"
import { FeatureType } from "../../../type/"
import FeatureCard from "../../elements/Feature.vue"

const categories: FeatureType[] = [
  { title: "Men's Fashion" },
  { title: "Women's Fashion" },
  { title: "Bicycle" },
  { title: "Handphone" },
  { title: "Hobbies and Collections" },
  { title: "Household" },
]
</script>

<template>
  <div class="px-6 pb-12 lg:px-28 lg:pb-24">
    <div class="mb-8">
      <SectionHeader labelName="Categories" />
    </div>
    <div class="flex justify-between overflow-auto pb-6 lg:pb-0">
      <FeatureCard :featureData="categories" />
    </div>
  </div>
</template>
