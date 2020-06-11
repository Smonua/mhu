<template>
  <div id="infrastructure">
    <span id="title">基础设施层</span>
    <div id="content">
      <img :src="url" />
    </div>
  </div>
</template>

<script>
import url from "../../../../assets/images/infrastructure.gif";
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
#infrastructure {
  width: 100%;
  height:15rem;
  background: #02247d;
  // background: #cccccc;
  .column;
  justify-content: center;
  #title {
    width: 100%;
    height: 10%;
    font-size:1.875rem;
    font-weight: 600;
    text-align: center;
    // background: blanchedalmond;
    .row;
    justify-content: center;
  }
  #content {
    width: 75rem;
    height: 70%;
    // background: chocolate;
    .row;
    justify-content: center;
    img {
      width: 100%;
    }
  }
}
</style>