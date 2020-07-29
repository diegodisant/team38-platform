import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Signin from '../views/Signin.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Signin',
    component: Signin,
  },
];

const router = new VueRouter({
  routes,
});

/*
@TODO: enable router history when will be integrated with nginx
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
}); */

export default router;
