
export default [
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
        path: "/overview/:id",
        name: "Overview",
        component: () => import("../views/overview")
    },
    {
        path: "/favorites",
        name: "Favorites",
        component: () => import("../views/favorites")
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("../views/login")
    },
    {
        path: "/register",
        name: "Register",
        component: () => import("../views/register")
    },
]
