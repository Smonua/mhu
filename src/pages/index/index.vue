<template>
  <div class="app">
    <Project :project_Show="project_Show"></Project>
    <HotSale :hotsale_Show="hotsale_Show"></HotSale>
    <Product></Product>
    <Advert></Advert>
    <Advantage></Advantage>
    <News :news_Show="news_Show"></News>
    <Map></Map>
    <Partners :partner="partner"></Partners>
  </div>
</template>
<script>
import Partners from "../../components/partners/index";
import Map from "./components/map.vue";
import Project from "./components/project.vue";
import HotSale from "./components/hotsale.vue";
import Product from "./components/product.vue";
import News from "./components/news.vue";
import Advert from "./components/advert.vue";
import Advantage from "./components/advantage.vue";
import { host } from "../../const";
export default {
  data() {
    return {
      project_Show: false,
      hotsale_Show: false,
      news_Show: false,
      partner:[],
    };
  },
  components: {
    Partners,
    Map,
    Project,
    HotSale,
    Product,
    News,
    Advert,
    Advantage
  },
  mounted() {
    this.$eventbus.$emit("nav_left", "0");
    window.addEventListener("scroll", this.handleScroll);

    let url = host + "/portal/home/gethomead";
    this.$axios.get(url).then(res => {
      // console.log(res.data.data);
      this.partner=res.data.data.partner;
    });

  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // console.log(scrollTop);
      if (scrollTop < 100) {
        // console.log(this);
        this.project_Show = false;
        this.hotsale_Show = false;
        this.news_Show = false;
      } else if (scrollTop >= 100 && scrollTop < 700) {
        this.project_Show = true;
      } else if (scrollTop >= 700 && scrollTop < 3300) {
        this.hotsale_Show = true;
      } else if (scrollTop >= 3300) {
        this.news_Show = true;
      }
    }
  }
};
</script>
<style scoped lang="less">
.app {
  width: 100%;
  min-height: 100vh;
}
</style>