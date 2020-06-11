<template>
  <div id="tabbar">
    <div id="title">
      <div class="title" v-for="item in tabbar" :key="item.id">
        <span :style="' color:'+(item.col?'#02247d':'')">
          {{item.title}}
          <i :class="(item.col?'el-icon-arrow-down':'')"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["tabbar"],
  methods: {},
  mounted() {}
};
</script>
<style scoped lang="less">
@import "../../../assets/css/main.less";
#tabbar {
  width: 100%;
  height: 5.375rem;
  background: white;
  box-shadow: 2px 2px 5px #ccc;
  #title {
    width: 50%;
    height: 100%;
    margin: 0 auto;
    // background: orange;
    color: black;
    .row;
    justify-content: center;
    .title {
      width: 100%;
      height: 100%;
      //   background: blanchedalmond;
      .row;
      justify-content: space-around;
      color: black;
    }
  }
}
</style>