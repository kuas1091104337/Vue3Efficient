<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";

const route = useRoute(),
      router = useRouter(),
      courses = ref({}),
      goBack = () => router.go(-1);

onMounted(async () => {
  const res = await axios.get(`https://vue-lessons-api.vercel.app/courses/${route.params.id}`);
  courses.value = res.data.data[0];
});
</script>
<template>
  <div class="coursesItem">
    <img :src="courses.photo" class="coursesItem_img" />
    <p class="coursesItem_txt">{{ courses.description }}</p>
    <button class="coursesItem_button" @click="goBack">返回</button>
  </div>
</template>
<style lang="scss">
.coursesItem {
  width: 700px;
  height: 100%;
  background-color: #666;
  padding:10px;
  margin:0 auto;
  &_img{
    width: 100%;
    margin-bottom: 20px;
    background-color: #555;
  }
  &_txt{
    color: #fff;
    font-size:18px;
    line-height: 1.8;
  }
  &_button{
    cursor: pointer;
    color: #001c3c;
    font-size: 16px;
    width: 160px;
    height: 30px;
    background-color: #7dd19f;
    border-radius: 50px;
    border:0;
    margin:20px 0;
  }
}
</style>
