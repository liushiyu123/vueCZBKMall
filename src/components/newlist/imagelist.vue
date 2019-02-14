<template>
	<div id="tmp1">
		<div id="imagebox">
			<ul ref="myul">
				<li @click="getload(0)">
					<router-link to="#" >全部</router-link>
				</li>
				<li v-for="item in lists" @click="getload(item.id)">
					<router-link to="#"  v-text="item.title" ></router-link>
				</li>
			</ul>
		</div>
		<div id="imageload">
			<ul>
  				<li v-for="item in list">
  				<router-link v-bind="{to:'/home/imagelist/imageinfo/'+item.id}">
  					<img v-lazy="item.img_url">
  				</router-link>
    				<div>
    					<h4 v-text="item.title"></h4>
    					<p v-text="item.zhaiyao"></p>
    				</div>
  				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import {Toast} from 'mint-ui';
	export default{
		data(){
			return {
			lists:[],
			list:[]
			}
		},
		methods:{
			getimage(){
				let url=this.$domain.apidomain+'/api/getimgcategory';
				this.$http.get(url).then(function(res){
					this.lists=res.body.message;
					let count=res.body.message.length+1;
					this.$refs.myul.style.width=count*73+73+'px';
				})
			},
			getload(id){
			alert(id)
				let url=this.$domain.apidomain+'/api/getimages/'+id;
				this.$http.get(url).then(function(res){
				console.log(res);
					this.list=res.body.message;
					
					
				})
			}
		},
		created(){
			this.getimage();
			this.getload(0);//加载全部
		}
	}
</script>

<style scoped>
	#imagebox {
	overflow-x:auto;
	}
	#imagebox ul {
	margin:5px;
	padding-left:10px;
	list-style:none;
	overflow:hidden;
	}
	#imagebox ul li {
	margin:0 5px;
	float:left;
	}
	#imageload ul {
	list-style:none;
	padding:0;
	margin:0;
	}
	#imageload ul li{
		position:relative;
	}
	#imageload ul li img{
	width:100%;
	}
	#imageload ul li div {
	position:absolute ;
	background:rgba(0,0,0,0.5);
	bottom:0;
	z-index:12;
	color:white;
	}
	#imageload ul li div p {
	color:white;
	font-weight:bolder;
	}
</style>

