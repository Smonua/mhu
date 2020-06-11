<template>
  <div id="bigdata">
    <Index :url="url"></Index>
    <Service></Service>
    <Relevant></Relevant>
    <Help></Help>
  </div>
</template>
<script>
import Relevant from "../../components/relevant/index";
import Service from "../../components/service/index";
import Help from "../../components/help/index";
import Index from "./components/index";
export default {
  data() {
    return {
      url: "CDN"
    };
  },
  components: {
    Help,
    Service,
    Relevant,
    Index
  },
  mounted() {
    this.$eventbus.$emit("nav_left","15rem" );
    this.$eventbus.$on("title", title => {
      // console.log(title);
      this.url = title;
    });
    let type = this.$route.params.type;
    // console.log(this.$route.params);
    if (type != undefined) {
      this.url = type;
    }
  },
  methods: {}
};
</script>
<style scoped lang="less">
#bigdata {
  width: 100%;
  min-height: 20rem;
}
</style> 