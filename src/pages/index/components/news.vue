<template>
  <div id="news">
    <div id="newsitem" v-show="news_Show" class="animated fadeInUp">
      <span id="title">新鲜动态</span>
      <div class="news">
        <div id="major">
          <img :src="firstData.image" alt />
          <div class="content">{{firstData.name}}</div>
        </div>
        <div id="minor">
          <div class="minor" v-for="item in secondData" :key="item.id">
            <img :src="item.image" alt />
            <div class="content">{{item.name}}</div>
          </div>
        </div>
        <div id="daily">
          <div class="daily" v-for="item in thirdData" :key="item.id">
            <img :src="item.image" alt />
            <div class="content">{{item.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import logo from "../../assets/images/logo.png";
import { host } from "../../../const";
export default {
  data() {
    return {
      news: [],
      major_img: "",
      firstData: {},
      secondData: [],
      thirdData: []
    };
  },
  props: ["news_Show"],
  methods: {},
  mounted() {
    let url = host + "/portal/home/gethomenews";
    this.$axios.get(url).then(res => {
      // console.log(res.data.data);
      this.firstData = res.data.data.firstData[0];
      this.secondData = res.data.data.secondData;
      this.thirdData = res.data.data.thirdData;
    });
  }
};
</script>
<style scoped lang="less">
@import "../../../assets/css/main.less";
.content {
  transition: all ease-in-out 1s;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  padding: 0.625rem;
  color: white;
  position: absolute;
  bottom: -10rem;
  opacity: 0;
}
.content_hover {
  .content {
    position: absolute;
    bottom: 0;
    opacity: 1;
  }
}
#news {
  width: 75rem;
  height: 35rem;
  margin: 0 auto;
  color: black;
  background: white;
  .row;
  justify-content: space-around;

  #newsitem {
    width: 100%;
    height: 90%;
    margin: 0 auto;
    // background: #cccccc;
    .column;
    justify-content: space-between;
    #title {
      width: 100%;
      font-size: 1.875rem;
      font-weight: 400;
      color: black;
    }
    .news {
      width: 100%;
      height: 90%;
      // background: coral;
      .row;
      justify-content: space-between;
      div {
        width: 33%;
        height: 100%;
        // background: beige;
      }
      img {
        width: 100%;
        height: 100%;
      }
      #major {
        background: bisque;
        position: relative;
        .content {
          .content;
          height: 10rem;
        }
      }
      #major:hover {
        .content_hover;
      }
      #minor {
        .column;
        justify-content: space-between;
        .minor {
          width: 100%;
          height: 49%;
          background: orange;
        }
        .minor:nth-of-type(1),
        .minor:nth-of-type(2) {
          position: relative;
          .content {
            height: 8rem;
            .content;
          }
        }
      }
      #minor:hover {
        .minor:nth-of-type(1):hover,
        .minor:nth-of-type(2):hover {
          .content_hover;
        }
      }

      #daily {
        .column;
        justify-content: space-between;
        .daily {
          width: 100%;
          height: 32.5%;
          background: paleturquoise;
          .column;
          justify-content: center;
        }
        .daily:nth-of-type(1),
        .daily:nth-of-type(2),
        .daily:nth-of-type(3) {
          position: relative;
          .content {
            .content;
            height: 5rem;
          }
        }
      }
      #daily:hover {
        .daily:nth-of-type(1):hover,
        .daily:nth-of-type(2):hover,
        .daily:nth-of-type(3):hover {
          .content_hover;
        }
      }
    }
  }
}
</style>