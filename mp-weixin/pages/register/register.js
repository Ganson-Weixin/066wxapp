(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"11a4":function(e,t,n){},2529:function(e,t,n){"use strict";n.r(t);var i=n("407a"),r=n("d4b2");for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);n("f2d5");var u,s=n("f0c5"),o=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"222896c8",null,!1,i["a"],u);t["default"]=o.exports},"407a":function(e,t,n){"use strict";var i,r=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}))},5475:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n,i,r,a,u){try{var s=e[a](u),o=s.value}catch(h){return void n(h)}s.done?t(o):Promise.resolve(o).then(i,r)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(i,r){var u=e.apply(t,n);function s(e){a(u,i,r,s,o,"next",e)}function o(e){a(u,i,r,s,o,"throw",e)}s(void 0)}))}}var s={data:function(){return{yonghuxingbieOptions:[],yonghuxingbieIndex:0,jiazhengrenyuanxingbieOptions:[],jiazhengrenyuanxingbieIndex:0,ruleForm:{},tableName:""}},onLoad:function(){var t=u(i.default.mark((function t(){var n;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:[],n=e.getStorageSync("loginTable"),this.tableName=n,"yonghu"==this.tableName&&(this.yonghuxingbieOptions="男,女".split(","),this.ruleForm.xingbie=this.yonghuxingbieOptions[0]),"jiazhengrenyuan"==this.tableName&&(this.jiazhengrenyuanxingbieOptions="男,女".split(","),this.ruleForm.xingbie=this.jiazhengrenyuanxingbieOptions[0]),this.styleChange();case 6:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),methods:{yonghuxingbieChange:function(e){this.yonghuxingbieIndex=e.target.value,this.ruleForm.xingbie=this.yonghuxingbieOptions[this.yonghuxingbieIndex]},jiazhengrenyuanxingbieChange:function(e){this.jiazhengrenyuanxingbieIndex=e.target.value,this.ruleForm.xingbie=this.jiazhengrenyuanxingbieOptions[this.jiazhengrenyuanxingbieIndex]},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var e=u(i.default.mark((function e(){return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.yonghuming||"yonghu"!=this.tableName){e.next=3;break}return this.$utils.msg("用户名不能为空"),e.abrupt("return");case 3:if(this.ruleForm.mima||"yonghu"!=this.tableName){e.next=6;break}return this.$utils.msg("密码不能为空"),e.abrupt("return");case 6:if("yonghu"!=this.tableName||!this.ruleForm.youxiang||this.$validate.isEmail(this.ruleForm.youxiang)){e.next=9;break}return this.$utils.msg("邮箱应输入邮件格式"),e.abrupt("return");case 9:if("yonghu"!=this.tableName||!this.ruleForm.shouji||this.$validate.isMobile(this.ruleForm.shouji)){e.next=12;break}return this.$utils.msg("手机应输入手机格式"),e.abrupt("return");case 12:if(this.ruleForm.zhanghao||"jiazhengrenyuan"!=this.tableName){e.next=15;break}return this.$utils.msg("账号不能为空"),e.abrupt("return");case 15:if(this.ruleForm.mima||"jiazhengrenyuan"!=this.tableName){e.next=18;break}return this.$utils.msg("密码不能为空"),e.abrupt("return");case 18:if("jiazhengrenyuan"!=this.tableName||!this.ruleForm.dianhua||this.$validate.isMobile(this.ruleForm.dianhua)){e.next=21;break}return this.$utils.msg("电话应输入手机格式"),e.abrupt("return");case 21:if("jiazhengrenyuan"!=this.tableName||!this.ruleForm.youxiang||this.$validate.isEmail(this.ruleForm.youxiang)){e.next=24;break}return this.$utils.msg("邮箱应输入邮件格式"),e.abrupt("return");case 24:return e.next=26,this.$api.register("".concat(this.tableName),this.ruleForm);case 26:this.$utils.msgBack("注册成功");case 28:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}};t.default=s}).call(this,n("543d")["default"])},a6b3:function(e,t,n){"use strict";(function(e){n("fde4"),n("921b");i(n("66fd"));var t=i(n("2529"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},d4b2:function(e,t,n){"use strict";n.r(t);var i=n("5475"),r=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=r.a},f2d5:function(e,t,n){"use strict";var i=n("11a4"),r=n.n(i);r.a}},[["a6b3","common/runtime","common/vendor"]]]);