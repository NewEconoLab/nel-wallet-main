webpackJsonp([5],{"3gm2":function(t,i,e){var n=e("I8wp");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("rjj0")("091251a7",n,!0,{})},"6M52":function(t,i,e){"use strict";function n(t){e("3gm2")}Object.defineProperty(i,"__esModule",{value:!0});var a=e("DaUf"),s=e.n(a);for(var g in a)"default"!==g&&function(t){e.d(i,t,function(){return a[t]})}(g);var o=e("c4ok"),r=e("VU/8"),M=n,c=r(s.a,o.a,!1,M,"data-v-734cde2d",null);i.default=c.exports},DaUf:function(t,i,e){"use strict";var n=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var e in i)i.hasOwnProperty(e)&&(t[e]=i[e])};return function(i,e){function n(){this.constructor=i}t(i,e),i.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}(),a=this&&this.__decorate||function(t,i,e,n){var a,s=arguments.length,g=s<3?i:null===n?n=Object.getOwnPropertyDescriptor(i,e):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(t,i,e,n);else for(var o=t.length-1;o>=0;o--)(a=t[o])&&(g=(s<3?a(g):s>3?a(i,e,g):a(i,e))||g);return s>3&&g&&Object.defineProperty(i,e,g),g},s=this&&this.__metadata||function(t,i){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,i)},g=this&&this.__awaiter||function(t,i,e,n){return new(e||(e=Promise))(function(a,s){function g(t){try{r(n.next(t))}catch(t){s(t)}}function o(t){try{r(n.throw(t))}catch(t){s(t)}}function r(t){t.done?a(t.value):new e(function(i){i(t.value)}).then(g,o)}r((n=n.apply(t,i||[])).next())})},o=this&&this.__generator||function(t,i){function e(t){return function(i){return n([t,i])}}function n(e){if(a)throw new TypeError("Generator is already executing.");for(;r;)try{if(a=1,s&&(g=2&e[0]?s.return:e[0]?s.throw||((g=s.return)&&g.call(s),0):s.next)&&!(g=g.call(s,e[1])).done)return g;switch(s=0,g&&(e=[2&e[0],g.value]),e[0]){case 0:case 1:g=e;break;case 4:return r.label++,{value:e[1],done:!1};case 5:r.label++,s=e[1],e=[0];continue;case 7:e=r.ops.pop(),r.trys.pop();continue;default:if(g=r.trys,!(g=g.length>0&&g[g.length-1])&&(6===e[0]||2===e[0])){r=0;continue}if(3===e[0]&&(!g||e[1]>g[0]&&e[1]<g[3])){r.label=e[1];break}if(6===e[0]&&r.label<g[1]){r.label=g[1],g=e;break}if(g&&r.label<g[2]){r.label=g[2],r.ops.push(e);break}g[2]&&r.ops.pop(),r.trys.pop();continue}e=i.call(t,r)}catch(t){e=[6,t],s=0}finally{a=g=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}var a,s,g,o,r={label:0,sent:function(){if(1&g[0])throw g[1];return g[1]},trys:[],ops:[]};return o={next:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o};Object.defineProperty(i,"__esModule",{value:!0});var r=e("/5sW"),M=e("443i"),c=e("VKSY"),I=e("6nHw"),u=function(t){function i(){var i=t.call(this)||this;return i.firstLoad=!0,i.currentAddress=I.LoginInfo.getCurrentAddress(),i.historyList=null,i.isPage=!1,i.pageMsg="",i.initHistory(i.currentAddress,i.firstLoad),i}return n(i,t),i.prototype.initHistory=function(t,i){return g(this,void 0,void 0,function(){var e,n,a,s,g,r,M;return o(this,function(o){switch(o.label){case 0:return e=null,i?[3,2]:[4,c.tools.wwwtool.getbonushistbyaddress(t,this.pageUtil.currentPage,this.pageUtil.pageSize)];case 1:return e=o.sent(),[3,4];case 2:return[4,c.tools.wwwtool.getbonushistbyaddress(t,1,5)];case 3:e=o.sent(),e&&(this.pageUtil=new I.PageUtil(e.count,5),this.firstLoad=!1),o.label=4;case 4:if(n=e.list,n.length){for(a in n)n[a].blocktime=c.tools.timetool.getTime(n[a].blocktime?n[a].blocktime:"0");this.historyList=n,s=e.count,this.isPage=!0,s>this.pageUtil.pageSize?this.isPage=!0:this.isPage=!1,g=this.pageUtil.currentPage*this.pageUtil.pageSize-this.pageUtil.pageSize,r=this.pageUtil.totalCount,M=r-g,M>this.pageUtil.pageSize&&(r=this.pageUtil.currentPage*this.pageUtil.pageSize),this.pageMsg="History "+(g+1)+" to "+r+" of "+this.pageUtil.totalCount}return[2]}})})},i.prototype.next=function(){this.pageUtil.currentPage==this.pageUtil.totalPage?this.pageUtil.currentPage=this.pageUtil.totalPage:(this.pageUtil.currentPage+=1,this.initHistory(this.currentAddress,this.firstLoad))},i.prototype.previous=function(){this.pageUtil.currentPage<=1?this.pageUtil.currentPage=1:(this.pageUtil.currentPage-=1,this.initHistory(this.currentAddress,this.firstLoad))},i=a([M.Component({components:{}}),s("design:paramtypes",[])],i)}(r.default);i.default=u},I8wp:function(t,i,e){i=t.exports=e("FZ+f")(!1),i.push([t.i,"\n.bonus-wrap .dde[data-v-734cde2d] {\n  color: #2dde4f;\n}\n.bonus-wrap .form-box[data-v-734cde2d] {\n  background: #ffffff;\n  border-radius: 5px;\n  padding: 20px 50px;\n  margin-bottom: 20px;\n  color: #333;\n}\n.bonus-wrap .form-box div[data-v-734cde2d] {\n  margin-bottom: 10px;\n  font-size: 14px;\n}\n.bonus-wrap .form-box div[data-v-734cde2d]:last-child {\n  margin-bottom: 0;\n}\n.bonus-wrap .form-box .mybonus[data-v-734cde2d] {\n  font-size: 20px;\n}\n.bonus-wrap .page .page-previous[data-v-734cde2d],\n.bonus-wrap .page .page-next[data-v-734cde2d] {\n  background: #198cee;\n}\n",""])},c4ok:function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"bonus-wrap"},[n("div",{staticClass:"title"},[n("span",[t._v(t._s(t.$t("bonus.title")))])]),t._v(" "),t._l(t.historyList,function(i,e){return n("div",{key:e,staticClass:"form-box"},[n("div",{staticClass:"mybonus"},[t._v("\n        "+t._s(t.$t("bonus.mydividend"))),n("span",{staticClass:"dde"},[t._v(t._s(i.addrBonus))]),t._v(" CGAS\n       ")]),t._v(" "),n("div",[t._v(t._s(t.$t("bonus.distribution"))+t._s(i.totalValue)+" CGas")]),t._v(" "),n("div",[t._v(t._s(t.$t("bonus.mytotal"))+t._s(i.balance)+" NNC")]),t._v(" "),n("div",[t._v(t._s(t.$t("bonus.snapshot"))+" "+t._s(i.blocktime))])])}),t._v(" "),n("div",{staticClass:"page-msg"},[t._v(t._s(t.pageMsg))]),t._v(" "),t.isPage?n("div",{staticClass:"page"},[n("div",{staticClass:"page-previous",on:{click:t.previous}},[n("img",{attrs:{src:e("tt5S"),alt:""}})]),t._v(" "),n("div",{staticStyle:{width:"1px"}}),t._v(" "),n("div",{staticClass:"page-next",on:{click:t.next}},[n("img",{attrs:{src:e("pp3u"),alt:""}})])]):t._e()],2)},a=[],s={render:n,staticRenderFns:a};i.a=s},pp3u:function(t,i){t.exports="data:image/svg+xml;base64,DQo8c3ZnIHdpZHRoPSIxNXB4IiBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNSAxNiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5ICg1MTAwMikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+DQogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+DQogICAgPGRlZnM+PC9kZWZzPg0KICAgIDxnIGlkPSLmtY/op4jlmag0IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgaWQ9ImJsb2Nrcy1oYW5nb3ZlciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTY1OC4wMDAwMDAsIC0xMTY1LjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPg0KICAgICAgICAgICAgPGcgaWQ9InN3dGljaCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTkwLjAwMDAwMCwgMTE1NC4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTEuMDAwMDAwLCAwLjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjUuMjc2MzkzMiwxMi4xNzEwMzk0IEwzMS42NTgzNTkyLDI0LjkzNDk3MTUgQzMxLjkwNTM0ODUsMjUuNDI4OTUgMzEuNzA1MTI0MSwyNi4wMjk2MjMgMzEuMjExMTQ1NiwyNi4yNzY2MTIzIEMzMS4wNzIyOTAyLDI2LjM0NjA0IDMwLjkxOTE3NzEsMjYuMzgyMTg1MSAzMC43NjM5MzIsMjYuMzgyMTg1MSBMMTgsMjYuMzgyMTg1MSBDMTcuNDQ3NzE1MywyNi4zODIxODUxIDE3LDI1LjkzNDQ2OTggMTcsMjUuMzgyMTg1MSBDMTcsMjUuMjI2OTQgMTcuMDM2MTQ1MSwyNS4wNzM4MjY5IDE3LjEwNTU3MjgsMjQuOTM0OTcxNSBMMjMuNDg3NTM4OCwxMi4xNzEwMzk0IEMyMy43MzQ1MjgxLDExLjY3NzA2MSAyNC4zMzUyMDExLDExLjQ3NjgzNjYgMjQuODI5MTc5NiwxMS43MjM4MjU5IEMyNS4wMjI3MDcsMTEuODIwNTg5NiAyNS4xNzk2Mjk1LDExLjk3NzUxMiAyNS4yNzYzOTMyLDEyLjE3MTAzOTQgWiIgaWQ9IlRyaWFuZ2xlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNC4zODIwNzYsIDE5LjAwMDExMCkgcm90YXRlKDkwLjAwMDAwMCkgdHJhbnNsYXRlKC0yNC4zODIwNzYsIC0xOS4wMDAxMTApICI+PC9wYXRoPg0KICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg=="},tt5S:function(t,i){t.exports="data:image/svg+xml;base64,DQo8c3ZnIHdpZHRoPSIxNXB4IiBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNSAxNiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5ICg1MTAwMikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+DQogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+DQogICAgPGRlZnM+PC9kZWZzPg0KICAgIDxnIGlkPSLmtY/op4jlmag0IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgaWQ9ImJsb2Nrcy1oYW5nb3ZlciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYwOC4wMDAwMDAsIC0xMTY1LjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPg0KICAgICAgICAgICAgPGcgaWQ9InN3dGljaCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTkwLjAwMDAwMCwgMTE1NC4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAiPg0KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjUuODk0NDI3MiwxMi43ODg4NTQ0IEwzMi4yNzYzOTMyLDI1LjU1Mjc4NjQgQzMyLjUyMzM4MjUsMjYuMDQ2NzY0OSAzMi4zMjMxNTgxLDI2LjY0NzQzNzkgMzEuODI5MTc5NiwyNi44OTQ0MjcyIEMzMS42OTAzMjQyLDI2Ljk2Mzg1NDkgMzEuNTM3MjExMSwyNyAzMS4zODE5NjYsMjcgTDE4LjYxODAzNCwyNyBDMTguMDY1NzQ5MiwyNyAxNy42MTgwMzQsMjYuNTUyMjg0NyAxNy42MTgwMzQsMjYgQzE3LjYxODAzNCwyNS44NDQ3NTQ5IDE3LjY1NDE3OTEsMjUuNjkxNjQxOCAxNy43MjM2MDY4LDI1LjU1Mjc4NjQgTDI0LjEwNTU3MjgsMTIuNzg4ODU0NCBDMjQuMzUyNTYyMSwxMi4yOTQ4NzU5IDI0Ljk1MzIzNTEsMTIuMDk0NjUxNSAyNS40NDcyMTM2LDEyLjM0MTY0MDggQzI1LjY0MDc0MSwxMi40Mzg0MDQ1IDI1Ljc5NzY2MzUsMTIuNTk1MzI3IDI1Ljg5NDQyNzIsMTIuNzg4ODU0NCBaIiBpZD0iVHJpYW5nbGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1LjAwMDAwMCwgMTkuMDAwMDAwKSBzY2FsZSgtMSwgMSkgcm90YXRlKDkwLjAwMDAwMCkgdHJhbnNsYXRlKC0yNS4wMDAwMDAsIC0xOS4wMDAwMDApICI+PC9wYXRoPg0KICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg=="}});