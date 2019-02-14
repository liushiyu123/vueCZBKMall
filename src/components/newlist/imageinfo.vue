<template>
	<div id="tmp1">
		<h4 v-text="info.title"></h4>
		<p v-text="info.add_time"></p>
		<div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"  v-for="(item, index) in list">
		            	<img class="preview-img" :src="item.src" height="100" @click="$preview.open(index, list)">
		            </li>
		        </ul> 
		</div>
		<div class="imgcontent" v-html="info.content">详情</div>
		<comment :id='id'></comment>
	</div>
</template>

<script>
import comment from './comment.vue'
	
	export default{
		data(){
			return {
				id:0,
				info:[],
				list: []
			}
		},
		methods:{
			getloadone(){
			let url=this.$domain.apidomain+'/api/getimageInfo/'+this.id;
				this.$http.get(url).then(function(res){
					this.info=res.body.message[0];	
					console.log(this.info)
				})
			},
			getloadtwo(){
			let url=this.$domain.apidomain+'/api/getthumimages/'+this.id;
			this.$http.get(url).then(function(res){
					res.body.message.forEach(function(item){
						var img = document.createElement('img');
						img.src = item.src;
						img.onload=function(){
							item.h = img.height;
						item.w = img.width;
						}
					});
					this.list=res.body.message;	
				})
			}
		},
		created(){
		this.id=this.$route.params.id;
		this.getloadone();
		this.getloadtwo();
		},
		components:{
				comment
		}
	}
</script>

<style scoped>
	#tmp1 h4,#tmp1 .imgcontent,#tmp1 p{
	color:#6cb7ef;
	}
	#tmp1 .imgcontent {
		text-indent:2em;
		margin-bottom:10px;
	}
</style>

