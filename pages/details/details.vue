<template>
	<view class="tonybj">
		<view class="product-banner-box">
			<view class="banner-top-box">
				<!-- 产品信息图  当产品不是信用卡是不显示  -->
				<view class="banner-lf-box">
					<img :src="product.ag_img" />
					<span>{{ product.ag_name }}</span>
				</view>
				<view class="banner-center-box">
					<span class="mon-xt">{{ highest }}</span>
					<span>最高额度</span>
				</view>
				<view class="banner-rg-box">
					<span>· 期限范围：{{ product.ag_dkqx }}期</span>
					<span>· 月利率：{{ product.ag_zdrll }}%</span>
					<span>· 通过率：{{ product.ag_xcx_passrate }}%</span>
				</view>
			</view>
			<view class="banner-bottom-box">
				<span class="product-name">{{ product.ag_name }}</span>
				<span class="product-people">{{ product.fknum }}人</span>
				<span class="product-fcxt">已成功放款</span>
				<view class="product-phnumber-box"><span>信用卡</span></view>
			</view>
		</view>
		<!--第二版贷款利息信息区-->
		<view class="record-head-box" style="margin-top: 0;padding: 0 15%;border-bottom: 1px solid #f1f4f8;">
			<span :class="{ active: isActive ? true : false }" @click="optionsTBA(1)">
				<a>产品介绍</a>
				<span></span>
			</span>
			<span :class="{ active: isActive ? false : true }" @click="optionsTBA(2)">
				<a>奖金结算</a>
				<span></span>
			</span>
		</view>
		<view class="tab-opt-box" id="product-mess" v-show="options ? true : false">
			<view class="pd-mdl-bx">
				<view class="pd-dc-box">
					<!--详细信息金额显示区-->
					<view class="pd-dc-ms">
						<span>贷款利息小助手</span>
						<view class="pd-dc-jeqx">
							<view class="pd-dc-monney">
								<view class="pd-dc-sp">金额</view>
								<input type="text" v-model="highestData" @blur="moneyData()" />
								<view class="pd-dc-monad">元</view>
							</view>
							<view class="pd-dc-timer">
								<view class="pd-dc-sp">期限</view>
								<!-- <select id="select" dir="rtl" v-model="monthData" @change="limitData()">
									<option :value="item.month" v-for="(item, key) in limit" :key="key">{{ item.month }}个月</option>
								</select> -->
								<picker class="tsdxg" mode="selector" @change="limitData" :range="limit">
									<view>{{ monthData }}个月</view>
								</picker>
								<view class="pd-dc-monad"><img src="../../static/images/jt2.png" alt="" /></view>
							</view>
						</view>
						<view class="pd-arl-mpm">
							<view class="pd-mpm">
								<span>{{ calculateData.emTotal }}</span>
								<p>
									<i class="month-box"></i>
									月付款(元)
								</p>
							</view>
							<view class="pd-arl">
								<span>{{ calculateData.lxTotal }}</span>
								<p>
									<i class="all-box"></i>
									总利息(元)
								</p>
							</view>
						</view>
					</view>
					<!--canvas图表区-->
					<view class="pd-canvas">
						<view class="rsnmt">
							<view id="main">
								<!--#ifdef H5 || MP-ALIPAY || MP-BAIDU || MP-TOUTIAO-->
								<canvas
									canvas-id="canvasRing"
									id="canvasRing"
									class="charts"
									:style="{
										width: cWidth * pixelRatio + 'px',
										height: cHeight * pixelRatio + 'px',
										transform: 'scale(' + 1 / pixelRatio + ')',
										'margin-left': (-cWidth * (pixelRatio - 1)) / 2 + 'px',
										'margin-top': (-cHeight * (pixelRatio - 1)) / 2 + 'px'
									}"
								></canvas>
								<!--#endif-->
								<!--#ifdef MP-WEIXIN || APP-PLUS -->
								<canvas
									canvas-id="canvasRing"
									id="canvasRing"
									class="charts"
									:style="{
										width: cWidth * pixelRatio + 'px',
										height: cHeight * pixelRatio + 'px',
										transform: 'scale(' + 1 / pixelRatio + ')',
										'margin-left': (-cWidth * (pixelRatio - 1)) / 2 + 'px',
										'margin-top': (-cHeight * (pixelRatio - 1)) / 2 + 'px'
									}"
								></canvas>
								<!--#endif-->
							</view>
						</view>
					</view>
				</view>
			</view>

			<!--申请条件-->
			<view class="pd-mdl-bx">
				<view class="pd-pb-title"><h2>申请条件</h2></view>
				<view class="pd-sqzy-st">{{ product.ag_sqtj }}</view>
			</view>

			<!--申请流程-->
			<view class="pd-mdl-bx">
				<view class="pd-pb-title"><h2>申请流程</h2></view>
				<view class="pd-sqlc">
					<ul class="pd-sqlc-img">
						<li><img src="../../static/images/ssz.png" alt="" /></li>
						<view class="pd-jt"><img src="../../static/images/jt.png" alt="" /></view>
						<li><img src="../../static/images/smsjh.png" alt="" /></li>
						<view class="pd-jt"><img src="../../static/images/jt.png" alt="" /></view>
						<li><img src="../../static/images/sl.png" alt="" /></li>
						<view class="pd-jt"><img src="../../static/images/jt.png" alt="" /></view>
						<li><img src="../../static/images/zyxx.png" alt="" /></li>
					</ul>
					<ul class="pd-sqlc-span">
						<li><p>身份证</p></li>
						<li><p>实名手机号</p></li>
						<li><p>学历</p></li>
						<li><p>职业信息</p></li>
					</ul>
				</view>
			</view>
			<!--商品评价  -->
			<!--<view class="dk-zs-box">
					<span class="tlchlider-xtr">商品评价</span>
					<view class="estimate-box">
						<img src="http://img.sh516.com/avatar/2018/03/15212120297556.jpg">
						<view class="estimate-ms-box">
							<span>唐老板叫小可爱</span>
							<span class="estimate-datext">2018-4-10</span>
							<span>太给力了,大爱这个平台</span>
						</view>
					</view>
					<a href="../评论页.html" class="estimate-xtall">共有1000条评论</a>
				</view>-->

			<!--同类产品-->
			<view class="sprmt-product-box">
				<view class="prdmt-tle-box"><view class="rmdkls">热门贷款</view></view>
				<view>
					<scroll-view scroll-x="true" class="scroll-view_H">
						<view class="scroll-slide" v-for="item in similar" :key="item.ag_id">
							<view class="list-li-box" @click="productQuery(item.ag_id)">
								<img :src="item.ag_img" alt="" />
								<p>{{ item.ag_name }}</p>
								<view class="bq-xtss">
									<span class="dds">{{ item.ag_tab }}</span>
								</view>
							</view>
						</view>
					</scroll-view>
				</view>
			</view>
		</view>

		<view class="tab-opt-box" id="dkp-bc" v-show="options ? false : true">
			<view class="dk-zs-box">
				<span class="tlchlider-xtr">奖金结算</span>
				<rich-text class="wxParse-ul" :nodes="JianData.ag_xcx_content"></rich-text>
			</view>
			<view class="dk-zs-box">
				<span class="tlchlider-xtr">奖金发放说明</span>
				<rich-text class="wxParse-ul" :nodes="JianData.ag_xcx_jjffsm"></rich-text>
			</view>

			<!--<view class="pretails-ms-box">
				<view class="caption-head-box">
					<span style="margin-top: 0">{{rankingDate}}英雄榜</span>
					<view class="veigt-box"><span></span></view>
				</view>-->
			<!--
				<view class="table" style="border-bottom: 15px solid #f1f4f8;">
					<view class="top-three">
						
						<view class="top-three-box two-box">
							<view>
								<img src="../../static/images/head_icons.png" />
								<i class="bq bq-two">2</i>
							</view>
							<span class="two-user-name">182***23232</span>
							<span class="top-three-monney">9万</span>
						</view>
					
						<view class="top-three-box one-box">
							<view>
								<img src="../../static/images/head_icons.png" class="two-image" />
								<i class="bq bq-one">1</i>
							</view>
							<span class="two-user-name">182***23232</span>
							<span class="top-three-monney">9万</span>
						</view>

						<view class="top-three-box three-box">
							<view>
								<img src="../../static/images/head_icons.png" />
								<i class="bq bq-three">3</i>
							</view>
							<span class="two-user-name">182***23232</span>
							<span class="top-three-monney">9万</span>
						</view>
					</view>-->

			<!--遍历列表  
					<view class="tr bg-g th" style="border-bottom: 1px solid #f1f4f8">
						<view class="td">名次</view>
						<view class="td head-user">头像</view>
						<view class="td">手机号码</view>
						<view class="td cl-th">放款金额(位)</view>
					</view>

					<view class="tr bg-g">
						<view class="td">4</view>
						<view class="td head-user img-us"><img src="../../static/images/head_icons.png" /></view>
						<view class="td">182***23232</view>
						<view class="td">8万</view>
					</view>
					<view class="tr bg-g">
						<view class="td">4</view>
						<view class="td head-user img-us"><img src="../../static/images/head_icons.png" /></view>
						<view class="td">182***23232</view>
						<view class="td">8万</view>
					</view>
				</view>
			</view>-->
			<view class="tianck"></view>
		</view>
		<view class="service-agency-box">
			<view class="btn-service" id="I_apply" @click="pleaseKG()"><view class="btn_span01">申请产品</view></view>
			<view class="btn-agency" @click="yaoqzq()"><view class="yaoqzq">邀请好友赚钱</view></view>
		</view>
	</view>
