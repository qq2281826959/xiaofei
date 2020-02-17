<template>
	<div class="detail">
		<div class="detailList">
			<div class="nav">
				<p class='detailListTitle'>生活便民<span style="font-weight: bold;">(7)</span></p>
				<div class='navList'>
					<router-link :to="{name:'Detail'}" class="navListItem">
						<i class="iconfont icon-shoujichongzhi" style="font-size:24px;margin-right:10px;"></i>
						<p>手机充值</p>
					</router-link>
					<router-link :to="{name:'Detail'}" class="navListItem" style="background: #E5E5E5;">
						<i class="iconfont icon-shuidianjiaofei" style="font-size:24px;margin-right:10px;"></i>
						<p>水电煤缴费</p>
					</router-link>
					<router-link :to="{name:'Detail'}" class="navListItem">
						<i class="iconfont icon-youxichongzhi" style="font-size:24px;margin-right:10px;"></i>
						<p>游戏充值</p>
					</router-link>
					<router-link :to="{name:'Detail'}" class="navListItem">
						<i class="iconfont icon-dianhua2" style="font-size:24px;margin-right:10px;"></i>
						<p>固话充值</p>
					</router-link>
					<router-link :to="{name:'Detail'}" class="navListItem">
						<i class="iconfont icon-dianshi" style="font-size:24px;margin-right:10px;"></i>
						<p>有线电视充值</p>
					</router-link>
					<router-link :to="{name:'Detail'}" class="navListItem">
						<i class="iconfont icon-wangluoe" style="font-size:24px;margin-right:10px;"></i>
						<p>铁通充值</p>
					</router-link>
				</div>
			</div>
			<div class='detailListTitle'>
				<p>更多应用<span style="">></span></p>
			</div>
		</div>
		<div class="detailContent">
			<div class="detailContentTitle">
				<p>水电煤缴费</p>
				<p>7*24小时服务，无需排队，免手续费</p>
			</div>
			<div class="detailContentNav">
				<div class="detailContentNavItem">
					<i class="iconfonte icon-yonghu" style="font-size: 14px;"></i>
					<p>管理水电煤账号&nbsp;&nbsp;|</p>
				</div>
				<div class="detailContentNavItem">
					<i class="iconfonte icon-daifu" style="font-size: 14px;"></i>
					<p>代扣管理&nbsp;&nbsp;|</p>
				</div>
				<div class="detailContentNavItem">
					<i class="iconfonte icon-jilu" style="font-size: 14px;"></i>
					<p>缴费记录</p>
				</div>
			</div>
			<div class="city">
				<p>所在城市</p>
				<select>
					<option>焦作</option>
				</select>
				<p>可直接输入城市或拼音</p>
			</div>
			<p class="citySortTitle">该城市支持以下业务缴费</p>
			<div class="detailFun">
				<router-link :to="{}" class="detailFunItem">
					<i class="iconfonts icon-shuixi blue"></i>
					<p class="pButton">缴水费</p>
				</router-link>
				<router-link :to="{}" class="detailFunItem">
					<i class="iconfonts icon-dian blue"></i>
					<p class="pButton">缴电费</p>
				</router-link>
				<router-link :to="{}" class="detailFunItem">
					<i class="iconfonts icon-jianzhuanquan- blue"></i>
					<p class="pButton">缴燃气费</p>
				</router-link>
			</div>
			<div class="detailPay">
				<p style="color: rgb(48,95,141);">缴费流程</p>
				<div class="detailPayItem">
					<p class="payItem">
						<span>①</span>
						<span>填写表单</span>
					</p>
					<p>></p>
					<p class="payItem">
						<span>②</span>
						<span>确认信息</span>
					</p>
					<p>></p>
					<p class="payItem">
						<span>③</span>
						<span>付款信息</span>
					</p>
					<p>></p>
					<p class="payItem">
						<span>④</span>
						<span>缴费成功</span>
					</p>
				</div>
			</div>
			<div class="detailQuestion">
				<P style="color:#368EDD;font-size: 15px;border-bottom: 1px solid #D1D1D2;height: 1.8em;">使用遇到问题?</P>
				<p style="margin-top:10px;color:black;font-weight: 300;font-size: 14px;">用支付宝缴费，要收取手续费吗?</p>
				<p style="color:#808080;font-weight: 200;font-size:13px;margin-top: 10px;">答：不收取。若您在缴费时支付了一元手续费，
					则该代缴服务是由支付宝及支付宝委托的代办人（自然人或商户）共同完成的
					，您支付的一元手续费最终由代办人收取，支付宝不向您收取任何费用。
				</p>
				<p style="margin-top:10px;color:black;font-weight: 300;font-size: 14px;">可以帮别人缴费吗？</p>
				<p style="color:#808080;font-weight: 200;font-size:13px;margin-top: 10px;margin-bottom: 10px;">答：可以，只要您有他人的缴费账单就可以代他人缴费。</p>
				<p style="color:#368EDD;font-size: 15px;height: 1.8em;">更多相关帮助</p>
				<div>
					<input class="input">
					<button class="button">搜索</button>
				</div>
			</div>
			
		</div>
		<div class="detailAside">
			<p style="color: #808080;">在新浪微博关注我们</p>
			<div class="icon">
				<img src="../../assets/logo.jpg">
				<div class="wei">
					<p style="color:#2BAEF1;font-size: 14px;">小菲缴费助手</p>
					<button style="border:1px solid rgb(227,255,213);background: rgb(227,255,213);height: 25px;color: green;">+加关注</button>
				</div>
			</div>
			<div class="iconItem">
				<p>分享到:</p>
				<div class="iconimg">
					<i class="iconfonte icon-qq qq"></i>
					<i class="iconfonte icon-weixin weixin"></i>
					<i class="iconfonte icon-zhifubao zhifubao"></i>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Detail'
	}
