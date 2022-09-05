<template>
	<view class="content">
		<view class="red-packetbox">
			<view class="packet-banner"><img src="../../../static/images/hongbao-banner.png" alt="" /></view>
			<view class="header-packet"><span>每日任务</span></view>
			<view class="packet-listbox">
				<ul>
					<li>
						<view class="content-packet">
							<h2>
								招募合伙人
								<span>随机</span>
							</h2>
							<p>合伙人每成功邀请1名有效下级，都有0.1-1元随机红包奖励，上不封顶</p>
						</view>
						<view class="btn-packet"><view class="tesa" @click="postersZM()">去招募</view></view>
					</li>
					<li>
						<view class="content-packet">
							<h2>
								招募津贴
								<span>+88元</span>
							</h2>
							<p>
								4.1-4.30日，合伙人每邀请3名有效直属下级，该奖励可重复获得，推荐下级越多，奖金越高。并成功邀请客户完成指定产品（宜人贷，卡卡贷，房司令，爱又米，如期分期）的首次放款。
							</p>
						</view>
						<view class="btn-packet"><view class="tesa" @click="postersZM()">去招募</view></view>
					</li>
					<li>
						<view class="content-packet">
							<h2>
								裂变提携奖金
								<span>每单返佣6%</span>
							</h2>
							<p>直属下级放款成功您可以获得其佣金的6%。</p>
						</view>
						<view class="btn-packet"><view class="tesa" @click="postersZM()">去招募</view></view>
					</li>
					<li>
						<view class="content-packet">
							<h2>
								V4合伙人
								<span>500元管理津贴</span>
							</h2>
							<p>直推合伙人中，每1人达到V3级别合伙人就拿500元管理津贴（每名直推合伙人的管理津贴仅限领取一次，最高不超过1万元）</p>
						</view>
						<view class="btn-packet"><view class="tesa" @click="postersZM()">去招募</view></view>
					</li>
					<li>
						<view class="content-packet">
							<h2>
								V7合伙人
								<span>平级返佣</span>
							</h2>
							<p>团队合伙人中有合伙人达到 V7级别，上级 V7 合伙人就拿【V7合伙人的团队奖励 × 1%】平级津贴</p>
						</view>
						<view class="btn-packet"><view class="tesa" @click="postersZM()">去招募</view></view>
					</li>
				</ul>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			taskData: []
		};
	},
	methods: {
		//招募海报
		postersZM: function() {
			uni.navigateTo({
				url: '/pages/personal/zmposters/zmposters'
			});
		}
	}
};
</script>

<style>
.packet-banner img {
	width: 100%;
	height: 320upx;
	display: inline-block;
	vertical-align: top;
}
.header-packet span {
	display: block;
	height: 46px;
	line-height: 46px;
	font-size: 3.5vw;
	padding: 0 30px;
	position: relative;
}
.header-packet span:after {
	content: '';
	width: 4px;
	height: 4vw;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 15px;
	background-color: #ff8149;
	margin: auto 0;
	border-radius: 100px;
}
.packet-listbox ul li {
	background-color: #fff;
	box-shadow: 0 0 10px #f1f4f8;
	-webkit-box-shadow: 0 0 10px #f1f4f8;
	margin: 0 20px;
	margin-bottom: 20px;
	border-radius: 6px;
	padding: 10px;
	display: flex;
	display: -webkit-flex;
	display: -ms-flexbox;
}
.packet-listbox ul li h2 {
	margin: 0;
	font-size: 4vw;
	font-weight: 500;
	line-height: 20px;
}
.packet-listbox ul li h2 span {
	font-weight: 400;
	font-size: 3.4vw;
	display: inline-block;
	vertical-align: top;
	line-height: 16px;
	margin: 0 6px;
	color: #ff8149;
	border: 1px solid #ff8149;
	padding: 1px 6px;
	border-radius: 100px;
}
.packet-listbox ul li .content-packet {
	flex: 1;
	-ms-flex: 1;
	-webkit-flex: 1;
}
.packet-listbox ul li .content-packet p {
	color: #9ba4b8;
	font-size: 12px;
	padding-top: 10px;
}
.packet-listbox ul li .btn-packet {
	width: 30vw;
	padding-left: 10px;
	position: relative;
}
.packet-listbox ul li .btn-packet .tesa {
	background-color: #ff8149;
	color: #fff;
	border-radius: 100px;
	line-height: 8vw;
	height: 8vw;
	width: 24vw;
	display: block;
	text-align: center;
	font-size: 3.6vw;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	margin: auto;
}
</style>
