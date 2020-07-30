/*
 * @Author: your name
 * @Date: 2020-07-22 11:39:11
 * @LastEditTime: 2020-07-29 10:22:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /learn/Users/rainbow/Documents/工作/vue/vue2-cli/hello/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import App from './transition_demo'

Vue.config.productionTip = false

new Vue({
 router,
 store,
 render: h => h(App)
}).$mount('#app')
