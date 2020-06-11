<template>
  <div id="project">
    <div id="content">
      <el-card
        body-style="padding:0"
        v-show="project_Show"
        class="box-card animated fadeInUp"
        shadow="hover"
        v-for="item in projectList"
        :key="item.id"
      >
        <div class="card">
          <div id="item">
            <img :src="item.url" alt />
            <div class="content">
              <span>{{item.txt}}</span>
            </div>
          </div>
          <div class="item">4987489654798</div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
// import logo from "../../assets/images/logo.png";
export default {
  data() {
    return {
      show: true,
      projectList: [
        {
          id: 1,
          flag: true,
          url: require("../../../assets/images/index_bg_project1.jpg"),
          txt: "基础服务",
          content:
            "主机-是放置在您的网站在互联网上，存储和保护数据，以提供访问您的网站访客。"
        },
        {
          id: 2,
          flag: true,
          url: require("../../../assets/images/index_bg_project2.jpg"),
          txt: "解决方案",
          content:
            "主机-是放置在您的网站在互联网上，存储和保护数据，以提供访问您的网站访客。"
        },
        {
          id: 3,
          flag: true,
          url: require("../../../assets/images/index_bg_project3.jpg"),
          txt: "云计算",
          content:
            "主机-是放置在您的网站在互联网上，存储和保护数据，以提供访问您的网站访客。"
        },
        {
          id: 4,
          flag: true,
          url: require("../../../assets/images/index_bg_project4.jpg"),
          txt: "5G",
          content:
            "主机-是放置在您的网站在互联网上，存储和保护数据，以提供访问您的网站访客。"
        }
      ]
    };
  },
  props: ["project_Show"],
  methods: {
  },
  mounted() {}
};
</script>
<style scoped lang="less">
@import "../../../assets/css/main.less";
#project {
  margin: 0 auto;
  width: 75rem;
  height: 25rem;
  // height: 59.75rem;
  color: black;
  // background: white;
  .column;
  justify-content: center;
  #content {
    width: 100%;
    height: 20rem;
    // background: blanchedalmond;
    .row;
    justify-content: space-between;
    .box-card {
      // background: chocolate;
      width: 23%;
      height: 100%;
      .card {
        width: 100%;
        height: 20rem;
        background: white;
        .column;
        justify-content: center;
        #item {
          transition: all ease 2s;
          width: 100%;
          height: 100%;
          background: white;
          // border: 0.0625rem solid #ccc;
          .column;
          justify-content: space-around;
          .content {
            // background: brown;
            width: 95%;
            height: 3.75rem;
            .column;
            justify-content: space-between;
            span {
              font-size: 1rem;
              text-align: justify;
            }
          }
        }
        .item {
          transition: all ease 2s;
          width: 100%;
          height: 0;
          opacity: 0;
        }
      }
      .card:hover {
        #item {
          height: 0;
          opacity: 0;
        }
        .item {
          height: 100%;
          opacity: 1;
          // display: block;
        }
      }
    }
  }
}
</style>