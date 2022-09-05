<template>
	<view>
		<view class="login-news">
			<view class="form-login">
				<h2>请输入验证码</h2>
				<span>验证码已发送至&nbsp;&nbsp;&nbsp;{{ mobileXH }}</span>
				<view class="getCodeMsg">
					<input
						class="move-ex"
						:class="{ moveda: disabled1, movedb: disabled2, movedc: disabled3, movedd: disabled4 }"
						type="number"
						maxlength="4"
						name="code"
						pattern="[0-9]*"
						v-model="mobilecaptcha"
						@input="moveDH"
						focus="focus"
					/>
					<view class="mlimbg" :class="{ mlimbgts: disabled1 }">{{ validation1 }}</view>
					<view class="mlimbg" :class="{ mlimbgts: disabled2 }">{{ validation2 }}</view>
					<view class="mlimbg" :class="{ mlimbgts: disabled3 }">{{ validation3 }}</view>
					<view class="mlimbg" :class="{ mlimbgts: disabled4 }">{{ validation4 }}</view>
				</view>
				<view class="code">
					<view class="login-yzman" :class="{ n_border: isActive }" @click="takeGL()">{{ animation }}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import api from '../../../common/api/api.js';

export default {
	data() {
		return {
			//手机号
			mobile: '',
			//手机号星号
			mobileXH: '',
			//验证码
			mobilecaptcha: '',
			//倒数
			yzmZJ: true,
			isActive: true,
			countdown: 60,
			//倒数动画
			animation: '免费获取验证码',
			//位置
			location: 0,
			//输入框假值
			validation1: '',
			validation2: '',
			validation3: '',
			validation4: '',
			//输入框移动
			disabled1: true,
			disabled2: false,
			disabled3: false,
			disabled4: false
		};
	},
	//监听页面加载
	onLoad(option) {
		this.mobile = option.mobile;
		//加星号
		var sjh = /^(\d{3})\d+(\d{4})$/;
		var ty = this.mobile;
		this.mobileXH = ty.replace(sjh, '$1****$2');
		//验证码倒数动画
		this.setTime();
	},
	methods: {
		//输入框动画
		moveDH: function(event) {
			var yzmID = event.target.value;
			var group = new Array();
			group = yzmID.split('');
			switch (group.length) {
				case 0:
					this.validation1 = '';
					this.disabled1 = true;
					this.disabled2 = false;
					this.disabled3 = false;
					this.disabled4 = false;
					break;
				case 1:
					this.validation1 = group[0];
					this.validation2 = '';
					this.disabled2 = true;
					this.disabled1 = false;
					this.disabled3 = false;
					this.disabled4 = false;

					break;
				case 2:
					this.validation1 = group[0];
					this.validation2 = group[1];
					this.validation3 = '';
					this.disabled3 = true;
					this.disabled1 = false;
					this.disabled2 = false;
					this.disabled4 = false;
					break;
				case 3:
					this.validation1 = group[0];
					this.validation2 = group[1];
					this.validation3 = group[2];
					this.validation4 = '';
					this.disabled4 = true;
					this.disabled1 = false;
					this.disabled2 = false;
					this.disabled3 = false;
					break;
				case 4:
					this.validation1 = group[0];
					this.validation2 = group[1];
					this.validation3 = group[2];
					this.validation4 = group[3];
					this.disabled4 = true;
					this.disabled1 = false;
					this.disabled2 = false;
					this.disabled3 = false;
					this.mobilecaptcha = this.validation1+this.validation2+this.validation3+this.validation4;
					this.login();
					break;
			}
		},
		//验证
		takeGL: function() {
			if (this.yzmZJ == true) {
				this.obtainYZ();
			}
		},
		//验证码倒数动画
		setTime: function() {
			let _this = this;
			if (this.countdown == 0) {
				this.countdown = 60;
				this.isActive = true;
				this.yzmZJ = true;
				this.animation = '免费获取验证码';
			} else {
				this.animation = '剩余' + this.countdown + '秒';
				this.countdown--;
				this.isActive = false;
				this.yzmZJ = false;
				setTimeout(function() {
					_this.setTime();
				}, 1000);
			}
		},
		//获取验证码
		obtainYZ: function() {
			var data = {
				mobile: this.mobile
			};
			var parameter = '?mobile=' + this.mobile;
			api.apiPost('/member/forgetstep1', parameter, data, 'post', (status, res) => {
				if (status) {
					//验证码倒数动画
					this.setTime();
					this.mobile = res.data.mobile;
					uni.showToast({
						title: '验证码重新发送成功',
						icon: 'none',
						duration: 2000
					});
				} else {
					uni.showToast({
						title: '获取验证码错误，请重试',
						icon: 'none',
						duration: 2000
					});
				}
			});
		},
		//手机号登陆
		login: function() {
			if (this.mobilecaptcha.length > 4) {
				uni.showToast({
					title: '验证码格式错误',
					icon: 'none',
					duration: 2000
				});
			} else {
				var data = {
					mobile: this.mobile,
					mobilecaptcha: this.mobilecaptcha
				};
				var parameter = '?mobile=' + this.mobile + '&mobilecaptcha=' + this.mobilecaptcha;
				api.apiPost('/member/notelogin', parameter, data, 'post', (status, res) => {
					if (status) {
						//登录信息本地缓存储存
						uni.setStorageSync('landing', res.data);
						this.validation();
					} else {
						uni.showToast({
							title: '验证码不正确，请重试',
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
			} else if (value.member_password == '') {
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
.login-logo a {
	float: right;
	font-size: 4vw;
}
.form-login {
	width: 640upx;
	margin-left: auto;
	margin-right: auto;
	padding-top: 40upx;
}
.form-login h2 {
	font-size: 7vw;
	font-weight: 400;
	margin: 40px 0 0;
}
.form-login span {
	font-size: 4vw;
	color: #b1b1b1;
	display: block;
	padding-top: 16px;
}
.form-login .code {
	font-size: 3.6vw;
	color: #b4b6bd;
	display: block;
	padding-top: 16px;
}
.getCodeMsg {
	width: 640upx;
	padding-top: 30upx;
	display: flex;
	position: relative;
}
.getCodeMsg .mlimbg {
	width: 160upx;
	height: 80upx;
	border-bottom: 1px solid #dcdcdc;
	margin-right: 12upx;
	line-height: 36px;
	text-align: center;
	font-size: 22px;
	padding-bottom: 20upx;
	font-weight: 500;
	z-index: 20;
}
.getCodeMsg .mlimbgts {
	border-bottom: 1px solid #4e94ff;
}
.getCodeMsg .move-ex {
	width: 150upx;
	height: 80upx;
	border-style: none;
	border-bottom: 1px solid #4e94ff;
	margin-right: 12upx;
	line-height: 36px;
	text-align: center;
	font-size: 22px;
	padding-bottom: 20upx;
	font-weight: 500;
	z-index: 30;
	position: absolute;
	opacity: 0;
}
.moveda {
	left: 0upx;
}
.movedb {
	left: 160upx;
}
.movedc {
	left: 320upx;
}
.movedd {
	left: 480upx;
}
.getCodeMsg .mlimbg:nth-of-type(1) {
	margin-left: 0;
}
.getCodeMsg .mlimbg:nth-last-of-type(1) {
	margin-rigth: 0;
}
.getCodeMsg .mlimbg .active {
	border-color: #257bff;
}
.code .login-yzman {
	width: 30%;
	background: none;
	border: 1px solid #dddddd;
	border-radius: 4px;
	padding: 3px 4px;
	outline: none;
	color: #666;
}
.code .n_border {
	border: none !important;
	color: #b4b6bd !important;
}
</style>
