webpackJsonp([5],{"6M52":function(t,n,s){"use strict";function o(t){s("E4GP")}Object.defineProperty(n,"__esModule",{value:!0});var e=s("DaUf"),i=s.n(e);for(var a in e)"default"!==a&&function(t){s.d(n,t,function(){return e[t]})}(a);var r=s("M/Oo"),u=s("VU/8"),g=o,l=u(i.a,r.a,!1,g,"data-v-1e891959",null);n.default=l.exports},DaUf:function(t,n,s){"use strict";var o=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var s in n)n.hasOwnProperty(s)&&(t[s]=n[s])};return function(n,s){function o(){this.constructor=n}t(n,s),n.prototype=null===s?Object.create(s):(o.prototype=s.prototype,new o)}}(),e=this&&this.__decorate||function(t,n,s,o){var e,i=arguments.length,a=i<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,s):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,n,s,o);else for(var r=t.length-1;r>=0;r--)(e=t[r])&&(a=(i<3?e(a):i>3?e(n,s,a):e(n,s))||a);return i>3&&a&&Object.defineProperty(n,s,a),a},i=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},a=this&&this.__awaiter||function(t,n,s,o){return new(s||(s=Promise))(function(e,i){function a(t){try{u(o.next(t))}catch(t){i(t)}}function r(t){try{u(o.throw(t))}catch(t){i(t)}}function u(t){t.done?e(t.value):new s(function(n){n(t.value)}).then(a,r)}u((o=o.apply(t,n||[])).next())})},r=this&&this.__generator||function(t,n){function s(t){return function(n){return o([t,n])}}function o(s){if(e)throw new TypeError("Generator is already executing.");for(;u;)try{if(e=1,i&&(a=2&s[0]?i.return:s[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,s[1])).done)return a;switch(i=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return u.label++,{value:s[1],done:!1};case 5:u.label++,i=s[1],s=[0];continue;case 7:s=u.ops.pop(),u.trys.pop();continue;default:if(a=u.trys,!(a=a.length>0&&a[a.length-1])&&(6===s[0]||2===s[0])){u=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){u.label=s[1];break}if(6===s[0]&&u.label<a[1]){u.label=a[1],a=s;break}if(a&&u.label<a[2]){u.label=a[2],u.ops.push(s);break}a[2]&&u.ops.pop(),u.trys.pop();continue}s=n.call(t,u)}catch(t){s=[6,t],i=0}finally{e=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}var e,i,a,r,u={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r};Object.defineProperty(n,"__esModule",{value:!0});var u=s("/5sW"),g=s("443i"),l=s("VKSY"),c=s("6nHw"),M=function(t){function n(){var n=t.call(this)||this;return n.totalSend="0",n.blocktime="",n.mybalance="0",n.currentAddress=c.LoginInfo.getCurrentAddress(),n.bonusList=null,n.isPage=!1,n.myBonusPageUtil=new c.PageUtil(0,5),n.isBonusPage=!1,n.myBonus="0",n.isApplyBonus=0,n.initMyBonus(n.currentAddress),n.initBonusHistory(n.currentAddress,!0),n}return o(n,t),n.prototype.initMyBonus=function(t){return a(this,void 0,void 0,function(){var n,s;return r(this,function(o){switch(o.label){case 0:return[4,l.tools.wwwtool.getcurrentbonus(t)];case 1:if(n=o.sent()){if(this.myBonus=0!=parseFloat(n.send)?n.send:"0",this.totalSend=n.totalSend,this.mybalance=n.balance,s=parseInt(n.blocktime),this.blocktime=l.tools.timetool.getTime(s||0),"0"==this.myBonus)return this.isApplyBonus=0,[2];""!=n.txid?(this.myBonus="0",this.isApplyBonus=3):n.applied?this.isApplyBonus=2:this.isApplyBonus=1}return[2]}})})},n.prototype.toApplyBonus=function(){return a(this,void 0,void 0,function(){var t;return r(this,function(n){switch(n.label){case 0:return[4,l.tools.wwwtool.applybonus(this.currentAddress)];case 1:return t=n.sent(),t.result?this.isApplyBonus=2:this.isApplyBonus=1,[2]}})})},n.prototype.initBonusHistory=function(t,n){return a(this,void 0,void 0,function(){var s,o,e,i;return r(this,function(a){switch(a.label){case 0:return s=null,n?[3,2]:[4,l.tools.wwwtool.getbonusbyaddress(t,this.myBonusPageUtil.currentPage,this.myBonusPageUtil.pageSize)];case 1:return s=a.sent(),[3,4];case 2:return[4,l.tools.wwwtool.getbonusbyaddress(t,1,5)];case 3:s=a.sent(),s&&(this.myBonusPageUtil=new c.PageUtil(s.count,5)),a.label=4;case 4:if(o=s.list,o.length){for(e in o)o[e].blocktime=l.tools.timetool.getTime(o[e].blocktime?o[e].blocktime:"0");this.bonusList=o,i=s.count,this.isBonusPage=!0,i>this.myBonusPageUtil.pageSize?this.isPage=!0:this.isPage=!1}return[2]}})})},n.prototype.nextBonus=function(){this.myBonusPageUtil.currentPage==this.myBonusPageUtil.totalPage?this.myBonusPageUtil.currentPage=this.myBonusPageUtil.totalPage:(this.myBonusPageUtil.currentPage+=1,this.initBonusHistory(this.currentAddress,!1))},n.prototype.previousBonus=function(){this.myBonusPageUtil.currentPage<=1?this.myBonusPageUtil.currentPage=1:(this.myBonusPageUtil.currentPage-=1,this.initBonusHistory(this.currentAddress,!1))},n=e([g.Component({components:{}}),i("design:paramtypes",[])],n)}(u.default);n.default=M},E4GP:function(t,n,s){var o=s("rRNn");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);s("rjj0")("a1df12ec",o,!0,{})},"M/Oo":function(t,n,s){"use strict";var o=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"bonus-wrap"},[o("div",{staticClass:"bonus-tips"},[t._v(t._s(t.$t("bonus.tips")))]),t._v(" "),o("div",{staticClass:"title"},[o("span",[t._v(t._s(t.$t("bonus.title")))])]),t._v(" "),o("div",{staticClass:"form-box"},[o("div",{staticClass:"nnc-wrap"},[o("strong",[t._v("\n        "+t._s(t.$t("bonus.mydividend"))+"\n        "),o("span",{staticClass:"dde"},[t._v(t._s(t.myBonus))]),t._v(" CGAS\n      ")]),t._v(" "),o("p",[t._v(t._s(t.$t("bonus.distribution"))+t._s(t.totalSend)+" CGas")]),t._v(" "),o("p",[t._v(t._s(t.$t("bonus.mytotal"))+t._s(t.mybalance)+" NNC")]),t._v(" "),o("p",[t._v(t._s(t.$t("bonus.snapshot"))+t._s(t.blocktime))])]),t._v(" "),o("div",{staticClass:"btn-right"},[2==t.isApplyBonus?o("button",{staticClass:"btn btn-nel btn-bid btn-disable"},[t._v(t._s(t.$t("btn.applying")))]):3==t.isApplyBonus?o("button",{staticClass:"btn btn-nel btn-bid btn-disable"},[t._v(t._s(t.$t("btn.applyed")))]):o("button",{staticClass:"btn btn-nel btn-bid",class:{"btn-disable":0==t.isApplyBonus},attrs:{disabled:0==t.isApplyBonus},on:{click:t.toApplyBonus}},[t._v(t._s(t.$t("btn.apply")))])])]),t._v(" "),0!=t.myBonusPageUtil.totalCount?o("div",{staticClass:"title"},[o("span",[t._v(t._s(t.$t("bonus.title2")))])]):t._e(),t._v(" "),0!=t.myBonusPageUtil.totalCount?o("div",{staticClass:"form-box"},[t._l(t.bonusList,function(n,s){return o("div",{key:s,staticClass:"mybonus-wrap"},[o("div",{staticClass:"linetop-text mybonus-text"},[o("span",{staticClass:"dde"},[t._v("+"+t._s(n.send))]),t._v(" CGas\n      ")]),t._v(" "),o("hr"),t._v(" "),o("div",{staticClass:"linedown-text"},[t._v(t._s(n.blocktime))])])}),t._v(" "),t.isBonusPage?o("div",{staticClass:"page-msg"},[t._v(t._s(t.$t("page.page"))+t._s(t.myBonusPageUtil.currentPage)+t._s(t.$t("page.total1"))+t._s(t.myBonusPageUtil.totalPage)+t._s(t.$t("page.total2")))]):t._e(),t._v(" "),t.isBonusPage?o("div",{staticClass:"page"},[o("div",{staticClass:"page-previous",on:{click:t.previousBonus}},[o("img",{attrs:{src:s("tt5S"),alt:""}})]),t._v(" "),o("div",{staticStyle:{width:"1px"}}),t._v(" "),o("div",{staticClass:"page-next",on:{click:t.nextBonus}},[o("img",{attrs:{src:s("pp3u"),alt:""}})])]):t._e()],2):t._e()])},e=[],i={render:o,staticRenderFns:e};n.a=i},pp3u:function(t,n){t.exports="data:image/svg+xml;base64,DQo8c3ZnIHdpZHRoPSIxNXB4IiBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNSAxNiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5ICg1MTAwMikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+DQogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+DQogICAgPGRlZnM+PC9kZWZzPg0KICAgIDxnIGlkPSLmtY/op4jlmag0IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgaWQ9ImJsb2Nrcy1oYW5nb3ZlciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTY1OC4wMDAwMDAsIC0xMTY1LjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPg0KICAgICAgICAgICAgPGcgaWQ9InN3dGljaCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTkwLjAwMDAwMCwgMTE1NC4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTEuMDAwMDAwLCAwLjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjUuMjc2MzkzMiwxMi4xNzEwMzk0IEwzMS42NTgzNTkyLDI0LjkzNDk3MTUgQzMxLjkwNTM0ODUsMjUuNDI4OTUgMzEuNzA1MTI0MSwyNi4wMjk2MjMgMzEuMjExMTQ1NiwyNi4yNzY2MTIzIEMzMS4wNzIyOTAyLDI2LjM0NjA0IDMwLjkxOTE3NzEsMjYuMzgyMTg1MSAzMC43NjM5MzIsMjYuMzgyMTg1MSBMMTgsMjYuMzgyMTg1MSBDMTcuNDQ3NzE1MywyNi4zODIxODUxIDE3LDI1LjkzNDQ2OTggMTcsMjUuMzgyMTg1MSBDMTcsMjUuMjI2OTQgMTcuMDM2MTQ1MSwyNS4wNzM4MjY5IDE3LjEwNTU3MjgsMjQuOTM0OTcxNSBMMjMuNDg3NTM4OCwxMi4xNzEwMzk0IEMyMy43MzQ1MjgxLDExLjY3NzA2MSAyNC4zMzUyMDExLDExLjQ3NjgzNjYgMjQuODI5MTc5NiwxMS43MjM4MjU5IEMyNS4wMjI3MDcsMTEuODIwNTg5NiAyNS4xNzk2Mjk1LDExLjk3NzUxMiAyNS4yNzYzOTMyLDEyLjE3MTAzOTQgWiIgaWQ9IlRyaWFuZ2xlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNC4zODIwNzYsIDE5LjAwMDExMCkgcm90YXRlKDkwLjAwMDAwMCkgdHJhbnNsYXRlKC0yNC4zODIwNzYsIC0xOS4wMDAxMTApICI+PC9wYXRoPg0KICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg=="},rRNn:function(t,n,s){n=t.exports=s("FZ+f")(!1),n.push([t.i,"\n.bonus-wrap .dde[data-v-1e891959] {\n  color: #2dde4f;\n}\n.bonus-wrap .bonus-tips[data-v-1e891959] {\n  font-size: 14px;\n  color: #c5c5c5;\n  margin-top: 50px;\n}\n.bonus-wrap .btn[data-v-1e891959] {\n  margin-bottom: 20px;\n}\n.bonus-wrap .btn[data-v-1e891959]:last-child {\n  margin-bottom: 0;\n}\n.bonus-wrap .btn.btn-disable[data-v-1e891959] {\n  background: #77bcf6;\n  opacity: 1;\n}\n.bonus-wrap .form-box[data-v-1e891959] {\n  background: #fff;\n  border-radius: 5px;\n  padding: 30px 50px;\n  margin-bottom: 20px;\n  color: #333;\n  position: relative;\n}\n.bonus-wrap .form-box .nnc-wrap strong[data-v-1e891959] {\n  font-size: 20px;\n  font-weight: 500;\n}\n.bonus-wrap .form-box .nnc-wrap strong span[data-v-1e891959] {\n  font-size: 30px;\n}\n.bonus-wrap .form-box .nnc-wrap p[data-v-1e891959] {\n  font-size: 14px;\n  color: #8f8f94;\n  margin-bottom: 5px;\n}\n.bonus-wrap .form-box .mybonus-wrap[data-v-1e891959] {\n  border: 1px solid #b2b2b2;\n  border-radius: 5px;\n  padding: 20px 15px 10px 15px;\n  margin-bottom: 20px;\n}\n.bonus-wrap .form-box .mybonus-wrap .linetop-text[data-v-1e891959] {\n  font-size: 14px;\n  color: #333;\n  margin-bottom: 15px;\n}\n.bonus-wrap .form-box .mybonus-wrap .linetop-text.mybonus-text[data-v-1e891959] {\n  font-size: 20px;\n}\n.bonus-wrap .form-box .mybonus-wrap hr[data-v-1e891959] {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n.bonus-wrap .form-box .mybonus-wrap .linedown-text[data-v-1e891959] {\n  font-size: 12px;\n  color: #333;\n}\n.bonus-wrap .form-box .btn-right[data-v-1e891959] {\n  position: absolute;\n  top: 50%;\n  right: 30px;\n  -webkit-transform: translateY(-50%);\n  -moz-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  -o-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n.bonus-wrap .form-box .btn-right .status-text[data-v-1e891959] {\n  font-size: 18px;\n  color: #ffffff;\n  text-align: center;\n  margin-bottom: 30px;\n}\n.bonus-wrap .page-msg[data-v-1e891959] {\n  text-align: center;\n}\n.bonus-wrap .page .page-previous[data-v-1e891959],\n.bonus-wrap .page .page-next[data-v-1e891959] {\n  background: #198cee;\n  cursor: pointer;\n}\n.bonus-wrap .page .page-previous.notallow[data-v-1e891959],\n.bonus-wrap .page .page-next.notallow[data-v-1e891959] {\n  background: #77bcf6;\n  cursor: not-allowed;\n}\n",""])},tt5S:function(t,n){t.exports="data:image/svg+xml;base64,DQo8c3ZnIHdpZHRoPSIxNXB4IiBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNSAxNiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5ICg1MTAwMikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+DQogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+DQogICAgPGRlZnM+PC9kZWZzPg0KICAgIDxnIGlkPSLmtY/op4jlmag0IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgaWQ9ImJsb2Nrcy1oYW5nb3ZlciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYwOC4wMDAwMDAsIC0xMTY1LjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPg0KICAgICAgICAgICAgPGcgaWQ9InN3dGljaCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTkwLjAwMDAwMCwgMTE1NC4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAiPg0KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjUuODk0NDI3MiwxMi43ODg4NTQ0IEwzMi4yNzYzOTMyLDI1LjU1Mjc4NjQgQzMyLjUyMzM4MjUsMjYuMDQ2NzY0OSAzMi4zMjMxNTgxLDI2LjY0NzQzNzkgMzEuODI5MTc5NiwyNi44OTQ0MjcyIEMzMS42OTAzMjQyLDI2Ljk2Mzg1NDkgMzEuNTM3MjExMSwyNyAzMS4zODE5NjYsMjcgTDE4LjYxODAzNCwyNyBDMTguMDY1NzQ5MiwyNyAxNy42MTgwMzQsMjYuNTUyMjg0NyAxNy42MTgwMzQsMjYgQzE3LjYxODAzNCwyNS44NDQ3NTQ5IDE3LjY1NDE3OTEsMjUuNjkxNjQxOCAxNy43MjM2MDY4LDI1LjU1Mjc4NjQgTDI0LjEwNTU3MjgsMTIuNzg4ODU0NCBDMjQuMzUyNTYyMSwxMi4yOTQ4NzU5IDI0Ljk1MzIzNTEsMTIuMDk0NjUxNSAyNS40NDcyMTM2LDEyLjM0MTY0MDggQzI1LjY0MDc0MSwxMi40Mzg0MDQ1IDI1Ljc5NzY2MzUsMTIuNTk1MzI3IDI1Ljg5NDQyNzIsMTIuNzg4ODU0NCBaIiBpZD0iVHJpYW5nbGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1LjAwMDAwMCwgMTkuMDAwMDAwKSBzY2FsZSgtMSwgMSkgcm90YXRlKDkwLjAwMDAwMCkgdHJhbnNsYXRlKC0yNS4wMDAwMDAsIC0xOS4wMDAwMDApICI+PC9wYXRoPg0KICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg=="}});