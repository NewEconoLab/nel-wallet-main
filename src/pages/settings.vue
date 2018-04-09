<template>
    <wallet-layout>
        <div class="container">
            <div class="title">
                <span>Settings</span>
            </div>
            <div class="panel panel-default settings">
                <div>
                    <div style="padding-top: 2.8%; padding-bottom: 0.9%; padding-left: 2.3%;">
                        <span>My Wallet Adress : &nbsp;{{address}}</span>
                    </div>
                    <div style="padding-top: 2.8%; padding-bottom: 0.9%; padding-left: 2.3%;">
                        <span>My WIF : &nbsp;&nbsp;</span>
                        <button class="btn btn-nel" @click="visibleWif">Visible</button>
                        <span>&nbsp;&nbsp;{{wif}}</span>
                    </div>
                    <div style="padding-top: 2.8%; padding-bottom: 0.9%; padding-left: 2.3%;">
                        <span>My Wallet file : &nbsp;&nbsp;</span>
                        <button class="btn btn-nel" @click="download">Create</button> &nbsp;&nbsp;
                        <a v-if="href!=''" :download="walletname" :href="href">download</a>
                    </div>
                    <div style="padding-top: 2.8%; padding-bottom: 0.9%; padding-left: 2.3%;">
                        <p>These information are very important , it may cause your lost if you lose them .
                            <br> Save your keystore file and make copys of your wallet adress and your wif . Do not lose them!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </wallet-layout>
</template>

<script lang="ts" src="./settings.ts">
</script>

<style>
.settings span {
  font-family: PingFangSC-Medium;
  font-size: 16px;
  color: #198cee;
  line-height: 16px;
}
</style>
