import Vue  from "vue";
const eventbus = new Vue();

Vue.prototype.$eventbus = eventbus;

export default eventbus;