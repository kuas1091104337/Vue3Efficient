<script setup>
import { onMounted, ref, computed } from "vue";
import axios from "axios";
import CardBox from "@/components/CardBox.vue";

const coursesArr = ref([]),
      coursesId = ref(0),
      // targetArr = computed(() => {
      //   if(coursesId.value === 0){
      //     return coursesArr.value
      //   }else{
      //     return coursesArr.value.filter(item => item.id === coursesId.value)
      //   }
      // }),
      targetArr = computed(() => coursesId.value === 0 ? coursesArr.value : coursesArr.value.filter(item => item.id === coursesId.value)),
      openUrl = (url) => window.open(url,"_blank"),
      handleMore = path => window.open(path,"_blank"),
      handleClickCard = (id) => coursesId.value = id,
      getDetalData = (id) => coursesId.value = id;

onMounted(async () => {
  // axios.get("https://vue-lessons-api.vercel.app/courses/list").then((res) => {
  //   coursesArr.value = res.data;
  // });
  const res = await axios.get("https://vue-lessons-api.vercel.app/courses/list");
  coursesArr.value = res.data;
});
</script>

<template>
  <div class="cardWrap">
    <CardBox :courseArr="targetCourseArr" @onClickCard="handleClickCard" @onMore="handleMore" />
    <!-- <CardBox :courseArr="targetArr" :getDetalData="getDetalData" :openUrl="openUrl" /> -->
    <!-- <a class="cardBox" v-for="item in targetArr" :key="item.id" href="javascript:;" @click="getDetalData(item.id)">
      <p class="more" @click.self="openUrl(item.moreUrl)">觀看更多</p>
      <img :src="item.photo" :alt="item.name" />
      <div class="content">
        <h1>{{ item.name }}</h1>
        <p class="description">{{ item.description }}</p>
        <div class="teacher-box">
          <div class="teach-img">
            <img class="teacher" :src="item.teacher.img" :alt="item.teacher.name" />
            <p>{{ item.teacher.name }}</p>
          </div>
          <h2>NTD: {{ item.money }}</h2>
        </div>
      </div>
    </a> -->
    <button class="cardBack" v-show="targetArr.length !== 3" @click="getDetalData(0)">Back</button>
  </div>
</template>

<style lang="scss">
.cardWrap{
  display:flex;
  flex-wrap:wrap;
  justify-content:flex-start;
}
.cardBox {
  cursor: pointer;
  width:320px;
  display:block;
  background-color:rgb(249, 249, 249);
  border-radius:5px;
  opacity:.85;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding:0;
  margin:0 30px 20px;
  position:relative;
  transition:opacity .3s;
  &:hover {opacity:1;}
  > img{width:100%;}
}
.more{
  color:white;
  font-size:12px;
  background-color:#00000057;
  padding:5px 10px;
  margin:0;
  position:absolute;
  top:0;
  right:0;
}
.cardBack{margin:0 auto;}
.content{
  color: #393939;
  width: 100%;
  height: 100%;
  > h1, > .description{margin:0;}
  > h1{
    font-size:26px;
    text-align:center;
    padding:32px 0;
  }
  > .description{
    font-size:12px;
    text-align:left;
    padding:12px 25px 22px 25px;
  }
}
.teacher-box{
  color:#393939;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:10px 18px 20px 18px;
  > h2 {font-size:14px;}
  > .teach-img{
    display: flex;
    align-items: center;
    > img {
      width:25px;
      height:25px;
      border-radius:50%;
      margin-right:10px;
    }
  }
}
</style>