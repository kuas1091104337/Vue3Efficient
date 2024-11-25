<script setup>
import { useSlots, computed } from 'vue';
const slot = useSlots(),
      isShow = computed(() => !!slot.default()[0].children);
// console.log(slot.default()[0].children); //children 是 slot 的內容
</script>

<template>
<div class="moneyBox" v-if="isShow">
  <img class="moneyBox_img" src="@/assets/money.png" alt="" />
  <slot></slot>
</div>
<div v-else class="moneyBox">-</div>
</template>

<style lang="scss">
.moneyBox{
  font-weight: bold;
  display: flex;
  justify-content:center;
  align-items: center;
  &_img{
    width: 30px;
    display: block;
  }
}
</style>