<script setup>
import HelloWorld from '../components/HelloWorld.vue'
</script>

<template>
  <div class="box">
    <GlobalHead />
    <h1 class="title">首頁</h1>
    <div class="HelloWorld">
      <HelloWorld msg="Vite + Vue" />
      <span class="test">test test test</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.box{
  .test{color:red;}
  :deep(.test){color:blue;}
}
</style>