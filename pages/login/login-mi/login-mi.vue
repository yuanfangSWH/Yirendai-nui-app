<template>
	<view class="content">
		<view class="login-news">
			<view class="login-logo">
				<view @click="zhmim()"><text>找回密码</text></view>
			</view>
			<view class="form-login">
					<h2>密码登录</h2>
					<input type="number" placeholder="请输入手机号码" class="phonnum" v-model="loginForm.username" />
					<input type="password" placeholder="请输入6-12位密码" class="pass" v-model="loginForm.password" />
					<button type="submit" @click="login()">登录</button>
			</view>
		</view>
	</view>
</template>

<script>
import api from '../../../common/api/api.js';
export default {
	data() {
		return {
			//账号密码
			loginForm: {
				username: '',
				password: ''
				// username: '13481914993',
				// password: 'swh6032892'
			},
			//验证正则表达式
			re: /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/
		};
	},
	methods: {
		login: function() {
			if (this.loginForm.username == '' || this.loginForm.password == '') {
				uni.showToast({
					title: '手机号或密码不能为空',
					icon: 'none',
					duration: 2000
				});
			} else if (!this.re.test(this.loginForm.username)) {
				uni.showToast({
					title: '请输入正确的手机号码',
					icon: 'none',
					duration: 2000
				});
			} else {
				var data = {
					username: this.loginForm.username,
					password: this.loginForm.password
				};
				var parameter = '?username=' + this.loginForm.username + '&password=' + this.loginForm.password;
				//调用API登录
				api.apiPost('/member/login', parameter, data, 'post', (status, res) => {
					if (status) {
						//登录信息本地缓存储存
						uni.setStorageSync('landing', res.data);
						uni.showToast({
							title: '登陆成功',
							icon: 'none',
							duration: 2000
						});
						this.validation();
					} else {
						uni.showToast({
							title: '登陆失败，账号或密码错误',
							icon: 'none',
							duration: 2000
						});
					}
				});
			}
		},
		//继续验证用户信息
		validation: function() {
			var value = uni.getStorageSync('landing');
			if (value.member_tj_id == '' || value.member_tj_id == 0) {
				//未填写邀请码
				uni.reLaunch({
					url: '/pages/registered/invitation/invitation'
				});
			} else if (value.member_card == '') {
				//未实名认证
				uni.reLaunch({
					url: '/pages/registered/reality/reality'
				});
			} else {
				//跳转首页
				uni.reLaunch({
					url: '/pages/index/index'
				});
			}
		},
		//找回密码
		zhmim:function(){
			uni.navigateTo({
				url: '/pages/registered/back/back'
			});
		},
	}
};
</script>

<style>
.content {
	height: 1200upx;
}
.login-news {
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #fff;
	overflow: auto;
}
.login-logo {
	overflow: hidden;
	padding: 20px 30px;
}
.login-logo text {
	float: right;
	font-size: 4vw;
}
.form-login {
	margin: 0 30px;
}
.form-login h2 {
	font-size: 8vw;
	font-weight: 400;
	margin: 0;
}
.form-login input {
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
.form-login span {
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
</style>
