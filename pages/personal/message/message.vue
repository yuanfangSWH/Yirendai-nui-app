<template>
	<view>
		<view class="indent-ul-box">
			<view class="indent-li-box" v-for="(item, key) in message" :key="key">
				<span class="indent-timer-box">{{ item.timeline }}</span>
				<view class="indent-ms-box">
					<view class="indent-top-box">
						<span class="us-ms-tl">{{ item.title }}</span>
						<view class="xttz_time">
							<span class="msnr-xt">{{ item.timeline }}</span>
							<span class="xx_span01 xx_open" :class="{ xx_close: messageData[key].isShow }" @click="opeN(item.id)" >展开</span>
						</view>
						<view class="xx_info" v-show="messageData[key].isShow"><rich-text :nodes="messageData[key].content"></rich-text></view>
					</view>
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
			//状态
			state: [],
			//消息通知
			message: [],
			//消息内容
			messageData: [],
			//页数
			page: 1,
			//页数总数
			pageCount: 1
		};
	},
	//监听页面加载
	onLoad() {
		this.pullData();
	},
	//下拉刷新
	onPullDownRefresh() {
		//初始化
		this.page = 1;
		this.pullData();
		setTimeout(function() {
			//停止下拉刷新动画
			uni.stopPullDownRefresh();
		}, 1000);
	},
	//上拉加载
	onReachBottom() {
		uni.showLoading({
			title: '加载中'
		});
		this.loadingData();
	},
	methods: {
		//拉取数据
		pullData: function() {
			api.apiPost('/notice/videolist?id=79&page=' + this.page, '', '', 'get', (status, res) => {
				if (status) {
					//数据
					this.message = res.data.video;
					//页数总数
					this.pageCount = res.page.pageCount;
					for (var i = 0; i < this.message.length; i++) {
						this.messageData.push({ t_id: this.message[i].id, content: '网络异常，请重试', isShow: false });
					}
				} else {
					uni.showToast({
						title: '数据获取失败',
						icon: 'none',
						duration: 2000
					});
				}
			});
		},
		//加载
		loadingData: function() {
			this.page++;
			if (this.page > this.pageCount) {
				uni.showToast({
					title: '没有更多贴子了',
					icon: 'none',
					duration: 2000
				});
			} else {
				api.apiPost('/notice/videolist?id=79&page=' + this.page, '', '', 'get', (status, res) => {
					if (status) {
						this.messageData = [];
						//通知数据
						this.message = this.message.concat(res.data.video);
						for (var i = 0; i < this.message.length; i++) {
							this.messageData.push({ t_id: this.message[i].id, content: '网络异常，请重试', isShow: false });
						}
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
			}
		},
		//展开
		opeN: function(id) {
			//调用API
			api.apiPost('/notice/video?id=' + id, '', '', 'get', (status, res) => {
				if (status) {
					for (var i = 0; i < this.messageData.length; i++) {
						if (this.messageData[i].t_id == id) {
							if (!this.messageData[i].isShow) {
								this.messageData[i].content = res.data.content;
								this.messageData[i].isShow = true;
							} else {
								this.messageData[i].isShow = false;
							}
						}
					}
				} else {
					uni.showToast({
						title: '数据获取失败',
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
.faqactives {
	transform: translateY(-50%);
	-webkit-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
}
</style>
