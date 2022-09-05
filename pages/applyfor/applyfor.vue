<template>
	<view><web-view :webview-styles="webviewStyles" :src="requestUrl" v-if="According"></web-view></view>
</template>

<script>
import api from '../../common/api/api.js';
export default {
	data() {
		return {
			//产品ID
			productID: '',
			//申请贷款/信用卡链接
			requestUrl: '',
			//是否销毁或渲染容器
			According: false,
			//webview 的样式
			webviewStyles: {
				progress: {
					color: '#FF3333'
				}
			}
		};
	},
	//监听页面加载
	onLoad(option) {
		//获取到id
		this.productID = option.id;
		this.pullData();
	},
	methods: {
		//拉取数据
		pullData: function() {
			api.apiPost('/agent/ag?id=' + this.productID, '', '', 'get', (status, res) => {
				if (status) {
					//申请贷款链接
					this.requestUrl = res.data.selfurl;
					//渲染容器
					this.According = true;
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

<style></style>
