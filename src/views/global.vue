<template>

</template>

<script>

    export default {
        domain:'http://10.251.252.55:5000',
        name: "global",
        userID: '',
        userName: '',
        email: '',
        password: '',
        userType: 'VISITOR',
        wordcloud_path: '',
        avatar: 'http://10.251.252.55:5000/static/photo/1559356265_img.png',
        collectList: [],
        followList: [],
        paperList: [],
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
