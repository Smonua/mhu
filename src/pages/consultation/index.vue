<template>
  <div id="consult">
    <Bar />
    <Content />
  </div>
</template>

<script>
// import logo from "../../assets/logo.png";
import Bar from "./components/bar.vue";
import Content from "./components/content.vue";
export default {
  data() {
    return {};
  },
  components: {
    Bar,
    Content
  },
  methods: {},
  mounted() {
    this.$eventbus.$emit("nav_left", "45rem");
  }
};
</script>
<style scoped lang="less">
@import "../../assets/css/main.less";
#consult {
  width: 75rem;
  height: 100vh;
  // background: rgba(255,255,255, 0.8);
  // background: blanchedalmond;
  margin: 0 auto;
  .row;
  justify-self: start;
}
</style>
