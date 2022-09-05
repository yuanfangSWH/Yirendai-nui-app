<template>
	<view class="content">
		<view class="community-articlebox">
			<view class="articlebox-title">
				<p>{{ community.title }}</p>
			</view>
			<view class="author-box">
				<img class="author-avatar" :src="community.list_member_avatar" alt="" />
				<view class="author-nametimer">
					<p class="name">
						<span>{{ community.list_member_name }}</span>
						<img src="../../../static/images/highlight_icon.png" alt="" />
					</p>
					<span class="timer">{{ community.list_time }}&nbsp;&nbsp;&nbsp;&nbsp;阅读{{ community.list_look_sum }}</span>
				</view>
			</view>

			<view class="articlebox-content-box">
				<rich-text class="content" :nodes="community.list_content"></rich-text>
				<view class="content-img"><img :src="community.list_img" alt="" /></view>
				<p class="biaomi">本贴为作者发布，不代表平台立场，转帖须注明出处。</p>
			</view>
			<view class="ljilb">
				<view class="tjbyg">
					<img class="cdimg" src="../../../static/images/zjyd1.png" alt="" />
					<view class="ttcwz" @click="Pinl(0)">评论({{ community.list_comment_sum }})</view>
				</view>
				<view class="tjbyg">
					<img class="cdimg" src="../../../static/images/zjyd2.png" alt="" v-if="islike == 0" />
					<img class="cdimg" src="../../../static/images/zjyd21.png" alt="" v-else />
					<view class="ttcwz" @click="Praise(community.list_id, 0)">点赞({{ community.list_like_sum }})</view>
				</view>
				<view class="tjbyg">
					<img class="cdimg" src="../../../static/images/zjyd3.png" alt="" />
					<view class="ttcwz" @click="Share()">分享</view>
				</view>
				<view class="tjbyg">
					<img class="cdimg" src="../../../static/images/zjyd4.png" alt="" />
					<view class="ttcwz" @click="Report(community.list_id, community.list_member_id)">举报</view>
				</view>
			</view>
			<view class="zjhjx"></view>
			<!--评论列表-->
			<view class="comment-list-box">
				<p class="pd">评论列表</p>
				<ul>
					<li v-for="(item, key) in commentsData" :key="key">
						<view class="author-box" @click="Pinl(item.reply_id, item.reply_member_name)">
							<img class="author-avatar" :src="item.reply_member_avatar" alt="" />
							<view class="author-nametimer">
								<p class="name">
									<span>{{ item.reply_member_name }}</span>
								</p>
								<span class="timer">{{ item.reply_time }}</span>
							</view>
						</view>
						<p class="cmt" @click="Pinl(item.reply_id, item.reply_member_name)">{{ item.reply_content }}</p>
						<view class="reply-box" v-for="(second, index) in item.son_reply" :key="index" @click="Pinl(second.reply_from_id, second.reply_member_name)">
							<em>{{ second.reply_from_member_name }}&nbsp;</em>
							<span>回复了</span>
							<em>&nbsp;{{ second.reply_member_name }}:&nbsp;</em>
							<span>{{ second.reply_content }}</span>
						</view>
					</li>
				</ul>
			</view>
			<view class="no-ms-box" v-if="commentsData == ''">
				<img src="../../../static/images/nocp_icon.png" alt="" />
				<span>暂无评论</span>
			</view>
			<view class="kbdk"></view>
			<!-- <view class="fidexbox-bottom">
				<img src="../../../static/images/logo_new.png" alt="" />
				<view class="fidecontentbox">
					<span>代呗客</span>
					<em>为更好生活而来</em>
				</view>
				<a href="" class="download-shequ">下载即可参与评论</a>
			</view> -->
		</view>
		<view class="w-tmdpl">
			<view class="srkzhi">
				<view class="tiblk"><img src="../../../static/images/xpl.png" alt="" /></view>
				<input type="text" :placeholder="commentsYs" class="sljum" v-model="content" />
			</view>
			<view class="fabwz" @click="hairComments()">发表</view>
		</view>
	</view>
</template>

