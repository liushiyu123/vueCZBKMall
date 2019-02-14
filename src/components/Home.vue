<template>
	<div id="tmpl">
		<lunbo :msg="msg"></lunbo>
		<div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newlist">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/imagelist">
		                    <span class="mui-icon mui-icon-email"></span>
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/buy">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">商品购买</div></router-link></li>
		             <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		                    <span class="mui-icon mui-icon-callback"></span>
		               <div class="mui-media-body">留言反馈</div></router-link></li>       
		           <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		                    <span class="mui-icon mui-icon-video"></span>
		               <div class="mui-media-body">视频专区</div></router-link></li>
		               <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		                    <span class="mui-icon mui-icon-concat"></span>
		               <div class="mui-media-body">联系我们</div></router-link></li>
		        </ul> 
		</div>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	import lunbo from './lunbo.vue'
	export default {
	  data(){
	  		return {
	  			msg:[]
	  		}
	  },
	  created(){
	  	this.getdata();
	  },
	  methods:{
	  		getdata:function(){
	  		 const url=this.$domain.apidomain+'/api/getlunbo';
	  			this.$http.get(url).then(function(res){
	  				const resdata=res.body;
	  				this.msg=resdata.message;
	  				console.log(resdata.message)
	  				 console.log(this.msg)
	  			})
	  		}
	  },
	  components:{
	  	lunbo
	  }
	}
</script>

<style scoped>
	
</style>