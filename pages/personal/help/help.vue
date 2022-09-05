<template>
	<view>
		<view class="faq-big-box">
			<view class="alliancefom-sosu-box" style="padding: 15px">
				<input placeholder="请输入关键词搜索" v-model="search" type="text" style="margin-top:0;" />
				<button style="outline: none;" @click="searchData()">搜索</button>
			</view>
			<view class="compl-ul-box">
				<ul>
					<li v-for="item in classification" :key="item.cate_id" @click="points(item.cate_id)">
						<img :src="item.cate_img" alt="" />
						<span>{{ item.cate_name }}</span>
					</li>
				</ul>
			</view>
			<view class="faq-list-box">
				<ul>
					<li v-for="(item, key) in helpData" :key="item.id" @click="opeN(item.id)">
						<view class="list-head-questions">
							<view class="tl-list">
								{{ key + 1 }}、{{ item.title }}
								<span></span>
							</view>
							<view class="list-lgimg-faq"><img src="../../../static/images/jt2.png" alt="" :class="{ faqactives: helpZK[key].isShow }" /></view>
						</view>
						<view class="list-ms-response" v-show="helpZK[key].isShow"><rich-text :nodes="item.content"></rich-text></view>
					</li>
				</ul>
			</view>
		</view>
	</view>
</template>

<script>
import api from '../../../common/api/api.js';
//linq插件
import Enumerable from '../../../common/linq/linq.js';
export default {
	data() {
		return {
			//分类数据
			classification: [],
			//帮助中心数据
			helpData: [],
			//数据备份
			helpBF: [],
			//数据展开
			helpZK: [],
			//第一条数据ID
			helpID: '',
			//搜索关键字
			search: ''
		};
	},
	//监听页面加载
	onLoad() {
		this.pullData();
	},
	methods: {
		//拉取分类数据
		pullData: function() {
			api.apiPost('/agent/cjwtcate', '', '', 'get', (status, res) => {
				if (status) {
					this.classification = res.data;
					this.helpID = res.data[0].cate_id;
					this.helpPull();
				} else {
					uni.showToast({
						title: '数据获取失败',
						icon: 'none',
						duration: 2000
					});
				}
			});
		},
		//帮助中心数据
		helpPull: function() {
			api.apiPost('/agent/cjwt?cate=0&search=', '', '', 'get', (status, res) => {
				if (status) {
					this.helpData = res.data;
					this.helpBF = res.data;
					for (var i = 0; i < this.helpData.length; i++) {
						this.helpZK.push({ t_id: this.helpData[i].id, isShow: false });
					}
				} else {
					uni.showToast({
						title: '数据获取失败',
						icon: 'none',
						duration: 2000
					});
				}
			});
		},
		//点击分类
		points: function(id) {
			api.apiPost('/agent/cjwt?cate=' + id + '&search=', '', '', 'get', (status, res) => {
				if (status) {
					this.helpData = res.data;
					this.helpBF = res.data;
					this.helpZK = [];
					for (var i = 0; i < this.helpData.length; i++) {
						this.helpZK.push({ t_id: this.helpData[i].id, isShow: false });
					}
				} else {
					uni.showToast({
						title: '数据获取失败',
						icon: 'none',
						duration: 2000
					});
				}
			});
		},
		//搜索
		searchData: function() {
			api.apiPost('/agent/cjwt?cate=0&search=' + this.search, '', '', 'get', (status, res) => {
				if (status) {
					this.helpData = res.data;
					this.helpBF = res.data;
					this.helpZK = [];
					for (var i = 0; i < this.helpData.length; i++) {
						this.helpZK.push({ t_id: this.helpData[i].id, isShow: false });
					}
				} else {
					uni.showToast({
						title: '数据获取失败',
						icon: 'none',
						duration: 2000
					});
				}
			});
		},
		//展开
		opeN: function(id) {
			for (var i = 0; i < this.helpZK.length; i++) {
				if (this.helpZK[i].t_id == id) {
					if (!this.helpZK[i].isShow) {
						this.helpZK[i].isShow = true;
					} else {
						this.helpZK[i].isShow = false;
					}
				}
			}
		}
	}
};
</script>

<style>
.compl-ul-box ul {
	display: flex;
	display: -webkit-flex;
	flex-wrap: wrap;
	font-size: 15px;
	text-align: center;
	border-bottom: 15px solid #f1f4f8;
	background-color: #fff;
}
.compl-ul-box ul li {
	width: 25%;
	padding: 15px 0;
	color: #97a7b7;
}
.compl-ul-box ul li:a {
	color: #4e90e6;
}
.compl-ul-box ul li img {
	width: 40px;
	height: 40px;
	display: block;
	margin: 0 auto;
}
.faq-list-box {
	background-color: #fff;
}
.compl-ul-box ul li span {
	line-height: 14px;
	font-size: 14px;
	padding-top: 4px;
}
</style>
