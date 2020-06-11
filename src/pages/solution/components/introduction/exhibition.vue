<template>
  <div id="exhibition">
    <span id="title">展示层</span>

    <div id="content">
      <figure v-for="item in exhibitionList" :key="item.id">
        <span>
          <img :src="item.url" />
        </span>
        <figcaption>{{item.txt}}</figcaption>
      </figure>
    </div>
  </div>
</template>

<script>
// import logo from "../../assets/images/logo.png";
export default {
  data() {
    return {
      exhibitionList: [
        {
          url: require("../../../../assets/images/exhibition1.gif"),
          txt: "监控大屏"
        },{
          url: require("../../../../assets/images/exhibition2.gif"),
          txt: "pc 端"
        },{
          url: require("../../../../assets/images/exhibition1.gif"),
          txt: "移动端"
        },{
          url: require("../../../../assets/images/exhibition2.gif"),
          txt: "车载终端"
        },{
          url: require("../../../../assets/images/exhibition1.gif"),
          txt: "微信"
        }
      ]
    };
  },
  methods: {},
  mounted() {}
};
</script>
<style scoped lang="less">
@import "../../../../assets/css/main.less";

#exhibition {
  width: 100%;
  height: 25rem;
  color: black;
  background: white;
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
    // background: #ccc;
    .row;
    justify-content: space-around;
    figure {
      width: 11.25rem;
      height: 11.25rem;
      background: #eeeef4;
      border-radius: 50%;
      .column;
      justify-content: center;
    }
  }
}
</style>