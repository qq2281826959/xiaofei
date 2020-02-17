<template>
	<div class="login">
		<div class="nav">
			<router-link :to="{name:'RegisterItem'}" class="loginItem">注册新账号</router-link>
			<p class="line"></p>
			<router-link :to="{name:'LoginItem'}" class="loginItem">会员登录</router-link>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	export default{
		name:'Login'
	}
</script>

<style scoped>
	.login{
		width:40%;
		height:500px;
		border:5px solid rgb(226,226,226);
		margin-top:40px;
		box-sizing: border-box;
		padding: 40px 40px;
	}
	.nav{
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	.loginItem{
		text-decoration: none;
		color:#000000;
		font-size:24px;
	}
	.line{
		width:3.5px;
		height:1.2em;
		background: rgb(226,226,226);
	}
	.router-link-active{
		color:red;
	}
</style>
