<template>
  <div id="resources">
    <span id="title">数据资源层</span>
    <div id="content">
      <img :src="url" />
    </div>
  </div>
</template>

<script>
import url from "../../../../assets/images/resources.gif";
export default {
  data() {
    return {
      url: url
    };
  },
  methods: {},
  mounted() {}
};
</script>
<style scoped lang="less">
@import "../../../../assets/css/main.less";
#resources {
  width: 100%;
  height: 30rem;
  .column;
  justify-content: space-around;
  #title {
    width: 100%;
    height: 10%;
    font-size:1.875rem;
    font-weight: 600;
    text-align: center;
    color: black;
    // background: blanchedalmond;
    .row;
    justify-content: center;
  }
  #content {
    width: 75rem;
    height: 60%;
    .row;
    justify-content: center;
    img {
      width: 100%;
    }
  }
}
</style>