<template>
    <div class="index">
        <Dropdown v-if="identity != 'VISITOR'" placement="bottom-start" style="margin-left: 88%; margin-top: 1%; font-size: 14px; background: #ffffff">
            <a style="color: black">
                <Icon type="ios-contact"></Icon>
                {{this.GLOBAL.userName}}
                <Icon type="ios-arrow-down"></Icon>
            </a>
            <DropdownMenu slot="list" style="font-size: 14px">
                <DropdownItem @click.native="user_page()">个人主页</DropdownItem>
                <DropdownItem @click.native="news_page()">消息/通知</DropdownItem>
                <DropdownItem @click.native="setting()">设置</DropdownItem>
                <DropdownItem @click.native="logout()">退出登录</DropdownItem>
            </DropdownMenu>
        </Dropdown>
        <div v-else style="margin-left: 85%; margin-top:1%;">
            <Button type="text" @click="modal1=true" style="font-size: 15px; text-align: right; margin-right: 2%">登录</Button>
            <Modal  v-model="modal1" title="登录" ok-text="登录" cancel-text="取消"  @on-ok="login" @on-cancel="cancel" @keyup.enter.native="login">
                <p style="font-size: 15px;margin-left: 10%">邮箱<input v-model="email" type="email" style="margin-left: 20%"/></p><br/>
                <p style="font-size: 15px;margin-left: 10%">密码<input v-model="password" type="password" style="margin-left: 20%"/></p>
            </Modal>
            <Button type="text" @click="jump_register" style="font-size: 15px;">注册</Button>
        </div>
        <Row type="flex" justify="center" align="middle" style="height: 70%">
            <Col span="24" offset="">
                <h1 v-show="!advance">
                    <img src="../images/timg.jpg" style="height: 180px">
                </h1>
                <br><br><br><br><br><br>
                <h2>
                    <p>Welcome to Science Searching Gate!</p>
                </h2>
                <Input style="width: 50%; margin-left: 25%" v-model="search_content" @keyup.enter.native="search">
                    <Select v-model="search_item" slot="prepend" style="width: 80px;background-color: #515a6e;color: white">
                        <Option value="professor"><b>专家</b></Option>
                        <Option value="paper"><b>论文</b></Option>
                        <!--Option value="organization"><b>机构</b></Option-->
                    </Select>
                    <Button  @click="search"  slot="append"  ><img v-if="and_times<4" src="../images/search.jpg" @click="and_times++" height="20" width="23" style="vertical-align:middle"></Button>
                    <Button v-if="search_item=='paper'" @click="advance=!advance"  slot="append" >高级检索↓</Button>
                    <!--Button v-if="search_item=='professor'" @click="extra_org=!extra_org"  slot="append" >所在机构↓</Button-->
                </Input>
                <div style="width: 50%; margin-left: 25%; text-align: left" v-show="advance&&search_item=='paper'">
                    <div class="extra-item">
                        并含：
                        <div v-for="item in and_times" class="advance_item" >
                            <Input class="extra-input" v-model="advance_data.and[item - 1]"></Input>
                        </div>
                        <div style="display: inline">
                            <img v-if="and_times<4" src="../images/add.png" @click="and_times++" height="20" width="20" style="vertical-align:middle">
                        </div>
                    </div>
                    <div class="extra-item">
                        或含：
                        <div v-for="item in or_times" class="advance_item">
                            <Input class="extra-input" v-model="advance_data.or[item - 1]"></Input>
                        </div>
                        <div style="display: inline">
                            <img v-if="or_times<4" src="../images/add.png" @click="or_times++" height="20" width="20" style="vertical-align:middle">
                        </div>
                    </div>
                    <div class="extra-item">
                        不含：
                        <div v-for="item in none_times" class="advance_item" >
                            <Input class="extra-input" v-model="advance_data.none[item - 1]"></Input>
                        </div>
                        <div style="display: inline">
                            <img v-if="none_times<4" src="../images/add.png" @click="none_times++" height="20" width="20" style="vertical-align:middle">
                        </div>
                    </div>
                    <div class="extra-item">
                        作者：
                        <Input class="extra-input" v-model="advance_writer"></Input>
                    </div>
                    <div class="extra-item">
                        刊物：
                        <Input class="extra-input" v-model="advance_book"></Input>
                    </div>
                    <div class="extra-item">
                        发表时间：
                        <Input class="extra-input" v-model="advance_time[0]"></Input>
                        -
                        <Input class="extra-input" v-model="advance_time[1]"></Input>
                    </div>
                </div>
                <div style="width: 50%; margin-left: 25%; text-align: left" v-show="extra_org&&search_item=='professor'">
                    <div style="font-size: 16px; line-height: 32px; padding-top: 10px">
                        机构：
                        <Input style="width: 20%;margin-right: 3px" v-model="extra_org_name"></Input>
                    </div>
                </div>
            </Col>
        </Row>
        <!--<router-link :to="{path: '/professorDetails',query:{profID: 'CN-BQ73PUWJ'}}">专家详情</router-link>-->
        <!--<router-link :to="user_url">个人主页</router-link>-->
        <!--<router-link :to="paperDetails_url">论文详情</router-link>-->
        <!--<router-link :to="news_url">消息界面</router-link>-->
        <!--<router-link :to="certify_url">申请认证</router-link>-->
        <!--<router-link :to="setting_url">信息设置</router-link>-->
        <div id="ftCon"  v-show="!advance">
            <AboutUs></AboutUs>
        </div>
    </div>
