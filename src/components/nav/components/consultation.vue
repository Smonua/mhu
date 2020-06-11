<template>
  <div id="consultation">
    <div class="consultation">
      <section>
        <input type="text" placeholder="搜索咨询服务" />
        <i class="fa fa-search"></i>
        <i class="el-icon-minus" style="transform: rotate(90deg);"></i>查看所有咨询服务
      </section>
      <section>
        <!--  @click="linkTo(item)" -->
        <aside>
          <span v-for="item in navlist" :key="item.id" @click="linkTo">{{item.text}}</span>
        </aside>
        <aside>
          <div>
            <span>夏龙通信服务体系</span>
            <span>7*24小时专业服务支持</span>
            <span>智能化监控</span>
            <span>与电信、联通、移动骨干网光纤互联</span>
            <span>通过ISO9001质量管理体系认证</span>
            <span>通过ISO27001信息安全认证</span>
          </div>
        </aside>
      </section>
    </div>
  </div>
</template>

<script>
// import logo from "../../assets/images/logo.png";
export default {
  data() {
    return {
      navlist: [
        { text: "技术支持", title: "技术支持", url: "/consultation" },
        { text: "备案服务", title: "SdWan", url: "/consultation" },
        { text: "常见问题", title: "Access", url: "/consultation" },
        { text: "下载指南", title: "Hosting", url: "/consultation" }
      ]
    };
  },
  methods: {
    linkTo() {
      //点击跳转
      this.$router.push("/consultation");
      this.$eventbus.$emit("nav_left", "37.5rem");
    }
  },
  mounted() {}
};
</script>
<style scoped lang="less">
@import "../../../assets/css/main.less";
#consultation {
  width: 100%;
  height: 100%;
  //   background: blanchedalmond;
  .consultation {
    width: 100%;
    height: 90%;
    // background: goldenrod;
    .column;
    align-items: flex-start;
    align-content: space-around;
    justify-content: space-around;
    color: white;
    // color: black;
    section:nth-of-type(1) {
      width: 30%;
      height: 15%;
      background: rgba(204, 204, 204, 0.6);
      .row;
      justify-content: space-around;
      border-radius: 0.3125rem;
      padding: 0 0.3125rem;
      input {
        height: 60%;
        border: 0;
        background: none;
        outline: none;
        color: white;
      }
      input::-webkit-input-placeholder {
        color: white;
      }
      input::-moz-placeholder {
        color: white;
      }
      input::-ms-input-placeholder {
        color: white;
      }
    }
    section:nth-of-type(2) {
      width: 100%;
      height: 75%;
      //   background: gray;
      padding-left: 0.625rem;
      .row;
      justify-content: space-around;
      aside:nth-of-type(1) {
        width: 16.2%;
        height: 100%;
        //   background: hotpink;
        border-right: 0.0625rem solid #ccc;
        .column;
        align-items: flex-start;
        justify-content: space-around;
        span:hover {
          color: wheat;
          font-weight: 700;
        }
      }
      aside:nth-of-type(2) {
        width: 80%;
        height: 100%;
        //   background: bisque;
        .row;
        justify-content: flex-start;
        div {
          width: 20rem;
          height: 100%;
          //   background: darkkhaki;
          .column;
          align-items: flex-start;
          justify-content: space-around;
          margin-right: 0.625rem;
        }
      }
    }
  }
}
</style>