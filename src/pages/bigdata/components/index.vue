<template>
  <div id="content">
    <CDN v-if="url==='CDN'" :url="url"></CDN>
    <SdWan v-if="url==='SdWan'" :url="url"></SdWan>
    <Access v-if="url==='Access'" :url="url"></Access>
    <Networking v-if="url==='Networking'" :url="url"></Networking>
    <Hosting v-if="url==='Hosting'" :url="url"></Hosting>
    <Rent v-if="url==='Rent'" :url="url"></Rent>
  </div>
</template>

<script>
import CDN from "../cdn.vue";
import SdWan from "../sd-wan.vue";
import Access from "../access.vue";
import Networking from "../networking.vue";
import Hosting from "../hosting.vue";
import Rent from "../rent.vue";

export default {
  data() {
    return {};
  },
  props: ["url"],
  components: {
    CDN,
    SdWan,
    Access,
    Networking,
    Hosting,
    Rent
  },
  methods: {},
  mounted() {}
};
</script>
<style scoped lang="less">
#content {
  width: 100%;
  min-height: 2rem;
  background: #ccc;
}
</style>