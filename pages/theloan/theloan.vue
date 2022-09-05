<template>
	<view class="content">
		<view class="state-sel"></view>
		<view class="slider-box"><img src="../../static/images/banner14.png" alt="" /></view>
		<view class="recommend-loan-box ul-pad left-loan" style="padding-top: 0;border-bottom: 60px solid #fff">
			<view class="guess-title" style="border-bottom: 1px solid #f1f4f8">
				<span>全部贷款产品</span>
				<view class="shaixuan" id="btn-product" @click="xlMethods()">筛选</view>
				<view @click="shoul()" class="soushtml">搜索</view>
			</view>
			<ul>
				<li v-for="(item, key) in theloan" :key="item.ag_id">
					<view class="li-zjie" @click="productQuery(item.ag_id)">
						<view class="recommend-loanhead-box">
							<img :src="item.ag_img" alt="" />
							<span>{{ item.ag_name }}</span>
							<span class="bq-xt">{{ item.ag_tab }}</span>
						</view>
						<view class="recommend-loanlist-box">
							<view class="loanlist-box monneyloan-box">
								<h2><!-- {{item.ag_dkfw}} -->{{ unitData[key].years }}-{{ unitData[key].month }}</h2>
								<span>额度范围(元)</span>
							</view>
							<button href="" class="btn-shenq">立即申请</button>
							<span>{{ item.ag_refund_time }}</span>
						</view>
					</view>
				</li>
			</ul>
		</view>
		<view class="radios-card-box pox-adios" id="raiosbx" v-show="dropdown ? true : false">
			<view class="radio-mess">
				<text class="texth3">选择条件</text>
				<ul class="condition">
					<li><view class="butpdnm" :class="{ active: xuanActive.conditions1 == 1 }" @click="conditionsMoa(1)">身份证</view></li>
					<li><view class="butpdnm" :class="{ active: xuanActive.conditions2 == 1 }" @click="conditionsMoa(2)">实名认证</view></li>
					<li><view class="butpdnm" :class="{ active: xuanActive.conditions3 == 1 }" @click="conditionsMoa(3)">实名手机号</view></li>
					<li><view class="butpdnm" :class="{ active: xuanActive.conditions4 == 1 }" @click="conditionsMoa(4)">芝麻信用</view></li>
					<li><view class="butpdnm" :class="{ active: xuanActive.conditions5 == 1 }" @click="conditionsMoa(5)">信用卡</view></li>
					<li><view class="butpdnm" :class="{ active: xuanActive.conditions6 == 1 }" @click="conditionsMoa(6)">公积金</view></li>
					<li><view class="butpdnm" :class="{ active: xuanActive.conditions7 == 1 }" @click="conditionsMoa(7)">社保</view></li>
					<li><view class="butpdnm" :class="{ active: xuanActive.conditions8 == 1 }" @click="conditionsMoa(8)">房产</view></li>
					<li><view class="butpdnm" :class="{ active: xuanActive.conditions9 == 1 }" @click="conditionsMoa(9)">营业执照</view></li>
					<li><view class="butpdnm" :class="{ active: xuanActive.conditions10 == 1 }" @click="conditionsMoa(10)">个人征信</view></li>
					<li><view class="butpdnm" :class="{ active: xuanActive.conditions11 == 1 }" @click="conditionsMoa(11)">学历</view></li>
					<li><view class="butpdnm" :class="{ active: xuanActive.conditions12 == 1 }" @click="conditionsMoa(12)">电商</view></li>
					<li><view class="butpdnm" :class="{ active: xuanActive.conditions13 == 1 }" @click="conditionsMoa(13)">联系人信息</view></li>
					<li><view class="butpdnm" :class="{ active: xuanActive.conditions14 == 1 }" @click="conditionsMoa(14)">职业信息</view></li>
					<li><view class="butpdnm" :class="{ active: xuanActive.conditions15 == 1 }" @click="conditionsMoa(15)">人脸识别</view></li>
					<li><view class="butpdnm" :class="{ active: xuanActive.conditions16 == 1 }" @click="conditionsMoa(16)">银行卡</view></li>
				</ul>
				<text class="texth3">选择金额</text>
				<ul class="monney">
					<li><view class="butpdnm" :class="{ active: jineActive == 1 ? true : false }" @click="conditionsMob(1)">2000以下</view></li>
					<li><view class="butpdnm" :class="{ active: jineActive == 2 ? true : false }" @click="conditionsMob(2)">2000以上</view></li>
					<li><view class="butpdnm" :class="{ active: jineActive == 3 ? true : false }" @click="conditionsMob(3)">5000以上</view></li>
					<li><view class="butpdnm" :class="{ active: jineActive == 4 ? true : false }" @click="conditionsMob(4)">10000以上</view></li>
					<li><view class="butpdnm" :class="{ active: jineActive == 5 ? true : false }" @click="conditionsMob(5)">20000以上</view></li>
					<li><view class="butpdnm" :class="{ active: jineActive == 6 ? true : false }" @click="conditionsMob(6)">50000以上</view></li>
				</ul>
			</view>
			<view class="btn-section">
				<button type="button" id="all_remove" class="buczan" @click="remove()">重置</button>
				<button type="button" id="aure_is" class="buczan" @click="submitMethods()">确定</button>
			</view>
		</view>
		<view class="kflb-marsk" v-show="cover ? true : false" @click="submitMethods()"></view>
	</view>
