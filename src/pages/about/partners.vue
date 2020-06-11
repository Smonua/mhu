<template>
  <div id="partners">
    <Tabbar :tabbar="tabbar"></Tabbar>
    <!-- <img src="" /> -->
  </div>
</template>
<script>
import Tabbar from "./components/tabbar";
export default {
  data() {
    return {
      tabbar: [
        { col: true, title: "加入要求" },
        { col: false, title: "伙伴权益" }
      ]
    };
  },
  components: {
    Tabbar
  },
  mounted() {},
  methods: {}
};
</script>
<style scoped lang="less">
#partners {
  width: 100%;
  height: 20rem;
  //   background: blanchedalmond;
}
</style> 