<script setup>
import { computed } from 'vue';
const props = defineProps({
        name: { type: String, required: true },
      }),
      svgName = computed(() => props.name.includes('/') ? '#'+props.name : '#/'+props.name),
      svgClass = computed(() => props.className ? 'svgIcon ' + props.className : 'svgIcon');
</script>

<template>
<svg :class="svgClass" aria-hidden="true">
  <use :xlink:href="svgName" />
</svg>
</template>

<style lang="scss">
.svgIcon {
  width:100%;
  height:100%;
  max-width:100px;
  max-height:100px;
  overflow:hidden;
  &-3dShadow{
    filter:drop-shadow(1px 1px 0 rgba(#f0f,.8)) 
           drop-shadow(-1px -1px 0 rgba(#0ff,.8));
  }
}
</style>