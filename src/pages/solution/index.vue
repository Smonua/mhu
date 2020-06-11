<template>
  <div id="solution">
    <Tabbar :tabbar="tabbar"></Tabbar>
    <div v-html="content" id="content"></div>
  </div>
</template>

<script>
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
      conlist: [],
      content: ''
    };
  },
  components: {
    Tabbar
  },
  methods: {
    getsolutionlist(id) {
      if (id != 0) {
        let url = host + "/portal/home/getsolutionlist?id=" + id;
        this.$axios.get(url).then(res => {
          this.conlist = res.data.data[0].child;
          // console.log("四个页面",this.conlist);
          this.content=this.conlist[0].content;
          // console.log('富文本',this.content);
        });
      } else {
        // this.$message("目前还没有数据");
        this.$router.push("/");
        this.$eventbus.$emit("nav_left", "0");
      }
    }
  },
  mounted() {
    this.$eventbus.$emit("nav_left", "22.5rem");

    this.$eventbus.$on("tabbar_item", item => {
      if (item.text == "introduction") {
        this.tabbar[0].col = true;
        this.tabbar[1].col = false;
        this.tabbar[2].col = false;
        this.tabbar[3].col = false;
        this.content=this.conlist[0].content;
      } else if (item.text == "advantage") {
        this.tabbar[1].col = true;
        this.tabbar[0].col = false;
        this.tabbar[2].col = false;
        this.tabbar[3].col = false;
        this.content=this.conlist[1].content;
      } else if (item.text == "procedure") {
        this.tabbar[2].col = true;
        this.tabbar[0].col = false;
        this.tabbar[1].col = false;
        this.tabbar[3].col = false;
        this.content=this.conlist[2].content;
      } else if (item.text == "case") {
        this.tabbar[3].col = true;
        this.tabbar[0].col = false;
        this.tabbar[1].col = false;
        this.tabbar[2].col = false;
        this.content=this.conlist[3].content;
      }
    });

    let id = localStorage.getItem("page_id");
    this.getsolutionlist(id);

    let that = this;
    this.$eventbus.$on("page_id", id => {
      that.getsolutionlist(id);
    });
  }
};
</script>
<style scoped lang="less">
@import "../../assets/css/main.less";
#solution {
  width: 100%;
  min-height: 50rem;
  // background: blanchedalmond;
  #content {
    width: 75rem;
    height: 100%;
    // background: brown;
    margin: 0 auto;
    color: black;
  }
}
</style>