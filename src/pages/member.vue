<script setup>
import { ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import RadioType from "../components/RadioType/index.vue";

const route = useRoute(),
      router = useRouter(),
      // higher | lowLevel | medium | default
      info = ref(route.name === "member" ? "default" : route.name);

watch(info,newVal => router.push(`/member/${newVal}`));
</script>
<template>
  <div class="memberBox">
    <RadioType v-model="info" />
    <main class="memberBox_main">
      <RouterView />
    </main>
  </div>
</template>
<style lang="scss">
%flexCenter{
  display: flex;
  justify-content: center;
  align-items: center;
}
.memberBox{
  @extend %flexCenter;
  color: #fff;
  height: 100vh;
  background-color:#333;
  flex-direction: column;
  &_main{
    @extend %flexCenter;
    width: 400px;
    height: 400px;
    background-color: darkgray;
  }
}
</style>
