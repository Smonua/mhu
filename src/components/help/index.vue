<template>
  <div id="help">
    <span id="title">产品帮助</span>
    <div id="images">
      <img  v-for="item in helpList" :key="item.id" :src="item" alt />
    </div>
  </div>
</template>

<script>
// import logo from "../../assets/images/logo.png";
export default {
  data() {
    return {
      helpList: [
        require("../../assets/images/partners1.jpg"),
        require("../../assets/images/help.jpg"),
        require("../../assets/images/partners2.gif"),
        require("../../assets/images/help.jpg"),
        require("../../assets/images/partners3.gif")
      ]
    };
  },
  methods: {},
  mounted() {}
};
</script>
<style scoped lang="less">
@import '../../assets/css/main.less';

#help {
  width: 75rem;
  height: 20rem;
  margin: 0 auto;
  color: black;
  background: white;
  .column;
  justify-content: space-around;
  #title {
    width: 100%;
    margin-top: 1.25rem;
    font-size:1.875rem;
    font-weight: 300;
    text-align: center;
    color: black;
  }
  #images {
    width: 100%;
    height: 10rem;
    border: 0.125rem solid #ccc;
    border-radius: 0.9375rem;
    .row;
    justify-content: space-around;
  }
}
</style>