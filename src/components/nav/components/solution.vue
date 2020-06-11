<template>
  <div id="solution">
    <div class="solution" ref="solution">
      <section v-for="item in NavMenu" :key="item.id">
        <strong>{{item.name}}</strong>
        <div>
          <a v-for="el in item.child" :key="el.id" @click="linkTo(el.sid)">
            {{el.name}}
            <i class="el-icon-sunny"></i>
          </a>
        </div>
        <span>
          更多
          <i class="el-icon-sort-up"></i>
        </span>
      </section>
    </div>
  </div>
</template>

<script>
// import logo from "../../assets/images/logo.png";
export default {
  data() {
    return {};
  },
  props: ["NavMenu"],
  methods: {
    linkTo(id) {
      localStorage.setItem('page_id', id); 
      this.$router.push('/solution');
      this.$eventbus.$emit("page_id", id);
      this.$eventbus.$emit("nav_show", false);
      this.$eventbus.$emit("nav_left", "22.5rem");
    }
  },
  mounted() {
    //  console.log(this.NavMenu);
  }
};
</script>
<style scoped lang="less">
@import "../../../assets/css/main.less";
#solution {
  width: 100%;
  height: 100%;
  // background: blanchedalmond;
  .solution {
    width: 100%;
    height: 90%;
    .row;
    justify-content: flex-start;
    color: white;
    // color: black;

    section {
      width: 15rem;
      height: 100%;
      margin-right: 0.625rem;
      // background: burlywood;
      .column;
      align-items: flex-start;
      justify-content: space-between;

      strong {
        padding: 0.625rem 0 0 .625rem;
      }

      div {
        width: 100%;
        height: 80%;
        // background: blueviolet;
        .column;
        align-items: flex-start;
        justify-content: flex-start;

        a {
          width: 14rem;
          height: 3rem;
          .row;
          background: rgba(0, 0, 0, 0.8);
          color: rgba(255, 255, 255, 0.5);
          padding-left: 0.625rem;
          margin-top: 0.125rem;
          border: 0.125rem solid rgba(255, 255, 255, 0.2);
          border-radius: 0.3125rem;
          i {
            color: crimson;
          }
        }
        a:nth-of-type(1) {
          margin-top: 0;
        }

        a::before {
          content: "";
          width: 0.3125rem;
          height: 60%;
          border-left: 0 solid #f8b551;
          border-radius: 0.0625rem;
        }

        a:hover {
          border: 0.125rem solid rgba(255, 255, 255, 0.5);
          color: white;
        }

        a:hover::before {
          border-left-width: 0.1875rem;
        }
      }

      span {
        align-self: flex-end;
      }
    }
  }
}
</style>