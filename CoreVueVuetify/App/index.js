import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
console.log('starting vue initialization');
Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: App
    }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

new Vue({
    el: '#app',
    template: "<div class='test'><router-view></router-view></div>",
    router
});
console.log('end vue initialization')