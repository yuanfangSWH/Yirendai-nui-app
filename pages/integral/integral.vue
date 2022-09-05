<template>
	<view class="tonybj">
		<view class="credits-box">
			<view class="credits-slider-box"><img src="../../static/images/creatslider.png" alt="" /></view>
			<view class="credits-content-box">
				<view class="content-box">
					<view class="title-content-box process-bg">流程参考</view>
					<view class="flow-list-box">
						<ul>
							<li>
								<view class="flow-logo"><img src="../../static/images/yinhang-icon.png" alt="" /></view>
								<span>选择银行兑换</span>
							</li>
							<img src="../../static/images/jtxy.png" class="flow-jt-box" alt="" />
							<li>
								<view class="flow-logo"><img src="../../static/images/add-iconsend.png" alt="" /></view>
								<span>添加详情提交</span>
							</li>
							<img src="../../static/images/jtxy.png" class="flow-jt-box" alt="" />
							<li>
								<view class="flow-logo"><img src="../../static/images/shenhe-icon.png" alt="" /></view>
								<span>审核成功提现</span>
							</li>
						</ul>
					</view>
				</view>
				<view class="bank-box">
					<img src="../../static/images/yin-logo.png" alt="" />
					<picker class="tsdxg" mode = "selector" @change="bindPickerChange" :value="bankData" :range="bankBT">
						<view>{{bankBT[bankData]}}</view>
                    </picker>
				</view>
				<view class="content-box">
					<view class="title-content-box credits-bg">
						积分兑换
						<span class="span-sml" >{{describe}}</span>
					</view>
					<view class="math-box">
						<input type="number" placeholder="请输入兑换积分" v-model="integral" class="math-vl" />
						<button type="button" class="btn-sun" @click="calculate()">算一算</button>
					</view>
					<view class="phone-math-box">
						<span>*积分查询方法</span>
						<p>拨打建设银行信用卡服务热线400-889-5580，选择人工服务或通过语音菜单自助查询</p>
					</view>
					<view class="conversion-box"><button type="button" class="btn-conversion">立即兑换</button></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			//积分
			integral:'',
			//银行标题
			bankBT:['请选择兑换的银行','浦发银行','民生银行','交通银行','平安银行'],
			//银行
			bankData:0,
			describe:'客服审核时间为周一至周五9:30-18:30'
		};
	},
	methods: {
		bindPickerChange:function(event){
			this.bankData = event.target.value;
		},
		calculate:function(){
			if(this.bankData==0)
			{
				uni.showToast({
					title: '请选择兑换的银行',
					icon:'none',
					duration: 2000
				});
			}else if(this.integral==''){
				uni.showToast({
					title: '请输入兑换的积分',
					icon:'none',
					duration: 2000
				});
			}else{
				var moneyData = this.integral /100;
				this.describe = '你的积分大约可以兑换'+moneyData+'元钱';
			}
			
		}
	}
};
</script>

<style>
@import '../../common/css/shopmt.css';
</style>
