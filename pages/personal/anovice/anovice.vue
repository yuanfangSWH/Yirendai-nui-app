<template>
	<view class="tonybj">
		<view class="tg-list-box">
			<ul>
				<li v-for="item in guideData" :key="item.id">
					<view class="timer-box-span"><span>{{ item.timeline }}</span></view>
					<view class="content-mess-box" @click="news(item.id)">
						<view class="banner-mss-box"><img :src="item.img" alt="" /></view>
						<span class="title">{{ item.title }}</span>
					</view>
				</li>
			</ul>
		</view>
		<!-- <view class="modal-mask">
			<view class="modal-dialog">
				<image src="../../../static/images/vip_icon.png" class="modal-image"></image>
				<image src="../../../static/images/close-jq.png" class="close-img"></image>
				<view class="modal-content">
					<text class="modal-lt">您还不是代呗客会员</text>
					<text class="modal-lt">点击下方“立即购买”使用此功能</text>
					<text class="modal-tl">如有疑问,请联系客服（微信: dbk168）</text>
				</view>
				<view class="modal-footer">
					<a class="btn-confirm">立即购买</a>
				</view>
			</view>
		</view> -->
	</view>
</template>

<script>
import api from '../../../common/api/api.js';
export default {
	data() {
		return {
			//数据
			guideData: [],
			//页数
			page: 1,
			//总页数
			pageCount: 1
		};
	},
	//监听页面加载
	onLoad() {
		this.pullData();
	},
	//下拉刷新
	onPullDownRefresh() {
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
			api.apiPost('/notice/videolist?id=2&page=' + this.page, '', '', 'get', (status, res) => {
				if (status) {
					this.guideData = res.data.video;
					this.pageCount = res.page.pageCount;
				} else {
					uni.showToast({
						title: '数据获取失败',
						icon:'none',
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
					icon:'none',
					duration: 2000
				});
			} else {
				api.apiPost('/notice/videolist?id=2&page=' + this.page, '', '', 'get', (status, res) => {
					if (status) {
						//数据
						this.guideData = this.guideData.concat(res.data.video);
						setTimeout(function() {
							//隐藏加载框
							uni.hideLoading();
						}, 300);
					} else {
						uni.showToast({
							title: '数据获取失败',
							icon:'none',
							duration: 2000
						});
					}
				});
			}
		},
		//新闻文章详情
		news: function(id) {
			uni.navigateTo({
				url: '/pages/found/news/news?id=' + id
			});
		}
	}
};
</script>

<style>
.tg-list-box ul li {
	padding-top: 10px;
	padding-bottom: 30px;
	width: 100%;
}
.timer-box-span {
	text-align: center;
}
.timer-box-span span {
	color: #fff;
	background-color: #dce0e3;
	font-size: 12px;
	padding: 0 6px;
	margin: 14px 0;
	display: inline-block;
	border-radius: 2px;
}
.content-mess-box {
	width: 90%;
	margin: 0 auto;
	border-radius: 5px;
	overflow: hidden;
}
.banner-mss-box {
	height: 160px;
	overflow: hidden;
}
.banner-mss-box img {
	width: 100%;
}
.content-mess-box span.title {
	display: block;
	background-color: #fff;
	padding: 14px;
	font-size: 15px;
	text-align: left;
	color: #000;
}
</style>
