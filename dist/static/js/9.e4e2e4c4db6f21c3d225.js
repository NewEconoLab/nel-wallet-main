webpackJsonp([9],{"5smL":function(t,e,n){"use strict";var a=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function a(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),s=this&&this.__decorate||function(t,e,n,a){var s,i=arguments.length,o=i<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,a);else for(var r=t.length-1;r>=0;r--)(s=t[r])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},o=this&&this.__awaiter||function(t,e,n,a){return new(n||(n=Promise))(function(s,i){function o(t){try{l(a.next(t))}catch(t){i(t)}}function r(t){try{l(a.throw(t))}catch(t){i(t)}}function l(t){t.done?s(t.value):new n(function(e){e(t.value)}).then(o,r)}l((a=a.apply(t,e||[])).next())})},r=this&&this.__generator||function(t,e){function n(t){return function(e){return a([t,e])}}function a(n){if(s)throw new TypeError("Generator is already executing.");for(;l;)try{if(s=1,i&&(o=2&n[0]?i.return:n[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,n[1])).done)return o;switch(i=0,o&&(n=[2&n[0],o.value]),n[0]){case 0:case 1:o=n;break;case 4:return l.label++,{value:n[1],done:!1};case 5:l.label++,i=n[1],n=[0];continue;case 7:n=l.ops.pop(),l.trys.pop();continue;default:if(o=l.trys,!(o=o.length>0&&o[o.length-1])&&(6===n[0]||2===n[0])){l=0;continue}if(3===n[0]&&(!o||n[1]>o[0]&&n[1]<o[3])){l.label=n[1];break}if(6===n[0]&&l.label<o[1]){l.label=o[1],o=n;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(n);break}o[2]&&l.ops.pop(),l.trys.pop();continue}n=e.call(t,l)}catch(t){n=[6,t],i=0}finally{s=o=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var s,i,o,r,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r};Object.defineProperty(e,"__esModule",{value:!0});var l=n("6nHw"),c=n("/5sW"),d=n("443i"),u=n("PPZq"),p=n("+jyM"),f=n("VKSY"),h=n("XfB5"),m=n("slXE"),b=function(t){function e(){var e=t.call(this)||this;return e.currentAddress="",e.chooseAddress="",e.loadmsg="",e.claimbtn=!0,e.neoasset=new l.NeoAsset,e.balances=new Array,e.neoasset.gas="0",e.neoasset.neo="0",e.neoasset.claim="",e.chooseAddressarr=new Array,e.getGas=0,e}return a(e,t),e.prototype.mounted=function(){this.currentAddress=l.LoginInfo.getCurrentAddress(),this.getBalances(),this.initGetGas();var t=sessionStorage.getItem("claimState");t&&(this.claimbtn=!1,this.loadmsg="1"==t?""+this.$t("balance.msg2"):""+this.$t("balance.msg3")),this.openToast=this.$refs.toast.isShow,h.TaskManager.functionList=[],h.TaskManager.functionList.push(this.getBalances),l.TaskFunction.claimGas=this.startClaimGas,l.TaskFunction.claimState=this.claimState,l.TaskFunction.getGasTest=this.btnState},e.prototype.initGetGas=function(){return o(this,void 0,void 0,function(){var t;return r(this,function(e){switch(e.label){case 0:return[4,f.tools.wwwtool.api_hasclaimgas(this.currentAddress)];case 1:return t=e.sent(),t&&("3010"==t[0].code?this.btnState(0):"3012"==t[0].code?this.btnState(1):"3011"==t[0].code&&this.btnState(2)),[2]}})})},e.prototype.btnState=function(t){this.getGas=t},e.prototype.claimState=function(t){0==t&&(this.claimbtn=!0,this.loadmsg="",sessionStorage.removeItem("claimState")),1==t&&(this.claimbtn=!0,this.loadmsg=""+this.$t("balance.msg4"),sessionStorage.removeItem("claimState")),2==t&&(this.loadmsg=""+this.$t("balance.msg3"))},e.prototype.getTestGas=function(){return o(this,void 0,void 0,function(){var t,e,n;return r(this,function(a){switch(a.label){case 0:return this.getGas=2,[4,f.tools.wwwtool.api_claimgas(this.currentAddress,10)];case 1:return t=a.sent(),t?(e=m.default.blockheight.select("height"),"3000"==t[0].code?(this.openToast("success",""+this.$t("balance.successmsg"),4e3),n=new l.Task(l.ConfirmType.tranfer,"",{amount:10,address:this.currentAddress}),h.TaskManager.addTask(n,l.TaskType.getGasTest)):"3002"==t[0].code?(this.openToast("error",""+this.$t("balance.errmsg2"),4e3),this.getGas=0):"3003"==t[0].code?(this.openToast("error",""+this.$t("balance.errmsg1"),4e3),this.getGas=1):"3004"==t[0].code?(this.openToast("error",""+this.$t("balance.errmsg1"),4e3),this.getGas=1):(this.openToast("error",""+this.$t("balance.errmsg3"),4e3),this.getGas=0)):(this.openToast("error",""+this.$t("balance.errmsg3"),4e3),this.getGas=0),[2]}})})},e.prototype.addressSwitch=function(){l.LoginInfo.setCurrentAddress(this.chooseAddress),this.currentAddress=this.chooseAddress,this.getBalances()},e.prototype.getBalances=function(){return o(this,void 0,void 0,function(){var t,e,n,a,s,i,o,c,d,u=this;return r(this,function(r){switch(r.label){case 0:return f.tools.coinTool.initAllAsset(),[4,f.tools.wwwtool.api_getBalance(this.currentAddress)];case 1:return t=r.sent(),[4,f.tools.wwwtool.api_getclaimgas(this.currentAddress,0)];case 2:return e=r.sent(),[4,f.tools.wwwtool.api_getclaimgas(this.currentAddress,1)];case 3:return n=r.sent(),[4,f.tools.wwwtool.api_getnep5Balance(this.currentAddress)];case 4:return a=r.sent(),[4,f.tools.wwwtool.api_getHeight()];case 5:return s=r.sent(),this.neoasset.neo="0",this.neoasset.gas="0",t&&(i=Neo.Fixed8.parse(e.gas.toFixed(8)),o=Neo.Fixed8.parse(n.gas.toFixed(8)),c=i.add(o).toString(),this.neoasset.claim=c,t.forEach(function(t){t.asset==f.tools.coinTool.id_NEO&&(u.neoasset.neo=Neo.Fixed8.parse(t.balance.toString()).toString()),t.asset==f.tools.coinTool.id_GAS&&(u.neoasset.gas=Neo.Fixed8.parse(t.balance.toString()).toString())})),d=this,[4,l.BalanceInfo.getBalancesByArr(t,a,s)];case 6:return d.balances=r.sent(),f.tools.storagetool.setStorage("balances_asset",JSON.stringify(this.balances)),[2]}})})},e.prototype.toClaimGas=function(){return o(this,void 0,void 0,function(){var t,e;return r(this,function(n){switch(n.label){case 0:return t=m.default.blockheight.select("height"),Neo.Fixed8.parse(this.neoasset.claim).compareTo(Neo.Fixed8.Zero)>0?Neo.Fixed8.parse(this.neoasset.neo).compareTo(Neo.Fixed8.Zero)>0?[4,f.tools.coinTool.rawTransaction(this.currentAddress,f.tools.coinTool.id_NEO,this.neoasset.neo.toString())]:[3,2]:[3,3];case 1:return e=n.sent(),e.info&&(this.claimbtn=!1,this.loadmsg=""+this.$t("balance.msg1"),h.TaskManager.addTask(new l.Task(l.ConfirmType.tranfer,e.info,{type:"Claim",amount:this.neoasset.neo,assetname:"NEO",toaddress:this.currentAddress}),l.TaskType.tranfer),sessionStorage.setItem("claimState","1"),this.loadmsg=""+this.$t("balance.msg2")),[3,3];case 2:this.startClaimGas(),n.label=3;case 3:return[2]}})})},e.prototype.startClaimGas=function(){return o(this,void 0,void 0,function(){var t,e,n,a;return r(this,function(s){switch(s.label){case 0:return t=m.default.blockheight.select("height"),[4,f.tools.coinTool.claimGas()];case 1:return e=s.sent(),e.sendrawtransactionresult&&(this.loadmsg=""+this.$t("balance.msg3"),n=e.txid,a=JSON.parse(e.amount),h.TaskManager.addTask(new l.Task(l.ConfirmType.tranfer,n,{amount:a}),l.TaskType.ClaimGas),sessionStorage.setItem("claimState","2")),[2]}})})},e.prototype.toTransfer=function(t){f.tools.storagetool.setStorage("transfer_choose",t),this.$router.push({name:"transfer"})},e=s([d.Component({components:{"wallet-layout":u.default,"spinner-wrap":p.default}}),i("design:paramtypes",[])],e)}(c.default);e.default=b},"5z1l":function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,"\n.neobalance {\n  background: #ffffff;\n  border-radius: 5px;\n}\n.btn-transfer {\n  border: 1px solid #198cee;\n  border-radius: 5px;\n  color: #198cee;\n}\n.btn-transfer:hover {\n  color: #198cee;\n}\n.balance-type {\n  font-family: PingFangSC-Medium;\n  font-size: 20px;\n  color: #333333;\n  line-height: 20px;\n}\n.balance-amount {\n  font-family: PingFangSC-Medium;\n  font-size: 30px;\n  line-height: 30px;\n}\n.neobalance .claim {\n  font-size: 16px;\n  line-height: 16px;\n  border-top: 1px solid #f0f0f0;\n}\n.balance-asset .title {\n  padding-top: 60px;\n  padding-bottom: 20px;\n}\n.assetrow .row {\n  font-family: PingFangSC-Medium;\n  font-size: 16px;\n  text-align: center;\n  line-height: 16px;\n  border-radius: 5px;\n  background: #ffffff;\n  height: 60px;\n  margin: 0 auto;\n}\n.assetrow .row .info {\n  padding-top: 20px;\n}\n.assetrow .transfer-btn {\n  padding-top: 12px;\n}\n.balance-asset .assetrow {\n  padding-top: 20px;\n  text-align: center;\n}\n.loadmsg {\n  font-family: PingFangSC-Regular;\n  font-size: 12px;\n  color: #b2b2b2;\n  line-height: 12px;\n}\n/* 加载动画 */\n.spinner-wrap {\n  display: inline-block;\n  background-color: #4081bb;\n  padding: 12px 23px;\n  border-radius: 5px;\n  vertical-align: middle;\n  width: 46px;\n  height: 18px;\n  box-sizing: content-box;\n  text-align: center;\n}\n.spinner {\n  width: 20px;\n  height: 20px;\n  position: relative;\n  margin-left: 13px;\n}\n.container1 > div,\n.container2 > div,\n.container3 > div {\n  width: 6px;\n  height: 6px;\n  background-color: #fff;\n  border-radius: 100%;\n  position: absolute;\n  -webkit-animation: bouncedelay 1.2s infinite ease-in-out;\n  animation: bouncedelay 1.2s infinite ease-in-out;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.spinner .spinner-container {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.container2 {\n  -webkit-transform: rotateZ(45deg);\n  transform: rotateZ(45deg);\n}\n.container3 {\n  -webkit-transform: rotateZ(90deg);\n  transform: rotateZ(90deg);\n}\n.circle1 {\n  top: 0;\n  left: 0;\n}\n.circle2 {\n  top: 0;\n  right: 0;\n}\n.circle3 {\n  right: 0;\n  bottom: 0;\n}\n.circle4 {\n  left: 0;\n  bottom: 0;\n}\n.container2 .circle1 {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s;\n}\n.container3 .circle1 {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s;\n}\n.container1 .circle2 {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s;\n}\n.container2 .circle2 {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s;\n}\n.container3 .circle2 {\n  -webkit-animation-delay: -0.7s;\n  animation-delay: -0.7s;\n}\n.container1 .circle3 {\n  -webkit-animation-delay: -0.6s;\n  animation-delay: -0.6s;\n}\n.container2 .circle3 {\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s;\n}\n.container3 .circle3 {\n  -webkit-animation-delay: -0.4s;\n  animation-delay: -0.4s;\n}\n.container1 .circle4 {\n  -webkit-animation-delay: -0.3s;\n  animation-delay: -0.3s;\n}\n.container2 .circle4 {\n  -webkit-animation-delay: -0.2s;\n  animation-delay: -0.2s;\n}\n.container3 .circle4 {\n  -webkit-animation-delay: -0.1s;\n  animation-delay: -0.1s;\n}\n@-webkit-keyframes bouncedelay {\n0%,\n  80%,\n  100% {\n    -webkit-transform: scale(0);\n}\n40% {\n    -webkit-transform: scale(1);\n}\n}\n@keyframes bouncedelay {\n0%,\n  80%,\n  100% {\n    transform: scale(0);\n    -webkit-transform: scale(0);\n}\n40% {\n    transform: scale(1);\n    -webkit-transform: scale(1);\n}\n}\n",""])},RPUD:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"title",staticStyle:{"padding-bottom":"28px"}},[n("span",[t._v(t._s(t.$t("balance.title1")))]),t._v(" "),n("div",{staticStyle:{float:"right"}},[n("span",{staticStyle:{"margin-right":"11px",color:"#000"}},[t._v(t._s(t.$t("balance.title2"))+"："),n("span",{staticClass:"user-select-ok"},[t._v(t._s(t.currentAddress))])]),t._v(" "),t.chooseAddressarr&&t.chooseAddressarr.length>1?n("button",{staticClass:"btn",attrs:{"data-toggle":"modal","data-target":"#selectAddr"}},[t._v(t._s(t.$t("btn.switch")))]):t._e()])]),t._v(" "),n("div",{staticClass:"neobalance"},[n("div",[n("div",{staticStyle:{padding:"30px","padding-bottom":"40px"}},[n("span",{staticClass:"balance-type"},[t._v("NEO ")]),t._v(" "),n("span",{staticClass:"balance-amount"},[t._v(t._s(t.neoasset.neo))])]),t._v(" "),n("div",{staticStyle:{"padding-left":"30px","padding-bottom":"30px"}},[n("span",{staticClass:"balance-type"},[t._v("GAS ")]),t._v(" "),n("span",{staticClass:"balance-amount"},[t._v(t._s(t.neoasset.gas))])]),t._v(" "),n("div",{staticClass:"claim",staticStyle:{padding:"30px","padding-left":"2.3%"}},[n("span",{staticStyle:{"margin-right":"17px"}},[t._v(t._s(t.$t("balance.title3"))+" : "+t._s(t.neoasset.claim))]),t._v(" "),"0"!=t.neoasset.claim&&t.claimbtn?n("button",{staticClass:"btn btn-nel",on:{click:t.toClaimGas}},[t._v(t._s(t.$t("btn.claim")))]):t._e(),t._v(" "),t.claimbtn?t._e():n("button",{staticClass:"btn btn-nel btn-disabled",attrs:{disabled:""}},[t._v(t._s(t.$t("btn.claiming")))]),t._v(" "),n("span",{staticClass:"loadmsg"},[t._v(" "+t._s(t.loadmsg))])])])]),t._v(" "),t.balances.length?n("div",{staticClass:"balance-asset"},[n("div",{staticClass:"title"},[n("span",[t._v(t._s(t.$t("balance.title4")))])]),t._v(" "),t._l(t.balances,function(e){return n("div",{key:e.asset,staticClass:"assetrow"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-2 info"},[n("span",[t._v(t._s(e.names))])]),t._v(" "),n("div",{staticClass:"col-sm-8 info"},[n("span",[t._v(" "+t._s(e.balance))])]),t._v(" "),n("div",{staticClass:"col-sm-2 transfer-btn"},[n("span",{staticClass:"btn btn-transfer",on:{click:function(n){t.toTransfer(e.asset)}}},[t._v(t._s(t.$t("btn.transfer")))])])])])})],2):t._e(),t._v(" "),n("div",{staticStyle:{height:"30px"}}),t._v(" "),n("div",{staticClass:"modal fade",attrs:{id:"selectAddr",tabindex:"-1"}},[n("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-header"},[t._m(0),t._v(" "),n("h4",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v(t._s(t.$t("balance.title5")))])]),t._v(" "),n("div",{staticClass:"modal-body"},[n("form",[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"exampleInputFile"}},[t._v(t._s(t.$t("balance.title6"))+":")]),t._v(" "),n("div",{staticClass:"radio",attrs:{id:"selectAddress"}},t._l(t.chooseAddressarr,function(e){return n("label",{key:e.address},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.chooseAddress,expression:"chooseAddress"}],attrs:{type:"radio",autocomplete:"off"},domProps:{value:e.address,checked:t._q(t.chooseAddress,e.address)},on:{change:function(n){t.chooseAddress=e.address}}}),t._v(t._s(e.address)+"\n              ")])}))])])]),t._v(" "),n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"btn btn-default",attrs:{type:"button","data-dismiss":"modal"}},[t._v(t._s(t.$t("btn.close")))]),t._v(" "),n("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){t.addressSwitch()}}},[t._v(t._s(t.$t("btn.confirm")))])])])])]),t._v(" "),n("v-toast",{ref:"toast"})],1)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],i={render:a,staticRenderFns:s};e.a=i},mH8D:function(t,e,n){var a=n("5z1l");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("4e580d5a",a,!0,{})},v8qo:function(t,e,n){"use strict";function a(t){n("mH8D")}Object.defineProperty(e,"__esModule",{value:!0});var s=n("5smL"),i=n.n(s);for(var o in s)"default"!==o&&function(t){n.d(e,t,function(){return s[t]})}(o);var r=n("RPUD"),l=n("VU/8"),c=a,d=l(i.a,r.a,!1,c,null,null);e.default=d.exports}});