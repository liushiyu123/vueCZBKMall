<template>
	<div id="tmp1">
		<mt-swipe :auto="4000">
  			<mt-swipe-item v-for="item in msg">
  				<img v-bind:src="item.img"></img>
  			</mt-swipe-item>	
  			<!-- <img src="1.jpg" alt="" />
  			<img src="2.jpg" alt="" />
  			<img src="3.jpg" alt="" /> -->
		</mt-swipe>
	</div>
</template>

<script>
	export default{
		props:['msg']
	}
</script>

<style scoped>
#tmp1{
	margin-top: 45px;
	margin-bottom: 50px;
}
#tmp1 .mint-swipe{
	width: 100%;
	height: 350px;
	background-color: white;
}
#tmp1 .mint-swipe .mint-swipe-item img {
	width: 100%;
	height: 350px;
}
</style>

