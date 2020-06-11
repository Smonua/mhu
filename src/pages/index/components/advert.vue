<template>
  <div id="advert">
    <el-carousel indicator-position="outside" height="42.5rem">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
// import logo from "../../assets/images/logo.png";
export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>
<style scoped lang="less">
@import "../../../assets/css/main.less";
#advert {
  width: 100%;
  height: 42.5rem;
//   background: orange;

  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}
</style>