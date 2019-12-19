webpackJsonp([5],{

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(861)

var Component = __webpack_require__(70)(
  /* script */
  __webpack_require__(591),
  /* template */
  __webpack_require__(876),
  /* scopeId */
  "data-v-622f3b21",
  /* cssModules */
  null
)
Component.options.__file = "D:\\大三上\\软件系统需求和设计\\frontend\\src\\views\\paperDetails.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] paperDetails.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-622f3b21", Component.options)
  } else {
    hotAPI.reload("data-v-622f3b21", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "cookieUtil",
    methods: {
        setCookie: function setCookie(key, value) {
            var exdate = new Date();
            exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * 10);
            window.document.cookie = key + "=" + escape(value) + ";expires=" + exdate.toGMTString();
        },
        getCookie: function getCookie(param) {
            var res = '';
            if (document.cookie.length > 0) {
                var begin = document.cookie.indexOf(param);
                if (begin != -1) {
                    begin += param.length + 1;
                    var end = document.cookie.indexOf(";", begin);
                    end == -1 ? end = document.cookie.length : end = end;
                    return unescape(document.cookie.substring(begin, end));
                }
            }
            return res;
        },
        delCookie: function delCookie(NameOfCookie) {
            if (this.getCookie(NameOfCookie)) {
                document.cookie = NameOfCookie + "=" + "; expires=Thu, 01-Jan-70 00:00:01 GMT";
            }
        }
    }
});

/***/ }),

/***/ 387:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(387)

var Component = __webpack_require__(70)(
  /* script */
  __webpack_require__(386),
  /* template */
  __webpack_require__(389),
  /* scopeId */
  "data-v-14f43d51",
  /* cssModules */
  null
)
Component.options.__file = "D:\\大三上\\软件系统需求和设计\\frontend\\src\\views\\cookieUtil.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] cookieUtil.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-14f43d51", Component.options)
  } else {
    hotAPI.reload("data-v-14f43d51", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c("div")
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-14f43d51", module.exports)
  }
}

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "aboutUs"
});

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cookieUtil_vue__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cookieUtil_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__cookieUtil_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    name: "MenuBar",
    props: {
        main: '',
        input: '',
        search_content: '',
        search_item: ''
    },
    data: function data() {
        return {
            modal1: false,
            theme1: 'primary',
            index_url: '/',
            email: '',
            password: '',
            identity: this.GLOBAL.userType,
            temp_content: this.search_content,
            temp_item: this.search_item
        };
    },

    methods: {
        login: function login() {
            this.modal1 = false;
            var params = { 'email': this.email, 'password': this.password };
            this.$http.post(this.GLOBAL.domain + "/api/v1/login", params, {
                headers: {
                    'Content-Type': "application/json"
                }
            }).then(function (res) {
                // console.log(res);
                var s = JSON.parse(res.body);
                console.log("MenuBar");
                console.log(s);
                if (s["state"] == "fail") {
                    this.$Message.info(s["reason"]);
                } else {
                    //this.$Message.info('成功登录');
                    // console.log("qqqq"+this.GLOBAL.userType)
                    this.GLOBAL.setUserType(s["msg"]["user_type"]);
                    // console.log("hhhh"+this.GLOBAL.userType)
                    this.identity = this.GLOBAL.userType;
                    // console.log(this.identity);
                    this.GLOBAL.setUserName(s["msg"]["username"]);
                    this.GLOBAL.setUserEmail(s["msg"]["email"]);
                    this.email = this.GLOBAL.email;
                    this.GLOBAL.setFollowList(s["msg"]["follow_list"]);
                    this.like_sch = this.GLOBAL.followList;
                    this.GLOBAL.setCollectList(s["msg"]["star_list"]);
                    this.star_paper_items = this.GLOBAL.collectList;
                    console.log('Test --------------------' + s.msg.avatar);
                    console.log(this.GLOBAL.avatar);
                    if (s["msg"]["avatar"] != '' && s["msg"]["avatar"] != null) {
                        console.log('avatarYes ' + this.GLOBAL.avatar);
                        this.GLOBAL.setAvatar(s["msg"]["avatar"]);
                    }
                    //console.log("hhhh"+this.GLOBAL.userName)
                    if (this.GLOBAL.userType == 'EXPERT') {
                        // console.log(s["msg"]["paper_list"]);
                        this.GLOBAL.setMyList(s["msg"]["paper_list"]);
                    }
                    __WEBPACK_IMPORTED_MODULE_0__cookieUtil_vue___default.a.methods.setCookie('email', this.email);
                    __WEBPACK_IMPORTED_MODULE_0__cookieUtil_vue___default.a.methods.setCookie('password', this.password);
                    //this.$emit(this.GLOBAL.userType);
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
            }, function (res) {
                console.log(res);
            });
        },
        cancel: function cancel() {
            this.$Message.info('cancel');
        },
        user_page: function user_page() {
            this.$router.push({ path: '/user' });
        },
        news_page: function news_page() {
            this.$router.push({ path: '/news' });
        },
        setting: function setting() {
            this.$router.push({ path: '/setting' });
        },
        jump_register: function jump_register() {
            this.$router.push({ path: '/register' });
        },
        logout: function logout() {
            this.GLOBAL.setUserType('VISITOR');
            this.identity = this.GLOBAL.userType;
            this.$emit('visitor');
            __WEBPACK_IMPORTED_MODULE_0__cookieUtil_vue___default.a.methods.delCookie('email');
            __WEBPACK_IMPORTED_MODULE_0__cookieUtil_vue___default.a.methods.delCookie('password');
        },
        search: function search() {
            this.$emit('search', this.temp_item, this.temp_content);
        }
    },
    created: function created() {
        // console.log(this.GLOBAL.userType + 'global meunbar')
        // console.log(this.identity + 'meunbar')
        this.email = __WEBPACK_IMPORTED_MODULE_0__cookieUtil_vue___default.a.methods.getCookie('email');
        console.log('created menubar' + __WEBPACK_IMPORTED_MODULE_0__cookieUtil_vue___default.a.methods.getCookie('email'));
        this.password = __WEBPACK_IMPORTED_MODULE_0__cookieUtil_vue___default.a.methods.getCookie('password');
        if (this.email != '') {
            this.login();
        }
    }
});

