<template>
  <div id="partners">
    <span id="title">合作伙伴</span>
    
    <div id="images">
      <img v-for="item in partner" :key="item.id" :src="item.image" alt  />
      <!-- <img v-for="item in partnersList" :key="item.id" :src="item" alt  /> -->
    </div>
  </div> 
</template>

<script>
// import logo from "../../assets/images/logo.png";
export default {
  data() {
    return {
      partnersList:[require('../../assets/images/partners1.jpg'),require('../../assets/images/partners2.gif'),require('../../assets/images/partners3.gif'),require('../../assets/images/partners4.gif'),require('../../assets/images/partners5.gif'),require('../../assets/images/partners6.jpg')]
    };
  },
  props:["partner"],
  methods: {},
  mounted() {}
};
</script>
<style scoped lang="less">
@import '../../assets/css/main.less';

#partners{
    width: 75rem;
    height: 15rem;
    margin:0 auto;
    color: black;
    // background: beige;
    .column;
    align-items: center;
    justify-content: center;
    #title {
      width: 100%;
      font-size: 1.5rem;
      font-weight: 600;
      text-align: center;
    }
    #images{
      width: 95%;
      height: 50%;
      // background: #ccc;
      .row;
      justify-content:space-between;
      img{
        width: 6.25rem;
      }
    }
}
</style>