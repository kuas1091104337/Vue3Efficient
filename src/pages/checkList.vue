<script setup>
import { ref, onMounted, computed } from "vue";
const items = ref([
        {name:'項目1', isSelect:false, id:'one-'+Math.random()},
        {name:'項目2', isSelect:false, id:'one-'+Math.random()},
        {name:'項目3', isSelect:false, id:'one-'+Math.random()},
        {name:'項目4', isSelect:false, id:'one-'+Math.random()},
        {name:'項目5', isSelect:false, id:'one-'+Math.random()}
      ]),
      items2 = ref([
        {name:'項目1', isSelect:false, id:'two-'+Math.random()},
        {name:'項目2', isSelect:false, id:'two-'+Math.random()},
        {name:'項目3', isSelect:false, id:'two-'+Math.random()},
        {name:'項目4', isSelect:false, id:'two-'+Math.random()},
        {name:'項目5', isSelect:false, id:'two-'+Math.random()}
      ]),
      isAllSelect = computed(() => items.value.every(item => item.isSelect)),
      isAllSelect2= computed({
        get(){
          return items2.value.every(item => item.isSelect)
        },
        set(val){
          items2.value.forEach(item => item.isSelect = val);
        }
      }),
      selectAllHandle = () => {
        if(isAllSelect.value){
          console.log('is true, all false')
          items.value.forEach(item => item.isSelect = false);
        }else{
          console.log('is false, all true')
          items.value.forEach(item => item.isSelect = true);
        }
      };
onMounted(() => {
  document.cookie = 'name = Amos'
});
</script>

<template>
<div class="checkBox">
  <div class="checkBox_wrap">
    <label class="checkBox_btn" for="checkAll" @click.prevent="selectAllHandle">
      <input type="checkbox" id="checkAll" v-model="isAllSelect">
      全選A
    </label>
    <div class="checkBox_box">
      <label class="checkBox__list" :for="'checkList'+idx" v-for="(item,idx) in items" :key="item.id">
        <input type="checkbox" :id="'checkList'+idx" v-model="item.isSelect">
        A-{{ item.name }}
      </label>
    </div>
  </div>
  <div class="checkBox_wrap">
    <label class="checkBox_btn" for="checkAll2">
      <input type="checkbox" id="checkAll2" v-model="isAllSelect2">
      全選B
    </label>
    <div class="checkBox_box">
      <label class="checkBox__list" :for="'checkList2'+idx" v-for="(item,idx) in items2" :key="item.id">
        <input type="checkbox" :id="'checkList2'+idx" v-model="item.isSelect">
        B-{{ item.name }}
      </label>
    </div>
  </div>
  <div class="checkPre">
    <pre class="checkPre_bool">{{ isAllSelect2 }}</pre>
    <pre class="checkPre_obj">{{ items2 }}</pre>
  </div>
</div>
</template>

<style lang="scss">
#checkAll{pointer-events:none;}
.checkBox{
  background-color:rgba(#0ff, .2);
  &_wrap{padding:15px 0;}
  &_btn, &__list{
    background-color:#ccc;
    border-radius:5px;
    padding:5px;
  }
  &_box{margin-top:15px;}
  &__list + .checkBox__list{margin-left:15px;}
}
.checkPre{
  display:flex;
  padding:20px;
  &_obj{
    text-align:left;
    width:60%;
  }
  &_bool{width:40%;}
}
</style>