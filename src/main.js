// 1.0 导入vue核心包
import Vue from 'vue';

// 2.0 导入App.vue的vue对象
import App from './App.vue';

// 3.0 将vue-router集成到这个项目中来
import vueRouter from 'vue-router';
// 3.0.1 将vueRouter对象绑定到Vue对象上
Vue.use(vueRouter);

// 3.0.2 导入路由规则对应的组件对象
import home from './components/Home.vue';
import shopcar from './components/shopcar/car.vue';
import newlist from './components/newlist/newlist.vue'
import info from './components/newlist/info.vue'
import imagelist from  './components/newlist/imagelist.vue'
import imageinfo from  './components/newlist/imageinfo.vue'
import buygoods from './components/buy/buygoods.vue'
import buyinfo from './components/buy/buyinfo.vue'
// 3.0.2 定义路由规则

var router1 = new vueRouter({
	linkActiveClass:'mui-active',  
	routes:[
		{path:'/',redirect:'/home'},
		{path:'/home',component:home}, 
		{path:'/home/newlist',component:newlist},
		{path:'/home/imagelist',component:imagelist},
		{path:'/home/imagelist/imageinfo/:id',component:imageinfo},
		{path:'/home/buy',component:buygoods},
		{path:'/home/buy/:id',component:buyinfo},
		{path:'/home/newlist/info/:id',component:info},
		{path:'/shopcar',component:shopcar}
	]
	});



import 'mint-ui/lib/style.min.css';
// 导入mint-ui组件对象
import mintui from 'mint-ui';
// 在Vue中全局使用mintui
Vue.use(mintui);

import vueresource from 'vue-resource'
Vue.use(vueresource);

// import VuePreview from 'vue-preview'
// Vue.use(VuePreview)

import Vuex from 'vuex';
Vue.use(Vuex);


import moment from 'moment'
// 5.0 注册mui的css样式
import '../statics/mui/css/mui.css';

// 6.0 导入一个当前系统的全局基本样式
import '../statics/css/site.css';

// import '../statics/css/font_e6rma9abzwk4kj4i/iconfont.css';

import domain from './domain/domain.js';
Vue.prototype.$domain=domain;
Vue.filter('changedate',function(input,str){
	return moment(input).format(str);
})
// 5.0 利用Vue对象进行解析渲染
new Vue({
	el:'#app',
	// 使用路由对象实例
	router:router1,
	// render:function(create){create(App)} //es5的写法
	render:c=>c(App)  // es6的函数写法 =>：goes to
});