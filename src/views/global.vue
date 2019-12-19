<template>

</template>

<script>

    export default {
        domain:'http://10.251.252.55:5000',
        // domain:'10.251.254.55',
        name: "global",
        userID: '',
        userName: '',
        email: '',
        password: '', // Just For Test
        userType: 'VISITOR',
        wordcloud_path: '',
        avatar: 'http://10.251.252.55:5000/static/photo/1576664428_img.png',
        collectList: [
            // {
            //     name: 'This is Paper Title One This is Paper Title One This is Paper Title One This is Paper Title One',
            //     year: '2020',
            //     author: {'郭婉如':'1', '蒙春怡':'2', '杨增锴':'3', '朱天乐':'4'},
            //     source_journal: {
            //         name: 'This is Paper Source',
            //         date: 2018,
            //     }
            // },
            // {
            //     name: 'This is Paper Title One',
            //     year: '2020',
            //     author: {'郭婉如':'1', '蒙春怡':'2', '杨增锴':'3', '朱天乐':'4'},
            //     source_journal: {
            //         name: 'This is Paper Source',
            //         date: 2019,
            //     }
            // },
        ],
        followList: [
            // {
            //     scid: 1005,
            //     name: '郭婉如',
            //     field: ['计算机'],
            //     mechanism: '北航',
            //     resultsnumber: 99,
            //     citedtimes: 98,
            // },
            // {
            //     scid: 1022,
            //     name: '蒙春怡蒙春怡',
            //     field: ['计算机计算机计算机'],
            //     mechanism: '北航北航北航北航北航',
            //     resultsnumber: 97,
            //     citedtimes: 96,
            // },
            // {
            //     scid: 1020,
            //     name: '杨增锴',
            //     field: ['计算机','软件'],
            //     mechanism: '北航',
            //     resultsnumber: 95,
            //     citedtimes: 94,
            // },
            // {
            //     scid: 1026,
            //     name: '朱天乐',
            //     field: ['计算机'],
            //     mechanism: '北航',
            //     resultsnumber: 93,
            //     citedtimes: 92,
            // }
        ],
        paperList: [
            // {
            //     name: 'This is Paper Title One',
            //     year: '2020',
            //     author: {'郭婉如':'1', '蒙春怡':'2', '杨增锴':'3', '朱天乐':'4'},
            //     source_journal: {
            //         name: 'This is Paper Source',
            //         date: 2018,
            //     }
            // },
            // {
            //     name: 'This is Paper Title One',
            //     year: '2020',
            //     author: {'郭婉如':'1', '蒙春怡':'2', '杨增锴':'3', '朱天乐':'4'},
            //     source_journal: {
            //         name: 'This is Paper Source',
            //         date: 2019,
            //     }
            // },
        ],
        setUserID(id) {
            this.userID = id;
        },
        setUserType(type) {
            this.userType = type;
        },
        setUserName(name) {
            this.userName = name;
        },
        setUserEmail(email) {
            this.email = email;
        },
        setFollowList(flist) {
            this.followList = flist;
        },
        setCollectList(clist) {
            this.collectList = clist;
        },
        setMyList(plist) {
            this.paperList = plist;
        },
        setAvatar(a_url) {
            this.avatar = a_url;
        },
        setWordCloud(url) {
            this.wordcloud_path = url;
        },
    }
</script>

<style scoped>

</style>
