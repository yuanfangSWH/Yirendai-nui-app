<template>
	<view class="content">
		<view class="login-news">
			<view class="form-login">
				<h2>请开始您的实名认证</h2>
				<span>根据监管合规政策，请您务必填写本人真实身份信息，并确认无误，否则将无法提现。此信息一旦确认不可修改</span>
				<view style="margin-top: 30px">
					<label for="">
						<span>真实姓名</span>
						<input type="text" class="name" placeholder="请输入您的真实姓名" v-model="name" />
					</label>
					<label for="">
						<span>身份证号</span>
						<input type="text" class="card" placeholder="请输入您的身份证号" v-model="sfz" />
					</label>
				</view>
				<button type="submit" @click="filterData()">提交认证</button>
			</view>
		</view>
	</view>
</template>

<script>
import api from '../../../common/api/api.js';
export default {
	data() {
		return {
			//真实姓名
			name: '',
			//身份证号
			sfz: '',
			//验证正则表达式
			re: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
			reg: /^[\u4E00-\u9FA5]{2,4}$/
		};
	},
	methods: {
		//判断过滤
		filterData: function() {
			if (this.name == '') {
				uni.showToast({
					title: '真实姓名不能为空',
					icon: 'none',
					duration: 2000
				});
			} else if (this.name.length > 12) {
				uni.showToast({
					title: '真实姓名长度错误',
					icon: 'none',
					duration: 2000
				});
			} else if (!this.reg.test(this.name)) {
				uni.showToast({
					title: '真实姓名只能为汉字',
					icon: 'none',
					duration: 2000
				});
			} else if (this.sfz == '') {
				uni.showToast({
					title: '身份证号不能为空',
					icon: 'none',
					duration: 2000
				});
			} else if (this.sfz.length > 18) {
				uni.showToast({
					title: '身份证号长度错误',
					icon: 'none',
					duration: 2000
				});
			} else if (!this.re.test(this.sfz)) {
				uni.showToast({
					title: '身份证号填写错误',
					icon: 'none',
					duration: 2000
				});
			} else {
				this.real();
			}
		},
		//提交
		real: function() {
			var data = {
				name: this.name,
				sfz: this.sfz
			};
			var parameter = '?name=' + this.name + '&sfz=' + this.sfz;
			api.apiPost('/member/vertion', parameter, data, 'post', (status, res) => {
				if (status) {
					if (res.message == 'false') {
						uni.showToast({
							title: '提交信息失败，请重试',
							icon: 'none',
							duration: 2000
						});
					} else {
						this.validation();
					}
				} else {
					uni.showToast({
						title: '提交信息失败，请重试',
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
			} else if (value.member_password == '') {
				//未设置密码
				uni.reLaunch({
					url: '/pages/registered/setpassword/setpassword'
				});
			} else {
				//跳转认证成功
				uni.reLaunch({
					url: '/pages/certification/certification'
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
.login-logo a {
	float: right;
	font-size: 4vw;
}
.form-login {
	margin: 0 30px;
}
.form-login h2 {
	font-size: 7vw;
	font-weight: 400;
	margin: 40px 0 0;
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
	margin-top: 0;
	padding-top: 2px;
	outline: none;
}
.form-login span {
	font-size: 12px;
	color: #b1b1b1;
	display: block;
	padding-top: 10px;
}
.form-login label span {
	color: #1b1b1b;
	margin-top: 12px;
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