</script>

<style scoped>
	.detail{
		display: flex;
		justify-content: space-around;
		padding: 20px 50px;
		width:100%;
		box-sizing: border-box;
	}
	.detailList{
		width:18%;
		display: flex;
		flex-direction: column;
		border: 1px solid #999999;
		box-shadow: 0 0 1px 1px #EFEFEF;
		height:50%;
	}
	.detailListTitle{
		width:100%;
		padding-left:10px;
		background: #EFEFEF;
		height:40px;
		display: flex;
		align-items: center;
		font-size:18px;
		color:rgb(101,101,101);
		box-sizing: border-box;
		cursor: pointer;
	}
	.detailListTitle:hover{
		background:#E5E5E5;
	}
	.navList{
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	.navListItem{
		height:40px;
		padding-left:10px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		text-decoration: none;
		color:black;
		font-size:14px;
	}
	.navListItem:hover{
		background: #EFEFEF;
	}
	
	.detailContent{
		width:55%;
	}
	.detailContentTitle{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin-bottom: 20px;
	}
	.detailContentTitle>p:first-child{
		font-size: 28px;
	}
	.detailContentTitle>p:last-child{
		color:#999999;
		margin-left:20px;
		font-size: 14px;
	}
	.detailContentNav{
		display: flex;
		align-items: center;
	}
	.detailContentNavItem{
		margin-right: 10px;
		font-size: 14px;
		color: rgb(52,145,191);
		margin-bottom: 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.city{
		height:40px;
		border-top:1px dashed #ABADB3;
		background: #EFEFEF;
		display: flex;
		align-items: center;
		box-sizing: border-box;
		padding-left:20px;
		margin-bottom: 20px;
	}
	.city>p:first-child{
		font-size: 20px;
		margin-right:20px;
	}
	.city>select{
		height:23px;
		width:80px;
		margin-right: 20px;
		display: block;
	}
	.city>p:last-child{
		font-size: 14px;
		color:#999999;
	}
	.citySortTitle{
		margin-left:10px;
		font-size: 14px;
		color:#999999;
		margin-bottom: 20px;
	}
	
	.detailFun{
		display: flex;
		width:100%;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 15px;
	}
	.detailFunItem{
		width:30%;
		height:160px;
		background: rgb(235,249,255);
		text-decoration: none;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.detailPay{
		display: flex;
		flex-direction: column;
		background: #EFEFEF;
		height:80px;
		justify-content: space-around;
		padding:0 20px;
		margin-bottom:10px;
	}
	.detailPayItem{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.payItem{
		color:rgb(57,115,154);
	}
	.detailQuestion{
		width: 100%;
		height: 300px;
		background: #EFEFEF;
		padding: 10px 20px;
		box-sizing: border-box;
	}
	.input{
		width: 40%;
		height:30px;
		margin-top:15px;
		box-shadow: 0px 0px 3px 3px #E5E5E5 inset;
		border:1px solid #BBBBBB;
	}
	.button{
		width:60px;
		height:30px;
	}
	
	.detailAside{
		width:23%;
	}
	.icon{
		display: flex;
		justify-content: flex-start;
		margin-top:20px;
	}
	.icon>img{
		width:60px;
		height:60px;
		border-radius: 50%;
		border:1px solid #000000;
		margin-right:20px;
	}
	.iconItem{
		display: flex;
		justify-content: flex-start;
		margin-top: 20px;
		align-items: center;
	}
	.iconimg{
		display: flex;
		align-self: center;
		justify-content: space-around;
		width:140px;
	}
	.wei{
		display: flex;
		flex-direction:column;
		justify-content: space-around;
	}
	.blue{
		color:#2BAEF1;
		font-size: 90px;
	}
	.pButton{
		width:60%;
		height:40px;
		background: #2BAEF1;
		color:white;
		font-weight: 500;
		line-height: 40px;
		text-align: center;
		border-radius: 8px;
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
