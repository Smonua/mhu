<template>
  <div id="tabbar">
    <div id="title">
      <div class="title" v-for="item in tabbar" :key="item.id">
        <span @click="taggle(item.id)">
          <!-- {{item.title}} :style="' color:'+(item.col?'#02247d':'')"-->
          {{item.name}}
          <!-- <i :class="(item.col?'el-icon-arrow-down':'')"></i> -->
          <!-- <i class="el-icon-arrow-down"></i> -->
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["tabbar"],
  methods: {
    taggle(id) {
      // console.log(id)
      this.$eventbus.$emit("tabbar_id", id);
    }
  },
  mounted() {
    // this.$eventbus.$emit("tabbar_id", this.tabbar[0].id);
  }
};
</script>
<style scoped lang="less">
@import "../../../assets/css/main.less";
#tabbar {
  width: 100%;
  height: 5.375rem;
  background: white;
  box-shadow: 2px 2px 5px #ccc;
  #title {
    width: 50%;
    height: 100%;
    margin: 0 auto;
    // background: orange;
    color: black;
    .row;
    justify-content: center;
    .title {
      width: 100%;
      height: 100%;
      //   background: blanchedalmond;
      .row;
      justify-content: space-around;
      color: black;
    }
  }
}
</style>