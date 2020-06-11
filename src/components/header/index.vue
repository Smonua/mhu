<template>
  <div id="header">
    <header>
      <div id="logo" @click="linkTo('/')">
        <img :src="logo" class="logo" alt="logo" />
        <p>夏龍通信</p>
      </div>
      <Nav></Nav>
      <div id="internationalization">
        <p>EN / 中 / 繁</p>
      </div>
    </header>

    <div id="banner">
      <article>
        <h1>主机租用</h1>
        <p>
          服务器整机租用是由数据中心（IDC服务提供商）提供服务器，只能
          有一个客户或者是网站通过租用方式使用它，并且由互联网数据中心
          替客户进行管理维护。您轻松享受从设备、环境到维护的一整套服务。
        </p>
        <el-button>立即购买</el-button>
      </article>
      <img :src="bannerbg" alt />
    </div>
  </div>
</template>
<script>
import logo from "../../assets/images/logo.png";
import bannerbg from "../../assets/images/banner_left.jpg";
import Nav from "../nav/index.vue";
// import { host } from "../../const";
export default {
  data() {
    return {
      logo: logo,
      bannerbg: bannerbg,
    };
  },
  components: {
    Nav
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    linkTo(url) {
      //点击跳转
      this.$router.push(url);
    }
  },
  mounted() {

  }
};
</script>
<style scoped lang="less">
@import '../../assets/css/main.less';

#header {
  height: 42rem;
  background-image: url(../../assets/images/header_bg.jpg);
  color: white;
  .column;
  justify-content: center;
  z-index: 9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .5), 0 0 6px rgba(0, 0, 0, .5);
  header {
    width: 75rem;
    height: 4.0625rem;
    margin: 5rem auto;
    .row;
    justify-content: space-between;
    #logo {
      width: 15%;
      height: 100%;
      .row;
      justify-content: center;
      img {
        width: 3rem;
      }
      p {
        width: 8.875rem;
        font-size: 1.25rem;
        color: white;
        font-weight: 400;
        margin-left: 10%;
      }
    }
  }
  #banner {
    width: 75rem;
    height: 26rem;
    .row;
    justify-content: space-between;
    article {
      height: 100%;
      h1 {
        font-size: 2.25rem;
        font-weight: 500;
      }
      p {
        font-size: 1rem;
        width: 35rem;
        text-align: justify;
        line-height: 160%;
        margin-bottom: 3.125rem;
      }
    }
  }
}
</style>
