<template>
  <div id="framework">
    <div id="content">
      <img :src="leftgif" />
      <div class="content">
        <span id="title">JIAGOU</span>
        <P>
          <span>架</span>构介绍（产品介绍）
        </P>
        <P>通过公务用车信息综合管理系统的建设实现省、市、县三级公务用车信息互联互通，构建公务用车管理的“全省一张网“，实现统一监管、统一调度、统一运维、统一结算。</P>
      </div>
    </div>
  </div>
</template>

<script>
import leftgif from "../../../../assets/images/introduction.gif";
export default {
  data() {
    return {
      leftgif: leftgif
    };
  },
  methods: {},
  mounted() {}
};
</script>
<style scoped lang="less">
@import "../../../../assets/css/main.less";
#framework {
  width: 100%;
  height: 40rem;
  background-color: #f6f8fa;
  #content {
    width: 75rem;
    height: 100%;
    margin: 0 auto;
    // background: beige;
    .row;
    align-items: center;
    justify-content: space-around;
    .content {
      width: 34.375rem;
      height: 35.625rem;
      //   background: chocolate;
      color: black;
      position: relative;
      #title {
        font-size: 4.5rem;
        color: #e6e9ec;
      }
      p:nth-of-type(1) {
        position: absolute;
        top: 1rem;
        font-size: 1.875rem;
        font-weight: bolder;
        span {
          border-bottom: 0.3125rem solid black;
        }
      }
      p:nth-of-type(2) {
        width: 90%;
        text-align: justify;
        line-height: 180%;
        text-indent: 2em;
        font-size: 1.125rem;
      }
    }
  }
}
</style>