window.config={
    logo: 'https://img2.imgtp.com/2024/03/11/YzU8iDJp.png', // 网站logo
    title:"Kaws云加速器", // 网站标题
    host:"https://kaaawsss.cloud/", // 后端接口地址
    storeHome: {
        title: '选择最适合你的订阅计划', // 套餐页标题
        description: '若您已购买订阅且当前未过期，再次购买相同套餐将在原过期时间上追加时长，购买其他套餐则对原有订阅进行折抵' // 套餐页描述
    },
    SignPage: {
        title: '突破网络限制，牢记官网kaws.top', // 登录页标题
        desc1: 'High-speed network covering the whole world', // 登录页描述1
        desc2: 'Your high-speed journey starts with AirBus', // 登录页描述2
        inviteCodeEdit: false, // 是否允许用户修改邀请码
    },
    homeClient: {
        display: true, // 是否显示客户端下载教程卡片
        clients: [
            {
                key: 'windows',
                title: 'Windows客户端',
                icon: 'ri:windows-fill',
                downloadLink: 'https://download.xdddd.xyz/kawscloudsetup4.1.10.exe', // Windows客户端下载地址
                knowledgeLink: '/dashboard/knowledge/9', // 使用教程地址
            },
            {
                key: 'mac',
                title: 'Mac客户端',
                icon: 'ri:finder-fill',
                downloadLink: 'https://download.xdddd.xyz/kawscloud-4.1.10.dmg', // Mac客户端下载地址
                knowledgeLink: '/dashboard/knowledge/13', // 使用教程地址
            },
            {
                key: 'android',
                title: 'Android客户端',
                icon: 'ri:android-fill',
                downloadLink: 'https://download.xdddd.xyz/kaws.apk', // Android客户端下载地址
                knowledgeLink: '/dashboard/knowledge/8', // 使用教程地址
            },
            {
                key: 'ios',
                title: 'iOS客户端',
                icon: 'ri:apple-fill',
                downloadLink: null
                knowledgeLink: '/dashboard/knowledge/1', // 使用教程地址
            },
            {
                key: 'knowledge',
                title: '查看其它教程',
                icon: 'ri:questionnaire-fill',
                downloadLink: null,
                knowledgeLink: '/dashboard/knowledge', // 使用教程地址
            }
        ],
    },
    homeBanner: {
        display: true, // 是否显示首页横幅
        title: '邀请好友，共享优惠', // 首页banner标题
        link: '/dashboard/invite', // 首页banner链接，站内链接
        btnText: '立即邀请', // 首页banner按钮文字
        element: null
        bgImg: 'https://vip.helloimg.com/i/2024/05/31/6659c33424927.jpg', // 首页banner背景图片
    }
}
