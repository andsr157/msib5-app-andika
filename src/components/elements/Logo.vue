<script setup lang="ts">
const props = defineProps<{ theme?: string }>()
</script>

<template>
  <div class="me-10 flex box-border items-center gap-[10px]">
    <img src="../../assets/image/Logomark.png" alt="" class="lg:h-8" />
    <img
      :src="
        props.theme === 'white'
          ? 'src/assets/image/Logotype_white.png'
          : 'src/assets/image/Logotype.png'
      "
      alt=""
      class="h-8"
    />
  </div>
</template>
