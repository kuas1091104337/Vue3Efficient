<script setup>
import { ref, onMounted, KeepAlive } from "vue";
import ContentUI from '@/components/ContentUI.vue'
import MoneyUI from '@/components/MoneyUI.vue'
import HomeUI from '@/components/HomeUI.vue'
import AboutUI from '@/components/AboutUI.vue'
import CoursesUI from '@/components/CoursesUI.vue'
import LoginUI from '@/components/LoginUI.vue'
import teleportUI from '@/components/teleportUI.vue'
import defineModelUI from '@/components/defineModelUI.vue'
import svgUI from '@/components/svgUI.vue'
import TitleBarUI from '@/components/TitleBarUI.vue'

const ContentList = ref([
        {title:'應用實例',text:'每個 Vue 應用程式都是透過 createApp 函數建立一個新的 應用程式實例 ：'},
        {title:'根组件',text:'我們傳入 createApp 的物件實際上是一個元件，每個應用程式都需要一個“根元件”，其他元件將作為其子元件。 如果你使用的是單一檔案元件，我們可以直接從另一個檔案匯入根元件。'},
        {title:'掛載應用',text:'應用實例必須在呼叫了 .mount() 方法後才會渲染出來。此方法接收一個「容器」參數，可以是一個實際的 DOM 元素或是一個 CSS 選擇器字串'}
      ]),
      coursesList = ref([
        { id:1, name:"JavaScript & TypeScript 前端工程師入門班", price:6000, other:null },
        { id:2, name:"Vue3 高效入門與實踐", price:null, other:null },
        { id:3, name:"Nuxt3 高效入門全攻略", price:4500, other:null },
        { id:4, name:"Vue 單元測試 vue-test-utils｜入門", price:2200, other:null },
      ]),
      activeType = ref('HomeUI'),
      switchView = type => activeType.value = type,
      // pageMap = {Home:HomeUI, About:AboutUI, Courses:CoursesUI};
      pageMap = {HomeUI, AboutUI, CoursesUI, LoginUI, teleportUI, defineModelUI, svgUI};
onMounted(() => {
  console.log(pageMap);
});
</script>

