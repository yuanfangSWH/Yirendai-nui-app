<template>
	<view class="tonybj">
		<view class="kflb-marsk" @click="optionsTBA()" v-show="coverxs ? true : false"></view>
		<view class="odteil-box">
			<view class="odteil-head-box">
				<view class="odteil-classify-box" id="classify">
					<view style="width: 60px;" class="tibutton" :class="{ active: type == 1 }" @click="typeTAB(1)">信用卡</view>
					<view class="tibutton" :class="{ active: type == 2 }" @click="typeTAB(2)">借贷</view>
					<view class="tibutton" :class="{ active: type == 3 }" @click="typeTAB(3)">积分</view>
				</view>
				<view class="odteil-state-box">
					<view class="state-indent-box" id="stateit">
						<view class="fkbutton" :class="{ active: status == 0 }" @click="statusTAB(0)">更新中</view>
						<view class="fkbutton" :class="{ active: status == 1 }" @click="statusTAB(1)">已通过</view>
						<view class="fkbutton" :class="{ active: status == 2 }" @click="statusTAB(2)">未通过</view>
					</view>
					<view class="select-productstate-box">
						<button type="button" id="btn-product" @click="optionsTBA()">{{ product }}</button>
					</view>
				</view>
				<view class="notice-box">
					<p>
						<span>提示:</span>
						本列表是客户在产品介绍页填写资料的记录,不能视为产品官方申请记录。
					</p>
				</view>
				<view class="radios-card-box" id="raiosbx" v-show="options == 1 ? true : false">
					<view class="radio-mess">
						<view style="margin-bottom: 15px;" class="butpdnm" :class="{ active: screeningTJ == 0 }" id="xuan0" @click="TJshanxuan(0, '全部产品')">全部产品</view>
						<ul>
							<li v-for="item in screening" :key="item.ag_id">
								<view class="butpdnm" :class="{ active: screeningTJ == item.ag_id }" :id="'xuan' + item.ag_id" @click="TJshanxuan(item.ag_id, item.ag_name)">
									{{ item.ag_name }}
								</view>
							</li>
						</ul>
						<view style="padding: 36px 0 15px 0"><view type="button" class="surrer-btn" @click="submitTJ()">确定</view></view>
					</view>
				</view>
			</view>
			<view class="odteil-content-box">
				<ul v-for="(item, key) in theorder" :key="key">
					<h2>{{ item.key }}</h2>
					<li v-for="(second, index) in item.value" :key="index">
						<view class="content-headid-box">
							<view class="headid-left-box">
								<img src="../../../static/images/15112512274559.png" alt="" />
								<h4>{{ second.ag_name }}</h4>
								<span>{{ second.ag_period }}</span>
							</view>
							<view class="headid-right-box">ID:{{ second.ac_id }}</view>
						</view>
						<view class="content-table-box">
							<table>
								<tr>
									<th>姓名</th>
									<th>手机号</th>
									<th>
										奖金
										<!-- <view class="zxwhat" v-if="second.am_amount == ''" @click="whyRequest(second.ag_id)">咨询原因</view> -->
									</th>
								</tr>
								<tr>
									<td>
										<span>{{ second.ac_name }}</span>
									</td>
									<td class="phms">
										<a :href="'tel:' + second.mobile">{{ second.ac_mobile }}</a>
									</td>
									<td class="dgs">
										<view class="crqfjq" v-if="second.am_amount != ''">{{ second.am_amount }}元</view>
										<span v-else-if="!failure">待更新</span>
										<view class="crqfhs" v-if="failure">结算失败</view>
									</td>
								</tr>
							</table>
						</view>
					</li>
				</ul>
			</view>
		</view>
	</view>
</template>

<script>
import api from '../../../common/api/api.js';

export default {
	data() {
		return {
			//订单数据
			theorder: [],
			//数据备份
			DataBF: [],
			//筛选数据
			screening: [],
			//筛选条件
			screeningTJ: 0,
			//产品名称
			product: '全部产品',
			//页数
			page: 1,
			//0更新中1已通过2未通过
			status: 0,
			//1信用卡2贷款
			type: 1,
			//总页数
			pageCount: 1,
			//展开
			options: 2,
			coverxs: false,
			//未通过
			failure: false
		};
	},
	//监听页面加载
	onLoad(option) {
		uni.showLoading({
			title: '加载中'
		});
		this.type = option.type;
		this.pullData();
	},
	methods: {
		//拉取数据
		pullData: function() {
			api.apiPost('/member/neworder?page=' + this.page + '&status=' + this.status + '&cate_id=0&type=' + this.type, '', '', 'get', (status, res) => {
				if (status) {
					//数据拆分成数组
					this.objToArr(res.data.listdata);
					//分类数据
					this.screening = res.data.ordercate;
					//总页数
					this.pageCount = res.data.pageCount;
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
		//拆分成数组
		objToArr: function(obj) {
			var arr = Array();
			for (var key in obj) {
				if (obj.hasOwnProperty(key)) {
					var temp = new Object();
					var value = obj[key];
					temp.key = key;
					temp.value = value;
					arr.push(temp);
				}
			}
			this.theorder = arr;
			this.DataBF = arr;
		},
		//下拉TBA
		optionsTBA: function() {
			if (this.options == 2) {
				//开启下拉
				this.coverxs = true;
				this.options = 1;
			} else if (this.options == 1) {
				//关闭下拉
				this.coverxs = false;
				this.options = 2;
			}
		},
		//筛选条件
		TJshanxuan: function(id, name) {
			this.screeningTJ = id;
			this.product = name;
		},
		//提交筛选
		submitTJ: function() {
			if (this.screeningTJ == 0) {
				//数据初始化
				this.theorder = this.DataBF;
				//关闭下拉
				this.coverxs = false;
				this.options = 2;
			} else {
				//根据产品ID查找内容
				this.traverse();
				//关闭下拉
				this.coverxs = false;
				this.options = 2;
			}
		},
		//根据产品ID查找内容
		traverse: function() {
			var arr = Array();
			var shuzTJ = this.screeningTJ;
			//遍历查找
			for (var i = 0; i < this.DataBF.length; i++) {
				for (var x = 0; x < this.DataBF[i].value.length; x++) {
					if (this.DataBF[i].value[x].ag_id == this.screeningTJ) {
						var vice = Array(this.DataBF[i].value[x]);
						var shuj = {
							key: this.DataBF[i].key,
							value: vice
						};
						arr.push(shuj);
					}
				}
			}
			this.theorder = arr;
			if (this.theorder == '') {
				uni.showToast({
					title: '没有符合条件数据',
					icon: 'none',
					duration: 2000
				});
			}
		},
		//切换数据
		typeTAB: function(value) {
			this.type = value;
			if (value == 3) {
				uni.redirectTo({
					url: '/pages/personal/integrallb/integrallb'
				});
			} else {
				this.pullData();
			}
		},
		//切换状态
		statusTAB: function(value) {
			this.status = value;
			if (this.status == 2) {
				this.failure = true;
				this.pullData();
			} else {
				this.failure = false;
				this.pullData();
			}
		}
	}
};
</script>

<style>
.crqfjq {
	font-size: 18px;
	color: #ffa646;
}
.crqfhs {
	font-size: 18px;
	color: #ff3535;
}
</style>
