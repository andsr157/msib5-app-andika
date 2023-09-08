<script setup lang="ts">
import Button from "../elements/Button.vue"
</script>

<template>
  <div
    class="pt-12 pb-24 sm:bg-[url('src/assets/image/hero.png')] bg-no-repeat"
    style="background-position: top right; background-position-y: 80%"
  >
    <div class="mx-auto lg:grid lg:grid-cols-2 px-6 lg:px-28 py-10 lg:py-24">
      <div class="flex flex-col gap-12">
        <div class="flex flex-col gap-6">
          <h1
            class="text-4xl lg:text-6xl font-bold leading-16 lg:leading-[72px]"
          >
            Welcome to Gits Commerce
          </h1>
          <p class="text-lg lg:text-xl text-gray-600 font-[400px]">
            Morpheme is a next-gen financial technology company in the process
            of reinventing banking
          </p>
        </div>
        <div>
          <Button>
            <img src="../../assets/icon/shopping-cart.svg" alt="" />
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>
