<template>
	<view class="tonybj">
		<view class="state-sel"></view>
		<view class="db-box">
			<!--轮播图-->
			<view class="swiper-container">
				<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="4000" :duration="500">
					<swiper-item v-for="(item, key) in banner" :key="key">
						<view class="swiper-item uni-bg-red"><img class="swiper-img" :src="item.ad_content" alt="" /></view>
					</swiper-item>
				</swiper>
			</view>
			<!-- 功能slider入口 -->
			<view class="news-bossxe-box">
				<ul style="margin-bottom: 0px;">
					<li>
						<view class="dtabq" @click="gtgl()">
							<img src="../../static/images/rmdk_icon_s.png" alt="" />
							<span>高通过率</span>
						</view>
					</li>
					<li>
						<view class="dtabq" @click="sdfk()">
							<img src="../../static/images/sdfkl_icon.png" alt="" />
							<span>闪电放款</span>
						</view>
					</li>
					<li>
						<view class="dtabq" @click="bxyk()">
							<img src="../../static/images/jsbkl_icon_s.png" alt="" />
							<span>办信用卡</span>
						</view>
					</li>
					<li>
						<view class="dtabq" @click="jfyh()">
							<img src="../../static/images/integral_icons.png" alt="" />
							<span>积分兑换</span>
						</view>
					</li>
				</ul>
			</view>

			<!--公告栏-->
			<view class="new wdslider">
				<img src="../../static/images/jrkb_icon_s.png" alt="" />
				<view>
					<swiper class="xuanc-lm" :indicator-dots="false" :autoplay="true" :interval="4000" :duration="500" :vertical="true">
						<swiper-item v-for="(item, key) in info" :key="key">
							<view class="li-xc" @click="news(item.id)">{{ item.title }}</view>
						</swiper-item>
					</swiper>
				</view>
			</view>

			<view class="borrowers-box">
				<p class="title-borr">已经放款人数</p>
				<view class="strong-borrowers">
					<b id="borrowers">{{ endNum }}</b>
				</view>
				<view class="loan-amount">
					<ul>
						<li>
							<span class="tmspan1">放款总额</span>
							{{ lendingZe }}
							<span>万元</span>
						</li>
						<li>
							<span class="tmspan2">佣金收益</span>
							{{ wageFF }}
							<span>万元</span>
						</li>
					</ul>
				</view>
				<view class="btn-know"><view class="hualda" @click="zqzn()">1分钟了解赚钱指南</view></view>
			</view>

			<view class="guess-like-box">
				<view class="guess-title"><span>热门产品</span></view>
				<view class="guess-tap">
					<span :class="{ active: isActive ? true : false }" @click="optionsTBA(1)">急速贷款</span>
					<span :class="{ active: isActive ? false : true }" @click="optionsTBA(2)">办信用卡</span>
				</view>
				<view class="moken-box">
					<view class="recommend-loan-box ul-pad left-loan" v-show="options ? true : false">
						<ul>
							<li v-for="(item, key) in theloan" :key="item.ag_id">
								<view class="canpbg" @click="productQuery(item.ag_id)">
									<view class="recommend-loanhead-box">
										<img :src="item.ag_img" alt="" />
										<span>{{ item.ag_name }}</span>
										<span class="bq-xt" v-for="(sign, index) in item.ag_tab" :key="index">{{ item.ag_tab[index] }}</span>
									</view>
									<view class="recommend-loanlist-box">
										<view class="loanlist-box monneyloan-box">
											<h2>{{ unitData1[key].years }}-{{ unitData1[key].month }}</h2>
											<span>额度范围(元)</span>
										</view>
										<view class="loanlist-box messloan-box">
											<h4>期限{{ item.ag_dkqx[0] }}-{{ item.ag_dkqx[1] }}月</h4>
											<span>{{ item.ag_refund_time }}</span>
										</view>
										<button href="" class="btn-shenq">立即申请</button>
									</view>
								</view>
							</li>
							<view class="more-btn"><view class="jsldta" @click="gddk()">更多</view></view>
						</ul>
					</view>

					<view class="rkph-ul-box ul-pad right-loan" v-show="options ? false : true">
						<view v-for="item in credit" :key="item.ag_id">
							<view class="rkph-li-box" @click="creditQuery(item.ag_id)">
								<view class="rkph-li-box-img"><img :src="item.ag_img" /></view>
								<view class="rkph-ms-box">
									<p class="tl-xts">{{ item.ag_name }}</p>
									<span class="ms-xt">
										<span class="contens">{{ item.ag_introduce }}</span>
										<em>{{ item.fk_num }}<!-- 万 -->人申请</em>
									</span>
									<view class="bq-box">
										<span class="bq-xt" v-for="(sign, index) in item.ag_tab" :key="index">{{ item.ag_tab[index] }}</span>
									</view>
								</view>
							</view>
						</view>

						<view class="more-btn"><view class="jsldta" @click="gdxyk()">更多</view></view>
					</view>
				</view>
			</view>

			<view class="guess-like-box">
				<view class="guess-title" style="border-bottom: 1px solid #f1f4f8"><span>新品上架</span></view>
				<view class="recommend-loan-box" style="margin-bottom: 15px">
					<ul>
						<li v-for="(item, key) in newproduct" :key="item.ag_id">
							<view class="canpbg" @click="productQuery(item.ag_id)">
								<view class="recommend-loanhead-box">
									<img :src="item.ag_img" alt="" />
									<span>{{ item.ag_name }}</span>
									<span class="bq-xt" v-for="(sign, index) in item.ag_tab" :key="index">{{ item.ag_tab[index] }}</span>
								</view>
								<view class="recommend-loanlist-box">
									<view class="loanlist-box monneyloan-box">
										<h2>{{ unitData2[key].years }}-{{ unitData2[key].month }}</h2>
										<span>额度范围(元)</span>
									</view>
									<view class="loanlist-box messloan-box">
										<h4>期限{{ item.ag_dkqx[0] }}-{{ item.ag_dkqx[1] }}月</h4>
										<span>{{ item.ag_refund_time }}</span>
									</view>
									<button href="" class="btn-shenq">立即申请</button>
								</view>
							</view>
						</li>

						<view class="more-btn"><view class="jsldta" @click="gddk()">更多</view></view>
					</ul>
				</view>
			</view>

			<!--<view class="guess-like-box" style="margin-bottom: 60px">
				<view class="guess-title"><span>今日头条</span></view>
				<view class="activity-ul-box">
					<view v-for="item in headlines" :key="item.ag_id">
						<view class="activity-li-box">
							<view class="activity-tl-box">
								<span>{{ item.describe }}</span>
								<span>{{ item.time }}</span>
							</view>
							<view class="activity-img-box"><img src="../../static/images/9.png" /></view>
						</view>
					</view>
					<view class="more-btn" style="border-top: 1px solid #f1f4f8"><a href="消息（1.6代呗客）.html">更多</a></view>
				</view>
			</view>-->

			<!--是否开通会员弹窗-->
			<!--<view class="layout" style="text-align:center; display: none;" id="layout">
				<view class="layer-buy">
					<img src="/../../static/images/layerbuy.png" alt="">
					<p>没有权限查看？您未开通代理资格！点击确定即可购买开通！</p>
					<view>
						<a href="javascript:;" id="close">取消</a>
						<a href="">确定</a>
					</view>
				</view>
			</view>-->

			<!--新消息弹窗-->
			<!-- <view class="mask-box">
				<view class="news-models-box">
					<view class="banner-newsinform-box"><img src="../../static/images/infomations-slider.png" alt="" /></view>
					<view class="newsinform-mess-box">
						<h2>【闪电回收】 下架通知</h2>
						<span>应官方要求，由于【闪电回收】业务调整，故 通知对其下架。对于刚上线未满24小时，平台 十分抱歉！！！</span>
					</view>
					<view class="btn-newsinform">
						<a href="">查看详情</a>
						<button type="button">不再提醒</button>
					</view>
					<img src="../../static/images/closenes-icon.png" class="close-newsinform-btn" id="clos-btn" alt="" />
				</view>
			</view> -->

			<!--新手指南弹窗-->
			<!-- <view class="newMask-box" style="display: none;">
				<view class="model-newszn-box">
					<view class="">
						<img src="../../static/images/close_icon.png" alt="" class="close-mg" />
						<img src="../../static/images/pop.png" alt="" class="haib-mg" />
					</view>
					<a href="" class="btn-newsz">立刻了解</a>
				</view>
			</view> -->
		</view>
	</view>
