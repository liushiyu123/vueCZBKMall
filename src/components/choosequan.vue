<template>
	<div id="tmp3">
		<ul>
			<button @click="substract">-</button>
			<button >{{num}}</button>
			<button @click="add">+</button>
		</ul>
	</div>
</template>

<script>

	export default{
		data(){
			return {
				num:0
			}
			
			},
			methods:{
				substract(){
					this.num--;
					if(this.num<=0){
					this.num=0;
					}
					this.senddata();
				},
				add(){
				this.num++;
				this.senddata();
				},
				senddata(){
            		this.$emit('send',this.num)
    }

			}
	}
</script>

<style scoped>
#tmp3 {
	display:inline-block;
}
	#tmp3 ul{
	display:inline-block;
		list-style:none;
		margin:0;
		padding:0;
		
	}
		#tmp3 ul button {
		display:inline-block;
		width:35px;
		text-align:center;
		}
</style>

