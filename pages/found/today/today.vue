<template>
	<view class="content">
		<view class="alliancefom-sosu-box">
			<input type="span" placeholder="请输入搜索文章" id="searchID" v-model="SouValue" />
			<button @click="searchTake()">搜索</button>
		</view>
		<view class="record-head-box" style="margin-top: 0;">
			<span :class="{ active: isActive ? true : false }" @click="optionsTBA(1)">
				今日口子
				<span></span>
			</span>
			<span :class="{ active: isActive ? false : true }" @click="optionsTBA(2)">
				信用卡
				<span></span>
			</span>
		</view>
		<view class="activity-ul-box">
			<view v-for="item in TodayCredit" :key="item.id">
				<view class="activity-li-box">
					<view class="activity-tl-box">
						<span>{{ item.title }}</span>
						<span>{{ item.timeline }}</span>
					</view>
					<view class="activity-img-box"><img :src="item.img" /></view>
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
			//头条新闻
			TodayCredit: [],
			//TAB
			isActive: true,
			//页数
			page: 1,
			//77口子 78信用卡
			sub: 77,
			//搜索关键字
			search: '',
			//页数总数
			pageCount: 1,
			//搜索输入框数据
			SouValue: ''
		};
	},
	//监听页面加载
	onLoad() {
		this.pullData();
	},
	//下拉刷新
	onPullDownRefresh() {
		//初始化
		this.isActive = true;
		this.page = 1;
		this.sub = 77;
		this.search = '';
		this.SouValue = '';
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
			api.apiPost('/notice/videolist?id=1&page=' + this.page + '&sub=' + this.sub + '&search=' + this.search, '', '', 'get', (status, res) => {
				if (status) {
					//数据
					this.TodayCredit = res.data.video;
					//页数总数
					this.pageCount = res.page.pageCount;
				} else {
					uni.showToast({
						title: '数据获取失败',
						icon: 'none',
						duration: 2000
					});
				}
			});
		},
		//加载数据
		loadingData: function() {
			this.page++;
			if (this.page > this.pageCount) {
				uni.showToast({
					title: '没有更多文章了',
					icon: 'none',
					duration: 2000
				});
			} else {
				api.apiPost('/notice/videolist?id=1&page=' + this.page + '&sub=' + this.sub + '&search=' + this.search, '', '', 'get', (status, res) => {
					if (status) {
						this.TodayCredit = this.TodayCredit.concat(res.data.video);
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
		//搜索
		searchTake: function() {
			this.page = 1;
			this.search = this.SouValue;
			this.pullData();
		},
		//TBA
		optionsTBA: function(value) {
			if (value == 1) {
				this.isActive = true;
				this.page = 1;
				this.sub = 77;
				//拉取数据
				this.pullData();
			} else {
				this.isActive = false;
				this.page = 1;
				this.sub = 78;
				//拉取数据
				this.pullData();
			}
		}
	}
};
</script>

<style>
.activity-li-box {
	margin-bottom: 0;
}
</style>