</template>

<script>
import api from '../../common/api/api.js';
//linq插件
import Enumerable from '../../common/linq/linq.js';
export default {
	data() {
		return {
			//贷款产品
			theloan: [],
			//数据备份1
			dataBf1: [],
			//数据备份2
			dataBf2: [],
			//单位数据
			unitData: [],
			//下拉
			dropdown: false,
			cover: false,
			//条件1
			screening1: [],
			//条件2
			screening2: '',
			//选择样式
			xuanActive: {
				conditions1: 0,
				conditions2: 0,
				conditions3: 0,
				conditions4: 0,
				conditions5: 0,
				conditions6: 0,
				conditions7: 0,
				conditions8: 0,
				conditions9: 0,
				conditions10: 0,
				conditions11: 0,
				conditions12: 0,
				conditions13: 0,
				conditions14: 0,
				conditions15: 0,
				conditions16: 0
			},
			//选择样式2
			jineActive: 0
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
		this.dropdown = false;
		this.cover = false;
		this.screening1 = [];
		this.screening2 = '';
		this.xuanActive.conditions1 = 0;
		this.xuanActive.conditions2 = 0;
		this.xuanActive.conditions3 = 0;
		this.xuanActive.conditions4 = 0;
		this.xuanActive.conditions5 = 0;
		this.xuanActive.conditions6 = 0;
		this.xuanActive.conditions7 = 0;
		this.xuanActive.conditions8 = 0;
		this.xuanActive.conditions9 = 0;
		this.xuanActive.conditions10 = 0;
		this.xuanActive.conditions11 = 0;
		this.xuanActive.conditions12 = 0;
		this.xuanActive.conditions13 = 0;
		this.xuanActive.conditions14 = 0;
		this.xuanActive.conditions15 = 0;
		this.xuanActive.conditions16 = 0;
		this.jineActive = 0;
		this.pullData();
		setTimeout(function() {
			uni.stopPullDownRefresh();
		}, 1000);
	},
	methods: {
		//拉取数据
		pullData: function() {
			api.apiPost('/agent/agentindex', '', '', 'get', (status, res) => {
				if (status) {
					this.dataBf1 = res.data.loan;
					this.theloan = this.dataBf1;
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
		//金额计算
		jinJe: function() {
			this.unitData = [];
			var temporary;
			//遍历拆分金额1
			for (var i = 0; i < this.theloan.length; i++) {
				let str = this.theloan[i].ag_dkfw;
				var arr = str.split('-');
				if (arr[1].length >= 5) {
					temporary = arr[1].slice(0, -4) + '万';
				} else {
					temporary = arr[1];
				}
				var jin = {
					years: arr[0],
					month: temporary
				};
				this.unitData = this.unitData.concat(jin);
			}
		},
		//产品详细页
		productQuery: function(id) {
			uni.navigateTo({
				url: '/pages/details/details?id=' + id
			});
		},
		//开启下拉框事件
		xlMethods: function() {
			this.dropdown = true;
			this.cover = true;
		},
		//筛选条件
		conditionsMoa: function(value) {
			switch (value) {
				case 1:
					if (this.xuanActive.conditions1 == 0) {
						this.xuanActive.conditions1 = 1;
						this.screening1.push(value);
					} else {
						this.deleteSZ(value);
						this.xuanActive.conditions1 = 0;
					}
					break;
				case 2:
					if (this.xuanActive.conditions2 == 0) {
						this.xuanActive.conditions2 = 1;
						this.screening1.push(value);
					} else {
						this.deleteSZ(value);
						this.xuanActive.conditions2 = 0;
					}
					break;
				case 3:
					if (this.xuanActive.conditions3 == 0) {
						this.xuanActive.conditions3 = 1;
						this.screening1.push(value);
					} else {
						this.deleteSZ(value);
						this.xuanActive.conditions3 = 0;
					}
					break;
				case 4:
					if (this.xuanActive.conditions4 == 0) {
						this.xuanActive.conditions4 = 1;
						this.screening1.push(value);
					} else {
						this.deleteSZ(value);
						this.xuanActive.conditions4 = 0;
					}
					break;
				case 5:
					if (this.xuanActive.conditions5 == 0) {
						this.xuanActive.conditions5 = 1;
						this.screening1.push(value);
					} else {
						this.deleteSZ(value);
						this.xuanActive.conditions5 = 0;
					}
					break;
				case 6:
					if (this.xuanActive.conditions6 == 0) {
						this.xuanActive.conditions6 = 1;
						this.screening1.push(value);
					} else {
						this.deleteSZ(value);
						this.xuanActive.conditions6 = 0;
					}
					break;
				case 7:
					if (this.xuanActive.conditions7 == 0) {
						this.xuanActive.conditions7 = 1;
						this.screening1.push(value);
					} else {
						this.deleteSZ(value);
						this.xuanActive.conditions7 = 0;
					}
					break;
				case 8:
					if (this.xuanActive.conditions8 == 0) {
						this.xuanActive.conditions8 = 1;
						this.screening1.push(value);
					} else {
						this.deleteSZ(value);
						this.xuanActive.conditions8 = 0;
					}
					break;
				case 9:
					if (this.xuanActive.conditions9 == 0) {
						this.xuanActive.conditions9 = 1;
						this.screening1.push(value);
					} else {
						this.deleteSZ(value);
						this.xuanActive.conditions9 = 0;
					}
					break;
				case 10:
					if (this.xuanActive.conditions10 == 0) {
						this.xuanActive.conditions10 = 1;
						this.screening1.push(value);
					} else {
						this.deleteSZ(value);
						this.xuanActive.conditions10 = 0;
					}
					break;
				case 11:
					if (this.xuanActive.conditions11 == 0) {
						this.xuanActive.conditions11 = 1;
						this.screening1.push(value);
					} else {
						this.deleteSZ(value);
						this.xuanActive.conditions11 = 0;
					}
					break;
				case 12:
					if (this.xuanActive.conditions12 == 0) {
						this.xuanActive.conditions12 = 1;
						this.screening1.push(value);
					} else {
						this.deleteSZ(value);
						this.xuanActive.conditions12 = 0;
					}
					break;
				case 13:
					if (this.xuanActive.conditions13 == 0) {
						this.xuanActive.conditions13 = 1;
						this.screening1.push(value);
					} else {
						this.deleteSZ(value);
						this.xuanActive.conditions13 = 0;
					}
					break;
				case 14:
					if (this.xuanActive.conditions14 == 0) {
						this.xuanActive.conditions14 = 1;
						this.screening1.push(value);
					} else {
						this.deleteSZ(value);
						this.xuanActive.conditions14 = 0;
					}
					break;
				case 15:
					if (this.xuanActive.conditions15 == 0) {
						this.xuanActive.conditions15 = 1;
						this.screening1.push(value);
					} else {
						this.deleteSZ(value);
						this.xuanActive.conditions15 = 0;
					}
					break;
				case 16:
					if (this.xuanActive.conditions16 == 0) {
						this.xuanActive.conditions16 = 1;
						this.screening1.push(value);
					} else {
						this.deleteSZ(value);
						this.xuanActive.conditions16 = 0;
					}
					break;
			}
		},
		//数组删除指定值
		deleteSZ: function(value) {
			var shujData = Enumerable.from(this.screening1)
				.where(function(i) {
					return i != value;
				})
				.toArray();
			this.screening1 = shujData;
		},
		//提交条件
		submitMethods: function() {
			this.dropdown = false;
			this.cover = false;
			//条件判断
			if (this.screening1 != '' && this.screening2 != '') {
				this.traverse3();
			} else if (this.screening1 != '') {
				this.traverse1();
			} else if (this.screening2 != '') {
				this.traverse2();
			} else if (this.screening1 == '' && this.screening2 == '') {
				this.theloan = this.dataBf1;
				this.jinJe();
			}
		},
		//重置
		remove: function() {
			this.screening1 = [];
			this.screening2 = '';
			this.xuanActive.conditions1 = 0;
			this.xuanActive.conditions2 = 0;
			this.xuanActive.conditions3 = 0;
			this.xuanActive.conditions4 = 0;
			this.xuanActive.conditions5 = 0;
			this.xuanActive.conditions6 = 0;
			this.xuanActive.conditions7 = 0;
			this.xuanActive.conditions8 = 0;
			this.xuanActive.conditions9 = 0;
			this.xuanActive.conditions10 = 0;
			this.xuanActive.conditions11 = 0;
			this.xuanActive.conditions12 = 0;
			this.xuanActive.conditions13 = 0;
			this.xuanActive.conditions14 = 0;
			this.xuanActive.conditions15 = 0;
			this.xuanActive.conditions16 = 0;
			this.jineActive = 0;
		},
		//金额条件
		conditionsMob: function(value) {
			this.jineActive = value;
			switch (value) {
				case 1:
					this.screening2 = 1000;
					break;
				case 2:
					this.screening2 = 2000;
					break;
				case 3:
					this.screening2 = 5000;
					break;
				case 4:
					this.screening2 = 10000;
					break;
				case 5:
					this.screening2 = 20000;
					break;
				case 6:
					this.screening2 = 50000;
					break;
			}
		},
		//分类条件
		traverse1: function() {
			this.theloan = [];
			var shuzTJ = this.screening1;
			var value = Enumerable.from(this.dataBf1)
				.where(function(i) {
					var bool = Enumerable.from(shuzTJ).all(function(x) {
						return i.ag_materials.indexOf(String(x)) != -1;
					});
					return bool;
				})
				.toArray();
			this.theloan = value;
			//调用金额计算
			this.jinJe();
		},
		//金额条件
		traverse2: function() {
			this.theloan = [];
			if (this.screening2 === 1000) {
				for (var i = 0; i < this.dataBf1.length; i++) {
					let str = this.dataBf1[i].ag_dkfw;
					let arr = str.split('-');
					if (parseInt(arr[0]) <= 2000) {
						this.theloan = this.theloan.concat(this.dataBf1[i]);
					}
				}
			} else {
				for (var i = 0; i < this.dataBf1.length; i++) {
					let str = this.dataBf1[i].ag_dkfw;
					let arr = str.split('-');
					if (parseInt(arr[1]) >= this.screening2) {
						this.theloan = this.theloan.concat(this.dataBf1[i]);
					}
				}
			}
			//调用金额计算
			this.jinJe();
		},
		//双重条件
		traverse3: function() {
			this.theloan = [];
			//先筛选条件分类
			var shuzTJ = this.screening1;
			var value = Enumerable.from(this.dataBf1)
				.where(function(i) {
					var bool = Enumerable.from(shuzTJ).all(function(x) {
						return i.ag_materials.indexOf(String(x)) != -1;
					});
					return bool;
				})
				.toArray();
			this.dataBf2 = value;
			//筛选金额
			if (this.screening2 === 1000) {
				for (var i = 0; i < this.dataBf2.length; i++) {
					let str = this.dataBf2[i].ag_dkfw;
					let arr = str.split('-');
					if (parseInt(arr[0]) <= 2000) {
						this.theloan = this.theloan.concat(this.dataBf2[i]);
					}
				}
			} else {
				for (var i = 0; i < this.dataBf2.length; i++) {
					let str = this.dataBf2[i].ag_dkfw;
					let arr = str.split('-');
					if (parseInt(arr[1]) >= this.screening2) {
						this.theloan = this.theloan.concat(this.dataBf2[i]);
					}
				}
			}
			//调用金额计算
			this.jinJe();
		},
		//搜索
		shoul: function() {
			uni.navigateTo({
				url: '/pages/search/search'
			});
		}
	}
};
</script>

<style>
@import '../../common/css/newhome.css';
.guess-title {
	background-color: #fff;
}
.ul-pad {
	margin-bottom: 0px;
}
.soushtml {
	float: right;
	line-height: 53px;
	padding-right: 15px;
	font-size: 14px;
	color: #a3b0c1;
}
.recommend-loan-box ul {
	font-size: 0;
}
.recommend-loan-box ul li {
	display: inline-block;
	width: 50%;
	text-align: center;
	box-sizing: border-box;
}
.recommend-loanlist-box {
	display: block;
}
.recommend-loanhead-box img {
	width: 20px;
	height: 20px;
	margin-right: 2px;
}
.recommend-loanhead-box span {
	line-height: 20px;
	padding: 0 6px;
}
.recommend-loanlist-box span {
	color: #a3b0c1;
	font-size: 12px;
}
.recommend-loan-box .li-zjie {
	border-right: 1px solid #f1f4f8;
}
.recommend-loan-box .li-zjie:nth-of-type(2n) {
	border-right: none;
}
.monneyloan-box {
	padding-top: 8px;
}
.btn-shenq {
	width: 56%;
	position: static;
	display: block;
	margin: 10px auto 8px;
	background: transparent;
	border: 1px solid #ff9639;
	color: #ff9639;
	box-shadow: none;
}
.recommend-loanhead-box span.bq-xt {
	background-color: #52a3ff;
	color: #fff;
	margin-top: 3px;
}
.texth3 {
	font-weight: 500;
	font-size: 17px;
	display: block;
	margin-top: 1em;
	margin-bottom: 1em;
}
.butpdnm {
	line-height: 20px;
}
.buczan {
	border-radius: 0;
}
</style>
