<script setup lang="ts">
import SectionButton from "../elements/SectionButton.vue"
import SectionLabel from "../elements/SectionLabel.vue"
const props = defineProps<{ labelName: string }>()
</script>

<template>
  <div class="flex justify-between">
    <div class="flex gap-3 items-center">
      <SectionLabel :name="props.labelName" />
      <div>
        <slot></slot>
      </div>
    </div>
    <SectionButton />
  </div>
</template>
