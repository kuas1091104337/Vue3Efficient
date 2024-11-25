<script setup>

</script>

<template>
<h1 class="titleBar">
  <img class="titleBar_img" src="@/assets/vue.svg" />
  <span class="titleBar_txt"><slot /></span>
</h1>
</template>

<style lang="scss">
.titleBar{
  font-size:18px;
  font-weight:lighter;
  display: flex;
  justify-content: center;
  align-items: center;
  &_img{
    width:52px;
    margin-right:10px;
  }
  &_txt{
    text-shadow:1px 1px 2px rgba(#0ff,.8), -1px -1px 2px rgba(#f0f,.8);
    transform:skew(-6deg);
  }
}
</style>