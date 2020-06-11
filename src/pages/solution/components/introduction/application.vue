<template>
  <div id="application">
    <span id="title">应用层</span>
    <div id="content">
      <img :src="url" />
    </div>
  </div>
</template>

<script>
import url from "../../../../assets/images/application.gif";
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
#application {
  width: 100%;
  height: 30rem;
  background: #26346e;
  .column;
  justify-content: space-around;
  #title {
    width: 100%;
    font-size:1.875rem;
    font-weight: 600;
    text-align: center;
    // background: blanchedalmond;
  }
  #content {
    width: 75rem;
    height: 60%;
    img {
      width: 100%;
    }
  }
}
</style>