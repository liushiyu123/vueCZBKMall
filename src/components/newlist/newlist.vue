<template>
	<div id="tmp1">
		<ul class="mui-table-view">
			<li v-for="item in list" class="mui-table-view-cell mui-media">
				<router-link v-bind="{to:'/home/newlist/info/'+item.id}" >
					<img class="mui-media-object mui-pull-left" :src="item.img_url">
					<div class="mui-media-body">
						{{item.title}}
						<p class='mui-ellipsis' v-text="item.zhaiyao"></p>
						<div class="ft">
							<span>发表时间:{{item.add_time | changedate('YYYY-MM-DD HH-mm-ss')}}</span>
							<span class="click">点击数：{{item.click}}</span>
						</div>
					</div>
				</router-link>
			</li>

		</ul>
	</div>
</template>

<script>
// import domain from '../../domain/domain.js' 统一管理api 方法一
	export default{
		data(){
			return {
			list:[]
			}
		},
		created(){
			this.getnewlist()
		},
		methods:{
			getnewlist:function(){
				const url=this.$domain.apidomain+'/api/getnewslist';
				this.$http.get(url).then(function(res){
					const resdata=res.body;
	  				this.list=resdata.message;
	  				console.log(resdata.message);
	  				 console.log(this.list);
				})
			}
		}
	}
</script>

<style scoped>
	.mui-table-view img{
 	height:80px;
 	width:80px;
 }

 .mui-table-view .mui-media-object{
	 max-width: 80px;
	 line-height: 80px;
 }

	.ft{
		margin-top: 1.5em;
		font-size: 14px;
		color:#0094ff;
	}

 .ft .click{
	 margin-left: 20px;
 }
</style>

