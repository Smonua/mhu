<template>
  <div id="product_content">
    <div class="product_content">
      <section>
        <strong>弹性计算</strong>
        <div>
          <aside class="content">
            <p v-for="item in content.productItemList" :key="item.id">
              {{item.title}}
              <span>{{item.description}}</span>
            </p>
          </aside>
        </div>
      </section>
      <section>
        <strong>精品活动</strong>
        <aside>
          <img
            :src="ele.image"
            :alt="ele.title"
            width="200"
            height="100"
            v-for="ele in content.productActive"
            :key="ele.id"
          />
        </aside>
      </section>
    </div>
  </div>
</template>

<script>
import left from "../../../../assets/images/banner_left.jpg";
// import { host } from "../../../../const";
export default {
  data() {
    return {
      ID: 0,
      left: left,
      conLists: [],
      imglist: []
    };
  },
  props: ["content"],
  created() {},
  methods: {},
  beforeMount() {},
  mounted() {
    // this.$eventbus.$emit("url", "item");
  }
};
</script>
<style scoped lang="less">
@import "../../../../assets/css/main.less";
#product_content {
  width: 56.25rem;
  height: 37.5rem;
  background: white;
  color: black;
  .row;
  justify-content: center;
  .product_content {
    width: 90%;
    height: 90%;
    // background: #ccc;
    .row;
    justify-content: center;
    section:nth-of-type(1) {
      width: 70%;
      height: 100%;
      //background: blanchedalmond;
      .column;
      align-items: flex-start;
      justify-content: space-between;
      div {
        .row;
        align-items: flex-start;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        // background: cornsilk;
        aside {
          width: 49%;
          height: 100%;
          // background: chocolate;
          margin: 0.625rem 0;
          p {
            .column;
            align-items: flex-start;
            justify-content: flex-start;
            // background: beige;
            color: black;
            span {
              padding: 0.3125rem 0;
              font-size: 0.625rem;
              color: #999;
            }
          }
          p:hover {
            color: red;
          }
        }
      }
    }
    section:nth-of-type(2) {
      width: 30%;
      height: 100%;
      //background: burlywood;
      aside {
        // background: chocolate;
        height: 50%;
        width: 100%;
        .column;
        justify-content: space-around;
        align-items: flex-start;
      }
    }
  }
}
</style>