<script>
import api from '../../../common/api/api.js';
export default {
	data() {
		return {
			//社区贴子
			community: [],
			//贴子ID
			communityId: '',
			//评论区分
			fid: 0,
			//回复评论用户的昵称
			memberName: '',
			//评论
			commentsData: [],
			//评论页数
			page: 1,
			//回复评论
			content: '',
			//是否点赞
			islike: 0,
			//评论预设
			commentsYs: '说两句'
		};
	},
	//监听页面加载
	onLoad(option) {
		this.communityId = option.id;
		this.pullData();
	},
	//下拉刷新
	onPullDownRefresh() {
		this.pullData(this.communityId);
		setTimeout(function() {
			//停止下拉刷新动画
			uni.stopPullDownRefresh();
		}, 1000);
	},
	methods: {
		//拉取数据
		pullData: function() {
			api.apiPost('/member/bbsdetail?id=' + this.communityId, '', '', 'get', (status, res) => {
				if (status) {
					//数据
					this.community = res.data.info;
					//是否点赞
					this.islike = res.data.info.list_islike;
					//拉取评论
					this.comments();
				} else {
					uni.showToast({
						title: '数据获取失败',
						icon: 'none',
						duration: 2000
					});
				}
			});
		},
		//获取评论
		comments: function() {
			api.apiPost('/member/bbsgetcomment?bbs_id=' + this.communityId + '&fid=0&page=' + this.page, '', '', 'get', (status, res) => {
				if (status) {
					this.commentsData = res.data.listdata;
				} else {
					uni.showToast({
						title: '数据获取失败',
						icon: 'none',
						duration: 2000
					});
				}
			});
		},
		//举报
		Report: function(id, memberid) {
			var data = {
				list_id: id,
				list_member_id: memberid
			};
			var parameter = '?list_id=' + id + '&list_member_id=' + memberid;
			api.apiPost('/member/bbsreport', parameter, data, 'post', (status, res) => {
				if (status) {
					uni.showToast({
						title: '举报成功',
						icon: 'none',
						duration: 2000
					});
				} else {
					uni.showToast({
						title: '你已经举报过这个帖子了哟',
						icon: 'none',
						duration: 2000
					});
				}
			});
		},
		//分享
		Share: function() {
			var bt = this.community.list_titl;
			var lj = this.community.share_link;
			var tp = this.community.list_img;
			var nr = this.community.list_content;
			//调用系统分享
			plus.share.sendWithSystem(
				{ href: lj, pictures: tp, title: bt },
				function() {
					uni.showToast({
						title: '分享成功',
						icon: 'none',
						duration: 2000
					});
				},
				function(e) {
					uni.showToast({
						title: '分享失败',
						icon: 'none',
						duration: 2000
					});
				}
			);
		},
		//点赞
		Praise: function(id, type) {
			if (this.islike == 1) {
				uni.showToast({
					title: '你已经点赞过了哟',
					icon: 'none',
					duration: 2000
				});
			} else {
				var data = {
					fid: id,
					type: type
				};
				var parameter = '?fid=' + id + '&type=' + type;
				api.apiPost('/member/bbslike', parameter, data, 'post', (status, res) => {
					if (status) {
						uni.showToast({
							title: '点赞成功',
							icon: 'none',
							duration: 2000
						});
						this.pullData();
					} else {
						uni.showToast({
							title: '你已经点赞过了哟',
							icon: 'none',
							duration: 2000
						});
					}
				});
			}
		},
		//评论对象
		Pinl: function(id, name) {
			this.fid = id;
			if (this.fid == 0) {
				this.commentsYs = '说两句';
				this.memberName = '';
			} else {
				this.commentsYs = '回复 ' + name;
				this.memberName = name;
			}
		},
		//发表评论
		hairComments: function() {
			if (this.content == '' || this.content == null) {
				uni.showToast({
					title: '评论内容不能为空',
					icon: 'none',
					duration: 2000
				});
			} else {
				var data = {
					id: this.communityId,
					fid: this.fid,
					reply_member_name: this.memberName,
					content: this.content
				};
				var parameter = '?id=' + this.communityId + '&fid=' + this.fid + '&reply_member_name=' + this.memberName + '&content=' + this.content;
				api.apiPost('/member/bbsreplycomment', parameter, data, 'post', (status, res) => {
					if (status) {
						uni.showToast({
							title: '评论成功',
							icon: 'none',
							duration: 2000
						});
						this.commentsYs = '说两句';
						this.content = '';
						this.pullData();
					} else {
						uni.showToast({
							title: '评论失败，请重试',
							icon: 'none',
							duration: 2000
						});
					}
				});
			}
		}
	}
};
</script>

<style>
@import '../../../common/css/newhome.css';
.kbdk {
	width: 100%;
	height: 75upx;
}
.zjhjx {
	width: 100%;
	height: 1px;
	background-color: #e6ecf8;
}
.w-tmdpl {
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 75upx;
	border-top: 1px #dee0f2 solid;
	background-color: #ffffff;
	display: flex;
}
.srkzhi {
	flex: 3;
	height: 100%;
	display: flex;
	margin-left: 30upx;
}
.tiblk {
	width: 60upx;
	height: 60upx;
	margin-top: 9upx;
	background-color: #f1f2f5;
}
.tiblk img {
	width: 30upx;
	height: 30upx;
	padding-top: 15upx;
	padding-left: 15upx;
}
.sljum {
	flex: 1;
	height: 60upx;
	line-height: 60upx;
	font-size: 28upx;
	background-color: #f1f2f5;
	margin-top: 9upx;
}
.fabwz {
	flex: 1;
	height: 100%;
	text-align: center;
	font-size: 28upx;
	color: #579ef0;
	line-height: 75upx;
}
.ljilb {
	width: 600upx;
	height: 110upx;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	padding-top: 40upx;
	padding-bottom: 20upx;
}
.tjbyg {
	flex: 1;
}
.tjbyg .cdimg {
	width: 42upx;
	height: 42upx;
	display: block;
	margin-left: auto;
	margin-right: auto;
}
.tjbyg .ttcwz {
	width: 100%;
	text-align: center;
	font-size: 20upx;
	color: #7d7d7d;
	padding-top: 10upx;
}
</style>
