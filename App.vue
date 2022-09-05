<script>
import api from 'common/api/api.js';
export default {
	//初始化完成时触发（全局只触发一次）
	onLaunch: function() {
		api.failurePlan();
	},
	//启动或从后台进入前台显示
	onShow: function() {},
	//从前台进入后台
	onHide: function() {}
};
</script>

<style>
/*每个页面公共css*/
uni-page {
	/* background-color: #f1f4f8; */
}
.tonybj {
	background-color: #f1f4f8;
}
.content {
	background-color: #fff;
}
.state-sel {
	height: 50upx;
	width: 100%;
	background-color: #f1f4f8;
}
.swiper-container {
	margin: 0 auto;
	position: relative;
	overflow: hidden;
	-webkit-backface-visibility: hidden;
	-moz-backface-visibility: hidden;
	-ms-backface-visibility: hidden;
	-o-backface-visibility: hidden;
	backface-visibility: hidden;
	/* Fix of Webkit flickering */
	z-index: 1;
}
.swiper-container img {
	width: 100%;
}
uni-swiper .uni-swiper-dots-horizontal {
	bottom: 15px;
}
/*隐藏导航条
uni-page-head {
	display: none;
}*/
/*公共css*/
body,
p,
a,
ul,
li,
ol {
	margin: 0;
	padding: 0;
	font-family: '微软雅黑';
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

ul li,
a {
	text-decoration: none;
	list-style: none;
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	font-family: '微软雅黑';
}

a {
	color: #000;
}

:-moz-placeholder {
	/* Mozilla Firefox 4 to 18 */
	color: #ddd;
}

::-moz-placeholder {
	/* Mozilla Firefox 19+ */
	color: #ddd;
}

input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
	color: #ddd;
}

input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
	color: #ddd;
}

/*webkit是苹果浏览器引擎，tap点击，highlight背景高亮，color颜色，颜色用数值调节。*/

.particulars-box {
	font-size: 12px;
	height: 100%;
	background-color: #f1f4f8;
	max-width: 500px;
}

.ptars-smts-box {
	background-color: #fdfbec;
	padding: 7px 10px;
	color: #ffa648;
	font-size: 12px;
}

.ptars-pepo-box {
	display: flex;
	display: -webkit-flex;
	background-color: #fff;
	border-bottom: 15px solid #f1f4f8;
}

.ptars-pepo-box .pepo-list-box {
	flex: 1;
	-ms-flex: 1;
}

.ptars-pepo-box .pepo-list-box span {
	display: block;
	text-align: center;
}

.ptars-pepo-box .pepo-list-box span:nth-of-type(1) {
	font-size: 30px;
	color: #ffa648;
	font-weight: 500;
	padding: 15px 0 5px 0;
}

.ptars-pepo-box .pepo-list-box span:nth-of-type(2) {
	font-size: 13px;
	color: #98a7b8;
	padding-bottom: 15px;
}

.indent-tab-box {
	display: flex;
	display: -webkit-flex;
	background-color: #fff;
	border-bottom: 1px solid #f1f4f8;
}

.indent-tab-box a {
	flex: 1;
	-ms-flex: 1;
	text-align: center;
	line-height: 55px;
	font-size: 15px;
	text-decoration: none;
	color: #515151;
}

.indent-tab-box a.active {
	color: #4e90e6;
}

.indent-tab-box a.active span {
	display: block;
	height: 3px;
	width: 25px;
	margin: 0 auto;
	background-color: #4e90e6;
}

.list-li-box {
	background-color: #fff;
	border-bottom: 15px solid #f1f4f8;
}

.head-list-box {
	padding: 10px;
	border-bottom: 1px solid #f1f4f8;
	overflow: hidden;
}

.head-list-box img {
	width: 30px;
	height: 30px;
	float: left;
	border-radius: 50%;
}

.head-list-box span {
	line-height: 30px;
}

.tl-xt {
	padding-left: 10px;
	float: left;
}

.lg-xt {
	color: #fff;
	background-color: #4e90e6;
	font-size: 11px;
	margin-left: 5px;
	padding: 0 2rpx;
	border-radius: 2.5px;
}

.tm-xt {
	font-size: 13px;
	color: #98a7b8;
	float: right;
}

.head-ms-box {
	display: flex;
	display: -webkit-flex;
	padding: 10px 10px;
}

.head-ms-box .part-lf-box {
	flex: 2;
	-ms-flex: 2;
}

.head-ms-box .part-rg-box {
	flex: 1;
	-ms-flex: 1;
}

.head-ms-box .part-lf-box span {
	display: block;
	padding-top: 6px;
	color: #98a7b8;
	font-size: 13px;
}

.head-ms-box .part-rg-box span {
	font-size: 22px;
	line-height: 78px;
	color: #ffa648;
	display: block;
	text-align: right;
	padding-right: 15px;
}

.registercard-box {
	background-color: #f1f4f8;
}

.bk-head-box {
	background-color: #fff;
	margin-top: 1px;
	margin-bottom: 15px;
}

.bk-li-box {
	width: 25%;
	display: inline-block;
	padding: 20px 0;
}

.bk-li-box img {
	display: block;
	width: 53px;
	height: 53px;
	margin: 0 auto;
}

.bk-li-box span {
	font-size: 15px;
	padding-top: 5px;
	text-align: center;
	display: block;
}

.yhzx-li-box {
	width: 25%;
	padding: 15px 0;
	display: inline-block;
	background-color: #fff;
}

.hvbq-box {
	width: 50px;
	height: 50px;
	margin: 0 auto;
	display: block;
	position: relative;
}

.yhzx-li-box img {
	width: 50px;
	height: 50px;
	display: block;
	margin: 0 auto;
	border-radius: 50%;
	position: relative;
}

.yhzx-li-box .hvbq-box span {
	position: absolute;
	display: block;
	width: 28px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	right: -10px;
	top: -5px;
	color: #fff;
	font-size: 12px;
	padding-top: 0;
	padding: 0 5px;
	border-radius: 50px;
	background-color: #f35c6f;
	font-weight: 200;
}

.yhzx-li-box span {
	text-align: center;
	display: block;
	font-size: 14px;
	padding-top: 5px;
}

.head-tl-box {
	background-color: #fff;
	padding: 15px;
	height: 20px;
	position: relative;
	display: flex;
	display: -webkit-flex;
	border-bottom: 1px solid #f1f4f8;
}

.head-tl-box .tl-logo {
	width: 20px;
	height: 20px;
	float: left;
	margin-right: 10px;
}

.head-tl-box .tl-box {
	display: inline-block;
	font-size: 15px;
	flex: 1;
	-ms-flex: 1;
	vertical-align: top;
	line-height: 20px;
}

.head-tl-box .tl-box .sm-xt {
	font-size: 13px;
	color: #98a7b8;
	float: right;
}

.head-tl-box .hd-jtmg {
	width: 10px;
	height: 16px;
	position: absolute;
	right: 15px;
	top: 50%;
	transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-webkit-transform: translateY(-50%);
	-o-transform: translateY(-50%);
}

.rkph-box {
	margin-top: 15px;
}

.rkph-li-box {
	margin-bottom: 1px;
	background-color: #fff;
	padding: 20px 15px;
	display: flex;
	display: -webkit-flex;
}
.rkph-li-box .rkph-li-box-img {
	width: 240upx;
	height: 160upx;
}
.rkph-li-box img {
	width: 100%;
	height: 100%;
}

.rkph-ms-box {
	flex: 1;
	-ms-flex: 1;
	font-size: 15px;
	padding-left: 15px;
}

.rkph-ms-box span {
	display: block;
}

.rkph-ms-box p.tl-xts {
	font-size: 17px;
	font-weight: 500;
	display: block;
	width: 100%;
}

.rkph-ms-box span.ms-xt {
	font-size: 13px;
	color: #98a7b8;
	padding: 8px 0;
	display: block;
	text-align: left;
}
.rkph-ms-box span.contens {
	max-width: 130px;
	overflow: hidden;
	white-space: nowrap;
	font-size: 13px;
	text-overflow: ellipsis;
	display: inline-block;
}

.bq-box span {
	display: inline-block;
	font-size: 11px;
	color: #fff;
	border: 1px solid #4b82f6;
	border-radius: 2px;
	padding: 0 2.5px;
	margin-right: 5px;
	background-color: #4b82f6;
}

/*进度查询*/

.checkprogress-box {
	border-top: 1px solid #eee;
}

.ceprs-ul-box {
	display: flex;
	display: -webkit-flex;
	flex-flow: wrap;
}

.ceprs-li-box a {
	color: #000;
}

.ceprs-li-box {
	width: 39.73%;
	height: 35px;
	padding: 10px 5%;
	border-bottom: 1px solid #eee;
	border-right: 1px solid #eee;
}

.ceprs-li-box:nth-of-type(2n) {
	border-right: none;
}

.ceprs-li-box img {
	width: 35px;
	height: 35px;
	border-radius: 50%;
}

.ceprs-li-box span {
	font-size: 15px;
	display: inline-block;
	vertical-align: top;
	line-height: 30px;
	padding-left: 10px;
}

/*我的徒弟*/

.team-box {
	max-width: 500px;
}

.team-userms-box {
	width: 100%;
	height: 200px;
	position: relative;
	background: url(~@/static/images/bgmyteam_icon.png) no-repeat;
}

.team-userms-box img.head-img {
	width: 60px;
	height: 60px;
	position: absolute;
	top: 30px;
	left: 50%;
	transform: translateX(-50%);
	-webkit-transform: translateX(-50%);
	-ms-transform: translateX(-50%);
	-moz-transform: translateX(-50%);
	-o-transform: translateX(-50%);
	border-radius: 50%;
}

.team-userms-box span {
	font-size: 15px;
	color: #fff;
}

.team-userms-box .userms-name {
	text-align: center;
	display: block;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	-webkit-transform: translateX(-50%);
	-ms-transform: translateX(-50%);
	-moz-transform: translateX(-50%);
	-o-transform: translateX(-50%);
	top: 105px;
}

.team-userms-box .userms-name text {
	display: block;
	padding-right: 20px;
}

.team-userms-box .userms-name img.bq-icon {
	width: 15px;
	height: 15px;
	position: absolute;
	right: -18px;
	top: 50%;
	transform: translateY(-50%);
	-webkit-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-o-transform: translateY(-50%);
}

.team-ms-box {
	background-color: #323233;
	width: 100%;
	display: flex;
	display: -webkit-flex;
	position: absolute;
	left: 0;
	bottom: 0;
}

.team-ms-box .vertucal-bar {
	width: 1px;
	height: 25px;
	background-color: #39393a;
	margin: 14.5px 0;
}

.team-ms-box .team-sum-box,
.team-ms-box .team-performance-box {
	flex: 1;
	-ms-flex: 1;
}

.team-ms-box span {
	text-align: center;
	display: block;
}

.team-ms-box .sm-sz {
	font-size: 12px;
	padding: 5px 0;
}

.team-ms-box .big-sz {
	font-size: 20px;
}

.ul .li-team {
	border-top: 1px solid #f1f4f8;
	background-color: #fff;
	padding: 18px 15px;
	height: 45px;
	display: flex;
	display: -webkit-flex;
}

.ul .li-team .head-ig {
	width: 45px;
	height: 45px;
	display: inline-block;
	border-radius: 50%;
}

.ul .li-team .rg-ms-box {
	vertical-align: top;
	padding-left: 10px;
	flex: 1;
	-ms-flex: 1;
}

.ul .li-team .rg-ms-box .tp-ms-box {
	display: block;
	width: 100%;
}

.ul .li-team .rg-ms-box .tp-ms-box {
	font-size: 15px;
	margin-top: 4px;
}

.rg-ms-box .tp-ms-box .team-name {
	font-size: 15px;
	color: 1a1a1a;
	display: inline-block;
	vertical-align: bottom;
}

.rg-ms-box .tp-ms-box img {
	margin-left: 5px;
	width: 15px;
	height: 15px;
	display: inline-block;
	margin-bottom: -2px;
}

.rg-ms-box .tp-ms-box a {
	float: right;
	height: 18px;
	line-height: 18px;
	color: #4e90e6;
	border: 1px solid #4e90e6;
	border-radius: 100px;
	font-size: 12px;
	padding: 0 6px;
}

.rg-ms-box .tp-ms-box a img {
	width: 24px;
	height: 21px;
}

.li-team .regit-timer {
	display: block;
	font-size: 13px;
	color: #98a7b8;
	padding: 3px 0;
}

.sxtimer-box {
	padding: 10px 15px;
	font-size: 14px;
	height: 20px;
}

.sxtimer-box label {
	line-height: 20px;
	color: #515151;
}

.sxtimer-box span {
	float: right;
	font-size: 12px;
	color: #757575;
	line-height: 20px;
}

.invite-firends span {
	display: block;
	color: #5190e7;
	text-align: center;
	font-size: 15px;
}

.yqhy {
	display: block;
	text-align: center;
	color: #4f90e7;
	font-size: 15px;
	padding: 20px;
}

/*徒弟资料*/

.teamatum-head-box .slider-hd {
	width: 100%;
	display: block;
	z-index: 9;
}

.teamatum-head-box .user-hd {
	width: 90px;
	height: 90px;
	margin: 0 auto;
	display: block;
	margin-top: -60px;
	z-index: 99;
	border-radius: 50%;
}

.usern-xt {
	display: block;
	text-align: center;
	font-size: 17.5px;
	margin: 15px 0 40px;
	height: 22px;
}

.usern-xt .ic-xt {
	font-size: 12.5px;
	background-color: #fe6561;
	color: #fff;
	margin-left: 15px;
	padding: 0 4px;
	border-radius: 2px;
	display: inline-block;
	vertical-align: top;
	margin-top: 5px;
}

.user-li-box {
	padding: 15px 0;
	font-size: 15px;
	border-bottom: 1px solid #f1f4f8;
	margin: 0 15px;
}

.user-li-box .rg-cl {
	float: right;
	color: #98a7b8;
}

/*收益明细*/

/* pages/recordcashs/recordcashs.wxss */

.recordcashs-box {
	background-color: #fff;
	margin-top: 1px;
}

.record-head-box {
	display: flex;
	display: -webkit-flex;
	position: relative;
}

.record-head-box.activefl {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
}

.record-head-box a {
	font-size: 15px;
	flex: 1;
	-ms-flex: 1;
	text-align: center;
	line-height: 50px;
	color: #515151;
}

.record-head-box a.active {
	color: #4e90e6;
}

.record-head-box a.active span {
	display: block;
	height: 3px;
	width: 25px;
	margin: 0 auto;
	background-color: #4e90e6;
}

.record-li {
	border-top: 15px solid #f1f4f8;
}

.prd-timer-box {
	height: 30px;
	padding: 10px 15px;
	border-bottom: 1px solid #f1f4f8;
	background-color: #fff;
}

.prd-timer-box img {
	width: 30px;
	height: 30px;
	float: left;
	border-radius: 50%;
}

.prd-timer-box span {
	line-height: 30px;
	height: 30px;
}

.prd-timer-box .head-tl-xt {
	color: #1a1a1a;
	font-size: 15px;
	float: left;
	text-indent: 10px;
}

.rg-xt {
	color: #98a7b8;
	font-size: 12px;
	float: right;
}

.record-li .prd-ms-box {
	padding: 20px 15px;
	font-size: 15px;
	color: #98a7b8;
	background-color: #fff;
	display: flex;
	display: -webkit-flex;
}

.record-li .prd-ms-box .prd-lf-box {
	flex: 2;
	-ms-flex: 2;
}

