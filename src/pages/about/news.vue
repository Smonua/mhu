<template>
  <div id="news">
    <Tabbar :tabbar="tabbar"></Tabbar>
    <div class="news">
      <img :src="newsbg" alt />
      <div class="content">
        <el-card
          body-style="padding:0"
          class="box-card"
          shadow="hover"
          v-for="item in 3"
          :key="item.id"
        >
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
      <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
    </div>
  </div>
</template>
<script>
import Tabbar from "./components/tabbar";
import newsbg from "../../assets/images/index_map_bg.jpg";
export default {
  data() {
    return {
      newsbg: newsbg,
      tabbar: [
        { col: true, title: "公司新闻" },
        { col: false, title: "活动新闻" }
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
#news {
  width: 100%;
  height: 70rem;
  //   background: blanchedalmond;
  .column;
  justify-content: center;
  .news {
    width: 75rem;
    height: 100%;
    // background: blanchedalmond;
    .column;
    justify-content: space-around;
    img {
      width: 100%;
      height: 20rem;
      margin: 2%;
    }
    .content {
      width: 100%;
      height: 35rem;
      //background: cadetblue;
      .column;
      justify-content: space-around;
      .box-card {
        width: 100%;
        height: 11.5rem;
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
  }
}
</style>