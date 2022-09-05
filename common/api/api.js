//jsencrypt插件
import JSEncrypt from '../../common/js/jsencrypt.min.js';
//MD5加密
import md5 from 'js-md5';

var baseURL = 'http://yuanfang.com/v1'
var pubkey =
	`-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDEFXkm8pA01MGAIUA/cm7qIcea
6qYVm6xP5krX5HDPakQrNkN/szXB9qhzQi9EEI82VxcNU8PxIbTiJo0DRhaF1mm1
cN0myTd4Fs44h59hMLkJocRfeGU4hCD6ZRmzbwd3H1eTCAoljMcDTynwevdEeAqe
ZvazB3IiviZyakwVjQIDAQAB
-----END PUBLIC KEY-----`


// 通过接口获取数据
function apiPost(url, parameter, data, method, callback) {
	let address = baseURL + url + parameter;
	//Sessionid
	var sessionid = uni.getStorageSync('SessionId');
	//加密
	let md = md5(address);
	var en = new JSEncrypt();
	en.setPublicKey(pubkey);
	let encrypted = en.encrypt(md);
	uni.request({
		url: baseURL + url,
		header: {
			'id': '116626',
			'os': 'android',
			'version': '1.0',
			'sign': encrypted,
			'lang': 'zh',
			'Content-Type': 'application/x-www-form-urlencoded',
			'useragent': '',
			'dpi': '',
			'Sessionid': sessionid,
			'cookie': 'PHPSESSID=' + sessionid
		},
		data: data,
		method: method || 'post',
		success: (res) => {
			switch (res.data.status) {
				case 200:
					callback(true, res.data)
					break;
				case '':
					callback(false, res.data)
					break;
				default:
					callback(false, res.data)
			}
		},
		fail: (res) => {
			console.log(res.data);
		}
	});
}

//特殊使用接口api
function apiPost2(url, params, parameter, data, method, callback) {
	let address = baseURL + url + params + parameter;
	//Sessionid
	var sessionid = uni.getStorageSync('SessionId');
	//加密
	let md = md5(address);
	var en = new JSEncrypt();
	en.setPublicKey(pubkey);
	let encrypted = en.encrypt(md);
	uni.request({
		url: baseURL + url + params,
		header: {
			'id': '116626',
			'os': 'android',
			'version': '1.0',
			'sign': encrypted,
			'lang': 'zh',
			'Content-Type': 'application/x-www-form-urlencoded',
			'useragent': '',
			'dpi': '',
			'Sessionid': sessionid,
			'cookie': 'PHPSESSID=' + sessionid
		},
		data: data,
		method: method || 'post',
		success: (res) => {
			switch (res.data.status) {
				case 200:
					callback(true, res.data)
					break;
				case '':
					callback(false, res.data)
					break;
				default:
					callback(false, res.data)
			}
		},
		fail: (res) => {
			console.log(res.data);
		}
	});

}
//握手接口
function Shakehands() {
	let address = 'http://appapi.sh516.com/v1/handshake/index';
	//Sessionid
	var sessionid = uni.getStorageSync('SessionId');
	//加密
	let md = md5(address);
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
		url: address,
		header: headerData,
		data: '',
		method: 'get',
		success: res => {
			if (res.data.status == 200) {
				//Sessionid信息本地缓存储存
				var cacheHeader = JSON.stringify(res.header);
				var filterData = cacheHeader.replace(/\s*/g, '');
				var sessionData = JSON.parse(filterData);
				var sessionJudge = sessionData.Sessionid;
				uni.setStorageSync('SessionId', sessionJudge);
				if (sessionJudge == '' || sessionJudge == undefined) {
					uni.showToast({
						title: '未知错误，请退出应用程序重试',
						icon: 'none',
						duration: 2000
					});
				} else {
					//跳转登录页面
					uni.reLaunch({
						url: '/pages/login/login'
					});
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

}
//初始验证状态
function failurePlan() {
	var _this = this;
	var value = uni.getStorageSync('landing');
	if (value == '' || value == undefined) {
		Shakehands();
	} else {
		apiPost('/member/getuserinfo', '', '', 'post', (status, res) => {
			if (status) {
				//登录信息本地缓存储存
				uni.setStorageSync('landing', res.data);
				if (res.data.member_tj_id == '' || res.data.member_tj_id == 0) {
					//未填写邀请码
					uni.reLaunch({
						url: '/pages/registered/invitation/invitation'
					});
				} else if (res.data.member_card == '') {
					//未实名认证
					uni.reLaunch({
						url: '/pages/registered/reality/reality'
					});
				} else if (res.data.member_password == '') {
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
	}
}
export default {
	apiPost,
	apiPost2,
	failurePlan
}
