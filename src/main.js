import Vue from 'vue';
import App from './App.vue';
import './plugins/element.js';
import "./eventbus";
import "./assets/css/font-awesome-4.7.0/css/font-awesome.min.css";

// import $ from 'jquery';

// import './plugins/ueditor/ueditor.config.js';
// import './plugins/ueditor/ueditor.all.min.js'
// import './plugins/ueditor/lang/zh-cn/zh-cn.js'
// import './plugins/ueditor/ueditor.parse.min.js'

// import "./scroll";
import "./axios";
import router from "./router";
import animated from 'animate.css';
// import vuescroll from 'vuescroll';
// Vue.use(vuescroll);
// Vue.prototype.$vuescrollConfig = {
//     bar: {
//         background: '#000'
//     }
// };
// Vue.use($);
Vue.use(animated);


Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')