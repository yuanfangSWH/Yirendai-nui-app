<template>
	<view class="beijt">
		<view class="mytime-newbox">
			<view class="teambox">
				<view class="team-contentbox">
					<view class="header-teambox">
						<view class="check_lsbox"><view class="check_ls" @click="record()">查看历史</view></view>
						<view class="results-month">
							<strong>{{ teamData.month_yeji }}</strong>
							<span>本月总业绩(元)</span>
						</view>
						<view class="count-list-results">
							<ul>
								<li>
									<strong>{{ teamData.team_total_num }}</strong>
									<span>团队总数(个)</span>
								</li>
								<li>
									<strong>{{ teamData.team_total_num }}</strong>
									<span>团队总人数(人)</span>
								</li>
								<li>
									<strong>{{ teamData.yeji }}</strong>
									<span>个人业绩(元)</span>
								</li>
							</ul>
							<p class="td_p_01">*业绩仅与当月级别有关，与收入无关</p>
						</view>
					</view>
					<view class="peronal-listbox-team">
						<ul class="teams">
							<li v-for="(item, key) in theData" :key="key">
								<view class="personal-contentlistbox listref">
									<view class="personal-header">
										<img :src="item.member_avatar" class="avart" alt="" />
										<i class="dengji dj_00"></i>
									</view>
									<view class="personal_info">
										<view class="grades-box">
											<view class="personal-namebox">
												<span>{{ item.member_name }}</span>
												<em>{{ item.member_mobile }}</em>
											</view>
											<view class="wxdh_box">
												<a class="per_wx_a" href="javascript:;"></a>
												<a class="per_dh_a" :href="'tel:' + item.member_mobile"></a>
											</view>
										</view>
										<view>
											<span class="install-time">加入时间: {{ item.date }}</span>
											<view class="team-information" @click="opeN(item.member_id)">
												<em>
													团队详情
													<img src="../../../static/images/lansejt-icon.png" alt="" />
												</em>
											</view>
										</view>
									</view>
								</view>
								<view class="data-gradesbox sonbox" v-show="theZK[key].isShow" >
									<ul class="team-yj">
										<li>
											<span>团队人数(人)</span>
											<strong>{{theZK[key].team_people}}</strong>
										</li>
										<li>
											<span>本月订单(笔)</span>
											<strong>{{theZK[key].order_num}}</strong>
										</li>
										<li>
											<span>本月业绩(元)</span>
											<strong>{{theZK[key].month_yeji}}</strong>
										</li>
										<li>
											<span>总业绩(元)</span>
											<strong>{{theZK[key].total_yeji}}</strong>
										</li>
									</ul>
								</view>
							</li>
						</ul>
					</view>
				</view>
			</view>
			<!-- <view class="marsk-boxkefu">
				<view class="kefimodel">
					<view id="text_p"></view>
					<button type="button" id="suremd" class="suremd">确定</button>
				</view>
			</view> -->
		</view>
	</view>
</template>

