<template>
	<view>
		<view class="guess-like-box">
			<view class="slider-box"><img src="../../static/images/head-banner.png" alt="" /></view>
			<view class="tuijian-card-box" style="border-bottom: 14px solid #f1f4f8;">
				<view class="db-loans-title" style="border-style: none;">
					<img src="../../static/images/yhzx_icon.png" alt="" />
					<h2>推荐银行</h2>
				</view>
				<view class="tio-box">
					<view class="over-h">
						<ul>
							<li v-for="item in credit" :key="item.ag_id" @click="creditQuery(item.ag_id)">
								<view class="name-ovbox">
									<view class="icon-ov">
										<img :src="item.ag_img" alt="" />
										<span>{{ item.ag_name }}</span>
									</view>
									<view class="span-dv">
										<span>{{ item.ag_tab }}</span>
									</view>
									<view class="p-dv">
										<p>{{ item.ag_introduce }}</p>
									</view>
								</view>
								<view class="btn-jesj">
									<button class="butanni" type="button">奖金{{ item.ag_0fanyong }}元</button>
								</view>
							</li>
						</ul>
					</view>
				</view>
			</view>
		</view>

		<view class="rkph-ul-box ul-pad" style="padding-top: 0">
			<view class="db-loans-title">
				<img src="../../static/images/xyk.png" alt="" />
				<h2>热门信用卡</h2>
			</view>
			<view class="rkph-li-box" v-for="item in creditData.slice(0, 6)" :key="item.ag_id" @click="creditQuery(item.ag_id)">
				<img :src="item.ag_img" mode="widthFix" />
				<view class="rkph-ms-box">
					<p class="tl-xts">{{ item.ag_name }}</p>
					<span class="ms-xt">
						<span class="contens">{{ item.ag_introduce }}</span>
						<em>{{ item.ag_platform_fanyong }}万人申请</em>
					</span>
					<view class="bq-box">
						<span class="bq-xt">奖金{{ item.ag_0fanyong }}元</span>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import api from '../../common/api/api.js';
//linq插件
import Enumerable from '../../common/linq/linq.js';

export default {
	data() {
		return {
			//办信用卡
			credit: [],
			//热门信用卡
			creditData: []
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
		this.pullData();
		setTimeout(function() {
			//停止下拉刷新动画
			uni.stopPullDownRefresh();
		}, 1000);
	},
	methods: {
		//拉取数据
		pullData: function() {
			api.apiPost('/agent/agentindex', '', '', 'get', (status, res) => {
				if (status) {
					//办信用卡
					this.credit = res.data.bank.slice(0, 15);
					//热门信用卡。是否热门 1是0不是
					var value = Enumerable.from(res.data.bank)
						.where(function(i) {
							return i.ag_is_hot == 0;
						})
						.toArray();
					this.creditData = value;
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
		//信用卡详细页
		creditQuery: function(id) {
			uni.navigateTo({
				url: '/pages/creditxi/creditxi?id=' + id
			});
		}
	}
};
</script>

<style>
@import '../../common/css/newhome.css';
.tio-box > view.over-h {
	max-height: 130px;
	transition: 0.5s;
	-webkit-transition: 0.5s;
	-moz-transition: 0.5s;
	overflow: hidden;
}
.icon-bank.active {
	transform: rotate(-360deg);
	-webkit-transform: rotate(-360deg);
	-moz-transform: rotate(-360deg);
	-moz-transform: rotate(-360deg);
}
.tio-box > view.over-h {
	max-height: initial;
}
.over-h ul {
	text-align: left;
	font-size: 0;
	padding: 10px 0;
	width: 96%;
	margin: auto;
}
.over-h ul li {
	display: inline-block;
	width: 31.3%;
	font-size: 12px;
	border-style: none;
	box-sizing: border-box;
	float: none;
	overflow: hidden;
	margin: 0 1%;
	box-shadow: 0 0 12px #ebedf2;
	margin-bottom: 6px;
	border-radius: 2px;
	padding: 0;
}
.tio-box ul li:nth-of-type(2n-1):after {
	width: 0;
}
.icon-ov {
	padding: 6px 0 2px;
}
.name-ovbox {
	padding-bottom: 6px;
	border-bottom: 1px solid #f1f4f8;
	padding-top: 2px;
}
.over-h ul li .icon-ov {
	display: flex;
	justify-content: center;
}
.over-h ul li .icon-ov img {
	width: 4.6vw;
	height: 4.6vw;
	display: inline-block;
	vertical-align: middle;
	border-radius: 6px;
}
.over-h ul li .icon-ov span {
	font-size: 15px;
	display: inline-block;
	vertical-align: middle;
	font-weight: 600;
	padding-left: 4px;
	line-height: 4.6vw;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	color: #060606;
}
.btn-jesj,
.span-dv,
.p-dv {
	text-align: center;
}
.span-dv {
	margin-top: 4px;
	font-size: 0;
}
.span-dv span {
	border-radius: 1px;
	font-size: 11px;
	background-color: #d2ecfd;
	color: #5695f5;
	padding: 0 4px;
	line-height: 18px;
	margin: 0 2px;
	max-width: 50px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.p-dv {
	font-size: 11px;
	color: #a2adc0;
	margin: 4px 4px;
	height: 30px;
	font-weight: 500;
}
.p-dv p {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.btn-jesj {
	margin: 8px 4px;
	background: -webkit-linear-gradient(left, #ff6541, #ff9639); /* Safari 5.1 - 6.0 */
	background: -o-linear-gradient(right, #ff6541, #ff9639); /* Opera 11.1 - 12.0 */
	background: -moz-linear-gradient(right, #ff6541, #ff9639); /* Firefox 3.6 - 15 */
	background: linear-gradient(to right, #ff6541, #ff9639); /* 标准的语法 */
	box-shadow: 0px 1px 5px 1px #ffdfd8;
	border-radius: 100px;
}
.btn-jesj button {
	border-style: none;
	color: #fff;
	width: 100%;
	font-size: 3.2vw;
	padding: 4px 0;
	background: url(~@/static/images/jt-baise.png) no-repeat right center;
	background-size: 6vw;
}
/*贷款产品样式区*/
.db-product-box {
	border-top: 15px solid #f1f4f8;
}
.db-loans-title {
	height: 20px;
	padding: 15px 15px;
	border-bottom: 1px solid #f1f4f8;
	position: relative;
}
.db-loans-title img {
	width: 30upx;
	height: 30upx;
	position: absolute;
	left: 12px;
	top: 50%;
	transform: translateY(-50%);
	-webkit-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
}
.db-loans-title h2 {
	display: block;
	line-height: 20px;
	font-size: 15px;
	font-weight: 400;
	float: left;
	margin-left: 22px;
}
.db-loans-title span {
	display: block;
	font-size: 12px;
	color: #a6b4c7;
	line-height: 20px;
}
.db-loans-list ul {
	display: flex;
	display: -webkit-flex;
	flex-wrap: wrap;
	-webkit-flex-wrap: wrap;
}
.db-loans-list a {
	display: block;
	line-height: normal;
	color: #000;
}
.db-loans-list ul li {
	margin: 25px 0;
	width: 32.33%;
	text-align: center;
	position: relative;
	border-right: 1px solid #eee;
}
.db-loans-list ul li:nth-of-type(3n) {
	border-right: none;
}
.butanni {
	line-height: 20px;
	height: 20px;
	box-sizing: content-box;
}
</style>
