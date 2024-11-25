<script setup>
import { useSlots } from 'vue';
const slot = useSlots();
console.log(slot.text()[0].children);// default 或 name值
</script>

<template>
<div class="content">
  <h1 class="content_title">
    <img src="@/assets/vue.svg" class="content__img"/>
    <slot name="title"></slot>
  </h1>
  <p class="content_txt">
    <slot name="text"></slot>
  </p>
</div>
</template>

<style lang="scss">
.content {
  color:#fff;
  max-width:600px;
  margin:0 auto 30px;
  &_title {
    font-size:24px;
    display: flex;
    // justify-content: center;
    align-items: center;
  }
  &_txt{
    font-size:18px;
    text-align:left;
  }
  &__img{
    height:28px;
    margin-right:10px;
  }
}
</style>