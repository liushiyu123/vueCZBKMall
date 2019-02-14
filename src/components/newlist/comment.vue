<template>
	<div id="commentbox">
		<h3>评论区</h3>
		<p></p>
		<textarea placeholder="请输入评论内容...." v-model="textcontent"></textarea>
		<mt-button type="primary" size="large" @click="postcomment">发表</mt-button>

		<div id="list">
			<h3>评论列表</h3>
			<p class="p"></p>
			<div v-for="(item,index) in list">
				<div class="title">
					<span>第{{index + 1}}楼:</span>
					<span>用户：{{item.user_name}}</span>
					<span>发表时间：{{item.add_time}}</span>
				</div>
				<ul class="mui-table-view">
					<li class="mui-table-view-cell" v-text="item.content"></li>
				</ul>
			</div>
		</div>
		<mt-button type="danger" size="large" plain @click="getmore">加载更多</mt-button>
	</div>
	

</template>

<script>
	import { Toast } from 'mint-ui';
	export default{
		props:['id'],
		data(){
		return {
			textcontent:'',
			num:1,
			list:[],
			temp:0
		}
		},
		created(){
			this.commentlist();
			
		},
		methods:{
			postcomment:function(){
				let str=this.textcontent.trim();
				if(str==''){
				Toast('请重新输入...')
				return;
				}
			let url=this.$domain.apidomain+'/api/postcomment/'+this.id;
			//console.log(this.id);
			this.$http.post(url,{content:this.textcontent},{emulateJSON:true}).then(function(res){
				if(res.body.status){
				Toast(res.body.message);
				return
				}
				this.list.unshift({
					user_name: "匿名用户",
					add_time: new Date(),
					content: this.textcontent
				})
				console.log(this.list)
				this.textcontent='';
				
			})
			},
			getmore:function(){
				this.num++;
				this.commentlist();
			},
			commentlist:function(){
				let url=this.$domain.apidomain+'/api/getcomments/'+this.id+'?pageindex='+this.num;
				this.$http.get(url).then(function(res){
				if(res.body.status){
				 Toast(res.body.message);
				 return;
				}	
					//console.log(res.body.message);
					this.list=this.list.concat(res.body.message);
					console.log(this.list)
				})
			}
		}

	}
</script>

<style scoped>
* {
	padding:0;
	margin:0;
}
	h3 {
		margin-left:10px;
		margin-bottom:5px;
	}
	p {
	height:1px;
	width:100%;
	border-bottom:1px solid #ccc;
	}
	textarea {
	margin-top:20px;
	border:1px solid gray;
	}
</style>

