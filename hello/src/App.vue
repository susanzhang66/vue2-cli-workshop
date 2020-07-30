<!--
 * @Author: your name
 * @Date: 2020-07-22 11:39:11
 * @LastEditTime: 2020-07-29 16:11:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /learn/Users/rainbow/Documents/工作/vue/vue2-cli/hello/src/App.vue
--> 
<template>
  <div id="app">
    <div id="nav">
      <h1 class="greenColor">使用css预处理器</h1>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>


<style  scoped>
/* 单独的应用当前文件 */
#app {
  background-color: #ccc;
}

/* 利用父级的scope 原理，在元素上会加上特定唯一的属性（data-v-xxxd），会作用在根元素，所以可以应用到home */
.home{
  border: 4px solid #42b983;
}

/* 深度穿透 */

/* #app >>> .hello{
  color: orange;
} */

</style>

<style lang="scss" scoped>
/* 深度穿透 兼容sass*/ 

// #app /deep/ .hello{
//   color: orange;
// }
// 我安装的只能用下面这个
#app ::v-deep .hello{
  color: orange;
}
// css预处理器

.greenColor{
  color: $color;
}
</style>

