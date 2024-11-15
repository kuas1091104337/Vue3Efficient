<script setup>
  import { ref, reactive } from 'vue'
  const listArr = ref(['Mike','Jacky','Andy']),
        words = ref('abcdefghijklmnopqrstuvwxzy'),
        info = reactive({
          name:'mike',
          age:12,
          address:'Taiwan'
        });
</script>

<template>
  <div>
    <h3>遍歷指定次數 - number</h3>
    <ul class="itemEx">
      <li class="itemEx_list" v-for="(item,idx) in 6" :key="item">
        <p>idx : {{ idx }}, item : {{ item }}</p>
      </li>
    </ul>
    <h3>遍歷數組 - array</h3>
    <ul class="itemEx">
      <li class="itemEx_list" v-for="(item2,idx2) in listArr" :key="item2">
        <p>idx : {{ idx2 }}, item : {{ item2 }}</p>
      </li>
    </ul>
    <h3>遍歷對象 - object</h3>
    <ul class="itemEx">
      <li class="itemEx_list" v-for="(value,key,idx3) in info" :key="value">
        <p>{{ idx3 }} - {{ key }} : {{ value }} (key:value)</p>
      </li>
    </ul>
    <h3>遍歷字符串 - string</h3>
    <ul class="itemEx">
      <li class="itemEx_list" v-for="(item4,idx4) in words" :key="item4">
        <p>{{ idx4 }} - {{ item4 }}</p>
      </li>
    </ul>
  </div>
</template>
<style lang="scss">
  .itemEx{
    display:flex;
    flex-wrap:wrap;
    &_list + .itemEx_list{margin-left:30px;}
  }
</style>