</template>

<script>
import api from '../../common/api/api.js';
//图表插件
import wxCharts from '../../common/wx-charts/wxcharts.js';

var _self;

export default {
	data() {
		return {
			//产品ID
			productID: '',
			//产品详细
			product: [],
			//最高额度
			highest: '',
			//计算-填写额度
			highestData: '',
			//同类推荐
			similar: [],
			//奖金结算数据
			JianData: [],
			//奖金结算
			bonus: 1,
			//奖金结算底部排行
			ranking: [],
			//期限
			limit: [],
			//期限名称
			limitMC: '',
			//期限-选择的月
			monthData: '',
			//排行时间
			rankingDate: '',
			//计算结果数据
			calculateData: [],
			//月数
			month: '',
			//总额
			money: '',
			//利率
			month_money: '',
			//TBA
			options: true,
			isActive: true,
			//图表参数
			cWidth: '',
			cHeight: '',
			pixelRatio: 1,
			Ring: { series: [{ data: 0 }, { data: 0 }, { data: 0 }, { data: 0 }] }
		};
	},
	//监听页面加载
	onLoad(option) {
		uni.showLoading({
			title: '加载中'
		});
		//获取到id
		this.productID = option.id;
		this.pullData();
		//图表需求1
		_self = this;
		//#ifdef H5 || MP-ALIPAY || MP-BAIDU || MP-TOUTIAO
		//获取系统信息 -
		uni.getSystemInfo({
			success: function(res) {
				if (res.pixelRatio > 1) {
					//正常这里给2就行，如果pixelRatio=3性能会降低一点
					_self.pixelRatio = 2;
				}
			}
		});
		//图表需求2
		//#endif
		this.cWidth = uni.upx2px(380);
		this.cHeight = uni.upx2px(400);
		// this.cWidth = 130;
		// this.cHeight = 170;
	},
	//下拉刷新
	onPullDownRefresh() {
		this.pullData();
		setTimeout(function() {
			uni.stopPullDownRefresh();
		}, 1000);
	},
	methods: {
		//热门产品TBA
		optionsTBA: function(value) {
			if (value == 1) {
				this.options = true;
				this.isActive = true;
			} else {
				//奖金结算
				this.bonusData();
				//奖金结算底部排行
				//this.rankingData();
				this.options = false;
				this.isActive = false;
			}
		},
		//拉取数据
		pullData: function() {
			api.apiPost('/agent/ag?id=' + this.productID, '', '', 'get', (status, res) => {
				if (status) {
					//产品数据
					this.product = res.data;
					//最高额度
					this.highest = res.data.ag_dkfw[1];
					//同类推荐
					this.similar = res.data.tj.slice(0, 5);
					//额度计算参数初始化
					this.highestData = res.data.ag_dkfw[1];
					//期限计算
					let str = res.data.ag_dkqx;
					let arr = str.split('-');
					let small = parseInt(arr[0]);
					let big = parseInt(arr[1]);
					for (small; small <= big; small++) {
						this.limit.push(small + '个月');
					}
					//期限值初始化
					this.monthData = 1;
					setTimeout(function() {
						//隐藏加载框
						uni.hideLoading();
					}, 300);
					//计算结果初始化
					this.interest();
				} else {
					uni.showToast({
						title: '数据获取失败',
						icon: 'none',
						duration: 2000
					});
				}
			});
		},
		//奖金结算
		bonusData: function() {
			if (this.bonus === 1) {
				uni.showLoading({
					title: '加载中'
				});
				this.bonus = 2;
				api.apiPost('/agent/agjiesuan?id=' + this.productID, '', '', 'get', (status, res) => {
					if (status) {
						this.JianData = res.data.agent;
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
		//奖金结算底部排行
		rankingData: function() {
			if (this.ranking == '') {
				api.apiPost('/agent/ranking?id=' + this.productID, '', '', 'get', (status, res) => {
					if (status) {
						this.ranking = res.data.listTop;
						//排行日期
						let str = res.data.month;
						let arr = str.split('-');
						this.rankingDate = arr[0] + '年' + arr[1] + '月';
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
		//选择期限
		limitData: function(event) {
			var qijz = event.target.value;
			this.monthData = parseInt(qijz) + 1;
			this.interest();
		},
		//填写金额
		moneyData: function() {
			if (this.highestData > this.highest) {
				this.highestData = this.highest;
				uni.showToast({
					title: '金额输入超过额度上限',
					icon: 'none',
					duration: 2000
				});
			} else {
				this.interest();
			}
		},
		//利息计算
		interest: function() {
			var data = {
				//月数
				month: this.monthData,
				//总额
				money: this.highestData,
				//利率
				month_money: this.product.ag_zdrll
			};
			var parameter = '?month=' + this.monthData + '&money=' + this.highestData + '&month_money=' + this.product.ag_zdrll;
			api.apiPost('/agent/debx', parameter, data, 'post', (status, res) => {
				if (status) {
					this.calculateData = res.data;
					//console.log('计算结果服务器返回：' + JSON.stringify(res.data));
					//图表总还款金额
					this.Ring.series[0].data = this.calculateData.hkTotal;
					//图表总利息
					this.Ring.series[3].data = this.calculateData.lxTotal;
					//调用图表数据初始化
					this.showRing('canvasRing', this.Ring, this.calculateData.hkTotal);
				} else {
					uni.showToast({
						title: '数据获取失败',
						icon: 'none',
						duration: 2000
					});
				}
			});
		},
		//产品详细页
		productQuery: function(value) {
			uni.navigateTo({
				url: '/pages/details/details?id=' + value
			});
		},
		//邀请好友赚钱
		yaoqzq: function() {
			uni.navigateTo({
				url: '/pages/exclusive/exclusive'
			});
		},
		//申请产品
		pleaseKG: function() {
			uni.navigateTo({
				url: '/pages/applyfor/applyfor?id=' + this.productID
			});
		},
		//图表方法
		showRing(canvasId, chartData, hkTotal) {
			new wxCharts({
				canvasId: canvasId,
				type: 'ring',
				fontSize: 11,
				legend: false,
				title: {
					name: '总还款金额(元)',
					color: '#666666',
					fontSize: 11 * _self.pixelRatio
				},
				subtitle: {
					name: hkTotal,
					color: '#555555',
					fontSize: 18 * _self.pixelRatio
				},
				extra: {
					ringWidth: 8 * _self.pixelRatio, //圆环的宽度
					pie: {
						offsetAngle: -45 //圆环的角度
					}
				},
				background: '#FFFFFF',
				pixelRatio: _self.pixelRatio,
				series: chartData.series,
				animation: true,
				width: _self.cWidth * _self.pixelRatio,
				height: _self.cHeight * _self.pixelRatio,
				disablePieStroke: true,
				dataLabel: false
			});
		}
	}
};
</script>

<style>
@import '../../common/css/ppd_home_dbk.css';
.pd-dc-jeqx {
	width: 340upx;
}
.yd_ul01 {
	padding: 15px;
}
.yd_ul01 li {
	padding-bottom: 10px;
	font-size: 16px;
}
.yd_h4 {
	margin-top: 12px;
	font-size: 19px;
}
.dk_span_01 {
	font-size: 14px;
	padding: 4px 10px;
	background: #e6f0ff;
	color: #3b87ff;
	width: 100%;
	display: inline-block;
	box-sizing: border-box;
	border-radius: 4px;
}
.dk_span_02 {
	color: #7c7c7c;
}
.dk_span_03 {
	color: #4d4c4c;
}
.ta_apply {
	width: 45%;
	float: left;
	background: #e6f0ff;
	border: 1px solid #3683ff;
	color: #3683ff;
	font-size: 15px;
	text-align: center;
	height: 34px;
	line-height: 34px;
	border-radius: 4px;
}
.queren_apply {
	width: 45%;
	float: right;
	background: #3683ff;
	color: #fff;
	font-size: 15px;
	text-align: center;
	height: 36px;
	line-height: 36px;
	border-radius: 4px;
}
.tianck {
	width: 100%;
	height: 50px;
	background-color: #f1f4f8;
}
.banner-xyk-box {
	margin: 0 5%;
}
.logo-xyk {
	width: 100%;
	border-radius: 5px;
}
.service-agency-box {
	z-index: 2;
}
.gzh-modelmask-box {
	z-index: 3;
}
.gzh-model-box {
	z-index: 4;
}
.scroll-view_H {
	height: 240px;
	white-space: nowrap;
}
.scroll-slide {
	display: inline-block;
	width: 150.417px;
	margin-right: 10px;
	height: 205px;
	padding-top: 10px;
}
.charts {
	width: 130upx;
	height: 200upx;
	background-color: #ffffff;
}
.pd-arl-mpm span {
	font-size: 16px;
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
