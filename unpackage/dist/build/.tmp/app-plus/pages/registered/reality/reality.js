(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/registered/reality/reality"],{"0e53":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("eaef"));function a(t){return t&&t.__esModule?t:{default:t}}var o={data:function(){return{name:"",sfz:"",re:/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,reg:/^[\u4E00-\u9FA5]{2,4}$/}},methods:{filterData:function(){""==this.name?t.showToast({title:"真实姓名不能为空",icon:"none",duration:2e3}):this.name.length>12?t.showToast({title:"真实姓名长度错误",icon:"none",duration:2e3}):this.reg.test(this.name)?""==this.sfz?t.showToast({title:"身份证号不能为空",icon:"none",duration:2e3}):this.sfz.length>18?t.showToast({title:"身份证号长度错误",icon:"none",duration:2e3}):this.re.test(this.sfz)?this.real():t.showToast({title:"身份证号填写错误",icon:"none",duration:2e3}):t.showToast({title:"真实姓名只能为汉字",icon:"none",duration:2e3})},real:function(){var e=this,n={name:this.name,sfz:this.sfz},a="?name="+this.name+"&sfz="+this.sfz;i.default.apiPost("/member/vertion",a,n,"post",function(n,i){n?"false"==i.message?t.showToast({title:"提交信息失败，请重试",icon:"none",duration:2e3}):e.validation():t.showToast({title:"提交信息失败，请重试",icon:"none",duration:2e3})})},validation:function(){var e=t.getStorageSync("landing");""==e.member_tj_id||0==e.member_tj_id?t.reLaunch({url:"/pages/registered/invitation/invitation"}):""==e.member_password?t.reLaunch({url:"/pages/registered/setpassword/setpassword"}):t.reLaunch({url:"/pages/certification/certification"})}}};e.default=o}).call(this,n("6e42")["default"])},"44e5":function(t,e,n){"use strict";n.r(e);var i=n("9e0b"),a=n("be95");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("6745");var s=n("2877"),r=Object(s["a"])(a["default"],i["a"],i["b"],!1,null,null,null);e["default"]=r.exports},6745:function(t,e,n){"use strict";var i=n("7d95"),a=n.n(i);a.a},"7d95":function(t,e,n){},"9e0b":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},be95:function(t,e,n){"use strict";n.r(e);var i=n("0e53"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a}},[["9a26","common/runtime","common/vendor"]]]);