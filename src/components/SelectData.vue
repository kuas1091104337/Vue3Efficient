<script setup>

</script>

<template>
<div class="tlPop">
  <div class="tlPop_wrap"></div>
</div>
</template>

<style lang="scss">
@keyframes popShow{
  0%{ opacity:.5; }
  100%{ opacity:1; }
}
@keyframes popWrapShow{
  0%{ transform:scale3d(.7,.7,1); }
  100%{ transform:scale3d(1,1,1); }
}
.tlPop{
  width:100%;
  height:100%;
  display: flex;
  background-color: rgba(#000,.65);
  position: fixed;
  top: 0;
  left: 0;
  z-index:1;
  animation:popShow .3s linear both;
  &_wrap{
    margin:auto;
    animation:popWrapShow .3s linear both;
    .cardBox{opacity:1;}
  }
}
</style>