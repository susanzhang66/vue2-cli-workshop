<!--
 * @Author: your name
 * @Date: 2020-07-29 10:26:58
 * @LastEditTime: 2020-07-30 16:10:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /learn/Users/rainbow/Documents/工作/vue/vue2-cli/hello/src/views/Home.vue
--> 
<template>
  <div class="home">
    <!-- 对于这种 相对路径webpack会当作模块解析，小于4kb的会以 baseURL来减少http请求。 
    优点：
    会被压缩，编译的时候会报错，会有哈希处理缓存问题。-->
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- 绝对路径，会原封不动的从public静态服务里面拿数据 -->
    <img alt="Vue logo" src="/assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  created () {
    
  //  this.getMoneyData();   假设没有keep-alive的话，这里是会重新触发的。
  // this.getMoneyData().then((data)=>{
  //       console.log(data);
  // })
  },
// 组件内路由前置导航-- 此时组件未渲染，所有不能用this访问组件内数据。
// 可通过next函数通过router传入当前组件vm进来
// beforeRouteEnter(to, from, next){
//       next(vm => {
//         vm.getMoneyData().then((data)=>{
//           console.log(data);
//         })
//       })
// },
// 适合动态路由
// beforeRouteUpdate(to, from, next){
//   // 在当前路由改变，但是该组件被复用时调用
// // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
// // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
// // 可以访问组件实例 `this`
//     this.getMoneyData().then((data)=>{
//           console.log(data);
//           next();
//     })

// },
    watch: {
      '$route':{
          handler(newValue, oldValue) {
            this.getMoneyData().then((data)=>{
                  console.log(data);
            })
          },
          immediate: true
      }
      
    },
    methods: {
        getMoneyData(){
            return new Promise(( resolve)=>{
                setTimeout(()=>{
                  resolve('实时获取金额')
                },1000)
            })
        }
		}
}
</script>
