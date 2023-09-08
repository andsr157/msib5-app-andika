<script setup lang="ts">
import Logo from "../elements/Logo.vue"
</script>

<template>
  <nav class="px-6 py-4 lg:px-28 lg:py-2 flex justify-between gap-3">
    <div class="flex items-center">
      <Logo />

      <div class="lg:block hidden">
        <ul
          class="flex justify-between gap-8 text-gray-600 font-semibold text-base"
        >
          <li>Home</li>
          <div class="flex gap-2 cursor-pointer">
            <li>Product</li>
            <img src="../../assets/icon/dropdown.svg" alt="" />
          </div>
          <div class="flex gap-2 cursor-pointer">
            <li>Categories</li>
            <img src="../../assets/icon/dropdown.svg" alt="" />
          </div>
        </ul>
      </div>
    </div>
    <div class="flex justify-end py-2 items-center">
      <div class="hidden lg:block">
        <button
          class="text-gray-600 py-[10px] px-[18px] leading-6 font-semibold me-3"
        >
          Login
        </button>
        <button
          class="bg-primary-600 py-[10px] px-[18px] rounded-lg text-white"
        >
          Sign Up
        </button>
      </div>
      <div class="block lg:hidden">
        <img src="../../assets/icon/nav-toogle.png" alt="" />
      </div>
    </div>
  </nav>
</template>
