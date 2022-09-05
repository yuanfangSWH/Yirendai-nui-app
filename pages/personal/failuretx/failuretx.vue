<template>
	<view>
		<view class="wrd-mony-box">
			<view class="bk_s">
				<span><img src="../../../static/images/cash_sb.png" style="width: 18% !important;" /></span>
				<p style="margin-top: 10px;">提现申请失败</p>
				<em>你的账户存在异常</em>
			</view>
			<ul class="cash_ul01 cash_fail">
				<li>
					<span class="cash_xq_s01">储蓄卡</span>
					<span class="cash_xq_s02">6228 **** **** 888</span>
				</li>
				<li>
					<span class="cash_xq_s01">提现金额</span>
					<span class="cash_xq_s02">¥12451.76</span>
				</li>
			</ul>
			<button class="btn-sure-ts" @click="complete()">确认</button>
		</view>
	</view>
</template>

<script>
import api from '../../../common/api/api.js';
export default {
	data() {
		return {};
	},
	methods: {
		//完成
		complete: function() {
			uni.navigateBack({
				delta: 2
			});
		}
	}
};
</script>

<style>
@import '../../../common/css/cash.css';
.m-button {
	background-color: #fff;
	margin-bottom: 15px;
}
.btn-block {
	margin-top: 15px;
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
.wrd-monyipt-box input {
	min-width: 100px;
}
#btn_wrdts {
	min-width: 70px;
}
</style>
