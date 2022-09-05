<template>
	<view class="tonybj">
		<view class="guess-like-box">
			<view class="slider-box"><img src="../../static/images/15435462155648.png" alt="" /></view>
			<view class="recommend-loan-box ul-pad left-loan" style="padding-top: 0">
				<ul>
					<li v-for="item in theloan" :key="item.ag_id">
						<view class="canpbg" @click="productQuery(item.ag_id)">
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
						</view>
					</li>
				</ul>
			</view>
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
			//贷款产品
			theloan: []
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
					//排序-通过率从大到小。升序：orderBy | 降序：orderByDescending
					var value = Enumerable.from(res.data.loan)
						.orderByDescending(function(i) {
							return i.ag_xcx_passrate;
						})
						.toArray();
					this.theloan = value;
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
		//产品详细页
		productQuery: function(id) {
			uni.navigateTo({
				url: '/pages/details/details?id=' + id
			});
		}
	}
};
</script>

<style>
@import '../../common/css/newhome.css';
</style>
