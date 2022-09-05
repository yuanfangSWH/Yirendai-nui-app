<template>
	<view>
		<view class="income-record-box">
			<view class="income-meyx">
				<ul>
					<li>
						<span>累计收入(元)</span>
						<strong>{{ Table.lj == 0 ? '0.00 ' : Table.lj }}</strong>
					</li>
					<li>
						<span>可提现(元)</span>
						<strong>{{ Table.member_dl_money == 0 ? '0.00 ' : Table.member_dl_money }}</strong>
					</li>
				</ul>
			</view>
			<view class="income-tabps">
				<span :class="{ active: isActive == 1 }" @click="optionsTBA(1)">收入</span>
				<span :class="{ active: isActive == 2 }" @click="optionsTBA(2)">提现</span>
				<view class="date-scon" @click="chooseDate()"></view>
			</view>
			<view class="record-ul" id="income" style="padding-bottom: 65px;" v-show="options ? true : false">
				<view class="record-li" v-for="(item, key) in incomeData" :key="key">
					<view class="prd-timer-box">
						<img :src="item.img" />
						<span class="head-tl-xt">{{ item.nickname }}</span>
						<span class="rg-xt">订单ID： {{ item.orderid }}</span>
					</view>
					<view class="prd-ms-box">
						<view class="prd-lf-box">
							<span>结算类型: {{ item.cate }}</span>
							<span>{{ item.line }}</span>
						</view>
						<view class="prd-rg-box">
							<span>{{ moneyData[key].money }}元</span>
						</view>
					</view>
				</view>
			</view>
			<view class="income-table" id="withdraw" v-show="options ? false : true">
				<view class="li-tmdtix" v-for="(item, key) in cashData" :key="key">
					<view class="ztfy">
						<view class="jilwz teszcss">状态：{{ item.zt }}</view>
						<view class="jilwz">{{ item.line }}</view>
					</view>
					<view class="jinqxs">{{ item.take_money }}元</view>
				</view>
			</view>
			<view class="btn-withdraw" @click="withdrawal()">我要提现</view>
		</view>
	</view>
</template>

<script>
import api from '../../../common/api/api.js';
export default {
	data() {
		return {
			//用户ID
			memberId: '',
			//报表数据
			Table: [],
			//提现记录
			cashData: [],
			//收入记录
			incomeData: [],
			//收入金额
			moneyData: [],
			//收入页数
			page1: 1,
			//提现页数
			page2: 1,
			//收入页数总数
			pageCount1: 1,
			//提现页数总数
			pageCount2: 1,
			//TBA
			options: true,
			isActive: 1
		};
	},
	//监听页面加载
	onLoad() {
		this.pullData();
	},
	methods: {
		//拉取用户数据
		pullData: function() {
			api.apiPost('/member/userinfo', '', '', 'get', (status, res) => {
				if (status) {
					this.memberId = res.data.member_id;
					//拉取报表数据
					this.TableData();
					//拉取收入数据
					this.income();
					//拉取提现数据
					this.cash();
				} else {
					uni.showToast({
						title: '数据获取失败',
						icon:'none',
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
				} else {
					uni.showToast({
						title: '数据获取失败',
						icon:'none',
						duration: 2000
					});
				}
			});
		},
		//拉取收入数据
		income: function() {
			api.apiPost('/agent/income?page=' + this.page1 + '&date=', '', '', 'get', (status, res) => {
				if (status) {
					this.incomeData = res.data.ag;
					this.pageCount1 = res.data.pages.totalCount;
					//收入金额计算
					this.jinJe();
				} else {
					uni.showToast({
						title: '数据获取失败',
						icon:'none',
						duration: 2000
					});
				}
			});
		},
		//收入金额计算
		jinJe:function(){
			var num = 0;
			for (var i = 0; i < this.incomeData.length; i++) {
				num = this.incomeData[i].money;
				num = num.toFixed(2);
				var jin = {
					money: num
				};
				this.moneyData = this.moneyData.concat(jin);
			}
		},
		//拉取提现数据
		cash: function() {
			api.apiPost('/agent/txrecord?page=' + this.page2 + '&date=', '', '', 'get', (status, res) => {
				if (status) {
					this.cashData = res.data.record;
					//this.pageCount2 = res.data.page.pageCount;
				} else {
					uni.showToast({
						title: '数据获取失败',
						icon:'none',
						duration: 2000
					});
				}
			});
		},
		//我要提现
		withdrawal: function() {
			uni.navigateTo({
				url: '/pages/personal/withdrawal/withdrawal'
			});
		},
		//TBA
		optionsTBA: function(value) {
			if (value == 1) {
				this.options = true;
				this.isActive = 1;
			} else {
				this.options = false;
				this.isActive = 2;
			}
		},
		//选择时间
		chooseDate:function(){
			uni.showToast({
				title: '功能维护中',
				icon:'none',
				duration: 2000
			});
		}
	}
};
</script>

<style>
@import '../../../common/css/newhome.css';
.li-tmdtix {
	height: 60px;
	padding: 14px 15px;
	background-color: #fff;
	margin-bottom: 1px;
	display: flex;
}
.ztfy {
	flex: 6;
}
.jinqxs {
	flex: 4;
	text-align: right;
	line-height: 60px;
	font-size: 20px;
	color: #ff4061;
}
.jilwz {
	color: #98a7b8;
	font-size: 12px;
	height: 28px;
	line-height: 28px;
}
.teszcss {
	padding-top: 5px;
	font-size: 14px;
}
</style>
