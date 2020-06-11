<template>
  <div id="hotsale">
    <div id="title">
      <span>— 高性价比 —</span>
      <span>我们的大数据中心</span>
      <span>选择合适的网络托管包或致电我们寻求帮助。</span>
    </div>
    <div id="tab">
      <!-- <el-tabs tab-position="top" style="height: 200px;">
        <el-tab-pane :label="item.title" v-for="item in title" :key="item.id">
          <el-card
            body-style="padding:0"
            v-show="hotsale_Show"
            class="box-card animated fadeInUp"
            shadow="hover"
            v-for="item in tabcontent"
            :key="item.id"
          >
            <div class="card_top">
              <span>{{item.name}}</span>
              <span>{{item.price}}</span>
              <span>元 / 月</span>
            </div>
            <div class="card_bottom">
              <span>{{item.space}}</span>
              <span>{{item.database}}</span>
              <span>{{item.cpu}}</span>
              <span>{{item.flow}}</span>
              <span>{{item.ram}}</span>
              <el-button>马上购买</el-button>
            </div>
          </el-card>
        </el-tab-pane>
      </el-tabs> -->
      <div class="title">
        <span v-for="item in title" :key="item.id" @click="tabjump(item.id)">{{item.title}}</span>
      </div>
      <div class="content">
        <el-card
          body-style="padding:0"
          v-show="hotsale_Show"
          class="box-card animated fadeInUp"
          shadow="hover"
          v-for="item in tabcontent"
          :key="item.id"
        >
          <div class="card_top">
            <span>{{item.name}}</span>
            <span>{{item.price}}</span>
            <span>元 / 月</span>
          </div>
          <div class="card_bottom">
            <span>{{item.space}}</span>
            <span>{{item.database}}</span>
            <span>{{item.cpu}}</span>
            <span>{{item.flow}}</span>
            <span>{{item.ram}}</span>
            <el-button>马上购买</el-button>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
// import logo from "../../assets/images/logo.png";
import { host } from "../../../const";
export default {
  data() {
    return {
      title: [],
      tabcontent: [],
      tabList: [
        {
          id: 1,
          title: [
            { id: 1, txt: "共享主机" },
            { id: 2, txt: "经销商托管" },
            { id: 3, txt: "VPS主机" }
          ],
          content: [
            [
              {
                id: 1,
                sale1: ["初始1", "9", "元 / 月"],
                sale2: [
                  "500 MB SSD",
                  "磁盘RAID 1 SSD",
                  "磁盘额外SATA备份磁盘",
                  "1个允许的域名",
                  "10个子域"
                ]
              },
              {
                id: 2,
                sale1: ["专业1", "19", "元 / 月"],
                sale2: [
                  "500 MB SSD",
                  "磁盘RAID 1 SSD",
                  "磁盘额外SATA备份磁盘",
                  "1个允许的域名",
                  "10个子域"
                ]
              },
              {
                id: 3,
                sale1: ["豪华1", "39", "元 / 月"],
                sale2: [
                  "500 MB SSD",
                  "磁盘RAID 1 SSD",
                  "磁盘额外SATA备份磁盘",
                  "1个允许的域名",
                  "10个子域"
                ]
              }
            ],
            [
              {
                id: 1,
                sale1: ["初始2", "9", "元 / 月"],
                sale2: [
                  "500 MB SSD",
                  "磁盘RAID 1 SSD",
                  "磁盘额外SATA备份磁盘",
                  "1个允许的域名",
                  "10个子域"
                ]
              },
              {
                id: 2,
                sale1: ["专业2", "19", "元 / 月"],
                sale2: [
                  "500 MB SSD",
                  "磁盘RAID 1 SSD",
                  "磁盘额外SATA备份磁盘",
                  "1个允许的域名",
                  "10个子域"
                ]
              },
              {
                id: 3,
                sale1: ["豪华2", "39", "元 / 月"],
                sale2: [
                  "500 MB SSD",
                  "磁盘RAID 1 SSD",
                  "磁盘额外SATA备份磁盘",
                  "1个允许的域名",
                  "10个子域"
                ]
              }
            ],
            [
              {
                id: 1,
                sale1: ["初始3", "9", "元 / 月"],
                sale2: [
                  "500 MB SSD",
                  "磁盘RAID 1 SSD",
                  "磁盘额外SATA备份磁盘",
                  "1个允许的域名",
                  "10个子域"
                ]
              },
              {
                id: 2,
                sale1: ["专业3", "19", "元 / 月"],
                sale2: [
                  "500 MB SSD",
                  "磁盘RAID 1 SSD",
                  "磁盘额外SATA备份磁盘",
                  "1个允许的域名",
                  "10个子域"
                ]
              },
              {
                id: 3,
                sale1: ["豪华3", "39", "元 / 月"],
                sale2: [
                  "500 MB SSD",
                  "磁盘RAID 1 SSD",
                  "磁盘额外SATA备份磁盘",
                  "1个允许的域名",
                  "10个子域"
                ]
              }
            ]
          ]
        }
      ]
    };
  },
  props: ["hotsale_Show"],
  methods: {
    tabjump(id) {
      console.log(id);
      let url = host + "/portal/home/getdatacenterlist?id=" + id;
      this.$axios.get(url).then(res => {
        this.tabcontent = res.data.data;
      });
    },
    getdatacenter() {
      let url = host + "/portal/home/getdatacenter";
      return this.$axios({ url: url, method: "GET" });
    },
    getdatacenterlist() {
      let url = host + "/portal/home/getdatacenterlist";
      return this.$axios({
        url: url,
        method: "GET",
        params: {
          id: 16
        }
      });
    }
  },
  mounted() {
    let that = this;
    this.$axios.all([that.getdatacenter(), that.getdatacenterlist()]).then(
      that.$axios.spread((title, content) => {
        this.title = title.data.data;
        this.tabcontent = content.data.data;
      })
    );
  }
};
</script>
<style scoped lang="less">
@import "../../../assets/css/main.less";

