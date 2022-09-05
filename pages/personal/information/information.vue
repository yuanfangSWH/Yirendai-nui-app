<template>
	<view>
		<view class="editprofile-box">
			<view class="edit-ple-box">
				<view class="edit-list-li" style="padding: 10px 30px 10px 20px;" @click="choosetx()">
					<span class="wx-tl-xt" style="line-height: 50px;">头像</span>
					<img :src="portraitData" class="wx-headig" />
					<img src="../../../static/images/jtgr_icon.png" class="wx-jt" />
				</view>
				<view class="edit-list-li" @click="updatename()">
					<span>昵称</span>
					<span class="cl-rg" selectable="true">{{ Theuser.member_name }}</span>
					<img src="../../../static/images/jtgr_icon.png" class="wx-jt" />
				</view>
				<view class="edit-list-li" @click="updatewxname()">
					<span>微信号</span>
					<span class="cl-rg" selectable="true">{{ Theuser.member_wx == '' ? '未填写' : Theuser.member_tj_id }}</span>
					<img src="../../../static/images/jtgr_icon.png" class="wx-jt" />
				</view>
				<view class="edit-list-li" @click="showUpdateNum(1)">
					<span>手机号码</span>
					<span class="cl-rg dqhm">{{ Theuser.member_mobile }}</span>
					<img src="../../../static/images/jtgr_icon.png" class="wx-jt" />
				</view>
				<view class="edit-list-li">
					<span>推荐人 ID</span>
					<span class="cl-rg">{{ Theuser.member_tj_id == 0 ? '无推荐人' : Theuser.member_tj_id }}</span>
					<img src="../../../static/images/jtgr_icon.png" class="wx-jt" />
				</view>
			</view>
			<view class="edit-ple-box" style="margin-top: 15px">
				<!-- <view class="edit-list-li" @click="aliacc()">
					<span>提现账号</span>
					<span class="cl-rg">未设置</span>
					<img src="../../../static/images/jtgr_icon.png" class="wx-jt" />
				</view> -->
				<view class="edit-list-li" @click="change()">
					<span>修改密码</span>
					<img src="../../../static/images/jtgr_icon.png" class="wx-jt" />
				</view>
				<view class="edit-list-li" @click="setregister()">
					<span>消息开关</span>
					<img src="../../../static/images/jtgr_icon.png" class="wx-jt" />
				</view>
			</view>
			<button type="button" class="btn-form" id="btn_gm" style="margin-top: 20px;" @click="exit()">退 出</button>
			<!--修改手机号码弹窗-->
			<view class="model-mask" v-show="options ? true : false"></view>
			<view class="model" :class="{ play: isActive1 ? true : false, implicit: isActive2 ? true : false }">
				<view class="model-top-box">修改手机号码</view>
				<view class="model-phone-box"><input type="number" placeholder="请输入您的原手机号码" class="melph" v-model="mobile1" /></view>
				<view class="model-phone-box"><input type="number" placeholder="请输入您的新手机号码" class="melph" v-model="mobile2" /></view>
				<!-- <view class="model-phone-box" style="margin: 0 10px 10px 10px;">
					<input type="number" placeholder="请输入您的图形验证码" class="tuxinym" />
					<img src="../../../static/images//bgkhlb.png" width="80" height="40" alt="" />
				</view> -->
				<view class="model-phone-box">
					<input type="number" maxlength="4" pattern="[0-9]*" placeholder="请输入短信验证码" class="melym" v-model="mobilecaptcha" />
					<button type="button" class="btn btn-warning" id="J_GetCode" :class="{ n_border: isActive ? true : false }" @click="takeGL()">{{ animation }}</button>
				</view>
				<view class="model-btn-box">
					<view class="remove wtann" @click="showUpdateNum(2)">取消</view>
					<view class="submin wtann" @click="filterData(2)">提交</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import api from '../../../common/api/api.js';
