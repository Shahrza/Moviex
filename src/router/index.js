import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "Movies",
            component: () => import("../views/movies")
        },
        {
            path: "/tv-series",
            name: "Tv-Series",
            component: () => import("../views/tv-series")
        },
        {
            path: "/overview",
            name: "Overview",
            component: () => import("../views/overview")
        }
    ]
});
