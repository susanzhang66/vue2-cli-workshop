/*
 * @Author: your name
 * @Date: 2020-07-29 10:26:58
 * @LastEditTime: 2020-07-30 16:12:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /learn/Users/rainbow/Documents/工作/vue/vue2-cli/hello/src/router/index.js
 */ 
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    meta: {
        auth: true
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

// 全局守卫 --- 登录态
router.beforeEach((to, from, next)=>{
  if(to.meta.auth){
      //是否登录
      if( window.isLogin ){
        next();
      }else{
        // 这里有问题哦，只能在路由内跳转啊。。
        console.log(to);
        window.location.href = 'http://localhost:8080/login.html?redirect='+ to.fullPath;
        // next('http://localhost:8080/login.html?redirect='+ to.fullPath)
      }
  }else{
    next();
  }
})

export default router
