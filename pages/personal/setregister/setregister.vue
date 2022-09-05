<template>
	<view>
		<div style="margin-bottom:1rem;">
			<ul>
				<li class="xxli">
					<span class="xxlia-span1" style="margin-left:10px;">是否开启模板消息提醒</span>
					<button id="but1" @click="switchNum(1)" class="dingyue is_registered" :class="{ dingyue2: but1 == 1 ? false : true }"></button>
				</li>
				<li class="xxli">
					<span class="xxlia-span1" style="margin-left:10px;">是否开启短信消息提醒</span>
					<button id="but2" @click="switchNum(2)" class="dingyue" :class="{ dingyue2: but2 == 1 ? false : true }"></button>
				</li>
				<li class="xxli">
					<span class="xxlia-span1" style="margin-left:10px;">是否开启弹窗消息提醒</span>
					<button id="but3" @click="switchNum(3)" class="dingyue is_alert" :class="{ dingyue2: but3 == 1 ? false : true }"></button>
				</li>
			</ul>
		</div>
	</view>
</template>

<script>
import api from '../../../common/api/api.js';

export default {
	data() {
		return {
			//开关状态
			but1: 1,
			but2: 1,
			but3: 1
		};
	},
	//监听页面加载
	onLoad() {
		//this.pullData();
	},
	methods: {
		pullData: function() {
			api.apiPost('/', '', '', 'get', (status, res) => {
				if (status) {
					console.log('数据：' + JSON.stringify(res.data));
				} else {
					uni.showToast({
						title: '数据获取失败',
						icon: 'none',
						duration: 2000
					});
				}
			});
		},
		//切换开关
		switchNum: function(value) {
			switch (value) {
				case 1:
					if (this.but1 == 1) {
						uni.showToast({
							title: '已关闭模板消息提醒',
							icon: 'none',
							duration: 2000
						});
						this.but1 = 2;
					} else {
						uni.showToast({
							title: '已开启模板消息提醒',
							icon: 'none',
							duration: 2000
						});
						this.but1 = 1;
					}
					break;
				case 2:
					if (this.but2 == 1) {
						uni.showToast({
							title: '已关闭短信消息提醒',
							icon: 'none',
							duration: 2000
						});
						this.but2 = 2;
					} else {
						uni.showToast({
							title: '已开启短信消息提醒',
							icon: 'none',
							duration: 2000
						});
						this.but2 = 1;
					}
					break;
				case 3:
					if (this.but3 == 1) {
						uni.showToast({
							title: '已关闭弹窗消息提醒',
							icon: 'none',
							duration: 2000
						});
						this.but3 = 2;
					} else {
						uni.showToast({
							title: '已开启弹窗消息提醒',
							icon: 'none',
							duration: 2000
						});
						this.but3 = 1;
					}
					break;
			}
		}
	}
};
</script>

<style>
.xxli {
	background-color: #fff;
	padding: 25px 10px;
	border-radius: 3px;
	position: relative;
}
.xxlia-span1 {
	color: #333;
}
.xxli:after {
	height: 1px;
	content: '';
	width: 100%;
	border-top: 1px solid #ebebeb;
	position: absolute;
	bottom: -1px;
	right: 0;
	transform: scaleY(0.5);
	-webkit-transform: scaleY(0.5);
	z-index: 10;
}
.dingyue {
	background-color: transparent;
	width: 47.5px;
	height: 24.5px;
	background-image: url(~@/static/images/kai.png);
	background-repeat: no-repeat;
	background-size: 100%;
	border: none;
	float: right;
	margin-right: 3px;
	margin-top: -3px;
	outline: none;
}
.dingyue2 {
	background-image: url(~@/static/images/guan.png) !important;
}
</style>
