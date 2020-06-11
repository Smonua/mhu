<template>
  <div id="bar">
    <div class="bar">
      <el-collapse v-model="activeNames" accordion>
        <!--  -->
        <el-collapse-item  v-for="item in collapselist" :key="item.id" :name="item.id">
          <template slot="title" style=" font-weight: bolder;" >
            <span >{{item.title}}</span>
          </template>
          <div v-for="el in item.content" :key="el.id" @click="linkTo()">
            <!-- <i class="el-icon-arrow-left"></i> -->
            {{el}}
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
// import logo from "../../assets/images/logo.png";
export default {
  data() {
    return {
      activeNames: ["1"],
      collapselist: [
        {
          id: "1",
          title: "技术支持",
          content: ["Win Server 2003个人网络服务器安全攻略"]
        },
        {
          id: "2",
          title: "备案服务",
          content: [
            "远程桌面：6个最实用技巧",
            "如何部署远程桌面",
            "防范ASP木马的十大基本原则"
          ]
        },
        {
          id: "3",
          title: "常见问题",
          content: [
            "远程桌面：6个最实用技巧",
            "如何部署远程桌面",
            "防范ASP木马的十大基本原则"
          ]
        },
        {
          id: "4",
          title: "下载指南",
          content: [
            "远程桌面：6个最实用技巧",
            "如何部署远程桌面",
            "防范ASP木马的十大基本原则"
          ]
        }
      ]
    };
  },
  methods: {
    linkTo() {
        console.log(123)
    }
  },
  mounted() {}
};
</script>
<style scoped lang="less">
@import "../../../assets/css/main.less";
#bar {
  width: 30%;
  height: 100%;
  //   background: burlywood;
  .column;
  justify-content: center;
  .bar {
    width: 100%;
    height: 90%;
    // background: coral;
    .el-collapse-item {
      width: 100%;
      span {
        font-weight: 500;
        font-size: 1.125rem;
      }
      div {
        font-size: 1rem;
      }
      div:hover {
        color: rgba(1, 35, 124, 1);
        font-weight: 500;
      }
    }
    .el-collapse-item:nth-of-type(1) {
      div {
        color: rgba(1, 35, 124, 1);
        font-weight: 500;
      }
    }
  }
}
</style>