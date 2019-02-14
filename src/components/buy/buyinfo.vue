<template>
	<div id="tmp2">
		<lunbo :msg="msg"></lunbo>
		<div class="car">
			<p>{{argu.title}}</p>
			<p>
				销售价<span>￥{{argu.sell_price}}</span> 市场价<s>￥{{argu.market_price}}</s>
			</p>
			<p>购买量: <choosequan v-on:send='getdata'></choosequan></p>
			<p>
				<mt-button type="primary" size="small">立即购买</mt-button>
				<mt-button type="danger" size="small" @click="senddata">加入购物车</mt-button> 
			</p>

		</div>
		<div class="argu">
			<p>商品参数</p>
			<p>商品货号:{{argu.goods_no}}</p>
			<p>库存数量:{{argu.stock_quantity}}</p>
			<p>上架时间:{{argu.add_time}}</p>
		</div>
		<div class="btn">
			<router-link to="#">
				<mt-button type="primary" size="large">图文评论</mt-button>
			</router-link >
			<router-link to="#">
				<mt-button type="danger" size="large">商品详情</mt-button>
			</router-link>	
		</div>
	</div>
</template>

<script>
import lunbo from '../lunbo.vue'
import choosequan from '../choosequan.vue'
import {_num,vm} from '../../vm.js'
import {localsetItem} from '../../localstorage.js'
	export default{
		components:{
			lunbo,
			choosequan
		},
		data(){
			return {
			  msg:[],
			  id:0,
			  argu:[],
			  res:0,
			  img:0
			}
		},
		methods:{
			getimgs(){
				var url=this.$domain.apidomain + '/api/getthumimages/'+this.id;
			this.$http.get(url).then(function(res){
				const info=res.body.message;
				this.msg=info;
				console.log(info);
			})
			},
			getgoodsargu(){
			var url=this.$domain.apidomain +'/api/goods/getinfo/'+this.id;
				this.$http.get(url).then(function(res){
				console.log(res);
				const argu=res.body.message[0];
				this.argu=argu;
				console.log('argu--'+argu);
			})
			},
			getdata:function(res){
					this.res=res;
			
			},
			senddata:function(){
				vm.$emit(_num,this.res);
				localsetItem(this.id,this.argu.market_price,this.res);
			}
		},
		created(){
			this.id=this.$route.params.id;
			this.getimgs();
			this.getgoodsargu();
		}
	}
</script>

<style scoped>
	#tmp1,.car,.argu ,.btn{
	border:1px solid gray;
	margin:3px;
	border-radius:5px;
	}
	.car p:first-of-type,.argu p:first-of-type {
	border-bottom:1px solid gray;
	color:gray;
	}
	.car,.argu {
	padding:5px;
	}
	.car p:nth-of-type(2) span{
		color:red;
		margin-right:15px;
	}
	.car p:nth-of-type(4) button{
	margin-top:26px;
	margin-right:10px;
	}
	.argu p{
	margin-top:5px;
	}
	.btn {
	padding:5px;
	}
	.btn button {
		margin-top:5px;
		margin-bottom:5px;
	}
</style>

