webpackJsonp([10],{"4Lei":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"myneo-box"},[i("div",{staticClass:"title"},[i("span",[t._v(t._s(t.$t("myneoname.title")))])]),t._v(" "),t._l(t.neonameList,function(e,n){return t.neonameList?i("div",{key:n,staticClass:"form-box"},[i("div",{staticClass:"neoname"},[t._v("\n            "+t._s(e.domain)+"\n        ")]),t._v(" "),i("div",{staticClass:"addr-resolver"},[t._v("( "+t._s(t.$t("myneoname.resolver"))+": "+t._s(e.resolver?e.resolver:t.$t("myneoname.notconfigure"))+" )")]),t._v(" "),i("div",{staticClass:"addr-mapping"},[t._v("( "+t._s(t.$t("myneoname.mapping"))+": "+t._s(e.resolverAddress?e.resolverAddress:t.$t("myneoname.notconfigure"))+" )")]),t._v(" "),e.expired?t._e():i("div",{staticClass:"time-msg"},[t._v("( "+t._s(t.$t("myneoname.time"))+": "+t._s(e.ttl)+" "),e.expiring?t._e():i("span",{staticClass:"ff6"},[t._v(t._s(t.$t("myneoname.expiring")))]),t._v(" )")]),t._v(" "),e.expired?i("div",{staticClass:"time-msg"},[t._v("( "+t._s(t.$t("myneoname.time"))+":  "),i("span",{staticClass:"ff6"},[t._v(t._s(t.$t("myneoname.expired")))]),t._v(" )")]):t._e(),t._v(" "),i("div",{staticClass:"btn-right"},[i("button",{staticClass:"btn btn-nel btn-bid",on:{click:function(n){t.onShowEdit(e)}}},[t._v(t._s(t.$t("btn.edit")))])])]):t._e()}),t._v(" "),t.isShowEdit?i("div",{staticClass:"edit-wrap"},[i("div",{staticClass:"edit-box"},[i("div",{staticClass:"edit-title"},[t._v(t._s(t.$t("myneoname.edittitle")))]),t._v(" "),i("div",{staticClass:"edit-tips"},[t._v(t._s(t.$t("myneoname.tips")))]),t._v(" "),i("div",{staticClass:"edit-content"},[i("div",{staticClass:"edit-name"},[t._v(t._s(t.$t("myneoname.neoname"))+": "+t._s(t.domainInfo.domain))]),t._v(" "),i("div",{staticClass:"edit-input"},[i("div",{staticClass:"input-msg"},[t._v("\n                    "+t._s(t.$t("myneoname.resolver"))+":\n                    "),1==t.resolverState?i("button",{staticClass:"btn btn-nel btn-input-reset",on:{click:t.resetresolve}},[t._v(t._s(t.$t("btn.reset")))]):t._e()]),t._v(" "),i("div",{staticClass:"input-box"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.set_contract,expression:"set_contract"}],staticClass:"readonly-input",attrs:{type:"text",readonly:"readonly",autocomplete:"off"},domProps:{value:t.set_contract},on:{input:function(e){e.target.composing||(t.set_contract=e.target.value)}}}),t._v(" "),0==t.resolverState?i("button",{staticClass:"btn btn-nel btn-big",on:{click:t.setresolve}},[t._v(t._s(t.$t("btn.confirm")))]):t._e(),t._v(" "),2==t.resolverState?i("button",{staticClass:"btn btn-nel btn-big btn-disable",attrs:{disabled:""}},[t._v(t._s(t.$t("btn.confirming")))]):t._e(),t._v(" "),1==t.resolverState?i("div",{staticClass:"ok-img"},[i("img",{attrs:{src:n("wtuE"),alt:""}})]):t._e()])]),t._v(" "),i("div",{staticClass:"edit-input"},[i("div",{staticClass:"input-msg"},[t._v("\n                    "+t._s(t.$t("myneoname.mapping"))+":\n                    "),1==t.mappingState?i("button",{staticClass:"btn btn-nel btn-input-reset",on:{click:t.resetmappingData}},[t._v(t._s(t.$t("btn.reset")))]):t._e()]),t._v(" "),i("div",{staticClass:"input-box"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.resolverAddress,expression:"resolverAddress"}],attrs:{type:"text",autocomplete:"off"},domProps:{value:t.resolverAddress},on:{input:[function(e){e.target.composing||(t.resolverAddress=e.target.value)},t.verifyMapping]}}),t._v(" "),0==t.mappingState?i("button",{staticClass:"btn btn-nel btn-big",class:{"btn-disable":1!=t.resolverState||!t.mappingistrue},attrs:{disabled:1!=t.resolverState||!t.mappingistrue},on:{click:t.mappingData}},[t._v(t._s(t.$t("btn.confirm")))]):t._e(),t._v(" "),2==t.mappingState?i("button",{staticClass:"btn btn-nel btn-big btn-disable",attrs:{disabled:""}},[t._v(t._s(t.$t("btn.confirming")))]):t._e(),t._v(" "),1==t.mappingState?i("div",{staticClass:"ok-img"},[i("img",{attrs:{src:n("wtuE"),alt:""}})]):t._e()])]),t._v(" "),i("div",{staticClass:"edit-input"},[i("div",{staticClass:"input-msg"},[t._v("\n                    "+t._s(t.$t("myneoname.owner"))+":\n                ")]),t._v(" "),i("div",{staticClass:"input-box"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.ownerAddress,expression:"ownerAddress"}],attrs:{type:"text",autocomplete:"off"},domProps:{value:t.ownerAddress},on:{input:[function(e){e.target.composing||(t.ownerAddress=e.target.value)},t.verifySetOwner]}}),t._v(" "),1==t.ownerState?i("button",{staticClass:"btn btn-nel btn-big",on:{click:t.setowner}},[t._v(t._s(t.$t("btn.setOwner")))]):2==t.ownerState?i("button",{staticClass:"btn btn-nel btn-big btn-disable",attrs:{disabled:""}},[t._v(t._s(t.$t("btn.settingOwner")))]):3==t.ownerState?i("button",{staticClass:"btn btn-nel btn-big btn-disable",attrs:{disabled:""}},[t._v(t._s(t.$t("btn.setOwner")))]):t._e()])]),t._v(" "),i("div",{staticClass:"edit-input"},[i("div",{staticClass:"input-msg"},[t._v("\n                    "+t._s(t.$t("myneoname.time"))+":\n                ")]),t._v(" "),i("div",{staticClass:"input-box"},[i("input",{staticClass:"readonly-input",attrs:{type:"text",readonly:"readonly"},domProps:{value:t.domainInfo.expired?t.$t("myneoname.expired"):t.domainInfo.ttl}}),t._v(" "),t.domainInfo.expired||t.domainInfo.expiring||t.renewalWatting?t._e():i("button",{staticClass:"btn btn-nel btn-big",on:{click:t.renewalDomain}},[t._v(t._s(t.$t("btn.renewal")))]),t._v(" "),!t.domainInfo.expired&&!t.domainInfo.expiring||t.renewalWatting?t._e():i("button",{staticClass:"btn btn-nel btn-big btn-disable",attrs:{disabled:""}},[t._v(t._s(t.$t("btn.renewal")))]),t._v(" "),t.renewalWatting?i("button",{staticClass:"btn btn-nel btn-big btn-disable",attrs:{disabled:""}},[t._v(t._s(t.$t("btn.renewaling")))]):t._e()])])]),t._v(" "),i("div",{staticClass:"edit-close"},[i("span",{attrs:{"aria-hidden":"true"},on:{click:function(e){t.isShowEdit=!t.isShowEdit}}},[t._v("×")])])])]):t._e()],2)},a=[],o={render:i,staticRenderFns:a};e.a=o},"9HPu":function(t,e,n){var i=n("9fE2");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("328319e5",i,!0,{})},"9fE2":function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,"\n.myneo-box .ff6[data-v-1b6035a6] {\n  color: #ff6a6a;\n}\n.myneo-box .form-box[data-v-1b6035a6] {\n  background: #fff;\n  border-radius: 5px;\n  padding: 20px 50px 10px 50px;\n  font-size: 14px;\n  margin-bottom: 20px;\n  position: relative;\n}\n.myneo-box .form-box .neoname[data-v-1b6035a6] {\n  font-size: 16px;\n}\n.myneo-box .form-box .neoname[data-v-1b6035a6],\n.myneo-box .form-box .addr-resolver[data-v-1b6035a6],\n.myneo-box .form-box .addr-mapping[data-v-1b6035a6],\n.myneo-box .form-box .time-msg[data-v-1b6035a6] {\n  margin-bottom: 10px;\n}\n.myneo-box .form-box .btn-right[data-v-1b6035a6] {\n  position: absolute;\n  top: 50%;\n  right: 30px;\n  margin-top: -19px;\n}\n.myneo-box .form-box .btn-right .btn-bid[data-v-1b6035a6] {\n  padding: 0;\n  font-size: 18px;\n  width: 110px;\n  height: 38px;\n}\n.myneo-box .form-box .btn-right .btn-bid.btn-disable[data-v-1b6035a6] {\n  font-size: 14px;\n}\n.myneo-box .edit-wrap[data-v-1b6035a6] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  height: 100%;\n  z-index: 1030;\n}\n.myneo-box .edit-wrap .edit-box[data-v-1b6035a6] {\n  background: #fff;\n  padding: 30px 50px 50px 50px;\n  width: 80%;\n  color: #000;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -moz-transform: translate(-50%, -50%);\n  -webkit-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  border-radius: 5px;\n  font-size: 16px;\n}\n.myneo-box .edit-wrap .edit-box .edit-title[data-v-1b6035a6] {\n  font-size: 20px;\n}\n.myneo-box .edit-wrap .edit-box .edit-tips[data-v-1b6035a6] {\n  font-size: 14px;\n  color: #b2b2b2;\n  margin-top: 20px;\n}\n.myneo-box .edit-wrap .edit-box .edit-content .edit-name[data-v-1b6035a6] {\n  margin-top: 50px;\n}\n.myneo-box .edit-wrap .edit-box .edit-content .edit-input[data-v-1b6035a6] {\n  margin-top: 50px;\n}\n.myneo-box .edit-wrap .edit-box .edit-content .edit-input .input-msg .btn-input-reset[data-v-1b6035a6] {\n  width: 80px;\n  height: 30px;\n  font-size: 14px;\n  padding: 0;\n  line-height: 30px;\n  text-align: center;\n  margin-left: 15px;\n}\n.myneo-box .edit-wrap .edit-box .edit-content .edit-input .input-box[data-v-1b6035a6] {\n  margin-top: 20px;\n}\n.myneo-box .edit-wrap .edit-box .edit-content .edit-input .input-box input[data-v-1b6035a6] {\n  width: 68%;\n  height: 56px;\n  background: none;\n  border: 1px solid #b2b2b2;\n  border-radius: 5px;\n  vertical-align: middle;\n  margin-bottom: 0;\n  color: #000;\n}\n.myneo-box .edit-wrap .edit-box .edit-content .edit-input .input-box input.readonly-input[data-v-1b6035a6] {\n  background: #fff;\n}\n.myneo-box .edit-wrap .edit-box .edit-content .edit-input .input-box button[data-v-1b6035a6] {\n  vertical-align: middle;\n}\n.myneo-box .edit-wrap .edit-box .edit-content .edit-input .input-box button.btn-disable[data-v-1b6035a6] {\n  background: #77bcf6;\n  opacity: 1;\n}\n.myneo-box .edit-wrap .edit-box .edit-content .edit-input .input-box .ok-img[data-v-1b6035a6] {\n  display: inline-block;\n  vertical-align: middle;\n  margin-left: 20px;\n}\n.myneo-box .edit-wrap .edit-box .edit-content .edit-input .input-box .ok-img img[data-v-1b6035a6] {\n  width: 24px;\n  height: 24px;\n}\n.myneo-box .edit-wrap .edit-box .edit-close[data-v-1b6035a6] {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  width: 30px;\n  height: 30px;\n  font-size: 30px;\n}\n",""])},NXVv:function(t,e,n){"use strict";var i=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),a=this&&this.__decorate||function(t,e,n,i){var a,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(s=(o<3?a(s):o>3?a(e,n,s):a(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))(function(a,o){function s(t){try{d(i.next(t))}catch(t){o(t)}}function r(t){try{d(i.throw(t))}catch(t){o(t)}}function d(t){t.done?a(t.value):new n(function(e){e(t.value)}).then(s,r)}d((i=i.apply(t,e||[])).next())})},r=this&&this.__generator||function(t,e){function n(t){return function(e){return i([t,e])}}function i(n){if(a)throw new TypeError("Generator is already executing.");for(;d;)try{if(a=1,o&&(s=2&n[0]?o.return:n[0]?o.throw||((s=o.return)&&s.call(o),0):o.next)&&!(s=s.call(o,n[1])).done)return s;switch(o=0,s&&(n=[2&n[0],s.value]),n[0]){case 0:case 1:s=n;break;case 4:return d.label++,{value:n[1],done:!1};case 5:d.label++,o=n[1],n=[0];continue;case 7:n=d.ops.pop(),d.trys.pop();continue;default:if(s=d.trys,!(s=s.length>0&&s[s.length-1])&&(6===n[0]||2===n[0])){d=0;continue}if(3===n[0]&&(!s||n[1]>s[0]&&n[1]<s[3])){d.label=n[1];break}if(6===n[0]&&d.label<s[1]){d.label=s[1],s=n;break}if(s&&d.label<s[2]){d.label=s[2],d.ops.push(n);break}s[2]&&d.ops.pop(),d.trys.pop();continue}n=e.call(t,d)}catch(t){n=[6,t],o=0}finally{a=s=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var a,o,s,r,d={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return r={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r};Object.defineProperty(e,"__esModule",{value:!0});var d=n("/5sW"),l=n("443i"),p=n("VKSY"),c=n("6nHw"),m=n("5LD5"),u=n("XfB5"),b=function(t){function e(){var e=t.call(this)||this;return e.currentAddress="",e.isShowEdit=!1,e.currentAddress=c.LoginInfo.getCurrentAddress(),e.neonameList=null,e.set_contract="0x6e2aea28af9c5febea0774759b1b76398e3167f1",e.domainEdit=new m.sessionStoreTool("domain-edit"),e.renewalWatting=!1,e.resolverAddress="",e.mappingState=0,e.resolverState=0,e.mappingistrue=!1,e.currentdomain="",e.ownerState=3,e.ownerAddress="",e}return i(e,t),e.prototype.mounted=function(){p.tools.nnstool.initRootDomain("neo"),this.getAllNeoName(this.currentAddress),c.TaskFunction.domainResovle=this.resolverTask,c.TaskFunction.domainMapping=this.mappingTask,c.TaskFunction.domainRenewal=this.renewalTask,c.TaskFunction.domainTransfer=this.domainTransferTask},e.prototype.domainTransferTask=function(t){t==this.currentdomain&&(this.ownerTransfer=!1),this.getAllNeoName(this.currentAddress)},e.prototype.verifyMapping=function(){if(!this.resolverAddress)return void(this.mappingistrue=!1);var t=p.tools.neotool.verifyAddress(this.resolverAddress);this.mappingistrue=t},e.prototype.verifySetOwner=function(){var t=this.domainEdit.select(this.currentdomain);if(t&&t.domain_transfer&&"watting"===t.domain_transfer)this.ownerState=2;else if(this.domainInfo.expired||!this.ownerAddress)this.ownerState=3;else{var e=p.tools.neotool.verifyAddress(this.ownerAddress);this.ownerState=e?1:3}},e.prototype.getAllNeoName=function(t){return s(this,void 0,void 0,function(){var e,n,i,a,o,s,d,l,c;return r(this,function(r){switch(r.label){case 0:return[4,p.tools.wwwtool.getnnsinfo(t,".neo")];case 1:if(e=r.sent(),!(n=e)||!n.length)return[3,11];i=[];for(a in n)i.push(a);o=0,r.label=2;case 2:return o<i.length?(s=i[o],[4,this.checkExpiration(n[s])]):[3,10];case 3:return d=r.sent(),d?[3,5]:[4,this.checkExpirationSoon(n[s])];case 4:return l=r.sent(),n[s].expired=d,n[s].expiring=l,[3,6];case 5:n[s].expiring=!1,n[s].expired=!0,r.label=6;case 6:return n[s].resolver?[4,p.tools.nnstool.resolveData(n[s].domain)]:[3,8];case 7:c=r.sent(),n[s].resolverAddress=c,r.label=8;case 8:n[s].ttl=p.tools.timetool.getTime(e[s].ttl),r.label=9;case 9:return o++,[3,2];case 10:this.neonameList=n,r.label=11;case 11:return[2]}})})},e.prototype.checkExpiration=function(t){var e=(new Date).getTime();return!(new Neo.BigInteger(e).compareTo(new Neo.BigInteger(t.ttl).multiply(1e3))<0)},e.prototype.checkExpirationSoon=function(t){var e=(new Date).getTime();return!(new Neo.BigInteger(t.ttl).multiply(1e3).subtract(new Neo.BigInteger(e)).compareTo(7776e6)<0)},e.prototype.resetresolve=function(){this.resolverState=0,this.resolverAddress="",this.mappingState=0,this.mappingistrue=!1},e.prototype.resetmappingData=function(){this.resolverAddress="",this.mappingState=0},e.prototype.onShowEdit=function(t){this.domainInfo=t,this.resolverAddress=t.resolverAddress,this.mappingistrue=p.tools.neotool.verifyAddress(this.resolverAddress),this.mappingState=this.domainInfo.resolverAddress?1:0,this.resolverState=this.domainInfo.resolver?1:0,this.renewalWatting=!1,this.isShowEdit=!this.isShowEdit,this.currentdomain=t.domain,this.verifySetOwner();var e=this.domainEdit.select(t.domain);e&&(e.resolver&&"watting"===e.resolver&&(this.resolverState=2),e.mapping&&e.mapping.state&&"watting"===e.mapping.state&&(this.mappingState=2,this.resolverAddress=e.mapping.address),e.renewal&&"watting"===e.renewal&&(this.renewalWatting=!0),e.owner&&"watting"===e.owner&&(this.renewalWatting=!0))},e.prototype.setowner=function(){return s(this,void 0,void 0,function(){var t,e,n,i;return r(this,function(a){switch(a.label){case 0:t=this.ownerState,a.label=1;case 1:return a.trys.push([1,5,,6]),""==this.resolverAddress||0==this.mappingState?[3,3]:(this.resetmappingData(),[4,this.mappingData()]);case 2:a.sent(),a.label=3;case 3:return c.LoginInfo.info=null,this.ownerState=2,[4,p.tools.nnstool.setOwner(this.domainInfo.domain,this.ownerAddress)];case 4:if(e=a.sent(),e.err)throw this.ownerState=t,new Error("Transaction send failed");return n=e.info,u.TaskManager.addTask(new c.Task(c.ConfirmType.contract,n,{domain:this.domainInfo.domain,address:this.ownerAddress}),c.TaskType.domainTransfer),this.domainEdit.put(this.domainInfo.domain,"watting","domain_transfer"),[3,6];case 5:return i=a.sent(),console.log("ERROR!!"),this.ownerState=t,[3,6];case 6:return[2]}})})},e.prototype.setresolve=function(){return s(this,void 0,void 0,function(){var t,e,n,i,a;return r(this,function(o){switch(o.label){case 0:t=this.resolverState,o.label=1;case 1:return o.trys.push([1,3,,4]),this.resolverState=2,e=this.set_contract.hexToBytes().reverse(),[4,p.tools.nnstool.setResolve(this.domainInfo.domain,e)];case 2:return n=o.sent(),n.err||(i=n.info,u.TaskManager.addTask(new c.Task(c.ConfirmType.contract,i,{domain:this.domainInfo.domain,contract:this.set_contract}),c.TaskType.domainResovle),this.domainEdit.put(this.domainInfo.domain,"watting","resolver")),[3,4];case 3:return a=o.sent(),this.resolverState=t,[3,4];case 4:return[2]}})})},e.prototype.mappingData=function(){return s(this,void 0,void 0,function(){var t,e,n,i;return r(this,function(a){switch(a.label){case 0:t=this.mappingState,a.label=1;case 1:return a.trys.push([1,3,,4]),this.mappingState=2,[4,p.tools.nnstool.setResolveData(this.domainInfo.domain,this.resolverAddress,this.domainInfo.resolver)];case 2:if(e=a.sent(),e.err)throw this.mappingState=t,new Error("Transaction send failed");return n=e.info,u.TaskManager.addTask(new c.Task(c.ConfirmType.contract,n,{domain:this.domainInfo.domain,address:this.resolverAddress}),c.TaskType.domainMapping),this.domainEdit.put(this.domainInfo.domain,{state:"watting",address:this.resolverAddress},"mapping"),[3,4];case 3:throw i=a.sent(),this.mappingState=t,i;case 4:return[2]}})})},e.prototype.renewalDomain=function(){return s(this,void 0,void 0,function(){var t,e,n,i;return r(this,function(a){switch(a.label){case 0:return[4,p.tools.nnstool.getRootInfo("neo")];case 1:return t=a.sent(),e=this.domainInfo.domain,[4,p.tools.nnssell.renewDomain(e,t.register)];case 2:return n=a.sent(),n.err||(this.renewalWatting=!0,i=n.info,u.TaskManager.addTask(new c.Task(c.ConfirmType.contract,i,{domain:e}),c.TaskType.domainRenewal),this.domainEdit.put(this.domainInfo.domain,"watting","renewal")),[2]}})})},e.prototype.renewalTask=function(t){t==this.currentdomain&&(this.renewalWatting=!1),this.getAllNeoName(this.currentAddress)},e.prototype.mappingTask=function(t,e){this.getAllNeoName(this.currentAddress),this.currentdomain==t&&(this.mappingState=1,e&&(this.resolverAddress=e))},e.prototype.resolverTask=function(t){this.currentdomain==t&&(this.resolverState=1),this.getAllNeoName(this.currentAddress)},e=a([l.Component({components:{}}),o("design:paramtypes",[])],e)}(d.default);e.default=b},ogHy:function(t,e,n){"use strict";function i(t){n("9HPu")}Object.defineProperty(e,"__esModule",{value:!0});var a=n("NXVv"),o=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);var r=n("4Lei"),d=n("VU/8"),l=i,p=d(o.a,r.a,!1,l,"data-v-1b6035a6",null);e.default=p.exports}});