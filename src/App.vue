<script setup lang="ts">
import CategoriesSection from "./components/layout/CategoriesSection/index.vue"
import FlashSaleSection from "./components/layout/FlashSaleSection/index.vue"
import LatestProduct from "./components/layout/LatestSection/index.vue"
import Promo from "./components/layout/PromoSection/index.vue"
import ForYou from "./components/layout/ForYouSection/index.vue"
import FooterSection from "./components/layout/FooterSection/index.vue"
import HeaderHero from "./components/layout/HeaderHero/index.vue"
</script>

<template>
  <HeaderHero />
  <CategoriesSection />
  <FlashSaleSection />
  <LatestProduct />
  <Promo />
  <LatestProduct />
  <ForYou />
  <FooterSection />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
