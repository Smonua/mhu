<template>
  <div id="product_content">
    <div class="product_content">
      <el-card
        body-style="padding:0"
        class="box-card"
        shadow="hover"
        v-for="item in contentList"
        :key="item.id"
      >
        <div class="content">
          <p>
            {{item.name}}
            <span v-if="item.flag==='1'">热销</span>
          </p>
          <p>{{item.remark}}</p>
          <button>产品详情</button>
          <p class="timer">{{item.price}}</p>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
// import logo from "../../assets/images/logo.png";
import { host } from "../../../../const";
export default {
  data() {
    return {
      contentList: []
     
    };
  },
  methods: {},
  mounted() {
    let url = host + "/portal/home/getallproduct";
    this.$axios.get(url).then(res => {
      this.contentList = res.data.data.product_recommend;
    });
  }
};
</script>
<style scoped lang="less">
@import "../../../../assets/css/main.less";
.product_content {
  width: 56.25rem;
  height: 37.5rem;
  //   background: chocolate;
  .row;
  justify-content: flex-start;
  align-content: space-between;
  flex-wrap: wrap;
  .box-card {
    width: 17.3rem;
    height: 12.25rem;
    border-radius: 0;
    // background: white;
    color: black;
    padding: 0 0.625rem;
    margin-right: 1px;
    .content {
      // background: olive;
      width: 80%;
      height: 17.3rem;
      margin: 0 auto;
      position: relative;
      p {
        margin: 0;
        text-align: justify;
      }
      p:nth-of-type(1) {
        font-size: 1rem;
        font-weight: 600;
        margin: 20% 0 5%;
        span {
          background: #d84f62;
          font-size: 0.875rem;
          font-weight: normal;
          color: white;
          padding: 0 0.1875rem;
        }
      }
      p:nth-of-type(3) {
        font-size: 0.875rem;
      }
      button {
        position: absolute;
        top: 40%;
        display: none;
        border: none;
        border-radius: 0.125rem;
        background: #d84f62;
        color: white;
        padding: 0.3125rem 1.5rem;
      }
    }
  }
  .box-card:nth-of-type(3),
  .box-card:nth-of-type(6),
  .box-card:nth-of-type(9) {
    margin-right: 0;
  }
  .timer {
    position: absolute;
    top: 40%;
  }
  .box-card:hover {
    box-shadow: 0 5px 12px 0 rgba(0, 0, 0, 1), 5px 0 12px 0 rgba(0, 0, 0, 1);
  }
  .box-card:hover button {
    display: block;
  }
  .box-card:hover .timer {
    display: none;
  }
}
</style>