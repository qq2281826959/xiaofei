<template>
	<div class='home'>
		<Header></Header>
		<router-view></router-view>
	</div>
</template>

<script>
	
	import Header from '@/components/Header'
	
	export default{
		name:'Home',
		components:{
			Header
		}
	}
</script>

<style scoped>
	.home{
		display:flex;
		justify-content: flex-start;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}
</style>
