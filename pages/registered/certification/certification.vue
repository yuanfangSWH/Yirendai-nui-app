<template>
	<view class="content">
		<div class="success-identity">
			<h2>您已通过实名认证</h2>
			<span class="newuse">现在您可以开始使用代呗客</span>
			<img src="../../../static/images/tu.png" class="tu-tub" alt="" />

			<button type="button" class="btn-success" @click="Home()">完成</button>
		</div>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		//完成
		Home:function(){
			//跳转首页
			uni.reLaunch({
				url: '/pages/index/index'
			});
		}
	}
};
</script>

<style>
.content {
	height: 1200upx;
}
.success-identity {
	text-align: center;
	padding: 50px 30px;
	padding-top: 150px;
}
.success-identity h2 {
	font-weight: 400;
	font-size: 6vw;
	margin: 0;
	text-align: center;
}
.success-identity span.newuse {
	color: #c2c1c6;
	font-size: 4vw;
	padding: 15px 0 26px;
	text-align: center;
	display: block;
}
.success-identity span.more_wx {
	color: #000;
	font-size: 4vw;
	padding: 25px 0 0px;
	text-align: center;
	display: block;
}
.success-identity span.bc_wx {
	color: #c2c1c6;
	font-size: 4vw;
}
.success-identity img.tu-ewm {
	width: 34vw;
	margin: 20px auto 5px;
	display: block;
	border: 1px dashed #ccc;
}
.success-identity img.tu-tub {
	width: 34vw;
	margin: 20px auto;
	display: block;
	border: 1px dashed #ccc;
}
.success-identity button.btn-success {
	color: #fff;
	background-color: #257bff;
	width: 100%;
	line-height: 12vw;
	height: 12vw;
	border-style: none;
	border-radius: 100px;
	font-size: 4.6vw;
	margin-top: 36px;
	outline: none;
	margin-top: 60px;
}
</style>
