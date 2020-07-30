/*
 * @Author: your name
 * @Date: 2020-07-29 10:59:35
 * @LastEditTime: 2020-07-29 16:35:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /learn/Users/rainbow/Documents/工作/vue/vue2-cli/hello/vue.config.js
 */ 

// css预处理器
 const path = require('path');
 function addStyleResource(rule) {
      rule.use('style-resource')
          .loader('style-resources-loader')
          .options({
              patterns:[
                path.resolve(__dirname, './src/style/imports.scss')
              ]
          })
 }
module.exports = {

  publicPath: process.env.NODE_ENV === 'production' 
  ? '/production-sub-path'
  : '/c',
  chainWebpack: config => {
      const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
      types.forEach(type => {
          addStyleResource(config.module.rule('scss').oneOf(type))
      });
  },
  devServer: {
      // app其实是express的实例
      before( app ){
          app.get('/api/course', (req, res)=>{
              setTimeout(()=>{ 
                res.json([{ name: 'web全栈', price: 8999 }, { name: 'web高级', price:
                8999 }])
              }, 1000)
          })
      },
      // 会被转发到 3000这个服务器
      proxy:'http://localhost:3000'
  }
}