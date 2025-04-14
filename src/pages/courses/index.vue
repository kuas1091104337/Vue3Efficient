<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const router = useRouter(),
      coursesArr = ref([]),
      gotoCourses = id => {
        console.log(id);
        router.push(`/courses/${id}`);
      };

onMounted(async () => {
  // axios.get("https://vue-lessons-api.vercel.app/courses/list").then((res) => {
  //   coursesArr.value = res.data;
  // });
  const res = await axios.get("https://vue-lessons-api.vercel.app/courses/list");
  coursesArr.value = res.data;
});
</script>
<template>
  <div class="coursesBox">
    <div v-if="coursesArr.length === 0" class="coursesBox_wrap">
      <a class="coursesBox__card coursesBox__card-gray">
        <div class="coursesBox__card_tag"></div>
      </a>
      <a class="coursesBox__card coursesBox__card-gray">
        <div class="coursesBox__card_tag"></div>
      </a>
      <a class="coursesBox__card coursesBox__card-gray">
        <div class="coursesBox__card_tag"></div>
      </a>
    </div>
    <div v-else class="coursesBox_wrap">
      <a class="coursesBox__card" v-for="item in coursesArr" :key="item.id" @click="gotoCourses(item.id)">
        <p class="coursesBox__card_more" @click.stop="openUrl(item.moreUrl)">觀看更多</p>
        <img :src="item.photo"  class="coursesBox__card_img" />
        <div class="coursesBox__card_content">
          <h1 class="coursesBox__card__name">{{ item.name }}</h1>
          <p class="coursesBox__card__description">{{ item.description }}</p>
          <div class="coursesBox__card__teacher">
            <div class="coursesBox__card__teacher_wrap">
              <img class="coursesBox__card__teacher__img" :src="item.teacher.img" alt="" />
              <p>{{ item.teacher.name }}</p>
            </div>
            <h2 class="coursesBox__card__teacher_money">NTD: {{ item.money }}</h2>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<style lang="scss">
.coursesBox{
  width:100%;
  padding:50px 0;
  &_wrap{display:flex;}
  &__card{
    cursor: pointer;
    width:320px;
    border-radius:5px;
    opacity:.85;
    background-color:#efefef;
    box-shadow:0 0 8px rgba(#000,.2);
    overflow:hidden;
    padding:0;
    margin:0 25px;
    position: relative;
    transition:box-shadow .3s, opacity .3s;
    &-gray{background-color: #fff}
    &:hover{
      opacity:1;
      box-shadow:0 0 10px 1px rgba(#000,.35);
      .coursesBox__card{
        &__name, &__description{
          font-weight:lighter;
          text-shadow:0 0 1px rgba(#393939,.5);
        }
      }
    }
    &_tag{
      width:100%;
      height:155px;
      background-color:#ddd;
    }
    &_img{width:100%;}
    &_more{
      color: #fff;
      font-size: 12px;
      background-color: #00000057;
      border-radius:0 0 0 5px;
      padding:5px 10px;
      position: absolute;
      top: 0;
      right: 0;
    }
    &_content{
      color: #393939;
      text-align: left;
      width: 100%;
      padding-bottom:56px;
    }
    &__name{
      font-size:26px;
      padding:15px 20px;
      transform:skew(-5deg);
    }
    &__description{
      font-size:14px;
      padding:0 25px 10px 25px;
    }
    &__teacher{
      color:#393939;
      line-height: 26px;
      width:100%;
      display:flex;
      justify-content:space-between;
      padding:10px 18px 20px 18px;
      position:absolute;
      left:0;
      bottom:0;
      &_wrap{ display: flex; }
      &__img{
        width: 26px;
        height: 26px;
        border-radius:25px;
        margin-right:10px;
      }
      &_money{font-size:14px;}
    }
  }
}
</style>
