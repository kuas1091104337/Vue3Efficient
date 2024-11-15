<script setup>
  import { ref, computed } from 'vue'
  const title = ref('Mike'),
        activeIdx = ref(0),
        listArr = ref([
          {id:1,name:"mike"}, 
          {id:2,name:"jacky"}, 
          {id:3,name:"xuan"}, 
          {id:4,name:"andy"}, 
          {id:5,name:"ban"}, 
          {id:6,name:"mgi"}
        ]),
        navMenu = ref([
          {idx:0,name:"首頁",isShow:true},
          {idx:1,name:"關於我們",isShow:true},
          {idx:2,name:"商品列表",isShow:false},
          {idx:3,name:"歷史沿革",isShow:true},
          {idx:4,name:"未來藍圖",isShow:false},
          {idx:5,name:"聯絡我們",isShow:true},
          {idx:6,name:"註冊",isShow:true}
        ]),
        titleTxt = computed(() => `你的名字是, ${title.value}`),
        listTitle = computed(() => listArr.value.length > 0 ? '以下是列表' : '目前沒有列表'),
        filterMenu = computed(() => navMenu.value.filter(item => item.isShow)),
        deleteList = (idx) => listArr.value.splice(idx,1),
        menuHandle = (idx) => {navMenu.value[idx].isShow = false};
</script>

<template>
  <div>
    <div class="exp">
      <p>{{ titleTxt }}</p>
      <input v-model="title" type="text" name="" id="" />
    </div>
    <div class="exp">
      <h3>{{ listTitle }}</h3>
      <!-- fhhd有要改變的活動 -->
      <!-- <h3>{{ listArr.length > 0 ? "以下是列表" : "目前沒有列表" }}</h3>
      養成良好的習慣，盡量不要在 template 內做邏輯運算，因為沒有拿 扔好，可能會在template內用了很多的邏輯運算
      會變成一下在 script 和 template 都有邏輯運算，在維護上會比較沒那麼直覺，所以通常會放 script 內用 computed 表示
      <ul v-show="listArr.length > 0"> -->
      <ul v-show="listArr.length">
        <li class="expList" v-for="(list, idx) in listArr" :key="list.id">
          {{ list.name }}
          <button class="expList_btn" @click="deleteList(idx)">X</button>
        </li>
      </ul>
    </div>
    <div class="exp">
      <ul class="menu">
        <li class="menu_item" v-for="(item,idx) in filterMenu" :key="item.name">
          <a
            href="javascript:;"
            :class="['menu__link',{'menu__link-active':activeIdx === idx}]"
            @click="menuHandle(item.idx)"
          >{{ item.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.exp{
  padding:25px 0;
  &List{
    line-height:20px;
    width:260px;
    margin:0 auto;
    cursor: pointer;
    display:flex;
    justify-content:space-around;
    align-items:center;
    padding:5px 0;
    + .expList{border-top:1px solid #000;}
    &_btn{
      background-color:#ddd;
      padding:6px 10px;
    }
  }
}
</style>