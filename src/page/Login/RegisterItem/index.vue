<template>
	<div class="loginItem">
		<div class="loginItemInput">
			<i class="iconfonte icon-user size"></i>
			<input placeholder="请输入手机号">
		</div>
		<div class="loginItemInput">
			<i class="iconfonte icon-mima"></i>
			<input placeholder="请输入密码">
		</div>
		<div class="loginItemInput">
			<i class="iconfonte icon-yanzhengyanzhengma"></i>
			<input placeholder="验证码">
			<button class='sent'>发送验证码</button>
		</div>
		<router-link :to="{name:'Register'}" class="button">注册</router-link>
	</div>
</template>

<script>
	export default{
		name:'RegisterItem'
	}
</script>

<style scoped>
	.loginItem{
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		margin-top:40px;
	}
	
	.loginItemInput{
		position: relative;
		width:80%;
		height:50px;
		display: flex;
		align-items: center;
		margin-bottom:40px;
		border: 1px solid black;
	}
	
	.loginItemInput>i{
		position:absolute;
		top:10px;
		left:8px;
	}
	
	.loginItemInput>input{
		width:70%;
		height:95%;
		outline: none;
		border: none;
		position: absolute;
		left:40px;
	}
	
	.loginItemInput:hover{
		border: 1px solid #2BAEF1;
		box-shadow: 0px 0px 2px 2px #2BAEF1;
	}
	
	.size{
		font-size:26px;
	}
	
	.left{
		position: relative;
		right:-120px;
		font-size: 18px;
		margin-bottom:10px;
	}
	
	.button{
		width:60%;
		height:50px;
		background: red;
		color:white;
		display: flex;
		justify-content: center;
		align-items: center;
		text-decoration: none;
		border-radius: 5px;
		margin-bottom:15px;
	}
	
	.registerTitle{
		margin-bottom:10px;
	}
	
	.registerIcon{
		width:40%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		
	}
	.sent{
		position:absolute;
		width:80px;
		height:100%;
		right:0;
		background: #EFEFEF;
		border: 1px solid #EFEFEF;
		cursor: pointer;
	}
	
</style>
