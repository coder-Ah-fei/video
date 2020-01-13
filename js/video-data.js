var videoData = [
    {
        moviesId: 'reckoning',// 电影标识
        moviesNmae: '《复仇者联盟4：终局之战》', // 电影名字
        moviesMessage: "<h2>《了断》</h2>\n" +
            "\n" +
            "<p>类型：CG&nbsp;地区：美国&nbsp;年份：2019&nbsp;</p>\n" +
            "\n" +
            "<p>主演：瓦罗克&nbsp;希尔瓦娜斯&nbsp;曹操&nbsp;刘备&nbsp;卡卡罗特&nbsp;</p>\n" +
            "\n" +
            "<p>导演：暴雪</a>&nbsp;</p>\n" +
            "\n" +
            "<p>更新：2020-01-06</p>\n" +
            "\n" +
            "<p>简介：《复仇者联盟4：终局之战》是由美国漫威影业公司出品的科幻电影，由安东尼·罗素和乔·罗素联合执导，小罗伯特·唐尼、克里斯·埃文斯、克里斯·海姆斯沃斯、马克·鲁法洛、斯嘉丽·约翰逊、杰瑞米·雷纳、保罗·路德、布丽·拉尔森、唐·钱德尔、凯伦·吉兰、乔什·布洛林等主演。</p>\n", // 电影信息介绍
        moviesDetail: '', // 电影剧情简介
        cover: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D500/sign=2f8bbc1510178a82ca3c7fa0c601737f/622762d0f703918f0d417b135f3d269758eec453.jpg', //电影立式封面
        poster: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D500/sign=2f8bbc1510178a82ca3c7fa0c601737f/622762d0f703918f0d417b135f3d269758eec453.jpg', //电影视频的封面
        moviesSrc: 'https://blz-videos.nosdn.127.net/1/World%20of%20Warcraft/Saurfangs_Decision_zhCN.mp4', //电影视频资源
        moviesDetail: '来自泰坦星的灭霸（乔什·布洛林饰）为了解决宇宙资源匮乏、人口暴增的问题，集齐6颗无限宝石，一个响指让全宇宙生命公平随机的减半。宇宙由于疯狂的泰坦灭霸的行动而变得满目疮痍，在泰坦星与灭霸决战失败的钢铁侠（小罗伯特·唐尼饰）孤身一人漂流宇宙，迷失在量子领域的蚁人（保罗·路德饰）意外回到现实世界，他的出现为幸存的复仇者们点燃了希望。无论前方将遭遇怎样的后果，幸存的超级英雄们都必须在剩余盟友的帮助下再一次集结，以逆转灭霸的所作所为，彻底恢复宇宙的秩序。', // 电影简介
        actorList: [ // 演员
            {
                src: 'https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D82%2C102%2C50/sign=d704b7e43712b31bc7399e69e0250e48/9345d688d43f8794004b638ddc1b0ef41ad53ad8.jpg',// 演员头像
                name: '小罗伯特·唐尼 饰 托尼·史塔克'// 演员名和角色名
            },
            {
                src: 'https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D82%2C102%2C50/sign=d71571bd6b380cd7e64bf1adc7799506/f603918fa0ec08fa36569daa57ee3d6d55fbda6d.jpg',// 演员头像
                name: '克里斯·埃文斯 饰 史蒂夫·罗杰斯'// 演员名和角色名
            },
            {
                src: 'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D82%2C102%2C50/sign=f385f9f84d166d22382246d4201e31c5/eac4b74543a98226698255148482b9014a90eb46.jpg',// 演员头像
                name: '克里斯·海姆斯沃斯 饰 索尔·奥丁森'// 演员名和角色名
            },
            {
                src: 'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D82%2C102%2C50/sign=7d2a4afcf31986184112bcc42cd01641/8694a4c27d1ed21bc0c5e178a66eddc451da3f1b.jpg',// 演员头像
                name: '乔什·布洛林 饰 灭霸'// 演员名和角色名
            },
            {
                src: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/crop%3D0%2C0%2C1200%2C1200%3Bh%3D480%3Bq%3D70/sign=ca4f4733701ed21b6d8674a5905ef1f4/21a4462309f79052d5f991ff01f3d7ca7acbd509.jpg',// 演员头像
                name: '斯嘉丽·约翰逊 饰 娜塔莎·罗曼诺夫'// 演员名和角色名
            },
        ],
        commentList: [ // 电影评论
            {
                name: 'monotonous', // 评论人name
                avatarPic: 'images/user.jpg', // 评论人 头像
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。', // 评论内容
            },
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
        ],

    },
    {
        moviesId: 'safe-haven',
        moviesNmae: '《避风港》',
        poster: 'images/safe-haven.jpg',
        // moviesSrc: 'movies/safe-haven.mp4',
        moviesSrc: 'https://blz-videos.nosdn.127.net/1/World%20of%20Warcraft/wx8b.mp4',
        moviesDetail: '瓦罗克·萨鲁法尔意识到，要想捍卫部落的未来，就必须去寻找部落曾经的领袖。',
        commentList: [
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
        ],

    },
    {
        moviesId: 'terror-of-darkshore',
        moviesNmae: '《黑海岸》',
        poster: 'images/terror-of-darkshore.jpg',
        // moviesSrc: 'movies/terror-of-darkshore.mp4',
        moviesSrc: 'https://blz-videos.nosdn.127.net/1/World%20of%20Warcraft/157c165f1938fda17911ab782d127613td.mp4',
        moviesDetail: '唯一的巨魔生还者向纳萨诺斯·凋零者讲述了一个可怕的故事：他的物资运输队伍被难以言喻的自然之力袭击了。',
        commentList: [
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
        ],

    },
    {
        moviesId: 'old-soldier',
        moviesNmae: '《老兵》',
        poster: 'images/old-soldier.jpg',
        // moviesSrc: 'movies/old-soldier.mp4',
        moviesSrc: 'https://blz-videos.nosdn.127.net/1/World%20of%20Warcraft/WOW_SAURFANG_zhCN_0803CJ.mp4',
        moviesDetail: '战争的怒火席卷了整个艾泽拉斯，但部落的传奇战士瓦罗克·萨鲁法尔却并不想加入战斗。在经历了一辈子的戎马生涯后，他所有亲近的人都已在战火中逝去，甚至包括他的爱子。在这场足以决定部落命运的战争的前夜，这名老兵必须做出选择：是否要永远放下他手中的战斧。',
        commentList: [
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
        ],

    },
    {
        moviesId: 'lost-honor',
        moviesNmae: '《失落的荣耀》',
        poster: 'images/lost-honor.jpg',
        // moviesSrc: 'movies/lost-honor.mp4',
        moviesSrc: 'https://blz-videos.nosdn.127.net/1/World%20of%20Warcraft/5f227269c9a23789cf1f0ad414554981lon.mp4',
        moviesDetail: '在洛丹伦一役之后，萨鲁法尔大王被俘并被关进了暴风城监狱。安度因·乌瑞恩前去探视这位老将，希望摸清部落的阴谋。',
        commentList: [
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
        ],

    },
    {
        moviesId: 'warbringers-azshara',
        moviesNmae: '《战争使者：艾萨拉》',
        poster: 'images/warbringers-azshara.jpg',
        // moviesSrc: 'movies/warbringers-azshara.mp4',
        moviesSrc: 'https://blz-videos.nosdn.127.net/1/World%20of%20Warcraft/WOW13211_Warbringers_Azshara_NE7X9.mp4',
        moviesDetail: '一万年前，大分裂使艾泽拉斯的土地分崩离析。大陆裂开，海水涌入，上层精灵以及他们的女王艾萨拉都无法逃离葬身海底的命运。可是，她在深渊之中，发现的并不是湮灭……而是机遇。',
        commentList: [
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
        ],

    },
    {
        moviesId: 'warbringers-sylvanas',
        moviesNmae: '《战争使者：希尔瓦娜斯》',
        poster: 'images/warbringers-sylvanas.jpg',
        // moviesSrc: 'movies/warbringers-sylvanas.mp4',
        moviesSrc: 'https://blz-videos.nosdn.127.net/1/World%20of%20Warcraft/WOW-Warbringers_Sylvanas_Plus_July31.mp4',
        moviesDetail: '部落大酋长希尔瓦娜斯率军战胜了达纳苏斯的暗夜精灵，然后继续推进，想要征服他们的家园：世界之树泰达希尔。但她遇见了一名濒死的年轻游侠，这名游侠质疑着她的动机，还告诉她，她是无法赢得这场战争的，因为这场战争的本质是对生命宣战。这导致希尔瓦娜斯做出了一个决定，这个决定会改变整个艾泽拉斯的历史进程。',
        commentList: [
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
        ],

    },
    {
        moviesId: 'reckoning',// 电影标识
        moviesNmae: '《复仇者联盟4：终局之战》', // 电影名字
        moviesMessage: "<h2>《了断》</h2>\n" +
            "\n" +
            "<p>类型：CG&nbsp;地区：美国&nbsp;年份：2019&nbsp;</p>\n" +
            "\n" +
            "<p>主演：瓦罗克&nbsp;希尔瓦娜斯&nbsp;曹操&nbsp;刘备&nbsp;卡卡罗特&nbsp;</p>\n" +
            "\n" +
            "<p>导演：暴雪</a>&nbsp;</p>\n" +
            "\n" +
            "<p>更新：2020-01-06</p>\n" +
            "\n" +
            "<p>简介：《复仇者联盟4：终局之战》是由美国漫威影业公司出品的科幻电影，由安东尼·罗素和乔·罗素联合执导，小罗伯特·唐尼、克里斯·埃文斯、克里斯·海姆斯沃斯、马克·鲁法洛、斯嘉丽·约翰逊、杰瑞米·雷纳、保罗·路德、布丽·拉尔森、唐·钱德尔、凯伦·吉兰、乔什·布洛林等主演。</p>\n", // 电影信息介绍
        moviesDetail: '', // 电影剧情简介
        cover: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D500/sign=2f8bbc1510178a82ca3c7fa0c601737f/622762d0f703918f0d417b135f3d269758eec453.jpg', //电影立式封面
        poster: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D500/sign=2f8bbc1510178a82ca3c7fa0c601737f/622762d0f703918f0d417b135f3d269758eec453.jpg', //电影视频的封面
        moviesSrc: 'https://blz-videos.nosdn.127.net/1/World%20of%20Warcraft/Saurfangs_Decision_zhCN.mp4', //电影视频资源
        moviesDetail: '来自泰坦星的灭霸（乔什·布洛林饰）为了解决宇宙资源匮乏、人口暴增的问题，集齐6颗无限宝石，一个响指让全宇宙生命公平随机的减半。宇宙由于疯狂的泰坦灭霸的行动而变得满目疮痍，在泰坦星与灭霸决战失败的钢铁侠（小罗伯特·唐尼饰）孤身一人漂流宇宙，迷失在量子领域的蚁人（保罗·路德饰）意外回到现实世界，他的出现为幸存的复仇者们点燃了希望。无论前方将遭遇怎样的后果，幸存的超级英雄们都必须在剩余盟友的帮助下再一次集结，以逆转灭霸的所作所为，彻底恢复宇宙的秩序。', // 电影简介
        actorList: [ // 演员
            {
                src: 'https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D82%2C102%2C50/sign=d704b7e43712b31bc7399e69e0250e48/9345d688d43f8794004b638ddc1b0ef41ad53ad8.jpg',// 演员头像
                name: '小罗伯特·唐尼 饰 托尼·史塔克'// 演员名和角色名
            },
            {
                src: 'https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D82%2C102%2C50/sign=d71571bd6b380cd7e64bf1adc7799506/f603918fa0ec08fa36569daa57ee3d6d55fbda6d.jpg',// 演员头像
                name: '克里斯·埃文斯 饰 史蒂夫·罗杰斯'// 演员名和角色名
            },
            {
                src: 'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D82%2C102%2C50/sign=f385f9f84d166d22382246d4201e31c5/eac4b74543a98226698255148482b9014a90eb46.jpg',// 演员头像
                name: '克里斯·海姆斯沃斯 饰 索尔·奥丁森'// 演员名和角色名
            },
            {
                src: 'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D82%2C102%2C50/sign=7d2a4afcf31986184112bcc42cd01641/8694a4c27d1ed21bc0c5e178a66eddc451da3f1b.jpg',// 演员头像
                name: '乔什·布洛林 饰 灭霸'// 演员名和角色名
            },
            {
                src: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/crop%3D0%2C0%2C1200%2C1200%3Bh%3D480%3Bq%3D70/sign=ca4f4733701ed21b6d8674a5905ef1f4/21a4462309f79052d5f991ff01f3d7ca7acbd509.jpg',// 演员头像
                name: '斯嘉丽·约翰逊 饰 娜塔莎·罗曼诺夫'// 演员名和角色名
            },
        ],
        commentList: [ // 电影评论
            {
                name: 'monotonous', // 评论人name
                avatarPic: 'images/user.jpg', // 评论人 头像
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。', // 评论内容
            },
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
        ],

    },
    {
        moviesId: 'reckoning',// 电影标识
        moviesNmae: '《复仇者联盟4：终局之战》', // 电影名字
        moviesMessage: "<h2>《了断》</h2>\n" +
            "\n" +
            "<p>类型：CG&nbsp;地区：美国&nbsp;年份：2019&nbsp;</p>\n" +
            "\n" +
            "<p>主演：瓦罗克&nbsp;希尔瓦娜斯&nbsp;曹操&nbsp;刘备&nbsp;卡卡罗特&nbsp;</p>\n" +
            "\n" +
            "<p>导演：暴雪</a>&nbsp;</p>\n" +
            "\n" +
            "<p>更新：2020-01-06</p>\n" +
            "\n" +
            "<p>简介：《复仇者联盟4：终局之战》是由美国漫威影业公司出品的科幻电影，由安东尼·罗素和乔·罗素联合执导，小罗伯特·唐尼、克里斯·埃文斯、克里斯·海姆斯沃斯、马克·鲁法洛、斯嘉丽·约翰逊、杰瑞米·雷纳、保罗·路德、布丽·拉尔森、唐·钱德尔、凯伦·吉兰、乔什·布洛林等主演。</p>\n", // 电影信息介绍
        moviesDetail: '', // 电影剧情简介
        cover: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D500/sign=2f8bbc1510178a82ca3c7fa0c601737f/622762d0f703918f0d417b135f3d269758eec453.jpg', //电影立式封面
        poster: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D500/sign=2f8bbc1510178a82ca3c7fa0c601737f/622762d0f703918f0d417b135f3d269758eec453.jpg', //电影视频的封面
        moviesSrc: 'https://blz-videos.nosdn.127.net/1/World%20of%20Warcraft/Saurfangs_Decision_zhCN.mp4', //电影视频资源
        moviesDetail: '来自泰坦星的灭霸（乔什·布洛林饰）为了解决宇宙资源匮乏、人口暴增的问题，集齐6颗无限宝石，一个响指让全宇宙生命公平随机的减半。宇宙由于疯狂的泰坦灭霸的行动而变得满目疮痍，在泰坦星与灭霸决战失败的钢铁侠（小罗伯特·唐尼饰）孤身一人漂流宇宙，迷失在量子领域的蚁人（保罗·路德饰）意外回到现实世界，他的出现为幸存的复仇者们点燃了希望。无论前方将遭遇怎样的后果，幸存的超级英雄们都必须在剩余盟友的帮助下再一次集结，以逆转灭霸的所作所为，彻底恢复宇宙的秩序。', // 电影简介
        actorList: [ // 演员
            {
                src: 'https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D82%2C102%2C50/sign=d704b7e43712b31bc7399e69e0250e48/9345d688d43f8794004b638ddc1b0ef41ad53ad8.jpg',// 演员头像
                name: '小罗伯特·唐尼 饰 托尼·史塔克'// 演员名和角色名
            },
            {
                src: 'https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D82%2C102%2C50/sign=d71571bd6b380cd7e64bf1adc7799506/f603918fa0ec08fa36569daa57ee3d6d55fbda6d.jpg',// 演员头像
                name: '克里斯·埃文斯 饰 史蒂夫·罗杰斯'// 演员名和角色名
            },
            {
                src: 'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D82%2C102%2C50/sign=f385f9f84d166d22382246d4201e31c5/eac4b74543a98226698255148482b9014a90eb46.jpg',// 演员头像
                name: '克里斯·海姆斯沃斯 饰 索尔·奥丁森'// 演员名和角色名
            },
            {
                src: 'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D82%2C102%2C50/sign=7d2a4afcf31986184112bcc42cd01641/8694a4c27d1ed21bc0c5e178a66eddc451da3f1b.jpg',// 演员头像
                name: '乔什·布洛林 饰 灭霸'// 演员名和角色名
            },
            {
                src: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/crop%3D0%2C0%2C1200%2C1200%3Bh%3D480%3Bq%3D70/sign=ca4f4733701ed21b6d8674a5905ef1f4/21a4462309f79052d5f991ff01f3d7ca7acbd509.jpg',// 演员头像
                name: '斯嘉丽·约翰逊 饰 娜塔莎·罗曼诺夫'// 演员名和角色名
            },
        ],
        commentList: [ // 电影评论
            {
                name: 'monotonous', // 评论人name
                avatarPic: 'images/user.jpg', // 评论人 头像
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。', // 评论内容
            },
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
        ],

    },
    {
        moviesId: 'reckoning',// 电影标识
        moviesNmae: '《复仇者联盟4：终局之战》', // 电影名字
        moviesMessage: "<h2>《了断》</h2>\n" +
            "\n" +
            "<p>类型：CG&nbsp;地区：美国&nbsp;年份：2019&nbsp;</p>\n" +
            "\n" +
            "<p>主演：瓦罗克&nbsp;希尔瓦娜斯&nbsp;曹操&nbsp;刘备&nbsp;卡卡罗特&nbsp;</p>\n" +
            "\n" +
            "<p>导演：暴雪</a>&nbsp;</p>\n" +
            "\n" +
            "<p>更新：2020-01-06</p>\n" +
            "\n" +
            "<p>简介：《复仇者联盟4：终局之战》是由美国漫威影业公司出品的科幻电影，由安东尼·罗素和乔·罗素联合执导，小罗伯特·唐尼、克里斯·埃文斯、克里斯·海姆斯沃斯、马克·鲁法洛、斯嘉丽·约翰逊、杰瑞米·雷纳、保罗·路德、布丽·拉尔森、唐·钱德尔、凯伦·吉兰、乔什·布洛林等主演。</p>\n", // 电影信息介绍
        moviesDetail: '', // 电影剧情简介
        cover: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D500/sign=2f8bbc1510178a82ca3c7fa0c601737f/622762d0f703918f0d417b135f3d269758eec453.jpg', //电影立式封面
        poster: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D500/sign=2f8bbc1510178a82ca3c7fa0c601737f/622762d0f703918f0d417b135f3d269758eec453.jpg', //电影视频的封面
        moviesSrc: 'https://blz-videos.nosdn.127.net/1/World%20of%20Warcraft/Saurfangs_Decision_zhCN.mp4', //电影视频资源
        moviesDetail: '来自泰坦星的灭霸（乔什·布洛林饰）为了解决宇宙资源匮乏、人口暴增的问题，集齐6颗无限宝石，一个响指让全宇宙生命公平随机的减半。宇宙由于疯狂的泰坦灭霸的行动而变得满目疮痍，在泰坦星与灭霸决战失败的钢铁侠（小罗伯特·唐尼饰）孤身一人漂流宇宙，迷失在量子领域的蚁人（保罗·路德饰）意外回到现实世界，他的出现为幸存的复仇者们点燃了希望。无论前方将遭遇怎样的后果，幸存的超级英雄们都必须在剩余盟友的帮助下再一次集结，以逆转灭霸的所作所为，彻底恢复宇宙的秩序。', // 电影简介
        actorList: [ // 演员
            {
                src: 'https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D82%2C102%2C50/sign=d704b7e43712b31bc7399e69e0250e48/9345d688d43f8794004b638ddc1b0ef41ad53ad8.jpg',// 演员头像
                name: '小罗伯特·唐尼 饰 托尼·史塔克'// 演员名和角色名
            },
            {
                src: 'https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D82%2C102%2C50/sign=d71571bd6b380cd7e64bf1adc7799506/f603918fa0ec08fa36569daa57ee3d6d55fbda6d.jpg',// 演员头像
                name: '克里斯·埃文斯 饰 史蒂夫·罗杰斯'// 演员名和角色名
            },
            {
                src: 'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D82%2C102%2C50/sign=f385f9f84d166d22382246d4201e31c5/eac4b74543a98226698255148482b9014a90eb46.jpg',// 演员头像
                name: '克里斯·海姆斯沃斯 饰 索尔·奥丁森'// 演员名和角色名
            },
            {
                src: 'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D82%2C102%2C50/sign=7d2a4afcf31986184112bcc42cd01641/8694a4c27d1ed21bc0c5e178a66eddc451da3f1b.jpg',// 演员头像
                name: '乔什·布洛林 饰 灭霸'// 演员名和角色名
            },
            {
                src: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/crop%3D0%2C0%2C1200%2C1200%3Bh%3D480%3Bq%3D70/sign=ca4f4733701ed21b6d8674a5905ef1f4/21a4462309f79052d5f991ff01f3d7ca7acbd509.jpg',// 演员头像
                name: '斯嘉丽·约翰逊 饰 娜塔莎·罗曼诺夫'// 演员名和角色名
            },
        ],
        commentList: [ // 电影评论
            {
                name: 'monotonous', // 评论人name
                avatarPic: 'images/user.jpg', // 评论人 头像
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。', // 评论内容
            },
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
        ],

    },
    {
        moviesId: 'reckoning',// 电影标识
        moviesNmae: '《复仇者联盟4：终局之战》', // 电影名字
        moviesMessage: "<h2>《了断》</h2>\n" +
            "\n" +
            "<p>类型：CG&nbsp;地区：美国&nbsp;年份：2019&nbsp;</p>\n" +
            "\n" +
            "<p>主演：瓦罗克&nbsp;希尔瓦娜斯&nbsp;曹操&nbsp;刘备&nbsp;卡卡罗特&nbsp;</p>\n" +
            "\n" +
            "<p>导演：暴雪</a>&nbsp;</p>\n" +
            "\n" +
            "<p>更新：2020-01-06</p>\n" +
            "\n" +
            "<p>简介：《复仇者联盟4：终局之战》是由美国漫威影业公司出品的科幻电影，由安东尼·罗素和乔·罗素联合执导，小罗伯特·唐尼、克里斯·埃文斯、克里斯·海姆斯沃斯、马克·鲁法洛、斯嘉丽·约翰逊、杰瑞米·雷纳、保罗·路德、布丽·拉尔森、唐·钱德尔、凯伦·吉兰、乔什·布洛林等主演。</p>\n", // 电影信息介绍
        moviesDetail: '', // 电影剧情简介
        cover: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D500/sign=2f8bbc1510178a82ca3c7fa0c601737f/622762d0f703918f0d417b135f3d269758eec453.jpg', //电影立式封面
        poster: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D500/sign=2f8bbc1510178a82ca3c7fa0c601737f/622762d0f703918f0d417b135f3d269758eec453.jpg', //电影视频的封面
        moviesSrc: 'https://blz-videos.nosdn.127.net/1/World%20of%20Warcraft/Saurfangs_Decision_zhCN.mp4', //电影视频资源
        moviesDetail: '来自泰坦星的灭霸（乔什·布洛林饰）为了解决宇宙资源匮乏、人口暴增的问题，集齐6颗无限宝石，一个响指让全宇宙生命公平随机的减半。宇宙由于疯狂的泰坦灭霸的行动而变得满目疮痍，在泰坦星与灭霸决战失败的钢铁侠（小罗伯特·唐尼饰）孤身一人漂流宇宙，迷失在量子领域的蚁人（保罗·路德饰）意外回到现实世界，他的出现为幸存的复仇者们点燃了希望。无论前方将遭遇怎样的后果，幸存的超级英雄们都必须在剩余盟友的帮助下再一次集结，以逆转灭霸的所作所为，彻底恢复宇宙的秩序。', // 电影简介
        actorList: [ // 演员
            {
                src: 'https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D82%2C102%2C50/sign=d704b7e43712b31bc7399e69e0250e48/9345d688d43f8794004b638ddc1b0ef41ad53ad8.jpg',// 演员头像
                name: '小罗伯特·唐尼 饰 托尼·史塔克'// 演员名和角色名
            },
            {
                src: 'https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D82%2C102%2C50/sign=d71571bd6b380cd7e64bf1adc7799506/f603918fa0ec08fa36569daa57ee3d6d55fbda6d.jpg',// 演员头像
                name: '克里斯·埃文斯 饰 史蒂夫·罗杰斯'// 演员名和角色名
            },
            {
                src: 'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D82%2C102%2C50/sign=f385f9f84d166d22382246d4201e31c5/eac4b74543a98226698255148482b9014a90eb46.jpg',// 演员头像
                name: '克里斯·海姆斯沃斯 饰 索尔·奥丁森'// 演员名和角色名
            },
            {
                src: 'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D82%2C102%2C50/sign=7d2a4afcf31986184112bcc42cd01641/8694a4c27d1ed21bc0c5e178a66eddc451da3f1b.jpg',// 演员头像
                name: '乔什·布洛林 饰 灭霸'// 演员名和角色名
            },
            {
                src: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/crop%3D0%2C0%2C1200%2C1200%3Bh%3D480%3Bq%3D70/sign=ca4f4733701ed21b6d8674a5905ef1f4/21a4462309f79052d5f991ff01f3d7ca7acbd509.jpg',// 演员头像
                name: '斯嘉丽·约翰逊 饰 娜塔莎·罗曼诺夫'// 演员名和角色名
            },
        ],
        commentList: [ // 电影评论
            {
                name: 'monotonous', // 评论人name
                avatarPic: 'images/user.jpg', // 评论人 头像
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。', // 评论内容
            },
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
        ],

    },
    {
        moviesId: 'reckoning',// 电影标识
        moviesNmae: '《复仇者联盟4：终局之战》', // 电影名字
        moviesMessage: "<h2>《了断》</h2>\n" +
            "\n" +
            "<p>类型：CG&nbsp;地区：美国&nbsp;年份：2019&nbsp;</p>\n" +
            "\n" +
            "<p>主演：瓦罗克&nbsp;希尔瓦娜斯&nbsp;曹操&nbsp;刘备&nbsp;卡卡罗特&nbsp;</p>\n" +
            "\n" +
            "<p>导演：暴雪</a>&nbsp;</p>\n" +
            "\n" +
            "<p>更新：2020-01-06</p>\n" +
            "\n" +
            "<p>简介：《复仇者联盟4：终局之战》是由美国漫威影业公司出品的科幻电影，由安东尼·罗素和乔·罗素联合执导，小罗伯特·唐尼、克里斯·埃文斯、克里斯·海姆斯沃斯、马克·鲁法洛、斯嘉丽·约翰逊、杰瑞米·雷纳、保罗·路德、布丽·拉尔森、唐·钱德尔、凯伦·吉兰、乔什·布洛林等主演。</p>\n", // 电影信息介绍
        moviesDetail: '', // 电影剧情简介
        cover: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D500/sign=2f8bbc1510178a82ca3c7fa0c601737f/622762d0f703918f0d417b135f3d269758eec453.jpg', //电影立式封面
        poster: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D500/sign=2f8bbc1510178a82ca3c7fa0c601737f/622762d0f703918f0d417b135f3d269758eec453.jpg', //电影视频的封面
        moviesSrc: 'https://blz-videos.nosdn.127.net/1/World%20of%20Warcraft/Saurfangs_Decision_zhCN.mp4', //电影视频资源
        moviesDetail: '来自泰坦星的灭霸（乔什·布洛林饰）为了解决宇宙资源匮乏、人口暴增的问题，集齐6颗无限宝石，一个响指让全宇宙生命公平随机的减半。宇宙由于疯狂的泰坦灭霸的行动而变得满目疮痍，在泰坦星与灭霸决战失败的钢铁侠（小罗伯特·唐尼饰）孤身一人漂流宇宙，迷失在量子领域的蚁人（保罗·路德饰）意外回到现实世界，他的出现为幸存的复仇者们点燃了希望。无论前方将遭遇怎样的后果，幸存的超级英雄们都必须在剩余盟友的帮助下再一次集结，以逆转灭霸的所作所为，彻底恢复宇宙的秩序。', // 电影简介
        actorList: [ // 演员
            {
                src: 'https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D82%2C102%2C50/sign=d704b7e43712b31bc7399e69e0250e48/9345d688d43f8794004b638ddc1b0ef41ad53ad8.jpg',// 演员头像
                name: '小罗伯特·唐尼 饰 托尼·史塔克'// 演员名和角色名
            },
            {
                src: 'https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D82%2C102%2C50/sign=d71571bd6b380cd7e64bf1adc7799506/f603918fa0ec08fa36569daa57ee3d6d55fbda6d.jpg',// 演员头像
                name: '克里斯·埃文斯 饰 史蒂夫·罗杰斯'// 演员名和角色名
            },
            {
                src: 'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D82%2C102%2C50/sign=f385f9f84d166d22382246d4201e31c5/eac4b74543a98226698255148482b9014a90eb46.jpg',// 演员头像
                name: '克里斯·海姆斯沃斯 饰 索尔·奥丁森'// 演员名和角色名
            },
            {
                src: 'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D82%2C102%2C50/sign=7d2a4afcf31986184112bcc42cd01641/8694a4c27d1ed21bc0c5e178a66eddc451da3f1b.jpg',// 演员头像
                name: '乔什·布洛林 饰 灭霸'// 演员名和角色名
            },
            {
                src: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/crop%3D0%2C0%2C1200%2C1200%3Bh%3D480%3Bq%3D70/sign=ca4f4733701ed21b6d8674a5905ef1f4/21a4462309f79052d5f991ff01f3d7ca7acbd509.jpg',// 演员头像
                name: '斯嘉丽·约翰逊 饰 娜塔莎·罗曼诺夫'// 演员名和角色名
            },
        ],
        commentList: [ // 电影评论
            {
                name: 'monotonous', // 评论人name
                avatarPic: 'images/user.jpg', // 评论人 头像
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。', // 评论内容
            },
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
            {
                name: 'monotonous',
                avatarPic: 'images/user.jpg',
                comment: '人生，就是喜剧，就是一场1000分的游戏。千万别哭，不然那个迈着正步去赴死的犹太人会笑话你的。',
            },
        ],

    },
];

function getVideoData(){
    return videoData;
}