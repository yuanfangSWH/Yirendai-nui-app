(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-validation-validation"],{1052:function(i,t,e){"use strict";e.r(t);var a=e("a2f7"),o=e.n(a);for(var n in a)"default"!==n&&function(i){e.d(t,i,function(){return a[i]})}(n);t["default"]=o.a},"2f4a":function(i,t,e){"use strict";e.r(t);var a=e("9a9a"),o=e("1052");for(var n in o)"default"!==n&&function(i){e.d(t,i,function(){return o[i]})}(n);e("4275");var s=e("2877"),d=Object(s["a"])(o["default"],a["a"],a["b"],!1,null,"7729fe24",null);t["default"]=d.exports},4275:function(i,t,e){"use strict";var a=e("9262"),o=e.n(a);o.a},9262:function(i,t,e){var a=e("efc1");"string"===typeof a&&(a=[[i.i,a,""]]),a.locals&&(i.exports=a.locals);var o=e("4f06").default;o("ffe0d74a",a,!0,{sourceMap:!1,shadowMode:!1})},"9a9a":function(i,t,e){"use strict";var a=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("v-uni-view",[e("v-uni-view",{staticClass:"login-news"},[e("v-uni-view",{staticClass:"form-login"},[e("h2",[i._v("请输入验证码")]),e("span",[i._v("验证码已发送至   "+i._s(i.mobileXH))]),e("v-uni-view",{staticClass:"getCodeMsg"},[e("v-uni-input",{staticClass:"move-ex",class:{moveda:i.disabled1,movedb:i.disabled2,movedc:i.disabled3,movedd:i.disabled4},attrs:{type:"number",maxlength:"4",name:"code",pattern:"[0-9]*",focus:"focus"},on:{input:function(t){t=i.$handleEvent(t),i.moveDH(t)}},model:{value:i.mobilecaptcha,callback:function(t){i.mobilecaptcha=t},expression:"mobilecaptcha"}}),e("v-uni-view",{staticClass:"mlimbg",class:{mlimbgts:i.disabled1}},[i._v(i._s(i.validation1))]),e("v-uni-view",{staticClass:"mlimbg",class:{mlimbgts:i.disabled2}},[i._v(i._s(i.validation2))]),e("v-uni-view",{staticClass:"mlimbg",class:{mlimbgts:i.disabled3}},[i._v(i._s(i.validation3))]),e("v-uni-view",{staticClass:"mlimbg",class:{mlimbgts:i.disabled4}},[i._v(i._s(i.validation4))])],1),e("v-uni-view",{staticClass:"code"},[e("v-uni-view",{staticClass:"login-yzman",class:{n_border:!!i.isActive},on:{click:function(t){t=i.$handleEvent(t),i.takeGL()}}},[i._v(i._s(i.animation))])],1)],1)],1)],1)},o=[];e.d(t,"a",function(){return a}),e.d(t,"b",function(){return o})},a2f7:function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(e("eaef"));function o(i){return i&&i.__esModule?i:{default:i}}var n={data:function(){return{mobile:"",mobileXH:"",codeFalse:"",mobilecaptcha:"",yzmZJ:!0,isActive:!0,countdown:60,animation:"免费获取验证码",location:0,validation1:"",validation2:"",validation3:"",validation4:"",disabled1:!0,disabled2:!1,disabled3:!1,disabled4:!1}},onLoad:function(i){this.mobile=i.mobile;var t=/^(\d{3})\d+(\d{4})$/,e=this.mobile;this.mobileXH=e.replace(t,"$1****$2"),this.setTime()},methods:{moveDH:function(i){var t=i.target.value,e=new Array;switch(e=t.split(""),e.length){case 0:this.validation1="",this.disabled1=!0,this.disabled2=!1,this.disabled3=!1,this.disabled4=!1;break;case 1:this.validation1=e[0],this.validation2="",this.disabled2=!0,this.disabled1=!1,this.disabled3=!1,this.disabled4=!1;break;case 2:this.validation1=e[0],this.validation2=e[1],this.validation3="",this.disabled3=!0,this.disabled1=!1,this.disabled2=!1,this.disabled4=!1;break;case 3:this.validation1=e[0],this.validation2=e[1],this.validation3=e[2],this.validation4="",this.disabled4=!0,this.disabled1=!1,this.disabled2=!1,this.disabled3=!1;break;case 4:this.validation1=e[0],this.validation2=e[1],this.validation3=e[2],this.validation4=e[3],this.disabled4=!0,this.disabled1=!1,this.disabled2=!1,this.disabled3=!1,this.login();break}},takeGL:function(){1==this.yzmZJ&&this.obtainYZ()},setTime:function(){var i=this;0==this.countdown?(this.countdown=60,this.isActive=!1,this.yzmZJ=!0,this.animation="免费获取验证码"):(this.animation="剩余"+this.countdown+"秒",this.countdown--,this.yzmZJ=!1,setTimeout(function(){i.setTime()},1e3))},obtainYZ:function(){var i=this,t={mobile:this.mobile},e="?mobile="+this.mobile;a.default.apiPost("/member/forgetstep1",e,t,"post",function(t,e){t?(i.setTime(),i.mobile=e.data.mobile):uni.showToast({title:"获取验证码错误，请重试",icon:"none",duration:2e3})})},login:function(){var i=this;if(this.mobilecaptcha.length>4)uni.showToast({title:"验证码格式错误",icon:"none",duration:2e3});else{var t={mobile:this.mobile,mobilecaptcha:this.mobilecaptcha},e="?mobile="+this.mobile+"&mobilecaptcha="+this.mobilecaptcha;a.default.apiPost("/member/notelogin",e,t,"post",function(t,e){t?(uni.setStorageSync("landing",e.data),i.validation()):uni.showToast({title:"验证码不正确，请重试",icon:"none",duration:2e3})})}},validation:function(){var i=uni.getStorageSync("landing");""==i.member_tj_id||0==i.member_tj_id?uni.reLaunch({url:"/pages/registered/invitation/invitation"}):""==i.member_password?uni.reLaunch({url:"/pages/registered/setpassword/setpassword"}):""==i.member_card?uni.reLaunch({url:"/pages/registered/reality/reality"}):uni.reLaunch({url:"/pages/index/index"})}}};t.default=n},efc1:function(i,t,e){t=i.exports=e("2350")(!1),t.push([i.i,".login-news[data-v-7729fe24]{position:fixed;top:0;left:0;right:0;bottom:0;background-color:#fff;overflow:auto}.login-logo[data-v-7729fe24]{overflow:hidden;padding:20px 30px}.login-logo a[data-v-7729fe24]{float:right;font-size:4vw}.form-login[data-v-7729fe24]{width:%?640?%;margin-left:auto;margin-right:auto;padding-top:%?40?%}.form-login h2[data-v-7729fe24]{font-size:7vw;font-weight:400;margin:40px 0 0}.form-login span[data-v-7729fe24]{font-size:4vw;color:#b1b1b1;display:block;padding-top:16px}.form-login .code[data-v-7729fe24]{font-size:3.6vw;color:#b4b6bd;display:block;padding-top:16px}.getCodeMsg[data-v-7729fe24]{width:%?640?%;padding-top:%?30?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative}.getCodeMsg .mlimbg[data-v-7729fe24]{width:%?160?%;height:%?80?%;border-bottom:1px solid #dcdcdc;margin-right:%?12?%;line-height:36px;text-align:center;font-size:22px;padding-bottom:%?20?%;font-weight:500;z-index:20}.getCodeMsg .mlimbgts[data-v-7729fe24]{border-bottom:1px solid #4e94ff}.getCodeMsg .move-ex[data-v-7729fe24]{width:%?150?%;height:%?80?%;border-style:none;border-bottom:1px solid #4e94ff;margin-right:%?12?%;line-height:36px;text-align:center;font-size:22px;padding-bottom:%?20?%;font-weight:500;z-index:30;position:absolute;opacity:0}.moveda[data-v-7729fe24]{left:%?0?%}.movedb[data-v-7729fe24]{left:%?160?%}.movedc[data-v-7729fe24]{left:%?320?%}.movedd[data-v-7729fe24]{left:%?480?%}.getCodeMsg .mlimbg[data-v-7729fe24]:first-of-type{margin-left:0}.getCodeMsg .mlimbg[data-v-7729fe24]:last-of-type{margin-rigth:0}.getCodeMsg .mlimbg .active[data-v-7729fe24]{border-color:#257bff}.code .login-yzman[data-v-7729fe24]{width:30%;background:none;border:1px solid #ddd;border-radius:4px;padding:3px 4px;outline:none;color:#666}.code .n_border[data-v-7729fe24]{border:none!important;color:#b4b6bd!important}",""])}}]);