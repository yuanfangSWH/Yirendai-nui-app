<template>
	<view>
		<view class="form-cz-box">
			<span class="head-tl">请填写您的提现账号信息</span>
			<view class="form-write-box">
				<view class="ts-logo-box" style="margin-top: 15px">
					<img src="../../../static/images/zfblogo.png" alt="">
					<p>支付宝<span></span></p>
				</view>
				<view class="ipt-box-cl">
					<input class="name" type="password" placeholder='请输入您的真实姓名' v-model="username">
				</view>
				<view class="ipt-box-cl">
					<input class="name" type="password" placeholder='请填写您的支付宝账号' v-model="username">
				</view>
				<button class="btn-form">保存</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username:''
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.ts-logo-box {
    padding: 15px;
    background-color: #fff;
    border-bottom: 1px solid #f1f4f8;
}
.ts-logo-box img {
    width: 20px;
    height: 20px;
    display: inline-block;
    vertical-align: top;
}
.ts-logo-box p {
    display: inline-block;
    vertical-align: top;
    padding-left: 6px;
}
.ts-logo-box p span {
    font-size: 12px;
    color: #F23030;
    display: inline-block;
    vertical-align: top;
    line-height: 20px;
    padding-left: 6px;
}
</style>
