<script setup>
import { computed } from "vue";
// const model = defineModel(),
// const model = defineModel(,{type:String}),
const model = defineModel('userName',{type:String,default:''}),
      name = computed(() => model.value ? ' : '+model.value : '');
</script>

<template>
<div class="nameBar">
  <input v-model="model" id="nameBarInput" class="nameBar_input" type="text" required/>
  <label class="nameBar_title" for="nameBarInput">輸入你的姓名 {{ name }}</label>
</div>
</template>

<style lang="scss">
.nameBar {
  position:relative;
  &_input{
    font-size: 20px;
    width: 400px;
    height: 40px;
    padding:0 0 0 10px;
    border:3px solid tomato;
    transition:border-color .4s;
    &:focus, &:valid{
      outline:none;
      border-color:#55f;
      ~ .nameBar_title{
        top:-40px;
        left: 0px;
        color: #55f;
      }
    }
  }
  &_title {
    color: #000;
    font-size: 20px;
    line-height: 40px;
    position: absolute;
    top: 0;
    left:10px;
    transition:color .4s, top .4s, left .4s;
  }
}
</style>