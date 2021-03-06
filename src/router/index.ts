import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import projectRoutes from '../pages/project/routes';
import uiKitRoutes from '../pages/ui-kit/routes';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  ...uiKitRoutes,
  ...projectRoutes,
  {path: "*", redirect:"/list"}
];

const router = new VueRouter({
  routes,
})

export default router
