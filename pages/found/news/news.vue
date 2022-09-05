<template>
	<view class="tonybj">
		<view class="article">
			<h2>{{newsData.title}}</h2>
			<view class="infosactoe">
				<span class="usm">{{newsData.member_name}}</span>
				<span class="time">{{newsData.line}}</span>
			</view>
			<p id="content"><rich-text :nodes="newsData.content"></rich-text></p>
		</view>
	</view>
</template>

<script>
import api from '../../../common/api/api.js';
export default {
	data() {
		return {
			//新闻
			newsData: [],
			//新闻ID
			newsId: ''
		};
	},
	//监听页面加载
	onLoad(option) {
		this.newsId = option.id;
		this.pullData(this.newsId);
	},
	//下拉刷新
	onPullDownRefresh() {
		this.pullData(this.newsId);
		setTimeout(function() {
			//停止下拉刷新动画
			uni.stopPullDownRefresh();
		}, 1000);
	},
	methods: {
		//拉取数据
		pullData: function(id) {
			api.apiPost('/notice/video?id=' + id, '', '', 'get', (status, res) => {
				if (status) {
					this.newsData = res.data;
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
.article {
	padding: 16px 16px 30px 16px;
	background-color: #fff;
	color: #2e2d2d;
	line-height: 1.6rem;
}
.infosactoe {
	margin: 16px 0;
	font-size: 0px;
	color: #a5b3c6;
}
.infosactoe .usm {
	padding-right: 6px;
	border-right: 1px solid #eee;
	max-width: 100px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.infosactoe span {
	font-size: 12px;
	display: inline-block;
	vertical-align: middle;
	line-height: 12px;
}
.infosactoe .time {
	padding-left: 6px;
}
.article h2 {
	margin-bottom: 10px;
	font-size: 1.5rem;
}
</style>
