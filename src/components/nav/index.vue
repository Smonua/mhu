<template>
  <div id="nav">
    <!--@tab-click="handleClick" @mouseenter="enter()"-->
    <!-- @click="linkTo('/bigdata')"  @click="linkTo('/solution')" @mouseenter="enter('cloud')" @click="linkTo('/consultation')"-->

    <nav @mouseleave="leave()">
      <ul id="main">
        <!-- <li @click="linkTo('/')" @mouseenter="enter('/')">首页</li>
        <li @mouseenter="enter('cloud')">云数据</li>
        <li>
          <a @mouseenter="enter('bigdata')">大数据中心</a>
        </li>
        <li>
          <a @mouseenter="enter('solution')">解决方案</a>
        </li>
        <li @mouseenter="enter('5G')">5G服务</li>
        <li  @mouseenter="enter('consultation')">咨询服务</li>
        <li @click="linkTo('/user')" @mouseenter="enter('user')">关于我们</li>-->
        <li
          v-for="item in headMenu"
          :key="item.id"
          @click="linkTo(item)"
          @mouseenter="enter(item.name)"
        >{{item.name}}</li>
        <div id="marker"></div>
      </ul>
    </nav>
    <transition name="slide-fade">
      <div id="nav_content" v-if="show" @mouseleave="navleave()">
        <div class="nav_content">
          <component :is="type" :NavMenu="NavMenu"></component>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { host } from "../../const";
export default {
  data() {
    return {
      headMenu: [],
      NavMenu:[],
      clickflag: false,
      activeName: "second",
      nav_left: "",
      show: false,
      type: function(resolve) {
        require(["./components/bigdata.vue"], resolve);
      }
    };
  },
  methods: {
    //鼠标移出menu
    leave() {
      this.$eventbus.$on("nav_left", left => {
        console.log(left)
        document.querySelector("#marker").style.left = left;
      });
    },
    //鼠标移入menu
    enter(name) {
      document.querySelector("#marker").style.left = "0";
      if (name == "首页" || name == "云服务" || name == "5G服务") {
        this.show = false;
      } else if (name == "大数据中心") {
        this.show = true;
        this.type = function(resolve) {
          require(["./components/bigdata.vue"], resolve);
        };
        this.NavMenu=this.headMenu[2].child;
        document.querySelector("#marker").style.left="15rem";
      } else if (name == "解决方案") {
        this.show = true;
        this.type = function(resolve) {
          require(["./components/solution.vue"], resolve);
        };
        this.NavMenu=this.headMenu[3].child;
        document.querySelector("#marker").style.left="22.5rem";
      } else if (name == "咨询服务") {
        this.show = true;
        this.type = function(resolve) {
          require(["./components/consultation.vue"], resolve);
        };
        document.querySelector("#marker").style.left = "37.5rem";
      } else if (name == "关于我们") {
        this.show = true;
        this.type = function(resolve) {
          require(["./components/about.vue"], resolve);
        };
        document.querySelector("#marker").style.left = "45rem";
      }
    },
    //鼠标移出nav
    navleave() {
      this.show = false;
    },
    //点击跳转
    linkTo(item) {
      console.log(item.name);
      this.show = false;
      let Lefts = document.querySelector("#marker");
      console.log(Lefts);
      if (item.name == "首页") {
        Lefts.style.left = "0";
        this.$router.push('/');
      } else if (item.name == "云服务") {
        Lefts.style.left = "7.5rem";
      } else if (item.name == "大数据中心") {
        Lefts.style.left = "15rem";
      } else if (item.name == "解决方案") {
        Lefts.style.left = "22.5rem";
      } else if (item.name == "5G服务") {
        Lefts.style.left = "30rem";
      } else if (item.name == "咨询服务") {
        Lefts.style.left = "37.5rem";
      } else if (item.name == "关于我们") {
        Lefts.style.left = "45rem";
        // this.$router.push("/user");
      }
    }
  },
  created() {
    this.$nextTick(() => {
      // 禁用右键
      // document.oncontextmenu = new Function("event.returnValue=false");
      // 禁用选择
      // document.onselectstart = new Function("event.returnValue=false");
    });
  },
  mounted() {
    this.$eventbus.$on("nav_left", left => {
      document.querySelector("#marker").style.left = left;
    });

    this.$eventbus.$on("nav_show", flag => {
      this.show = flag;
    });

    let url = host + "/portal/home/gethomemenu";
    this.$axios.get(url).then(res => {
      // console.log(res.data.data);
      this.headMenu = res.data.data.headMenu;
      this.$eventbus.$emit("footMenu", res.data.data.footMenu);
    });
  }
};
</script>
<style scoped lang="less">
@import "../../assets/css/main.less";
@import "../../assets/css/nav_marker.less";
* {
  box-sizing: border-box;
  cursor: default;
}

#nav {
  color: white;
  text-align: center;
}

#main {
  position: relative;
  list-style: none;
  background: rgba(1, 35, 124, 1);
  font-weight: 400;
  font-size: 0;
  text-transform: uppercase;
  display: inline-block;
  padding: 0;
  margin: 0 auto;
}

#main li {
  font-size: 1rem;
  display: inline-block;
  position: relative;
  padding: 0.9375rem 1.25rem;
  cursor: pointer;
  z-index: 5;
  min-width: 7.5rem;
}

li {
  margin: 0;
  .link {
    color: white;
    text-decoration: none;
  }
}
</style>