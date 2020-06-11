<template>
  <div id="about">
    <div class="about">
      <section>
        <!--  @click="linkTo(item)" -->
        <aside>
          <span v-for="item in navlist" :key="item.id" @click="linkTo(item)">{{item.text}}</span>
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
        { text: "合作伙伴", title: "Partners", url: "/Partners" },
        { text: "加入夏龙", title: "Join", url: "/Join" },
        { text: "联系我们", title: "Contact", url: "/Contact" },
        { text: "新闻中心", title: "News", url: "/News" }
      ]
    };
  },
  methods: {
    linkTo(item) {
      //点击跳转
      this.$router.push("/about"+ item.url);
      if (item.title != undefined) {
        this.$eventbus.$emit("title", item.title);
      }
      this.$eventbus.$emit("nav_show", false);
      this.$eventbus.$emit("nav_left", "45rem");
    }
  },
  mounted() {}
};
</script>
<style scoped lang="less">
@import "../../../assets/css/main.less";
#about {
  width: 100%;
  height: 100%;
  //   background: blanchedalmond;
  .about {
    width: 100%;
    height: 90%;
    // background: goldenrod;
    color: white;
    // color: black;
    .column;
    justify-content: center;
    section:nth-of-type(1) {
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
        // background: bisque;
        .row;
        justify-content: flex-start;
        div {
          width: 20rem;
          height: 100%;
          //background: darkkhaki;
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