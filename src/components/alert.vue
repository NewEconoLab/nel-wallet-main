<template>
    <div class="alert-box">
        <div class="alert-warp">
            <div class="alert-title">Edit information</div>
            <div class="alert-content">
                <div class="content content-file">
                    <span class="content-des">Neo Name : </span><span class="content-msg">Bennyrepublic1234.test</span>
                </div>
                <div class="content content-verify">
                    <span class="content-des">Adress Resolver : </span><span class="content-msg warning-msg">( It is the official adress resolver , you have to confirm this adress resolver first to mapping your adress. )</span>
                    <div class="input-warp">
                        <input type="text" value="d80ed0bd889b503739a8cf783a8ddcb37a5a9979bde1c00701e894f519c36964" class="input-ico input-disabled">
                        <div class="icon-verify"></div>
                        <div class="btn-verify-warp" style="display:none;">
                            <button class="btn btn-nel btn-verify btn-disabled">Confirm</button>
                        </div>
                    </div>                    
                </div>
                <div class="content content-verify">
                    <span class="content-des">Adress Mapping : </span><span class="content-msg"></span>
                    <div class="input-warp">
                        <input type="text" value="d80ed0bd889b503739a8cf783a8ddcb37a5a9979bde1c00701e894f519c36964" class="input-ico input-disabled">
                        <div class="icon-verify" style="display:none;"></div>
                        <div class="btn-verify-warp">
                            <button class="btn btn-nel btn-verify btn-disabled">Confirm</button>
                        </div>
                    </div>  
                </div>
            </div>
            <div class="alert-close">
                <span class="glyphicon glyphicon-remove-circle" aria-hidden="true"></span>
            </div>
        </div>
    </div>
</template>
<style lang="less">
.alert-box {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  z-index: 1030;
  .alert-warp {
    background: #fff;
    padding: 30px 50px 0 50px;
    width: 1000px;
    color: #333;
    position: absolute;
    top: 50%;
    left: 50%;
    -moz-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    border-radius: 5px;
    .alert-title {
      font-family: PingFangSC-Medium;
      font-size: 20px;
      margin-bottom: 50px;
    }
    .alert-content {
      font-family: PingFangSC-Medium;
      font-size: 16px;
      line-height: 16px;
      .content {
        margin-bottom: 50px;
        .warning-msg {
          font-family: PingFangSC-Regular;
          font-size: 14px;
          color: #ff6a6a;
          line-height: 16px;
        }
        .input-warp {
          margin-top: 20px;
          .input-ico {
            padding: 20px;
            height: 56px;
            width: 700px;
            margin-bottom: 0;
            vertical-align: middle;
          }
          .input-disabled {
            cursor: not-allowed;
            background: #ddd;
          }
          .icon-verify {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background: #2dde4f;
            display: inline-block;
            vertical-align: middle;
            margin-left: 20px;
          }
          .btn-verify-warp {
            margin-left: 20px;
            display: inline-block;
            vertical-align: middle;
            .btn-verify {
              padding: 19px 35px;
            }
            .btn-disabled {
              background: #77bcf6;
              cursor: not-allowed;
            }
          }
        }
      }
    }
    .alert-close {
      position: absolute;
      top: 20px;
      right: 20px;
      width: 30px;
      height: 30px;
      font-size: 30px;
    }
  }
}
</style>
