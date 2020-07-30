<!--
 * @Author: your name
 * @Date: 2020-07-29 10:26:58
 * @LastEditTime: 2020-07-29 16:14:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /learn/Users/rainbow/Documents/工作/vue/vue2-cli/hello/src/views/About.vue
--> 
<template>
  <div :class="['about', $style.red]">
    <h1>This is an about page</h1>
  </div>
</template>

<style module>
/* css module 案例 */
.red{
  color:red;
}
</style>
