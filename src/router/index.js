import Vue from "vue";
import Router from "vue-router";
import Vuelidate from 'vuelidate'
import routes from './routes'

Vue.use(Vuelidate);
Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes
});


export default router

