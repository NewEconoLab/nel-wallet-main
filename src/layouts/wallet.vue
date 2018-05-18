<template>
  <main-layout>
    <nav class="navbar navbar-wallet">
      <div class="container">
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-left">
            <li>
              <v-link ref="balance" href="#balance">
                <span :class="[balance]"></span> {{$t('balance.balance')}}
              </v-link>
            </li>
            <li>
              <v-link ref="transfer" href="#transfer">
                <span :class="[transfer]"></span> {{$t('transfer.transfer')}}
              </v-link>
            </li>
            <!-- <li>
              <v-link ref="nns" href="#nns">
                <span :class="[nns]"></span> {{$t('nns.nns')}}
              </v-link>
            </li> -->
            <li>
              <v-link ref="setting" href="#settings">
                <span :class="[setting]"></span> {{$t('setting.settings')}}
              </v-link>
            </li>
          </ul>
          <div class="blockheight">{{$t('navbar.blockheight')}}：{{blockheight}}</div>
        </div>
        <!--/.nav-collapse -->
      </div>
      <!--/.container -->
    </nav>

    <slot></slot>
  </main-layout>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import MainLayout from "./Main.vue";
import VLink from "../components/VLink.vue";
import { WWW } from "../tools/wwwtool";
import { StorageTool } from "../tools/storagetool";
@Component({
  components: {
    VLink,
    MainLayout
  }
})
export default class FeatureComponent extends Vue {
  balance: string;
  transfer: string;
  nns: string;
  setting: string;
  blockheight: number;
  constructor() {
    super();
    this.balance = "";
    this.nns = "";
    this.transfer = "";
    this.setting = "";
    this.blockheight = 0;
  }

  mounted() {
    this.balance = this.$refs["balance"]["isActive"]
      ? "icon-balance-select"
      : "icon-balance-unselect";
    this.transfer = this.$refs["transfer"]["isActive"]
      ? "icon-transfer-select"
      : "icon-transfer-unselect";
    this.setting = this.$refs["setting"]["isActive"]
      ? "icon-setting-select"
      : "icon-setting-unselect";

    this.getHeight();
    let arr = StorageTool.getLoginArr();
    if (arr.length == 0) {
      window.location.hash = "#login";
    }
    // StorageTool.heightRefresh();
  }

  async getHeight() {
    WWW.api_getHeight().then(res => {
      this.blockheight = res;
    });
    setTimeout(() => {
      this.getHeight();
    }, 15000);
  }
}
</script>
<style lang="less">
.container {
  padding-left: 0px;
  padding-right: 0px;
}
.container #navbar {
  padding-left: 0px;
  padding-right: 0px;
}
.navbar-wallet {
  padding-top: 51px;
  background-color: #ffffff;
  height: 132px;
}
.navbar-wallet .navbar-collapse {
  padding-top: 30px;
}
.navbar-wallet a {
  font-size: 16px;
  color: #b2b2b2;
  border-radius: 5px 5px 0px 0px;
  line-height: 16px;
}
.navbar-wallet .active {
  color: #333;
  background: #ebeef1;
  border-radius: 5px 5px 0px 0px;
}
.navbar-wallet li {
  width: 182px;
  text-align: center;
}
</style>

