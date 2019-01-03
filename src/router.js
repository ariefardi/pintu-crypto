import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "about" */ './views/Home.vue')
      },
        {
            path: '/id',
            name: 'id-home',
            component: () => import(/* webpackChunkName: "about" */ './views/Home.vue')
        },
        {
            path: '/en',
            name: 'en-home',
            component: () => import(/* webpackChunkName: "about" */ './views/Home.vue')
        },
      {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
      },
        {
            path: '/blog',
            name: 'blog',
            component: () => import(/* webpackChunkName: "blog" */ './views/Blog.vue' )
        },
        {
            path: '/thanks',
            name: 'thanks',
            component: () => import(/* webpackChunkName: "blog" */ './views/ThanksPage.vue' )
        }
  ]
})
