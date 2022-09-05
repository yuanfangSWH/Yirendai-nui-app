<template>
	<view class="content">
		<view class="login-news">
			<view class="login-cgtzw"></view>
			<view class="login-logo">
				<view @click="mimdl()"><text>密码登录</text></view>
				<img src="../../static/images/logo_new.png" alt="" />
			</view>
			<view class="form-login">
				<h2>欢迎登录代呗</h2>
				<input type="text" class="phone" placeholder="请输入手机号码" v-model="mobile" />
				<text>未注册的手机号码验证后自动创建账户</text>
				<button type="submit" @click="validation()">获取验证码</button>
			</view>
			<view class="tyxy">
				注册即同意
				<view class="nava" @click="zcxy()">《用户注册协议》</view>
				&frasl;
				<view class="nava" @click="sygf()">《软件使用规范》</view>
			</view>
		</view>
	</view>
</template>

<script>
import api from '../../common/api/api.js';
export default {
	data() {
		return {
			//手机号
			mobile: '',
			//验证正则表达式
			re: /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/
		};
	},
	methods: {
		//获取验证码
		validation: function() {
			if (this.mobile === '') {
				uni.showToast({
					title: '请输入手机号',
					icon: 'none',
					duration: 2000
				});
			} else if (!this.re.test(this.mobile)) {
				uni.showToast({
					title: '请输入正确的手机号码',
					icon: 'none',
					duration: 2000
				});
			} else {
				var data = {
					mobile: this.mobile
				};
				var parameter = '?mobile=' + this.mobile;
				api.apiPost('/member/forgetstep1', parameter, data, 'post', (status, res) => {
					if (status) {
						this.mobile = res.data.mobile;
						uni.navigateTo({
							url: '/pages/login/validation/validation?mobile=' + this.mobile
						});
					} else {
						uni.showToast({
							title: '获取验证码错误，请重试',
							icon: 'none',
							duration: 2000
						});
					}
				});
			}
		},
		//密码登录
		mimdl:function(){
			uni.navigateTo({
				url: '/pages/login/login-mi/login-mi'
			});
		},
		//用户注册协议
		zcxy:function(){
			uni.navigateTo({
				url: '/pages/registered/agreement/agreement'
			});
		},
		//软件使用规范
		sygf:function(){
			uni.navigateTo({
				url: '/pages/registered/stipulate/stipulate'
			});
		}
		
	}
};
</script>

<style>
.content {
	height: 1200upx;
}
.nava {
	display: inline;
	color: #257bff;
}
.login-news {
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #fff;
	overflow: auto;
}
.login-cgtzw{
	height: 100upx;
}
.login-logo {
	padding-bottom: 20px;
	padding-left: 30px;
	padding-right: 30px;
}
.login-logo text {
	float: right;
	font-size: 4vw;
}
.login-logo img {
	width: 50px;
	height: 50px;
	border-radius: 50%;
	margin-top: 30px;
}
.form-login {
	margin: 0 30px;
}
.form-login h2 {
	font-size: 8vw;
	font-weight: 400;
	margin: 0;
}
.phone {
	display: block;
	box-sizing: content-box;
	border-style: none;
	line-height: 8vw;
	height: 8vw;
	padding: 3vw 0;
	border-bottom: 1px solid #dcdcdc;
	width: 100%;
	font-size: 4.2vw;
	margin-top: 15px;
	outline: none;
}
.form-login text {
	font-size: 12px;
	color: #b1b1b1;
	display: block;
	padding-top: 10px;
}
.form-login button {
	background-color: #257bff;
	color: #fff;
	width: 100%;
	border-radius: 100px;
	border-style: none;
	line-height: 12vw;
	height: 12vw;
	font-size: 4vw;
	margin-top: 30px;
	outline: none;
}
.tyxy {
	position: absolute;
	bottom: 30px;
	text-align: center;
	left: 0;
	right: 0;
	font-size: 3.4vw;
	color: #b1b1b1;
}
</style>
