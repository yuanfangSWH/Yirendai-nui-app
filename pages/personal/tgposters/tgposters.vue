<template>
	<view>
		<view class="mesplaybill-box">
			<view class="msbl-img-box"><img :src="postersData.uzdianqr" alt="产品二维码" /></view>
			<view class="msbl-btm-box">
				<p class="msbl-tl">如何分享专属海报</p>
				<view class="msbl-sms-box"><span>您可复制链接或长按海报保存分享给好友</span></view>

				<button style="margin-bottom: 60upx;" class="btn-copys" :data-clipboard-text="postersData.uzdianurl" @click="copy()">复制链接</button>
			</view>
		</view>
	</view>
</template>

<script>
import api from '../../../common/api/api.js';
//clipboard插件
import Clipboard from '../../../common/clipboard/clipboard.min.js';

export default {
	data() {
		return {
			//海报数据
			postersData: [],
			//海报类型
			type: ''
		};
	},
	//监听页面加载
	onLoad(option) {
		uni.showLoading({
			title: '加载中'
		});
		this.pullData(option.type);
	},
	methods: {
		//拉取数据
		pullData: function(value) {
			//bank办卡 load贷款 默认bank
			if (value == 1) {
				this.type = 'bank';
			} else if (value == 2) {
				this.type = 'load';
			}
			api.apiPost('/member/myposter?type=' + this.type + '&ag=', '', '', 'get', (status, res) => {
				if (status) {
					this.postersData = res.data;
					setTimeout(function() {
						//隐藏加载框
						uni.hideLoading();
					}, 300);
				} else {
					uni.showToast({
						title: '数据获取失败',
						icon: 'none',
						duration: 2000
					});
				}
			});
		},
		//复制链接
		copy: function() {
			//设置系统剪切板内容 ----仅兼容APP/小程序
			uni.setClipboardData({
				data: this.postersData.uzdianurl,
				success: function() {
					uni.showToast({
						title: '链接复制成功',
						icon: 'none',
						duration: 2000
					});
				},
				fail: function() {
					uni.showToast({
						title: '复制失败',
						icon: 'none',
						duration: 2000
					});
				}
			});
			//注意要使用let或者const，不能使用var，否则会出现复制次数叠加的问题，即复制不止一次。----仅兼容H5
			// 			let clipboard = new Clipboard('.btn-copys');
			// 			clipboard.on('success', function(e) {
			// 				uni.showToast({
			// 					title: '链接复制成功',
			// 					icon: 'none',
			// 					duration: 2000
			// 				});
			// 			});
			//
			// 			clipboard.on('error', function(e) {
			// 				uni.showToast({
			// 					title: '复制失败',
			// 					icon: 'none',
			// 					duration: 2000
			// 				});
			// 			});
		}
	}
};
</script>

<style></style>