.record-li .prd-ms-box .prd-lf-box span {
	display: block;
	padding-top: 6px;
}

.record-li .prd-ms-box .prd-rg-box {
	flex: 1;
	-ms-flex: 1;
	font-size: 20px;
	color: #ffb646;
	position: relative;
}

.record-li .prd-ms-box .prd-rg-box span {
	line-height: 52px;
	text-align: right;
	display: block;
	font-weight: 500;
}

.record-li .prd-ms-box .jj-xt span {
	color: #ffb261;
}

.ft-sz {
	font-size: 15px;
}

/*贷款超市*/

.pmd-box {
	height: 30px;
	background-color: #fff;
	padding: 5px 15px;
	border-bottom: 1px solid #f1f4f8;
}

.pmd-box img {
	width: 30px;
	height: 30px;
	margin-right: 10px;
	border-radius: 50%;
}

.pmd-box ul {
	display: inline-block;
	vertical-align: top;
}

.pmd-box ul li {
	display: none;
}

.pmd-box ul li.actives {
	display: block;
}

.pmd-box span {
	line-height: 30px;
	display: inline-block;
	vertical-align: top;
	font-size: 13px;
	color: #5190e7;
}

.pmd-box span.bhxt {
	color: #000;
}

.record-head-box {
	background-color: #fff;
	margin-top: 15px;
}

.mlan-li-box {
	background-color: #fff;
	border-bottom: 1px solid #f1f4f8;
	padding: 15px;
	display: flex;
	display: -webkit-flex;
}

.mlan-li-box img {
	width: 55px;
	height: 55px;
	border-radius: 5px;
	display: inline-block;
}

.mlan-li-box .mlan-rg-box {
	flex: 1;
	-ms-flex: 1;
	padding-left: 10px;
}

/* .mlan-tle-box{margin-bottom: 10rpx;} */

.mlan-tle-box span {
	display: inline-block;
	font-size: 15px;
	margin-right: 10px;
	vertical-align: top;
}

.mlan-tle-box .mlan-bql-box {
	display: inline-block;
}

.mlan-tle-box .mlan-bql-box span {
	font-size: 12px;
	color: #5190e7;
	border: 1px solid #5190e7;
	margin-right: 1px;
	padding: 0 2px;
}

.mlan-ms-box {
	display: flex;
	display: -webkit-flex;
}

.mlan-ms-box .mlan-lf-box {
	flex: 2.3;
	-ms-flex: 2.3;
	max-width: 190px;
}

