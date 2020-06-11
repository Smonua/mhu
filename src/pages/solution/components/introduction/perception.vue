<template>
  <div id="perception">
    <span id="title">感知层</span>
    <div id="content">基础数据采集设备（车载终端，北斗/gps,电子车牌，移动终端，RDIF等）</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>
<style scoped lang="less">
@import "../../../../assets/css/main.less";
#perception {
  width: 100%;
  height: 15rem;
  // background: #cccccc;
  .column;
  justify-content: center;
  color: black;
  #title {
    width: 100%;
    height: 40%;
    font-size:1.875rem;
    font-weight: 600;
    text-align: center;
    // background: blanchedalmond;
    .row;
    justify-content: center;
  }
  #content {
    letter-spacing: 0.3125rem;
    width: 75rem;
    height: 60%;
    // background: chocolate;
    .row;
    justify-content: center;
  }
}
</style>