<template>
	<view>
		<view class="tuihb-box">
			<view class="tui-head-box">
				<span :class="{ active: isActive ? true : false }" data-id="1" @click="inHB(1)">招募海报一</span>
				<span :class="{ active: isActive ? false : true }" data-id="2" @click="inHB(2)">招募海报二</span>
			</view>
			<view class="banner-hb-img">
				<img :src="postersData.member_pro_app_hd" alt="" v-if="options == 1" />
				<img :src="postersData.member_pro_app_team" alt="" v-if="options == 2" />
			</view>
			<view class="msbl-btm-box">
				<p class="msbl-tl">如何分享专属海报</p>
				<view class="msbl-sms-box"><span>您可复制链接或长按海报保存分享给好友</span></view>

				<button style="margin-bottom: 60upx;" class="btn-copys" :data-clipboard-text="postersData.share_url" @click="copy()">复制链接</button>
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
			//切换状态
			options: 1,
			isActive: true
		};
	},
	//监听页面加载
	onLoad() {
		uni.showLoading({
			title: '加载中'
		});
		this.pullData();
	},
	methods: {
		//拉取数据
		pullData: function() {
			api.apiPost('/member/createpro', '', '', 'get', (status, res) => {
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
				data: this.postersData.share_url,
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
		},
		//切换状态
		inHB: function(value) {
			if (value == 1) {
				this.options = 1;
				this.isActive = true;
			} else {
				this.options = 2;
				this.isActive = false;
			}
		}
	}
};
</script>

<style>
.tui-head-box {
	text-align: center;
}
.tui-head-box span {
	text-decoration: none;
	padding: 10px 4px;
	margin: 0 10px;
	display: inline-block;
	color: #515151;
	font-size: 14px;
}
.tui-head-box span.active {
	border-bottom: 2px solid #4e90e6;
	color: #4e90e6;
}
.banner-hb-img {
	width: 550upx;
	margin: auto;
	text-align: center;
}
.banner-hb-img img {
	width: 100%;
	height: 1000upx;
	display: inline-block;
	vertical-align: top;
	margin-top: 6%;
}
.wm-p {
	color: #98a7b8;
	text-align: center;
}
.wm-p p {
	margin: 0;
	margin-top: 6%;
}
</style>
