<script setup>
import { ref } from "vue";
import axios from "axios";
const isReg = ref(false),
      errorMessage = ref({}),
      registered = ref({
        username:'', password:'', sex:'', email:'', age:'', terms:false,
      }),
      successFn = () => {
        alert("註冊成功");
        isReg.value = true;
      },
      errorFn = error => {
        Object.keys(error).forEach(key => errorMessage.value[key] = error[key]);
      },
      handRegisteredFn = async () => {
        errorMessage.value = {}
        try{
          const res = await axios.post("https://vue-lessons-api.vercel.app/auth/registered",registered);
          if(res.data.success) successFn();
        }catch(error){
          errorFn(error.response.data.error_message);
        }
      };
</script>

<template>
<div class="post">
  <div class="post_wrap" v-if="!isReg">
    <div class="post__box">
      <p class="post__box_txt">NAME</p>
      <input class="post__box_input" type="text" placeholder="輸入使用者名稱" v-model="registered.username" />
      <p class="post__box_error">{{ errorMessage.username }}</p><!-- error message -->
    </div>
    <div class="post__box">
      <p class="post__box_txt">PASSWORD</p>
      <input class="post__box_input" type="password" placeholder="輸入密碼" v-model="registered.password" />
      <p class="post__box_error">{{ errorMessage.password }}</p><!-- error message -->
    </div>
    <div class="post__box">
      <p class="post__box_txt">E-MAIL</p>
      <input class="post__box_input" type="text" placeholder="輸入email" v-model="registered.email" />
      <p class="post__box_error">{{ errorMessage.email }}</p><!-- error message -->
    </div>
    <div class="post__box">
      <p class="post__box_txt">年齡</p>
      <input class="post__box_input" type="number" placeholder="輸入年齡" v-model="registered.age" />
    </div>
    <div class="post__box post__box-center">
      <input class="post__box_checkbox" type="radio" id="boy" value="boy" v-model="registered.sex" />
      <label class="post__box_label" for="boy">boy</label>
      <input class="post__box_checkbox" type="radio" id="girl" value="girl" v-model="registered.sex" />
      <label class="post__box_label" for="girl">girl</label>
    </div>
    <div class="post__box post__box-center">
      <input class="post__box_checkbox" type="checkbox" id="postList" v-model="registered.terms" />
      <label class="post__box_label" for="postList">我已閱讀使用者條款</label>
    </div>
    <button class="from_btn" @click="handRegisteredFn">送出</button>
  </div>
  <div class="post_wrap" v-else> <!-- success page -->
    <h1 class="post__title">註冊成功</h1>
  </div>
</div>
</template>

<style lang="scss">
.post{
  font-size:16px;
  line-height:1.5;
  margin-bottom:50px;
  &_wrap{
    width:420px;
    margin:0 auto;
  }
  &__box{
    display:flex;
    align-items:center;
    margin-bottom:16px;
    &-center{
      width:260px;
      justify-content:center;
    }
    &_txt{
      width:100px;
      text-align:left;
    }
    &_label{
      margin:0 8px;
      + .post__box_checkbox{margin-left:16px;}
    }
    &_error{color:rgb(255, 119, 119);}
    &_input{
      font-size:16px;
      line-height:1.5;
      width:150px;
      border:none;
      padding:5px;
      margin-right:12px;
    }
    &_checkbox{
      width:24px;
      height:24px;
    }
  }
  &__title{color:rgb(255, 119, 119);}
}
</style>