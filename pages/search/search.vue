<template>
	<view class="tonybj">
		<view class="search-topcontent-box">
			<view class="topcontent-box">
				<input type="search" placeholder="请输入您想搜索的产品名称" id="sousuoipt" v-model="sougSR" @change="searchData()" />
				<view class="qulx" @click="cancelFH()">取消</view>
			</view>
		</view>
		<view class="tabs-search-box" v-show="options ? true : false">
			<view class="search-list-box">
				<h2>热门搜索</h2>
				<view class="lists-search-box">
					<ul id="listson">
						<li class="active" v-for="item in theloan1" :key="item.ag_id" @click="queryID(item.ag_id)">{{ item.ag_name }}</li>
						<li v-for="item in theloan2" :key="item.ag_id" @click="queryID(item.ag_id)">{{ item.ag_name }}</li>
					</ul>
				</view>
			</view>
			<view class="search-list-box">
				<h2>
					历史搜索
					<span id="empty_history" style="display: block;float: right;font-family: '微软雅黑';font-size: 14px;font-weight:600;color: #2A8CFB" @click="emptyData()">
						清空
					</span>
				</h2>
				<view class="lists-search-box">
					<ul id="liststw">
						<li v-for="item in recordData" :key="item.ag_id" @click="queryID(item.ag_id)">{{ item.ag_name }}</li>
					</ul>
				</view>
			</view>
		</view>
		<view class="recommend-sousuo-box" style="display: block;">
			<ul>
				<li v-for="item in sougData" :key="item.ag_id" @click="productQuery(item.ag_id)">
					<view class="recommend-loanhead-box">
						<img :src="item.ag_img" alt="" />
						<span>{{ item.ag_name }}</span>
						<span class="bq-xt">{{ item.ag_tab }}</span>
					</view>
					<view class="recommend-loanlist-box">
						<view class="loanlist-box monneyloan-box">
							<h2>{{ item.ag_dkfw }}</h2>
							<span>额度范围(元)</span>
						</view>
						<view class="loanlist-box messloan-box">
							<h4>期限{{ item.ag_dkqx }}月</h4>
							<span>{{ item.ag_refund_time }}</span>
						</view>
						<button href="" class="btn-shenq">立即申请</button>
					</view>
				</li>
			</ul>
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
			//热门产品
			theloan1: [],
			//热门产品
			theloan2: [],
			//搜索数据
			sougData: [],
			//数据备份
			dataBf: [],
			//输入框搜索关键字
			sougSR: '',
			//历史记录
			recordData: [],
			//记录备份
			recordBF: [],
			//显示关闭
			options: true
		};
	},
	//监听页面加载
	onLoad() {
		uni.showLoading({
			title: '加载中'
		});

		//历史记录本地缓存同步取得
		const value = uni.getStorageSync('record');
		if (value) {
			this.recordData = value;
		}
		this.pullData();
	},
	methods: {
		//拉取数据
		pullData: function() {
			api.apiPost('/agent/agentindex', '', '', 'get', (status, res) => {
				if (status) {
					this.dataBf = res.data.loan;
					//热门产品。热门 1是0不是
					var value = Enumerable.from(this.dataBf)
						.where(function(i) {
							return i.ag_is_hot == 1;
						})
						.toArray();
					this.theloan1 = value.slice(0, 3);
					this.theloan2 = value.slice(4, 9);
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
		//搜索
		searchData: function() {
			var tiaoj = this.sougSR;
			if (tiaoj != '') {
				var value = Enumerable.from(this.dataBf)
					.where(function(i) {
						return i.ag_name.indexOf(tiaoj) != -1;
					})
					.toArray();
				//隐藏条件模块
				this.options = false;
				//查询结果
				this.sougData = value;
			}
		},
		//查询条件
		queryID: function(id) {
			var value = Enumerable.from(this.dataBf)
				.where(function(i) {
					return i.ag_id == id;
				})
				.toArray();
			//隐藏条件模块
			this.options = false;
			//查询结果
			this.sougData = value;
			//历史记录
			this.recordData = this.recordData.concat(value);
			//历史记录去重复
			var arrRes = Enumerable.from(this.recordData)
				.distinct(function(i) {
					return i.ag_id;
				})
				.toArray();
			this.recordData = arrRes;
			//历史记录同步本地缓存
			uni.setStorageSync('record', this.recordData);
		},
		//清空历史记录
		emptyData: function() {
			this.recordData = '';
			uni.setStorageSync('record', '');
		},
		//产品详细页
		productQuery: function(id) {
			uni.navigateTo({
				url: '/pages/details/details?id=' + id
			});
		},
		//取消-返回到贷款页
		cancelFH: function() {
			uni.switchTab({
				url: '/pages/theloan/theloan'
			});
		}
	}
};
</script>

<style>
@import '../../common/css/newhome.css';
.search {
	max-width: 500px;
	background-color: #f1f4f8;
}
.topcontent-box {
	background-color: #fff;
	height: 60px;
}
.topcontent-box input {
	height: 30px;
	border-style: none;
	border-color: #eef1f7;
	width: 80%;
	margin: 15px;
	margin-right: 0;
	margin-bottom: 10px;
	text-indent: 40px;
	border-radius: 4px;
	outline: none;
	background: url(~@/static/images/product-sousuo.png) 10px center no-repeat #eef1f7;
	background-size: 20px 20px;
	float: left;
	font-size: 14px;
}
.topcontent-box form input::-webkit-input-placeholder {
	color: #a3b0c1;
}
.topcontent-box form input::-moz-placeholder {
	color: #a3b0c1;
}
.topcontent-box form input::-ms-input-placeholder {
	color: #a3b0c1;
}
.topcontent-box .qulx {
	color: #a3b0c1;
	font-size: 14px;
	line-height: 60px;
	float: right;
	padding-right: 15px;
}
.recommend-sousuo-box ul li {
	padding: 15px;
	margin-bottom: 1px;
	background-color: #fff;
}
.tabs-search-box {
	background-color: #fff;
	padding: 10px;
}
.tabs-search-box h2 {
	font-size: 16px;
	margin: 0;
	margin-left: 5px;
}
.lists-search-box ul {
	overflow: hidden;
	box-sizing: border-box;
}
.lists-search-box ul li {
	display: inline-block;
	font-size: 14px;
	box-sizing: border-box;
	width: 20%;
	float: left;
	border-left: 2px solid #fff;
	border-right: 2px solid #fff;
	background-color: #e8eaef;
	color: #a4a4a4;
	text-align: center;
	border-radius: 100px;
	margin: 10px 0;
	padding: 5px 0;
	line-height: 14px;
}
.lists-search-box ul li.active {
	background-color: #2a8cfb;
	color: #fff;
}
.lists-search-box ul li:active {
	background-color: #2a8cfb;
	color: #fff;
}
uni-input input {
	text-indent: 40px;
}
</style>