<template>
<div class="slotDemo">
  <ContentUI v-for="item in ContentList" :key="item.title">
    <template #title>{{ item.title }}</template>
    <template #text>{{ item.text }}</template>
  </ContentUI>
  <!-- <ContentUI>
    <template #title>應用實例</template>
    <template #text>每個 Vue 應用程式都是透過 createApp 函數建立一個新的 應用程式實例 ：</template>
  </ContentUI>
  <ContentUI>
    <template #title>根组件</template>
    <template #text>
      我們傳入 createApp 的物件實際上是一個元件，每個應用程式都需要一個“根元件”，其他元件將作為其子元件。 如果你使用的是單一檔案元件，我們可以直接從另一個檔案匯入根元件。
    </template>
  </ContentUI>
  <ContentUI>
    <template #title>掛載應用</template>
    <template #text>
      應用實例必須在呼叫了 .mount() 方法後才會渲染出來。此方法接收一個「容器」參數，可以是一個實際的 DOM 元素或是一個 CSS 選擇器字串
    </template>
  </ContentUI> -->
  <div class="slotBox">
    <ul class="slotBox_table slotBox_table-bold">
      <li class="slotBox__item">編號</li>
      <li class="slotBox__item">品項</li>
      <li class="slotBox__item">價錢</li>
      <li class="slotBox__item">其他</li>
    </ul>
    <ul v-for="list in coursesList" :key="list.id" class="slotBox_table">
      <li class="slotBox__item">No.{{ list.id }}</li>
      <li class="slotBox__item">{{ list.name }}</li>
      <li class="slotBox__item">
        <MoneyUI>{{ list.price }}</MoneyUI>
      </li>
      <li class="slotBox__item">-</li>
    </ul>
  </div>
  <div class="slotSwitch">
    <header class="slotSwitch_head">
      <nav>
        <!-- <a :class="['slotSwitch___link',{active:activeType === 'Home'}]" @click="switchView('Home')">首頁</a>
        <a :class="['slotSwitch___link',{active:activeType === 'About'}]" @click="switchView('About')">平台介紹</a>
        <a :class="['slotSwitch___link',{active:activeType === 'Courses'}]" @click="switchView('Courses')">線上課程</a> -->
        <a 
          :class="['slotSwitch___link',{'slotSwitch___link-active':activeType === 'HomeUI'}]" 
          @click="switchView('HomeUI')"
        >首頁</a>
        <a 
          :class="['slotSwitch___link',{'slotSwitch___link-active':activeType === 'AboutUI'}]" 
          @click="switchView('AboutUI')"
        >平台介紹</a>
        <a 
          :class="['slotSwitch___link',{'slotSwitch___link-active':activeType === 'CoursesUI'}]" 
          @click="switchView('CoursesUI')"
        >線上課程</a>
        <a 
          :class="['slotSwitch___link',{'slotSwitch___link-active':activeType === 'LoginUI'}]" 
          @click="switchView('LoginUI')"
        >登入/註冊</a>
        <a 
          :class="['slotSwitch___link',{'slotSwitch___link-active':activeType === 'teleportUI'}]" 
          @click="switchView('teleportUI')"
        >傳送組件</a>
        <a 
          :class="['slotSwitch___link',{'slotSwitch___link-active':activeType === 'defineModelUI'}]" 
          @click="switchView('defineModelUI')"
        >defineModel</a>
        <a 
          :class="['slotSwitch___link',{'slotSwitch___link-active':activeType === 'defineModelUI'}]" 
          @click="switchView('svgUI')"
        >svg icon</a>
      </nav>
    </header>
    <main class="slotSwitch_main">
      <KeepAlive include="LoginUI">
        <component :is="pageMap[activeType]" />
      </KeepAlive>
      <!-- <component :is="HomeUI" /> -->
      <!-- <HomeUI v-if="activeType === 'Home'" />
      <AboutUI v-if="activeType === 'About'" />
      <CoursesUI v-if="activeType === 'Courses'" /> -->
    </main>
  </div>
  <div class="slotBar">
    <TitleBarUI id="test" class="slotBar_bigSize" style="color:#fff;">Attributes 繼承 </TitleBarUI>
    <p class="slotBar_txt">透傳 attribute 指的是傳遞給一個元件，卻沒有被該元件宣告為 props 或 emits 的 attribute 或 v-on 事件監聽器。最常見的例子就是 class、style 和 id。</p>
  </div>
</div>
</template>

<style lang="scss">
.slotDemo{
  background-color:#333;
  padding:30px;
}
.slotBox{
  font-size:16px;
  width:1000px;
  margin:0 auto;
  &_table{
    width: 100%;
    display:flex;
    background-color: #fff;
    &-bold{
      font-size:20px;
      font-weight:bold;
      background-color:#eee;
    }
  }
  &__item{
    line-height:2.5;
    border: 1px solid #ccc;
    &:nth-of-type(1){width: 20%;}
    &:nth-of-type(2){width: 40%;}
    &:nth-of-type(3){width: 20%;}
    &:nth-of-type(4){width: 20%;}
  }
}
.slotSwitch{
  width:1110px;
  background-color:#fff;
  margin:35px auto;
  &_head, &_main{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &_head{
    width: 100%;
    height: 50px;
    border-bottom: 2px solid #464646;
  }
  &___link{
    color: #262052;
    font-weight: bold;
    cursor: pointer;
    border-radius:50px;
    padding:5px 15px;
    + .slotSwitch___link{margin-left:15px;}
    &-active{
      color: #fff;
      background-color: #262052;
    }
  }
  &_main{
    color:#000;
    width:100%;
    min-height:500px;
    background-color: rgb(210, 226, 227);
    flex-direction: column;
    padding: 50px 0;
  }
}
.slotBar{
  color: #f0f;
  max-width:600px;
  margin:0 auto;
  &_txt{text-align:left;}
}
h1.slotBar_bigSize{font-size:48px;}
</style>