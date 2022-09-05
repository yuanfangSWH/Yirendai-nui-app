<template>
	<view>
		<view class="product-banner-box">
			<view class="banner-top-wsgyxyk"><img :src="credit.ag_banner_img" class="logo-xyk" alt="" /></view>
			<view class="banner-bottom-box">
				<span class="product-name">{{ credit.ag_name }}</span>
				<span class="product-people">{{ credit.fknum }}人</span>
				<span class="product-fcxt">已成功放款</span>
				<view class="product-phnumber-box" v-for="(sign, index) in credit.ag_tab" :key="index"><span>{{ credit.ag_tab[index] }}</span></view>
			</view>
		</view>
		<!--第二版贷款利息信息区-->
		<view class="record-head-box" style="margin-top: 0;padding: 0 15%;border-bottom: 1px solid #f1f4f8;">
			<span class="active">
				<a>奖金结算</a>
				<span></span>
			</span>
		</view>
		<view class="tab-opt-box" id="dkp-bc">
			<view class="dk-zs-box">
				<span class="tlchlider-xtr">奖金结算</span>
				<rich-text class="wxParse-ul" :nodes="JianData.ag_xcx_content"></rich-text>
			</view>
			<view class="dk-zs-box">
				<span class="tlchlider-xtr">奖金发放说明</span>
				<rich-text class="wxParse-ul" :nodes="JianData.ag_xcx_jjffsm"></rich-text>
			</view>

			<view class="tianck"></view>
		</view>
		<view class="service-agency-box">
			<view class="btn-service" id="I_apply" @click="pleaseKG()"><view class="btn_span01">申请产品</view></view>
			<view class="btn-agency" @click="yaoqzq()"><view class="yaoqzq">邀请好友赚钱</view></view>
		</view>
		<!--通用遮罩-->
		<!-- <view class="gzh-modelmask-box" style="display: none;"></view> -->
		<!--关注公众号二维码弹窗-->
		<!-- <view class="gzh-model-box" style="display: none;">
			<a class="dk_layer_close" href="javascript:;"></a>
			<ul class="yd_ul01">
				<li><h4 class="yd_h4">确认申请人信息</h4></li>
				<li><span class="dk_span_01">后续申请表信息必须与以下注册信息一致</span></li>
				<li>
					<span class="dk_span_02">姓名：</span>
					<span class="dk_span_03">杨晶晶</span>
				</li>
				<li>
					<span class="dk_span_02">身份证号：</span>
					<span class="dk_span_03">450666********7788</span>
				</li>
				<li>
					<span class="dk_span_02">手机号：</span>
					<span class="dk_span_03">139*****831</span>
				</li>
				<li>
					<span class="ta_apply">他人申请</span>
					<span class="queren_apply">确认申请</span>
				</li>
			</ul>
		</view> -->
	</view>
</template>

<script>
import api from '../../common/api/api.js';
export default {
	data() {
		return {
			//产品ID
			creditID: '',
			//产品详细
			credit: [],
			//奖金结算数据
			JianData: []
		};
	},
	//监听页面加载
	onLoad(option) {
		uni.showLoading({
			title: '加载中'
		});
		//获取到id
		this.creditID = option.id;
		this.pullData();
	},
	//下拉刷新
	onPullDownRefresh() {
		this.pullData();
		setTimeout(function() {
			//停止下拉刷新动画
			uni.stopPullDownRefresh();
		}, 1000);
	},
	methods: {
		//拉取数据
		pullData: function() {
			api.apiPost('/agent/ag?id=' + this.creditID, '', '', 'get', (status, res) => {
				if (status) {
					//产品数据
					this.credit = res.data;
					//奖金结算
					this.bonusData();
				} else {
					uni.showToast({
						title: '数据获取失败',
						icon: 'none',
						duration: 2000
					});
				}
			});
		},
		//奖金结算
		bonusData: function() {
			api.apiPost('/agent/agjiesuan?id=' + this.creditID, '', '', 'get', (status, res) => {
				if (status) {
					this.JianData = res.data.agent;
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
		//邀请好友赚钱
		yaoqzq: function() {
			uni.navigateTo({
				url: '/pages/exclusive/exclusive'
			});
		},
		//申请产品
		pleaseKG: function() {
			uni.navigateTo({
				url: '/pages/applyfor/applyfor?id=' + this.creditID
			});
		}
	}
};
</script>

<style>
@import '../../common/css/ppd_home_dbk.css';
.tianck {
	width: 100%;
	height: 50px;
	background-color: #f1f4f8;
}
.banner-xyk-box {
	margin: 0 5%;
}
.logo-xyk {
	width: 100%;
	border-radius: 5px;
}
.service-agency-box {
	z-index: 2;
}
.gzh-modelmask-box {
	z-index: 3;
}
.gzh-model-box {
	z-index: 4;
}
.scroll-view_H {
	height: 240px;
	white-space: nowrap;
}
.scroll-slide {
	display: inline-block;
	width: 150.417px;
	margin-right: 10px;
	height: 205px;
	padding-top: 10px;
}
.charts {
	width: 130upx;
	height: 200upx;
	background-color: #ffffff;
}
.logo-xyk {
	width: 100%;
	border-radius: 5px;
}
.banner-top-wsgyxyk {
	margin-left: auto;
	margin-right: auto;
	width: 670upx;
	height: 315upx;
}
.banner-top-wsgyxyk .logo-xyk {
	width: 100%;
	height: 100%;
}
</style>
