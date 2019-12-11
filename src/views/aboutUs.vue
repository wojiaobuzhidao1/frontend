<template>
    <div>
        <MenuBar></MenuBar>
        <div class="aboutUs" >
            <img src="../images/zebra.png" style="height: 200px"><br>
            <span style="font-size: 35px"></span><br>
            <span style="color: #2db7f5">v1.0</span>
            <span style="font-size: 0px"><b>团队介绍：</b></span><br>
            <br>
            <b>前端工程师：</b><b>赵楠</b>、<b>何浩乾</b>、<b>胡琦</b><br>
            <b>后端工程师：</b><b>黎昆昌</b>、<b>仇善召</b>、<b>杜予同</b><br>
            <b>数据库工程师：</b><b>阙子烝</b>、<b>郭子溢</b><br>
            <b>爬虫工程师：</b><b>许志达</b>
            <br>
            <br>
            <br>
            <span style="font-size: 20px"><b>联系我们</b></span><br>
            <span style="font-size: 18px"><b>邮箱：</b></span><br>
        </div>
    </div>
</template>

<script>
    import MenuBar from './menuBar.vue'
    export default {
        components:{
            MenuBar
        },
        name: "aboutUs",
    }
</script>

<style scoped>
    .aboutUs{
        font-size: 20px;
        width: 100%;
        text-align: center;
        padding-top: 5%;
        margin-bottom: 5%;
        background:#5e697213
    }
    .ivu-menu-primary{
      background:#515a6e
      }
</style>

