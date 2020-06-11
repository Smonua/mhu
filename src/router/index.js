import Vue from "vue";
import VueRouter from "vue-router";

import Index from "../pages/index";
import BigData from "../pages/bigdata/";
import Solution from "../pages/solution/";
import Consultation from "../pages/consultation/";
import About from "../pages/about/";

Vue.use(VueRouter);

const routes = [{
        name: '/',
        path: "/",
        component: Index,
        beforeEnter: (to, from, next) => {
            next();
        }
    },
    {
        name: 'BigData',
        path: "/bigdata",
        component: BigData
    },
    {
        // name: 'BigData',
        path: "/bigdata/:type",
        component: BigData
    },
    {
        name: 'Solution',
        path: "/solution",
        component: Solution
    }, {
        name: 'Consultation',
        path: "/consultation",
        component: Consultation
    }, {
        // name: 'Consultation',
        path: "/consultation/:type",
        component: Consultation
    }, {
        name: 'About',
        path: "/about",
        component: About
    }, {
        // name: 'About',
        path: "/about/:type",
        component: About
    },
]



const router = new VueRouter({
    routes,
    mode: 'history',
    base: '/dist',
})

export default router;