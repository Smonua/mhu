<template>
  <div id="content">
     <router-view class="content"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>
<style scoped lang="less">
#content {
  width: 100%;
  min-height: 90vh;
  .content{
    color: white;
  }
}
</style>