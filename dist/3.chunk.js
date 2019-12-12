webpackJsonp([3],{

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(859)

var Component = __webpack_require__(70)(
  /* script */
  __webpack_require__(591),
  /* template */
  __webpack_require__(877),
  /* scopeId */
  "data-v-5dd27f4d",
  /* cssModules */
  null
)
Component.options.__file = "D:\\大三上\\软件系统需求和设计\\frontend\\src\\views\\search_detail.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] search_detail.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5dd27f4d", Component.options)
  } else {
    hotAPI.reload("data-v-5dd27f4d", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 385:
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

/***/ 388:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(388)

var Component = __webpack_require__(70)(
  /* script */
  __webpack_require__(385),
  /* template */
  __webpack_require__(390),
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

/***/ 390:
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

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cookieUtil_vue__ = __webpack_require__(389);
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
            register_url: '/register',
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
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(392)

var Component = __webpack_require__(70)(
  /* script */
  __webpack_require__(391),
  /* template */
  __webpack_require__(394),
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

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('Menu', {
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
  }), _vm._v("\n            首页\n        ")], 1)], 1), _vm._v(" "), (_vm.input) ? _c('MenuItem', {
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
  }), _vm._v("\n            " + _vm._s(this.GLOBAL.userName) + "\n        ")], 1), _vm._v(" "), _c('MenuItem', {
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
  }, [_vm._v("\n        登录\n        "), _c('Modal', {
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
    },
    attrs: {
      "href": _vm.register_url
    }
  }, [(_vm.identity == 'VISITOR') ? _c('MenuItem', {
    attrs: {
      "href": _vm.register_url,
      "name": "4"
    }
  }, [_vm._v("\n            注册\n        ")]) : _vm._e()], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-3baacb0e", module.exports)
  }
}

/***/ }),

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d4c0a1aaae1dba8d0c5d074236d58897.png";

/***/ }),

/***/ 591:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menuBar_vue__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menuBar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__menuBar_vue__);
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


// import Button from "../../dist/vendors";
/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        // Button,
        MenuBar: __WEBPACK_IMPORTED_MODULE_0__menuBar_vue___default.a
    },
    name: "search_paper",
    data: function data() {
        return {
            modal1: false,
            wordcloud_modal: false,
            // wordcloud_path: '',
            wordcloud_show: false,
            index_url: '/',
            register_url: '/register',
            identity: this.GLOBAL.userType,
            theme1: 'primary',
            search_results: [],
            type: '',
            pageNum: '',
            totalNum: 0
        };
    },
    created: function created() {
        this.getSearchDetails(this.$route.query.search_type, this.$route.query.search_content);
    },

    methods: {
        check_word_cloud: function check_word_cloud() {
            this.wordcloud_modal = true;
        },
        quit_word_cloud: function quit_word_cloud() {
            this.wordcloud_modal = false;
        },
        getSearchDetails: function getSearchDetails(item, content) {
            this.wordcloud_show = false;
            var that = this;
            console.log("get: item + " + item + "; content + " + content + "; pageNum + " + this.pageNum);
            if (this.$route.query.advance_data) {
                var params = { 'keyw_and': this.$route.query.advance_data.and,
                    'keyw_or': this.$route.query.advance_data.or,
                    'keyw_not': this.$route.query.advance_data.none,
                    'title': content,
                    'author': this.$route.query.advance_writer,
                    'journal': this.$route.query.advance_book,
                    'start_time': this.$route.query.advance_time[0],
                    'end_time': this.$route.query.advance_time[1],
                    'page_num': this.pageNum
                };
                this.$http.post("http://qsz.lkc1621.xyz/api/v1/search_paper_nb", params).then(function (res) {
                    console.log(res);
                    var detail = JSON.parse(res.body);
                    console.log(detail);
                    that.search_results = detail.msg;
                    that.type = item;
                    that.wordcloud_show = true;
                    if (that.pageNum == '') that.GLOBAL.setWordCloud(detail.word_cloud_path);
                    if (detail.reason == "未搜索到该专家" || detail.reason == "未查找到相关论文" || detail.reason == "未查找到相关机构") alert(detail.reason);
                    if (detail.total_count != 0) that.totalNum = detail.total_count;
                    if (that.pageNum == '') that.pageNum = 1;

                    window.scrollTo(0, 0);
                }, function (res) {
                    console.log(res);
                });
            } else if (this.$route.query.extra_org_name) {
                var _params = { 'organization_name': this.$route.query.extra_org_name, 'professor_name': content };
                this.$http.post("http://qsz.lkc1621.xyz/api/v1/search_professor_nb", _params).then(function (res) {
                    console.log(res);
                    var detail = JSON.parse(res.body);
                    console.log(detail);
                    that.search_results = detail.msg;
                    that.type = item;
                    that.wordcloud_show = false;
                    if (detail.reason == "未搜索到该专家" || detail.reason == "未查找到相关论文" || detail.reason == "未查找到相关机构") alert(detail.reason);
                    if (detail.total_count != 0) that.totalNum = detail.total_count;
                    if (that.pageNum == '') that.pageNum = 1;

                    window.scrollTo(0, 0);
                }, function (res) {
                    console.log(res);
                });
            } else {
                var param = { 'page_num': this.pageNum };
                console.log(param);
                this.$http.get(this.GLOBAL.domain + "/api/v1/search_" + item + "/" + content, { params: param }).then(function (res) {
                    var detail = JSON.parse(res.body);
                    console.log("search success");
                    console.log(detail);
                    that.search_results = detail.msg;
                    that.type = item;
                    console.log(that.GLOBAL.wordcloud_path);
                    if (detail.reason == "未搜索到该专家" || detail.reason == "未查找到相关论文" || detail.reason == "未查找到相关机构") alert(detail.reason);
                    if (item == 'paper' || item == 'organization') {
                        that.totalNum = detail.count;
                        if (item == 'paper') {
                            that.wordcloud_show = true;
                            if (that.pageNum == '') that.GLOBAL.setWordCloud(detail.word_cloud_path);
                        }
                    }
                    if (that.pageNum == '') that.pageNum = 1;
                    window.scrollTo(0, 0);
                }, function (res) {
                    console.log(res);
                });
            }
        },
        search: function search(item, content) {
            if (item == "") {
                alert("请输入搜索类型");
                return;
            }
            if (content == "") return;
            this.pageNum = '';
            var that = this;

            this.$router.push({
                query: {
                    search_content: content,
                    search_type: item
                }
            });
            console.log("item + " + item + "; search + " + content);
            this.getSearchDetails(item, content);
        },
        change_page: function change_page(value) {

            this.pageNum = value;
            this.getSearchDetails(this.$route.query.search_type, this.$route.query.search_content);
        }
    },
    computed: {}

});