/***/ }),

/***/ 392:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 393:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(393)

var Component = __webpack_require__(70)(
  /* script */
  __webpack_require__(390),
  /* template */
  __webpack_require__(397),
  /* scopeId */
  "data-v-41345060",
  /* cssModules */
  null
)
Component.options.__file = "D:\\大三上\\软件系统需求和设计\\frontend\\src\\views\\aboutUs.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] aboutUs.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-41345060", Component.options)
  } else {
    hotAPI.reload("data-v-41345060", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(392)

var Component = __webpack_require__(70)(
  /* script */
  __webpack_require__(391),
  /* template */
  __webpack_require__(396),
  /* scopeId */
  "data-v-3baacb0e",
  /* cssModules */
  null
)
Component.options.__file = "D:\\大三上\\软件系统需求和设计\\frontend\\src\\views\\menuBar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] menuBar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3baacb0e", Component.options)
  } else {
    hotAPI.reload("data-v-3baacb0e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('Menu', {
    staticClass: "menutype",
    staticStyle: {
      "width": "100%",
      "position": "fixed"
    },
    attrs: {
      "mode": "horizontal",
      "theme": _vm.theme1,
      "active-name": "1"
    }
  }, [_c('router-link', {
    staticStyle: {
      "float": "left"
    },
    attrs: {
      "to": _vm.index_url
    }
  }, [_c('MenuItem', {
    attrs: {
      "name": "1"
    }
  }, [_c('Icon', {
    attrs: {
      "type": "ios-home",
      "size": "20"
    }
  }), _vm._v("\n                首页\n            ")], 1)], 1), _vm._v(" "), (_vm.input) ? _c('MenuItem', {
    attrs: {
      "name": "5"
    }
  }, [_c('Input', {
    staticStyle: {
      "width": "450px",
      "margin-top": "12px"
    },
    nativeOn: {
      "keyup": function($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) { return null; }
        return _vm.search($event)
      }
    },
    model: {
      value: (_vm.temp_content),
      callback: function($$v) {
        _vm.temp_content = $$v
      },
      expression: "temp_content"
    }
  }, [_c('Select', {
    staticStyle: {
      "width": "80px",
      "background-color": "#eeeeee",
      "color": "black"
    },
    attrs: {
      "slot": "prepend"
    },
    slot: "prepend",
    model: {
      value: (_vm.temp_item),
      callback: function($$v) {
        _vm.temp_item = $$v
      },
      expression: "temp_item"
    }
  }, [_c('Option', {
    attrs: {
      "value": "professor"
    }
  }, [_vm._v("专家")]), _vm._v(" "), _c('Option', {
    attrs: {
      "value": "paper"
    }
  }, [_vm._v("论文")]), _vm._v(" "), _c('Option', {
    attrs: {
      "value": "organization"
    }
  }, [_vm._v("机构")])], 1), _vm._v(" "), _c('Button', {
    staticStyle: {
      "background-color": "#57c5f7",
      "color": "white"
    },
    attrs: {
      "slot": "append",
      "icon": "ios-search"
    },
    on: {
      "click": _vm.search
    },
    slot: "append"
  })], 1)], 1) : _vm._e(), _vm._v(" "), (_vm.identity != 'VISITOR') ? _c('Submenu', {
    staticStyle: {
      "float": "right"
    },
    attrs: {
      "name": "2"
    }
  }, [_c('template', {
    slot: "title"
  }, [_c('Icon', {
    attrs: {
      "type": "ios-contact",
      "size": "20"
    }
  }), _vm._v("\n                " + _vm._s(this.GLOBAL.userName) + "\n            ")], 1), _vm._v(" "), _c('MenuItem', {
    attrs: {
      "name": "2-1"
    },
    nativeOn: {
      "click": function($event) {
        return _vm.user_page()
      }
    }
  }, [_vm._v("个人主页")]), _vm._v(" "), _c('MenuItem', {
    attrs: {
      "name": "2-2"
    },
    nativeOn: {
      "click": function($event) {
        return _vm.news_page()
      }
    }
  }, [_vm._v("消息/通知")]), _vm._v(" "), _c('MenuItem', {
    attrs: {
      "name": "2-3"
    },
    nativeOn: {
      "click": function($event) {
        return _vm.setting()
      }
    }
  }, [_vm._v("设置")]), _vm._v(" "), _c('MenuItem', {
    attrs: {
      "name": "2-4"
    },
    nativeOn: {
      "click": function($event) {
        return _vm.logout()
      }
    }
  }, [_vm._v("退出登录")])], 2) : _vm._e(), _vm._v(" "), (_vm.identity == 'VISITOR') ? _c('MenuItem', {
    staticStyle: {
      "float": "right"
    },
    attrs: {
      "name": "3"
    },
    nativeOn: {
      "click": function($event) {
        _vm.modal1 = true
      }
    }
  }, [_vm._v("\n            登录\n            "), _c('Modal', {
    attrs: {
      "title": "登录",
      "ok-text": "登录",
      "cancel-text": "取消"
    },
    on: {
      "on-ok": _vm.login,
      "on-cancel": _vm.cancel
    },
    nativeOn: {
      "keyup": function($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) { return null; }
        return _vm.login($event)
      }
    },
    model: {
      value: (_vm.modal1),
      callback: function($$v) {
        _vm.modal1 = $$v
      },
      expression: "modal1"
    }
  }, [_c('p', [_vm._v("邮箱"), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.email),
      expression: "email"
    }],
    staticStyle: {
      "margin-left": "17px"
    },
    attrs: {
      "type": "email"
    },
    domProps: {
      "value": (_vm.email)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.email = $event.target.value
      }
    }
  })]), _c('br'), _vm._v(" "), _c('p', [_vm._v("密码"), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.password),
      expression: "password"
    }],
    staticStyle: {
      "margin-left": "17px"
    },
    attrs: {
      "type": "password"
    },
    domProps: {
      "value": (_vm.password)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.password = $event.target.value
      }
    }
  })])])], 1) : _vm._e(), _vm._v(" "), _c('a', {
    staticStyle: {
      "float": "right"
    }
  }, [_c('MenuItem', {
    attrs: {
      "name": "4"
    }
  }, [_c('a', {
    staticStyle: {
      "size": "35px",
      "color": "#ffffff"
    },
    on: {
      "click": _vm.jump_register
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t注册\n\t\t\t\t\t\t\t\t")])])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-3baacb0e", module.exports)
  }
}

/***/ }),

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "aboutUs",
    staticStyle: {
      "background": "#515a6e",
      "height": "80px"
    }
  }, [_c('span', {
    staticStyle: {
      "font-size": "16px"
    }
  }, [_c('a', {
    staticStyle: {
      "color": "#ffffff"
    }
  }, [_vm._v("科技资源共享平台")])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('span', {
    staticStyle: {
      "font-size": "14px"
    }
  }, [_c('a', {
    staticStyle: {
      "color": "#ffffff"
    }
  }, [_vm._v("联系我们：1137559912@qq.com")])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-41345060", module.exports)
  }
}

/***/ }),

/***/ 591:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__aboutUs_vue__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__aboutUs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__aboutUs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menuBar_vue__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menuBar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__menuBar_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        MenuBar: __WEBPACK_IMPORTED_MODULE_1__menuBar_vue___default.a,
        AboutUs: __WEBPACK_IMPORTED_MODULE_0__aboutUs_vue___default.a
    },
    name: "paperDetails",
    data: function data() {
        return {
            flag: false,
            modal2: false,
            modal3: false,
            identity: this.GLOBAL.userType,
            //identity:'EXPERT', //EXPERT USER VISITOR
            isliked: '',
            showlike: '',
            content: '',
            pageNum: 1,
            pageSize: 5,
            cur_cmt: [],
            paper: {
                // paper_id:'', //'13e8bab7244258710c462441e19afbad',
                // name:'',
                // year:'',
                // source_url:[],
                // free_url:[],
                // source_journal:{
                //     name:'',
                //     date:''
                // },
                // author:[],
                // keyword:[],
                // abstract:''
            },
            comment: [
                // {
                //     date:'2019-5-16',from:{username:"cxk",userid:"111@123.com"},
                //     content:'你打篮球像我！',
                //     replies: [{              //回复评论的信息，是一个数组，如果没内容就是一个空数组
                //             responder: "xzd",    //评论者
                //             reviewers: "cxk",         //被评论者
                //             time: "2016-09-05",
                //             content: "你写代码像蔡徐坤"
                //         }]
                // },
                // {
                //     date:'2019-5-15',from:{username:"xzd",userid:"111@12354.com"},
                //     content:'你打篮球像cxk！',
                //     replies:[],
                // },
            ]
        };
    },
    created: function created() {
        this.paper.paper_id = this.$route.query.paperID;
        this.get_paperDetails(this.paper.paper_id);
        console.log("1111" + this.flag);
        this.judge_like();
        this.get_comment();
    },

    methods: {
        cancel: function cancel() {
            //this.$Message.info('cancel');
        },
        judge_login: function judge_login() {
            if (this.identity === "VISITOR") {
                this.$Message.info("请先登录");
                return false;
            }
        },
        toggle_like: function toggle_like() {
            console.log(this.identity);
            if (this.judge_login() == false) return;
            var params = { 'user_id': this.GLOBAL.email, 'paper_id': this.paper.paper_id };
            if (this.isliked) {
                this.$http.delete(this.GLOBAL.domain + "/api/v1/collect", { params: params }).then(function (res) {
                    var detail = JSON.parse(res.body);
                    console.log(detail);
                    if (detail.state == "fail") {
                        this.$Message.info("取消收藏失败");
                    } else {
                        this.showlike = '收藏';
                        this.isliked = !this.isliked;
                        this.refresh_user_info();
                    }
                }, function (res) {
                    alert(res);
                });
            } else {
                this.$http.get(this.GLOBAL.domain + "/api/v1/collect", { params: params }).then(function (res) {
                    var detail = JSON.parse(res.body);
                    console.log(detail);
                    if (detail.state == "fail") {
                        this.$Message.info("收藏失败");
                    } else {
                        this.showlike = '已收藏';
                        this.isliked = !this.isliked;
                        this.refresh_user_info();
                    }
                }, function (res) {
                    alert(res);
                });
            }
        },
        get_comment: function get_comment() {
            var params = { 'paper_id': this.paper.paper_id };
            this.$http.get(this.GLOBAL.domain + "/api/v1/comment", { params: params }).then(function (res) {
                var detail = JSON.parse(res.body);
                console.log(detail);
                if (detail.state == "fail") {
                    //this.$Message.info("获取评论失败")
                } else {
                    this.comment = detail.msg;
                    console.log(this.comment);
                }
            }, function (res) {
                alert(res);
            });
        },
        change_page: function change_page(value) {
            this.pageNum = value;
            console.log(this.pageNum);
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        },
        add_comment: function add_comment() {
            if (this.judge_login() == false) return;
            this.modal2 = true;
        },
        add_reply: function add_reply(item) {
            if (this.judge_login() == false) return;
            this.cur_cmt = item;
            this.modal3 = true;
        },
        sub_comment: function sub_comment() {
            if (this.judge_login() == false) return;
            if (this.content.trim() == '') {
                this.$Message.error('内容不能为空');
                this.content = '';
                return;
            } else {
                console.log(this.paper.paper_id);
                var params = { 'from_email': this.GLOBAL.email, 'paper_id': this.paper.paper_id, 'content': this.content };
                this.$http.post(this.GLOBAL.domain + "/api/v1/comment", params, {
                    headers: {
                        'Content-Type': "application/json"
                    }
                }).then(function (res) {
                    var detail = JSON.parse(res.body);
                    console.log(detail);
                    if (detail.state == "fail") {
                        this.$Message.info("评论失败");
                    } else {
                        this.$Message.success('评论成功');
                        this.get_comment();
                        this.content = "";
                    }
                }, function (res) {
                    alert(res);
                });
            }
        },
        reply_comment: function reply_comment() {
            if (this.content.trim() == '') {
                this.$Message.error('内容不能为空');
                this.content = '';
                return;
            } else {
                var params = { 'from_email': this.GLOBAL.email, 'comment_id': this.cur_cmt.comment_id, 'to_email': this.cur_cmt.from.userid,
                    'to_name': this.cur_cmt.from.username, 'content': this.content, 'comment': this.cur_cmt.content,
                    'from_name': this.GLOBAL.userName };
                this.$http.post(this.GLOBAL.domain + "/api/v1/reply_comment", params, {
                    headers: {
                        'Content-Type': "application/json"
                    }
                }).then(function (res) {
                    var detail = JSON.parse(res.body);
                    if (detail.state == "fail") {
                        this.$Message.info("回复失败");
                    } else {
                        this.get_comment();
                        this.content = "";
                    }
                }, function (res) {
                    alert(res);
                });
            }
        },
        jump_man: function jump_man(man) {
            this.$router.push({
                name: 'search_detail',
                query: {
                    search_content: man,
                    search_type: 'professor'
                }
            });
        },
        get_paperDetails: function get_paperDetails(pid) {
            this.$http.get(this.GLOBAL.domain + "/api/v1/paper_detail/" + pid).then(function (res) {
                var detail = JSON.parse(res.body);
                console.log(detail);
                this.paper.name = detail.msg.name;
                this.paper.abstract = detail.msg.abstract;
                this.paper.keyword = detail.msg.keyword;
                this.paper.year = detail.msg.year;
                this.paper.author = detail.msg.author;
                this.paper.source_journal = detail.msg.source_journal;
                this.paper.source_url = detail.msg.source_url;
                this.flag = true;
            }, function (res) {
                var detail = JSON.parse(res.body);
                console.log(detail);
            });
        },
        judge_like: function judge_like() {
            var params = { 'user_id': this.GLOBAL.email, 'paper_id': this.paper.paper_id };
            this.$http.post(this.GLOBAL.domain + "/api/v1/is_collect", params, {
                headers: {
                    'Content-Type': "application/json"
                }
            }).then(function (res) {
                var detail = JSON.parse(res.body);
                if (detail.state == "yes") {
                    this.showlike = "已收藏";
                    this.isliked = true;
                } else {
                    this.showlike = "收藏";
                    this.isliked = false;
                }
            }, function (res) {});
        },
        refresh_user_info: function refresh_user_info() {
            this.$http.get(this.GLOBAL.domain + '/api/v1/user_detail/' + this.GLOBAL.email).then(function (res) {
                var detail = JSON.parse(res.body);
                console.log(detail);
                this.GLOBAL.setFollowList(detail.msg.follow_list);
                this.GLOBAL.setCollectList(detail.msg.star_list);
            }, function (res) {
                console.log('Failed');
                var detail = JSON.parse(res.body);
                console.log(detail);
            });
        }
    }
});

