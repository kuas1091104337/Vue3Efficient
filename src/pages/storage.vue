<script setup>
const user = {name:'張三',age:18},
      saveLocalData = () => {
        localStorage.setItem('msg','hello!')
        localStorage.setItem('number',12345678)
        window.localStorage.setItem('user',JSON.stringify(user))
      },
      readLocalData = () => {
        console.log(localStorage.getItem('msg'));
        console.log(localStorage.getItem('number'));
        console.log(JSON.parse(window.localStorage.getItem('user')));
      },
      deleteLocalData = () => localStorage.removeItem('msg'),
      clearLocalData = () => localStorage.clear(),

      saveSessionData = () => sessionStorage.setItem('msg','hello!'),

      // 创建一个名为userId的Cookie，值为nick123，过期时间为2020年1月15日
      saveCookielData = () => document.cookie = 'userId=nick123; expires=Wed, 15 Jan 2020 12:00:00 UTC';
</script>

<template>
  <div class="cookie">
    <h3>localStorage</h3>
    <a href="javascript:;" @click="saveLocalData">儲存數據</a>
    <a href="javascript:;" @click="readLocalData">讀取數據</a>
    <a href="javascript:;" @click="deleteLocalData">刪除 msg 數據</a>
    <a href="javascript:;" @click="clearLocalData">清空數據</a>
    <h3>sessionStorage</h3>
    <a href="javascript:;" @click="saveSessionData">儲存數據</a>
    <h3>cookie</h3>
    <a href="javascript:;" @click="saveCookielData">儲存數據</a>
  </div>
</template>

<style lang="scss">

</style>