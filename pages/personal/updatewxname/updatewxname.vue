<template>
	<view>
		<view class="form-cz-box">
			<span class="head-tl">请填写您的微信号</span>
			<view class="form-write-box">
				<view class="ipt-box-cl">
					<input class="name" type="text" v-model="wechat">
				</view>
				<button class="btn-form" @click="Submit()">保存</button>
			</view>
		</view>
	</view>
</template>

<script>
	import api from '../../../common/api/api.js';
	export default {
		data() {
			return {
				wechat:''
			}
		},
		//监听页面加载
		onLoad(option) {
			this.wechat = option.wechat;
		},
		methods: {
			//提交修改
			Submit:function(){
				var data = {
					wxname: this.wechat
				};
				var parameter = '?wxname=' + this.wechat;
				api.apiPost('/member/updatewxname', parameter, data, 'post', (status, res) => {
					if (status) {
						uni.reLaunch({
							url: '/pages/personal/information/information'
						});
					} else {
						uni.showToast({
							title: '提交修改失败',
							icon:'none',
							duration: 2000
						});
					}
				});
			}
		}
	}
</script>

<style>

</style>
