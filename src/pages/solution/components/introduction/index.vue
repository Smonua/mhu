<template>
  <div id="introduction">
    <!-- <Framework></Framework>
    <Exhibition></Exhibition>
    <Application></Application>
    <Service></Service>
    <Resources></Resources>
    <Infrastructure></Infrastructure>
    <Perception></Perception>-->
    <div v-html="content" class="content"></div>
  </div>
</template>

<script>
// import logo from "../../assets/images/logo.png";
// import Framework from "./framework.vue";
// import Exhibition from "./exhibition.vue";
// import Application from "./application.vue";
// import Service from "./service.vue";
// import Resources from "./resources.vue";
// import Infrastructure from "./infrastructure.vue";
// import Perception from "./perception.vue";
export default {
  data() {
    return {
      content: "<h1>这是一个h1元素内容</h1>"
    };
  },
  components: {
    // Framework,
    // Exhibition,
    // Application,
    // Service,
    // Resources,
    // Infrastructure,
    // Perception
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
// @import "../../../assets/css/main.less";
#introduction {
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