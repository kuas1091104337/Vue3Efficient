<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import CardUI from "@/components/CardUI.vue";
import SelectData from '@/components/SelectData.vue'

const courseArr = ref([]),
      coursesId = ref(0),
      isOpen = ref(false),
      openUrl = (url) => window.open(url,"_blank"),
      getDetal = (id) => {
        coursesId.value = id;
        isOpen.value = true;
      },
      closePop = () => { 
        coursesId.value = 0;
        isOpen.value = false;
      };

onMounted(async () => {
  const res = await axios.get("https://vue-lessons-api.vercel.app/courses/list");
  courseArr.value = res.data;
  console.log(res.data);
});
</script>

<template>
  <div class="teleportWrap">
    <Teleport v-for="item in courseArr" :key="item.id" :disabled="coursesId !== item.id" to=".tlPop_wrap">
      <div class="teleportWrap_box">
        <CardUI :itemObj="item" :getDetalData="getDetal" :openUrl="openUrl" />
        <button class="teleportWrap__btn" v-show="coursesId === item.id" @click="closePop">關閉</button>
      </div>
    </Teleport>
    <SelectData v-show="isOpen" :closePop="closePop" />
  </div>
</template>

<style lang="scss">
.teleportWrap{
  width:100%;
  display:flex;
  justify-content:space-evenly;
  &__btn{
    cursor: pointer;
    color: #fff;
    font-size: 20px;
    line-height: 30px;
    width: 200px;
    background-color: lightseagreen;
    border-radius: 30px;
    border:none;
    margin:25px auto 0 auto;
  }
}
</style>