(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-personal-anovice-anovice"],{"3fbd":function(t,n,a){var e=a("5158");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=a("4f06").default;i("7ea723a9",e,!0,{sourceMap:!1,shadowMode:!1})},5074:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=i(a("eaef"));function i(t){return t&&t.__esModule?t:{default:t}}var o={data:function(){return{guideData:[],page:1,pageCount:1}},onLoad:function(){this.pullData()},onPullDownRefresh:function(){this.pullData(),setTimeout(function(){uni.stopPullDownRefresh()},1e3)},onReachBottom:function(){uni.showLoading({title:"加载中"}),this.loadingData()},methods:{pullData:function(){var t=this;e.default.apiPost("/notice/videolist?id=2&page="+this.page,"","","get",function(n,a){n?(t.guideData=a.data.video,t.pageCount=a.page.pageCount):uni.showToast({title:"数据获取失败",icon:"none",duration:2e3})})},loadingData:function(){var t=this;this.page++,this.page>this.pageCount?uni.showToast({title:"没有更多贴子了",icon:"none",duration:2e3}):e.default.apiPost("/notice/videolist?id=2&page="+this.page,"","","get",function(n,a){n?(t.guideData=t.guideData.concat(a.data.video),setTimeout(function(){uni.hideLoading()},300)):uni.showToast({title:"数据获取失败",icon:"none",duration:2e3})})},news:function(t){uni.navigateTo({url:"/pages/found/news/news?id="+t})}}};n.default=o},5158:function(t,n,a){n=t.exports=a("2350")(!1),n.push([t.i,".tg-list-box ul li[data-v-8733b78e]{padding-top:10px;padding-bottom:30px;width:100%}.timer-box-span[data-v-8733b78e]{text-align:center}.timer-box-span span[data-v-8733b78e]{color:#fff;background-color:#dce0e3;font-size:12px;padding:0 6px;margin:14px 0;display:inline-block;border-radius:2px}.content-mess-box[data-v-8733b78e]{width:90%;margin:0 auto;border-radius:5px;overflow:hidden}.banner-mss-box[data-v-8733b78e]{height:160px;overflow:hidden}.banner-mss-box img[data-v-8733b78e]{width:100%}.content-mess-box span.title[data-v-8733b78e]{display:block;background-color:#fff;padding:14px;font-size:15px;text-align:left;color:#000}",""])},"52eb":function(t,n,a){"use strict";a.r(n);var e=a("5601"),i=a("f2aa");for(var o in i)"default"!==o&&function(t){a.d(n,t,function(){return i[t]})}(o);a("f539");var s=a("2877"),u=Object(s["a"])(i["default"],e["a"],e["b"],!1,null,"8733b78e",null);n["default"]=u.exports},5601:function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",{staticClass:"tonybj"},[a("v-uni-view",{staticClass:"tg-list-box"},[a("ul",t._l(t.guideData,function(n){return a("li",{key:n.id},[a("v-uni-view",{staticClass:"timer-box-span"},[a("span",[t._v(t._s(n.timeline))])]),a("v-uni-view",{staticClass:"content-mess-box",on:{click:function(a){a=t.$handleEvent(a),t.news(n.id)}}},[a("v-uni-view",{staticClass:"banner-mss-box"},[a("img",{attrs:{src:n.img,alt:""}})]),a("span",{staticClass:"title"},[t._v(t._s(n.title))])],1)],1)}),0)])],1)},i=[];a.d(n,"a",function(){return e}),a.d(n,"b",function(){return i})},f2aa:function(t,n,a){"use strict";a.r(n);var e=a("5074"),i=a.n(e);for(var o in e)"default"!==o&&function(t){a.d(n,t,function(){return e[t]})}(o);n["default"]=i.a},f539:function(t,n,a){"use strict";var e=a("3fbd"),i=a.n(e);i.a}}]);