</template>

<script>
import api from '../../common/api/api.js';
export default {
	data() {
		return {
			//banner轮播图
			banner: [],
			//轮播获奖用户
			info: [],
			//急速贷款
			theloan: [],
			//办信用卡
			credit: [],
			//新品上架
			newproduct: [],
			//今日头条
			headlines: [],
			//单位数据1
			unitData1: [],
			//单位数据2
			unitData2: [],
			//TBA
			options: true,
			isActive: true,
			//请求数据当前人数每次请求都更新
			endNum: 0,
			startNum: 0,
			numberRs: 0,
			//放款总额
			lendingZe: 0,
			//发放工资
			wageFF: 0,
			//金额方法长度判断
			lengthData1: 10,
			lengthData2: 10
		};
	},
	//监听页面加载
	onLoad() {
		uni.showLoading({
			title: '加载中'
		});
		this.pullData();
		//var _this = this;
		//数字变动
		// setInterval(function() {
		// 	_this.numRunFun(_this.startNum, _this.endNum);
		// }, 8000);
	},
	//下拉刷新
	onPullDownRefresh() {
		//初始化
		this.options = true;
		this.isActive = true;
		this.pullData();
		setTimeout(function() {
			//停止下拉刷新动画
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
				this.options = false;
				this.isActive = false;
			}
		},
		//拉取数据
		pullData: function() {
			api.apiPost('/agent/newagentindex', '', '', 'get', (status, res) => {
				if (status) {
					//banner轮播图
					this.banner = res.data.banner;
					//今日快报
					this.info = res.data.notice;
					//急速贷款
					this.theloan = res.data.loan.slice(0, 10);
					//办信用卡
					this.credit = res.data.bank.slice(0, 10);
					//新品上架
					this.newproduct = res.data.newProduct.slice(0, 10);
					//放款人数
					this.endNum = res.data.refund_info.refund_population;
					//数字动画-放款人数
					//this.numRunFun(this.startNum, this.endNum);
					//四舍五入取整-放款总额-发放工资
					var fkze = Math.round(res.data.refund_info.refund_rental);
					var ffgz = Math.round(res.data.refund_info.refund_brokerage);
					//转为字符串-放款总额-发放工资
					var fkze = fkze.toString();
					var fkze = fkze.slice(0, -2);
					var ffgz = ffgz.toString();
					var ffgz = ffgz.slice(0, -2);
					//计算位置-放款总额-发放工资
					var location1 = parseInt(fkze.length);
					var location2 = parseInt(ffgz.length);
					var location1 = location1 - 2;
					var location2 = location2 - 2;
					//设置数据-放款总额-发放工资
					this.lendingZe = fkze.slice(0, location1) + '.' + fkze.slice(location1);
					this.wageFF = ffgz.slice(0, location2) + '.' + ffgz.slice(location2);
					//金额长度判断
					if (this.theloan.length >= 10) {
						this.lengthData1 = 10;
					} else {
						this.lengthData1 = this.theloan.length;
					}
					if (this.newproduct.length >= 10) {
						this.lengthData2 = 10;
					} else {
						this.lengthData2 = this.newproduct.length;
					}
					//金额计算
					this.jinJe();
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
		//首页数字动画效果
		numRunFun: function(num, maxNum) {
			var _this = this;
			var numText = parseInt(num);
			var golb; // 为了清除requestAnimationFrame
			var numSlideFun = function() {
				maxNum - num < 1500 ? (numText += maxNum - num < 10 ? 1 : parseInt((maxNum - num) / 10)) : (numText += parseInt((maxNum - num) / 100));
				// 速度的计算可以为小数
				numText >= maxNum
					? (function() {
							numText = maxNum;
							cancelAnimationFrame(golb);
					  })()
					: (golb = requestAnimationFrame(numSlideFun));
				// ：(golb = setTimeout(function() {
				// numSlideFun;
				// }, 100));
				//设置人数数据
				_this.numberRs = numText;
			};
			var random = parseInt(Math.random() * 10);
			this.startNum = this.endNum;
			this.endNum += random;
			numSlideFun();
		},
		//金额计算
		jinJe: function() {
			this.unitData1 = [];
			this.unitData2 = [];
			var temporary;
			//遍历拆分金额1
			for (var i = 0; i < this.lengthData1; i++) {
				var stra = new Array();
				stra = this.theloan[i].ag_dkfw;
				//var arr = stra.split('-');
				if (stra[1].length >= 5) {
					temporary = stra[1].slice(0, -4) + '万';
				} else {
					temporary = stra[1];
				}
				var jin = {
					years: stra[0],
					month: temporary
				};
				this.unitData1 = this.unitData1.concat(jin);
			}
			//遍历拆分金额2
			for (var x = 0; x < this.lengthData2; x++) {
				var strb = new Array();
				strb = this.newproduct[x].ag_dkfw;
				if (strb[1].length >= 5) {
					temporary = strb[1].slice(0, -4) + '万';
				} else {
					temporary = strb[1];
				}
				var jin = {
					years: strb[0],
					month: temporary
				};
				this.unitData2 = this.unitData2.concat(jin);
			}
		},
		//今日快报-新闻文章详情
		news: function(id) {
			uni.navigateTo({
				url: '/pages/found/news/news?id=' + id
			});
		},
		//高通过率
		gtgl: function(id) {
			uni.navigateTo({
				url: '/pages/through/through'
			});
		},
		//闪电放款
		sdfk: function(id) {
			uni.navigateTo({
				url: '/pages/lending/lending'
			});
		},
		//办信用卡
		bxyk: function(id) {
			uni.navigateTo({
				url: '/pages/card/card'
			});
		},
		//积分兑换
		jfyh: function(id) {
			uni.navigateTo({
				url: '/pages/integral/integral'
			});
		},
		//赚钱指南
		zqzn: function(id) {
			uni.navigateTo({
				url: '/pages/promote/promote'
			});
		},
		//更多贷款
		gddk: function(id) {
			uni.navigateTo({
				url: '/pages/theloan/theloan'
			});
		},
		//更多信用卡
		gdxyk: function(id) {
			uni.navigateTo({
				url: '/pages/lending/lending'
			});
		},
		//产品详细页
		productQuery: function(id) {
			uni.navigateTo({
				url: '/pages/details/details?id=' + id
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
.swiper-img {
	width: 100%;
	height: 300upx;
}
</style>
