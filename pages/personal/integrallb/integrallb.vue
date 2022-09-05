<template>
	<view class="tonybj">
		<view class="kflb-marsk" @click="optionsTBA()" v-show="coverxs ? true : false"></view>
		<view class="odteil-box">
			<view class="odteil-head-box">
				<view class="odteil-classify-box" id="classify">
					<view style="width: 60px;" class="tibutton" @click="typeTAB(1)">信用卡</view>
					<view class="tibutton" @click="typeTAB(2)">借贷</view>
					<view class="tibutton" :class="{ active: type == 3 }">积分</view>
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
							<li v-for="item in screening" :key="item.cate_id">
								<view
									class="butpdnm"
									:class="{ active: screeningTJ == item.cate_id }"
									:id="'xuan' + item.cate_id"
									@click="TJshanxuan(item.cate_id, item.cate_name)"
								>
									{{ item.cate_name }}
								</view>
							</li>
						</ul>
						<view style="padding: 36px 0 15px 0"><view type="button" class="surrer-btn">确定</view></view>
					</view>
				</view>
			</view>
			<view class="odteil-content-box"></view>
		</view>
	</view>
</template>

<script>
import api from '../../../common/api/api.js';
export default {
	data() {
		return {
			//积分数据
			theorder: [],
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
			type: 3,
			//总页数
			pageCount: 1,
			//展开
			options: 2,
			coverxs: false
		};
	},
	//监听页面加载
	onLoad() {
		this.pullData();
	},
	methods: {
		//拉取积分数据
		pullData: function() {
			api.apiPost('/member/newjforder?page=' + this.page + '&status=' + this.status + '&cate_id=0', '', '', 'get', (status, res) => {
				if (status) {
					this.screening = res.data.cats;
					//this.pageCount = res.data.pageCount;
					//console.log('数据：' + JSON.stringify(res.data));
				} else {
					uni.showToast({
						title: '数据获取失败',
						icon:'none',
						duration: 2000
					});
				}
			});
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
		//切换数据
		typeTAB: function(value) {
			if (value === 1) {
				uni.redirectTo({
					url: '/pages/personal/khcolumn/khcolumn?type=1'
				});
			} else if (value === 2) {
				uni.redirectTo({
					url: '/pages/personal/khcolumn/khcolumn?type=2'
				});
			}
		},
		//切换状态
		statusTAB: function(value) {
			this.status = value;
			this.pullData();
		}
	}
};
</script>

<style></style>
