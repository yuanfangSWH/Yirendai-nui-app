<template>
	<view class="tonybj">
		<view class="state-sel"></view>
		<view class="grzx-seventbox personalct-box">
			<view class="sventbox-header">
				<view class="person_s">
					<view @click="xiox()"><view class="news-sevent">消息</view></view>
					<view @click="shezi()"><view class="set-sevent">设置</view></view>
				</view>
				<h4 class="person_t">个人中心</h4>
				<view class="usersevent-mess">
					<img :src="Theuser.member_avatar" class="head" alt="" />
					<view class="seventname-box">
						<strong>{{ Theuser.member_name }}</strong>
						<span v-if="Theuser.member_pro_level === 0">实习专员</span>
						<span v-else-if="Theuser.member_pro_level === 1">初级代理</span>
						<span v-else-if="Theuser.member_pro_level === 2">城市代理</span>
					</view>
					<em class="idsevent">ID:{{ Theuser.member_id }}</em>
					<view class="jscjhy">
						<view @click="pshhr()"><img src="../../static/images/huiy_icon.png" alt="" /></view>
					</view>
				</view>
				<view class="seventye-box">
					<view class="dvye">
						<view class="yue-dvye-box">
							<span>我的余额(元)</span>
							<strong>{{ Table.member_dl_money == 0 ? '0.00 ' : Table.member_dl_money }}</strong>
						</view>
						<view class="ts-dvye" @click="newaccount()">提现</view>
					</view>
					<view class="dvye">
						<ul class="dvye-ul">
							<li>
								<strong>{{ Table.jrsr == 0 ? '0.00 ' : Table.jrsr }}</strong>
								<em>今日收益(元)</em>
							</li>
							<li>
								<strong>{{ Table.team == 0 ? '0.00 ' : Table.team }}</strong>
								<em>团队收益(元)</em>
							</li>
							<li>
								<strong class="isst">{{ Table.lj == 0 ? '0.00 ' : Table.lj }}</strong>
								<em>累计收入(元)</em>
							</li>
						</ul>
					</view>
				</view>
			</view>
			<view class="seventlist-box">
				<view class="listgn-seventbox">
					<ul>
						<li>
							<view @click="honb()">
								<img src="../../static/images/packet_icon.png" alt="" />
								<span>红包</span>
							</view>
						</li>
						<li>
							<view @click="dind()">
								<img src="../../static/images/dindse_icon.png" alt="" />
								<span>订单</span>
							</view>
						</li>
						<li>
							<view @click="tdyd()">
								<img src="../../static/images/time_icon.png" alt="" />
								<span>团队</span>
							</view>
						</li>
						<li>
							<view @click="kfu()">
								<img src="../../static/images/kefuse_icon.png" alt="" />
								<span>客服</span>
							</view>
						</li>
						<li>
							<view @click="bzxi()">
								<img src="../../static/images/helpse_icons.png" alt="" />
								<span>帮助</span>
							</view>
						</li>
					</ul>
				</view>
			</view>
			<view class="houm-seventbox">
				<h3>新手指南</h3>
				<view class="banner-sevent">
					<view @click="xsznan()"><img src="../../static/images/xinshoubg-bg.png" alt="" /></view>
				</view>
				<h3>推广海报</h3>
				<view class="tghb-seventbox">
					<ul>
						<li>
							<view class="hbabq" @click="postersZM()">
								<img src="../../static/images/money_icon.png" alt="" />
								<view class="tghb-listmess">
									<span>招募合伙人</span>
									<em>邀请好友，马上有钱</em>
								</view>
							</view>
						</li>
						<li>
							<view class="hbabq" @click="postersTG(2)">
								<img src="../../static/images/phonse_icons.png" alt="" />
								<view class="tghb-listmess">
									<span>贷款推广</span>
									<em>贷款额度高，审批流程快</em>
								</view>
							</view>
						</li>
						<li>
							<view class="hbabq" @click="postersTG(1)">
								<img src="../../static/images/xinykse_icons.png" alt="" />
								<view class="tghb-listmess">
									<span>信用卡推广</span>
									<em>推广信用卡，单卡返现超百元</em>
								</view>
							</view>
						</li>
					</ul>
				</view>
			</view>
			<view class="gon-box" @click="attentionEwm(1)"><img src="../../static/images/gzh_icon.png" alt="关注公众号" /></view>
			<!--通用遮罩-->
			<view class="gzh-modelmask-box" v-show="options ? true : false" @click="attentionEwm(2)"></view>
			<!--关注公众号二维码弹窗-->
			<view class="gzh-model-box" :class="{ play: isActive1 ? true : false, implicit: isActive2 ? true : false }">
				<view class="head-model-box">
					<img src="../../static/images/sliderss_icon.png" alt="" />
					<img src="../../static/images/clear.png" alt="" class="close-btn" @click="attentionEwm(2)" />
				</view>
				<view class="ewm-model-box"><img @click="copy()" :src="gonzData.wx_qrcode" alt="" /></view>
				<view class="content-mess-box">
					<p>如何关注公众号</p>
					<view class="luce-box">
						<span>点击二维码复制公众号</span>
						>
						<span>微信公众号搜索</span>
						>
						<span>关注公众号</span>
					</view>
					<span>客服微信:{{ gonzData.qq_qh }}</span>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import api from '../../common/api/api.js';
