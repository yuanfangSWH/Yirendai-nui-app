(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-registered-registered"],{"4b18":function(e,t,n){"use strict";var i=n("792e"),a=n.n(i);a.a},5573:function(e,t,n){"use strict";n.r(t);var i=n("66fe"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);t["default"]=a.a},5656:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"qibt"},[i("img",{staticClass:"wtqdimg",attrs:{src:n("ad00"),alt:""}})])],1)},a=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a})},"5c72":function(e,t,n){"use strict";n.r(t);var i=n("5656"),a=n("5573");for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);n("4b18");var s=n("2877"),r=Object(s["a"])(a["default"],i["a"],i["b"],!1,null,"5b73f663",null);t["default"]=r.exports},"66fe":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(n("eaef")),a=s(n("8f60")),o=s(n("fa66"));function s(e){return e&&e.__esModule?e:{default:e}}var r={data:function(){return{}},onLoad:function(){this.detection()},methods:{sessionidFilter:function(){var e="http://appapi.sh516.com/v1/handshake/index",t="-----BEGIN PUBLIC KEY-----\n\t\t\tMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDEFXkm8pA01MGAIUA/cm7qIcea\n\t\t\t6qYVm6xP5krX5HDPakQrNkN/szXB9qhzQi9EEI82VxcNU8PxIbTiJo0DRhaF1mm1\n\t\t\tcN0myTd4Fs44h59hMLkJocRfeGU4hCD6ZRmzbwd3H1eTCAoljMcDTynwevdEeAqe\n\t\t\tZvazB3IiviZyakwVjQIDAQAB\n\t\t\t-----END PUBLIC KEY-----",n=(0,o.default)(e),i=new a.default;i.setPublicKey(t);var s=i.encrypt(n),r=uni.getStorageSync("SessionId"),u={id:"116626",os:"android",version:"1.0",sign:s,lang:"zh","Content-Type":"application/x-www-form-urlencoded",useragent:"",dpi:"",Sessionid:r,cookie:"PHPSESSID="+r};""!=r&&void 0!=r||(delete u.Sessionid,delete u.cookie),uni.request({type:"head",url:e,method:"get",header:u,success:function(e){if(200==e.data.status){var t=JSON.stringify(e.header),n=t.replace(/\s*/g,""),i=JSON.parse(n),a=i.Sessionid;uni.setStorageSync("SessionId",a),console.log("取到的值："+a),""==a||void 0==a?uni.showToast({title:"未知错误，请退出应用程序重试",icon:"none",duration:2e3}):setTimeout(function(){uni.reLaunch({url:"/pages/login/login"})},2e3)}else uni.showToast({title:"网络异常，请重试",icon:"none",duration:2e3})}})},detection:function(){var e=this,t=uni.getStorageSync("landing");""==t||void 0==t?this.sessionidFilter():setTimeout(function(){e.Thelogin()},2e3)},Thelogin:function(){var e=this;i.default.apiPost("/member/getuserinfo","","","post",function(t,n){t?(uni.setStorageSync("landing",n.data),e.validation()):(uni.showToast({title:"网络异常，请重试",icon:"none",duration:2e3}),uni.reLaunch({url:"/pages/login/login"}))})},validation:function(){var e=uni.getStorageSync("landing");""==e.member_tj_id||0==e.member_tj_id?uni.reLaunch({url:"/pages/registered/invitation/invitation"}):""==e.member_card?uni.reLaunch({url:"/pages/registered/reality/reality"}):""==e.member_password?uni.reLaunch({url:"/pages/registered/setpassword/setpassword"}):(uni.showToast({title:"欢迎登录",icon:"none",duration:2e3}),uni.reLaunch({url:"/pages/index/index"}))}}};t.default=r},"770a":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".wtqdimg[data-v-5b73f663]{width:100%;height:%?1200?%}",""])},"792e":function(e,t,n){var i=n("770a");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("30e39148",i,!0,{sourceMap:!1,shadowMode:!1})},ad00:function(e,t,n){e.exports=n.p+"static/img/YirendaiQ.6ab6f700.png"}}]);