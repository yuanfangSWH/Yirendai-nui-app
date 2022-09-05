<template>
	<view class="content">
		<view class="login-news">
			<view class="form-login">
				<h2>找回密码</h2>
				<input type="text" placeholder="请输入手机号码" class="phonenum" v-model="mobile" />
				<view class="send-code">
					<input type="text" placeholder="请输入验证码" class="code" v-model="mobilecaptcha" />
					<view class="sendcode" :class="{ n_border: isActive ? true : false }" @click="takeGL()">{{ animation }}</view>
				</view>
				<input type="password" placeholder="请输入6-12位密码" class="pass" v-model="password" />
				<button type="submit" class="btn-tj" @click="submit()">提交</button>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			//手机号
			mobile: '',
			//验证码
			mobilecaptcha: '',
			//倒数
			yzmZJ: true,
			isActive: false,
			countdown: 1,
			//倒数动画
			animation: '获取验证码',
			//新的密码
			password: '',
			//验证正则表达式
			re: /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/
		};
	},
	methods: {
		//验证
		takeGL: function() {
			if (this.yzmZJ == true) {
				this.takeValidation();
			}
		},
		//验证码倒数动画
		setTime: function() {
			let _this = this;
			if (this.countdown == 0) {
				this.countdown = 60;
				this.yzmZJ = true;
				this.isActive = false;
				this.animation = '获取验证码';
			} else {
				this.animation = '剩余' + this.countdown + '秒';
				this.countdown--;
				this.yzmZJ = false;
				this.isActive = true;
				setTimeout(function() {
					_this.setTime();
				}, 1000);
			}
		},
		//获取验证码
		takeValidation: function() {
			if (this.mobile == '') {
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
						//验证码倒数动画
						this.setTime();
						this.mobile = res.data.mobile;
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
		//提交修改
		submit: function() {
			if (this.mobile == '') {
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
			} else if (this.mobilecaptcha == '') {
				uni.showToast({
					title: '请输入验证码',
					icon: 'none',
					duration: 2000
				});
			} else if (this.password == '') {
				uni.showToast({
					title: '请输入新密码',
					icon: 'none',
					duration: 2000
				});
			} else if (this.password.length < 6) {
				uni.showToast({
					title: '密码长度不能少于6位',
					icon: 'none',
					duration: 2000
				});
			} else {
				var data = {
					mobile: this.mobile,
					mobilecaptcha: this.mobilecaptcha,
					password: this.password
				};
				var parameter = '?mobile=' + this.mobile + '&mobilecaptcha=' + this.mobilecaptcha + '&password=' + this.password;
				api.apiPost('/member/forgetstep2', parameter, data, 'post', (status, res) => {
					if (status) {
						uni.redirectTo({
							url: '/pages/login/login-mi/login-mi'
						});
					} else {
						uni.showToast({
							title: '修改密码失败',
							icon: 'none',
							duration: 2000
						});
					}
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
	height: 100%;
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
	font-size: 8vw;
	font-weight: 400;
	margin: 50px 0 20px;
}
.form-login input {
	display: block;
	border-style: none;
	line-height: 8vw;
	height: 8vw;
	padding: 3vw 0;
	border-bottom: 1px solid #dcdcdc;
	width: 100%;
	font-size: 4.2vw;
	margin-top: 15px;
	outline: none;
	box-sizing: content-box;
}
.form-login span {
	font-size: 12px;
	color: #b1b1b1;
	display: block;
	padding-top: 10px;
}
.form-login button.btn-tj {
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
.send-code {
	position: relative;
}
.send-code .sendcode {
	position: absolute;
	right: 0;
	top: 0;
	bottom: 0;
	font-weight: 400;
	outline: none;
	border-style: none;
}
.sendcode {
	width: 30%;
	border-radius: 30px;
	background-color: #257bff;
	border: none;
	height: 36px;
	font-size: 14px;
	line-height: 36px;
	text-align: center;
	color: #ffffff;
}
.n_border {
	border: none !important;
	color: #b4b6bd !important;
}
</style>