export default {
	data() {
		return {
			//用户信息
			Theuser: [],
			//用户ID
			memberId: '',
			//报表数据
			Table: [],
			//公众号数据
			gonzData: [],
			//二维码
			options: false,
			isActive1: false,
			isActive2: false
		};
	},
	//监听页面加载
	onLoad() {
		uni.showLoading({
			title: '加载中'
		});
		this.pullData();
	},
	//下拉刷新
	onPullDownRefresh() {
		//初始化
		this.options = false;
		this.isActive1 = false;
		this.isActive2 = false;
		this.pullData();
		setTimeout(function() {
			//停止下拉刷新动画
			uni.stopPullDownRefresh();
		}, 1000);
	},
	methods: {
		//拉取用户数据
		pullData: function() {
			api.apiPost('/member/userinfo', '', '', 'get', (status, res) => {
				if (status) {
					this.Theuser = res.data;
					this.memberId = this.Theuser.member_id;
					this.TableData();
					this.WeChatData();
				} else {
					uni.showToast({
						title: '数据获取失败',
						icon: 'none',
						duration: 2000
					});
				}
			});
		},
		//拉取报表数据
		TableData: function() {
			api.apiPost('/agent/baobiao?member_id=' + this.memberId, '', '', 'get', (status, res) => {
				if (status) {
					this.Table = res.data;
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
		//拉取公众号数据
		WeChatData: function() {
			api.apiPost('/member/getgzh', '', '', 'get', (status, res) => {
				if (status) {
					this.gonzData = res.data;
				} else {
					uni.showToast({
						title: '数据获取失败',
						icon: 'none',
						duration: 2000
					});
				}
			});
		},
		//弹出二维码
		attentionEwm: function(value) {
			if (value == 1) {
				this.isActive2 = false;
				this.isActive1 = true;
				this.options = true;
			} else {
				this.isActive1 = false;
				this.isActive2 = true;
				this.options = false;
			}
		},
		copy: function() {
			//设置系统剪切板内容 ----仅兼容APP/小程序
			uni.setClipboardData({
				data: this.gonzData.wx_qrcode,
				success: function() {
					uni.showToast({
						title: '公众号复制成功',
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
			// let clipboard = new Clipboard('.btn-copys');
			// clipboard.on('success', function(e) {
			// 	uni.showToast({
			// 		title: '链接复制成功',
			// 		icon: 'none',
			// 		duration: 2000
			// 	});
			// });
			// clipboard.on('error', function(e) {
			// 	uni.showToast({
			// 		title: '复制失败',
			// 		icon: 'none',
			// 		duration: 2000
			// 	});
			// });
		},
		//推广海报
		postersTG: function(type) {
			uni.navigateTo({
				url: '/pages/personal/tgposters/tgposters?type=' + type
			});
		},
		//招募海报
		postersZM: function() {
			uni.navigateTo({
				url: '/pages/personal/zmposters/zmposters'
			});
		},
		//提现
		newaccount: function() {
			uni.navigateTo({
				url: '/pages/personal/newaccount/newaccount'
			});
		},
		//设置
		shezi: function() {
			uni.navigateTo({
				url: '/pages/personal/information/information'
			});
		},
		//消息
		xiox: function() {
			uni.navigateTo({
				url: '/pages/personal/message/message'
			});
		},
		//普升合伙人
		pshhr: function() {
			uni.navigateTo({
				url: '/pages/personal/vipcpl/vipcpl'
			});
		},
		//红包
		honb: function() {
			uni.navigateTo({
				url: '/pages/personal/envelope/envelope'
			});
		},
		//订单
		dind: function() {
			uni.navigateTo({
				url: '/pages/personal/khcolumn/khcolumn?type=' + '1'
			});
		},
		//团队
		tdyd: function() {
			uni.navigateTo({
				url: '/pages/personal/team/team'
			});
		},
		//客服
		kfu: function() {
			uni.navigateTo({
				url: '/pages/personal/service/service'
			});
		},
		//帮助
		bzxi: function() {
			uni.navigateTo({
				url: '/pages/personal/help/help'
			});
		},
		//新手指南
		xsznan: function() {
			uni.navigateTo({
				url: '/pages/personal/anovice/anovice'
			});
		}
	}
};
</script>

<style>
@import '../../common/css/newhome.css';
uni-navigator {
	display: inline;
}
.gzh-model-box {
	top: -200%;
}
.play {
	top: 50%;
	animation: play 0.5s;
	-moz-animation: play 0.5s; /* Firefox */
	-webkit-animation: play 0.5s; /* Safari 和 Chrome */
	-o-animation: play 0.5s;
}
@keyframes play {
	from {
		top: -200%;
	}
	to {
		top: 50%;
	}
}

@-moz-keyframes play /* Firefox */ {
	from {
		top: -200%;
	}
	to {
		top: 50%;
	}
}

@-webkit-keyframes play /* Safari 和 Chrome */ {
	from {
		top: -200%;
	}
	to {
		top: 50%;
	}
}

@-o-keyframes play /* Opera */ {
	from {
		top: -200%;
	}
	to {
		top: 50%;
	}
}
.implicit {
	top: -200%;
	animation: implicit 1s;
	-moz-animation: implicit 1s; /* Firefox */
	-webkit-animation: implicit 1s; /* Safari 和 Chrome */
	-o-animation: implicit 1s;
}
@keyframes implicit {
	from {
		top: 50%;
	}
	to {
		top: -200%;
	}
}

@-moz-keyframes implicit /* Firefox */ {
	from {
		top: 50%;
	}
	to {
		top: -200%;
	}
}

@-webkit-keyframes implicit /* Safari 和 Chrome */ {
	from {
		top: 50%;
	}
	to {
		top: -200%;
	}
}

@-o-keyframes implicit /* Opera */ {
	from {
		top: 50%;
	}
	to {
		top: -200%;
	}
}
</style>
