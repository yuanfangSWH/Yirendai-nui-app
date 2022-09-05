<template>
	<view class="content">
		<view class="qibt"><img class="wtqdimg" src="../../static/images/YirendaiQ.png" alt="" /></view>
	</view>
</template>

<script>
import api from '../../common/api/api.js';
//jsencrypt插件
import JSEncrypt from '../../common/js/jsencrypt.min.js';
//MD5加密
import md5 from 'js-md5';
export default {
	data() {
		return {};
	},
	//监听页面加载
	onLoad() {
		this.detection();
	},

	methods: {
		//握手
		sessionidFilter: function() {
			var baseURL = 'http://appapi.sh516.com/v1/handshake/index';
			var pubkey = `-----BEGIN PUBLIC KEY-----
			MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDEFXkm8pA01MGAIUA/cm7qIcea
			6qYVm6xP5krX5HDPakQrNkN/szXB9qhzQi9EEI82VxcNU8PxIbTiJo0DRhaF1mm1
			cN0myTd4Fs44h59hMLkJocRfeGU4hCD6ZRmzbwd3H1eTCAoljMcDTynwevdEeAqe
			ZvazB3IiviZyakwVjQIDAQAB
			-----END PUBLIC KEY-----`;
			let md = md5(baseURL);
			var en = new JSEncrypt();
			en.setPublicKey(pubkey);
			let encrypted = en.encrypt(md);
			var sessionid = uni.getStorageSync('SessionId');
			var headerData = {
				id: '116626',
				os: 'android',
				version: '1.0',
				sign: encrypted,
				lang: 'zh',
				'Content-Type': 'application/x-www-form-urlencoded',
				useragent: '',
				dpi: '',
				Sessionid: sessionid,
				cookie: 'PHPSESSID=' + sessionid
			};
			if (sessionid == '' || sessionid == undefined) {
				delete headerData.Sessionid;
				delete headerData.cookie;
			}
			uni.request({
				type: 'head',
				url: baseURL,
				method: 'get',
				header: headerData,
				success: res => {
					if (res.data.status == 200) {
						//Sessionid信息本地缓存储存
						var cacheHeader = JSON.stringify(res.header);
						var filterData = cacheHeader.replace(/\s*/g, '');
						var sessionData = JSON.parse(filterData);
						var sessionJudge = sessionData.Sessionid;
						uni.setStorageSync('SessionId', sessionJudge);
						console.log('取到的值：'+sessionJudge)
						if (sessionJudge == '' || sessionJudge == undefined) {
							uni.showToast({
								title: '未知错误，请退出应用程序重试',
								icon: 'none',
								duration: 2000
							});
						} else {
							setTimeout(function() {
								//跳转登录页面
								uni.reLaunch({
									url: '/pages/login/login'
								});
							}, 2000);
						}
					} else {
						uni.showToast({
							title: '网络异常，请重试',
							icon: 'none',
							duration: 2000
						});
					}
				}
			});
		},
		//检测
		detection: function() {
			var _this = this;
			var value = uni.getStorageSync('landing');
			if (value == '' || value == undefined) {
				this.sessionidFilter();
			} else {
				setTimeout(function() {
					_this.Thelogin();
				}, 2000);
			}
		},
		//重新登录
		Thelogin: function() {
			api.apiPost('/member/getuserinfo', '', '', 'post', (status, res) => {
				if (status) {
					//登录信息本地缓存储存
					uni.setStorageSync('landing', res.data);
					this.validation();
				} else {
					uni.showToast({
						title: '网络异常，请重试',
						icon: 'none',
						duration: 2000
					});
					//跳转登录页面
					uni.reLaunch({
						url: '/pages/login/login'
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
			} else if (value.member_password == '') {
				//未设置密码
				uni.reLaunch({
					url: '/pages/registered/setpassword/setpassword'
				});
			} else {
				uni.showToast({
					title: '欢迎登录',
					icon: 'none',
					duration: 2000
				});
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
.wtqdimg {
	width: 100%;
	height: 1200upx;
}
</style>
