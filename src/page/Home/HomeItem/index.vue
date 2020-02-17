<template>
	<div class="homeItem">
		<router-link :to="{name:'Detail'}" class="homeItemList">
			<i class="iconfont icon-shoujichongzhi"></i>
			<p class="title">手机充值</p>
			<p class="detail">手机充值 立即到账 方便快捷</p>
		</router-link>
		<router-link :to="{name:'Detail'}" class="homeItemList">
			<i class="iconfont icon-shuidianjiaofei"></i>
			<p class="title">水电煤缴费</p>
			<p class="detail">生活缴费/*24小时 随时随地缴费</p>
			<div class="Coalrecharge">
				<router-link :to="{name:'Detail'}" class="Coalrechargeitem">
					<i class="iconfonts icon-shuixi blue"></i>
					<p>水费</p>
				</router-link>
				<router-link :to="{name:'Detail'}" class="Coalrechargeitem">
					<i class="iconfonts icon-dian yellow"></i>
					<p>电费</p>
				</router-link>
				<router-link :to="{name:'Detail'}" class="Coalrechargeitem">
					<i class="iconfonts icon-jianzhuanquan- red"></i>
					<p>燃气费</p>
				</router-link>
			</div>
		</router-link>
		<router-link :to="{name:'Detail'}" class="homeItemList">
			<i class="iconfont icon-youxichongzhi"></i>
			<p class="title">游戏充值</p>
			<p class="detail">游戏随时充值 立即到账</p>
		</router-link>
		<router-link :to="{name:'Detail'}" class="homeItemList">
			<i class="iconfont icon-dianhua2"></i>
			<p class="title">固话充值</p>
			<p class="detail">固话无等待,无排队,轻松缴</p>
		</router-link>
		<router-link :to="{name:'Detail'}" class="homeItemList">
			<i class="iconfont icon-dianshi"></i>
			<p class="title">有线电视充值</p>
			<p class="detail">电视电视不能少 在家轻松缴</p>
		</router-link>
		<router-link :to="{name:'Detail'}" class="homeItemList">
			<i class="iconfont icon-wangluoe"></i>
			<p class="title">铁通充值</p>
			<p class="detail">铁通经济省钱,高效稳定</p>
		</router-link>
		<router-link :to="{name:'Detail'}" class="homeItemList">
			<i class="iconfont icon-dengdai"></i>
			<p class="title">敬请期待</p>
			<p class="detail">更多精彩,即将上线</p>
		</router-link>
	</div>
</template>

<script>
	
</script>

<style scoped>
	.homeItem{
		width:100%;
		padding:20px 60px;
		box-sizing: border-box;
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		flex-wrap: wrap;
	}
	.homeItemList{
		width:24.5%;
		height:250px;
		text-decoration: none;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border:2px solid #e5e5e5;
		margin-top:-2px;
		background: #fbfbfb;
		overflow: hidden;
	}
	.homeItemList:nth-child(2){
		position: relative;
	}
	.homeItemList:hover{
		box-shadow: 1px 1px 5px 5px #E5E5E5;
		z-index:3;
	}
	.homeItemList+.homeItemList{
		border-left:none;
	}
	.homeItemList:nth-child(5n){
		border-left: 2px solid #E5E5E5;
	}
	.title{
		font-size:20px;
		color:black;
		font-weight:550;
		margin-top:10px;
	}
	.detail{
		color:#BBBBBB;
		font-size:14px;
		margin-top:10px;
	}
	.homeItemList:nth-child(2):hover>.Coalrecharge{
		bottom: 0;
	}
	.Coalrecharge{
		width:100%;
		height:60%;
		position:absolute;
		bottom:0;
		display: flex;
		justify-content: space-around;
		align-items: center;
		background: white;
		bottom:-60%;
		transition: all 0.5s;
	}
	.Coalrechargeitem{
		text-decoration: none;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction:column;
	}
	.Coalrechargeitem>i{
		width:60px;
		height:60px;
		display:flex;
		justify-content: center;
		align-items: center;
		background:#E5E5E5;
		margin-bottom:10px;
		border-radius: 8px;
	}
	.Coalrechargeitem>i:hover{
		box-shadow: 1px 1px 5px 5px #E5E5E5;
		z-index:3;
	}
	.blue{
		color:#2BAEF1;
	}
	.yellow{
		color:rgb(255,179,89);
	}
	.red{
		color:rgb(249,98,104);
	}
	.Coalrechargeitem>p{
		font-size:18px;
		color:black;
	}
	
</style>
