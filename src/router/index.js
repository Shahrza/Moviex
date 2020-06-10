import Vue from "vue";
import Router from "vue-router";
import Vuelidate from 'vuelidate'
import routes from './routes'

Vue.use(Vuelidate)
Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    let token = !!localStorage.token;

    if (token) {
        if (to.name === 'Login' || to.name === 'Register') {
            next('/');
        }
        else {
            next();
        }
    } else {
        if (to.name === 'Login' || to.name === 'Register') {
            next()
        } else {
            next({name: 'Login'})
        }
    }
});

export default router

