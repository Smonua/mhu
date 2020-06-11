<template>
  <!-- CDN -->
  <div id="cdn">
    <Tabbar :tabbar="tabbar"></Tabbar>
    <div id="content">
      <div class="content">
        <el-card
          shadow="hover"
          body-style="padding:0px"
          class="box-card"
          v-for="item in cardList"
          :key="item.id"
        >
          <div slot="header" class="clearfix">
            <span v-for="el in item.title" :key="el.id">{{el}}</span>
          </div>
          <div class="text item">
            <ul v-for="ele in item.con" :key="ele.id">
              <li>
                <span>{{ele.tit}}</span>
                {{ele.txt}}
              </li>
            </ul>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template> 

<script>
import Tabbar from "./components/tabbar";
import { host } from "../../const";
export default {
  data() {
    return {
      tabbar: [
        { col: true, title: "夏龙CDN介绍" },
        { col: false, title: "夏龙CDN价格表" }
      ],
      cardList: [
        {
          id: 1,
          title: ["夏龙FreeCDN的产品特点"],
          con: [
            {
              tit: "",
              txt: "· 多点服务，抗DDOS攻击，增强稳定性"
            },
            {
              tit: "",
              txt: "· 就近访问，访问速度更快，用户体验更好"
            },
            {
              tit: "",
              txt: "· 支持全球加速；"
            },
            {
              tit: "",
              txt: "· 支持VIP节点定制；"
            }
          ]
        },
        {
          id: 2,
          title: ["文件传输", "CDN文件传输加速系列"],
          con: [
            {
              tit: "静态网页加速",
              txt:
                " ——夏龙CDN服务的基本应用，对各种静态内容使用静态加速产品可以达到非常好的加速效果。"
            },
            {
              tit: "动态应用加速",
              txt: "——提供实时、动态内容的各类网站如股票行情、在线游戏及BBS等。"
            },
            {
              tit: "微型图片加速",
              txt: "· 针对像博客、网上购物、SNS社区等"
            },
            {
              tit: "",
              txt: "· 大量存储的数据密集型网站而研发的加速产品"
            },
            {
              tit: "",
              txt: "· 大幅提高网站服务效果，精简的IT运营成本等。"
            }
          ]
        },
        {
          id: 3,
          title: ["Web——CDN", "网页加速系列"],
          con: [
            {
              tit: "标准下载加速",
              txt:
                " ——提供音频文件、游戏客户端、软件及补丁序、杀毒软件厂商病毒库更新等下载服务的各网站"
            },
            {
              tit: "P2SP下载加速",
              txt:
                "——网络游戏运营商，软件开发商，以及提供音频视频的大文件下载的各类网站 。"
            }
          ]
        },
        {
          id: 4,
          title: ["流媒体——CDN", "流媒体加速系列"],
          con: [
            {
              tit: "静态网页加速",
              txt:
                " ——夏龙CDN服务的基本应用，对各种静态内容使用静态加速产品可以达到非常好的加速效果。"
            },
            {
              tit: "动态应用加速",
              txt: "——提供实时、动态内容的各类网站如股票行情、在线游戏及BBS等。"
            },
            {
              tit: "微型图片加速",
              txt: "· 针对像博客、网上购物、SNS社区等"
            },
            {
              tit: "",
              txt: "· 大量存储的数据密集型网站而研发的加速产品"
            },
            {
              tit: "",
              txt: "· 大幅提高网站服务效果，精简的IT运营成本等。"
            }
          ]
        },
        {
          id: 5,
          title: ["增值服务——CDN", "增值服务"],
          con: [
            {
              tit: "标准下载加速",
              txt:
                " ——提供音频文件、游戏客户端、软件及补丁序、杀毒软件厂商病毒库更新等下载服务的各网站"
            },
            {
              tit: "P2SP下载加速",
              txt:
                "——网络游戏运营商，软件开发商，以及提供音频视频的大文件下载的各类网站 。"
            }
          ]
        }
      ]
    };
  },
  components: {
    Tabbar
  },
  props: ["url"],
  methods: {},
  mounted() {
    let url = host + "/portal/home/getcdndatacenter";
    this.$axios.get(url).then(res => {
      console.log(res.data.data);
      this.tabbar = res.data.data;
      let url =
        host + "/portal/home/getcdndatacenterlist?id=" + res.data.data[0].id;
      this.$axios.get(url).then(res => {
        console.log(res.data.data);
      });
    });

    this.$eventbus.$on("tabbar_id", id => {
      // console.log(id)
      let url = host + "/portal/home/getcdndatacenterlist?id=" + id;
      this.$axios.get(url).then(res => {
        console.log(res.data.data);
      });
    });
  }
};
</script>
<style scoped lang="less">
@import "../../assets/css/main.less";
#cdn {
  width: 100%;
  height: 38rem;
  // background: rgba(0, 0, 0, 0.1);
  #content {
    background: #ebebeb;
    width: 100%;
    height: 90%;
    .content {
      width: 75rem;
      height: 100%;
      // background: blanchedalmond;
      margin: 0 auto;
      .row;
      justify-content: space-between;
      .box-card {
        width: 19.5%;
        height: 25rem;
        // padding: 0 1.25rem;
        .clearfix {
          width: 100%;
          height: 2rem;
          // background: cornflowerblue;
          .column;
          align-items: flex-start;
          justify-content: center;
          span {
            // font-size: 2.25rem;
            color: #02247d;
            font-weight: 800;
            .column;
            align-items: flex-start;
            justify-content: center;
          }
        }
        .item {
          overflow-x: auto;
          width: 98%;
          height: 20rem;
          padding-right: 1rem;
          // background: chocolate;
          ul {
            li {
              margin-left: -1.625rem;
              list-style: none;
              .column;
              align-items: flex-start;
              justify-content: flex-start;
              line-height: 120%;
              text-align: justify;
            }
          }
        }
      }
    }
  }
}
</style>