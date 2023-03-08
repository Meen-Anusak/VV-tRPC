import { createRouter, createWebHistory, RouteRecordRaw  } from 'vue-router'

const routes: RouteRecordRaw[] = [
{
  path: '/',
  name: 'Home',
  component: () => import("../views/Index.vue"),
},

]
const router = createRouter({
  history: createWebHistory(),
  routes: routes
})
export default router