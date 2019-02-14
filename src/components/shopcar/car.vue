<template>
	<div id="tmp1">
		<div class="shopcar">
			<div class="_soncar clear" v-for="item in list">
				<div class="clear title">
					<h4>{{item.title}}</h4>
					<span><a href="javascript:;">编辑</a><a href="javascript:;">完成</a></span>
				</div>
				<div>
				<h4>删除</h4>
				<div>
					<mt-switch v-model="value" @change="turn"></mt-switch>
				</div>
				<div class="clear _shop_car_right">
				<img :src="item.thumb_path">
					<choosequan></choosequan>
					<ul>
						<li>热卖中</li>
						<li>￥:{{item.sell_price}}</li>
						<li><s>￥:{{item.market_price}}</s></li>
						<li>x:{{item.count}}</li>
					</ul>
				</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script scoped>
import Vue from 'vue';
import { Switch } from 'mint-ui';
import choosequan from '../choosequan.vue';
import {localgetItem} from '../../localstorage.js'
	export default{
		data(){
			return {
				value:true,
				list:[],
				id:''
			}
		},
		methods:{  
   			 turn:function(){  
        		console.log(this.value)  
   		 	},
   		 	getcardata:function(){
   		 		var url=this.$domain.apidomain +'/api/goods/getshopcarlist/'+this.id;
   		 		this.$http.get(url).then(function(res){
				const argu=res.body.message;
				this.list=argu;
				console.log(this.list);
			})
   		 	}  
  		}, 
		mounted(){
			var newarr=localgetItem();
			this.list=newarr;
			for(var i=0;i<newarr.length;i++){
				var arr=newarr[i];
				this.id=this.id+arr.id+',';
			}
			this.id=this.id.substring(0,this.id.length-1);
			this.getcardata();
			var btnlist=document.querySelectorAll(".title .mint-switch");
			console.log(btnlist);
		},
		components:{
			choosequan
		}
		
	}
</script>

<style>
	* {
		list-style:none;
		box-sizing:border-box;
		margin:0;
		padding:0;
	}
	.clear:after, .clear:after {
  		content: '';
  		display: block;
  		height: 0;
  		clear: both;
	}
	.title {
		border-bottom:1px solid #8080855c;
		margin-bottom:10px;

	}
	.clear>h4 {
		display:inline-block;
		font-size:11px;
		color:#0000ff8a;
		font-weight:normal;
	}
	._soncar {
	border-bottom:1px solid #8080855c;
	padding:3px 0;
	position:relative;
	}
	._soncar>div:first-child{
		padding:0 10px;

	}
	._soncar div span {
		padding:3px 2px;
		float:right;
		border-left:1px solid #8080855c;
	}
	._soncar div span a {
		color:#b1becc;
		font-size:14px;
		border:1px solid gray;
		cursor:pointer;
	}
	._soncar div span a:hover {
		background-color:blue;
	}
	 ._soncar>div:last-child ul{
	 	float:right;
	 	color:#8080855c;
	 	font-size:14px;
	 	margin-right:10px;
	 }
	 ._soncar>div:last-child ul>li:last-child {
	 	padding-left:4px;
	 }
	 ._soncar>div:last-child ul>li:first-child {
	 	color:red;
	 }
	 ._shop_car_right {
	 	float:right;
	 }
._soncar>.mint-switch {
	display:inline-block;
	position:absolute;
	top:60px;
	left:10px;
}
tmp1>shopcar #tmp3{
	poistion:absolute;
	top:70px;
}
shopcar>_soncar>_shop_car_right {
	
	padding:10px 0;
}
#tmp3[data-v-aa0fcd5a] {
    display: inline-block;
    position: relative;
    top: 27px;
    left: -20px;
}
._shop_car_right img {
	  display:inline-block;
	  width:60px;
	  height:60px;
	  position:absolute;
	  top:34px;
	  left:77px;
	  	  }
</style>

