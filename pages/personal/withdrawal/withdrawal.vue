<template>
	<view>
		<view class="wrd-mony-box">
			<view class="m-button">
				<view class="btn-block btn-warning" @click="addyhk()" v-if="cardData == ''">
					<span class="cash_s01">+</span>
					<span>添加提现银行卡账号</span>
					<img src="../../../static/images/jtgr_icon.png" alt="" class="jt-logo" />
				</view>
				<view class="btn-block btn-warning" @click="solutionhk()" v-else>
					<span>银行卡账号：{{ cardData }}</span>
				</view>
			</view>
			<!--提现金额，输入  -->
			<view class="wrd-monys-box">
				<span class="wrd-title-head">提现金额(元)</span>

				<!--输入区  -->
				<view class="wrd-monyipt-box">
					<span class="mony-icon">￥</span>
					<input type="number" placeholder="请输入提现金额" focus="focus" id="ipmeny" class="ipmeny1" v-model="goldData" />
					<span id="btn_wrdts" @click="allTc()">全部提现</span>
				</view>

				<!--可提现金额  -->
				<span class="ys-mony-xt">
					可提现金额:
					<span id="moneys">{{ Table.member_dl_money }}</span>
					元
				</span>
			</view>
			<!--同意协议部分-->
			<view class="ap-agreement">
				<view class="ap-right">
					<view class="ap-check">
						<checkbox-group @change="checkboxChange">
							<label><checkbox value="1" checked="true" /></label>
						</checkbox-group>
					</view>
					<span class="sspel">
						<navigator class="dtzadbq" url="/pages/registered/agreementyun/agreementyun" redirect hover-class="navigator-hover" open-type="navigate">
							《“云账户”费用结算服务协议》
						</navigator>
					</span>
				</view>
			</view>
			<button class="btn-checkress" id="btn-sure-ts" type="button" v-if="decision == true" @click="determineTX()">确 认 提 现</button>
			<button class="btn-checkress" style="background-color: #b9b7b7;" id="btn-sure-ts" type="button" v-else-if="decision == false">确 认 提 现</button>
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
			//提现金额
			goldData: '',
			//银行卡
			cardData: '',
			//是否同意
			decision: true
		};
	},
	//监听页面加载
	onLoad() {
		this.pullData();
	},
	methods: {
		//拉取用户数据
		pullData: function() {
			var value = uni.getStorageSync('landing');
			this.cardData = value.member_bank_card;
			this.memberId = value.member_id;
			//拉取报表数据
			api.apiPost('/agent/baobiao?member_id=' + this.memberId, '', '', 'get', (status, res) => {
				if (status) {
					this.Table = res.data;
				} else {
					uni.showToast({
						title: '提交修改失败',
						icon:'none',
						duration: 2000
					});
				}
			});
		},
		//全部提现
		allTc: function() {
			this.goldData = this.Table.member_dl_money;
		},
		//添加银行卡
		addyhk: function() {
			uni.navigateTo({
				url: '/pages/personal/addcard/addcard'
			});
		},
		//解绑银行卡
		solutionhk: function() {
			uni.navigateTo({
				url: '/pages/personal/solutioncard/solutioncard'
			});
		},
		//确认提现
		determineTX: function() {
			var value = uni.getStorageSync('landing');
			if (value.member_bank_card == '') {
				uni.showToast({
					title: '未添加银行卡',
					icon:'none',
					duration: 2000
				});
			} else if (this.goldData == '') {
				uni.showToast({
					title: '请输入要提现的金额',
					icon:'none',
					duration: 2000
				});
			} else if (parseInt(this.goldData) > parseInt(this.Table.member_dl_money)) {
				uni.showToast({
					title: '请输入金额超过可提现',
					icon:'none',
					duration: 2000
				});
			} else {
				var data = {
					amount: this.goldData
				};
				var parameter = '?amount=' + this.goldData;
				api.apiPost('/agent/txsavebank', parameter, data, 'post', (status, res) => {
					if (status) {
						//登录信息本地缓存储存
						uni.setStorageSync('landing', res.data);
						var mention = this.goldData;
						uni.navigateTo({
							url: '/pages/personal/staytx/staytx?mention=' + mention
						});
					} else {
						alert(res.data.message);
					}
				});
			}
		},
		//是否同意
		checkboxChange: function(e) {
			var values = e.detail.value;
			if (values == '') {
				this.decision = false;
			} else if (values == 1) {
				this.decision = true;
			}
		}
	}
};
</script>

<style>
@import '../../../common/css/cash.css';
@import '../../../common/css/apply_dbk.css';
.m-button {
	padding-top: 15px;
	margin-bottom: 15px;
}
.btn-block {
	padding: 10px 0;
	display: flex;
	display: -webkit-flex;
	position: relative;
}
.btn-block .logo {
	width: 30px;
	height: 30px;
}
.btn-block span {
	line-height: 30px;
	color: #404b5e;
	font-size: 14px;
	padding-left: 10px;
}
.btn-warning {
	height: auto;
}
.jt-logo {
	width: 8px;
	height: 18px;
	position: absolute;
	right: 0;
	top: 50%;
	transform: translateY(-50%);
}
.cell-right input[type='radio'] + .cell-radio-icon:after,
.cell-right input[type='checkbox']:not(.m-switch) + .cell-radio-icon:after {
	color: #4e90e6;
}
.cell-item img {
	width: 30px;
	height: 30px;
	margin: 10px 0;
	margin-right: 10px;
}
.ipmeny1 {
	height: 40px;
	min-width: 100px;
	flex: 1;
	-ms-flex: 1;
	border-style: none;
	font-size: 20px;
}
.input-placeholder {
	line-height: 40px;
}
#btn_wrdts {
	min-width: 70px;
}
.ap-agreement {
	margin-bottom: 0px !important;
	line-height: 35px !important;
	margin: 0 15px;
}
</style>
