<template>
    <wallet-layout>
        <div class="container">
            <div class="title">
                <span>NEO Balance</span>
                <div style="float:right">
                    <span style="margin-right: 11px;">Key Address ：{{currentAddress}}</span>
                    <button class="btn" :class="chooseAddress && chooseAddress.length>1 ? 'btn-nel' : 'btn-disabled' ">Switch</button>
                </div>
            </div>
            <div class="neobalance">
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
                        <span style="margin-right: 17px;">GAS available to claim : {{neoasset.claim}}</span>
                        <button class="btn btn-nel" v-if="neoasset.claim>0">Claim</button>
                    </div>
                </div>
            </div>
            <div class="balance-asset" v-if="balances.length">
                <div class="title">
                    <span>Asset</span>
                </div>
                <div v-for="balance in balances" :key="balance.asset" class="assetrow">
                    <div class="row">
                        <div class="col-lg-2 info">
                            <span>{{balance.names}}</span>
                        </div>
                        <div class="col-lg-8 info">
                            <span> {{balance.balance}}</span>
                        </div>
                        <div class="col-lg-2 transfer-btn">
                            <span class="btn btn-transfer" @click="toTransfer(balance.asset)">Transfer</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </wallet-layout>
</template>

<script lang="ts" src="./balance.ts">
</script>
<style>
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
.line-title {
  padding-top: 40px;
  padding-bottom: 20px;
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
.line-title span {
  font-size: 16px;
  line-height: 16px;
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
</style>