#hotsale {
  width: 75rem;
  height: 59.75rem;
  margin: 0 auto;
  color: black;
  background: white;
  .column;
  justify-content: center;
  #title {
    .column;
    width: 100%;
    height: 10rem;
    // background: chocolate;
    justify-content: space-around;
    // margin-top: 1.25rem;
    span:nth-of-type(1) {
      .span;
      font-size: 1rem;
    }
    span:nth-of-type(2) {
      .span;
      font-size: 1.875rem;
      font-weight: 400;
    }
    span:nth-of-type(3) {
      .span;
      font-size: 1.5rem;
      font-weight: 400;
      // margin-top: 2rem;
    }
  }
  #tab {
    width: 100%;
    height: 43.75rem;
    // background: cornsilk;
    .column;
    align-items: center;
    justify-content: space-around;
    .title {
      margin-top: 2.5rem;
      width: 70%;
      height: 2.5rem;
      .row;
      justify-content: space-around;
      border-bottom: 0.125rem solid #ccc;
      span {
        padding-bottom: 20px;
      }
      // span:nth-of-type(1) {
      //   border-bottom: 0.125rem solid @bg;
      // }
    }
    .content {
      width: 70%;
      height: 100%;
      .row;
      justify-content: space-between;
      // background: olive;
      .box-card {
        transition: all ease 0.5s;
        // height: 35rem;
        height: 12.5rem;
        // width: 22rem;
        width: 12rem;
        // background: coral;
        border-radius: 1.25rem 1.25rem 0 0;
        .card_top {
          width: 100%;
          height: 12.5rem;
          background: #ccc;
          transition: all ease 2s;
          .column;
          justify-content: center;
          span:nth-of-type(2) {
            font-size: 3.75rem;
          }
        }
        .card_bottom {
          width: 100%;
          height: 22.625rem;
          // height: 22.625rem;
          //   background: #ccc;
          .column;
          justify-content: space-around;
        }
      }
      .box-card:hover {
        height: 35rem;
        width: 22rem;
        .card_top {
          background: #163a7a;
          span {
            color: white;
          }
        }
        .el-button {
          background: #163a7a;
          color: white;
        }
      }
    }
  }
}
</style>