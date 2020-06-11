<template>
  <div class="container">
    <Header></Header>
    <Content></Content>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/header/index";
import Content from "./components/content/index";
import Footer from "./components/footer/index";
export default {
  name: "app",
  data() {
    return {
    };
  },
  components: {
    Header,
    Content,
    Footer
  },
  mounted() {

  }
};
</script>

<style lang="less">
body,
html {
  margin: 0;
  padding: 0;
}
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  cursor: default;
}
</style>
