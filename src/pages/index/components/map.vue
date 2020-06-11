<template>
  <div id="map">
    <div id="title">
      <span>服务全球化 贴近客服</span>
      <p class="txt">
        布局全球多个地理区域，提供高速稳定的全球云联接网络、
        贴近客户的本地化服务
      </p>
      <div class="title">
        <p>数据中心：</p>
        <ul>
          <li>北京一</li>
          <li>北京一</li>
          <li>北京一</li>
        </ul>
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
  methods: {},
  mounted() {}
};
</script>
<style scoped lang="less">
@import '../../../assets/css/main.less';
#map {
  width: 100%;
  height:38rem;
  background-image: url(../../../assets/images/index_map_bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  #title {
    width: 75rem;
    height: 90%;
    margin: 0 auto;
    padding-top:5% ;
    // background: cornsilk;
    // position: absolute;
    // top: 15.625rem;
    // left: 8.125rem;
    span {
      font-size: 2.5rem;
      border-bottom: 0.21875rem solid white;
    }
    .txt {
      font-size: 1.5rem;
      width: 58.125rem;
      line-height: 150%;
      font-weight: 300;
    }
    .title {
      width: 60%;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      p {
        font-size: 1.5rem;
      }
      ul {
        // background: cornflowerblue;
        margin-top: 2.25rem;
        li {
          margin-left: -1.875rem;
          list-style: none;
          font-size: 1.5rem;
        }
      }
    }
  }
}
</style>