.mlan-ms-box .mlan-lf-box span {
	display: block;
	font-size: 12px;
	color: #98a7b8;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}

.mlan-ms-box .mlan-rg-xt {
	display: block;
	flex: 1;
	-ms-flex: 1;
	line-height: 34px;
	text-align: right;
	color: #ffa646;
	font-size: 17px;
	font-weight: 600;
	font-family: '微软雅黑';
}

/*购买会员*/

.prucard-mg-box {
	background-color: #fff;
}

.prucard-mg-box img {
	display: block;
	margin: 0 auto;
	width: 100%;
}

.pruscard-fixed-box {
	display: flex;
	display: -webkit-flex;
	position: fixed;
	left: 0;
	bottom: 0;
	background-color: #fff;
	width: 100%;
}

.pruscard-ms-box {
	flex: 1;
	-ms-flex: 1;
	height: 50px;
	border-top: 1px solid #c9c9c9;
}

.pruscard-ms-box span {
	font-size: 15px;
	line-height: 50px;
}

.pruscard-ms-box span.xy-xt {
	font-size: 12px;
	display: inline-block;
	vertical-align: middle;
}

.pruscard-ms-box span.xy-xt a {
	color: #3c8bff;
}

.pruscard-ms-box span.xy-xt text {
	font-size: 13px;
	color: #4e90e6;
}

.pruscard-ms-box span.mney-xt {
	font-size: 17px;
	float: right;
	color: #3c8bff;
	font-weight: 500;
}

.pruscard-fixed-box button {
	padding: 0 14px;
	background-color: #fff;
	border-radius: 0;
	border-style: none;
	border-left: 1px solid #c9c9c9;
	border-top: 1px solid #c9c9c9;
	color: #97a7b7;
	font-size: 15px;
	line-height: 50px;
	float: right;
}

.pruscard-fixed-box button.active {
	background-color: #fff;
	color: #fff;
	border-style: none;
	border-radius: 0;
	float: right;
	margin: 0;
	font-size: 15px;
	line-height: 50px;
	border-top: 1px solid #c9c9c9;
}

.pruscard-fixed-box button a {
	padding: 6px 15px;
	background: -webkit-linear-gradient(#3c8aff, #37c4ff); /* Safari 5.1 - 6.0 */
	background: -o-linear-gradient(#3c8aff, #37c4ff); /* Opera 11.1 - 12.0 */
	background: -moz-linear-gradient(#3c8aff, #37c4ff); /* Firefox 3.6 - 15 */
	background: linear-gradient(#3c8aff, #37c4ff); /* 标准的语法 */
	color: #fff;
	border-radius: 100px;
	font-weight: 500;
	font-size: 14px;
	box-shadow: 0 0 10px 0 #e4f6ff;
	-webkit-box-shadow: 0 0 10px 0 #e4f6ff;
}
.pruscard-fixed-box button a.active {
	background: #d1d6de;
}

button::after {
	border-style: none;
}

.radio-group {
	display: inline-block;
	padding-left: 10px;
	padding-right: 2px;
	width: 16px;
	height: 16px;
	vertical-align: middle;
}

.radio-group input {
	width: 15px;
	height: 15px;
	display: block;
}

.wx-radio-input.wx-radio-input-checked {
	width: 15px;
	height: 15px;
}

.wx-radio-wrapper {
	width: 15px;
	height: 15px;
}

.hb-ms-box {
	display: flex;
	display: -webkit-flex;
}

.hb-img {
	flex: 1;
	-ms-flex: 1;
	position: relative;
}

.hb-img img {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border-radius: 50%;
	-webkit-transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
	-moz-transform: translate(-50%, -50%);
	-o-transform: translate(-50%, -50%);
}

.hb-ms-box .hb-img img {
	width: 115px;
	height: 115px;
}

.hb-lf-box {
	width: 210px;
	padding: 40px 0;
	padding-left: 20px;
}

.hb-rg-box {
	width: 210px;
	padding: 40px 0;
	padding-right: 20px;
}

.hb-tl {
	font-size: 15px;
	font-weight: 500;
}

.line-bt {
	height: 3px;
	width: 15px;
	background-color: #0bb6fe;
	margin-bottom: 10px;
}

.hb-smxt {
	font-size: 12px;
	color: #97a7b7;
}

/*确认购买*/

.form-cz-box {
	font-size: 15px;
}

.form-cz-box .head-tl {
	margin: 20px 15px;
}

.form-cz-box span {
	color: #98a7b8;
	display: inline-block;
}

.wx-head-box img {
	width: 65px;
	height: 65px;
	display: block;
	margin: 0 auto;
	margin-top: 40px;
	border-radius: 50%;
}

.wx-head-box text {
	font-size: 15px;
	color: #97a7b7;
	display: block;
	text-align: center;
	margin: 10px 0 25px;
}

.ipt-box-cl {
	border-bottom: 1px solid #f1f4f8;
	background-color: #fff;
	display: flex;
	display: -webkit-flex;
	padding: 3px 0;
}

.ipt-box-cl input {
	flex: 1;
	-ms-flex: 1;
	line-height: 30px;
	padding: 10px 0;
	padding-left: 15px;
	color: #1a1a1a;
	border-style: none;
	font-size: 15px;
}

.ipt-box-cl span {
	text-align: right;
	width: 85px;
	line-height: 50px;
	display: block;
	padding-left: 0px;
	font-size: 13px;
}

.ipt-box-cl span.send-yzm-btn {
	color: #4e90e6;
	text-align: center;
	padding-right: 10px;
	padding-left: 0;
}

.btn-form {
	background-color: #4e90e6;
	color: #fff;
	font-size: 16px;
	margin: 0 auto;
	padding: 3px 0;
	margin-top: 40px;
	width: 90%;
	display: block;
	line-height: 2.5555555;
	border-style: none;
	border-radius: 5px;
	font-size: 18px;
}

/*个人中心*/

.personalct-box {
	font-size: 15px;
	padding-bottom: 15px;
}

.persn-head-box {
	background-color: #4e90e6;
	padding: 25px 15px;
	position: relative;
	padding-bottom: 0;
}

.persn-head-box img.head-img {
	width: 65px;
	height: 65px;
	border-radius: 50%;
	display: block;
	margin: 0 auto;
	/*box-shadow: 0 0 10px 0 #F1F4F8;*/
	/*-webkit-box-shadow: 0 0 10px 0 #F1F4F8;*/
	border: 3px solid rgba(255, 255, 255, 0.4);
}

.persn-head-box div.userid-name {
	position: relative;
	height: 30px;
}

.persn-head-box div.userid-name .uobox-prev {
	display: inline-block;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
}

.persn-head-box div.userid-name text {
	display: block;
	text-align: center;
	color: #fff;
	padding: 5px 0;
}

.dali-ms-box {
	display: flex;
	display: -webkit-flex;
	padding: 17px 0 13px 0;
	font-size: 14px;
}

.dali-ms-box span {
	flex: 1;
	-ms-flex: 1;
	color: #a9caf5;
	text-align: center;
}

.dali-ms-box div {
	width: 1px;
	height: auto;
	background-color: rgba(255, 255, 255, 0.2);
	margin: 3px 0;
}

/* .persn-head-box view.userid-name .name-box-head{position: relative;border-radius: 100px;color: #a9b6c4;display: inline-block;}
	
	/* .persn-head-box view.userid-name .name-box-head{position: relative;border-radius: 100px;color: #a9b6c4;display: inline-block;}
	.persn-head-box view.userid-name .name-box-head text{color: #a9b6c4;display: inline-block;background-color: #fff;padding: 3rpx 10rpx 3rpx 40rpx;margin: 10rpx 0;line-height: normal;border-radius: 100px;font-size: 22rpx;} */

.persn-head-box div.userid-name img {
	position: absolute;
	width: 15px;
	height: 15px;
	right: 3px;
	top: 50%;
	transform: translateY(-50%);
	-webkit-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-o-transform: translateY(-50%);
}

.persn-head-box div.userid-name span:nth-of-type(2) {
	font-size: 13px;
}

.persn-head-box div.userid-name span {
	display: block;
	color: #fff;
	line-height: 33px;
	font-family: 18px;
	font-weight: 500;
}

img.lg-lf {
	width: 24px;
	height: 24px;
	position: absolute;
	top: 50%;
	left: 10px;
	transform: translateY(-50%);
	-webkit-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-o-transform: translateY(-50%);
}

img.jt-rg {
	width: 8px;
	height: 15px;
	position: absolute;
	top: 50%;
	right: 20px;
	transform: translateY(-50%);
	-webkit-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-o-transform: translateY(-50%);
}

.ptars-smts-box {
	background-color: #fdfbec;
	padding: 8px 15px;
	word-break: keep-all;
	/* 不换行 */
	white-space: nowrap;
	/* 不换行 */
	overflow: hidden;
	/* 内容超出宽度时隐藏超出部分的内容 */
	text-overflow: ellipsis;
	/* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
	color: #ffa648;
	font-size: 12px;
	position: relative;
}

.ptars-smts-box img {
	float: right;
	width: 8px;
	height: 17px;
	position: absolute;
	top: 50%;
	right: 12px;
	transform: translateY(-50%);
	-webkit-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-o-transform: translateY(-50%);
}

.zhsrts-box {
	display: flex;
	display: -webkit-flex;
	background-color: #fff;
	padding: 15px 0 15px;
}

.zhsrts-box span {
	display: block;
	text-align: center;
}

.zhsrts-box .zhsrts-er-box {
	flex: 1.5;
	-ms-flex: 1.5;
}

.zhsrts-box .zhsrts-er-box span:nth-of-type(1) {
	color: #4e90e6;
	font-size: 20px;
	font-weight: 500;
}

.zhsrts-box .zhsrts-er-box span:nth-of-type(2) {
	color: #98a7b8;
	font-size: 13px;
	padding: 5px 0;
}

.zhsrts-box .zhsrts-er-box span.zsrhs {
	color: #ff6660;
}

.zhsrts-box .zhsrts-btn-box {
	flex: 1;
	-ms-flex: 1;
	position: relative;
}

.zhsrts-box .verite-xt {
	width: 1px;
	height: auto;
	margin: 9px 0;
	background-color: #f1f4f8;
}

.zhsrts-box .zhsrts-btn-box button {
	background-color: #fff;
	border-style: none;
	border: 1px solid #5190e7;
	color: #5190e7;
	border-radius: 100px;
	font-size: 15px;
	line-height: 1.8;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	-webkit-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	padding: 0 20px;
}

/*.personalct-ul-box {
		border-bottom: 15px solid #f1f4f8;
	}*/

.personalct-li-box {
	background-color: #fff;
	margin-bottom: 1px;
	padding: 17px 15px;
	position: relative;
	padding-left: 20px;
}

.personalct-li-box text {
	display: inline-block;
	line-height: 23px;
}

.personalct-li-box .list-lg {
	width: 23px;
	height: 23px;
	display: inline-block;
	vertical-align: top;
}

/*未登录时  */

.no-lg {
	display: block;
	color: #fff;
	line-height: normal;
	padding: 20px 0;
	text-align: center;
}

.no-lg span a {
	color: #fff;
}

/*我的客服  */

.mykf {
	width: 100%;
	display: block;
	border-style: none;
	line-height: normal;
	text-align: left;
	position: initial;
	font-size: 15px;
	padding-left: 0;
	padding-right: 0;
	color: #000;
	overflow: initial;
}

button::after {
	height: auto;
}

/*  */

.gnq-head-box {
	background-color: #fff;
	padding: 10px 15px;
	margin-bottom: 1px;
}

.gnq-head-box img {
	width: 17.5px;
	height: 17.5px;
	display: inline-block;
	vertical-align: middle;
}

.gnq-head-box span {
	display: inline-block;
	padding-left: 10px;
	vertical-align: middle;
}

.gnq-ul-box {
	display: flex;
	display: -webkit-flex;
	background-color: #fff;
	padding: 0 15px;
}

.gnq-ul-box .gnq-li-box {
	flex: 1;
	-ms-flex: 1;
	padding: 30px 0;
}

.gnq-ul-box .gnq-li-box img {
	display: block;
	width: 50px;
	height: 50px;
	margin: 0 auto;
}

.gnq-ul-box .gnq-li-box span {
	text-align: center;
	display: block;
	color: #98a7b8;
	padding-top: 10px;
	font-size: 14px;
}

.rg-smxt {
	float: right;
	padding-right: 25px;
	font-size: 14px;
	color: #98a7b8;
}

.wxslider {
	width: 100%;
}

.btn-course {
	background-color: #4e90e6;
}

.lcative {
	margin: 15px 0;
}

/*报表*/

/*用户数据  */

.stem-data-user {
	background: -webkit-linear-gradient(#3883ff, #58b4ff);
	/* Safari 5.1 - 6.0 */
	background: -o-linear-gradient(#3883ff, #58b4ff);
	/* Opera 11.1 - 12.0 */
	background: -moz-linear-gradient(#3883ff, #58b4ff);
	/* Firefox 3.6 - 15 */
	background: linear-gradient(#3883ff, #58b4ff);
	/* 标准的语法 */
	padding: 15px 10px;
}

.stem-user-box img {
	width: 38px;
	height: 38px;
	box-shadow: 0 0 10px 0 #f1f4f8;
	-webkit-box-shadow: 0 0 10px 0 #f1f4f8;
	display: inline-block;
	vertical-align: middle;
	border-radius: 50%;
}

.stem-user-box span {
	font-size: 14px;
	color: #fff;
	margin-left: 10px;
}

.stem-data-box span {
	color: #fff;
	text-align: center;
	display: block;
}

.grlice-box,
.wdrdt-box {
	padding: 20px 0 10px 0;
}

.stem-data-box .data-title-xt {
	padding: 5px 0;
	font-size: 15px;
	font-weight: 200;
}

.grlice-box .grlice-mony-xt {
	font-size: 26px;
	font-weight: 500;
}

.wdrdt-box .wdrdt-mony-xt {
	font-size: 24px;
	font-weight: 500;
}

/*可提现金额，提现  */

.wdrdt-mony-box {
	background-color: #4ba2ff;
	padding: 10px;
}

.wdrdt-mony-box span {
	font-size: 14px;
	color: #fff;
	line-height: 34px;
}

.wdrdt-mony-box span span.mony-xt-wd {
	font-size: 16px;
	font-weight: 500;
}

.wdrdt-mony-box .wdrdt-btn {
	float: right;
	font-size: 15px;
	text-align: center;
	color: #4f90e7;
	background-color: #fff;
	border-radius: 100px;
	width: 90px;
	border-style: none;
	line-height: 35px;
	margin-right: 15px;
}

.wdrdt-mony-box .wdrdt-btn::after {
	content: none;
}

/*操作列表  */

.handle-list-box {
	border-top: 15px solid #f1f4f8;
}

.lists-li-box {
	background-color: #fff;
	padding: 15px 10px;
	border-bottom: 1px solid #f1f4f8;
	position: relative;
}

.lists-li-box img {
	width: 20px;
	height: 20px;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	-webkit-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
}

.lists-li-box img.icon_btn {
	left: 10px;
}

.lists-li-box img.ltjt-btn {
	height: 17px;
	width: 8px;
	right: 20px;
}

.lists-li-box span {
	font-size: 15px;
	padding-left: 30px;
	display: inline-block;
}

/*生成海报*/

.poster-big-box {
	background-color: #f1f4f8;
	padding: 20px 0;
}

.poster-big-box img {
	width: 80%;
	display: block;
	margin: 0 auto;
}

.poster-list-box ul {
	display: flex;
	display: -webkit-flex;
	padding: 0 10%;
}

.poster-list-box ul li {
	flex: 1;
	-ms-flex: 1;
	margin: 20px 0;
}

.poster-list-box ul li img {
	width: 66px;
	height: 66px;
	display: block;
	margin: 0 auto;
}

.poster-list-box ul li img.actives {
	border: 4px solid #4f90e7;
	margin-top: -4px;
}

/*消息*/

.infom-li {
	background-color: #fff;
	padding: 15px;
	border-bottom: 1px solid #f1f4f8;
}

.infom-li .infom-img-box {
	width: 45px;
	height: 45px;
	position: relative;
	background-color: #fff;
}

.smdd {
	background-color: #ff534c;
	border-radius: 50%;
	position: absolute;
	top: 0px;
	right: 0px;
	display: block;
	color: #fff;
	width: 10px;
	height: 10px;
	text-align: center;
	vertical-align: bottom;
	z-index: 999;
}

.smdds {
	background-color: #ff534c;
	border-radius: 50%;
	position: absolute;
	top: 0;
	right: -2px;
	display: block;
	color: #fff;
	width: 10px;
	height: 10px;
	text-align: center;
	vertical-align: bottom;
	z-index: 999;
}

.infom-li .infom-img-box img {
	z-index: 99;
	width: 50px;
	height: 50px;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	-webkit-transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
	-moz-transform: translate(-50%, -50%);
	-o-transform: translate(-50%, -50%);
}

.infom-li .infom-ms-box {
	flex: 1;
	-ms-flex: 1;
	padding-left: 15px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	position: relative;
}

.infom-li .infom-ms-box .infom-tp-box {
	display: flex;
	display: -webkit-flex;
	margin-bottom: 4px;
}

.infom-li .infom-ms-box .infom-tp-box span {
	font-size: 15px;
	flex: 1;
	-ms-flex: 1;
	line-height: 18px;
}

.infom-li .infom-ms-box .infom-tp-box span:nth-of-type(2) {
	font-size: 12px;
	color: #dbe5ef;
	text-align: right;
}

.infom-li .infom-ms-box .infom-bt-xt {
	font-size: 13px;
	color: #98a7b8;
	position: absolute;
	bottom: 0;
}

.footer-box {
	background-color: #fff;
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
	border-top: 1px solid #f1f4f8;
}

.footer-box ul {
	display: flex;
	display: -webkit-flex;
	width: 100%;
}

.footer-box ul li {
	flex: 1;
	-ms-flex: 1;
}

.footer-box ul li .bq {
	width: 25px;
	height: 25px;
	display: block;
	margin: 0 auto;
	position: relative;
}

.footer-box ul li img {
	width: 25px;
	height: 25px;
	display: block;
	margin: 0 auto;
	padding-top: 0;
}

.footer-box ul li span {
	display: block;
	text-align: center;
	font-size: 12px;
	color: #a9b7b7;
	line-height: 18px;
}

.footer-box ul li span.actives {
	color: #4f90e7;
}

/*常见问题界面代码样式*/

.faq-big-box .faq-nav-head {
	position: relative;
	width: 100%;
	height: 160px;
	background: url(~@/static/images/faq-bg.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
}

.faq-big-box .faq-nav-head .faq-btn-ph {
	outline: none;
	padding: 0 12px 0 7px;
	background: #2497cf;
	border-style: none;
	border-radius: 100px;
	position: absolute;
	bottom: 12px;
	left: 50%;
	transform: translateX(-50%);
	-webkit-transform: translateX(-50%);
	-ms-transform: translateX(-50%);
	-moz-transform: translateX(-50%);
}

.faq-big-box .faq-nav-head .faq-btn-ph img {
	display: inline-block;
	height: 30px;
	width: 30px;
	vertical-align: middle;
}

.faq-big-box .faq-nav-head .faq-btn-ph span {
	display: inline-block;
	height: 30px;
	line-height: 30px;
	color: #fff;
}

.faq-list-box ul li {
	padding: 0 15px;
	border-bottom: 1px solid #f1f4f8;
}

.list-head-questions {
	padding: 15px 0;
	display: flex;
	display: -webkit-flex;
	display: -ms-flexbox;
}

.list-head-questions .list-q-faq {
	flex: 0.2;
	-webkit-flex: 0.2;
	padding-top: 3px;
}

.tl-list {
	font-size: 16px;
	flex: 1;
	-ms-flex: 1;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.list-head-questions .list-q-faq span {
	font-style: normal;
	background: #5190e7;
	color: #fff;
	width: 20px;
	height: 20px;
	/*line-height:17.5px;*/
	text-align: center;
	display: block;
}

.list-head-questions .list-til-faq {
	flex: 2;
	-webkit-flex: 2;
	font-size: 16px;
	line-height: 26px;
}

/*重要字用红色表示*/

.list-head-questions .list-til-faq span {
	color: #fe6561;
}

.list-head-questions .list-lgimg-faq {
	flex: 0.1;
	-webkit-flex: 0.1;
	justify-content: flex-end;
	position: relative;
}

.list-head-questions .list-lgimg-faq img {
	width: 11upx;
	height: 6upx;
	position: absolute;
	right: 0;
	top: 50%;
	transform: translateY(-50%) rotate(-90deg);
	-webkit-transform: translateY(-50%) rotate(-90deg);
	-ms-transform: translateY(-50%) rotate(-90deg);
	-moz-transform: translateY(-50%) rotate(-90deg);
}

.list-head-questions .list-lgimg-faq .faqactives {
	transform: translateY(-50%);
	-webkit-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
}

.list-ms-response {
	padding: 2px 10%;
	font-size: 15px;
	color: #a5b3c6;
	padding-bottom: 18px;
}

.classification-box {
	background-color: #f1f4f8;
	padding: 15px 10px;
	display: flex;
	display: -webkit-flex;
}

.classification-box .clfy-li-box {
	display: inline-block;
	font-size: 13px;
	flex: 1;
	-ms-flex: 1;
}

.classification-box .clfy-li-box span {
	background-color: #fff;
	color: #000;
	padding: 3px 4px;
	border-radius: 100px;
	display: block;
	margin: 0 auto;
	width: 70%;
	text-align: center;
}

.classification-box .clfy-li-box span.active {
	background-color: #4e90e6;
	color: #fff;
}

/*提现*/

/*提现金额  */

.wrd-monys-box {
	background-color: #fff;
	font-size: 15px;
	margin-bottom: 15px;
}

.wx-head-box span {
	display: block;
	text-align: center;
	margin: 10px 0 25px;
}

.wrd-monys-box .wrd-title-head {
	font-size: 15px;
	display: block;
	padding: 15px;
	color: #1a1a1a;
}

.wrd-monyipt-box {
	padding: 30px 15px;
	display: flex;
	display: -webkit-flex;
	border-bottom: 1px solid #f1f4f8;
	border-top: 1px solid #f1f4f8;
}

.mony-icon {
	font-size: 25px;
	line-height: 40px;
	padding-right: 5px;
}

.wrd-monyipt-box input {
	flex: 1;
	-ms-flex: 1;
	border-style: none;
	font-size: 20px;
}

#btn_wrdts {
	line-height: 40px;
	color: #4f90e7;
	padding-left: 10px;
}

.wrd-monys-box .ys-mony-xt {
	color: #98a7b8;
	display: block;
	padding: 15px;
}

/*确认提现按钮  */

.ipt-box-cl span.btn-disabled {
	background-color: #fff;
	color: #757575;
}

.btn-sure-ts {
	width: 90%;
	line-height: 50px;
	background-color: #4f90e7;
	color: #fff;
	font-size: 18px;
	border-style: none;
	border-radius: 5px;
	display: block;
	margin: 20px auto;
	cursor: pointer;
	margin-top: 30px;
}

.tsxt {
	color: #98a7b8;
	display: block;
	text-align: center;
	font-size: 14px;
	padding: 20px 0;
	padding-top: 0;
}

/*个人信息*/

.editprofile-box {
	font-size: 15px;
	margin-top: 1px;
}

.edit-ple-box {
	background-color: #fff;
}

.edit-ple-box .edit-list-li {
	border-bottom: 1px solid #f1f4f8;
	padding: 18px 30px 18px 20px;
	position: relative;
}

.wx-tl-xt {
	line-height: 38px;
}

.edit-list-li .wx-headig {
	float: right;
	width: 50px;
	height: 50px;
	display: block;
	border-radius: 50%;
}

.edit-list-li .wx-jt {
	width: 10px;
	height: 18px;
	position: absolute;
	top: 50%;
	right: 12px;
	transform: translateY(-50%);
	-webkit-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-o-transform: translateY(-50%);
}

.cl-rg {
	color: #98a7b8;
	float: right;
	text-align: right;
	display: inline-block;
	max-width: 130px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}

/*会员等级与权限*/

.gdct-head-box {
	border-top: 1px solid #f1f4f8;
	padding-top: 30px;
}

.gdct-head-box img {
	width: 65px;
	height: 65px;
	display: block;
	margin: 0 auto;
	border-radius: 50%;
}

.djxt {
	background: -webkit-linear-gradient(left, #5dbcff, #3985ff);
	background: -o-linear-gradient(right, #5dbcff, #3985ff);
	background: -moz-linear-gradient(right, #5dbcff, #3985ff);
	background: linear-gradient(to right, #5dbcff, #3985ff);
	font-size: 15px;
	color: #fff;
	margin-top: 13px;
	display: inline-block;
	margin-left: 50%;
	transform: translateX(-50%);
	padding: 1px 10px;
	border-radius: 100px;
}

.dttb-data-box {
	width: 90%;
	margin: 0 auto;
	border: 3px solid #f1f4f8;
	display: flex;
	display: -webkit-flex;
	margin-top: 20px;
	position: relative;
}

.ssms {
	font-size: 13px;
	display: block;
	text-align: center;
	color: #98a8b8;
	margin-top: 10px;
}

.dttb-ms-box {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	left: 86px;
}

.dttb-ms-box span {
	display: block;
	font-size: 15px;
}

.dttb-ms-box span:nth-of-type(1) {
	font-weight: 500;
}

.dttb-ms-box span:nth-of-type(2) {
	color: #98a8b8;
}

.ckxqgz-box-xt {
	display: block;
	color: #5190e7;
	text-align: center;
	font-size: 15px;
	padding: 15px 0;
}

.ckgz-msse-box {
	background-color: #f1f4f8;
	padding-bottom: 50px;
}

.ckgz-ul-box {
	width: 90%;
	margin: 0 auto;
	display: flex;
	display: -webkit-flex;
	flex-wrap: wrap;
}

.ckgz-ul-box .ckgz-li-box {
	width: 33%;
	font-size: 15px;
	padding: 20px 0;
	background-color: #fff;
	margin-bottom: 1px;
	margin-right: 1px;
}

.ckgz-ul-box .ckgz-li-box img {
	width: 40px;
	height: 40px;
	display: block;
	margin: 0 auto;
}

.ckgz-ul-box .ckgz-li-box span {
	text-align: center;
	display: block;
	padding-top: 10px;
}

.ckgz-tl {
	display: flex;
	display: -webkit-flex;
	margin: 0 28%;
}

.hs {
	flex: 2;
	-ms-flex: 2;
	height: 1px;
	display: block;
	background-color: #ddd;
	margin-top: 35px;
}

.hstl {
	font-size: 30rpx;
	font-weight: 500;
	padding: 25px 10px;
	text-align: center;
}

/*登陆*/

/* pages/login/login.wxss */

/*微信小程序logo  */

.wx-logo-img {
	width: 60px;
	height: 60px;
	display: block;
	margin: 50px auto;
}

.form {
	margin: 0 20px;
}

.form .ipt-lg-box {
	background-color: #fff;
}

.form .ipt-lg-box {
	font-size: 15px;
}

.form .ipt-lg-box input {
	line-height: 20px;
	padding: 20px 50px;
	border-style: none;
	outline: none;
	font-size: 15px;
	width: 100%;
}

.form .ipt-lg-box input.usme-ipt {
	border-bottom: 1px solid #f1f4f8;
}

.form .ipt-lg-box .ipt-box {
	position: relative;
}

.form .ipt-lg-box .ipt-box img {
	position: absolute;
	left: 15px;
	top: 50%;
	transform: translateY(-50%);
	-webkit-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	width: 20px;
}

button.lg-btn {
	background-color: #4e90e6;
	color: #fff;
	border-style: none;
	padding: 3px 0;
	margin: 20px 0;
	width: 100%;
	line-height: 50px;
	border-radius: 5px;
	font-size: 18px;
}

/*注册按钮  忘记密码按钮  */

.btn-enroll-pass {
	font-size: 15px;
	margin-top: 13px;
}

.btn-enroll-pass .enroll-btn {
	float: left;
	color: #98a7b8;
}

.btn-enroll-pass .forget-pass-btn {
	float: right;
	color: #98a7b8;
}

/*贷款超市*/

.dkcs-miss-box {
	text-align: center;
	margin-top: 15px;
	background: #fff;
}

.list-xyk-box ul a {
	padding: 0;
}

.dkcs-miss-box h2 {
	padding: 15px 0;
	font-size: 16px;
	font-weight: 400;
}

.dkcs-miss-box a {
	padding: 10px 20px;
	font-size: 18px;
	font-weight: 400;
	text-align: left;
	display: block;
	color: #000;
}

.miss-box-list .miss-list-box ul {
	display: flex;
	display: -webkit-flex;
	padding: 10px 6px 30px 6px;
}

.miss-box-list .miss-list-box ul li {
	flex: 1;
	-webkit-flex: 1;
	padding: 4% 0;
	background: #f1f7fd;
	margin: 0 1%;
}

.miss-box-list .miss-list-box ul li a {
	padding: 0;
	font-size: inherit;
	text-align: center;
	line-height: inherit;
}

.miss-box-list .miss-list-box ul li img {
	width: 80%;
	display: block;
	margin: 0 auto;
}

.miss-box-list .miss-list-box ul li p {
	color: #000;
	line-height: 20px;
	margin: 0;
	font-size: 15px;
	width: 90%;
	display: block;
	margin: 0 auto;
	margin-top: 10px;
	padding: 0 2%;
	font-weight: 400;
}

.list-bq-dkcs {
	padding-top: 4px;
}

.miss-box-list ul li .list-bq-dkcs span {
	font-size: 12px;
	color: #fff;
	background: #a9c3e6;
	overflow: hidden;
	width: 100px;
	display: block;
	white-space: nowrap;
	margin: 0 auto;
	text-overflow: ellipsis;
}

.list-xyk-box ul li {
	display: flex;
	display: -webkit-flex;
	padding: 20px 15px;
	border-top: 1px solid #f1f4f8;
}

.list-xyk-box ul li .list-xyk-img {
	width: 50px;
	height: 50px;
	background: #f1f7fd;
	position: relative;
	margin-right: 10px;
	border-radius: 4px;
}

.list-xyk-box ul li .list-xyk-img img {
	width: 50px;
	height: 50px;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	-webkit-transform: translate(-50%, -50%);
	-moz-transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
}

.list-xyk-box ul li .list-xyk-tilbox {
	flex: 2;
	-webkit-flex: 2;
	height: 50px;
	position: relative;
}

.xyk-til-box {
	height: 20px;
	line-height: 20px;
}

.list-xyk-box ul li .list-xyk-tilbox p,
.xyk-til-box h2 {
	margin: 0;
	padding: 0;
	text-align: left;
}

.list-xyk-box ul li .list-xyk-btn {
	flex: 1.2;
	-webkit-flex: 1.2;
	position: relative;
}

.xyk-til-box span {
	float: left;
	margin-right: 4px;
	display: block;
}

.xyk-til-box span {
	color: #4e90e6;
	border: 1px solid #83b9ff;
	font-size: 12px;
	padding: 0 1px;
	font-weight: 300;
	height: 18px;
	line-height: 18px;
}

.xyk-til-box span:nth-of-type(1) {
	font-size: 16px;
	font-weight: 400;
	color: #000;
	border-style: none;
	height: 20px;
	line-height: 20px;
}

.syk-ms-dayw {
	font-size: 14px;
	position: absolute;
	bottom: -2px;
	display: flex;
	display: -webkit-flex;
	width: 100%;
}

.syk-ms-dayw p {
	color: #a5b3c6;
}

.syk-ms-dayw p:nth-of-type(2) {
	position: absolute;
	right: 0;
}

.syk-ms-dayw p span {
	color: #ffa646;
	margin-left: 8px;
	font-weight: 500;
	font-size: 17px;
	font-weight: 500;
}

.list-xyksq-num span {
	font-size: 13px;
}

.list-xyksq-num span:nth-of-type(1) {
	color: #fe8481;
}

.list-xyksq-num span:nth-of-type(2) {
	color: #a5b3c6;
}

.list-xyk-btn .btn-sq {
	font-size: 15px;
	border-style: none;
	border-radius: 2px;
	background: #4e90e6;
	color: #fff;
	display: block;
	width: 90%;
	padding: 6px 0;
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	-webkit-transform: translateX(-50%);
	-ms-transform: translateX(-50%);
	-moz-transform: translateX(-50%);
}

.jdcx-jt-dkcs {
	height: 18px;
	position: absolute;
	right: 20px;
	top: 50%;
	transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
}

.code-btn {
	z-index: 99;
	width: 60px;
	height: 60px;
	background: #fff;
	border: 1px solid #eee;
	border-radius: 50%;
	position: fixed;
	bottom: 120px;
	right: 10px;
}

.code-btn img {
	height: 28px;
	width: 28px;
	margin: 16px auto;
	display: block;
}

.dk-disk-box {
	z-index: 100;
	width: 100%;
	height: 100%;
	position: fixed;
	left: 0;
	top: 0;
	background: rgba(0, 0, 0, 0.6);
	display: none;
}

.dk-disk-box span {
	color: #fff;
	position: absolute;
	top: 28%;
	font-size: 16px;
	display: block;
	text-align: center;
	width: 100%;
}

.show-code-box {
	z-index: 999;
	padding: 28px 15px;
	padding-bottom: 18px;
	background: #fff;
	border-radius: 8px;
	display: flex;
	display: -webkit-flex;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	-webkit-transform: translate(-50%, -50%);
	-moz-transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
	display: none;
}

.show-code-box div {
	flex: 1;
	-webkit-flex: 1;
}

.show-code-box div img {
	display: block;
	height: 140px;
	margin: 0 8px;
}

.show-code-box div p {
	margin: 0;
	text-align: center;
	color: #a5b3c6;
	margin-top: 12px;
}

/*返回顶部按钮*/

.return-top-box {
	width: 50px;
	height: 180px;
	position: fixed;
	bottom: 0;
	right: 30px;
	display: none;
}

.return-top-box img {
	width: 50px;
	height: 50px;
}

/*我的专属海报*/

.mesplaybill-box {
	max-width: 500px;
}

.msbl-img-box {
	background-color: #e6ecf8;
	text-align: center;
}

.msbl-img-box img {
	width: 550upx;
	height: 1000upx;
	display: block;
	margin: 0 auto;
	padding: 50upx 0 40upx 0;
}
.msbl-small-box img {
	width: 60px;
	display: inline-block;
	padding: 0;
	margin: 0 15px;
	margin-bottom: 20px;
	border: 2px solid transparent;
}
.msbl-small-box img.active {
	border: 2px solid #2a8cfb;
}

.msbl-btm-box {
	padding: 0 15px;
	text-align: center;
}

.msbl-btm-box p.msbl-tl {
	color: #111111;
	font-size: 17px;
	margin: 20px 0 6px 0;
}

.msbl-sms-box span {
	font-size: 15px;
	color: #7a8691;
	display: block;
}

.btn-copys {
	width: 74%;
	display: block;
	margin: 0 auto;
	margin-top: 20px;
	line-height: 2.5555;
	background-color: #2a8cfb;
	color: #fff;
	font-size: 18px;
	border-style: none;
	border-radius: 100px;
}

/*今日口子*/

.alliancefom-sosu-box {
	display: flex;
	display: -webkit-flex;
	padding: 10px;
	background-color: #f1f4f8;
}

.alliancefom-sosu-box input {
	border-style: none;
	flex: 1;
	-ms-flex: 1;
	height: 43px;
	background-color: #fff;
	font-size: 15px;
	border-radius: 5px 0 0 5px;
	padding: 0;
	padding-left: 10px;
	margin-top: 2px;
}

.alliancefom-sosu-box button {
	border-style: none;
	line-height: 43px;
	font-size: 15px;
	border-radius: 0 5px 5px 0;
	background-color: #4e90e6;
	color: #fff;
	padding: 0 30px;
	display: inline-block;
	vertical-align: top;
}

button::after {
	border-style: none;
}

.record-head-box {
	display: flex;
	display: -webkit-flex;
	position: relative;
	background-color: #fff;
}

.record-head-box span {
	font-size: 15px;
	flex: 1;
	-ms-flex: 1;
	text-align: center;
	line-height: 50px;
}

.record-head-box span.active a {
	color: #4e90e6;
}

.record-head-box span.active span {
	display: block;
	height: 2px;
	width: 50%;
	margin: 0 auto;
	background-color: #0d62ff;
}

.activity-li-box {
	display: flex;
	display: -webkit-flex;
	font-size: 15px;
	background-color: #fff;
	padding: 10px;
	border-top: 1px solid #f1f4f8;
	margin-bottom: 15px;
}

/*.activity-li-box a{display: block;}*/

.activity-tl-box {
	flex: 1;
	-ms-flex: 1;
	position: relative;
}

.activity-tl-box span {
	display: block;
}

.activity-tl-box span:nth-of-type(1) {
	line-height: 22px;
}

.activity-tl-box span:nth-of-type(2) {
	color: #9ea6b1;
	font-size: 13px;
	position: absolute;
	bottom: 0;
}

.activity-img-box {
	width: 100px;
	height: 80px;
	display: inline-block;
	vertical-align: middle;
	overflow: hidden;
}

.activity-img-box img {
	width: 100%;
}

/*推荐有钱2*/

.recommend-money-box {
	position: relative;
}

.btn-hdgz {
	width: 40px;
	position: absolute;
	top: 0;
	line-height: 18px;
	right: 40px;
	color: #fff;
	font-size: 15px;
	padding: 2px 4px 12px 4px;
	border-radius: 0 0 30px 30px;
	background-color: #ffb818;
	text-align: center;
}

.hbslider {
	width: 100%;
}

.rcdm-top-box {
	margin: 30px 20px;
}

.rcdm-userhd-box img {
	display: block;
	width: 80px;
	height: 80px;
	margin: 0 auto;
	margin-bottom: -45px;
	background-color: #fff;
	padding: 5px;
	border-radius: 50%;
}

.rcdm-sims-box {
	background-color: #fff;
	border-radius: 10px;
}

.rcdm-sims-box ul {
	padding-top: 56px;
	padding-bottom: 14px;
	display: flex;
	display: -webkit-flex;
}

.rcdm-sims-box ul li {
	flex: 1;
	-ms-flex: 1;
	text-align: center;
}

.rcdm-sims-box ul li span {
	color: #8f3611;
	font-weight: 600;
	font-size: 22px;
}

.rcdm-sims-box ul li p {
	font-size: 14px;
	color: #8f3611;
	font-weight: 400;
	margin-top: 2px;
}

.ranking-list-box {
	margin: 0 20px;
	background-color: #fff;
	border-radius: 10px;
	color: #8f3611;
}

.ranking-table-box {
	padding-bottom: 10px;
	margin-bottom: 10px;
	margin-top: 50px;
}

.ranking-table-box h2 {
	padding: 14px 0;
	text-align: center;
	font-size: 22px;
	margin: 0;
}

.rank-table {
	width: 100%;
}

.rank-table tr {
	display: flex;
	display: -webkit-flex;
	width: 100%;
}

.rank-table tr th,
td {
	flex: 1;
	-ms-flex: 1;
}

.rank-th {
	background-color: #fff4db;
	padding: 8px 0;
}

.rank-th th {
	font-weight: 400;
	color: #ffb818;
	font-size: 15px;
}

.rank-td {
	display: flex;
	display: -webkit-flex;
}

.rank-td td {
	flex: 1;
	-ms-flex: 1;
	text-align: center;
	line-height: 40px;
	font-size: 15px;
	padding: 10px 0;
	font-weight: 500;
}

.rank-td td img {
	width: 40px;
	height: 40px;
	display: block;
	margin: 0 auto;
	border-radius: 50%;
}

.rank-td td img.top-there {
	width: 40px;
	height: 40px;
}

.rank-usname {
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	max-width: 80px;
}

.btn_yqhy {
	width: 200px;
	background-color: #000;
	text-align: center;
	font-size: 18px;
	font-weight: 500;
	line-height: 48px;
	color: #fff;
	border-radius: 100px;
	display: block;
	margin: 15px auto;
	background: -webkit-linear-gradient(left, #ff8a06, #ea3c1a);
	/* Safari 5.1 - 6.0 */
	background: -o-linear-gradient(right, #ff8a06, #ea3c1a);
	/* Opera 11.1 - 12.0 */
	background: -moz-linear-gradient(right, #ff8a06, #ea3c1a);
	/* Firefox 3.6 - 15 */
	background: linear-gradient(to right, #ff8a06, #ea3c1a);
	/* 标准的语法 */
}

.hdgz-tc-box {
	background-color: rgba(0, 0, 0, 0.8);
	width: 60%;
	border-radius: 5px;
	position: fixed;
	top: -200px;
	left: 50%;
	transform: translate(-50%, -50%);
	color: #fff;
	padding: 20px 30px;
}

.hdgz-tc-box h5 {
	font-size: 15px;
	text-align: center;
	margin: 0;
}

.hdgz-tc-box p {
	display: block;
	padding-top: 10px;
	font-size: 15px;
}

.hdgz-tc-box span {
	display: block;
	padding-left: 25px;
	font-size: 15px;
}

.mask-tc {
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	display: none;
	z-index: 999;
}

.jg-box {
	width: 1px;
	background-color: #fff4db;
	height: 30px;
	margin: 12px 0;
}

/*无数据显示*/
.no-ms-box {
	padding-bottom: 40px;
}
.no-ms-box img {
	width: 417upx;
	height: 310upx;
	display: block;
	margin: auto;
	padding-top: 40px;
}

.no-ms-box span {
	color: #e6e6e6;
	display: block;
	text-align: center;
}

/*未购买会员弹窗*/

/*弹窗  */

.show-btn {
	margin-top: 50px;
	color: #22cc22;
}

.modal-mask {
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.5);
	overflow: hidden;
	z-index: 9000;
	color: #fff;
	display: none;
}

.modal-dialog {
	width: 88%;
	position: fixed;
	top: -250%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 9999;
	background: #f9f9f9;
	border-radius: 7.5px;
	padding-bottom: 20px;
}

.modal-image {
	display: block;
	width: 70%;
	margin: 0 auto;
	margin-top: -60px;
	margin-bottom: 5px;
}

.close-img {
	width: 20px;
	height: 20px;
	position: absolute;
	right: 10px;
	top: 10px;
}

.modal-content {
	padding: 5px 25px;
}

.modal-lt {
	color: #000;
	display: block;
	text-align: center;
	font-size: 14px;
	padding: 4px 0;
}

.modal-tl {
	color: #98a8b8;
	font-size: 13px;
	text-align: center;
	display: block;
	padding: 5px 0 15px;
}

.modal-footer {
	display: flex;
	flex-direction: row;
	height: 43px;
	/* border-top: 1px solid #dedede; */
	font-size: 17px;
	line-height: 43px;
}

.btn-confirm {
	width: 70%;
	display: block;
	color: #fff;
	background-color: #ffbf00;
	border-radius: 100px;
	margin: 0 auto;
	text-align: center;
}

/*服务通知 账户提醒*/

.infom-ul {
	display: flex;
	display: -webkit-flex;
}

.infom-ul a {
	flex: 1;
	-ms-flex: 1;
	-webkit-flex: 1;
}

.infom-li {
	background-color: #fff;
	padding: 15px;
	margin-bottom: 1px;
}

.infom-li .infom-img-box {
	width: 45px;
	height: 45px;
	position: relative;
	background-color: #fff;
	margin: 0 auto;
	display: block;
}

.infom-li span.title {
	display: block;
	text-align: center;
	font-size: 14px;
	padding-top: 6px;
	color: #98a7b8;
}

.smdd {
	background-color: #ff534c;
	border-radius: 50%;
	display: inline-block;
	color: #fff;
	width: 10px;
	height: 10px;
	text-align: center;
	vertical-align: bottom;
}

.infom-li .infom-img-box image {
	width: 50px;
	height: 50px;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	-webkit-transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
	-moz-transform: translate(-50%, -50%);
	-o-transform: translate(-50%, -50%);
}

.infom-li .infom-ms-box {
	flex: 1;
	-ms-flex: 1;
	padding-left: 10px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	position: relative;
}

.infom-li .infom-ms-box .infom-tp-box {
	display: flex;
	display: -webkit-flex;
	margin-bottom: 4px;
}

.infom-li .infom-ms-box .infom-tp-box text {
	font-size: 15px;
	flex: 1;
	-ms-flex: 1;
	line-height: 18px;
}

.infom-li .infom-ms-box .infom-tp-box text:nth-of-type(2) {
	font-size: 12px;
	color: #dbe5ef;
	text-align: right;
}

.infom-li .infom-ms-box .infom-bt-xt {
	font-size: 13px;
	color: #98a7b8;
	position: absolute;
	bottom: 0;
}

.indent-ul-box {
	background-color: #f1f4f8;
}

.indent-li-box {
	padding: 10px 15px;
	font-size: 15px;
	position: relative;
}

.indent-timer-box {
	color: #fff;
	background-color: #dce0e3;
	display: inline-block;
	margin: 10px auto;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	-ms-transform: translateX(-50%);
	-moz-transform: translateX(-50%);
	-webkit-transform: translateX(-50%);
	padding: 2px 7px;
	border-radius: 50px;
	font-size: 13px;
}

.indent-ms-box {
	margin-top: 45px;
	background-color: #fff;
}

.indent-top-box span {
	display: block;
}

.indent-top-box {
	border-bottom: 1px solid #f1f4f8;
}

.indent-top-box span.us-ms-tl {
	padding: 10px 10px;
	font-size: 15px;
}

.indent-top-box span.msnr-xt {
	padding: 0 10px;
	padding-bottom: 15px;
	font-size: 14px;
	color: #98a7b8;
	line-height: 20px;
	text-align: right;
}
.xttz_time {
	display: inline-block;
	width: 100%;
}
.xttz_time .msnr-xt {
	float: left !important;
}
.xttz_time .xx_span01 {
	float: right;
	font-size: 14px;
	color: #9498ab;
	margin-right: 10px;
	padding-right: 20px;
}
.xx_open {
	background: url(~@/static/images/icon-jtees.png) no-repeat right center;
	background-size: auto 14px;
}
.xx_close {
	background: url(~@/static/images/icon-jtees02.png) no-repeat right center;
	background-size: auto 14px;
}
.xx_info {
	padding: 0 10px 10px;
	color: #36383f;
	font-size: 4vw;
}
/* .indent-top-box text:nth-of-type(1){padding: 20rpx 20rpx;font-size: 30rpx;}
	.indent-top-box text:nth-of-type(2){padding: 0 20rpx;padding-bottom: 30rpx;font-size: 26rpx;color: #98a7b8;line-height: 40rpx;} */

.indent-bottom-box {
	padding: 10px 10px;
	position: relative;
}

.indent-bottom-box span {
	font-size: 14px;
}

.indent-bottom-box img {
	width: 7px;
	height: 15px;
	position: absolute;
	right: 10px;
	top: 50%;
	transform: translateY(-50%);
	-webkit-transform: (-50%);
	-ms-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
}

.indent-top-box .head-top-box span:nth-of-type(1) {
	padding: 10px 10px 0 10px;
	font-size: 15px;
}

.indent-top-box .head-top-box span:nth-of-type(2) {
	padding: 0 10px;
	padding-bottom: 7px;
	font-size: 14px;
	color: #98a7b8;
	line-height: 20px;
}

.list-ms-box {
	padding: 0 10px;
}

.list-ms-box span.hse {
	color: #333;
	font-size: 14px;
}

.list-ms-box span.zse {
	color: #98a7b8;
	font-size: 14px;
}

.list-ms-box .ms-ct-box {
	padding: 10px 0;
	font-size: 15px;
}

.list-ms-box .ms-ct-box span.hse {
	display: inline-block;
}

.list-ms-box .ms-ct-box span.zse {
	display: block;
	color: #98a7b8;
}

.pdbt {
	padding-bottom: 10px;
}

/*贷款超市*/

.slider-sprmt-box {
	/*height: 180px;*/
	background-color: #fff;
}

.slider-sprmt-box img {
	/*height: 100%;*/
	width: 100%;
}

.user-headsprmt-box {
	background-color: #fff;
}

.head-imgls-box {
	width: 60px;
	height: 60px;
	margin: 0 auto;
	border-radius: 50%;
	margin-top: -35px;
}

.head-imgls-box img {
	width: 60px;
	height: 60px;
	border-radius: 50%;
	border: 1px solid #fff;
}

.head-msls-box {
	text-align: center;
	padding-bottom: 2px;
	padding-top: 15px;
}

.head-msls-box p {
	font-weight: 500;
	position: relative;
	font-size: 18px;
}

.head-msls-box span {
	font-size: 15px;
	display: inline-block;
	padding-top: 4px;
	color: #a3b0c1;
}

.tab-sprmt-box ul {
	display: flex;
	display: -webkit-flex;
	display: -ms-flexbox;
	margin-bottom: 15px;
	padding: 0 20px;
	background-color: #fff;
}

.tab-sprmt-box ul li {
	flex: 1;
	-ms-flex: 1;
	-webkit-flex: 1;
	-moz-box-flex: 1;
	text-align: center;
}

.tab-sprmt-box ul li a {
	display: block;
	padding: 15px;
	font-size: 15px;
	line-height: 20px;
	height: 20px;
}

.tab-sprmt-box ul li a i {
	width: 20px;
	height: 20px;
	display: inline-block;
	vertical-align: top;
	padding-right: 10px;
}

.tab-sprmt-box ul li a i.mdklg {
	background: url(~@/static/images/mdk_icon.png) no-repeat center center;
	background-size: 20px 20px;
}

.tab-sprmt-box ul li a i.mbklg {
	background: url(~@/static/images/mbk_icon.png) no-repeat center center;
	background-size: 20px 20px;
}

.tab-sprmt-box ul li a i.mbklg-no {
	background: url(~@/static/images/card_n_icon.png) no-repeat center center;
	background-size: 20px 20px;
}

.tab-sprmt-box ul li a i.jdcxlg {
	background: url(~@/static/images/loan_s_icon.png) no-repeat center center;
	background-size: 20px 20px;
}

.tab-sprmt-box ul li a i.jdcxlg-no {
	background: url(~@/static/images/loan_n_icon.png) no-repeat center center;
	background-size: 20px 20px;
}

.tab-sprmt-box ul li span {
	width: 50%;
	height: 3px;
	margin: 0 auto;
	background-color: #4e90e6;
	display: block;
}

.sprmt-product-box {
	margin-bottom: 15px;
}

.prdmt-tle-box .rmdkls {
	padding: 15px 40px;
	display: block;
	margin-bottom: 1px;
	font-size: 15px;
}

.prdmt-tle-box span.zscxlg {
	background: url(~@/static/images/cx_icon.png) no-repeat 15px center #fff;
	background-size: 20px 20px;
}

.prdmt-tle-box span.qtqdlg {
	background: url(~@/static/images/qtqd_icon.png) no-repeat 15px center #fff;
	background-size: 20px 20px;
}

.prdmt-tle-box span.tjdklg {
	background: url(~@/static/images/tjs_icon.png) no-repeat 15px center #fff;
	background-size: 20px 20px;
}

.prdmt-tle-box .rmdkls {
	background: url(~@/static/images/cnxw_icon.png) no-repeat 15px center #fff;
	background-size: 20px 20px;
}

.prdmt-list-box ul {
	display: flex;
	display: -webkit-flex;
	display: -ms-flexbox;
	background-color: #fff;
	flex-wrap: wrap;
}

.prdmt-list-box ul li {
	width: 25%;
	text-align: center;
	padding: 20px 0;
}

.prdmt-list-box ul li img {
	width: 40px;
	height: 40px;
	margin: 5px auto;
	margin-bottom: 5px;
	display: block;
	border-radius: 50%;
}

.prdmt-list-box ul li span {
	font-size: 15px;
	color: #515151;
}

.swiper-container {
	background-color: #fff;
}
/*.swiper-slide{margin-left: 20px;}*/

.swiper-slide {
	padding-top: 10px;
}

.list-li-box {
	padding: 15px 0;
	margin: 15px;
	border: 1px solid #f1f4f8;
	border-radius: 5px;
}

.list-li-box p {
	text-align: center;
	line-height: 20px;
	font-size: 15px;
}

.list-li-box img {
	width: 50px;
	height: 50px;
	margin: 0 auto 4px;
	display: block;
}

.list-li-box p img {
	width: 20px;
	height: 20px;
	display: inline-block;
	vertical-align: top;
	margin-right: 5px;
	border-radius: 2px;
}

.list-li-box h3 {
	text-align: center;
	margin: 0;
	font-weight: 500;
	padding: 10px 0;
	color: #fe6462;
}

.list-li-box i {
	display: block;
	font-style: normal;
	text-align: center;
	font-size: 12px;
	color: #98a7b8;
}

.list-li-box span {
	font-size: 12px;
	border: 1px solid #4e90e6;
	color: #4e90e6;
	padding: 0 4px;
}

.list-li-box span.dds {
	background-color: #4e90e6;
	color: #fff;
	border-radius: 2px;
}

.bq-xtss {
	text-align: center;
	margin-top: 5px;
}

.reticule-box {
	background-color: #fff;
}

.reticule-box ul {
	padding: 0 15px;
}

.reticule-box ul li {
	border-bottom: 1px solid #f1f4f8;
	padding: 15px 0;
}

.rtcle-itemtp-box img {
	display: inline-block;
	vertical-align: middle;
	width: 20px;
	height: 20px;
	border-radius: 2px;
}

.rtcle-itemtp-box p {
	display: inline-block;
	vertical-align: middle;
	font-size: 15px;
	position: relative;
}

.rtcle-itemtp-box p span {
	font-size: 12px;
	color: #4e90e6;
	border: 1px solid #4e90e6;
	padding: 0 4px;
	margin-left: 5px;
	display: inline-block;
	vertical-align: top;
}

.reticule-box i {
	font-style: normal;
}

.rtcle-itemct-box {
	font-size: 13px;
	padding-top: 10px;
}

.rtcle-itembt-box {
	font-size: 13px;
	padding-top: 2px;
}

.big-item {
	color: #fe6462;
	font-size: 18px;
}

.big-item i {
	font-size: 13px;
}

.rg-item {
	float: right;
	text-align: left;
	width: 30%;
}

.grays {
	color: #98a7b8;
}

.black-item {
	color: #000;
}

.tlchlider-xtr {
	padding: 14px 15px;
	display: block;
	font-size: 15px;
	font-weight: 500;
}

.cjb-box {
	display: flex;
	display: -webkit-flex;
	padding: 15px 10px;
}

.cjb-box .cjb-li-box {
	text-align: center;
	flex: 1;
	-ms-flex: 1;
	margin: 0 15px;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
}

.cjb-box .cjb-li-box span {
	font-size: 14px;
	margin-top: 2px;
	display: inline-block;
}

.cjb-box .cjb-li-box div {
	color: #fff;
	font-size: 14px;
}

.cjb-box .cjb-li-box div.cs-box {
	background-color: #fd9f25;
	padding: 5px 0;
}

.cjb-box .cjb-li-box div.hs-box {
	background-color: #fe3357;
	height: 40px;
	line-height: 40px;
}

.btn-sq button {
	margin: 0;
}

.caption-head-box span {
	font-size: 14px;
}

.table {
	border-bottom: 0;
}

.condition-list-box {
	font-size: 14px;
}

.condition-list-box text {
	display: inline-block;
}

.zwyj-box {
	width: 6px;
	height: 6px;
	background-color: #000;
	border-radius: 50%;
	display: inline-block;
	vertical-align: middle;
	margin-right: 5px;
}

.teams-box {
	width: 11px;
	height: 11px;
	background-color: #fe3357;
	display: inline-block;
	margin-right: 5px;
}

.condition-box {
	padding: 0 15px 15px 15px;
}

.wxParse-ul {
	padding: 0 15px 15px 15px;
	font-size: 15px;
	color: #98a7b8;
}

.wxParse-ul span {
	display: block;
}

.dk-zs-box {
	background-color: #fff;
	border-bottom: 15px solid #f1f4f8;
	padding-left: 30upx;
	padding-right: 30upx;
}

.prd-log {
	height: 50px;
	width: 50px;
	margin: 0 auto;
	border: 1px solid #f1f4f8;
	border-radius: 50%;
}

/*进度查询*/

.tdzl-slider img {
	width: 100%;
}

.checkress-form-box {
	background-color: #fff;
	text-align: center;
	margin: 0 15px;
	font-size: 14px;
	padding-bottom: 15px;
}

.checkress-form-box span {
	padding: 15px 0;
	display: block;
	font-size: 15px;
	margin-bottom: 20px;
}

.checkress-ipt-box {
	display: flex;
	display: -webkit-flex;
	padding: 5px 0;
	margin: 0 7.5px;
	background-color: #fff;
}

.checkress-ipt-box img {
	height: 25px;
	width: 25px;
	display: inline-block;
	vertical-align: middle;
	margin: 11px 5px;
}

.checkress-ipt-box input {
	font-size: 14px;
	flex: 1;
	-ms-flex: 1;
	text-align: left;
	height: 48px;
	padding-left: 5px;
	border-style: none;
	outline: none;
}

.checkress-ipt-box img.yzmimg {
	width: 70px;
	height: 30px;
	margin: 9px 15px;
}

.btn-checkress {
	margin: 15px auto;
	width: 100%;
	background-color: #2a8cfb;
	color: #fff;
	border-style: none;
	outline: none;
	height: 46px;
	border-radius: 4px;
	font-size: 18px;
}

.shxximg {
	width: 70px;
	height: 70px;
	margin: 0 auto;
}

/*购买成功*/

.pyscs-head-box {
	background-color: #4e90e6;
	text-align: center;
	padding: 50px 0 100px 0;
}

.pyscs-ct-box img {
	width: 50px;
	height: 50px;
	display: inline-block;
	vertical-align: middle;
}

.pyscs-tlbq-box {
	display: inline-block;
	vertical-align: middle;
	padding-left: 10px;
}

.pyscs-tlbq-box span {
	display: block;
	text-align: left;
	color: #fff;
	font-size: 14px;
}

.pyscs-tlbq-box span:nth-of-type(1) {
	font-size: 17px;
}

.dbk-ewm-box img {
	width: 130px;
	height: 130px;
	display: block;
	margin: 0 auto;
	margin-top: -50px;
	padding: 7px;
	background-color: #fff;
	border-radius: 10px;
	box-shadow: 0 0 6px 1px #84b7fa;
}

.pyscs-xtsuc-box {
	padding: 25px 0;
}

.pyscs-xtsuc-box span {
	display: block;
	color: #98a7b8;
	text-align: center;
	font-size: 14px;
	padding-bottom: 5px;
}

.view-button-box {
	display: flex;
	display: -webkit-flex;
	padding-top: 20px;
}

.view-button-box button {
	padding-left: 34px;
	padding-right: 34px;
	background-color: #fff;
	display: block;
	margin: 0 auto;
	line-height: 48px;
	border-radius: 4px;
	font-size: 18px;
}

.view-button-box button::after {
	border-style: none;
}

.btn-returnhome {
	border: 1px solid #fe6560;
}

.btn-returnhome a {
	color: #fe6560;
}

.btn-newzhin {
	border: 1px solid #4e90e6;
}

.btn-newzhin a {
	color: #4e90e6;
}

/*新手指南*/

.news-box img {
	width: 100%;
}

/*玖富万卡产品*/

.service-box {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	padding-top: 64px;
}

.service-logo {
	width: 80%;
	margin: 0 auto;
	background-color: #afccf4;
	height: 100px;
	border-radius: 4px 4px 0 0;
	position: relative;
}

.service-logo img {
	width: 66%;
	position: absolute;
	bottom: 0;
	left: 58%;
	transform: translateX(-50%);
}

.service-button {
	background-color: #4e90e6;
	width: 90%;
	margin: 0 auto;
	border-radius: 4px;
	padding: 50px 0;
}

.service-button p {
	width: 80%;
	margin: 10px auto;
	color: #fff;
	line-height: 24px;
	font-size: 15px;
}

.service-button button {
	width: 70%;
	box-shadow: 0 6px 2px 0 rgba(0, 0, 0, 0.1);
	border-radius: 4px;
	background-color: #fff;
	line-height: 20px;
	color: #4e90e6;
	border-style: none;
	font-size: 16px;
	display: block;
	margin: 0 auto;
	margin-top: 50px;
}

.service-button button a {
	display: block;
	padding: 14px 20px;
}

.service-button button span {
	line-height: 22px;
	padding-left: 5px;
	font-weight: bold;
	color: #4e90e6;
}

.service-button button img {
	width: 20px;
	height: 20px;
	display: inline-block;
	vertical-align: top;
}

.service-agency-box {
	position: fixed;
	left: 0;
	width: 100%;
	bottom: 0;
	z-index: 9999;
	display: flex;
	border-top: 1px solid #f1f4f8;
	text-align: center;
}

.btn-service {
	display: inline-block;
	flex: 0.5;
	-ms-flex: 0.5;
	-moz-box-flex: 0.5;
	vertical-align: bottom;
	background: #ffa746;
}

.btn-agency {
	display: inline-block;
	flex: 1;
	-ms-flex: 1;
	-moz-box-flex: 1;
	background: #4e90e6;
	background-color: #5091e7;
}

.btn-service img {
	width: 24px;
	height: 24px;
	margin: 0 auto;
	display: block;
	padding-top: 4px;
}

.btn-service a {
	text-align: center;
	display: inline-block;
	color: #fff;
	line-height: 48px;
	font-size: 15px;
	background: url(~@/static/images/ineedssq.png) no-repeat 0 center;
	background-size: 17px;
	padding-left: 20px;
}
.btn_span01 {
	text-align: center;
	display: inline-block;
	color: #fff;
	line-height: 48px;
	font-size: 15px;
	background: url(~@/static/images/ineedssq.png) no-repeat 0 center;
	background-size: 17px;
	padding-left: 20px;
}
.yd_h4 {
	margin-top: 12px;
	font-size: 19px;
}
.btn-agency a {
	color: #fff;
	font-size: 15px;
	display: inline-block;
	line-height: 48px;
	background: url(~@/static/images/fbpl.png) no-repeat 0 center;
	background-size: 13px;
	padding-left: 20px;
}
.btn-agency .yaoqzq {
	color: #fff;
	font-size: 15px;
	display: inline-block;
	line-height: 48px;
	background: url(~@/static/images/fbpl.png) no-repeat 0 center;
	background-size: 13px;
	padding-left: 20px;
}

.showyj-ul-box {
	display: flex;
	display: -webkit-flex;
	padding: 15px 10px;
	background-color: #fff;
	border-bottom: 14px solid #f1f4f8;
	border-top: 1px solid #f1f4f8;
}

.showyj-ul-box .showyj-li-box {
	flex: 1;
	-ms-flex: 1;
	margin: 0 10px;
	padding: 15px 0;
	position: relative;
}

.showyj-ul-box .showyj-li-box img {
	width: 60px;
	height: 55px;
	position: absolute;
	right: 5px;
	bottom: 0;
	z-index: 0;
	opacity: 0.4;
}

.li-lan {
	background: -webkit-linear-gradient(left, #5c64f2, #5292fb);
	/* Safari 5.1 - 6.0 */
	background: -o-linear-gradient(right, #5c64f2, #5292fb);
	/* Opera 11.1 - 12.0 */
	background: -moz-linear-gradient(right, #5c64f2, #5292fb);
	/* Firefox 3.6 - 15 */
	background: linear-gradient(to right, #5c64f2, #5292fb);
	/* 标准的语法 */
}

.li-hon {
	background: -webkit-linear-gradient(left, #ff3253, #ff5c60);
	/* Safari 5.1 - 6.0 */
	background: -o-linear-gradient(right, #ff3253, #ff5c60);
	/* Opera 11.1 - 12.0 */
	background: -moz-linear-gradient(right, #ff3253, #ff5c60);
	/* Firefox 3.6 - 15 */
	background: linear-gradient(to right, #ff3253, #ff5c60);
	/* 标准的语法 */
}

.xtms-libox span {
	display: block;
	text-align: center;
	font-size: 12px;
	color: #fff;
}

.xtms-libox span:nth-of-type(2) {
	font-size: 20px;
	padding-top: 10px;
	font-weight: 500;
}

.team-tab .active {
	color: #4e90e6;
}

.app-link-box {
	/*background: url(~@/img/main.png) no-repeat center center;*/
	background-size: 100% 100%;
}

.title-img img {
	width: 80%;
	margin: 0 auto;
	display: block;
	padding: 100px 0 20px 0;
}

.checkress-ms-box {
	width: 90%;
	margin: 0 auto;
	background-color: #fff;
	border-radius: 5px;
}

.tzyq-img img {
	display: block;
	width: 90%;
	margin: 0 auto;
	margin-top: 50px;
}

.footer-img img {
	display: block;
	width: 90%;
	margin: 0 auto;
	margin-top: 50px;
}

.xieyi-p {
	font-size: 12px;
}

.xieyi-p a {
	color: #4e90e6;
}

.jsp {
	color: #74aee7;
	width: 90%;
	padding: 20px 0 50px 0;
	display: block;
	font-size: 12px;
	margin: 0 auto;
}

.btn-yzm {
	border-style: none;
	background-color: #4e90e6;
	color: #fff;
	margin: 6px 0;
	width: 85px;
	border-radius: 5px;
	outline: none;
	padding: 0 10px;
	font-size: 13px;
}

.down-app-box {
	display: flex;
	display: -webkit-flex;
	background-color: rgba(0, 0, 0, 0.5);
	padding: 10px 0;
	color: #fff;
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
}

.applogo-box {
	padding-left: 20px;
}

.applogo-box img {
	width: 50px;
	height: 50px;
	display: inline-block;
	vertical-align: middle;
}

.span-logo {
	display: inline-block;
	vertical-align: middle;
	padding-left: 5px;
}

.span-logo span {
	display: block;
}

.span-logo span:nth-of-type(1) {
	font-size: 15px;
}

.span-logo span:nth-of-type(2) {
	font-size: 12px;
}

.btn-downapp {
	flex: 1;
	-ms-flex: 1;
	padding-right: 20px;
}

.btn-downapp button {
	height: 40px;
	border-style: none;
	float: right;
	background-color: #fe6561;
	font-size: 15px;
	color: #fff;
	border-radius: 5px;
	margin: 5px 0;
	padding: 0 15px;
}

.btn-disabled {
	background-color: #c0c0c0;
}

.details-columns-box {
	background-color: #fff;
}

.checkress-ipt-box {
	padding: 10px 0;
	border-bottom: 1px solid #f1f4f8;
}

.details-content-box {
	padding: 0 15px;
	padding-top: 80px;
}

.title-head-xt {
	color: #000;
	padding: 15px 0;
	font-size: 17px;
	text-align: left;
}

.ydl-box {
	display: flex;
	display: -webkit-flex;
	padding-bottom: 40px;
}

.ydl-box span {
	flex: 1;
	text-align: right;
	color: #98a7b8;
	-ms-flex: 1;
}

.dkhb-box img {
	width: 100%;
	padding: 0 15px;
}

.title-dkhb-box {
	border-bottom: 1px solid #ddd;
	padding: 20px 0 20px 0;
	margin-bottom: 40px;
	position: relative;
}

.title-dkhb-box span {
	display: inline-block;
	font-size: 16px;
	background-color: #f1f4f8;
	position: absolute;
	top: 72%;
	left: 50%;
	transform: translateX(-50%);
	padding: 0 20px;
	color: #98a7b8;
}

.columns-box {
	padding-bottom: 80px;
}

.footer-box {
	position: fixed;
	bottom: 0;
	width: 100%;
	left: 0;
	display: flex;
	display: -webkit-flex;
	text-align: center;
	z-index: 99999;
}

.footer-box img {
	width: 24px;
	height: 24px;
	display: inline-block;
	vertical-align: top;
}

.footer-box div {
	flex: 1;
	-ms-flex: 1;
	margin: 15px 0;
}

.footer-box span {
	color: #98a7b8;
	line-height: 24px;
	display: inline-block;
	font-size: 15px;
}

.activegz-text-box {
	padding: 20px;
}

.activegz-text-box div {
	display: flex;
	font-size: 12px;
	padding-top: 10px;
	color: #8f3611;
	line-height: 20px;
}

.activegz-text-box div .bqqq {
	padding-top: 0;
	display: block;
}

.activegz-text-box div .bqqqs {
	flex: 1;
	-ms-flex: 1;
	padding-top: 0;
}

.activegz-text-box span.title {
	font-size: 22px;
	text-align: center;
	font-weight: bold;
	line-height: 22px;
	padding-bottom: 10px;
	display: block;
	color: #8f3611;
}

.rg-img {
	width: 20px;
	height: 20px;
}

.gzh-modelmask-box {
	background-color: rgba(0, 0, 0, 0.4);
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	display: block;
}

.gzh-model-box {
	position: fixed;
	left: 50%;
	transform: translate(-50%, -50%);
	-webkit-transform: translate(-50%, -50%);
	-moz-transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
	width: 84%;
	background-color: #fff;
	border-radius: 8px;
	overflow: hidden;
	padding-bottom: 15px;
}

.head-model-box {
	position: relative;
}

.head-model-box img {
	width: 100%;
	height: 189upx;
	display: inline-block;
	vertical-align: top;
}

.head-model-box .close-btn {
	width: 50upx;
	height: 50upx;
	position: absolute;
	right: 10px;
	top: 10px;
}

.ewm-model-box img {
	width: 258upx;
	height: 258upx;
	margin: auto;
	display: block;
	padding: 15px 0;
}

.content-mess-box p {
	font-size: 18px;
	color: #4f90e7;
	text-align: center;
}

.luce-box {
	color: #98a7b8;
	text-align: center;
	padding: 4px 0 6px 0;
}

.content-mess-box .luce-box span {
	font-size: 12px;
	color: #98a7b8;
	display: inline-block;
}

.content-mess-box span {
	font-size: 12px;
	text-align: center;
	color: #4f90e7;
	display: block;
}

.puy-vip-box {
	width: 88%;
	position: fixed;
	top: -300%;
	left: 50%;
	transform: translate(-50%, -50%);
	-webkit-transform: translate(-50%, -50%);
	-moz-transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
}

.puy-vip-box img {
	width: 100%;
}

.puy-vip-box img.close-btn {
	width: 20px;
	height: 20px;
	position: absolute;
	right: 10px;
	top: 10px;
}

/*订单明细2*/

.odteil-head-box {
	background-color: #fff;
	z-index: 1;
	margin-bottom: 10px;
	top: 0;
	left: 0;
	right: 0;
}

.odteil-classify-box {
	padding: 0 15px;
	display: flex;
}

.odteil-classify-box .tibutton {
	width: 50px;
	background-color: #fff;
	border-style: none;
	outline: none;
	line-height: 40px;
	font-size: 15px;
	margin-right: 30px;
	padding-left: 0;
}

.odteil-classify-box .active {
	color: #4f90e7;
	font-size: 18px;
	font-weight: 500;
}

.odteil-state-box {
	position: relative;
}

.state-indent-box {
	padding: 6px 15px;
	display: flex;
}

.state-indent-box .fkbutton {
	width: 40px;
	border-style: none;
	border: 1px solid #bec3c7;
	color: #afbbc7;
	background-color: #fff;
	margin-right: 15px;
	border-radius: 2px;
	font-size: 12px;
	padding: 3px 8px;
}

.state-indent-box .active {
	color: #4f90e7;
	background-color: #d9e9f9;
	border-color: #d9e9f9;
}

.select-productstate-box {
	position: absolute;
	right: 15px;
	top: 50%;
	transform: translateY(-50%);
	-webkit-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	height: 24px;
}

.select-productstate-box button {
	border-style: none;
	/*width: ;*/
	font-size: 13px;
	line-height: 24px;
	display: inline-block;
	vertical-align: top;
	-webkit-appearance: none;
	padding-left: 30px;
	max-width: 120px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	color: #96a6b6;
	background: url(~@/static/images/saixuanicon.png) no-repeat 0 center #fff;
	background-size: 22px 22px;
}

.select-productstate-box button.active {
	color: #4f90e7;
	background: url(~@/static/images/saixuaniconactive.png) no-repeat 0 center #fff;
	background-size: 22px 22px;
}

.notice-box {
	font-size: 12px;
	padding: 10px 15px;
	border-top: 1px solid #f1f4f8;
	border-bottom: 1px solid #f1f4f8;
	color: #afbbc7;
}

.notice-box p span {
	font-size: 12px;
	color: #4f90e7;
}

.odteil-content-box {
	padding-top: 141px;
}

.odteil-content-box h2 {
	text-align: center;
	font-weight: 400;
	color: #afbbc7;
	padding: 15px 0;
	font-size: 14px;
	margin: 0;
}

.odteil-content-box ul {
	margin-top: -10px;
	z-index: -2;
}

.odteil-content-box ul li {
	background-color: #fff;
	margin-bottom: 10px;
}

.content-headid-box {
	font-size: 12px;
	padding: 10px;
	overflow: hidden;
	border-bottom: 1px solid #f1f4f8;
}

.content-headid-box .headid-left-box {
	float: left;
}

.headid-left-box img {
	display: inline-block;
	vertical-align: top;
	width: 26px;
	height: 26px;
	border-radius: 50%;
}

.headid-left-box h4 {
	display: inline-block;
	vertical-align: top;
	padding: 0;
	margin: 0;
	font-weight: 400;
	font-size: 15px;
	line-height: 26px;
	padding-left: 6px;
}

.headid-left-box span {
	font-size: 12px;
	color: #fff;
	padding: 0 6px;
	line-height: 16px;
	margin: 5px 0;
	display: inline-block;
	border-radius: 100px;
	margin-left: 2px;
	background: -webkit-linear-gradient(left, #fe6c05, #fe8a19); /* Safari 5.1 - 6.0 */
	background: -o-linear-gradient(right, #fe6c05, #fe8a19); /* Opera 11.1 - 12.0 */
	background: -moz-linear-gradient(right, #fe6c05, #fe8a19); /* Firefox 3.6 - 15 */
	background: linear-gradient(to right, #fe6c05, #fe8a19); /* 标准的语法 */
}

.headid-right-box {
	float: right;
	line-height: 26px;
	color: #98a7b8;
	font-size: 3.5vw;
}

.content-table-box table {
	width: 100%;
	padding: 12px 10px;
}

.content-table-box table tr {
	display: flex;
	display: -webkit-flex;
	/*line-height: 34px;*/
	width: 100%;
}

.content-table-box table tr th {
	flex: 1;
	-ms-flex: 1;
	-moz-box-flex: 1;
	font-weight: 400;
	color: #98a7b8;
	padding: 0;
}
.content-table-box .zxwhat {
	color: #fff;
	background-color: #ff3535;
	border-radius: 100px;
	padding: 2px 6px;
	font-size: 11px;
	display: inline-block;
	line-height: 12px;
	vertical-align: top;
	margin-top: 1px;
}
.content-table-box table tr td:nth-of-type(1) span,
.content-table-box table tr th:nth-of-type(1) span {
	display: inline-block;
	max-width: 80px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	font-size: 13px;
}
.content-table-box table tr td:nth-of-type(2),
.content-table-box table tr th:nth-of-type(2) {
	padding: 0 15px;
	max-width: 120px;
	flex: 1.6;
	-ms-flex: 1.6;
	-moz-box-flex: 1.6;
	border-left: 1px solid #f1f4f8;
	border-right: 1px solid #f1f4f8;
	font-size: 13px;
}
.content-table-box table tr td:nth-of-type(2) {
	padding-top: 6px;
}
.content-table-box table tr td:nth-of-type(3),
.content-table-box table tr th:nth-of-type(3) {
	padding-left: 15px;
	font-size: 13px;
}

.content-table-box table tr td {
	text-align: left;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	padding: 0;
	padding-top: 16px;
}

.phms a {
	display: inline-block;
	padding-right: 30px;
	background: url(~@/static/images/deiltephoneicon.png) no-repeat 80px center;
	background-size: 16px 16px;
	margin-top: 10px;
}
.dgs span {
	display: inline-block;
	padding-right: 30px;
	background: url(~@/static/images/question_icon.png) no-repeat 44px center;
	background-size: 16px 16px;
}

.content-table-box table tr td.menus {
	font-size: 19px;
	color: #ffa746;
	padding-top: 11px;
}
.radios-card-box {
	padding: 0 15px;
	margin: 10px 0;
}
.bodys.actives {
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	overflow: hidden;
}
.butpdnm {
	border: 1px solid #bec3c7;
	border-radius: 5px;
	text-align: center;
	display: block;
	margin: 0 auto;
	font-size: 14px;
	padding: 5px 0;
	width: 80px;
	background-color: #fff;
	color: #515151;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	line-height: 18px;
	height: 18px;
	outline: none;
}
.butpdnm.active {
	color: #4586f3;
	border: 1px solid #ddedfa;
	background: url(~@/static/images/btnkflbxz.png) no-repeat right bottom #ddedfa;
	background-size: 14px 14px;
}
.radio-mess ul {
	max-height: 180px;
	overflow: auto;
	font-size: 0;
}
.radio-mess ul li {
	margin-bottom: 15px;
	width: 25% !important;
	float: left;
}
.surrer-btn {
	width: 35px;
	text-align: center;
	background-color: #3a86f6;
	color: #fff;
	border-style: none;
	display: block;
	margin: 0 auto;
	padding: 10px 36px;
	font-size: 16px;
	border-radius: 100px;
	outline: none;
}
.kflb-marsk {
	background-color: rgba(0, 0, 0, 0.4);

	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
}

/*设置部分的mask弹窗*/

.model-mask {
	background-color: rgba(0, 0, 0, 0.4);
	width: 100%;
	height: 100%;
	position: fixed;
	left: 0;
	top: 0;
}

.model {
	width: 80%;
	background-color: #fff;
	position: absolute;
	top: -50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border-radius: 5px;
	font-size: 14px;
}

.model input {
	border-style: none;
	text-indent: 10px;
}

.model-top-box {
	background-color: #4e90e6;
	width: 60%;
	margin: 0 auto;
	color: #fff;
	padding: 8px 0;
	text-align: center;
	border-radius: 0 0 5px 5px;
	font-size: 14px;
}

.model-phone-box {
	display: flex;
	display: -webkit-flex;
	margin: 30px 10px 10px 10px;
	padding-bottom: 10px;
	border-bottom: 1px solid #f1f4f8;
}

.model-phone-box input {
	flex: 1;
	-ms-flex: 1;
	height: 40px;
}

.btn-warning {
	background-color: #fff;
	color: #4f90e7;
}

.melym {
	padding: 0 10px;
	padding-bottom: 10px;
	margin-bottom: 10px;
	width: 100%;
	line-height: 40px;
}

.model-btn-box {
	display: flex;
	display: -webkit-flex;
	border-top: 1px solid #f1f4f8;
}

.model-btn-box .wtann {
	text-align: center;
	line-height: 36px;
	flex: 1;
	-ms-flex: 1;
	border-radius: 0;
	display: inline-block;
	border-top: 1px solid #f1f4f8;
	height: 40px;
}

.remove {
	border-style: none;
	border-right: 1px solid #f1f4f8;
}

.submin {
	border-style: none;
	color: #4f90e7;
}

.btn-disabled {
	color: #cdcdcd;
}

.btn-warning {
	height: 40px;
	font-size: 13px;
}

.btn-warning:active {
	background-color: #fff;
}

.flex-shop {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: #fff;
}

.flex-shop .add-btn-shop {
	display: block;
	margin: 10px 15px;
	background-color: #2a8cfb;
	color: #fff;
	line-height: 48px;
	font-size: 18px;
	text-align: center;
	border-radius: 3px;
}

.mask-box {
	background-color: rgba(0, 0, 0, 0.5);
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 999999;
	display: none;
}

.news-models-box {
	position: fixed;
	width: 88%;
	margin: auto;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	height: 356px;
	background-color: #fff;
	border-radius: 8px;
}

.newsinform-mess-box {
	padding: 0 8%;
}

.newsinform-mess-box h2 {
	text-align: center;
	font-size: 18px;
	padding-top: 10px;
}

.newsinform-mess-box span {
	color: #a4b1c0;
	padding-top: 20px;
	display: block;
	height: 80px;
	overflow: hidden;
	text-overflow: ellipsis;
	line-height: 24px;
}

.banner-newsinform-box img {
	width: 100%;
}

.btn-newsinform {
	text-align: center;
	position: absolute;
	bottom: 20px;
	width: 100%;
}

.btn-newsinform a {
	display: inline-block;
	vertical-align: top;
	font-size: 15px;
	border: 1px solid #4e90e6;
	border-radius: 100px;
	color: #4e90e6;
	padding: 8px 24px;
	margin-right: 10px;
}

.btn-newsinform button {
	display: inline-block;
	vertical-align: top;
	border-style: none;
	font-size: 15px;
	background-color: #fff;
	border: 1px solid #ddd;
	color: #ddd;
	border-radius: 100px;
	padding: 8px 24px;
	margin-left: 10px;
	outline: none;
}

.close-newsinform-btn {
	width: 40px;
	height: 40px;
	position: absolute;
	bottom: -60px;
	left: 50%;
	transform: translateX(-50%);
}

@media only screen and (max-width: 328px) {
	.form-cz-box {
		font-size: 13px;
	}
	.ipt-box-cl input {
		font-size: 13px;
	}
	.btn-form {
		font-size: 15px;
	}
	.ipt-box-cl input {
		width: 100px;
	}
}

.radio-group img {
	width: 16px;
	height: 16px;
	display: inline-block;
	vertical-align: top;
}

.head-hint-box {
	background-color: #4f90e7;
	padding: 30px 0;
}

.head-hint-box img {
	width: 72px;
	height: 72px;
	display: block;
	margin: 0 auto;
}

.head-hint-box span {
	display: block;
	text-align: center;
	color: #fff;
	font-size: 14px;
	padding-top: 4px;
}

.hint-tuijlist-box {
	margin-top: 15px;
}

.list-title-box {
	padding: 10px 15px;
	background-color: #fff;
	font-size: 14px;
	line-height: 22px;
}

.list-title-box img {
	width: 22px;
	height: 22px;
	display: inline-block;
	vertical-align: top;
}

.hint-tuijlist-box ul li a {
	display: block;
	background-color: #fff;
	padding: 15px;
	display: flex;
	display: -webkit-flex;
	margin-top: 1px;
}

.logo-hint img {
	width: 58px;
	height: 58px;
	display: inline-block;
	vertical-align: top;
}

.hint-message-box {
	height: 50px;
}

.hint-message-box {
	flex: 1;
	-ms-flex: 1;
	padding-left: 10px;
	line-height: 15px;
}

.hint-message-box h4 {
	padding: 0;
	margin: 0;
	display: inline-block;
	vertical-align: top;
	line-height: 18px;
	font-size: 15px;
}

.messle-name-box .spnn-box {
	display: inline-block;
	vertical-align: top;
}

.spnn-box span {
	font-size: 12px;
	color: #4f90e7;
	display: inline-block;
	border: 1px solid #4f90e7;
	padding: 0 2px;
	vertical-align: top;
	opacity: 0.7;
}

.innert-box {
	padding-top: 6px;
}

.innert-lf-box {
	font-size: 13px;
	display: inline-block;
}

.innert-lf-box span {
	display: block;
	color: #98a7b8;
	line-height: 18px;
}

.innert-lf-box span i {
	font-style: normal;
	color: #ffa646;
}

.innert-rg-box {
	float: right;
	display: inline-block;
	line-height: 36px;
	font-size: 18px;
	color: #ffa646;
}

/*我要借款*/
.recommend-loan-box .btn {
	background-color: #fff;
	margin-bottom: 15px;
	padding: 15px;
}
.recommend-loan-box .li-zjie {
	background-color: #fff;
	margin-bottom: 15px;
	padding: 15px;
}
.recommend-loan-box .canpbg {
	display: block;
	background-color: #fff;
	padding: 15px;
	margin-bottom: 15px;
}
.recommend-loanhead-box img {
	width: 36px;
	height: 36px;
	border-radius: 50%;
}
.recommend-loanhead-box span {
	line-height: 36px;
	display: inline-block;
	vertical-align: top;
	padding-left: 10px;
}
.recommend-loanlist-box {
	display: flex;
	display: -webkit-flex;
}
.recommend-loanlist-box .loanlist-box {
	max-width: 180px;
	display: inline-block;
	vertical-align: middle;
	overflow: hidden;
}
.loanlist-box h2,
h4 {
	padding: 0;
	margin: 0;
	line-height: 28px;
}
.loanlist-box span {
	font-size: 12px;
	color: #a3b0c1;
}
.recommend-loanlist-box .fankuan-box {
	width: 64px !important;
	height: 64px !important;
	border: 2px solid #4b82f6;
	border-radius: 50%;
}
.loanlist-box h2 {
	font-size: 22px;
	font-weight: 500;
	color: #fb2a5b;
}
.loanlist-box h4 {
	font-weight: 400;
	font-size: 16px;
}
.fankuan-box span {
	display: block;
	text-align: center;
}
.fankuan-box span:nth-of-type(1) {
	padding-top: 15px;
}
.messloan-box {
	margin: 0 11px;
	flex: 1;
	padding-top: 10px;
}
.monneyloan-box {
	padding-top: 10px;
}
/*.messloan-box span{text-overflow: ellipsis;overflow: hidden;white-space: nowrap;}*/
.recommend-loanhead-box button {
	float: right;
	line-height: 26px;
	padding: 0 18px;
	border-radius: 100px;
	font-size: 12px;
	margin: 4px 0;
	border-style: none;
	background-color: #fff;
}
.recommend-loanhead-box button.remove-btn {
	border: 1px solid #ff3d4f;
	color: #ff3d4f;
}
.recommend-loanhead-box button.addcom-btn {
	border: 1px solid #5186f6;
	color: #5186f6;
}
.product-contbox {
	display: block;
	margin: 0 auto;
	border-style: none;
	background-color: #fff;
	margin-top: 8px;
	border-radius: 100px;
	font-size: 14px;
	padding: 0 15px;
	line-height: 22px;
}
.removect-btn {
	border: 1px solid #fb2a5b;
	color: #fb2a5b;
}
.addct-btn {
	border: 1px solid #5085f6;
	color: #5085f6;
}
.saveproduct-btn {
	background-color: #2a8cfb;
	color: #fff;
	border-style: none;
	width: 88%;
	margin: 0 auto;
	line-height: 48px;
	font-size: 16px;
	display: block;
	border-radius: 2px;
	margin-top: 18px;
}

/*注册成功*/
.regist-box {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background: url(~@/static/images/regist-bg.png) no-repeat left top transparent;
	background-size: 100% 100%;
}
.regist-headige {
	padding-top: 20px;
}
.regist-headige img {
	width: 78%;
	display: block;
	margin: 0 auto;
	z-index: -1;
}
.regist-message-box {
	margin: 0 15px;
	background-color: #fff;
	border-radius: 5px;
	position: relative;
}
.regist-message-box {
	text-align: center;
}
.succesd-icon {
	width: 66px;
	height: 66px;
	padding-top: 30px;
}
.elment-ewm-box img {
	width: 165px;
	height: 165px;
	padding: 20px 0 22px 0;
}
.elment-tlspan {
	color: #2a8cfb;
	font-size: 17px;
	display: block;
	padding-top: 20px;
	line-height: 17px;
}
.guanzhu-p {
	margin: 0;
	padding-bottom: 38px;
	font-size: 17px;
	color: #2a8cfb;
	font-weight: 500;
}
.download-box {
	padding-bottom: 20px;
}
.download-dbk {
	height: 48px;
	color: #fff;
	background-color: #2a8cfb;
	font-size: 17px;
	text-decoration: none;
	width: 76%;
	display: block;
	margin: 0 auto;
	border-radius: 4px;
	line-height: 48px;
}

/*我的权益*/
.equity-header-box {
	background: -webkit-linear-gradient(left bottom, #ffb682, #f29162); /* Safari 5.1 - 6.0 */
	background: -o-linear-gradient(top right, #ffb682, #f29162); /* Opera 11.1 - 12.0 */
	background: -moz-linear-gradient(top right, #ffb682, #f29162); /* Firefox 3.6 - 15 */
	background: linear-gradient(to top right, #ffb682, #f29162); /* 标准的语法 */
	padding: 15px 0;
	position: relative;
}
.equity-user-box {
	text-align: center;
}
.equity-user-box img {
	width: 70px;
	height: 70px;
	border-radius: 50%;
	margin: 22px 0 15px;
	display: inline-block;
	vertical-align: top;
}
.equity-user-box span {
	display: block;
	font-size: 15px;
	color: #fff;
}
.plan-box {
	height: 4px;
	width: 82%;
	margin: 0 auto;
	margin-top: 3vw;
	background-color: #e8dac3;
	position: relative;
}
.plan-show {
	height: 4px;
	width: 100%;
	position: absolute;
	left: 0;
	top: 0;
	background-color: #b7a78a;
}
.dot {
	width: 10px;
	height: 10px;
	background-color: #fcd6bf;
	border-radius: 50%;
	display: block;
}
.dot.active {
	background-color: #b7a78a;
}
.dot:nth-of-type(1) {
	position: absolute;
	left: -5px;
	top: -3px;
}
.dot:nth-of-type(2) {
	position: absolute;
	left: 0;
	right: 0;
	margin: auto;
	top: -3px;
}
.dot:nth-of-type(3) {
	position: absolute;
	right: -5px;
	top: -3px;
}
.grade-box {
	text-align: center;
	padding: 0 15px;
	font-size: 3.2vw;
	margin-top: 10px;
	color: #fff;
}
.grade-box span:nth-of-type(1) {
	float: left;
}
.grade-box span:nth-of-type(3) {
	float: right;
}
.grade-explain {
	color: #fff;
	position: absolute;
	top: 12px;
	right: 12px;
	font-size: 15px;
	line-height: 15px;
}
.membership-list-box ul {
	box-sizing: border-box;
	font-size: 0;
	padding-bottom: 15px;
}
.membership-list-box ul li {
	display: inline-block;
	width: 33.3%;
	padding-top: 15px;
}
.membership-list-box ul li {
	font-size: 14px;
	text-align: center;
}
.membership-list-box ul li img {
	width: 60px;
	height: 60px;
	display: inline-block;
	vertical-align: top;
}
.membership-list-box ul li span {
	display: block;
	color: #333333;
}
.membership-equity-box {
	background-color: #fff;
}
.equity-tle {
	padding: 15px;
	font-size: 14px;
	color: #1b1b1b;
	border-bottom: 1px solid #f1f4f8;
}
.invite-task-box ul li {
	display: flex;
	display: -webkit-flex;
	display: -ms-flexbox;
	padding: 8px 6px;
	margin: 0 14px;
	position: relative;
}
.invite-task-box ul li:nth-of-type(1) {
	background: -webkit-linear-gradient(left top, #524939, #292626);
	background: -o-linear-gradient(bottom right, #524939, #292626);
	background: -moz-linear-gradient(bottom right, #524939, #292626);
	background: linear-gradient(to bottom right, #524939, #292626);
}
.invite-task-box ul li:nth-of-type(2) {
	background: -webkit-linear-gradient(left top, #463f32, #292626);
	background: -o-linear-gradient(bottom right, #463f32, #292626);
	background: -moz-linear-gradient(bottom right, #463f32, #292626);
	background: linear-gradient(to bottom right, #463f32, #292626);
}
.invite-task-box ul li:nth-of-type(3) {
	background: -webkit-linear-gradient(left top, #3c352b, #292626);
	background: -o-linear-gradient(bottom right, #3c352b, #292626);
	background: -moz-linear-gradient(bottom right, #3c352b, #292626);
	background: linear-gradient(to bottom right, #3c352b, #292626);
}
.invite-task-box ul li img {
	width: 34px;
	height: 34px;
	display: inline-block;
	vertical-align: top;
	padding: 6px;
}
.invite-mess {
	padding-left: 10px;
	flex: 1;
	-webkit-flex: 1;
	-ms-flex: 1;
}
.invite-mess span {
	font-size: 12px;
	color: #c3b69a;
}
.invite-mess p {
	font-size: 3.8vw;
	color: #fee1a0;
	line-height: 25px;
}
.btn-invite {
	position: absolute;
	right: 15px;
	top: 0;
	bottom: 0;
	height: 8vw;
	margin: auto;
	color: #a7a7a6;
	border-style: none;
	border-radius: 100px;
	padding: 0 10px;
	font-size: 12px;
	background-color: #777777;
	line-height: 8vw;
	width: 16vw;
	text-align: center;
}
.btn-invite.active {
	line-height: 8vw;
	background-color: #cdb683;
	color: #524939;
}

.tuijan-host-box {
	background-color: #fff;
	display: flex;
	display: -webkit-flex;
	flex-wrap: wrap;
	padding: 0 10px;
	height: 208px;
	overflow: hidden;
}
.tuijan-host-box.active {
	height: auto;
}
.btn-banks {
	width: 100%;
	padding: 0;
	margin: 0;
	height: 40px;
	line-height: 40px;
	text-align: center;
	border-style: none;
	background-color: #fff;
	color: #a3b0c1;
	outline: none;
}
.icon-bank {
	width: 16px;
	height: 40px;
	display: inline-block;
	vertical-align: top;
	background: url(~@/static/images/zhankai_icon.png) no-repeat center center;
	background-size: 16px 16px;
	line-height: 40px;
	margin-left: 6px;
}
.icon-bank.active {
	background: url(~@/static/images/shouqi_icon.png) no-repeat center center;
	background-size: 16px 16px;
}

/*等级说明*/
.plan-slider img {
	width: 100%;
	display: inline-block;
	vertical-align: top;
}

/*排行榜*/
.caption-head-box span {
	background-color: #fff;
	font-size: 15px;
	font-weight: 500;
	display: block;
	padding: 15px 10px;
	text-align: center;
	margin-top: 15px;
}
.table {
	border: 0px solid darkgray;
	background-color: #fff;
	border-bottom: 80px solid #f1f4f8;
}
.tr {
	display: flex;
	display: -webkit-flex;
	width: 100%;
	justify-content: center;
	align-items: center;
}
.td {
	/* justify-content: center; */
	text-align: center;
	flex: 1;
	height: 54px;
	line-height: 54px;
	color: #97a7b7;
	font-size: 28rpx;
	border-bottom: 1px solid #f1f4f8;
}
.th .td {
	border-style: none;
}
.td:first-of-type {
	text-align: center;
	flex: 0.4;
	margin-left: 10px;
}
.td.head-user {
	flex: 0.5;
	-ms-flex: 0.5;
}
.td:last-of-type {
	margin-right: 10px;
	color: #ffa646;
	font-weight: 500;
}
.td.cl-th {
	color: #97a7b7;
	font-weight: 400;
}
/* .td:nth-of-type(2){text-align: left;flex: 2;align-items: center;display: inline-block}   */
.bg-w {
	background: snow;
}
.img-us img {
	width: 40px;
	height: 40px;
	display: inline-block;
	vertical-align: middle;
	border-radius: 50%;
}
.img-us span {
	display: inline-block;
	height: 54px;
	line-height: 54px;
	color: #97a7b7;
	padding-left: 12px;
}
.top-three {
	display: flex;
	padding: 30px 0 10px 0;
	flex-wrap: nowrap;
}
.top-three-box {
	width: 26%;
	padding: 0 3.6%;
}
.top-three-box img {
	width: 65px;
	height: 65px;
	display: block;
	margin: 0 auto;
	border-radius: 50%;
}
.top-three-box view {
	position: relative;
}
.top-three-box img.two-image {
	width: 80px;
	height: 80px;
	margin-top: -15px;
}
.top-three-box .bq {
	position: absolute;
	right: 20px;
	bottom: 0;
	font-style: normal;
	border-radius: 50%;
	display: block;
	width: 18px;
	height: 18px;
	background-color: #fa2652;
	line-height: 18px;
	text-align: center;
	font-size: 12px;
	color: #fff;
}
.top-three-box .bq-two {
	background-color: #ffd119;
}
.top-three-box .bq-one {
	width: 20px;
	height: 20px;
	line-height: 20px;
}
.top-three-box .bq-three {
	background-color: #5190e7;
}
.top-three-box img.topone-image {
	width: 65px;
	height: 65px;
	margin-top: -10px;
}
.top-three-box span {
	color: #97a7b7;
	font-size: 14px;
	display: block;
	width: 100%;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	text-align: center;
	padding: 8px 0;
}
.top-three-box span.top-three-monney {
	text-align: center;
	background-color: #fff6eb;
	display: block;
	width: 66%;
	margin: 0 auto;
	border-radius: 100px;
	padding: 3px 4px;
	color: #ffa646;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}

.caption-head-box span {
	background-color: #fff;
	font-size: 15px;
	font-weight: 500;
	display: block;
	padding: 15px 10px;
	text-align: center;
	margin-top: 15px;
}
.veigt-box {
	height: 1px;
}
.veigt-box span {
	display: block;
	width: 10%;
	height: 1px;
	margin: 0 auto;
	padding: 0;
	background-color: #4e90e6;
}
.pdta-ms {
	text-align: center;
	font-size: 12px;
	color: #98a7b8;
	display: block;
	padding-bottom: 10px;
}

/*身份选择*/
.select-body {
	background: -webkit-linear-gradient(#3998ff, #2b7eff); /* Safari 5.1 - 6.0 */
	background: -o-linear-gradient(#3998ff, #2b7eff); /* Opera 11.1 - 12.0 */
	background: -moz-linear-gradient(#3998ff, #2b7eff); /* Firefox 3.6 - 15 */
	background: linear-gradient(#3998ff, #2b7eff); /* 标准的语法 */
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	text-align: center;
	color: #fff;
	overflow: scroll;
}
.capt-title-box h1 {
	padding: 30px 0 0 0;
	font-weight: 500;
	font-size: 30px;
}
.btn-select-captbox {
	background-color: #fff;
	border-radius: 5px;
	margin: 50px 20px 60px 20px;
	text-align: left;
	position: relative;
	opacity: 0;
	transform: scale(0.3);
	-moz-transform: scale(0.3);
	-webkit-transform: scale(0.3);
	-ms-transform: scale(0.3);
	animation: mymove 0.8s;
	animation-iteration-count: 1;
	animation-fill-mode: forwards; /* Safari 和 Chrome */
	-webkit-animation: mymove 0.8s;
	-webkit-animation-iteration-count: 1;
	-webkit-animation-fill-mode: forwards;
}
.btn-select-captbox img {
	width: 40%;
	display: inline-block;
	vertical-align: top;
}
.captmess-box {
	position: absolute;
	left: 40%;
	right: 0;
	top: 20px;
	bottom: 20px;
	color: #555;
}
.tle-tapsbox {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	-webkit-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
}
.nextbtn-box a {
	font-size: 28px;
	color: #fff;
}
.tle-tapsbox h3 {
	font-size: 23px;
	font-weight: 500;
	color: #2a8cfb;
	margin: 0;
	display: block;
	padding-bottom: 6px;
}
.tle-tapsbox span {
	font-size: 14px;
	color: #adb8c1;
}
.icon-success {
	width: 26px;
	height: 26px;
	background: url(~@/static/images/gou_n_icon.png) no-repeat center center;
	background-size: 26px 26px;
	display: block;
	position: absolute;
	top: 0;
	bottom: 0;
	right: 15px;
	margin: auto;
}
.icon-success.active {
	width: 26px;
	height: 26px;
	background: url(~@/static/images/gou_s_icon.png) no-repeat center center;
	background-size: 26px 26px;
	display: block;
	position: absolute;
	top: 0;
	bottom: 0;
	right: 15px;
	margin: auto;
}

/*猜你喜欢*/
.guess-like-box {
	background-color: #fff;
}
.guess-title span {
	font-size: 15px;
	padding: 0 15px;
	border-left: 2px solid #2a8cfb;
	display: inline-block;
	margin: 20px 15px;
	font-weight: 600;
	line-height: 12px;
}
.guess-tap {
	padding: 0 15px;
	font-size: 15px;
	position: relative;
	z-index: 1;
}
.guess-tap:before {
	content: '';
	position: absolute;
	top: -15px;
	left: 0;
	right: 0;
	bottom: -18px;
	border-bottom: 1px solid #f1f4f8;
	z-index: -1;
	background-color: #fff;
}
.guess-tap span {
	padding: 15px 0;
	margin-right: 15px;
}
.guess-tap span.active {
	color: #2a8cfb;
	border-bottom: 2px solid #2a8cfb;
}
.ul-pad {
	padding-top: 20px;
	margin-bottom: 80px;
	background-color: #fff;
}
.footer-fixed-com {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	padding: 15px 0;
	background-color: #fff;
}
.footer-fixed-com a {
	text-align: center;
	display: block;
	width: 80%;
	margin: 0 auto;
	padding: 12px 0;
	background-color: #2a8cfb;
	font-size: 18px;
	color: #fff;
	border-radius: 4px;
}
.moken-box {
	position: relative;
}
.right-loan {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
}
.left-loan {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
}
.recommend-loanlist-box {
	position: relative;
}
.btn-shenq {
	position: absolute;
	right: 0;
	top: 14px;
	padding: 0;
	margin: 0;
	border-style: none;
	height: 24px;
	line-height: 24px;
	padding: 0 12px;
	color: #fff;
	font-size: 11px;
	border-radius: 100px;
	background: -webkit-linear-gradient(left, #3b7cff, #32abff); /* Safari 5.1 - 6.0 */
	background: -o-linear-gradient(right, #3b7cff, #32abff); /* Opera 11.1 - 12.0 */
	background: -moz-linear-gradient(right, #3b7cff, #32abff); /* Firefox 3.6 - 15 */
	background: linear-gradient(right, #3b7cff, #32abff); /* 标准的语法 */
}

@keyframes mymove {
	from {
		transform: scale(0.3);
		opacity: 0;
	}
	to {
		transform: scale(1);
		opacity: 1;
	}
}

@-webkit-keyframes mymove /*Safari and Chrome*/ {
	from {
		transform: scale(0.3);
		opacity: 0;
	}
	to {
		transform: scale(1);
		opacity: 1;
	}
}

@media screen and (min-width: 320px) and (max-width: 360px) {
	.recommend-loanlist-box .fankuan-box {
		display: none;
	}
	.content-table-box table tr th,
	.content-table-box table tr td {
		font-size: 13px;
	}
	.phms a {
		padding-right: 20px;
		background: url(~@/static/images/deiltephoneicon.png) no-repeat 80px center;
		background-size: 14px 14px;
	}
	.headid-left-box h4 {
		font-size: 13px;
	}
	.content-table-box table tr td:nth-of-type(1) span,
	.content-table-box table tr th:nth-of-type(1) span {
		max-width: 60px;
	}
	.select-productstate-box button {
		font-size: 12px;
		background: url(~@/static/images/saixuanicon.png) no-repeat 0 center #fff;
		background-size: 18px 18px;
		padding-left: 20px;
		max-width: 80px;
	}
	.radio-mess ul li {
		display: inline-block;
		margin-bottom: 15px;
		width: 33%;
	}

	.content-table-box table tr td:nth-of-type(2),
	.content-table-box table tr th:nth-of-type(2) {
		max-width: 102px;
		padding-right: 0;
		padding-left: 10px;
	}
	.elment-ewm-box img {
		width: 130px;
		height: 130px;
		padding: 20px 0 22px 0;
	}
	.elment-tlspan,
	.guanzhu-p {
		font-size: 15px;
	}
	.download-dbk {
		font-size: 15px;
	}
	.succesd-icon {
		padding-top: 20px;
	}
	.elment-tlspan {
		padding-top: 15px;
	}
	.elment-ewm-box img {
		padding: 15px 0;
	}

	/*身份选择*/
	.capt-title-box h1 {
		font-size: 26px;
	}
	.tle-tapsbox h3 {
		font-size: 20px;
	}
	.icon-success {
		width: 22px;
		height: 22px;
		background: url(~@/static/images/gou_n_icon.png) no-repeat center center;
		background-size: 22px 22px;
		display: block;
		position: absolute;
		top: 0;
		bottom: 0;
		right: 12px;
		margin: auto;
	}
	.icon-success.active {
		width: 22px;
		height: 22px;
		background: url(~@/static/images/gou_s_icon.png) no-repeat center center;
		background-size: 22px 22px;
		display: block;
		position: absolute;
		top: 0;
		bottom: 0;
		right: 12px;
		margin: auto;
	}
	.nextbtn-box a {
		font-size: 24px;
	}

	.content-table-box table tr td.menus {
		font-size: 13px;
		padding-top: 16px;
	}
}

/*通用样式*/
.news-bossxe-box ul {
	display: flex;
	display: -webkit-flex;
	padding: 0 6px;
	background-color: #fff;
}
.news-bossxe-box ul li {
	flex: 1;
	-ms-flex: 1;
	padding: 0 10px 20px 10px;
}
.news-bossxe-box ul li img {
	width: 50px;
	height: 50px;
	display: block;
	margin: 0 auto;
}
.news-bossxe-box ul li a span {
	display: block;
	text-align: center;
	font-size: 13px;
	padding-top: 2px;
	color: #333333;
}
</style>
