<template>
  <!--  -->
  <div id="product">
    <div id="product_bg">
      <!--  -->
      <div class="product" @mouseleave="enter()">
        <div id="title">
          <span class="title">所有产品</span>
          <div id="content">
            <div class="con_item">
              <div
                ref="item"
                class="item"
                v-for="item in conList"
                :key="item.id"
                @mouseenter="change(item.id)"
              >
                <div class="item_title">
                  {{item.name}}
                  <!-- <i class="el-icon-arrow-right"></i> -->
                </div>
                <div class="item_text">
                  <a v-for="ele in item.child" :key="ele.id" :href="ele.url" target="_blank" >{{ele.title}}</a>
                </div>
              </div>
            </div>
            <span>
              全部产品
              <i class="fa fa-long-arrow-right"></i>
            </span>
          </div>
        </div>
        <!-- <component :is="type"></component> -->
        <Item v-if="url==='Item'" :content="content" />
        <Index v-if="url==='Index'" />
      </div>
    </div>
  </div>
</template>

<script>
// import logo from "../../assets/images/logo.png";
import { host } from "../../../const";
import Item from "./product_content/item.vue";
import Index from "./product_content/index.vue";
export default {
  data() {
    return {
      conList: [],
      url: "Index",
      type: function(resolve) {
        // require(["./product_content/index.vue"], resolve);
        require(["./product_content/item.vue"], resolve);
      },
      content: {}
    };
  },
  components: {
    Item,
    Index
  },
  methods: {
    change(id) {
      this.url = "Item";
      let url = host + "/portal/home/getallproductlist?id=" + id;
      this.$axios.get(url).then(res => {
        console.log(res.data.data);
        this.content = res.data.data;
      });
    },
    enter() {
      this.url = "Index";
    }
  },
  mounted() {
    let url = host + "/portal/home/getallproduct";
    this.$axios.get(url).then(res => {
      this.conList = res.data.data.product;
      //console.log(res.data.data.product);
    });
  }
};
</script>
<style scoped lang="less">
@import "../../../assets/css/main.less";
#product {
  width: 100%;
  height: 50rem;
  background-image: url(../../../assets/images/product.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  #product_bg {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    .product {
      width: 75rem;
      height: 100%;
      margin: 0 auto;
      // background: #ccc;
      .row;
      align-items: center;
      justify-content: center;
      #title {
        width: 25%;
        height: 46rem;
        .column;
        align-items: flex-start;
        justify-content: flex-start;
        .title {
          font-size: 2rem;
        }
        #content {
          width: 100%;
          margin-top: 1.65rem;
          height: 38.5rem;
          // background: cadetblue;
          position: relative;
          .con_item {
            height: 100%;
            width: 100%;
            .item:nth-of-type(1) {
              margin-top: 0;
            }
            .item {
              padding: 1.21rem 0.5rem;
              .column;
              align-items: flex-start;
              justify-content: space-between;
              .item_title {
                font-size: 1rem;
                font-weight: 300;
                padding-bottom: 0.625rem;
              }
              .item_text {
                width: 100%;
                // background: darkcyan;
                .row;
                justify-content: flex-start;
                a {
                  // background: cornsilk;
                  font-size: 0.625rem;
                  margin-right: 0.3125rem;
                  color: white;
                  text-decoration: none;
                }
                a:hover {
                  text-decoration: underline;
                }
              }
            }
            .item:hover {
              background: rgba(244, 244, 244, 0.5);
            }
          }
        }
      }
    }
  }
}
</style>