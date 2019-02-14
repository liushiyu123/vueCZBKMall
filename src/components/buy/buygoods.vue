<template>
	<div id="tmp1">
		<div id="mui-content" class="mui-content" style="background-color:#fff">
			<ul class="mui-table-view mui-grid-view">

				<li class="mui-table-view-cell mui-media mui-col-xs-6" v-for="item in list">
					<router-link v-bind="{to:'/home/buy/'+item.id}">
						<img class="mui-media-object" :src="item.img_url">
						<div class="mui-media-body">{{item.title}}</div>
						<div class="desc">
							<p>
								<span>￥{{item.sell_price}}</span>
								<s>￥{{item.market_price}}</s>
							</p>
							<p>
								<h6 class="left">热卖中</h6>
								<h6 class="right">剩余{{item.stock_quantity}}件</h6>
							</p>
						</div>
					</router-link>

				</li>

			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
			list:[],
			num:1
			}
		},
		methods:{
		getgoods(){
		let url=this.$domain.apidomain+'/api/getgoods?pageindex='+this.num;
			this.$http.get(url).then(function(info){
					this.list=info.body.message;	
				})
			}
		},
		created(){
			this.getgoods();
		}
	}
</script>

<style scoped>
	#mui-content li{
	border: 1px solid rgba(0,0,0,0.4);
	-webkit-box-shadow: 0 0 4px #000;
	-moz-box-shadow: 0 0 4px #000 ;
	box-shadow: 0 0 4px #000 ;
	margin-left: 4px;
	padding-left: 0px;
}

	#mui-content .mui-media-body{
		color: #0094ff;
		text-align:center;
	}

		#mui-content .desc{
			height: 60px;
			background-color: rgba(0,0,0,0.1);
			margin-top: 10px;
			padding: 5px;
			text-align: left;
		}
#mui-content .desc span{
	color: red;
	margin-right: 15px;
}
	#mui-content a{
		padding-left: 0px;
		margin-left: 0px;
	}

	#mui-content .desc .right{
		position: absolute;
		right: 10px;
		bottom: 0px;
	}

#mui-content .desc .left{
	position: absolute;
	left: 10px;
	bottom: 0px;
}
</style>

