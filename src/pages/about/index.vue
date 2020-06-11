<template>
  <div id="about">
    <Partners v-if="url==='Partners'" />
    <Join v-if="url==='Join'"/>
    <Contact v-if="url==='Contact'"/>
    <News v-if="url==='News'"/>
  </div>
</template>
<script>
import Partners from "./partners.vue";
import Join from "./join.vue";
import Contact from "./contact.vue";
import News from "./news.vue";
export default {
  data() {
    return {
      url: "Partners"
    };
  },
  components: {
    Partners,
    Join,
    Contact,
    News
  },
  mounted() {
    this.$eventbus.$emit("nav_left", "45rem");
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
#about {
  width: 100%;
  min-height: 20rem;
  //background: blanchedalmond;
}
</style> 