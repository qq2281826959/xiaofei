<template>
	<div class="header">
		<div class="logo">
			<a href="../../admin/Index.html"><img src="../../assets/logo.jpg" alt="缴费水电收费服务中心"></a>
			<p>小菲水电收费服务中心</p>
		</div>
		<router-link class="navItem" :to="{name:'LoginItem'}">首页</router-link>
		<router-link class="navItem" :to="{name:'HomeItem'}">话费充值</router-link>
		<router-link class="navItem" :to="{name:'HomeItem'}">生活缴费</router-link>
		<router-link class="navItem" :to="{name:'HomeItem'}">其他服务</router-link>
		<router-link class="navItem" :to="{name:'HomeItem'}">游戏充值</router-link>
	</div>
</template>

<script>
	export default{
		name:'Header',
		methods:{
			check(){
				console.log(1);
			}
		}
	}
</script>

<style scoped>
	.header{
	    width:100%;
	    height:80px;
	    background:#368edd;
	    border-bottom:2px solid #2487c9;
		display: flex;
		justify-content: space-around;
		align-items: center;
		color:white;
	}
	.logo{
		width:25%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		font-size: 24px;
		font-weight:bold;
	}
	.logo>a>img{
	    width:60px;
		border-radius: 50%;
		line-height: 80px;
	}
	.navItem{
		text-decoration: none;
		color:white;
		font-size:20px;
	}
</style>
