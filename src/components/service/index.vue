<template>
  <div id="service">
    <div class="service">
      <div id="title">
        <span>— 我们的服务 —</span>
        <span>我们的优势</span>
      </div>
      <div id="images">
        <!-- <figure v-for="item in serviceList" :key="item.id">
          <img :src="item.url" alt />
          <div>
            <span>{{item.txt1}}</span>
            <span>{{item.txt2}}</span>
          </div>
        </figure>-->
        <el-card
          body-style="padding:0"
          class="box-card"
          shadow="hover"
          v-for="item in serviceList"
          :key="item.id"
        >
          <img :src="item.url" alt />
          <div>
            <span>{{item.txt1}}</span>
            <span>{{item.txt2}}</span>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
// import logo from "../../assets/images/logo.png";
export default {
  data() {
    return {
      serviceList: [
        {
          url: require("../../assets/images/service1.jpg"),
          txt1: "五星级中立",
          txt2: "BGP多线数据中心"
        },
        {
          url: require("../../assets/images/service2.jpg"),
          txt1: "7*24电信级",
          txt2: "IDC环境保障能力"
        },
        {
          url: require("../../assets/images/service3.jpg"),
          txt1: "7*24标准化",
          txt2: "客户服务体系"
        },
        {
          url: require("../../assets/images/service1.jpg"),
          txt1: "免费赠送",
          txt2: "CDN网络加速"
        },
        {
          url: require("../../assets/images/service4.jpg"),
          txt1: "免费赠送10GBPS",
          txt2: "高防DDOS服务"
        }
      ]
    };
  },
  methods: {},
  mounted() {}
};
</script>
<style scoped lang="less">
@import "../../assets/css/main.less";
#service {
  width: 100%;
  height: 35rem;
  color: black;
  background: white;
  .service {
    width: 75rem;
    height: 100%;
    margin: 0 auto;
    .column;
    justify-content: space-around;
    #title {
      .column;
      justify-content: center;
      margin-top: 1rem;
      span {
        width: 100%;
        color: #02247d;
        font-size: 1.5rem;
        text-align: center;
      }
      span:nth-of-type(1) {
        font-size: 1rem;
      }
      span:nth-of-type(2) {
        font-weight: 400;
      }
    }

    #images {
      width: 100%;
      height: 21.875rem;
      // background: #ccc;
      .row;
      justify-content:space-between;
      .box-card {
        width: 19.5%;
        height: 21.875rem;
        // background: orange;
        border-radius: 0;
        .column;
        justify-content: space-around;
        div {
          // background: chocolate;
          height: 3.75rem;
          .column;
          justify-content: space-between;
        }
      }
    }
  }
}
</style>