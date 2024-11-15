<script setup>
import { ref, reactive, watch, computed } from 'vue'

const props = defineProps({
  msg:String,
})
// vue2 (data(){return) > vue3
const data = reactive({
        prizeAmount: 0,
        isPrizePopOpen:false,
        betArr:[
          1000000, 300000, 100000, 50000, 30000, 10000, 5000, 1000
        ],
        isBtnActive:[
          false, false, false, false, false, false, false, false
        ]
      });

const count = ref(0),
      obj = reactive({count}),
      name = ref('mike'),
      userInfo = ref({ email:'' }),
      info = reactive({
        name:'Amos', age:12, email:'',
      }),
      watchVal = ref(0),
      watchNum = reactive({idx:0}),
      watchDate = ref({idx:0}),
      user = reactive({
        name:'Mike',
        age:12, 
        tel:'0933317532',
        concatData:computed(() => `名稱: ${user.name}, 年齡:${user.age}, 電話: ${user.tel}`)
      }),
      inputHandle = (e) => {
        info.email = e.target.value
        console.log(e);
      };

console.log(count);
console.log(obj.count === count.value)
setTimeout(() => {
  name.value = 'jacky'
  info.email = 'mike@gmail.com'
  userInfo.value.email = 'ggyy@gmail.com'
  watchVal.value++
  watchNum.idx++
  watchDate.value.idx++
},1000);
watch(watchVal,(newWatchVal,oldWatchVal) => console.log(`new : ${newWatchVal}, old : ${oldWatchVal}`));
watch(() => watchNum.idx, (newWatchNum, oldWatchNum) => console.log(`new:${newWatchNum}, old:${oldWatchNum}`));
watch(watchDate,(newWatchDate,oldWatchDate) => console.log(`new : ${newWatchDate}, old : ${oldWatchDate}`),{deep:true});
watch(() => watchDate.value.idx, (newWatchDate,oldWatchDate) => console.log(`new : ${newWatchDate}, old : ${oldWatchDate}`));

</script>

<template>
  <h1 class="HWtitle">{{ props.msg }}</h1>
  <h2>{{ name }}</h2>
  <input type="text" v-model="name" name="" id="">
  <p>{{ info }}</p>
  <!-- <input type="text" v-model="info.email" name="" id=""> -->
  <input type="text" :value="info.email" @input="inputHandle" name="" id="">
  <div class="card">
    <button class="HWbutton" type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
  <p>
    Check out
    <a class="HWlink" href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
    starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a class="HWlink" href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support" target="_blank">Vue Docs Scaling up Guide</a>.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style lang="scss">
.HWlink{
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
  &:hover{color:#535bf2;}
}
.HWtitle{
  font-size: 3.2em;
  line-height: 1.1;
}
.card { padding: 2em; }
.HWbutton{
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 8px;
  padding: 0.6em 1.2em;
  background-color: #1a1a1a;
  transition: border-color 0.25s;
  &:hover { border-color: #646cff; }
  &:focus, &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
}
@media (prefers-color-scheme: light) {
  .HWlink:hover{ color: #747bff; }
  .HWbutton{ background-color: #f9f9f9; }
}
</style>
