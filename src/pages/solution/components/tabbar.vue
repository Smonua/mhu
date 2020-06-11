<template>
  <div id="tabbar">
    <div id="title">
      <div class="title">
        <span
          v-for="item in tabbar"
          :key="item.id"
          :style="'color:'+(item.col?'#02247d':'')"
          @click="change(item)"
        >{{item.title}}</span>
      </div>
    </div>
  </div>
</template>

<script>
// import logo from "../../assets/images/logo.png";
export default {
  data() {
    return {};
  },
  props: ["tabbar"],
  methods: {
    change(item) {
      this.$eventbus.$emit("tabbar_item", item);
    }
  },
  mounted() {}
};
</script>
<style scoped lang="less">
@import "../../../assets/css/main.less";
#title {
  width: 75rem;
  height: 7rem;
  margin: 0 auto;
  background: white;
  //   background: beige;
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
    span {
      font-size: 1.5rem;
    }
    span:hover {
      cursor: default;
    }
  }
}
</style>