<script setup>
  import { ref } from 'vue'
  const activeIdx = ref(0),
        menuData = ref([
          {txt:'首頁'},{txt:'關於我們'},{txt:'商品列表'},{txt:'歷史沿革'},{txt:'未來藍圖'}
        ]),
        listData = ref([
          {txt:'首頁',isShow:true},
          {txt:'關於我們',isShow:false},
          {txt:'商品列表',isShow:false},
          {txt:'歷史沿革',isShow:true},
          {txt:'未來藍圖',isShow:true}
        ]),
        clickHandle = (idx) => activeIdx.value = idx;
</script>

<template>
  <div>
    <ul class="menuEx">
      <li class="menuEx_item" v-for="(item,idx) in menuData" :key="item.txt">
        <a :class="['menuEx__link',{'menuEx__link-active':activeIdx === idx}]" @click="clickHandle(idx)">{{ item.txt }}</a>
      </li>
    </ul>
    <ul class="menuEx">
      <template v-for="item in listData" :key="item.txt">
        <li class="menuEx_item" v-if="item.isShow">{{ item.txt }}</li>
      </template>
    </ul>
  </div>
</template>

<style lang="scss">
  .menuEx{
    display:flex;
    justify-content:center;
    list-style:none;
    margin-bottom:50px;
    &__link{
      background-color:rgba(#000,.1);
      padding:5px;
      transition:background-color .4s;
      &:hover{background-color:rgba(#66f,.2);}
    }
    &_item{
      + .menuEx_item{margin-left:15px;}
      > .menuEx__link-active{
        color:#ff0;
        background-color:rgba(#66f,.6);
      }
    } 
  }
</style>