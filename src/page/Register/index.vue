<template>
	<div>
		<header>
			<nav>
				<div class="logo"><img src="../../assets/logo.jpg" alt="小菲水电收费服务中心"></div>
				<p class="title">小菲水电收费服务中心|<a href="#" class="gray">客户服务</a></p>
				<p class="opinion">意见反馈<a href="#" class="orange">xiaofei@com</a></p>
				<p class="login">您好，请<a href="#" class="orange">登录</a>|<a href="#">注册</a></p>
				<p class="menu" id="menuId">我的<span>▼</span></p>
				<ul class="selectMenu" id="menuList">
					<li>未完成订单</li>
					<li>已完成订单(改/退)</li>
					<li>我的保险</li>
					<li>查看个人信息</li>
					<li>账户安全</li>
					<li>常用联系人</li>
					<li>重点旅客预约</li>
					<li>服务查询</li>
					<li>投诉</li>
					<li>建议</li>
				</ul>
				<p class="icon"><img src="../../assets/未标题-1.png" alt="手机版">手机版</p>
			</nav>
		</header>
		<section>
			<p class="position">您现在的位置：<router-link :to="{name:'Home'}" style="color:#FB7403">首页</router-link>/<a href="#" style="color: #FB7403;">注册</a></p>
			<div class="info">
				<p class="infoTitle">账户信息</p>
				<form class="registerMenu">
					<span style="letter-spacing:0.5em;">用户</span>名:
					<input type="text" placeholder="用户名设置成功后不可修改">
					<p id="userInfo"></p>
					<br>
					<span>登录密码:</span>
					<input type="password" placeholder="6-20位字母,数字或符号">
					<span class="infoTip" id="span1"></span><span class="infoTip" id="span2"></span><span class="infoTip" id="span3"></span>
					<p id="pwdInfo" style="display: block;margin-left:4.5em;"></p>
					<span>确认密码:</span>
					<input type="password" placeholder="再次输入登录密码">
					<p id="conPwdInfo"></p>
					<br>
					<span style="letter-spacing:2em;">姓</span>名:
					<input type="text" placeholder="请输入姓名">
					<p id="name"></p>
					<br>
					<span>证件类型:</span>
					<select>
						<option>二代身份证</option>
						<option>港澳通行证</option>
						<option>台湾通行证</option>
						<option>护照</option>
					</select>
					<p></p>
					<br>
					<span>证件号码:</span>
					<input type="text" placeholder="请输入你的证件号码">
					<p id="cardNum"></p>
					<br>
					<span style="letter-spacing:2em;">邮</span>编:
					<input type="text" placeholder="请正确填写邮箱地址">
					<P id="mail"></P>
					<br>
					<span>手机号码:</span>
					<input type="text" placeholder="请输入您的手机号码">
					<p id="phone"></p>
					<br>
					<span>用户类型:</span>
					<select>
						<option>成年</option>
						<option>儿童</option>
						<option>学生</option>
						<option>残疾军人</option>
						<option>伤残人民警察</option>
					</select>
					<p></p>
					<br>
					<input type="checkbox" class="check"><span>我已阅读并同意遵守<a href="#" class="blue">《小菲水电收费服务中心网站服务条款》</a></span>
					<p id="agree"></p>
					<br>
					<input type="submit" value="下一步" id="next">
				</form>
			</div>
		</section>
		<footer>
			<p><a href="#" class="gray">关于我们</a>|<a href="#" class="gray">网站声明</a></p>
			<p>Copyright &copy; 2017 xiaofei.com All Rights Reserved | 京ICP备13046642号-2</p>
		</footer>
	</div>
</template>

<script>
	export default{
		name:'Register'
	}
</script>

<style scoped>
	*{margin:0;padding:0;font-size:20px;}
	body{
	    width:100%;
	}
	header{
	    width:100%;
	    height:80px;
	    background:#368edd;
	    position:relative;
	    border-bottom:2px solid #2487c9;
	}
	nav>.logo{
	    float:left;
	    margin-left:100px;
	}
	nav>.logo>img{
	    width:60px;
		border-radius: 50%;
		margin-top:10px;
	}
	nav>p{
	    float:left;
	    line-height:80px;
	}
	nav>p.title{
	    font-size:28px;
	}
	nav>p.opinion{
	    margin-left:120px;
	}
	nav>p.login,nav>p.menu{
	    margin-left:21px;
	}
	nav>ul.selectMenu{
	    position:absolute;
	    left:1323px;
	    top:70px;
	    z-index:2;
	    list-style: none;
	    border:2px solid #fb7403;
	    background:#fcfcfc;
	    line-height:35px;
	    width:120px;
	    padding:20px;
	    border-radius:5px;
	    display:none;
	}
	nav>ul.selectMenu>li{
	    font-size:14px;
	    color:gray;
	}
	nav>ul.selectMenu>li:nth-child(2),
	nav>ul.selectMenu>li:nth-child(3),
	nav>ul.selectMenu>li:nth-child(5),
	nav>ul.selectMenu>li:nth-child(6),
	nav>ul.selectMenu>li:nth-child(8),
	nav>ul.selectMenu>li:nth-child(9){
	    border-bottom:2px solid #d1d1d2;
	}
	nav>p.icon{
	    margin-left:38px;
	}
	nav>p.icon>img{
	    height:20px;
	}
	a{
	    text-decoration:none;
	    color:black;
	}
	a.gray{
	    color:#999999;
	}
	a.orange{
	    color:#fb7403;
	}
	section{
	    width:1260px;
	    margin:0 auto;
	    text-align:left;
	}
	section>div.info{
	    width:80%;
	    border:3px solid #fb7403;
	    border-radius:8px;
	    height:680px;
	    position:relative;
		margin:0 auto;
	}
	section>p.position{
	    clear:both;
	    height:48px;
	    line-height:48px;
	}
	section>div.info>p.infoTitle{
	    background:#fb7403;
	    color:white;
	    padding-left:0.5em;
	    height:45px;
	    line-height:45px;
	    font-size:24px;
	    border-radius:5px;
	}
	section>div.info>form.registerMenu{
	    width:712px;
	    position:absolute;
	    left:50%;
	    margin-left:-356px;
	    top:85px;
	}
	section>div.info>form.registerMenu>input,
	section>div.info>form.registerMenu>select{
	    border:2px solid #abadb3;
	    border-radius:4px;
	    margin-top:15px;
	}
	section>div.info>form.registerMenu>input.check{
	    margin-left:4.5em;
	    height:20px;
	    width:20px;
	}
	a.blue{
	    color:#006ee5;
	}
	section>div.info>form.registerMenu>input:last-child{
	    width:233px;
	    height:40px;
	    background:#fb7403;
	    border:1px solid #fb7403;
	    border-radius:5px;
	    margin-left:166px;
	    margin-top:60px;
	}
	section>div.info>form.registerMenu>input:last-child:hover{
	    cursor:pointer;
	}
	section>div.info>form.registerMenu>p{
	    display:inline;
	}
	section>div.info>form.registerMenu>span.infoTip{
	    display:none;
	    width:42px;
	    height:10px;
	    background:#dddddd;
	    margin-left:5px;
	}
	footer{
	    width:100%;
	    height:80px;
	    background:#dcdcdc;
	    text-align: center;
	    margin-top:126px;
	    padding-top:20px;
	    line-height:1.8em;
	    color:#999999;
	}
</style>
