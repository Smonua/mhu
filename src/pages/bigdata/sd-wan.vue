<template>
<!-- SdWan -->
  <div id="sdwan">
    <Tabbar :tabbar="tabbar"></Tabbar>
    <div id="content">
      <div class="content">
        <!-- -->
        <el-card shadow="hover" body-style="padding:0px" class="box-card" v-for="item in cardList" :key="item.id">
          <div slot="header" class="clearfix">
            <span v-for="el in item.title" :key="el.id">{{el}}</span>
          </div>
          <div class="text item">
            <ul v-for="ele in item.con" :key="ele.id">
              <li>
                <span class="li_title">{{ele.tit}}</span>
                <p v-for="eles in ele.txt" :key="eles.id">
                  <span>{{eles.name}}</span>
                  <em v-for="els in eles.data" :key="els.id">{{els}}</em>
                </p>
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
export default {
  data() {
    return {
      tabbar: [
        { col: true, name: "单路由互联网接入" },
        { col: false, name: "夏龙通信SD-WAN" },
        { col: false, name: "SD-WAN解决方案" }
      ],
      cardList: [
        {
          id: 1,
          title: [
            "数字电路业务",
            "数字电路（SDH），是指直接在传输网上进行数字信号传送的一种业务。在数字光纤传输线路逐步替代原有的模拟线路、用户对带宽要求越来越高的情况下，利用传输技术进行高速数字信号的传送。"
          ],
          con: [
            {
              tit: "业务特性/功能",
              txt: [
                {
                  name: "",
                  data: [
                    "1、数字电路网为全透明网，支持数据、话音、图像等多种业务，对客户通信协议没有任何要求，客户可自由选择网络设备及协议。",
                    "2、数字电路传输质量高，网络时延小。",
                    "3、速率高，通信速率可根据需要速率进行选择。",
                    "4、数字电路技术成熟，网络运行管理简便，数字电路将检错等功能放到智能化程度较高的终端来完成，简化了网络运行管理和监控内容，为用户参与网络管理创造了条件。 "
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 2,
          title: [
            "DDN电路",
            "DDN是数字数据网络的缩写（DIGITAL DATA NETWORK）。深圳电信DDN（数字数据网）业务，是依托中国电信数字数据骨干网（CHINADDN），利用光纤、数字微波、卫星等数字信道，向客户提供带宽独享的、全数字的、物理层透明通道的数据业务，是覆盖范围最广的中高速骨干数据通信网络之一。DDN网与CHINANET骨干网互通，DDN核心节点与CHINANET省网骨干节点采用n*155M光纤互联，通过广泛覆盖的DDN接入设备可以提供高速、无阻塞 的优质上网服务。"
          ],
          con: [
            {
              tit: "业务特性/功能",
              txt: [
                {
                  name: "",
                  data: [
                    "1、DDN专线提供点到点的通信，通信保密性强。",
                    "2、DDN专线传输质量高，通信速率可根据需要在9.6Kbps-N*64Kbps(N=1-31)之间选择，网络时延小。",
                    "3、DDN专线信道固定分配，提供灵活的连接方式，可靠性高。",
                    "4、DDN网为全透明网，支持数据、语音、图像多钟业务，对客户通信协议没有要求，客户可自由选择网络设备及协议。",
                    "5、DDN网技术成熟，网络运行管理简便。"
                  ]
                }
              ]
            },
            {
              tit: "业务速率",
              txt: [
                {
                  name: "",
                  data: [
                    "1)_高速DDN业务：N*64Kbps",
                    "2)_中低速业务：64Kbps，128Kbps",
                    "3)_子速率业务：64Kbps以下的DDN业务，如2400bps,9600bps,19.2Kbps",
                    "由于DDN是基于64KPS时隙的，提供子速率业务时必须有子速率处理模块，实现子速率到时隙的封装，和拆装，以及子速率交叉等功能。"
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 3,
          title: [
            "IP城域网",
            "所谓宽带城域网，就是在城市范围内，以IP和ATM电信技术为基础，以光纤作为传输媒介，集数据、语音、视频服务于一体的高带宽、多功能、多业务接入 的的多媒体通信网络。它能够满足政府机构、金融保险、大中小学校、公司企业等单位对高速率、高质量数据通信业务日益旺盛的需求，特别是快速发展起来 的互联网用户群对宽带高速上网的需求。"
          ],
          con: [
            {
              tit: "业务特性/功能",
              txt: [
                {
                  name: "1、传输速率高",
                  data: [
                    "——宽带城域网采用大容量的Packet Over SDH传输技术，为高速路由和交换提供传输保障。千兆以太网技术在宽带城域网中的广泛应用，使骨干路由器的 端口能高速有效地扩展到分布层交换机上。光纤、网线到用户桌面，使数据传输速度达到100M、1000M。"
                  ]
                },
                {
                  name: "2、用户投入少，接入简单",
                  data: [
                    "——宽带城域网用户端设备便宜而且普及，可以使用路由器、HUB甚至普通的网卡。用户只需将光纤、网线进行适当连接，并简单配置用户网卡或路由器的 相关参数即可接入宽带城域网。个人用户只要在自己的电脑上安装一块以太网卡，将宽带城域网的接口插入网卡就联网了。安装过程和以前的电话一样，只 不过网线代替了电话线，电脑代替了电话机。"
                  ]
                },
                {
                  name: "3、技术先进、安全",
                  data: [
                    "——技术上为用户提供了高度安全的服务保障。宽带城域网在网络中提供了第二层的VLAN隔离，使安全性得到保障。由于VLAN的安全性，只有在用户局域 网内的计算机才能互相访问，非用户局域网内的计算机都无法通过非正常途径访问用户的计算机。如果要从网外访问，则必须通过正常的路由和安全体系。 因此黑客若想利用底层的漏洞进行破坏是不可能的。虚拟拨号的普通用户通过宽带接入服务器上网，经过账号和密码的验证才可以上网，用户可以非常方便 地自行控制上网时间和地点。 "
                  ]
                }
              ]
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
#sdwan {
  width: 100%;
  height: 50rem;
  // background: olive;
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
      justify-content: space-around;
      .box-card {
        width: 31.5%;
        height: 42rem;
        padding: 0 .5rem;
        .clearfix {
          padding: 0;
          width: 100%;
          height: 11.8rem;
          // background: cornflowerblue;
          .column;
          align-items: flex-start;
          justify-content: flex-start;
          span:nth-of-type(1) {
            font-size:1.5rem;
            color: #02247d;
            font-weight: 800;
            .column;
            align-items: flex-start;
            justify-content: center;
          }
          span:nth-of-type(2) {
            padding-top: .625rem;
            font-size:.5rem;
            color: #999;
            overflow-y: auto;
            // background: coral;
            width: 100%;
            height:10rem;
          }
        }
        .item {
          width: 100%;
          height: 28.5rem;
          padding: 0.625rem;
          overflow-y: auto;
          // background: chocolate;
          ul {
            padding-right: .5rem;
            li {
              margin-left: -2.8125rem;
              list-style: none;
              .column;
              align-items: flex-start;
              justify-content: flex-start;
              line-height: 200%;
              text-align: justify;
              .li_title {
                color: #b78409;
                font-size: 1.125rem;
              }
              p {
                // line-height: 180%;
                color: #999;
                font-size: 0.875rem;
                .column;
                align-items: flex-start;
                justify-content: flex-start;
                em {
                  font-style: normal;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>