<template>
	<view>
		<view class="login-news">
			<view class="form-login">
				<h2>设置密码</h2>
				<input type="text" class="pass" placeholder="请设置6-12位密码" v-model="password" />
				<button type="submit" @click="filterData()">确认</button>
			</view>
		</view>
	</view>
</template>

<script>
import api from '../../../common/api/api.js';
export default {
	data() {
		return {
			//设置的密码
			password: ''
		};
	},
	methods: {
		//判断过滤
		filterData: function() {
			if (this.password == '') {
				uni.showToast({
					title: '设置密码不能为空',
					icon: 'none',
					duration: 2000
				});
			} else if (this.password.length < 6) {
				uni.showToast({
					title: '密长度不能少于6位',
					icon: 'none',
					duration: 2000
				});
			} else {
				this.setMI();
			}
		},
		//提交密码
		setMI: function() {
			//获取到邀请码
			var code = uni.getStorageSync('inviteCode');
			var data = {
				password: this.password,
				yqm: code
			};
			var parameter = '?password=' + this.password + '&yqm=' + code;
			api.apiPost('/member/setpass', parameter, data, 'post', (status, res) => {
				if (status) {
					//用户信息本地缓存储存
					uni.setStorageSync('landing', res.data);
					this.validation();
				} else {
					uni.showToast({
						title: '设置密码失败，请重试',
						icon: 'none',
						duration: 2000
					});
				}
			});
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
		}
	}
};
</script>

<style>
.content {
	height: 1200upx;
}
.login-news {
	position: fixed;
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
