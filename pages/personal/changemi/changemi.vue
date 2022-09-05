<template>
	<view>
		<view class="form-cz-box">
			<span class="head-tl">请设置您的密码</span>
			<view class="form-write-box">
				<view class="ipt-box-cl">
					<span :class="{ acspan: isActive }">输入密码</span>
					<input class="passone" type="password" placeholder="请输入您的密码" v-model="passwordA" @change="lengthData()" />
				</view>
				<view class="ipt-box-cl">
					<span>再次输入密码</span>
					<input class="passtwo" type="password" placeholder="请再次输入您的密码" v-model="passwordB" />
				</view>
				<button class="btn-form" @click="filterData()">提交</button>
			</view>
		</view>
	</view>
</template>

<script>
import api from '../../../common/api/api.js';

export default {
	data() {
		return {
			//新的密码
			passwordA: '',
			//对比密码
			passwordB: '',
			//错误
			isActive: false
		};
	},
	methods: {
		//长度过滤
		lengthData: function() {
			if (this.isActive == true) {
				if (this.passwordA.length >= 6) {
					this.isActive = false;
				}
			}
		},
		//判断过滤
		filterData: function() {
			if (this.passwordA == '') {
				uni.showToast({
					title: '新的密码不能为空',
					icon: 'none',
					duration: 2000
				});
			} else if (this.passwordB == '') {
				uni.showToast({
					title: '请再次输入一次新密码',
					icon: 'none',
					duration: 2000
				});
			} else if (this.passwordA.length < 6) {
				this.isActive = true;
				uni.showToast({
					title: '密码长度不能少于6位',
					icon: 'none',
					duration: 2000
				});
			} else if (this.passwordB == this.passwordA) {
				this.Submit();
			} else {
				uni.showToast({
					title: '两次密码不一致',
					icon: 'none',
					duration: 2000
				});
			}
		},
		//提交修改
		Submit: function() {
			//获取到缓存里的手机号
			var value = uni.getStorageSync('landing');
			var data = {
				mobile: value.member_mobile,
				password: this.passwordA
			};
			var parameter = '?mobile=' + value.member_mobile + '&password=' + this.passwordA;
			api.apiPost('/member/newforgetstep2', parameter, data, 'post', (status, res) => {
				if (status) {
					uni.reLaunch({
						url: '/pages/login/login-mi/login-mi'
					});
				} else {
					uni.showToast({
						title: '提交修改失败',
						icon: 'none',
						duration: 2000
					});
				}
			});
		}
	}
};
</script>

<style>
.acspan {
	color: #cc0000;
}
</style>
