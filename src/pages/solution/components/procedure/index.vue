<template>
  <div id="procedure">
    <div v-html="content" class="content"></div>
  </div>
</template>

<script>
import url from "../../../../assets/images/procedure.gif";
export default {
  data() {
    return {
      url: url,
      content: "<h1>这是一个h1元素内容</h1>"
    };
  },
  props: ["conlist"],
  methods: {},
  mounted() {
    console.log(this.conlist);
    this.content = this.conlist.content;
  }
};
</script>
<style scoped lang="less">
@import "../../../../assets/css/main.less";
#procedure {
  width: 100%;
  min-height: 50rem;
  color: black;
  .content {
    width: 75rem;
    height: 100%;
    // background: blanchedalmond;
    margin: 0 auto;
  }
}
</style>