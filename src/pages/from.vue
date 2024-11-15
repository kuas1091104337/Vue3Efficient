<script setup>
import { ref, onMounted, watch, computed } from "vue";
import axios from "axios";
const email = ref(''),
      password = ref(''),
      isCheck = ref(false),
      courselist = ref({
        checkItem:[],
        tags:[ {tag:"JavaScript"}, {tag:"Html"}, {tag:"Css"}, {tag:"Html5"}, {tag:"Vuejs"}, {tag:"React"}, {tag:"Sass"}, {tag:"Css3"}, {tag:"Canvas"}, ],
      }),
      twZip = ref({ city: [], area: [] }),
      city = ref(''),
      area_c = ref(''),
      area_w = ref(''),
      isSuccess = ref(false), //是否註冊成功
      registered = ref({ //欄位
        age:'', email:'', password:'', sex:'', terms:false, username:''
      }),
      errorMessage = ref({}), //錯誤訊息塞這邊
      checkedNames = ref([]),
      checked = ref(false),
      selected = ref(''),
      picked = ref(''),
      emailCheck = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
      passwordCheck = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$.\%\^\&\*\(\)])[0-9a-zA-Z!@#$.\%\^\&\*\(\)]{8,12}/,
      twZipArea = computed(() => {
        const filterArea = twZip.value.city.filter(item => item.name === city.value)
        return filterArea.length ? filterArea[0].area : filterArea
      }),
      submitFrom = () => {
        if(!isCheck.value) return alert('請確認使用者條款');
        if(!email.value && !password.value) return alert('email與密碼不能空白');
        if(!email.value) return alert('email不能空白');
        if(!password.value) return alert('密碼不能空白');
        if(!emailCheck.test(email.value)) return alert('email格式錯誤');
        if(!passwordCheck.test(password.value)) return alert('密碼格式錯誤');
        const req = { email:email.value, password:password.value, isCheck:isCheck.value }
        console.log(req);
      },
      selectCheck = () => console.log(courselist.value.checkItem),
      handSelect = () => console.log('city:'+city.value+',area:'+area.value),
      handRegisteredFn = async () => {
        errorMessage.value = {}
        try{
          // const res = await axios.post("https://vue-lessons-api.vercel.app/auth/registered",registered.value);
          await axios.post("https://vue-lessons-api.vercel.app/auth/registered",registered.value);
          isSuccess.value = true
        }catch(error){
          // 密碼長度須超過6個字元', email: '請輸入正確的email格式
          console.log(error.response.data)
          errorMessage.value = error.response.data.error_message
        }
      };

watch(city,newCity => twZip.value.area = twZip.value.city.filter(item => item.name === newCity)[0].area);

onMounted(async () => {
  // axios.get("https://vue-lessons-api.vercel.app/city/list").then((res) => { res.data; })
  const res = await axios.get("https://vue-lessons-api.vercel.app/city/list");
  twZip.value.city = res.data.twzip.city
  // console.log(twZip.value.city)
});
</script>

<template>
  <div class="from">
    <img class="from_logo" src="../assets/thecodingprologo.png" alt="" />
    <div class="from_box">
      <p>單一的複選框，綁定布林類型值</p>
      <input type="checkbox" id="checkbox" v-model="checked" />
      <label for="checkbox">{{ checked }}</label>
    </div>
    <div class="from_box">
      <p>複選框</p>
      <p>Checked names: {{ checkedNames }}</p>
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames" />
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
      <label for="mike">Mike</label>
    </div>
    <div class="from_box">
      <p>單選按鈕</p>
      <div>Picked: {{ picked }}</div>
      <input type="radio" id="one" value="One" v-model="picked" />
      <label for="one">One</label>
      <input type="radio" id="two" value="Two" v-model="picked" />
      <label for="two">Two</label>
    </div>
    <div class="from_box">
      <p>選擇器</p>
      <div>Selected: {{ selected }}</div>
      <select v-model="selected">
        <option disabled value="">Please select one</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
    </div>
    <div class="post">
      <div class="post_wrap" v-if="!isSuccess">
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
          <input class="post__box_checkbox" type="checkbox" id="checkbox" v-model="registered.terms" />
          <label class="post__box_label" for="checkbox">我已閱讀使用者條款</label>
        </div>
        <button class="from_btn" @click="handRegisteredFn">送出</button>
      </div>
      <!-- success page -->
      <div class="post_wrap" v-else>
        <h1 class="post__title">註冊成功</h1>
      </div>
    </div>
    <div class="selectWrap">
      <select class="selectWrap_item" v-model="city">
        <option disabled value="">請選擇縣市</option>
        <option v-for="item in twZip.city" :key="item.name">{{ item.name }}</option>
      </select>
      <select class="selectWrap_item" v-model="area_c">
        <option disabled value="">請選擇區域 computed</option>
        <option v-for="item in twZipArea" :key="item.name" :value="item.zip">{{ item.name }}</option>
      </select>
      <select class="selectWrap_item" v-model="area_w">
        <option disabled value="">請選擇區域 watch</option>
        <option v-for="item in twZip.area" :key="item.name" :value="item.zip">{{ item.name }}</option>
      </select>
    </div>
    <button class="from_btn" @click="handSelect">送出</button>
    <ul class="checkBox">
      <li class="checkBox_list" v-for="(item,idx) in courselist.tags" :key="item.tag">
        <input v-model="courselist.checkItem" type="checkbox" :value="item.tag" :id="item.tag" class="from__checkbox"/>
        <label :for="item.tag">{{ item.tag }}</label>
      </li>
    </ul>
    <button class="from_btn" @click="selectCheck">送出</button>
    <div class="from_box">
      <p class="from__tag">E-MAIL</p>
      <input 
        class="from__input" 
        type="text" 
        placeholder="輸入email"
        v-model="email"
      />
    </div>
    <div class="from_box">
      <p class="from__tag">密碼</p>
      <input 
        class="from__input" 
        type="text" 
        placeholder="輸入密碼"
        v-model="password"
      />
    </div>
    <div class="from_box from_box-fc">
      <input 
        type="checkbox" 
        id="checkbox" 
        class="from__checkbox"
        v-model="isCheck"
      />
      <label class="from__tag" for="checkbox">我已閱讀使用者條款</label>
    </div>
    <button class="from_btn" @click="submitFrom">登入</button>
  </div>
</template>

<style lang="scss">
.post{
  font-size:16px;
  line-height:1.5;
  margin-bottom:50px;
  &_wrap{
    width:410px;
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
.selectWrap{
  display: flex;
  justify-content:center;
  margin-bottom:15px;
  &_item{
    width: 200px;
    height: 30px;
    + .selectWrap_item{margin-left:20px;}
  }
}
.checkBox{
  &_list{margin-bottom:10px;}
}
.from{
  color:#fff;
  background-color:#333;
  padding:50px 0;
  &_logo{
    width: 200px;
    margin: 0 auto 40px auto;
    display: block;
  }
  &_box{
    margin-bottom: 20px;
    &-fc{
      display: flex;
      justify-content: center;
    }
  }
  &__tag{margin-bottom:5px;}
  &__input{
    width: 250px;
    height: 35px;
    border-radius: 50px;
    border: 0;
    padding-left: 15px;
  }
  &__checkbox{margin-right:10px;}
  &_btn{
    color:#fff;
    font-size:18px;
    font-weight:bold;
    line-height:2;
    width:200px; 
    background-color:#00bd7e;
    border-radius:50px;
    border:none;
    margin-bottom:35px;
  }
}
</style>