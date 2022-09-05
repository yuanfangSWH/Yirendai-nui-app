<template>
	<view class="content">
		<view class="wtmsrk1">
			<input type="text" placeholder="给个标题吧,18字左右为阅读体验最佳" class="phonnum1" v-model="title" />
			<view class="xianzwpld"></view>
		</view>
		<view class="wtmsrk2"><textarea maxlength="-1" placeholder="想跟老铁们说点什么？就尽情发挥吧!" class="phonnum2" v-model="content" /></view>
		<view class="pltfimg" v-for="(item, key) in portraitData" :key="key">
			<view class="twyxx" @click="deleteFigure(item.size)"><img class="zsyxx" src="../../../static/images/wyxx.png" alt="" /></view>
			<img class="yhdtp" :src="item.path" alt="" />
		</view>
		<view class="zwfdiv"></view>
		<view class="tpxuanzhe">
			<view class="xianzw"></view>
			<view @click="choosetx()"><img class="wtmdimg" src="../../../static/images/xche.png" alt="" /></view>
			<view class="fastiez" @click="filterData()">发布帖子</view>
		</view>
	</view>
</template>

<script>
import api from '../../../common/api/api.js';
//base64图像转换插件
import { pathToBase64, base64ToPath } from 'image-tools';
export default {
	data() {
		return {
			//标题
			title: '',
			//内容
			content: '',
			//图片数据
			portraitData: [],
			//图片数据转化好的
			TpData: [],
			//点击依据
			ClickData: true
		};
	},
	methods: {
		//选择上传的图片
		choosetx: function() {
			let _this = this;
			uni.chooseImage({
				count: 6,
				sizeType: ['original', 'compressed'],
				sourceType: ['album'],
				success: function(res) {
					_this.portraitData = _this.portraitData.concat(res.tempFiles);
				},
				fail: function(res) {
					uni.showToast({
						title: '图片上传超过限制',
						icon: 'none',
						duration: 2000
					});
				}
			});
		},
		//删除图片
		deleteFigure: function(value) {
			var arr = new Array();
			arr = this.portraitData;
			for (var i = 0; i < arr.length; i++) {
				if (arr[i].size == value) {
					arr.splice(i, 1);
					this.portraitData = arr;
					break;
				}
			}
		},
		filterData: function() {
			//中文、英文、数字包括下划线
			var patrn = /^[\u4E00-\u9FA5A-Za-z0-9_]+$/;
			if (this.ClickData) {
				if (this.title == '') {
					uni.showToast({
						title: '标题不能为空',
						icon: 'none',
						duration: 2000
					});
				} else if (!patrn.test(this.title)) {
					uni.showToast({
						title: '标题不能包含特殊字符',
						icon: 'none',
						duration: 2000
					});
				} else if (this.content == '') {
					uni.showToast({
						title: '内容不能为空',
						icon: 'none',
						duration: 2000
					});
				} else {
					this.ClickData = false;
					this.portrait();
				}
			}
		},
		//发布帖子
		portrait: function() {
			var tilt;
			var _this = this;
			var group = new Array();
			if (this.portraitData != '') {
				this.TpData = '';
				for (var x = 0; x < this.portraitData.length; x++) {
					//base64转换
					pathToBase64(this.portraitData[x].path).then(base64 => {
						tilt = base64 + '|';
						group = group.concat(tilt);
					});
				}
			}
			//异步操作
			setTimeout(function() {
				_this.TpData = group;
				_this.Posting();
			}, 0);
			
		},
		//发帖接口
		Posting:function(){
			var data = {
				title: this.title,
				content: this.content,
				img: this.TpData
			};
			var parameter = '?title=' + this.title + '&content=' + this.content + '&img=' + this.TpData;
			api.apiPost('/member/bbsposted', parameter, data, 'post', (status, res) => {
				if (status) {
					this.ClickData = true;
					uni.showToast({
						title: '帖子发布成功',
						icon: 'none',
						duration: 2000
					});
					setTimeout(function() {
					//返回社区帖子
					uni.navigateBack({
						delta: 1
					});
					}, 1000);
				} else {
					uni.showToast({
						title: '帖子发布失败',
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
.wtmsrk1 {
	height: 80upx;
	width: 680upx;
	margin-left: auto;
	margin-right: auto;
	padding-top: 20upx;
}
.wtmsrk2 {
	min-height: 40upx;
	width: 680upx;
	margin-left: auto;
	margin-right: auto;
	padding-bottom: 30upx;
}
.phonnum1 {
	width: 100%;
	height: 60upx;
	line-height: 60upx;
	font-size: 28upx;
	color: #aec0d9;
}
.phonnum2 {
	width: 100%;
	line-height: 60upx;
	font-size: 28upx;
	color: #aec0d9;
}
.pltfimg {
	min-height: 80upx;
	width: 680upx;
	margin-left: auto;
	margin-right: auto;
	position: relative;
}
.yhdtp {
	width: 100%;
}
.xianzwpld {
	height: 1px;
	width: 680upx;
	margin-left: auto;
	margin-right: auto;
	background-color: #e6e9ef;
	margin-top: 10upx;
}
.xianzw {
	height: 1px;
	width: 680upx;
	margin-left: auto;
	margin-right: auto;
	background-color: #e6e9ef;
}
.tpxuanzhe {
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 85upx;
	background-color: #ffffff;
}
.wtmdimg {
	width: 50upx;
	height: 50upx;
	padding-top: 15upx;
	padding-left: 40upx;
}
.zwfdiv {
	height: 85upx;
}
.twyxx {
	position: absolute;
	width: 56upx;
	height: 56upx;
	top: 25upx;
	right: 25upx;
}
.zsyxx {
	width: 100%;
	height: 100%;
}
.fastiez {
	position: absolute;
	width: 150upx;
	height: 52upx;
	top: 20upx;
	right: 25upx;
	line-height: 52upx;
	text-align: center;
	font-size: 26upx;
	color: #ffffff;
	background-color: #007aff;
}
</style>
