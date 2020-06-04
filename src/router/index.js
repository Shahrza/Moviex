import Vue from "vue";
import Router from "vue-router";
import Vuelidate from 'vuelidate'
import routes from './routes'

Vue.use(Vuelidate)
Vue.use(Router);

const router = new Router({
    routes
});

// router.beforeEach((to, from, next) => {
//     const token = !!localStorage.token;
//
//     if (token) {
//         if (to.meta.token) {
//             next();
//         } else {
//             next({path: 'Movies'})
//         }
//     } else {
//         if (to.name === 'Login' || to.name === 'Register') {
//             next()
//         } else {
//             next({name: 'Login'})
//         }
//     }
// });

export default router

