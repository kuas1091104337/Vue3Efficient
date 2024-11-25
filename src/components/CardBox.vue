<script setup>
const props = defineProps({
        courseArr:{
          type:Array,
          default:() => []
        },
        // getDetalData:{
        //   type:Function,
        //   default:() => {}
        // },
        // openUrl:{
        //   type:Function,
        //   default:() => {}
        // },
      }),
      emit = defineEmits(['onClickCard','onMore']),
      handleClickCard = id => emit('onClickCard',id),
      handleMore = path => emit('onMore',path);
  // str:{ type:String, default:'text' },
  // bool:{ type:Boolean, default:false },
  // num:{ type:Number, default:0 },
  // arr:{ type:Array, default:() => [] },
  // obj:{ type:Object, default:() => ({}) },
</script>

<template>
<!-- <a class="cardBox" v-for="item in props.courseArr" :key="item.id" href="javascript:;" @click="props.getDetalData(item.id)"> -->
<a class="cardBox" v-for="item in props.courseArr" :key="item.id" href="javascript:;" @click="handleClickCard(item.id)">
  <!-- <p class="cardBox_more" @click.stop="props.openUrl(item.moreUrl)">觀看更多</p> -->
  <p class="cardBox_more" @click.stop="handleMore(item.moreUrl)">觀看更多</p>
  <img class="cardBox_img" :src="item.photo" :alt="item.name" />
  <div class="cardBox_content">
    <h1 class="cardBox__title">{{ item.name }}</h1>
    <p class="cardBox__description">{{ item.description }}</p>
    <div class="cardBox__teacher">
      <div class="cardBox__teacher_box">
        <img class="cardBox__teacher__img" :src="item.teacher.img" :alt="item.teacher.name" />
        <p>{{ item.teacher.name }}</p>
      </div>
      <h2 class="cardBox__teacher_money">NTD: {{ item.money }}</h2>
    </div>
  </div>
</a>
</template>

<style lang="scss">
.cardBox{
  cursor:pointer;
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
  &:hover{opacity:1;}
  &_more{
    color:white;
    font-size:12px;
    background-color:#00000057;
    padding:5px 10px;
    margin:0;
    position:absolute;
    top:0;
    right:0;
  }
  &_img{width:100%;}
  &_content{
    color: #393939;
    width: 100%;
    // height: 100%;
  }
  &__title, &__description{margin:0;}
  &__title{
    font-size:26px;
    text-align:center;
    padding:32px 0;
  }
  &__description{
    font-size:12px;
    text-align:left;
    padding:12px 25px 22px 25px;
  }
  &__teacher{
    color:#393939;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:10px 18px 20px 18px;
    &_box{
      display: flex;
      align-items: center;
    }
    &_money{font-size:14px;}
    &__img{
      width:25px;
      height:25px;
      border-radius:50%;
      margin-right:10px;
    }
  }
}
</style>