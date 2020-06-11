<template>
  <!-- 公务用车 -->
  <div id="official">
    <!-- <div id="title">
      <div class="title">
        <span
          v-for="item in tabbar"
          :key="item.id"
          :style="'color:'+(item.col?'#02247d':'')"
          @click="change(item)"
        >{{item.title}}</span>
      </div>
    </div>-->
    <Tabbar :tabbar="tabbar"></Tabbar>
    <component :is="type"></component>
  </div>
</template>

<script>
// import logo from "../../assets/images/logo.png";
import Tabbar from "./components/tabbar.vue";
import { host } from "../../const";
export default {
  data() {
    return {
      tabbar: [
        { col: true, title: "产品介绍", text: "introduction" },
        { col: false, title: "方案优势", text: "advantage" },
        { col: false, title: "用车流程", text: "procedure" },
        { col: false, title: "客户案例", text: "case" }
      ],
      type: function(resolve) {
        require(["./components/official/introduction/index.vue"], resolve);
      }
    };
  },
  components: {
    Tabbar
  },
  methods: {},
  mounted() {
    this.$eventbus.$on("tabbar_item", item => {
      this.type = function(resolve) {
        require(["./components/official/" + item.text + "/index.vue"], resolve);
      };
      if (item.text == "introduction") {
        this.tabbar[0].col = true;
        this.tabbar[1].col = false;
        this.tabbar[2].col = false;
        this.tabbar[3].col = false;
      } else if (item.text == "advantage") {
        this.tabbar[1].col = true;
        this.tabbar[0].col = false;
        this.tabbar[2].col = false;
        this.tabbar[3].col = false;
      } else if (item.text == "procedure") {
        this.tabbar[2].col = true;
        this.tabbar[0].col = false;
        this.tabbar[1].col = false;
        this.tabbar[3].col = false;
      } else if (item.text == "case") {
        this.tabbar[3].col = true;
        this.tabbar[0].col = false;
        this.tabbar[1].col = false;
        this.tabbar[2].col = false;
      }
    });

    let url = host + "/portal/home/getsolutionlist?id=1";
    this.$axios.get(url).then(res => {
      console.log(res.data.data);
    });
  }
};
</script>
<style scoped lang="less">
@import "../../assets/css/main.less";
#official {
  width: 100%;
  min-height: 50rem;
}
</style>