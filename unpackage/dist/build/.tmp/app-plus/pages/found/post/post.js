(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/found/post/post"],{1463:function(t,n,e){"use strict";e.r(n);var i=e("bde7"),o=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(n,t,function(){return i[t]})}(s);n["default"]=o.a},"1f8b":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,i=(t._self._c,e("2f68")),o=e("c9b2"),s=e("e4f3"),a=e("a17d"),u=e("c60f"),m=e("c1e8"),c=e("6e0e"),r=e("ea72");t.$mp.data=Object.assign({},{$root:{m0:i,m1:o,m2:s,m3:a,m4:u,m5:m,m6:c,m7:r}})},o=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return o})},3717:function(t,n,e){"use strict";e.r(n);var i=e("1f8b"),o=e("1463");for(var s in o)"default"!==s&&function(t){e.d(n,t,function(){return o[t]})}(s);e("76b0");var a=e("2877"),u=Object(a["a"])(o["default"],i["a"],i["b"],!1,null,null,null);n["default"]=u.exports},"682c":function(t,n,e){},"76b0":function(t,n,e){"use strict";var i=e("682c"),o=e.n(i);o.a},bde7:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=o(e("eaef"));function o(t){return t&&t.__esModule?t:{default:t}}var s={data:function(){return{community:[],communityId:"",fid:0,memberName:"",commentsData:[],page:1,content:"",islike:0,commentsYs:"说两句"}},onLoad:function(t){this.communityId=t.id,this.pullData()},onPullDownRefresh:function(){this.pullData(this.communityId),setTimeout(function(){t.stopPullDownRefresh()},1e3)},methods:{pullData:function(){var n=this;i.default.apiPost("/member/bbsdetail?id="+this.communityId,"","","get",function(e,i){e?(n.community=i.data.info,n.islike=i.data.info.list_islike,n.comments()):t.showToast({title:"数据获取失败",icon:"none",duration:2e3})})},comments:function(){var n=this;i.default.apiPost("/member/bbsgetcomment?bbs_id="+this.communityId+"&fid=0&page="+this.page,"","","get",function(e,i){e?n.commentsData=i.data.listdata:t.showToast({title:"数据获取失败",icon:"none",duration:2e3})})},Report:function(n,e){var o={list_id:n,list_member_id:e},s="?list_id="+n+"&list_member_id="+e;i.default.apiPost("/member/bbsreport",s,o,"post",function(n,e){n?t.showToast({title:"举报成功",icon:"none",duration:2e3}):t.showToast({title:"你已经举报过这个帖子了哟",icon:"none",duration:2e3})})},Share:function(){var n=this.community.list_titl,e=this.community.share_link,i=this.community.list_img;this.community.list_content;plus.share.sendWithSystem({href:e,pictures:i,title:n},function(){t.showToast({title:"分享成功",icon:"none",duration:2e3})},function(n){t.showToast({title:"分享失败",icon:"none",duration:2e3})})},Praise:function(n,e){var o=this;if(1==this.islike)t.showToast({title:"你已经点赞过了哟",icon:"none",duration:2e3});else{var s={fid:n,type:e},a="?fid="+n+"&type="+e;i.default.apiPost("/member/bbslike",a,s,"post",function(n,e){n?(t.showToast({title:"点赞成功",icon:"none",duration:2e3}),o.pullData()):t.showToast({title:"你已经点赞过了哟",icon:"none",duration:2e3})})}},Pinl:function(t,n){this.fid=t,0==this.fid?(this.commentsYs="说两句",this.memberName=""):(this.commentsYs="回复 "+n,this.memberName=n)},hairComments:function(){var n=this;if(""==this.content||null==this.content)t.showToast({title:"评论内容不能为空",icon:"none",duration:2e3});else{var e={id:this.communityId,fid:this.fid,reply_member_name:this.memberName,content:this.content},o="?id="+this.communityId+"&fid="+this.fid+"&reply_member_name="+this.memberName+"&content="+this.content;i.default.apiPost("/member/bbsreplycomment",o,e,"post",function(e,i){e?(t.showToast({title:"评论成功",icon:"none",duration:2e3}),n.commentsYs="说两句",n.content="",n.pullData()):t.showToast({title:"评论失败，请重试",icon:"none",duration:2e3})})}}}};n.default=s}).call(this,e("6e42")["default"])}},[["4ea5","common/runtime","common/vendor"]]]);