<template>
    <div class="container">
      <div class="title" style="padding-bottom:28px;">
        <span>{{$t('balance.title1')}}</span>
        <div style="float:right">
          <span style="margin-right: 11px;color:#000;">{{$t('balance.title2')}}：<span class="user-select-ok">{{currentAddress}}</span></span>
          <button class="btn" data-toggle="modal" data-target="#selectAddr" v-if="chooseAddressarr &&chooseAddressarr.length>1">{{$t('btn.switch')}}</button>
        </div>
      </div>
      <div class="neobalance" >
        <div>
          <div style="padding: 30px; padding-bottom: 40px;">
            <span class="balance-type">NEO&nbsp;</span>
            <span class="balance-amount">{{neoasset.neo}}</span>
          </div>
          <div style="padding-left: 30px; padding-bottom: 30px;">
            <span class="balance-type">GAS&nbsp;</span>
            <span class="balance-amount">{{neoasset.gas}}</span>
          </div>
          <div class="claim" style="padding: 30px; padding-left: 2.3%;">
            <span style="margin-right: 17px;">{{$t('balance.title3')}} : {{neoasset.claim}}</span>
            <button class="btn btn-nel" v-if="neoasset.claim!='0'&&claimbtn" @click="toClaimGas">{{$t('btn.claim')}}</button>
            <!-- <spinner-wrap :isbig="false"></spinner-wrap> -->
            <button v-if="!claimbtn" class="btn btn-nel btn-disabled" disabled>{{$t('btn.claiming')}}</button>
            <span class="loadmsg">&nbsp;{{loadmsg}}</span>
          </div>
        </div>
      </div>
      <div class="balance-asset" v-if="balances.length">
        <div class="title">
          <span>{{$t('balance.title4')}}</span>
        </div>
        <div v-for="balance in balances" :key="balance.asset" class="assetrow">
          <div class="row">
            <div class="col-sm-2 info">
              <span>{{balance.names}}</span>
            </div>
            <div class="col-sm-8 info">
              <span> {{balance.balance}}</span>
            </div>
            <div class="col-sm-2 transfer-btn">
              <span class="btn btn-transfer" @click="toTransfer(balance.asset)">{{$t('btn.transfer')}}</span>
            </div>
          </div>
        </div>
      </div>
      <div style="height:30px"></div>
      
    <!-- 地址选框 -->
    <div class="modal fade" id="selectAddr" tabindex="-1">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="modal-title" id="exampleModalLabel">{{$t('balance.title5')}}</h4>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="exampleInputFile">{{$t('balance.title6')}}:</label>
                <div class="radio" id="selectAddress">
                  <label v-for="item in chooseAddressarr" :key="item.address">
                    <input type="radio" v-model="chooseAddress" :value="item.address" autocomplete="off">{{item.address}}
                  </label>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">{{$t('btn.close')}}</button>
            <button type="button" class="btn btn-primary" data-dismiss="modal" @click="addressSwitch()">{{$t('btn.confirm')}}</button>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script lang="ts" src="./balance.ts">
</script>
<style lang="less">
.neobalance {
  background: #ffffff;
  border-radius: 5px;
}
.btn-transfer {
  border: 1px solid #198cee;
  border-radius: 5px;
  color: #198cee;
}
.btn-transfer:hover {
  color: #198cee;
}
.balance-type {
  font-family: PingFangSC-Medium;
  font-size: 20px;
  color: #333333;
  line-height: 20px;
}
.balance-amount {
  font-family: PingFangSC-Medium;
  font-size: 30px;
  line-height: 30px;
}
.neobalance .claim {
  font-size: 16px;
  line-height: 16px;
  border-top: 1px solid #f0f0f0;
}
.balance-asset .title {
  padding-top: 60px;
  padding-bottom: 20px;
}

.assetrow .row {
  font-family: PingFangSC-Medium;
  font-size: 16px;
  text-align: center;
  line-height: 16px;
  border-radius: 5px;
  background: #ffffff;
  height: 60px;
  margin: 0 auto;
}
.assetrow .row .info {
  padding-top: 20px;
}
.assetrow .transfer-btn {
  padding-top: 12px;
}
.balance-asset .assetrow {
  padding-top: 20px;
  text-align: center;
}
.loadmsg {
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #b2b2b2;
  line-height: 12px;
}
/* 加载动画 */
.spinner-wrap {
  display: inline-block;
  background-color: #4081bb;
  padding: 12px 23px;
  border-radius: 5px;
  vertical-align: middle;
  width: 46px;
  height: 18px;
  box-sizing: content-box;
  text-align: center;
}
.spinner {
  width: 20px;
  height: 20px;
  position: relative;
  margin-left: 13px;
}

.container1 > div,
.container2 > div,
.container3 > div {
  width: 6px;
  height: 6px;
  background-color: #fff;

  border-radius: 100%;
  position: absolute;
  -webkit-animation: bouncedelay 1.2s infinite ease-in-out;
  animation: bouncedelay 1.2s infinite ease-in-out;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.spinner .spinner-container {
  position: absolute;
  width: 100%;
  height: 100%;
}

.container2 {
  -webkit-transform: rotateZ(45deg);
  transform: rotateZ(45deg);
}

.container3 {
  -webkit-transform: rotateZ(90deg);
  transform: rotateZ(90deg);
}

.circle1 {
  top: 0;
  left: 0;
}
.circle2 {
  top: 0;
  right: 0;
}
.circle3 {
  right: 0;
  bottom: 0;
}
.circle4 {
  left: 0;
  bottom: 0;
}

.container2 .circle1 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}

.container3 .circle1 {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}

.container1 .circle2 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}

.container2 .circle2 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}

.container3 .circle2 {
  -webkit-animation-delay: -0.7s;
  animation-delay: -0.7s;
}

.container1 .circle3 {
  -webkit-animation-delay: -0.6s;
  animation-delay: -0.6s;
}

.container2 .circle3 {
  -webkit-animation-delay: -0.5s;
  animation-delay: -0.5s;
}

.container3 .circle3 {
  -webkit-animation-delay: -0.4s;
  animation-delay: -0.4s;
}

.container1 .circle4 {
  -webkit-animation-delay: -0.3s;
  animation-delay: -0.3s;
}

.container2 .circle4 {
  -webkit-animation-delay: -0.2s;
  animation-delay: -0.2s;
}

.container3 .circle4 {
  -webkit-animation-delay: -0.1s;
  animation-delay: -0.1s;
}

@-webkit-keyframes bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
  }
}

@keyframes bouncedelay {
  0%,
  80%,
  100% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  40% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}
</style>
