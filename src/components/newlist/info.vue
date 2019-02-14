<template>
	<div id="tmp1">
		<div class="title">
		   <h4 v-text="info.title"></h4>
		   <p>{{ info.add_time | changedate('YYYY-MM-DD HH-mm-ss') }}  {{info.click}}次浏览</p>
	   </div>
		<div id="content" v-html="info.content" ></div>
		<comment :id='id'></comment>
	</div>
</template>

<script>
import comment from './comment.vue'
	export default{
		data(){
			return {
			list:[],
			id:0,
			info:[]
			}
		},
		created(){
		this.id=this.$route.params.id;
		this.getnewinfo()
		},
		methods:{
		getnewinfo:function(){
			var url=this.$domain.apidomain+'/api/getnew/'+(this.id);
			this.$http.get(url).then(function(res){
				const info=res.body.message[0];
				this.info=info;
			})
		}
		},
		components:{
				comment
		}
	}
</script>

<style scoped>
	.title {
	text-align:center;
	}
	#content {
	margin:20px;
	}
</style>

