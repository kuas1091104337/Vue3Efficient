<script setup>
import { ref } from "vue";
import NameBar from "@/components/NameBar.vue";
const userName = ref('');
</script>

<template>
<div class="defineModel">
  <NameBar v-model="userName" />
</div>
</template>

<style lang="scss">
.defineModel {
  height:100%;
  display:flex;
  justify-content: center;
  align-items: center;
}
h1 {
  color: #fff;
}
</style>