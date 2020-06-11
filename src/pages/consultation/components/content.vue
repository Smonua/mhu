<template>
  <div id="content">
    <div class="title">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <!-- :to="{ path: '/' }" -->
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>技术支持</el-breadcrumb-item>
      </el-breadcrumb>
      <el-divider></el-divider>
    </div>
    <div id="title">
      <section>
        <p v-for="item in 4" :key="item.id" @click="linkto">Win Server 2003个人网络服务器安全攻略</p>
      </section>
      <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
    </div>
    <div class="news">
      <p>Win Server 2003个人网络服务器安全攻略</p>
      <p>
        一、Windows Server2003的安装
        1、安装系统最少两需要个分区，分区格式都采用NTFS格式
        2、在断开网络的情况安装好2003系统
        3、安装IIS，仅安装必要的 IIS 组件(禁用不需要的如FTP 和 SMTP 服务)。默认情况下，IIS服务没有安装，在添加/删除Win组件中选择“应用程序服务器”，然后点击“详细信息”，双击Internet信息服务(iis)，勾选以下选项：
        Internet 信息服务管理器；
        公用文件；
        后台智能传输服务 (BITS) 服务器扩展；
        万维网服务。
        如果你使用 FrontPage 扩展的 Web 站点再勾选：FrontPage 2002 Server Extensions
        4、安装MSSQL及其它所需要的软件然后进行Update。
        5、使用Microsoft 提供的 MBSA(Microsoft Baseline Security Analyzer) 工具分析计算机的安全配置，并标识缺少的修补程序和更新。下载地址：见页末的链接
      </p>
    </div>
  </div>
</template>

<script>
// import logo from "../../assets/images/logo.png";
export default {
  data() {
    return {};
  },
  methods: {
    linkto(){
      document.querySelector("#title").style.display="none";
      document.querySelector(".news").style.display="block"
    }
  },
  mounted() {}
};
</script>
<style scoped lang="less">
@import "../../../assets/css/main.less";
#content {
  width: 70%;
  height: 100%;
  //   background: beige;
  .column;
  justify-content: center;
  .title {
    width: 90%;
    height: 6%;
    margin: 0 auto;
    // background: wheat;
  }
  .news {
    display: none;
    width: 90%;
    height: 85%;
    margin: 0 auto;
    // background: cadetblue;
    p {
      color: black;
    }
  }
  #title {
    width: 90%;
    height: 85%;
    margin: 0 auto;
    color: black;
    // background: cadetblue;
    section {
      width: 100%;
      height: 80%;
      // background: blanchedalmond;
    }
    .pages {
      width: 100%;
      background: blanchedalmond;
    }
  }
}
</style>