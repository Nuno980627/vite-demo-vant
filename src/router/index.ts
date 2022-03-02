import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (home.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/HelloWorld.vue'),
    meta: {
      title: '首页',
      keepalive:true
    }
  },
  // 404
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.meta.keepalive && savedPosition) {
      return savedPosition
    } else {
      // if (from.meta.keepalive) {
      //   console.log(document.body.scrollTop, 2)
      //   from.meta.savedPosition = document.body.scrollTop
      // }
      return { top: 0 }
    }
  }
})

export default router
