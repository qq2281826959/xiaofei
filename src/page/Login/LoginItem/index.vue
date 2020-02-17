<template>
	<div class="loginItem">
		<div class="loginItemInput">
			<i class="iconfonte icon-user size"></i>
			<input placeholder="请输入用户名">
		</div>
		<div class="loginItemInput">
			<i class="iconfonte icon-mima"></i>
			<input placeholder="请输入密码">
		</div>
		<div class="loginItemInput">
			<i class="iconfonte icon-yanzhengyanzhengma"></i>
			<input placeholder="验证码">
			<div class='checkImg'>
				<img>
			</div>
		</div>
		<p class="left">忘记密码?</p>
		<router-link :to="{name:'HomeItem'}" class="button">登录</router-link>
		<p class="registerTitle">其他账号联合登录</p>
		<div class="registerIcon">
			<router-link :to="{}" class="qq"><i class='iconfonte icon-qq'></i></router-link>
			<router-link :to="{}" class="weixin"><i class="iconfonte icon-weixin"></i></router-link>
			<router-link :to="{}" class="zhifubao"><i class="iconfonte icon-zhifubao"></i></router-link>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.loginItem{
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		margin-top:20px;
	}
	.loginItemInput{
		position: relative;
		width:80%;
		height:50px;
		display: flex;
		align-items: center;
		margin-bottom:20px;
		border: 1px solid black;
		z-index: 3;
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
		width:80%;
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
	.qq,.weixin,.zhifubao{
		text-decoration: none;
	}
	.qq{
		color:#2BAEF1;
	}
	.weixin{
		color:#42B983;
	}
	.zhifubao{
		color:#2BAEF1;
	}
</style>
