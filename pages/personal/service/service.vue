<template>
	<view class="tonybj">
		<view class="contact-box">
			<view class="top-contact">
				<h2>我的专属客服</h2>
				<view class="kefu-content">
					<view class="kefu-mess">
						<img :src="serviceData.member_avatar" class="header" alt="" />
						<view class="kefu-name">
							<span>{{ serviceData.member_name }}</span>
							<img src="../../../static/images/dengji-icons.png" alt="" />
						</view>
						<view class="contact-way">
							<view class="telphone antm" @click="dialDH()"></view>
							<view class="wxicon antm" id="wxicon"  @click="copy()"></view>
						</view>
					</view>
					<p>专属客服会详细解答您的问题，快和他联系吧</p>
				</view>
				<h2>官方客服</h2>
				<view class="ewm-contact">
					<view class="gztime">
						<p>请添加官方客服微信：</p>
						<p>客服工作时间每天9:00~18:00</p>
					</view>
					<view class="ewm" :data-clipboard-text="serviceData.member_wx" @click="copy()"><img :src="codeData" alt="" /></view>
					<view class="biaozhu">
						<span>官方客服微信二维码</span>
						<p>可点击上方二维码添加官方客服微信</p>
					</view>
				</view>
			</view>
			<!--弹出提示-->
			<view class="marsk-boxkefu">
				<view class="kefimodel">
					<span>微信号：{{ serviceData.member_wx }}</span>
					<p>号码已复制,可直接去微信中搜索</p>
					<button type="button" id="suremd" class="suremd">确定</button>
				</view>
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
			//客服数据
			serviceData: [],
			//二维码
			codeData: ''
		};
	},
	//监听页面加载
	onLoad() {
		this.pullData();
	},
	methods: {
		//获取数据
		pullData: function() {
			api.apiPost('/member/minekefu', '', '', 'get', (status, res) => {
				if (status) {
					this.serviceData = res.data.mine;
					this.codeData = res.data.DBK;
				} else {
					uni.showToast({
						title: '数据获取失败',
						icon: 'none',
						duration: 2000
					});
				}
			});
		},
		//APP拨打电话
		dialDH: function() {
			var phone = this.serviceData.member_mobile
			uni.makePhoneCall({
				phoneNumber: phone
			});
		},
		//复制微信号
		copy: function() {
			//设置系统剪切板内容 ----仅兼容APP/小程序
			uni.setClipboardData({
				data: this.serviceData.member_wx,
				success: function() {
					uni.showToast({
						title: '微信号复制成功',
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
			// 			let clipboard = new Clipboard('.ewm');
			// 			clipboard.on('success', function(e) {
			// 				uni.showToast({
			// 					title: '微信号复制成功',
			// 					icon:'none',
			// 					duration: 2000
			// 				});
			// 			});
			//
			// 			clipboard.on('error', function(e) {
			// 				uni.showToast({
			// 					title: '复制失败',
			// 					icon:'none',
			// 					duration: 2000
			// 				});
			// 			});
		}
	}
};
</script>

<style>
.contact-box {
	padding: 0 15px;
}
.contact-box h2 {
	font-weight: 500;
	color: #404751;
	padding: 20px 0 15px;
	margin: 0;
	font-size: 17px;
}
.kefu-content {
	background-color: #fff;
	border-radius: 6px;
	padding: 15px;
	box-shadow: 2px 4px 30px #ccc;
	-webkit-box-shadow: 2px 4px 30px #ccc;
}
.kefu-content p {
	text-align: center;
	color: #98a7b8;
	padding-top: 20px;
}
.kefu-content .kefu-mess {
	display: flex;
	display: -webkit-flex;
	display: -ms-flexbox;
}
.kefu-content .kefu-mess .header {
	width: 14vw;
	height: 14vw;
	border-radius: 50%;
}
.kefu-name {
	padding-left: 10px;
}
.kefu-name span {
	display: block;
	font-size: 4vw;
	line-height: 7.5vw;
}
.kefu-name img {
	width: 168upx;
	height: 48upx;
}
.contact-way {
	flex: 1;
	-webkit-flex: 1;
	-ms-flex: 1;
}
.contact-way .antm {
	width: 12vw;
	height: 12vw;
	border-radius: 50%;
	display: inline-block;
	float: right;
	margin: 1vw 10px;
}
.contact-way .wxicon {
	background: url(~@/static/images/wx-icons.png) no-repeat left top;
	background-size: 100% 100%;
}
.contact-way .telphone {
	background: url(~@/static/images/tel-phoneicon.png) no-repeat left top;
	background-size: 100% 100%;
}
.ewm-contact {
	text-align: center;
}
.ewm-contact {
	background-color: #fff;
	border-radius: 6px;
	padding: 18px 0;
	font-size: 3.5vw;
	color: #404751;
	box-shadow: 2px 4px 30px #ccc;
	-webkit-box-shadow: 2px 4px 30px #ccc;
}
.ewm-contact .gztime {
	padding-bottom: 20px;
}
.ewm-contact .biaozhu {
	padding-top: 20px;
}
.ewm-contact .ewm img {
	width: 430upx;
	height: 430upx;
}
.ewm-contact p {
	line-height: 24px;
}
.biaozhu span {
	color: #98a7b8;
	line-height: 24px;
}
.marsk-boxkefu {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.8);
	display: none;
}
.kefimodel {
	background-color: #fff;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	-webkit-transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
	-moz-transform: translate(-50%, -50%);
	padding: 8vw 10vw;
	text-align: center;
	border-style: none;
	border-radius: 10px;
}
.kefimodel span {
	padding-bottom: 6px;
	display: inline-block;
	font-size: 4vw;
	font-weight: 500;
}
.kefimodel p {
	white-space: nowrap;
	color: #98a7b8;
	font-size: 4vw;
}
.kefimodel button {
	margin-top: 26px;
	width: 88%;
	line-height: 38px;
	background-color: #38a3ff;
	color: #fff;
	border-style: none;
	border-radius: 4px;
	font-size: 4vw;
	outline: none;
}
</style>