<script>
import api from '../../../common/api/api.js';
export default {
	data() {
		return {
			//团队数据
			teamData: [],
			//下级对象
			theData: [],
			//对象展开
			theZK:[],
			//页数
			page: 1,
			//总页数
			pageCount: 1
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
		this.page = 1;
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
			api.apiPost('/member/myteam?page=' + this.page, '', '', 'get', (status, res) => {
				if (status) {
					//业绩数据
					this.teamData = res.data;
					//团队数据
					this.theData = res.data.sub_member;
					//总页数
					this.pageCount = res.page.pageCount;
					for (var i = 0; i < this.theData.length; i++) {
						this.theZK.push({ t_id: this.theData[i].member_id, team_people: '0', order_num: '0', month_yeji: '0', total_yeji: '0', isShow: false });
					}
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
		//加载
		loadingData: function() {
			this.page++;
			if (this.page > this.pageCount) {
				uni.showToast({
					title: '没有更多信息了',
					icon: 'none',
					duration: 2000
				});
			} else {
				api.apiPost('/member/myteam?page=' + this.page, '', '', 'get', (status, res) => {
					if (status) {
						this.messageData = [];
						//团队数据
						this.theData = this.theData.concat(res.data.sub_member);
						for (var i = 0; i < this.theData.length; i++) {
							this.theZK.push({ t_id: this.theData[i].member_id, team_people: '0', order_num: '0', month_yeji: '0', total_yeji: '0', isShow: false });
						}
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
		//历史记录
		record: function() {
			uni.navigateTo({
				url: '/pages/personal/record/record'
			});
		},
		//展开
		opeN: function(id) {
				//调用API
				api.apiPost('/member/teaminfo?i=' + id, '', '', 'get', (status, res) => {
					if (status) {
						for (var i = 0; i < this.theZK.length; i++) {
							if (this.theZK[i].t_id == id) {
								if (!this.theZK[i].isShow) {
									//团队人数
									this.theZK[i].team_people = res.data.team_people;
									//本月订单
									this.theZK[i].order_num = res.data.order_num;
									//本月业绩
									this.theZK[i].month_yeji = res.data.month_yeji;
									//总业绩
									this.theZK[i].total_yeji = res.data.total_yeji;
									this.theZK[i].isShow = true;
								} else {
									this.theZK[i].isShow = false;
								}
							}
						}
					} else {
						uni.showToast({
							title: '数据获取失败',
							icon: 'none',
							duration: 2000
						});
					}
				});
		}
	}
};
</script>

<style>
.beijt {
	background: url(~@/static/images/tdticheng-bg.png) no-repeat left top #f1f4f8;
	background-size: 100%;
}
.teambox {
	padding-top: 42vw;
}
.header-teambox {
	margin: 0 15px;
	border-radius: 6px;
	text-align: center;
	background: url(~@/static/images/flash-bg.png) no-repeat center center #fff;
	background-size: 68% 68%;
	margin-bottom: 26px;
	box-shadow: 0 2px 20px #ddd;
	-webkit-box-shadow: 0 2px 20px #ddd;
}
.header-teambox strong {
	color: #3a8ef7;
}
.results-month {
	padding: 1vw 0 7vw;
}
.results-month strong {
	display: block;
	font-size: 7vw;
}
.results-month span {
	color: #939eb0;
	font-size: 3.5vw;
}
.count-list-results ul {
	display: flex;
	padding-bottom: 3vw;
}
.count-list-results ul li {
	flex: 1;
}
.count-list-results ul li:nth-of-type(2) {
	border-left: 1px solid #f1f4f8;
	border-right: 1px solid #f1f4f8;
}
.count-list-results ul li span,
.count-list-results ul li strong {
	display: block;
}
.count-list-results ul li span {
	color: #939eb0;
	font-size: 3.2vw;
	padding-top: 6px;
	display: inline-block;
	vertical-align: top;
}
.count-list-results ul li span img {
	width: 4.8vw;
	display: inline-block;
	vertical-align: top;
}
.count-list-results ul li strong {
	font-size: 17px;
}
.peronal-listbox-team ul.teams li {
	margin: 0 15px 15px;
	background-color: #fff;
	border-radius: 6px;
	box-shadow: 0 2px 20px #ddd;
	-webkit-box-shadow: 0 2px 20px #ddd;
}
.personal-contentlistbox {
	border-bottom: 1px solid #f1f4f8;
	padding: 3.6vw;
	display: flex;
	display: -webkit-flex;
	display: -ms-flexbox;
}
.personal-namebox {
	width: 64%;
	display: inline-block;
}
.personal-namebox span {
	font-size: 15px;
}
.personal-namebox em {
	color: #98a7b8;
}
.personal-namebox span,
.personal-namebox em {
	display: block;
	line-height: 6.5vw;
	font-style: normal;
}
.personal-header img.avart {
	width: 13vw;
	height: 13vw;
	display: block;
	margin: 0 auto;
	border-radius: 100%;
}
.personal-header i.dengji {
	height: 5.8vw;
	width: 20vw;
	margin-top: 6px;
	display: inline-block;
}
i.dj_00 {
	background: url(~@/static/images/dj_00.png) no-repeat center center;
	background-size: auto 100%;
}
i.dj_01 {
	background: url(~@/static/images/dj_01.png) no-repeat center center;
	background-size: auto 100%;
}
i.dj_02 {
	background: url(~@/static/images/dj_02.png) no-repeat center center;
	background-size: auto 100%;
}
i.dj_03 {
	background: url(~@/static/images/dj_03.png) no-repeat center center;
	background-size: auto 100%;
}
i.dj_04 {
	background: url(~@/static/images/dj_04.png) no-repeat center center;
	background-size: auto 100%;
}
i.dj_05 {
	background: url(~@/static/images/dj_05.png) no-repeat center center;
	background-size: auto 100%;
}
i.dj_06 {
	background: url(~@/static/images/dj_06.png) no-repeat center center;
	background-size: auto 100%;
}
i.dj_07 {
	background: url(~@/static/images/dj_07.png) no-repeat center center;
	background-size: auto 100%;
}
.grades-box {
	padding-left: 10px;
	flex: 1;
	text-align: left;
}
.grades-box .install-time {
	padding-top: 10px;
	display: block;
	color: #98a7b8;
	font-size: 3.2vw;
	line-height: 3.2vw;
}
.team-information {
	padding-top: 0vw;
	margin-top: 3px;
	float: right;
}
.team-information em {
	text-align: right;
	font-style: normal;
	color: #2c8bfb;
	line-height: 3.2vw;
	font-size: 3.2vw;
	display: inline-block;
	vertical-align: top;
	position: relative;
	padding-right: 4vw;
}
.team-information em img {
	width: 28upx;
	height: 28upx;
	position: absolute;
	top: 50%;
	right: 0;
	transform: translateY(-50%) rotate(180deg);
	-webkit-transform: translateY(-50%) rotate(180deg);
	-ms-transform: translateY(-50%) rotate(180deg);
	-moz-transform: translateY(-50%) rotate(180deg);
}
.team-information em img.active {
	width: 3.2vw;
	position: absolute;
	top: 50%;
	right: 0;
	transform: translateY(-50%);
	-webkit-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
}
.peronal-listbox-team .data-gradesbox ul {
	text-align: left;
	text-align: center;
}
.peronal-listbox-team .data-gradesbox ul li {
	width: 40%;
	box-sizing: border-box;
	display: inline-block;
	margin: 0;
	font-size: 0;
	vertical-align: top;
	padding: 15px 0;
	box-shadow: none;
	-webkit-box-shadow: none;
}
.peronal-listbox-team .data-gradesbox ul li:nth-of-type(2n) {
	padding-left: 12vw;
}
.data-gradesbox ul li span {
	font-size: 12px;
	display: block;
	color: #98a7b8;
	text-align: left;
}
.data-gradesbox ul li strong {
	font-size: 16px;
	display: block;
	padding-top: 4px;
	text-align: left;
}
.check_lsbox {
	width: 100%;
	display: inline-block;
}
.check_ls {
	margin-top: 15px;
	margin-right: 15px;
	float: right;
	font-size: 12px;
	line-height: 14px;
	color: #2c8bfb;
	background: url(~@/static/images/blue-jt.png) no-repeat right center;
	height: 14px;
	background-size: auto 12px;
	padding-right: 12px;
}
.td_p_01 {
	font-size: 11px;
	color: #939eb0;
	width: 100%;
	text-align: center;
	padding-bottom: 4vw;
}
.personal_info {
	flex: 1;
}
.wxdh_box {
	width: 36%;
	display: inline-block;
	float: right;
}
.per_wx_a {
	width: 10vw;
	height: 10vw;
	background: url(~@/static/images/td_wx.png) no-repeat center center;
	background-size: 100% auto;
	display: inline-block;
}
.per_dh_a {
	width: 10vw;
	height: 10vw;
	background: url(~@/static/images/td_dh.png) no-repeat center center;
	background-size: 100% auto;
	display: inline-block;
	float: right;
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