//base64图像转换插件
import { pathToBase64, base64ToPath } from 'image-tools';
export default {
	data() {
		return {
			//用户信息
			Theuser: [],
			//用户ID
			memberId: '',
			//头像
			portraitData: '',
			//手机弹框
			options: false,
			isActive1: false,
			isActive2: false,
			//倒数
			yzmZJ: true,
			isActive: false,
			countdown: 1,
			//倒数动画
			animation: '获取验证码',
			//原手机号
			mobile1: '',
			//新手机号
			mobile2: '',
			//验证码
			mobilecaptcha: '',
			//判断原手机号是否存在
			hypocrisy: false,
			//验证正则表达式
			re: /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/
		};
	},
	//监听页面加载
	onLoad() {
		this.pullData();
	},
	methods: {
		//拉取数据
		pullData: function() {
			api.apiPost('/member/userinfo', '', '', 'get', (status, res) => {
				if (status) {
					this.Theuser = res.data;
					this.memberId = this.Theuser.member_id;
					this.portraitData = this.Theuser.member_avatar;
				} else {
					uni.showToast({
						title: '数据获取失败',
						icon: 'none',
						duration: 2000
					});
				}
			});
		},
		//退出登录
		exit: function() {
			//清空登录信息缓存
			uni.setStorageSync('landing', '');
			uni.setStorageSync('SessionId', '');
			//跳转登录
			uni.reLaunch({
				url: '/pages/login/login'
			});
		},
		//选择头像
		choosetx: function() {
			let _this = this;
			uni.chooseImage({
				count: 1,
				sizeType: ['original', 'compressed'],
				sourceType: ['album'],
				success: function(res) {
					_this.portraitData = res.tempFilePaths;
				}
			});
			//base64转换
			pathToBase64(this.portraitData).then(base64 => {
				this.portraitData = base64;
				this.portrait();
			});
		},
		//修改头像
		portrait: function() {
			if (this.portraitData == '') {
				uni.showToast({
					title: '头像图片不符合规范',
					icon: 'none',
					duration: 2000
				});
			} else {
				var data = {
					img_base64: this.portraitData
				};
				var parameter = '?img_base64=' + this.portraitData;
				api.apiPost('/member/updateavatar', parameter, data, 'post', (status, res) => {
					if (status) {
						uni.showToast({
							title: '修改头像成功',
							icon: 'none',
							duration: 2000
						});
						this.callData();
					} else {
						uni.showToast({
							title: '提交修改失败',
							icon: 'none',
							duration: 2000
						});
					}
				});
			}
		},
		//更新数据
		callData: function() {
			api.apiPost('/member/getuserinfo', '', '', 'post', (status, res) => {
				if (status) {
					//登录信息本地缓存储存
					uni.setStorageSync('landing', res.data);
					//拉取数据
					this.pullData();
				} else {
					uni.showToast({
						title: '未知错误',
						icon: 'none',
						duration: 2000
					});
					uni.reLaunch({
						url: '/pages/login/login'
					});
				}
			});
		},
		//修改昵称
		updatename: function() {
			uni.navigateTo({
				url: '/pages/personal/updatename/updatename?nickname=' + this.Theuser.member_name
			});
		},
		//修改微信号
		updatewxname: function() {
			uni.navigateTo({
				url: '/pages/personal/updatewxname/updatewxname?wechat=' + this.Theuser.member_wx
			});
		},
		//修改密码
		change: function(value) {
			uni.navigateTo({
				url: '/pages/personal/changemi/changemi'
			});
		},
		//修改提现信息(废弃)
		aliacc: function() {
			uni.navigateTo({
				url: '/pages/personal/aliacc/aliacc'
			});
		},
		//修改手机号码
		showUpdateNum: function(value) {
			if (value == 1) {
				this.isActive2 = false;
				this.isActive1 = true;
				this.options = true;
			} else {
				this.isActive1 = false;
				this.isActive2 = true;
				this.options = false;
			}
		},
		//验证
		takeGL: function() {
			if (this.yzmZJ == true) {
				this.filterData(1);
			}
		},
		//过滤验证
		filterData: function(value) {
			if (value == 1) {
				if (this.mobile1 === '') {
					uni.showToast({
						title: '原手机号不能为空',
						icon: 'none',
						duration: 2000
					});
				} else if (!this.re.test(this.mobile1)) {
					uni.showToast({
						title: '原手机号格式错误',
						icon: 'none',
						duration: 2000
					});
				} else if (this.mobile2 === '') {
					uni.showToast({
						title: '新手机号不能为空',
						icon: 'none',
						duration: 2000
					});
				} else if (!this.re.test(this.mobile2)) {
					uni.showToast({
						title: '新手机号格式错误',
						icon: 'none',
						duration: 2000
					});
				} else {
					this.validation1();
				}
			} else {
				if (this.mobile1 === '') {
					uni.showToast({
						title: '原手机号不能为空',
						icon: 'none',
						duration: 2000
					});
				} else if (!this.re.test(this.mobile1)) {
					uni.showToast({
						title: '原手机号格式错误',
						icon: 'none',
						duration: 2000
					});
				} else if (this.mobile2 === '') {
					uni.showToast({
						title: '新手机号不能为空',
						icon: 'none',
						duration: 2000
					});
				} else if (!this.re.test(this.mobile2)) {
					uni.showToast({
						title: '新手机号格式错误',
						icon: 'none',
						duration: 2000
					});
				} else if (this.mobilecaptcha === '') {
					uni.showToast({
						title: '验证码不能为空',
						icon: 'none',
						duration: 2000
					});
				} else if (this.hypocrisy) {
					uni.showToast({
						title: '原手机号验证未通过',
						icon: 'none',
						duration: 2000
					});
				} else {
					this.submityzm();
				}
			}
		},
		//验证原手机号
		validation1: function() {
			var data = {
				mobile: this.mobile1
			};
			var parameter = '?mobile=' + this.mobile1;
			api.apiPost('/member/updatephone1', parameter, data, 'post', (status, res) => {
				if (status) {
					this.hypocrisy = true;
					this.validation2();
				} else {
					this.hypocrisy = false;
					uni.showToast({
						title: '原手机号填写错误，不存在',
						icon: 'none',
						duration: 2000
					});
				}
			});
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
		validation2: function() {
			var data = {
				mobile: this.mobile2
			};
			var parameter = '?mobile=' + this.mobile2;
			api.apiPost2('/member/updatephone1', '?type=new', parameter, data, 'post', (status, res) => {
				if (status) {
					//验证码倒数动画
					this.setTime();
					var tis = res.data.message;
					uni.showToast({
						title: tis,
						icon: 'none',
						duration: 2000
					});
				} else {
					uni.showToast({
						title: '获取验证码失败，请重试',
						icon: 'none',
						duration: 2000
					});
				}
			});
		},
		//提交验证码
		submityzm: function() {
			var data = {
				mobile: this.mobile2,
				mobilecaptcha: this.mobilecaptcha
			};
			var parameter = '?mobile=' + this.mobile2 + '&mobilecaptcha=' + this.mobilecaptcha;
			api.apiPost2('/member/updatephone2', '?type=new', parameter, data, 'post', (status, res) => {
				if (status) {
					var tis = res.data.message;
					uni.showToast({
						title: tis,
						icon: 'none',
						duration: 2000
					});
					//关闭手机修改弹框
					this.isActive1 = false;
					this.isActive2 = true;
					this.options = false;
					//重新拉取数据
					this.pullData();
				} else {
					uni.showToast({
						title: '修改手机号失败，请重试',
						icon: 'none',
						duration: 2000
					});
				}
			});
		},
		//消息开关
		setregister: function() {
			uni.navigateTo({
				url: '/pages/personal/setregister/setregister'
			});
		}
	}
};
</script>

<style>
.n_border {
	border: none !important;
	color: #b4b6bd !important;
}
.melph {
	padding-left: 10px;
	padding-right: 10px;
}
.play {
	top: 50%;
	animation: play 0.5s;
	-moz-animation: play 0.5s; /* Firefox */
	-webkit-animation: play 0.5s; /* Safari 和 Chrome */
	-o-animation: play 0.5s;
}
@keyframes play {
	from {
		top: -200%;
	}
	to {
		top: 50%;
	}
}

@-moz-keyframes play /* Firefox */ {
	from {
		top: -200%;
	}
	to {
		top: 50%;
	}
}

@-webkit-keyframes play /* Safari 和 Chrome */ {
	from {
		top: -200%;
	}
	to {
		top: 50%;
	}
}

@-o-keyframes play /* Opera */ {
	from {
		top: -200%;
	}
	to {
		top: 50%;
	}
}
.implicit {
	top: -200%;
	animation: implicit 1s;
	-moz-animation: implicit 1s; /* Firefox */
	-webkit-animation: implicit 1s; /* Safari 和 Chrome */
	-o-animation: implicit 1s;
}
@keyframes implicit {
	from {
		top: 50%;
	}
	to {
		top: -200%;
	}
}

@-moz-keyframes implicit /* Firefox */ {
	from {
		top: 50%;
	}
	to {
		top: -200%;
	}
}

@-webkit-keyframes implicit /* Safari 和 Chrome */ {
	from {
		top: 50%;
	}
	to {
		top: -200%;
	}
}

@-o-keyframes implicit /* Opera */ {
	from {
		top: 50%;
	}
	to {
		top: -200%;
	}
}
</style>
