<template>
	<view class="tonybj">
		<view class="state-sel"></view>
		<view class="information-box">
			<view class="handle-list-box" style="border-top: 0">
				<!--收益明细  -->
				<view class="guess-title">
					<span>今日头条</span>
					<view class="alls" @click="mouthJump()"></view>
				</view>
			</view>
			<view class="activity-ul-box">
				<view v-for="item in headlines" :key="item.id">
					<view class="activity-li-box" @click="news(item.id)">
						<view class="activity-tl-box">
							<span>{{ item.title }}</span>
							<span>{{ item.timeline }}</span>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="community-box">
			<view class="guess-title"><span>社区帖子</span></view>
			<view class="comminity-tabs-box">
				<span :class="{ active: isActive ? true : false }" @click="optionsTBA(1)">默认推荐</span>
				<span :class="{ active: isActive ? false : true }" @click="optionsTBA(2)">最新发布</span>
			</view>
			<view class="comminity-list" id="default">
				<ul>
					<li v-for="item in community" :key="item.list_id">
						<view @click="post(item.list_id)">
							<view class="author-box">
								<img class="author-avatar" :src="item.list_member_avatar" alt="" />
								<view class="author-nametimer">
									<p class="name">
										<span>{{ item.list_member_name }}</span>
										<!--<img src="../../static/images/highlight_icon.png" alt="" />-->
									</p>
									<span class="timer">1分钟前</span>
								</view>
							</view>
							<p class="title">{{ item.list_title }}</p>
							<view class="community-content-box">
								<p class="content">{{ item.list_content }}</p>
								<view class="banner-box"><img :src="item.list_img" alt="" /></view>
							</view>
							<view class="browsing-data">
								<span class="look">{{ item.list_look_sum }}</span>
								<span class="ping">{{ item.list_comment_sum }}</span>
								<span class="dian">{{ item.list_like_sum }}</span>
							</view>
						</view>
					</li>
				</ul>
			</view>
		</view>
		<view class="ftzwjsw" @click="fabtz()"><img class="wtqdimg" src="../../static/images/publish56.png" alt="" /></view>
	</view>
</template>

<script>
import api from '../../common/api/api.js';
export default {
	data() {
		return {
			//头条新闻
			headlines: [],
			//社区贴子
			community: [],
			//TAB
			isActive: true,
			//页数
			page: 1,
			//排序 default默认 time最新
			sortPx: 'default',
			//页数总数
			pageCount: 1
		};
	},
	//监听页面加载
	onLoad() {
		setTimeout(function() {
			//隐藏加载框
			uni.hideLoading();
		}, 300);
		this.headlinesData();
	},
	//下拉刷新
	onPullDownRefresh: function() {
		//初始化
		this.isActive = true;
		this.sortPx = 'default';
		this.page = 1;
		this.headlinesData();
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
		//今日头条
		headlinesData: function() {
			api.apiPost('/notice/cutlist', '', '', 'get', (status, res) => {
				if (status) {
					//数据
					this.headlines = res.data.video;
					this.communityData();
				} else {
					uni.showToast({
						title: '数据获取失败',
						icon: 'none',
						duration: 2000
					});
				}
			});
		},
		//社区贴子
		communityData: function() {
			api.apiPost('/member/bbslist?page=' + this.page + '&sort=' + this.sortPx, '', '', 'get', (status, res) => {
				if (status) {
					//数据
					this.community = res.data.listdata;
					//页数总数
					this.pageCount = res.page.pageCount;
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
		//加载数据
		loadingData: function() {
			this.page++;
			if (this.page > this.pageCount) {
				uni.showToast({
					title: '没有更多贴子了',
					icon: 'none',
					duration: 2000
				});
			} else {
				api.apiPost('/member/bbslist?page=' + this.page + '&sort=' + this.sortPx, '', '', 'get', (status, res) => {
					if (status) {
						this.community = this.community.concat(res.data.listdata);
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
		//社区贴子TBA
		optionsTBA: function(value) {
			if (value == 1) {
				this.isActive = true;
				this.page = 1;
				this.sortPx = 'default';
				//社区贴子
				this.communityData();
			} else {
				this.isActive = false;
				this.page = 1;
				this.sortPx = 'time';
				//社区贴子
				this.communityData();
			}
		},
		//社区文章详情
		post: function(id) {
			uni.navigateTo({
				url: '/pages/found/post/post?id=' + id
			});
		},
		//新闻文章详情
		news: function(id) {
			uni.navigateTo({
				url: '/pages/found/news/news?id=' + id
			});
		},
		//查看全部
		mouthJump: function() {
			uni.navigateTo({
				url: '/pages/found/today/today'
			});
		},
		//发布帖子
		fabtz: function() {
			uni.navigateTo({
				url: '/pages/found/published/published'
			});
		}
	}
};
</script>

<style>
@import '../../common/css/newhome.css';
.alls:after {
	content: '';
	position: absolute;
	left: 10px;
	right: 10px;
	top: 0;
	bottom: 0;
	span-align: right;
	border-bottom: 1px solid #f1f4f8;
}
.ftzwjsw {
	position: fixed;
	bottom: 110upx;
	right: 20upx;
	z-index: 50;
	height: 106upx;
	width: 106upx;
}
.wtqdimg {
	width: 100%;
	height: 100%;
}
</style>
