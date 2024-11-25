<script setup>
const props = defineProps({
        itemObj:{
          type:Object,
          default:() => ({})
        },
        getDetalData:{
          type:Function,
          default:() => {}
        },
        openUrl:{
          type:Function,
          default:() => {}
        },
      });
</script>

<template>
<a class="cardBox" href="javascript:;" @click="props.getDetalData(props.itemObj.id)">
  <p class="cardBox_more" @click.stop="props.openUrl(props.itemObj.moreUrl)">觀看更多</p>
  <img class="cardBox_img" :src="props.itemObj.photo" :alt="props.itemObj.name" />
  <div class="cardBox_content">
    <h1 class="cardBox__title">{{ props.itemObj.name }}</h1>
    <p class="cardBox__description">{{ props.itemObj.description }}</p>
    <div class="cardBox__teacher">
      <div class="cardBox__teacher_box">
        <img class="cardBox__teacher__img" :src="props.itemObj.teacher.img" :alt="props.itemObj.teacher.name" />
        <p>{{ props.itemObj.teacher.name }}</p>
      </div>
      <h2 class="cardBox__teacher_money">NTD: {{ props.itemObj.money }}</h2>
    </div>
  </div>
</a>
</template>

<style lang="scss">
.cardBox{
  cursor:pointer;
  width:320px;
  height:100%;
  display:block;
  background-color:rgb(249, 249, 249);
  border-radius:5px;
  opacity:.85;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding:0;
  // margin:0 30px 20px;
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
    padding:12px 25px 75px 25px;
  }
  &__teacher{
    color:#393939;
    width: 100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:10px 18px 20px 18px;
    position:absolute;
    left:0;
    bottom:0;
    &_box{
      line-height: 25px;
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