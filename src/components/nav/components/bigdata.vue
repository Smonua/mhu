<template>
  <div id="bigdata">
    <div class="bigdata" ref="bigdata">
      <section>
        <input type="text" placeholder="搜索解决方案" />
        <i class="el-icon-search"></i>
        <i class="el-icon-minus" style="transform: rotate(90deg);"></i>查看所有解决方案
      </section>
      <section>
        <aside>
          <strong>推荐</strong>
          <span v-for="item in NavMenu" :key="item.id" @mouseenter="enter(item.id)">{{item.name}}</span>
          <!--  -->
        </aside>
        <aside>
          <strong>为您推荐</strong>
          <div v-for="item in menu" :key="item.id">
            <span @click="linkTo(item.name)">{{item.name}}</span>
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
        { text: "CDN", title: "CDN", url: "/CDN" },
        { text: "SdWan", title: "SdWan", url: "/SdWan" },
        { text: "企业互联网接入", title: "Access", url: "/Access" },
        { text: "主机托管", title: "Hosting", url: "/Hosting" },
        { text: "主机租用", title: "Rent", url: "/Rent" },
        { text: "组网业务", title: "Networking", url: "/Networking" }
      ],
      menu: []
    };
  },
  props: ["NavMenu"],
  methods: {
    linkTo(name) {
      //点击跳转
      if (name == "主机托管") {
        this.$router.push("/bigdata/Hosting");
        this.$eventbus.$emit("title", "Hosting");
      } else if (name == "主机租用") {
        this.$router.push("/bigdata/Rent");
        this.$eventbus.$emit("title", "Rent");
      } else if (name == "企业互联网接入") {
        this.$router.push("/bigdata/Access");
        this.$eventbus.$emit("title", "Access");
      } else if (name == "组网") {
        this.$router.push("/bigdata/Networking");
        this.$eventbus.$emit("title", "Networking");
      } else if (name == "SD-WAN") {
        this.$router.push("/bigdata/SdWan");
        this.$eventbus.$emit("title", "SdWan");
      } else if (name == "CDN") {
        this.$router.push("/bigdata/CDN");
        this.$eventbus.$emit("title", "CDN");
      }

      this.$eventbus.$emit("nav_show", false);
      this.$eventbus.$emit("nav_left", "15rem");
    },
    enter(id) {
      let service = this.NavMenu.filter(val => {
        return val.id == id;
      });
      // console.log(service[0].child);
      this.menu = service[0].child;
    }
  },
  mounted() {
    // console.log(this.NavMenu);
    this.menu = this.NavMenu[0].child;
  }
};
</script>
<style scoped lang="less">
@import "../../../assets/css/main.less";
#bigdata {
  width: 100%;
  height: 100%;
  //   background: blanchedalmond;
  .bigdata {
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
        // span:hover {
        //   color: wheat;
        //   font-weight: 700;
        // }
      }
      aside:nth-of-type(2) {
        width: 80%;
        height: 100%;
        //   background: bisque;
        .row;
        justify-content: flex-start;
        div {
          width: 10rem;
          height: 100%;
          //  background: darkkhaki;
          .column;
          justify-content: space-around;
          margin-right: 0.625rem;
          span:hover {
            color: wheat;
            font-weight: 700;
          }
        }
      }
    }
  }
}
</style>