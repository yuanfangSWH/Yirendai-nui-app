<template>
	<view class="content">
		<view class="login-news">
			<view class="form-login">
				<h2>请填写邀请码</h2>
				<input type="text" class="pass" placeholder="填写邀请人的推荐码" v-model="code" />
				<button type="submit" @click="invite()">下一步</button>
			</view>
		</view>
	</view>
</template>

<script>
import api from '../../../common/api/api.js';
export default {
	data() {
		return {
			//邀请码
			code: ''
			// code: 'MTE2NjI2'
		};
	},
	methods: {
		//验证邀请码
		invite: function() {
			var data = {
				code: this.code
			};
			var parameter = '?code=' + this.code;
			api.apiPost('/member/regcode', parameter, data, 'post', (status, res) => {
				if (status) {
					//邀请码本地缓存储存
					uni.setStorageSync('inviteCode', this.code);
					this.validation();
				} else {
					uni.showToast({
						title: '邀请码不存在或填写错误',
						icon: 'none',
						duration: 2000
					});
				}
			});
		},
		//继续验证用户信息
		validation: function() {
			var value = uni.getStorageSync('landing');
			if (value.member_password == '') {
				//未设置密码
				uni.reLaunch({
					url: '/pages/registered/setpassword/setpassword'
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
		}
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
.form-login {
	margin: 0 30px;
}
.form-login h2 {
	font-size: 8vw;
	font-weight: 400;
	margin: 0;
	margin-top: 40px;
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
