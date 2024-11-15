<script setup>
const model = defineModel();
</script>
<template>
  <div class="memberNav">
    <div class="memberNav_item">
      <input v-model="model" type="radio" id="higher" class="memberNav__input" name="drone" value="higher" />
      <label class="memberNav__label" for="higher">高級 </label>
    </div>
    <div class="memberNav_item">
      <input v-model="model" type="radio" id="medium" class="memberNav__input" name="drone" value="medium" />
      <label class="memberNav__label" for="medium">中等 </label>
    </div>
    <div class="memberNav_item">
      <input v-model="model" type="radio" id="lowLevel" class="memberNav__input" name="drone" value="lowLevel" />
      <label class="memberNav__label" for="lowLevel">一般</label>
    </div>
  </div>
</template>
<style scoped lang="scss">
.memberNav{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0px;
  &_item{margin: 0px 10px;}
  &__label{font: 30px "Fira Sans", sans-serif;}
  &__input{
    width: 20px;
    height: 20px;
    margin: 0.4rem;
  }
}
</style>
