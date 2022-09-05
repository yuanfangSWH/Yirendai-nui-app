<template>
	<view>
		<view class="wrd-mony-box">
			<ul class="banka_ul">
				<li>
					<span class="banka_s01">银行卡号</span>
					<span class="banka_s02">{{sfz}}</span>
				</li>
				<li>
					<span class="banka_s01">手机号</span>
					<span class="banka_s02">{{mobileXH}}</span>
				</li>
				<li>
					<span class="banka_s01">身份证</span>
					<span class="banka_s02">{{bankcardXH}}</span>
				</li>
				<li>
					<span class="banka_s01">姓名</span>
					<span class="banka_s02">{{name}}</span>
				</li>
			</ul>

			<button class="btn-sure-ts" @click="submitData()">解绑</button>
		</view>
	</view>
</template>

<script>
import api from '../../../common/api/api.js';
export default {
	data() {
		return {
			//姓名
			name: '',
			//身份证
			bankcard: '',
			//身份证带星号
			bankcardXH: '',
			//卡号
			sfz: '',
			//手机号
			mobile:'',
			//手机号带星号
			mobileXH:''
		};
	},
	//监听页面加载
	onLoad() {
		this.pullData();
	},
	methods: {
		//拉取数据
		pullData: function() {
			//获取到缓存里的信息
			var value = uni.getStorageSync('landing');
			//姓名
			this.name = value.member_truename;
			//身份证
			this.bankcard = value.member_card;
			//身份证转显示星号
			var sfzdata = /^(\d{6})\d+(\d{4})$/;
			var atat = this.bankcard;
			this.bankcardXH = atat.replace(sfzdata, '$1********$2');
			//手机号
			this.mobile = value.member_mobile;
			//手机号转显示星号
			var sjh = /^(\d{3})\d+(\d{4})$/;
		    var ty = this.mobile;
		    this.mobileXH = ty.replace(sjh, "$1****$2");
		},
		//提交解绑
		submitData: function() {
			api.apiPost2('/agent/addbankcard', '?r=4', '', '', 'post', (status, res) => {
				if (status) {
					uni.navigateTo({
						url: '/pages/personal/cardjb/cardjb'
					});
				} else {
					uni.showToast({
						title: '数据获取失败',
						icon:'none',
						duration: 2000
					});
				}
			});
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
.confirm-ft > a.confirm-btn.primary {
	color: #e85b54 !important;
}
.confirm-ft > a.confirm-btn.default {
	color: #3887ff !important;
}
</style>
