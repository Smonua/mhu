<template>
  <div id="footer">
    <div class="footer">
      <div id="title">
        <p v-for="item in iconlist" :key="item.id">
          <span>
            <svg class="icon_title" aria-hidden="true">
              <use :xlink:href="item.icon" />
            </svg>
          </span>
          {{item.text}}
        </p>
      </div>
      <div id="content">
        <section>
          <aside>
            <span v-for="item in tel" :key="item.id">{{item}}</span>
          </aside>
          <aside>
            <p>关注夏龙通信</p>
            <p>
              <span>
                <i class="fa fa-weixin"></i>
              </span>
              <span>
                <i class="fa fa-qq"></i>
              </span>
              <span>
                <i class="fa fa-weibo"></i>
              </span>
            </p>
          </aside>
        </section>
        <section>
          <aside v-for="item in context" :key="item.id">
            <a v-for="el in item.con" :key="el.id">{{el}}</a>
          </aside>
        </section>
      </div>
      <div id="foot">
        <p>版权所有&copy;广东夏龙通信有限公司 粤ICP备08100026号-2  经营许可证:B1.B2-20130223 / 粤B1.B2-20070469</p>
        <p><img :src="copy1"><img :src="copy2">粤公网安备：44030401000101</p>
      </div>
    </div>
  </div>
</template>

<script>
import copy1 from "../../assets/images/copy1.png";
import copy2 from "../../assets/images/copy2.gif";
import "../../assets/js/iconfont.js";
export default {
  data() {
    return {
      copy1:copy1,
      copy2:copy2,
      iconlist: [
        { id: 1, icon: "#icon-pei", text: "100倍故障赔偿" },
        { id: 2, icon: "#icon-qian", text: "3天无理由退款" },
        { id: 3, icon: "#icon-zan", text: "7x24小时服务" },
        { id: 4, icon: "#icon-bei", text: "0元快速备案" },
        { id: 5, icon: "#icon-zuanshi", text: "1V1专席秘书" }
      ],
      tel: [
        "上云服务热线",
        "0755-3331 9003	",
        "33119326",
        "售前咨询",
        "备案服务",
        "云市场咨询"
      ],
      context: [
        {
          id: 1,
          con: [
            "夏龙定制云产品",
            "云服务器",
            "云服务器托管",
            "云虚拟主机",
            "云监控"
          ]
        },
        {
          id: 2,
          con: [
            "解决方案",
            "游戏云解决方案",
            "电商云解决方案",
            "金融云解决方案",
            "网站云解决方案",
            "移动云解决方案"
          ]
        },
        {
          id: 3,
          con: [
            "帮助与支持",
            "产品文档",
            "Whois查询",
            "控制面板",
            "备案服务",
            "工单服务"
          ]
        },
        {
          id: 4,
          con: [
            "其他链接",
            "公司简介",
            "联系我们",
            "新闻公告",
            "友情链接",
            "服务协议"
          ]
        },
        {
          id: 5,
          con: [
            "其他链接",
            "公司简介",
            "联系我们",
            "新闻公告",
            "友情链接",
            "服务协议"
          ]
        }
      ]
    };
  },
  methods: {},
  mounted() {
    this.$eventbus.$on("footMenu", menu => {
      console.log("footMenu",menu)
    });
  }
};
</script>
<style scoped lang="less">
@import "../../assets/css/main.less";
#footer {
  width: 100%;
  height: 35rem;
  color: white;
  background: @bg;
  .footer {
    width: 75rem;
    height: 93%;
    // background: wheat;
    margin: 0 auto;
    .column;
    justify-content: space-between;
    #title {
      width: 100%;
      height: 15%;
      // background: #ccc;
      border-bottom: 1px solid #ccc;
      .row;
      justify-content: space-between;
      p {
        width: 13%;
        height: 100%;
        // background: #999;
        .row;
        justify-content: space-between;
        span {
          width: 2.1875rem;
          height: 2.1875rem;
          border: 0.0625rem solid white;
          border-radius: 50%;
          .row;
          justify-content: center;
          .icon_title {
            width: 1.25rem;
            height: 1.25rem;
            // vertical-align: -0.15em;
            // fill: currentColor;
            // overflow: hidden;
          }
        }
      }
    }
    #content {
      width: 100%;
      height: 50%;
      // background: #ccc;
      // margin-top: 5%;
      .row;
      justify-content: space-around;
      section:nth-of-type(1) {
        width: 20%;
        height: 100%;
        // background: olivedrab;
        border-right: 0.0625rem solid white;
        .column;
        justify-content: space-around;
        aside:nth-of-type(1) {
          width: 100%;
          height: 70%;
          // background: #cccccc;
          .column;
          justify-content: space-around;
          align-items: flex-start;
          span {
            font-size: 0.625rem;
          }
          span:nth-of-type(2),
          span:nth-of-type(3) {
            font-size: 1.5rem;
          }
        }
        aside:nth-of-type(2) {
          width: 100%;
          height: 20%;
          // background: orange;
          p:nth-of-type(1) {
            font-size: 0.625rem;
          }
          p:nth-of-type(2) {
            width: 60%;
            // background: paleturquoise;
            .row;
            justify-content: space-around;
            margin-left: -0.625rem;
            span {
              width: 1.875rem;
              height: 1.875rem;
              // background: palegreen;
              border: 0.0625rem solid white;
              border-radius: 50%;
              .row;
              justify-content: center;
            }
          }
        }
      }
      section:nth-of-type(2) {
        width: 79%;
        height: 100%;
        // background: wheat;
        .row;
        justify-content: flex-start;
        aside {
          width: 20%;
          height: 100%;
          // background: bisque;
          .column;
          align-items: flex-start;
          justify-content:flex-start;
          line-height: 200%;
          margin-left:1.25rem ;
          a:nth-of-type(1) {
            font-size: 1.125rem;
            font-weight: 600;
          }
        }
      }
    }
    #foot{
      border-top: 1px solid #ccc;
      width: 100%;
      height: 15%;
      // background: bisque;
      p:nth-of-type(2){
        // background: bisque;
        .row;
        justify-content: flex-start;
        align-items: center;
        img{
          width: 1.25rem;
          margin-right:.625rem;
        }
        img:nth-of-type(2){
          padding-top:.3125rem ;
        }

      }
    }
  }
}
</style>