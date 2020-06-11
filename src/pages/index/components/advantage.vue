<template>
  <div id="advantage">
    <div class="advantage">
      <div id="content">
        <div id="title">
          <span>THE ADVANTAGE</span>
          <span>我们的优势</span>
        </div>
        <div class="content">
          <figure v-for="item in contentList" :key="item.id">
            <img :src="item.url" alt />
            <figcaption>{{item.txt}}</figcaption>
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import logo from "../../assets/images/logo.png";
export default {
  data() {
    return {
      contentList: [
        {
          id: 1,
          url: require("../../../assets/images/index_advantage_icon1.gif"),
          txt: "先进的中立、BGP多线、云计算数据中心"
        },
        {
          id: 2,
          url: require("../../../assets/images/index_advantage_icon2.gif"),
          txt: "先进的中立、BGP多线、云计算数据中心"
        },
        {
          id: 3,
          url: require("../../../assets/images/index_advantage_icon3.gif"),
          txt: "先进的中立、BGP多线、云计算数据中心"
        },
        {
          id: 4,
          url: require("../../../assets/images/index_advantage_icon5.gif"),
          txt: "先进的中立、BGP多线、云计算数据中心"
        },
        {
          id: 5,
          url: require("../../../assets/images/index_advantage_icon5.gif"),
          txt: "先进的中立、BGP多线、云计算数据中心"
        },
        {
          id: 6,
          url: require("../../../assets/images/index_advantage_icon5.gif"),
          txt: "先进的中立、BGP多线、云计算数据中心"
        }
      ]
    };
  },
  methods: {},
  mounted() {}
};
</script>
<style scoped lang="less">
@import "../../../assets/css/main.less";
#advantage {
  width: 100%;
  height: 35rem;
  color: black;
  background-image: url(../../../assets/images/index_advantage_bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  .column;
  align-items: flex-start;
  justify-content: space-between;
  .advantage {
    width: 75rem;
    height: 100%;
    margin: 0 auto;
    // background: beige;
    #content {
      width: 50%;
      height: 100%;
      // background: rosybrown;
      #title {
        .column;
        width: 100%;
        height: 5rem;
        justify-content: center;
        padding-top: 1.25rem;
        color: white;
        span:nth-of-type(1) {
          // .span;
          font-size: 1.875rem;
          font-weight: 800;
        }
        span:nth-of-type(2) {
          // .span;
          margin-top: 0.625rem;
          font-size: 1.125rem;
        }
      }
      .content {
        width: 100%;
        height: 70%;
        // background: wheat;
        // margin-left: 8%;
        .row;
        flex-wrap: wrap;
        justify-content: center;
        align-content: center;
        figure {
          height: 20%;
          width: 36%;
          color: white;
          // background: yellowgreen;
        }
        figure:nth-last-of-type(1) {
          opacity: 0;
        }
      }
    }
  }
}
</style>