</template>
<script>
		import AboutUs from './aboutUs.vue'
    import CookieUtil from './cookieUtil.vue'
    export default {
				components:{
            AboutUs
        },
        data () {
            return {
                modal1: false,
                email: '',
                password: '',
                identity: this.GLOBAL.userType,
                search_item: 'paper',
                search_content: '',
                professorDetails_url: '/professorDetails',
                user_url:'/user',
                paperDetails_url:'/paperDetails',
                news_url:'/news',
                certify_url:'/certify',
                setting_url:'/setting',
                advance: false,
                and_times: 1,
                or_times: 1,
                none_times: 1,
                advance_data:{
                    and:[],
                    or:[],
                    none:[]
                },
                advance_writer: '',
                advance_book: '',
                advance_time: [1900, 2019],
                extra_org: false,
                extra_org_name: '',
            }
        },
        methods: {
            login () {
                this.modal1 = false;
                let params = {'email':this.email,'password':this.password}
                this.$http.post(this.GLOBAL.domain+"/api/v1/login",params,{
                    headers:{
                        'Content-Type':"application/json",
                    }
                }).then(function(res){
                    console.log(res);
                    var s = JSON.parse(res.body);
                    if(s["state"]=="fail"){
                        this.$Message.info(s["reason"]);
                    }
                    else {
                        // this.$Message.info('成功登录');
                        console.log("qqqq"+this.GLOBAL.userType)
                        this.GLOBAL.setUserType(s["msg"]["user_type"]);
                        console.log("hhhh"+this.GLOBAL.userType)
                        this.identity = this.GLOBAL.userType;
                        this.GLOBAL.setUserName(s["msg"]["username"]);
                        this.GLOBAL.setUserEmail(s["msg"]["email"]);
                        this.email = this.GLOBAL.email;
                        this.GLOBAL.setFollowList(s["msg"]["follow_list"]);
                        this.like_sch = this.GLOBAL.followList;
                        this.GLOBAL.setCollectList(s["msg"]["star_list"]);
                        this.star_paper_items = this.GLOBAL.collectList;
                        if(s["msg"]["avatar"] != '' && s["msg"]["avatar"]!=null){
                            this.GLOBAL.setAvatar(s["msg"]["avatar"]);
                        }
                        if(this.GLOBAL.userType == 'EXPERT'){
                            // console.log(s["msg"]["paper_list"]);
                            this.GLOBAL.setMyList(s["msg"]["paper_list"]);
                        }
                        CookieUtil.methods.setCookie('email', this.email);
                        CookieUtil.methods.setCookie('password', this.password);

                        switch (this.GLOBAL.userType) {
                            case 'USER':
                                this.$emit('user');
                                break;
                            case 'ADMIN':
                                this.$emit('admin');
                                break;
                            case 'EXPERT':
                                this.$emit('expert');
                                break;
                        }
                    }
                },function (res) {
                    console.log(res)
                });
            },
            cancel () {
                this.$Message.info('cancel');
            },
            user_page () {
                this.$router.push({path: '/user'})
            },
            news_page () {
                this.$router.push({path: '/news'})
            },
            setting () {
                this.$router.push({path: '/setting'})
            },
            logout () {
                this.GLOBAL.setUserType('VISITOR');
                this.identity = this.GLOBAL.userType;
                CookieUtil.methods.delCookie('email');
                CookieUtil.methods.delCookie('password');
            },
            jump_register(){
                this.$router.push({path: '/register'})
            },
            search() {
                console.log(this.advance_data)
                if(this.search_content == "")
                {
                    alert("请输入搜索内容");
                    return;
                }
                if(this.search_item == '')
                {
                    //alert("请选择搜索类型");
										//return;
										this.search_item == 'paper';
                }

                /*if (this.search_item == 'paper' && this.advance)
                {
                    console.log(this.advance_data)
                    if(this.advance_time[0] < 0 || this.advance_time[1] > 2019)
                    {
                        alert("请输入正确的时间");
                        return;
                    }
                    this.$router.push({
                        name: 'search_detail',
                        query:{
                            search_content: this.search_content,
                            search_type: this.search_item,
                            advance_data: this.advance_data,
                            advance_writer: this.advance_writer,
                            advance_time: this.advance_time,
                            advance_book: this.advance_book,
                        }
                    })
                }
                else */if (this.search_item == 'professor' && this.extra_org)
                {
                    // if(this.extra_org_name == '')
                    // {
                    //     alert("请输入所在机构");
                    //     return;
                    // }
                    this.$router.push({
                        name: 'search_detail',
                        query:{
                            search_content: this.search_content,
                            search_type: this.search_item,
                            extra_org_name: this.extra_org_name,
                        }
                    })
                }
                else
                {
                    this.$router.push({
                        name: 'search_detail',
                        query:{
                            search_content: this.search_content,
                            search_type: this.search_item,
                        }
                    })
                }

            },
            init(){
                this.and_times = 1;
                this.or_times = 1;
                this.none_times = 1;
                this.advance_data.and = [];
                this.advance_data.or = [];
                this.advance_data.none = [];
                this.extra_org_name = '';
            }
        },
        created() {
            this.email = CookieUtil.methods.getCookie('email');
            this.password = CookieUtil.methods.getCookie('password');
            if(this.email!=''){
                this.login();
            }
        }
    }
</script>

<style scoped lang="less">
    .index{
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        text-align: center;
        h1{
            height: 130px;
            img{
                height: 100%;
            }
        }
        h2{
            color: #666;
            margin-bottom: 30px;
            p{
                width: 100%;
                margin: 0 0 50px;
            }
        }
        .ivu-row-flex{
            height: 100%;
        }
        #ftCon {
            width: 100%;
            height: 80px;
            line-height: 24px;
            text-align: center;
            z-index: 10;
            overflow: hidden;
            bottom: 0;
            position: absolute;
            background: #515a6e;
            color: #bbb;
            font-size: 13px;
        }
    }
    .element.style{
      background: #ffffff;
    }
    .advance_item{
        display: inline;
        align-items: center;
    }

    .extra-item{
        font-size: 16px;
        line-height: 32px;
        padding-top: 10px;
    }

    .extra-input{
        width: 20%;
        margin-right: 3px
    }
    .ivu-modal-header{
      align-items: center;
    }
    .ivu-modal-content{
       width: 20px;
       font-size: 15px;
       margin-left: 10%;
       align-items: center;
		}
</style>
