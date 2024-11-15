<script setup>
import { onMounted, ref, reactive, watch } from "vue";
import axios from "axios";

const name1 = ref('Jacky'),
      name2 = ref('Alex'),
      isStop3 = ref(false),
      isStopAll = ref(false),
      coursesId = ref(0),
      coursesArr = ref([]),
      targetCourseArr = ref([]),
      coursesDetal = ref({}),
      userInfo1 = reactive({
        name:'Mike', age:12, address:'Taipei'
      }),
      userInfo2 = ref({
        name:'Mike', age:12, address:'Taipei'
      }),
      stopWatch3 = () => isStop3.value = true,
      stopWatchAll = () => isStopAll.value = true,
      stopWatch2 = () => stop2(),
      openUrl = (url) => window.open(url,"_blank"),
      getDetalData = (id) => coursesId.value = id;
      
watch(name1,(newName1,oldName1) => {console.log('newName1:'+newName1+',oldName1:'+oldName1)},{once:true});
const stop2 = watch(name2,(newName2,oldName2) => {console.log('newName2:'+newName2+',oldName2:'+oldName2)},{immediate:true});
watch(() => userInfo1.name,(newName3,oldName3) => {
  if(isStop3.value) return
  console.log('newName3:'+newName3+',oldName3:'+oldName3)
});
watch([name1, name2, () => userInfo1.name, () => userInfo2.value.name],([newName1, newName2, newName3, newName4],[oldName1, oldName2, oldName3, oldName4]) => {
  if(isStopAll.value) return
  console.log('newName-1:'+newName1+',oldName-1:'+oldName1)
  console.log('newName-2:'+newName2+',oldName-2:'+oldName2)
  console.log('newName-3:'+newName3+',oldName-3:'+oldName3)
  console.log('newName-4:'+newName4+',oldName-4:'+oldName4)
});
watch(coursesId,(newId,oldId) => {
  if(newId === 0) return 
  const data = coursesArr.value.filter(item => item.id === newId);
  coursesDetal.value = data[0]
  console.log(coursesDetal.value);
  console.log('new id:'+newId+', old id:'+oldId)
});
watch(coursesId,newId => {
  targetCourseArr.value = newId === 0 ? coursesArr.value : coursesArr.value.filter(item => item.id === newId);
});
onMounted(async () => {
  // axios.get("https://vue-lessons-api.vercel.app/courses/list").then((res) => {
  //   coursesArr.value = res.data;
  // });
  const res = await axios.get("https://vue-lessons-api.vercel.app/courses/list");
  coursesArr.value = res.data;
  targetCourseArr.value = coursesArr.value;
});
</script>

<template>
  <div>
    <div class="content_box">
      <p class="content__title">你的名字是 : {{ name1 }}</p>
      <input v-model="name1" class="content___input" type="text" name="" placeholder="輸入你的名字" />
    </div>
    <div class="content_box">
      <p class="content__title">我的名字是 : {{ name2 }}</p>
      <input v-model="name2" class="content___input" type="text" name="" placeholder="輸入你的名字" />
      <button class="content__button" @click="stopWatch2">STOP WATCH 2</button>
    </div>
    <div class="content_box">
      <p class="content__title">他的名字是 : {{ userInfo1.name }}</p>
      <input v-model="userInfo1.name" class="content__input" type="text" name="" placeholder="輸入你的名字" />
      <button class="content__button" @click="stopWatch3">STOP WATCH 3</button>
    </div>
    <div class="content_box">
      <p class="content__title">?的名字是 : {{ userInfo2.name }}</p>
      <input v-model="userInfo2.name" class="content__input" type="text" name="" placeholder="輸入你的名字" />
      <button class="content__button" @click="stopWatchAll">STOP WATCH ALL</button>
    </div>
    <div class="cardWrap">
      <!-- <a class="cardBox" v-for="item in coursesArr" :key="item.id" href="javascript:;" @click="getDetalData(item.id)"> -->
      <a class="cardBox" v-for="item in targetCourseArr" :key="item.id" href="javascript:;" @click="getDetalData(item.id)">
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
      </a>
      <button class="cardBack" v-show="targetCourseArr.length !== 3" @click="getDetalData(0)">Back</button>
    </div>
  </div>
</template>

<style lang="scss">
.content{
  &_box{margin:60px 0;}
  &__title{font-size:30px;}
  &__input{
    width: 200px;
    height: 30px;
    text-align: center;
    margin-top: 10px;
  }
  &__button{
    display:block;
    margin:0 auto;
  }
}
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
</style>