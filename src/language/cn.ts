export default {
    language: {
        name: '中文'
    },
    navbar: {
        explorer: '浏览器',
        wallet: '钱包',
        mainnet: '主网',
        testnet: "测试网",
        logout: "退出",
        blockheight: "高度",
        toggle: "切换导航"
    },
    btn: {
        confirm: "提交",
        confirming: "提交中",
        reset: "重置",
        close: "关闭",
        transfer: "转账",
        switch: "切换",
        claim: "提取",
        claiming: "提取中",
        cancel: "取消",
        openauction: "开标",
        openingauction: "正在开标",
        bid: "竞标",
        getdomain: "领取域名",
        recoversgas: "领回竞拍金",
        gettingdomain: "域名领取中...",
        recoveringsgas: "竞拍金领回中...",
        receivedsgas: "已退回余额",
        receivednns: "已领取域名",
        newbid: "参加竞拍",
        viewmore: "查看更多",
        edit: "编辑",
        renewal: "续约",
        renewaling: "续约中",
        setOwner: "设置所有者",
        settingOwner: "设置所有者...",
        exchange: "兑换",
        exchanging: "兑换中",
        withdraw: "提取",
        topup: "充值",
        getGas: "索取Gas",
        gettingGas: "Gas领取中"
    },
    toast: {
        msg1: "登陆中...",
        msg2: "登陆成功...",
        msg3: "登陆失败，请重新尝试",
        msg4: "请输入正确的字符串"
    },
    login: {
        login: "登陆",
        title: "登陆你的钱包",
        selectplaceholder: "选择密钥存储库文件",
        selectbtn: "选择",
        passwordholder: "输入密码",
        loginbtn: "登陆",
        cutlinemsg: "或者",
        wifmsg: "从WIF字符串导入密钥",
        nep2msg: "从nep2字符串导入密钥"
    },
    wif: {
        title: "WIF 密钥",
        wifplaceholder: "输入您的密钥",
        back: "返回"
    },
    nep2: {
        title: "Nep2",
        placeholder: "输入您的Nep2",
        password: "输入密码"
    },
    generate: {
        generate: "新建",
        title: "创建一个新的钱包",
        name: "您的钱包名",
        password: "输入密码",
        passwordagain: "重复密码",
        nameempty: "钱包名不能为空",
        namepass: "验证通过",
        pwderrmsg1: "请输入至少8个字符的密码",
        pwderrmsg2: "至少使用一个字符和一个数字",
        pwderrmsg3: "请输入与上面相同的密码",
        createmsg: "您的密钥库文件已经创建。",
        downloadmsg: "你可以点击“下载”按钮来保存你的密钥库文件！",
        download: "下载",
        msg: "不要丢失它!",
        msg2: "如果你失去了它，它是无法恢复的。"
    },
    balance: {
        balance: "资产",
        title1: "NEO 资产余额",
        title2: "当前地址",
        title3: "可提取的GAS",
        title4: "资产",
        title5: "选择地址",
        title6: "选择 NEP6 钱包文件",
        msg1: "向自己的地址进行转账…",
        msg2: "等待交易确认…",
        msg3: "提取 GAS 中…",
        msg4: "Gas提取成功!",
        tips: "您可以通过点击此按钮来获取10Gas, 该按钮每24小时只能点击一次。",
        errmsg1: "操作失败！请您稍后再进行尝试！",
        errmsg2: "库存不足！请您稍后再进行尝试！",
        errmsg3: "数据异常！请您稍后再进行尝试！",
        successmsg: "操作成功！正在领取中，请稍等。"
    },
    transfer: {
        transfer: "转账",
        title1: "资产",
        title2: "地址",
        title3: "金额",
        title4: "历史记录",
        msg1: "您的地址不正确",
        send: "发送",
        from: "来自",
        to: "发往",
        details: "详情",
        placeholder: "请输入地址或域名",
        msg2: "您的交易已发送，请稍后查验",
        msg3: "交易失败",
        msg4: "您没有足够的utxo进行交易，请等待高度变化后再尝试下笔交易",
        msg5: "可用",
        waiting: "等待交易确认",
        errdomain: "该域名尚未映射地址",
        timeMsg: "有效期至: "
    },
    nns: {
        nns: "NNS",
        title1: "注册NEO域名",
        placeholder1: "输入名称",
        register: "注册",
        title2: "我的NEO域名",
        msg1: "活动已结束，谢谢大家的参与。",
        msg2: '我们将会在NNS在主网上线后的一个月内给予你主网钱包50NNC的奖励！',
        msg3: "注册你的域名并收集奖励。",
        err1: "当前域名已经被注册。",
        text1: "地址解析器",
        text2: "地址映射",
        text3: "域名到期时间",
        text4: "已到期",
        waiting: "等待NEO区块高度更新后，尝试刷新页面",
        edit: "编辑",
        alerttitle: "编辑信息",
        alerttitle1: "注册Neo域名",
        alerttitle2: "地址解析器",
        alerttitle3: "地址映射",
        alertmessage1: "这是官方地址解析器，你必须先确认此地址解析器才能映射你的地址。",
        alertmessage2: "请输入正确格式的地址",
    },
    setting: {
        settings: "设置",
        title1: "我的钱包地址",
        title2: "我的私钥",
        title3: "我的钱包文件",
        msg1: "这些信息非常重要。如果你失去了它，它可能会导致你的损失。",
        msg2: "保存您的密钥库文件并复制您的钱包地址和您的WIF。不要失去他们。",
        msg3: "设置密码 ",
        msg4: "输入你的密码",
        msg5: "创建钱包",
        btn1: "查看",
        btn2: "创建",
        btn3: "下载"
    },
    nnsneo: {
        auction: "域名竞拍",
        myneoname: "我的域名管理",
        bonus: "我的分红",
        tutorial: "竞拍教程"
    },
    auction: {
        title1: "域名竞拍",
        title2: "我的竞拍",
        title3: "竞拍信息",
        title4: "我的加价",
        title5: "竞拍进度",
        title6: "领取域名",
        title7: "领回竞拍金",
        entername: "请输入您想要的域名",
        nottopup: "合约升级中，充值功能暂停。",
        checkavailable: "开标功能已暂停，详情请见：", //此域名可以进行竞拍。
        checkbeing: "此域名正在进行竞拍。",
        checkformat: "域名长度需要在2～32个字节之间，只能是字母和数字。",
        checkbuyer: "此域名已经被其他人竞拍了。",
        sendingmsg: "正在发送交易，请耐心等待...",
        searchmsg: "按域名搜索",
        status: "状态",
        lastauctionprice: "当前最高价",
        currentbidder: "当前竞标人",
        opentime: "开标时间",
        fixedperiod: "确定期",
        randomperiod: "随机期",
        ended: "已结束",
        me: "我",
        other: "他人",
        buyer: "中标人",
        hammerprice: "成交价",
        acutiontitle: "竞拍",
        domain: "域名",
        highest: "当前最高价",
        raisebid: "加价",
        enterbid: "请输入您的价格",
        yourbidmsg: "您的累积竞价",
        mybidmsg: "我的累积竞价 ",
        mywillbid: "我的累积竞价将会是 ",
        price: "竞拍价: ",
        tips1: "注意 : 每次加价的最小值为 0.1 CGAS. 当您的累积竞价小于当前最高价时，该次出价不成功。",
        isAvailable: "可用",
        errmsg5: "您当前的账户仅拥有",
        errmsg1: "您当前的竞拍账户仅拥有",
        errmsg2: "CGAS.",
        errmsg4: "请输入正确的格式。",
        errmsg6: "您的出价低于最高出价的百分之十",
        nobalance: "余额不足，请充值",
        goback: "返回",
        waitmsg1: "未确认",
        waitmsg2: "您的加价将会在新区块生成之后被确认，请耐心等待...",
        getdomaintips: "注意 : 当您成功领取域名后，您可以在“我的域名管理”中进行编辑。",
        waitgetdomain: "您的操作将会在新区块生成之后被确认，请耐心等待...",
        fee: "手续费 ",
        remainingsgas: "可以领回的竞拍金 ",
        timetips1: "注意 : 如果确定期最后一天无人竞拍, 则确定期结束时间为该次竞拍的结束时间。",
        timetips2: "注意 : 竞拍即将进入随机期, 在随机期竞拍结束时间是不确定的，请尽早出价。",
        timetips3: "注意 : 在随机期竞拍结束时间是不确定的，请尽早出价。",
        bidstarttimemsg: "开标时间",
        endtimemsg: "确定期结束时间",
        randomtimemsg: "随机期开始时间",
        maxtimemsg: "随机期最大结束时间",
        tipsmsg1: "注意：竞拍开始之前，你需要知道2件事:",
        tipsmsg2: "竞拍所使用的资产是CGAS，并且您需要将CGAS充值进您的“竞拍账户”才能使用。",
        tipsmsg3: 'CGAS需要在“CGAS兑换”页面中用Gas1:1兑换获得, 然后使用“竞拍账户”中的充值功能，将CGAS充值进您的竞拍账户',
        titleaccount: "您的竞拍账户",
        withdraw: "提取",
        topup: "充值",
        from: "充值源: ",
        to: "提取到",
        topupamount: "充值金额",
        withdrawamount: "提取金额",
        amount: "金额",
        asset: "资产",
        errmsg3: "是可用的",
        tipsmsg4: "注意：当你在使用Gas进行充值时，充值进你的“拍卖账户”之前，他会自动转换成CGAS，整个过程需要两个区块的确认时间，请耐心等待...",
        yourbalance: "您的钱包账户",
        waiting: "等待",
        successwithdraw: "提取成功",
        successtop: "充值成功",
        successtopup: "充值成功!您的 ",
        successtopup2: " 个CGAS将会在2个区块被确认后进入您的竞拍账户!",
        successtopup3: " 个CGAS将会在1个区块被确认后进入您的竞拍账户!",
        successwithdraw2: " 个CGAS将会在1个区块后退回到您的地址!",
        failtopup: "充值失败 !你的Gas被转换成了CGAS",
        fail: "操作失败 !",
        auctionopen: "开标",
        domainname: "域名",
        successbid: "加价成功",
        failbid: "加价失败",
        failbid2: "此域名竞拍结束，本次加价未执行",
        successbid1: "您加价了 ",
        successbid2: " CGAS ，请等待区块确认。",
        successgetdomain: "域名领取成功",
        failgetdomain: "域名领取失败",
        tips: "注意: ",
        statustips: "确定期为竞拍第一阶段，时长为3天，此期间所有的出价都有效。当确定期最后一天有人出价时将触发最大时长为2天的随机期。否则竞拍即在确定期结束。",
        statustips2: "随机期为竞拍第二阶段，最大时长为2天，此期间任意一个出价都有可能触发该域名竞拍的结束从而出价无效，越靠后的出价触发结束的可能性越大，因此请尽早出价以免错失该域名。 ",
        teststatustips: "确定期为竞拍第一阶段，时长为3天，此期间所有的出价都有效。当确定期最后一天有人出价时将触发最大时长为2天的随机期。否则竞拍即在确定期结束。",
        teststatustips2: "随机期为竞拍第二阶段，最大时长为2天，此期间任意一个出价都有可能触发该域名竞拍的结束从而出价无效，越靠后的出价触发结束的可能性越大，因此请尽早出价以免错失该域名。 ",
        toptips: "注意: 当系统提示您充值成功之后，仍需要一个区块的时间来确认这笔操作，请耐心等待。",
        withdrawtips: "注意: 当系统提示您提取成功之后，仍需要一个区块的时间来确认这笔操作，请耐心等待。",
        getall: "全部",
        all: "全部",
        nodata: "没有查询到相关数据",
        Bidder: "出价者",
        Status: "状态",
    },
    exchange: {
        title: "CGAS兑换",
        tosgas: "兑换CGAS",
        togas: "兑换Gas",
        tips: "注意 : CGAS是一种NEP5资产，与NEO的GAS按照1：1比例绑定，它们之间可自由兑换。兑换需要一个区块的确认时间，请耐心等待。",
        spend: "我将花费 : ",
        receive: "我将获得 : ",
        warnmsg: "余额不足",
        waittitle: "交易记录",
        balance: "余额",
        amount: "金额"
    },
    myneoname: {
        title: "我的域名管理",
        resolver: "地址解析器",
        mapping: "地址映射",
        owner: "所有者地址",
        time: "域名到期时间",
        expiring: "即将过期",
        edittitle: "编辑信息",
        neoname: "域名",
        notconfigure: "未配置",
        expired: "已过期",
        tips: "注意 : 您需要在成功确认地址解析器之后，才能进行地址映射。"
    },
    bonus: {
        title: "分红记录",
        mydividend: "我的分红 ：",
        distribution: "奖金池快照 ：",
        mytotal: "我持有的NNC总量 ：",
        snapshot: "快照时间 ："
    },
    operation: {
        welcome: "欢迎!",
        title: "操作记录",
        tips: "注意：这些记录将会在您登出或关闭网页时清空。",
        waiting: "等待区块确认...",
        txid: "交易ID:",
        transfer: "转出",
        openauction: "开标",
        raisebid: "加价",
        exchange: "CGAS兑换",
        topup: "充值",
        withdraw: "提取",
        requestgas: "索取Gas",
        editdomain: "域名编辑",
        addrmapping: "地址映射:",
        addrresolver: "确认地址解析器: ",
        renew: "续约",
        domainTransfer: "域名转让:",
        getdomain: "领取域名",
        recover: "领回CGAS",
        gasclaim: "Gas提取",
        nodata: "没有数据",
        fail: "操作失败",
        waitinggas: "等待系统发送",
        sentok: "系统已发送"
    },
    notify: {
        utxo: "您的UTXO过于分散，将可能造成CGAS兑换失败（GAS也会损失），请先对自己的地址执行一次不小于兑换金额的转账，待转账操作生效后再行兑换",
        fee: "注意：当您的钱包有足够的Gas时，我们会自动添加一笔 0.00000001 Gas 的手续费，确保交易快速确认"
    },
    errormsg: {
        interface: "接口返回失败",
        noMoney: "cgas合约账户没有足够的utxo供您兑换gas,请稍后重试"
    }
}