/***/ }),

/***/ 861:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 876:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.flag) ? _c('div', {
    staticClass: "page"
  }, [_c('MenuBar', {
    on: {
      "user": function($event) {
        _vm.identity = 'USER'
      },
      "visitor": function($event) {
        _vm.identity = 'VISITOR'
      },
      "expert": function($event) {
        _vm.identity = 'EXPERT'
      },
      "admin": function($event) {
        _vm.identity = 'ADMIN'
      }
    }
  }), _vm._v(" "), _c('Layout', {
    attrs: {
      "id": "layout"
    }
  }, [_c('div', {
    staticStyle: {
      "margin-left": "15%",
      "width": "68%",
      "min-width": "500px"
    }
  }, [_c('h3', {
    staticStyle: {
      "color": "#06c",
      "font-size": "26px",
      "font-weight": "bold",
      "word-break": "break-all"
    }
  }, [_vm._v(_vm._s(_vm.paper.name))]), _vm._v(" "), _c('div', {
    staticClass: "dtl_l_content"
  }, [_c('Divider', {
    attrs: {
      "dashed": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "dtl_l_love_wr "
  }, [_c('span', [_vm._v("来自 ")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": _vm.paper.source_url[0]
    }
  }, [_vm._v(_vm._s(_vm.paper.source_url[0]))]), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('span', [_vm._v("期刊来源 ")]), _vm._v(" "), _c('span', {
    staticStyle: {
      "margin-top": "2%",
      "color": "#363e4f",
      "font-family": "微软雅黑"
    }
  }, [_vm._v(" " + _vm._s(this.paper.source_journal.name) + " - " + _vm._s(this.paper.source_journal.date))]), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('span', [_vm._v("年份 ")]), _vm._v(" "), _c('span', {
    staticStyle: {
      "margin-top": "2%",
      "color": "#363e4f",
      "font-family": "微软雅黑"
    }
  }, [_vm._v(_vm._s(this.paper.year))])]), _vm._v(" "), _c('div', {
    staticClass: "dtl_l_love_auth_wr"
  }, [_c('Row', [_c('Col', {
    attrs: {
      "span": "2"
    }
  }, [_c('label', {
    staticStyle: {
      "width": "90px",
      "color": "#999999"
    }
  }, [_vm._v("作者：")])]), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "22"
    }
  }, _vm._l((_vm.paper.author), function(value, key) {
    return _c('label', {
      staticStyle: {
        "color": "#2b85e4",
        "font-size": "13px",
        "cursor": "pointer",
        "width": "fit-content",
        "font-family": "微软雅黑"
      },
      on: {
        "click": function($event) {
          return _vm.jump_man(value)
        }
      }
    }, [_vm._v("\n                                        " + _vm._s(value)), _c('Divider', {
      attrs: {
        "type": "vertical"
      }
    })], 1)
  }), 0)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "dtl_l_love_auth_wr"
  }, [_c('Row', [_c('Col', {
    attrs: {
      "span": "2"
    }
  }, [_c('label', {
    staticStyle: {
      "width": "52px",
      "color": "#999999"
    }
  }, [_vm._v("摘要：")])]), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "22"
    }
  }, [_c('label', {
    staticClass: "multiLineText",
    staticStyle: {
      "width": "100%",
      "color": "#3f3f3f"
    }
  }, [_vm._v("\n                                        " + _vm._s(_vm.paper.abstract) + "\n                                    ")])])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "dtl_l_love_auth_wr",
    staticStyle: {
      "margin-top": "7px"
    }
  }, [_c('Row', [_c('Col', {
    attrs: {
      "span": "2"
    }
  }, [_c('label', {
    staticStyle: {
      "width": "90px",
      "color": "#999999"
    }
  }, [_vm._v("关键词：")])]), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "22"
    }
  }, _vm._l((_vm.paper.keyword), function(word) {
    return _c('label', {
      staticStyle: {
        "color": "#3f3f3f",
        "font-size": "13px",
        "word-break": "break-all",
        "font-family": "微软雅黑"
      }
    }, [_vm._v("\n                                        " + _vm._s(word)), _c('Divider', {
      attrs: {
        "type": "vertical"
      }
    })], 1)
  }), 0)], 1)], 1), _vm._v(" "), _c('Button', {
    class: {
      liked: _vm.isliked
    },
    staticStyle: {
      "width": "30%",
      "min-width": "200px",
      "font-size": "14px",
      "margin-left": "35%",
      "margin-top": "20px"
    },
    attrs: {
      "icon": "ios-star"
    },
    nativeOn: {
      "click": function($event) {
        return _vm.toggle_like($event)
      }
    },
    model: {
      value: (_vm.showlike),
      callback: function($$v) {
        _vm.showlike = $$v
      },
      expression: "showlike"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.showlike))]), _vm._v(" "), _c('Modal', {
    attrs: {
      "title": "回复评论",
      "ok-text": "确定",
      "cancel-text": "取消"
    },
    on: {
      "on-ok": _vm.sub_comment,
      "on-cancel": _vm.cancel
    },
    model: {
      value: (_vm.modal2),
      callback: function($$v) {
        _vm.modal2 = $$v
      },
      expression: "modal2"
    }
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.content),
      expression: "content"
    }],
    staticStyle: {
      "margin-left": "4%",
      "width": "90%",
      "height": "200px"
    },
    attrs: {
      "placeholder": "写下你的想法"
    },
    domProps: {
      "value": (_vm.content)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.content = $event.target.value
      }
    }
  })])], 1)]), _vm._v(" "), _c('Divider'), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin-left": "20%",
      "width": "60%",
      "min-width": "500px"
    }
  }, [_c('h2', {
    staticStyle: {
      "margin-bottom": "10px"
    }
  }, [_vm._v("评论区")]), _vm._v(" "), _c('div', {
    staticStyle: {
      "min-width": "500px"
    }
  }, [_c('Row', {
    staticStyle: {
      "min-width": "450px"
    },
    attrs: {
      "type": "flex",
      "justify": "center",
      "align": "middle"
    }
  }, [_c('Col', {
    staticStyle: {
      "min-width": "110px"
    },
    attrs: {
      "span": "3"
    }
  }, [_c('img', {
    staticStyle: {
      "margin": "5px",
      "border-radius": "50%",
      "padding": "3px",
      "background-color": "#fff",
      "border": "1px solid rgba(0, 0, 0, 0.15)"
    },
    attrs: {
      "src": this.GLOBAL.avatar,
      "height": "90px"
    }
  })]), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "18"
    }
  }, [_c('Input', {
    staticStyle: {
      "margin-left": "4%",
      "width": "90%"
    },
    attrs: {
      "type": "textarea",
      "autosize": {
        minRows: 4,
        maxRows: 4
      },
      "maxlength": 140,
      "placeholder": "写下你的想法"
    },
    model: {
      value: (_vm.content),
      callback: function($$v) {
        _vm.content = $$v
      },
      expression: "content"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('Button', {
    staticStyle: {
      "width": "20%",
      "min-width": "100px",
      "font-size": "14px",
      "float": "right",
      "margin-right": "10%",
      "margin-top": "10px",
      "margin-bottom": "10px",
      "padding": "5px"
    },
    attrs: {
      "icon": "ios-text"
    },
    on: {
      "click": _vm.sub_comment
    }
  }, [_vm._v("发表评论")]), _vm._v(" "), _c('Divider'), _vm._v(" "), (_vm.comment.length == 0) ? _c('p', [_vm._v("暂无评论，我来发表第一篇评论！")]) : _c('div', [_vm._l((this.comment.slice((_vm.pageNum - 1) * _vm.pageSize, _vm.pageNum * _vm.pageSize)), function(item) {
    return _c('div', [_c('b', {
      staticStyle: {
        "color": "#2B86E4",
        "font-size": "14px"
      }
    }, [_vm._v("\n                            " + _vm._s(item.from.username) + "\n                            "), _c('span', {
      staticStyle: {
        "color": "#999999",
        "font-size": "12px",
        "margin-left": "10px"
      }
    }, [_vm._v(_vm._s(item.date))]), _vm._v("   \n                            "), _c('Button', {
      staticStyle: {
        "color": "#666666"
      },
      attrs: {
        "type": "text",
        "shape": "circle",
        "icon": "md-chatboxes"
      },
      on: {
        "click": function($event) {
          return _vm.add_reply(item)
        }
      }
    }, [_vm._v("回复")]), _vm._v(" "), _c('Modal', {
      attrs: {
        "title": "回复评论",
        "cancel-text": "取消",
        "ok-text": "回复"
      },
      on: {
        "on-ok": _vm.reply_comment,
        "on-cancel": _vm.cancel
      },
      model: {
        value: (_vm.modal3),
        callback: function($$v) {
          _vm.modal3 = $$v
        },
        expression: "modal3"
      }
    }, [_c('Input', {
      staticStyle: {
        "margin-left": "4%",
        "width": "90%"
      },
      attrs: {
        "type": "textarea",
        "autosize": {
          minRows: 4,
          maxRows: 4
        },
        "maxlength": 140,
        "placeholder": "写下你的回复"
      },
      model: {
        value: (_vm.content),
        callback: function($$v) {
          _vm.content = $$v
        },
        expression: "content"
      }
    })], 1)], 1), _vm._v(" "), _c('p', {
      staticClass: "commentColor"
    }, [_vm._v(_vm._s(item.content))]), _vm._v(" "), (item.replies.length > 0) ? _c('div', {
      staticStyle: {
        "width": "70%",
        "margin": "0px 20px 0px 20px",
        "padding": "5px",
        "border-left": "2px solid #8391a5",
        "background-color": "#fcfcfc"
      }
    }, _vm._l((item.replies), function(reply) {
      return _c('div', {
        staticStyle: {
          "padding": "0px 5px 0px 5px"
        }
      }, [_c('b', {
        staticStyle: {
          "color": "#86bbf2",
          "font-size": "14px"
        }
      }, [_vm._v(_vm._s(reply.from_name) + "  "), _c('span', {
        staticStyle: {
          "color": "#999999"
        }
      }, [_vm._v("回复")]), _vm._v("  " + _vm._s(item.from.username) + "\n                                    "), _c('span', {
        staticStyle: {
          "color": "#999999"
        }
      }, [_vm._v(_vm._s(reply.time))]), _vm._v("  \n                                    ")]), _vm._v(" "), _c('p', {
        staticClass: "commentColor"
      }, [_vm._v(_vm._s(reply.content))]), _vm._v(" "), (item.replies.length > 1) ? _c('Divider', {
        staticStyle: {
          "margin": "10px"
        },
        attrs: {
          "dashed": ""
        }
      }) : _vm._e()], 1)
    }), 0) : _vm._e(), _vm._v(" "), _c('Divider', {
      staticStyle: {
        "margin": "10px"
      },
      attrs: {
        "dashed": ""
      }
    })], 1)
  }), _vm._v(" "), _c('Page', {
    staticStyle: {
      "margin-left": "32%"
    },
    attrs: {
      "current": _vm.pageNum,
      "total": _vm.comment.length,
      "page-size": _vm.pageSize,
      "simple": ""
    },
    on: {
      "on-change": _vm.change_page
    }
  })], 2), _vm._v(" "), _c('BackTop', {
    attrs: {
      "height": 100,
      "bottom": 200
    }
  }, [_c('Icon', {
    staticClass: "top",
    attrs: {
      "type": "md-arrow-up"
    }
  }), _vm._v(" "), _c('br'), _vm._v("返回顶端\n                ")], 1)], 1), _vm._v(" "), _c('Footer', {
    staticClass: "layout-footer-center",
    staticStyle: {
      "background-color": "#515a6e",
      "color": "#515a6e",
      "margin-top": "3%"
    }
  }, [_c('AboutUs')], 1)], 1)], 1) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-622f3b21", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=5.chunk.js.map