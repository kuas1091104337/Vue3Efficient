<script setup>
import { onMounted, ref } from "vue";
const linkHtml = ref('<a href="https://thecodingpro.com/courses/vue3" target="_blank"> TheCodingpro </a>'),
      content = ref('本課程將帶你一步步的學習理解 <h1>Vue3 每個重要的語法以及搭配</h1> TypeScript 進行開發，讓同學們可以嘗試處理專案上面周邊技術的整合應用，以及體驗更真實的實際開發會遇到的問題情境，來教你思考解決如何解決問題，你將會一步步的學習到前端工程師在開發專案時的經驗過程。'),
      verificationCode = ref(""),
      h3Title = ref(null),
      handleSubmit = () => {
        const req = { code:verificationCode.value };
        console.log(req);
      },
      handleKeydown = (e) => {
        if(e.key === 'a') console.log('你點了按鈕a');
        console.log({
          key:e.key,
          code:e.code,
          KeyCode:e.keyCode
        });
      };

onMounted(async () => {
  console.log('onMounted => ', h3Title.value);
});
</script>

<template>
  <div>
    <p>ref target & v-html</p>
    <h3 ref="h3Title" v-html="linkHtml"></h3>
    <p>v-text</p>
    <p v-text="content"></p>
    <div class="inputWrap">
      <p>keyup.enter & input.value</p>
      <p>
        驗證碼:
        <input 
          class="code" 
          type="text" 
          v-model="verificationCode" 
          placeholder="輸入驗證碼"
          @keyup.enter="handleSubmit"
        />
      </p>
      <button class="button" @click="handleSubmit">Submit</button>
    </div>
    <div class="inputWrap">
      <p>keyup e types</p>
      <input type="text" @keyup="handleKeydown" placeholder="測試 key code" />
    </div>
  </div>
</template>

<style lang="scss">
.inputWrap{
  font-size:16px;
  width:280px;
  padding-top:100px;
  margin:0 auto;
}
.code { height:26px; }
.button {
  width: 100%;
  background-color:#ddd;
  margin-bottom:10px;
}
</style>