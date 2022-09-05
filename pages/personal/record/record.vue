<template>
	<view class="tonybj">
		<view class="all-resultsbox">
			<ul>
				<li class="list-results" v-for="(item, key) in resultsData" :key="key">
					<view class="timer-results">
						<strong>{{ shijinData[key].years }}年</strong>
						<span>
							{{ shijinData[key].month }}
							<em>月</em>
						</span>
					</view>
					<view class="mess-results">
						<ol>
							<li>
								<span>个人业绩:</span>
								<em>{{ item.yeji }}元</em>
							</li>
							<li>
								<span>团队业绩:</span>
								<em>{{ item.team_yeji }}元</em>
							</li>
							<li>
								<span>本月收入:</span>
								<em class="bysr">{{ item.total_money }}元</em>
							</li>
						</ol>
					</view>
				</li>
			</ul>
		</view>
	</view>
</template>

<script>
import api from '../../../common/api/api.js';
export default {
	data() {
		return {
			//业绩数据
			resultsData: [],
			//时间
			shijinData: []
		};
	},
	//监听页面加载
	onLoad() {
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
			api.apiPost('/member/totalyeji', '', '', 'get', (status, res) => {
				if (status) {
					this.resultsData = res.data;
					//遍历拆分日期
					for (var i = 0; i < this.resultsData.length; i++) {
						let str = this.resultsData[i].time;
						let arr = str.split('-');
						var time = {
							years: arr[0],
							month: arr[1]
						};
						this.shijinData = this.shijinData.concat(time);
					}
				} else {
					uni.showToast({
						title: '数据获取失败',
						icon: 'none',
						duration: 2000
					});
				}
			});
		}
	}
};
</script>

<style>
.all-resultsbox ul li {
	background-color: #fff;
}
.all-resultsbox ul li.list-results {
	margin-bottom: 14px;
	display: flex;
	display: -webkit-flex;
	display: -ms-flexbox;
}
.timer-results {
	padding: 0 40px;
	margin: 30px 0;
	border-right: 1px solid #f1f4f8;
}
.timer-results strong {
	display: block;
	line-height: 20px;
	font-size: 4.2vw;
}
.timer-results span {
	display: block;
	font-size: 6vw;
	font-weight: 600;
}
.timer-results span em {
	display: inline-block;
	vertical-align: bottom;
	font-size: 12px;
	font-weight: 600;
	font-style: normal;
	margin-bottom: 4px;
}
.mess-results {
	padding: 20px;
	flex: 1;
	-ms-flex: 1;
	-moz-box-flex: 1;
}
.mess-results ol {
	display: flex;
	display: -webkit-flex;
	display: -ms-flexbox;
	flex-direction: column;
	-ms-flex-direction: column;
	justify-content: space-between;
	height: 100%;
}
.mess-results ol li {
	flex: 1;
	-ms-flex: 1;
	-moz-box-flex: 1;
	display: flex;
	display: -webkit-flex;
	display: -ms-flexbox;
	justify-content: space-between;
	align-items: center;
	font-size: 3.5vw;
}
.mess-results ol li span {
	color: #8a8e94;
}
.mess-results ol li em {
	font-style: normal;
	font-weight: 600;
}
.bysr {
	color: #ff3535;
}
</style>
