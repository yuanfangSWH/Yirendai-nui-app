<template>
	<view>
		<view class="app-link-box">
			<view class="addbanka_box">
				<view class="header-link">
					<h2>代呗安全保障中</h2>
					<p>保障你的用卡安全</p>
				</view>
				<view class="checkress-form-box form-ck" style="display: block;">
					<view class="checkress-ipt-box">
						<p>姓名</p>
						<input placeholder="请输入卡号本人姓名" disabled="true" type="text" class="names" v-model="name" />
					</view>
					<view class="checkress-ipt-box">
						<p>身份证</p>
						<input placeholder="请输入身份证号" disabled="true" type="text" id="id_banka" v-model="bankcardXH" />
					</view>
					<view class="checkress-ipt-box">
						<p>卡号</p>
						<input placeholder="请输入银行卡号" type="number" id="id_number" v-model="sfz" />
					</view>
					<button class="btn-checkress" id="_chaxun" type="button" @click="filterData()">下一步</button>
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
			//姓名
			name: '',
			//身份证
			bankcard: '',
			//身份证带星号
			bankcardXH: '',
			//卡号
			sfz: ''
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
			//转显示星号
			var sfzdata = /^(\d{6})\d+(\d{4})$/;
			var atat = this.bankcard;
			this.bankcardXH = atat.replace(sfzdata, '$1********$2');
		},
		//判断过滤
		filterData: function() {
			var reg = /^(\d{16}|\d{19})$/;
			if (this.sfz == '') {
				uni.showToast({
					title: '卡号不能为空',
					icon:'none',
					duration: 2000
				});
			} else if (!reg.test(this.sfz)) {
				uni.showToast({
					title: '银行卡格式错误',
					icon:'none',
					duration: 2000
				});
			} else {
				this.submitData();
			}
		},
		//提交添加
		submitData: function() {
			var data = {
				name: this.name,
				bankcard: this.bankcard,
				sfz: this.sfz
			};
			var parameter = '?name=' + this.name + '&bankcard=' + this.bankcard + '&sfz=' + this.sfz;
			api.apiPost2('/agent/addbankcard','?r=3', parameter, data, 'post', (status, res) => {
				if (status) {
					uni.navigateTo({
						url: '/pages/personal/cardcg/cardcg'
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
</style>
