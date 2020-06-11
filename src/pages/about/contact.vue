<template>
  <div id="contact">
    <Tabbar :tabbar="tabbar"></Tabbar>
    <div class="contact">
      <div class="content">
        <el-card
          body-style="padding:0"
          class="box-card"
          shadow="hover"
          v-for="item in 3"
          :key="item.id"
        >
          <img :src="cartbg" alt />
          <div>
            <p>
              售前咨询热线
              <span>0755-3331-9803</span>
            </p>
            <p>
              工作日早9：00-晚8：00
              <span>休息日早9：00-晚6：00</span>
            </p>
          </div>
        </el-card>
      </div>
      <img :src="contactbg" alt />
    </div>
  </div>
</template>
<script>
import Tabbar from "./components/tabbar";
import contactbg from "../../assets/images/index_map_bg.jpg";
import cartbg from "../../assets/images/index_bg_project4.jpg";
export default {
  data() {
    return {
      contactbg: contactbg,
      cartbg: cartbg,
      tabbar: [
        { col: true, title: "服务联系" },
        { col: false, title: "服务地址" }
      ]
    };
  },
  components: {
    Tabbar
  },
  mounted() {},
  methods: {}
};
</script>
<style scoped lang="less">
@import "../../assets/css/main.less";
#contact {
  width: 100%;
  height: 50rem;
  //   background: blanchedalmond;
  .column;
  justify-content: center;
  .contact {
    width: 75rem;
    height: 100%;
    // background: blanchedalmond;
    .column;
    justify-content: space-around;
    .content {
      width: 100%;
      height: 10rem;
      //   background: cadetblue;
      .row;
      justify-content: space-between;
      .box-card {
        width: 30%;
        height: 100%;
        // background: burlywood;
        img {
          width: 20%;
          height: 20%;
          float: left;
          margin: 10% 0 0 5%;
        }
        div {
          float: right;
          width: 60%;
          height: 10rem;
          margin-right: 5%;
          //   background: cornsilk;
          p {
            .column;
            align-items: flex-start;
            justify-content: center;
            font-weight: 600;
          }
          p:nth-of-type(1) {
            font-size: 1.5rem;
            span {
              font-size: 0.75rem;
              font-weight: 100;
            }
          }
          p:nth-of-type(2) {
            font-size: 0.75rem;
            font-weight: 600;
          }
        }
      }
    }
    img {
      width: 100%;
      height: 20rem;
    }
  }
}
</style> 