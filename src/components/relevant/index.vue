<template>
  <div id="relevant">
    <div class="relevant">
      <span id="title">相关服务</span>
      <div id="images">
        <figure v-for="item in relevantList" :key="item.id">
          <img :src="item.url" alt />
          <div>
            <span>{{item.txt}}</span>
          </div>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
// import logo from "../../assets/images/logo.png";
export default {
  data() {
    return {
      relevantList: [
        {
          url: require("../../assets/images/relevant1.jpg"),
          txt: "参观机房"
        },
        {
          url: require("../../assets/images/relevant2.jpg"),
          txt: "服务资质"
        },
        {
          url: require("../../assets/images/relevant3.jpg"),
          txt: "服务优势"
        },
        {
          url: require("../../assets/images/relevant4.jpg"),
          txt: "免费备案"
        },
        {
          url: require("../../assets/images/relevant5.jpg"),
          txt: "速度测试"
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

#relevant {
  width: 100%;
  height: 22.5rem;
  color: black;
  background: #47494d;
  .relevant {
    margin: 0 auto;
    width: 75rem;
    height: 100%;
    .column;
    justify-content: center;
    #title {
      width: 100%;
      margin-top: 1.25rem;
      font-size: 1.875rem;
      font-weight: 400;
      text-align: center;
      color: white;
    }
    #images {
      width: 100%;
      height: 25rem;
      // background: #ccc;
      .row;
      align-items: flex-end;
      justify-content:space-between;
      figure {
        width: 10rem;
        height: 60%;
        background: white;
        .column;
        justify-content: space-around;
        div {
          // background: chocolate;
          height: 3.75rem;
          .column;
          justify-content: space-between;
          span {
            font-size: 1.5rem;
          }
        }
      }
    }
  }
}
</style>