<template>
	<view>
		<view class="wrd-mony-box">
			<view class="bk_s">
				<span><img src="../../../static/images/s_bk.png" /></span>
				<p>恭喜您，添加银行卡成功</p>
			</view>
			<button class="btn-sure-ts" @click="complete()">完成</button>
		</view>
	</view>
</template>

<script>
import api from '../../../common/api/api.js';
export default {
	data() {
		return {
			completeData: false
		};
	},
	//监听页面加载
	onLoad() {
		this.callData();
	},
	methods: {
		//更新数据
		callData: function() {
			api.apiPost('/member/getuserinfo', '', '', 'post', (status, res) => {
				if (status) {
					//登录信息本地缓存储存
					uni.setStorageSync('landing', res.data);
					//设置为真
					this.completeData = true;
				} else {
					uni.showToast({
						title: '未知错误',
						icon:'none',
						duration: 2000
					});
					//跳转登录页面
					uni.reLaunch({
						url: '/pages/login/login'
					});
				}
			});
		},
		//完成
		complete: function() {
			if (this.completeData) {
				uni.navigateBack({
					delta: 2
				});
			}
		}
	}
};
</script>

<style>
@import '../../../common/css/cash.css';
.m-button {
	background-color: #fff;
	margin-bottom: 15px;
}
.btn-block {
	margin-top: 15px;
	padding: 10px 0;
	display: flex;
	display: -webkit-flex;
	position: relative;
}
.btn-block .logo {
	width: 30px;
	height: 30px;
}
.btn-block span {
	line-height: 30px;
	color: #404b5e;
	font-size: 14px;
	padding-left: 10px;
}
.btn-warning {
	height: auto;
}
.jt-logo {
	width: 8px;
	height: 18px;
	position: absolute;
	right: 0;
	top: 50%;
	transform: translateY(-50%);
}
.cell-right input[type='radio'] + .cell-radio-icon:after,
.cell-right input[type='checkbox']:not(.m-switch) + .cell-radio-icon:after {
	color: #4e90e6;
}
.cell-item img {
	width: 30px;
	height: 30px;
	margin: 10px 0;
	margin-right: 10px;
}
.wrd-monyipt-box input {
	min-width: 100px;
}
#btn_wrdts {
	min-width: 70px;
}
</style>
