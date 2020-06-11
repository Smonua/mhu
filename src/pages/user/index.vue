<template>
  <div id="user">
    <!-- 1678498674986574
    <div class="animated bounceOutLeft">156789</div>-->
    <!-- ref="animate" @load="init()" -->
  </div>
</template>

<script>
// import logo from "../../assets/logo.png";
export default {
  data() {
    return {
      
    };
  },
  components: {
    // VueUeditorWrap
  },
  methods: {
    // console.log(this.$refs.animate);
    init() {
      // console.log(this.$refs.animate)
      this.$refs.animate.class = "animated bounceOutLeft";
      // $("#animate").addClass("animated bounceOutLeft");
    }
  },
  mounted() {
    this.$eventbus.$emit("nav_left", "45rem");
  }
};
</script>
<style lang="scss">
#user {
  width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.8);
}
</style>