<script setup>

</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <div class="menu">
    <RouterLink to="/" class="menu_list">首頁</RouterLink>
    <RouterLink to="/menuEx" class="menu_list">選單範例</RouterLink>
    <RouterLink to="/test1Ex" class="menu_list">test1</RouterLink>
    <RouterLink to="/vforEx" class="menu_list">ref, reactive, v-for</RouterLink>
    <RouterLink to="/watchEx" class="menu_list">watch 資料監控</RouterLink>
    <RouterLink to="/watchComputedEx" class="menu_list">watch 減少watch多用computed</RouterLink>
    <!-- fhhd有要改變的活動 -->
    <RouterLink to="/computedEx" class="menu_list">computed 資料計算</RouterLink>
    <RouterLink to="/courses" class="menu_list">動態網址設定</RouterLink>
    <RouterLink to="/member" class="menu_list">會員中心</RouterLink>
    <RouterLink to="/from" class="menu_list">常見表單綁定</RouterLink>
    <RouterLink to="/slot" class="menu_list">組件進階應用</RouterLink>
  </div>
  <!-- <RouterView /> -->
  <router-view v-slot="{Component}">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
<!-- scoped -->
<style lang="scss">
ul{
  list-style:none;
  padding-left:0;
  margin:0;
}
img{vertical-align:top;}
.logo{
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
  &:hover{ filter:drop-shadow(0 0 2em #646cffaa); }
  &.vue:hover{ filter: drop-shadow(0 0 2em #42b883aa); }
}
.menu{
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  margin-bottom:50px;
  &_list{
    background-color:rgba(#000,.05);
    padding:5px;
    margin-bottom:15px;
    + .menu_list{margin-left:15px;}
  }
}
.fade-enter-active, .fade-leave-active {
  transition:opacity .3s;
}
.fade-enter-from, .fade-leave-to {
  opacity:0;
}
</style>
