<template>
    <wallet-layout>
        <div class="container">
            <div class="line-title">
                <div class="title">
                    <span>NEO Balance</span>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="transfer-panel">
                <div class="form-horizontal">
                    <div class="col-sm-12">
                        <label for="firstname" class="col-sm-2 control-label">Asset：</label>
                        <div class="col-sm-10">
                            <select @change="choose" v-model="asset" style="width:150px">
                                <option v-for="balance in balances" :key="balance.asset" :value="balance.asset">{{balance.names}}</option>
                            </select>
                            <span> &nbsp;&nbsp;&nbsp;&nbsp; {{balance.balance}} {{balance.names}} available</span>
                        </div>
                    </div>
                    <div class="col-sm-12" :class="addrerr!=''?(addrerr == 'true' ?'err':'success') :''">
                        <label for="" class="col-sm-2 control-label">
                            <div style="padding-top:40px;">Address:</div>
                        </label>
                        <div class="col-sm-7">
                            <div style="padding-top:30px;">
                                <input type="text" v-model="targetaddr" class="nel-input big" @change="verify_addr">
                            </div>
                        </div>
                        <div class="col-sm-3 mess">
                            <p v-if="addrerr=='true'"><img src="../../static/img/wrong.svg" alt="">&nbsp;&nbsp; Your adress is incorrect.</p>
                            <p v-if="addrerr=='false'"><img src="../../static/img/correct.svg" alt=""></p>
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <label for="" class="col-sm-2 control-label">
                            <div style="padding-top:40px;">Amount:</div>
                        </label>
                        <div class="col-sm-7">
                            <div style="padding-top:30px;">
                                <input type="number" v-model="amount" class="nel-input big" @change="verify_addr">
                            </div>
                        </div>
                        <div class="col-sm-3 mess"></div>
                    </div>
                    <div class="col-sm-12" style="padding-top:30px;">
                        <div class="col-sm-6"></div>
                        <div class="col-sm-3">
                            <button class="btn btn-link">Details</button>
                            <button class="btn btn-nel btn-big" @click="send">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </wallet-layout>
</template>

<script lang="ts" src="./transfer.ts">
</script>


<style>
.mess {
  padding-top: 45px;
}
.err .mess > p {
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #f25151;
  line-height: 12px;
}
.success input {
  border: 1px solid #b2b2b2;
  box-shadow: 0 0 3px 0 #2dde4f;
  border-radius: 5px;
}
.err input {
  border: 1px solid #b2b2b2;
  box-shadow: 0 0 3px 0 #f25151;
  border-radius: 5px;
}
.line-title {
  padding-top: 40px;
  padding-bottom: 20px;
}
.balance-type {
  font-family: PingFangSC-Medium;
  font-size: 20px;
  line-height: 20px;
}
.balance-amount {
  font-family: PingFangSC-Medium;
  font-size: 30px;
  line-height: 30px;
}
.line-title span {
  font-size: 16px;
  line-height: 16px;
}
.transfer-panel {
  background: #ffffff;
  border-radius: 5px;
  width: 1080px;
  height: 414px;
}
.transfer-panel .form-horizontal {
  padding-top: 2.9%;
}
.transfer-panel span,
.transfer-panel label {
  font-family: PingFangSC-Medium;
  font-size: 16px;
  line-height: 16px;
  font-weight: unset;
}
.transfer-panel span {
  font-family: PingFangSC-Regular;
  font-size: 16px;
  color: #198cee;
  line-height: 16px;
}
</style>

