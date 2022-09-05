<template>
	<view>
		<view class="form-cz-box">
			<span class="head-tl">请填写您的昵称</span>
			<view class="form-write-box">
				<view class="ipt-box-cl">
					<input class="name" focus="true" type="text" v-model="nickname">
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
				nickname:'',
				coke:true
			}
		},
		//监听页面加载
		onLoad(option) {
			this.nickname = option.nickname;
		},
		methods: {
			//提交修改
			Submit:function(){
				var data = {
					name: this.nickname
				};
				var parameter = '?name=' + this.nickname;
				api.apiPost('/member/updatename', parameter, data, 'post', (status, res) => {
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
