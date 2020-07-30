<!--
 * @Author: your name
 * @Date: 2020-07-22 11:24:31
 * @LastEditTime: 2020-07-22 11:47:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /learn/Users/rainbow/Documents/工作/vue/vue3.0/01-vue3-cli/src/transition_demo.vue
--> 
<template>
    <div id="demo">
        <button @click="show=!show"></button>
        <transition name="fade">
            <p v-show="show"> hello </p>
        </transition>
        
    </div>
</template>

<script>
    // import Vue from 'vue';
    export default {
        data(){
          return {
            show: true
          }
        }
    }


</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition:opacity .5s;
}

.fade-enter, .fade-leave-to{
  opacity:0
}
</style>