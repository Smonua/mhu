<template>
  <!-- 主机托管 -->
  <div id="hosting">
    <Tabbar :tabbar="tabbar"></Tabbar>
    <div id="content">
      <div class="content">
        <div class="title">
          <span :style="' color:'+(col5?'#02247d':'')+';background:'+(col5?'white':'')">福田</span>
          <span :style="' color:'+(col6?'#02247d':'')+';background:'+(col6?'white':'')">盐田</span>
        </div>
        <div class="card">
          <el-card shadow="hover" class="box-card" body-style="padding:0px">
            <div class="text item">
              <section>
                <P>
                  1U
                  <span>主机托管</span>
                </P>
                <P>
                  ¥ 750/月
                  <span>¥ 8200/年</span>
                </P>
              </section>
              <section>
                <aside>
                  <p>宽带标准：100M共享，不限流量</p>
                  <p>技术支持：7*24小时网管中心技术支持，无限次重启，重装系统，顾问服务。</p>
                </aside>
                <p class="link_title">机柜面议</p>
              </section>
            </div>
          </el-card>
          <el-card shadow="hover" class="box-card" body-style="padding:0px">
            <div class="text item">
              <section>
                <P>
                  1U
                  <span>主机托管</span>
                </P>
                <P>
                  ¥ 750/月
                  <span>¥ 8200/年</span>
                </P>
              </section>
              <section>
                <aside>
                  <p>宽带标准：100M共享，不限流量</p>
                  <p>技术支持：7*24小时网管中心技术支持，无限次重启，重装系统，顾问服务。</p>
                </aside>
                <p class="link_title">机柜面议</p>
              </section>
            </div>
          </el-card>
          <el-card shadow="hover" class="box-card" body-style="padding:0px">
            <div class="text item">
              <section>
                <P>
                  1U
                  <span>主机托管</span>
                </P>
                <P>
                  ¥ 750/月
                  <span>¥ 8200/年</span>
                </P>
              </section>
              <section>
                <aside>
                  <p>宽带标准：100M共享，不限流量</p>
                  <p>技术支持：7*24小时网管中心技术支持，无限次重启，重装系统，顾问服务。</p>
                </aside>
                <p class="link_title">机柜面议</p>
              </section>
            </div>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template> 

<script>
import Tabbar from "./components/tabbar";
export default {
  data() {
    return {
      col5: true,
      col6: false,
      tabbar: [
        { col: true, name: "推荐" },
        { col: false, name: "单线" },
        { col: false, name: "双线" },
        { col: false, name: "BGP" }
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
  mounted() {}
};
</script>
<style scoped lang="less">
@import "../../assets/css/main.less";
#hosting {
  width: 100%;
  height: 50rem;
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
      .column;
      justify-content: center;
      .title {
        width: 50%;
        height: 5rem;
        // background: chocolate;
        .row;
        span {
          padding: 0.625rem 1.25rem;
          margin-left: 0.625rem;
          color: black;
        }
      }
      .card {
        width: 100%;
        height: 37.25rem;
        .row;
        justify-content: space-between;
        .box-card {
          width: 23.75rem;
          height: 100%;
          // padding: 0 1.25rem;
          .item {
            width: 100%;
            height: 100%;
            // background: chocolate;
            section:nth-of-type(1) {
              width: 100%;
              height: 13rem;
              // background: chocolate;
              .row;
              justify-content: center;
              p {
                width: 50%;
                height: 100%;
                //   background: cornsilk;
              }
              p:nth-of-type(1) {
                .column;
                align-items: center;
                justify-content: center;
                font-size: 4.5rem;
                color: #02247d;
                span {
                  font-size: 2.25rem;
                }
              }
              p:nth-of-type(2) {
                font-size: 1.5rem;
                color: #bc7a00;
                .column;
                align-items: flex-start;
                justify-content: center;
                margin-left: 1.875rem;
              }
            }
            section:nth-of-type(2) {
              background: #369bb5;
              width: 100%;
              height: 25rem;
              color: white;
              padding: 1.625rem;
              aside {
                width: 70%;
                line-height: 180%;
              }
              .link_title {
                margin-top: 9rem;
                font-size: 2.25rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>