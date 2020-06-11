<template>
  <div id="service">
    <span id="title">服务层</span>
    <div id="content">
      <div class="content" v-for="item in con" :key="item.id">
        {{item.tit}}
        <span>{{item.txt}}</span>
      </div>
    </div>
  </div>
</template>

<script>
// import url from "../../../../assets/images/service.gif";
export default {
  data() {
    return {
      // url:url
      con: [
        { tit: "用户认证", txt: "授权服务" },
        { tit: "地理", txt: "信息服务" },
        { tit: "位置", txt: "信息服务" },
        { tit: "实时", txt: "消息服务" },
        { tit: "运维和监控", txt: "" },
        { tit: "数据分析和检索服务", txt: "" },
        { tit: "企业服务总线", txt: "" }
      ]
    };
  },
  methods: {},
  mounted() {}
};
</script>
<style scoped lang="less">
@import "../../../../assets/css/main.less";
#service {
  width: 100%;
  height: 20rem;
  background: #e6b53d;
  .column;
  justify-content: space-around;
  #title {
    width: 100%;
    height: 20%;
    font-size: 1.875rem;
    font-weight: 600;
    text-align: center;
    color: white;
    // background: blanchedalmond;
    .row;
    justify-content: center;
  }
  #content {
    width: 75rem;
    height: 60%;
    // background: burlywood;
    .row;
    justify-content: space-around;
    .content {
      width: 10rem;
      height: 8.75rem;
      border: 0.0625rem solid #ccc;
      .column;
      justify-content: center;
      color: white;
    }
    .content:hover {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    }
  }
}
</style>