(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/registered/invitation/invitation"],{"50b2":function(e,t,n){},"86c2":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("eaef"));function r(e){return e&&e.__esModule?e:{default:e}}var i={data:function(){return{code:"MTE2NjI2"}},methods:{invite:function(){var t=this,n={code:this.code},r="?code="+this.code;a.default.apiPost("/member/regcode",r,n,"post",function(n,a){n?(e.setStorageSync("inviteCode",t.code),t.validation()):e.showToast({title:"邀请码不存在或填写错误",icon:"none",duration:2e3})})},validation:function(){var t=e.getStorageSync("landing");""==t.member_password?e.reLaunch({url:"/pages/registered/setpassword/setpassword"}):""==t.member_card?e.reLaunch({url:"/pages/registered/reality/reality"}):e.reLaunch({url:"/pages/index/index"})}}};t.default=i}).call(this,n("6e42")["default"])},"9efc":function(e,t,n){"use strict";var a=n("50b2"),r=n.n(a);r.a},a14f:function(e,t,n){"use strict";n.r(t);var a=n("86c2"),r=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);t["default"]=r.a},a2f9:function(e,t,n){"use strict";n.r(t);var a=n("ffbe"),r=n("a14f");for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);n("9efc");var o=n("2877"),u=Object(o["a"])(r["default"],a["a"],a["b"],!1,null,null,null);t["default"]=u.exports},ffbe:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return r})}},[["709a","common/runtime","common/vendor"]]]);