/***/ }),

/***/ 859:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 877:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "min-width": "900px"
    }
  }, [_c('div', {
    staticClass: "top_xf"
  }, [_c('MenuBar', {
    attrs: {
      "input": true,
      "search_content": this.$route.query.search_content,
      "search_item": this.$route.query.search_type
    },
    on: {
      "search": _vm.search
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "sc_detail",
    attrs: {
      "id": "showArea"
    }
  }, [(_vm.wordcloud_show) ? _c('Button', {
    staticStyle: {
      "margin-left": "70%"
    },
    on: {
      "click": _vm.check_word_cloud
    }
  }, [_vm._v("点击查看词云")]) : _vm._e(), _vm._v(" "), _c('Modal', {
    attrs: {
      "draggable": "",
      "scrollable": "",
      "title": "词云"
    },
    model: {
      value: (_vm.wordcloud_modal),
      callback: function($$v) {
        _vm.wordcloud_modal = $$v
      },
      expression: "wordcloud_modal"
    }
  }, [(_vm.wordcloud_modal) ? _c('div', {
    staticStyle: {
      "text-align": "center"
    }
  }, [_c('img', {
    staticStyle: {
      "display": "block",
      "width": "100%",
      "height": "380px",
      "object-fit": "cover"
    },
    attrs: {
      "src": this.GLOBAL.wordcloud_path
    }
  })]) : _vm._e(), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('Button', {
    attrs: {
      "type": "primary",
      "size": "large"
    },
    on: {
      "click": _vm.quit_word_cloud
    }
  }, [_vm._v("确定")])], 1)]), _vm._v(" "), _vm._l((_vm.search_results), function(item) {
    return _c('div', {
      staticClass: "sc_content"
    }, [(_vm.type == 'paper') ? _c('div', [_c('div', {
      staticClass: "c_font"
    }, [_c('router-link', {
      attrs: {
        "tag": "a",
        "to": {
          path: '/paperDetails',
          query: {
            paperID: item.paperid
          }
        },
        "target": "_blank"
      },
      domProps: {
        "innerHTML": _vm._s(item.name)
      }
    }, [_vm._v(_vm._s(item.name))])], 1), _vm._v(" "), _c('div', {
      staticClass: "c_abstract",
      domProps: {
        "innerHTML": _vm._s(item.abstract)
      }
    }, [_vm._v(_vm._s(item.abstract))]), _vm._v(" "), _c('div', {
      staticClass: "paper-author"
    }, [_c('b', [_vm._v("作者：")]), _vm._v(" "), _vm._l((item.author), function(value, key) {
      return _c('span', {
        staticStyle: {
          "display": "inline"
        }
      }, [_c('div', {
        staticStyle: {
          "display": "inline"
        },
        domProps: {
          "innerHTML": _vm._s(value)
        }
      }, [_vm._v("\n                            " + _vm._s(value) + "\n                        ")]), _vm._v("  \n                    ")])
    }), _vm._v(" "), _c('b', [_vm._v("年份：")]), _vm._v(" "), _c('span', {
      staticStyle: {
        "display": "inline"
      },
      domProps: {
        "innerHTML": _vm._s(item.year)
      }
    }, [_vm._v(_vm._s(item.year))]), _c('br'), _vm._v(" "), _c('b', [_vm._v("来源：")]), _vm._v(" "), _c('span', {
      staticStyle: {
        "display": "inline"
      }
    }, [_vm._v("\n                          \n                        "), _c('div', {
      staticStyle: {
        "display": "inline"
      },
      domProps: {
        "innerHTML": _vm._s(item.source_journal.name)
      }
    }, [_vm._v("\n                            " + _vm._s(item.source_journal.name) + "\n                        ")]), _vm._v("    \n                        "), _c('div', {
      staticStyle: {
        "display": "inline"
      },
      domProps: {
        "innerHTML": _vm._s(item.source_journal.date)
      }
    }, [_vm._v("\n                            " + _vm._s(item.source_journal.date) + "\n                        ")]), _vm._v("\n                            \n                    ")]), _c('br')], 2), _vm._v(" "), _c('div', {
      staticClass: "paper-key"
    }, [_c('b', [_vm._v("关键词：")]), _vm._v(" "), _vm._l((item.keyword), function(keyword) {
      return _c('div', {
        staticStyle: {
          "display": "inline"
        }
      }, [_c('div', {
        staticStyle: {
          "display": "inline"
        },
        domProps: {
          "innerHTML": _vm._s(keyword)
        }
      }, [_vm._v(_vm._s(keyword))]), _vm._v(" ")])
    })], 2), _vm._v(" "), _c('Divider')], 1) : (_vm.type == 'professor') ? _c('div', [_c('div', {
      staticClass: "searchResultItem"
    }, [_c('router-link', {
      staticClass: "searchResult_pic",
      attrs: {
        "tag": "a",
        "to": {
          path: '/professorDetails',
          query: {
            profID: item.scid
          }
        },
        "target": "_blank"
      }
    }, [_c('img', {
      attrs: {
        "src": __webpack_require__(407),
        "alt": "图片",
        "width": "64",
        "height": "64"
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "searchResult_text"
    }, [_c('router-link', {
      staticClass: "personName",
      attrs: {
        "to": {
          path: '/professorDetails',
          query: {
            profID: item.scid
          }
        },
        "target": "_blank"
      }
    }, [_c('div', {
      attrs: {
        "id": "professorName"
      },
      domProps: {
        "innerHTML": _vm._s(item.name)
      }
    }, [_vm._v(_vm._s(item.name))])]), _vm._v(" "), _c('p', {
      staticClass: "personInstitution",
      domProps: {
        "innerHTML": _vm._s(item.mechanism)
      }
    }, [_vm._v(_vm._s(item.mechanism))]), _vm._v(" "), _c('div', {
      staticClass: "personNum"
    }, [_c('p', {
      staticClass: "personNumItem"
    }, [_c('span', [_vm._v("发表文章：")]), _vm._v(" "), _c('span', {
      staticClass: "color_black"
    }, [_vm._v(_vm._s(item.resultsnumber))])]), _vm._v(" "), _c('p', {
      staticClass: "personNumItem"
    }, [_c('span', [_vm._v("被引次数：")]), _vm._v(" "), _c('span', {
      staticClass: "color_black"
    }, [_vm._v(_vm._s(item.citedtimes))])])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
      staticClass: "personField"
    }, [_c('span', {
      staticStyle: {
        "display": "inline-block"
      }
    }, [_vm._v("研究领域：")]), _vm._v(" "), _vm._l((item.field), function(field) {
      return _c('div', {
        staticClass: "color_black",
        staticStyle: {
          "display": "inline"
        }
      }, [_vm._v("\n                                " + _vm._s(field) + " \n                            ")])
    })], 2)], 1)], 1)]) : (_vm.type == 'organization') ? _c('div', [_c('div', {
      staticClass: "c_font"
    }, [_c('a', {
      attrs: {
        "href": item.url,
        "target": "_blank"
      }
    }, [_vm._v(_vm._s(item.mechanism))])]), _vm._v(" "), _vm._l((item.introduction), function(intro) {
      return _c('div', {
        staticClass: "c_abstract"
      }, [_vm._v(_vm._s(intro))])
    }), _vm._v(" "), _c('Divider')], 2) : _vm._e()])
  }), _vm._v(" "), (this.$route.query.search_type == 'paper' || this.$route.query.search_type == 'organization') ? _c('div', {
    staticStyle: {
      "margin": "3% 20% 10% 0"
    }
  }, [_c('Page', {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      "current": _vm.pageNum,
      "total": _vm.totalNum,
      "page-size": 10,
      "simple": ""
    },
    on: {
      "on-change": _vm.change_page
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('BackTop', {
    attrs: {
      "height": 100,
      "bottom": 200
    }
  }, [_c('Icon', {
    staticClass: "top",
    attrs: {
      "type": "md-arrow-up"
    }
  }), _vm._v(" "), _c('br'), _vm._v("返回顶端\n        ")], 1)], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-5dd27f4d", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=3.chunk.js.map