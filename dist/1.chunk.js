webpackJsonp([1],{

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(856)
__webpack_require__(857)

var Component = __webpack_require__(70)(
  /* script */
  __webpack_require__(588),
  /* template */
  __webpack_require__(875),
  /* scopeId */
  "data-v-1b7adf5e",
  /* cssModules */
  null
)
Component.options.__file = "D:\\大三上\\软件系统需求和设计\\frontend\\src\\views\\news.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] news.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1b7adf5e", Component.options)
  } else {
    hotAPI.reload("data-v-1b7adf5e", Component.options)
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

/***/ 588:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        MenuBar: __WEBPACK_IMPORTED_MODULE_0__menuBar_vue___default.a
    },
    name: "news",
    data: function data() {
        return {
            modal_delete: false,
            modal_clean: false,
            modal_msg: false,
            modal_verify: false,

            del_msg_id: '',
            del_msg_type: '',
            apply_id: '',

            news_detail: '',
            news_id: '',

            theme3: 'light',
            identity: this.GLOBAL.userType,
            //identity:'ADMIN', //EXPERT USER visitor ADMIN
            news_type: 'comments', //comments like system verify
            comments_news: [
                // {
                //     msg_id: 'c1',
                //     content: 'message1',
                //     status: 'No',
                //     date: '2019-6-2 15:31:28',
                // },
                // {
                //     msg_id: 'c2',
                //     content: 'message2',
                //     status: 'Yes',
                //     date: '2019-6-2 15:31:28',
                // },
                // {
                //     msg_id: 'c3',
                //     content: 'message3',
                //     status: 'No',
                //     date: '2019-6-2 15:31:28',
                // },
                // {
                //     msg_id: 'c4',
                //     content: 'message4',
                //     status: 'Yes',
                //     date: '2019-6-2 15:31:28',
                // },
                // {
                //     msg_id: 'c5',
                //     content: 'message5',
                //     status: 'No',
                //     date: '2019-6-2 15:31:28',
                // },
            ],
            like_news: [
                // {
                //     msg_id: 'l1',
                //     content: 'message1',
                //     status: 'Yes',
                //     date: '2019-6-2 15:31:28',
                // },
                // {
                //     msg_id: 'l2',
                //     content: 'message2',
                //     status: 'No',
                //     date: '2019-6-2 15:31:28',
                // },
                // {
                //     msg_id: 'l3',
                //     content: 'message3',
                //     status: 'Yes',
                //     date: '2019-6-2 15:31:28',
                // },
                // {
                //     msg_id: 'l4',
                //     content: 'message4',
                //     status: 'No',
                //     date: '2019-6-2 15:31:28',
                // },
                // {
                //     msg_id: 'l5',
                //     content: 'message5',
                //     status: 'Yes',
                //     date: '2019-6-2 15:31:28',
                // },
            ],
            system_news: [
                // {
                //     msg_id: 's1',
                //     content: 'message1',
                //     status: 'No',
                //     date: '2019-6-2 15:31:28',
                // },
                // {
                //     msg_id: 's2',
                //     content: 'message2',
                //     status: 'Yes',
                //     date: '2019-6-2 15:31:28',
                // },
                // {
                //     msg_id: 's3',
                //     content: 'message3',
                //     status: 'No',
                //     date: '2019-6-2 15:31:28',
                // },
                // {
                //     msg_id: 's4',
                //     content: 'message4',
                //     status: 'Yes',
                //     date: '2019-6-2 15:31:28',
                // },
                // {
                //     msg_id: 's5',
                //     content: 'message5',
                //     status: 'Yes',
                //     date: '2019-6-2 15:31:28',
                // },
            ],
            verify_news: [
                // {
                //     msg_id: 'v1',
                //     content: 'message1',
                //     status: 'No',
                //     date: '2019-6-2 15:31:28',
                //     apply_id: '5cf37fdc9c89e67433cbbea4',
                // },
                // {
                //     msg_id: 'v2',
                //     content: 'message2',
                //     status: 'No',
                //     date: '2019-6-2 15:31:28',
                //     apply_id: '',
                // },
                // {
                //     msg_id: 'v3',
                //     content: 'message3',
                //     status: 'Yes',
                //     date: '2019-6-2 15:31:28',
                //     apply_id: '',
                // },
                // {
                //     msg_id: 'v4',
                //     content: 'message4',
                //     status: 'Yes',
                //     date: '2019-6-2 15:31:28',
                //     apply_id: '',
                // },
                // {
                //     msg_id: 'v5',
                //     content: 'message5',
                //     status: 'Yes',
                //     date: '2019-6-2 15:31:28',
                //     apply_id: '',
                // },
            ],
            apply_msg: []
        };
    },

    methods: {
        check_news: function check_news() {
            var _this = this;

            this.change_news_status(this.news_id);
            setTimeout(function () {
                _this.modal_msg = false;
                _this.$Message.success('已读该信息');
            }, 300);
        },
        show_msg_modal: function show_msg_modal(content, id) {
            this.modal_msg = true;
            this.news_detail = content;
            this.news_id = id;
        },
        show_verify_modal: function show_verify_modal(apply_id, msg_id, status) {
            this.modal_verify = true;
            this.apply_id = apply_id;
            console.log('apply_id ' + apply_id);
            this.$http.get(this.GLOBAL.domain + '/api/v1/get_apply', { params: { 'apply_id': this.apply_id } }).then(function (res) {
                var detail = JSON.parse(res.body);
                console.log(detail);
                if (detail.state == 'fail') {
                    this.$Message.info('Fail，未查找到信息');
                } else {
                    this.apply_msg = detail.msg;
                    console.log('msg_id ' + msg_id);
                    if (status == 'No') this.change_news_status(msg_id);
                }
            });
        },
        check_verify: function check_verify(type) {
            if (type === 'Yes') {
                console.log("YES");
                var params = { 'apply_id': this.apply_id, 'deal': true };
                console.log(params);
                this.$http.get(this.GLOBAL.domain + '/api/v1/deal_certification', { params: params }).then(function (res) {
                    var _this2 = this;

                    var detail = JSON.parse(res.body);
                    console.log(detail);
                    if (detail.state == 'success') {
                        setTimeout(function () {
                            _this2.modal_verify = false;
                            _this2.$Message.success('已同意该认证');
                        }, 300);
                    } else {
                        this.modal_verify = false;
                        this.$Message.error(detail.reasons);
                    }
                }, function (res) {
                    var detail = JSON.parse(res.body);
                    console.log('Failed');
                    console.log(detail);
                });
            } else {
                console.log("NO");
                var _params = { 'apply_id': this.apply_id, 'deal': false };
                console.log(_params);
                this.$http.get(this.GLOBAL.domain + '/api/v1/deal_certification', { params: _params }).then(function (res) {
                    var _this3 = this;

                    var detail = JSON.parse(res.body);
                    console.log(detail);
                    if (detail.state == 'success') {
                        setTimeout(function () {
                            _this3.modal_verify = false;
                            _this3.$Message.success('已拒绝该认证');
                        }, 300);
                    } else {
                        this.modal_verify = false;
                        this.$Message.error(detail.reasons);
                    }
                }, function (res) {
                    var detail = JSON.parse(res.body);
                    console.log('Failed');
                    console.log(detail);
                });
            }
        },
        delete_news: function delete_news() {
            var type;
            switch (this.news_type) {
                case 'comments':
                    type = 'REPLY';
                    break;
                case 'like':
                    type = 'LIKE';
                    break;
                case 'system':
                    type = 'SYSTEM';
                    break;
                case 'verify':
                    type = 'APPLY';
                    break;
            }
            var params = { 'user_id': this.GLOBAL.email, 'message_type': type };
            this.$http.post(this.GLOBAL.domain + '/api/v1/delete_message', params).then(function (res) {
                var _this4 = this;

                var detail = JSON.parse(res.body);
                console.log(detail);
                if (detail.state == 'success') {
                    this.refresh_news();
                    setTimeout(function () {
                        _this4.modal_clean = false;
                        _this4.$Message.success('成功清空 ' + _this4.news_type + ' 信息');
                    }, 300);
                } else {
                    this.modal_clean = false;
                    // this.$Message.error('出现错误，清空失败');
                }
            }, function (res) {
                var detail = JSON.parse(res.body);
                console.log("Failed");
                console.log(detail);
            });
            if (this.news_type == 'system') {
                var _params2 = { 'user_id': this.GLOBAL.email, 'message_type': 'APPLYRESULT' };
                this.$http.post(this.GLOBAL.domain + '/api/v1/delete_message', _params2).then(function (res) {
                    var _this5 = this;

                    var detail = JSON.parse(res.body);
                    console.log(detail);
                    if (detail.state == 'success') {
                        this.refresh_news();
                        setTimeout(function () {
                            _this5.modal_clean = false;
                            // this.$Message.success('成功清空 '+ this.news_type + ' 信息');
                        }, 300);
                    } else {
                        this.modal_clean = false;
                        // this.$Message.error('出现错误，清空失败');
                    }
                }, function (res) {
                    var detail = JSON.parse(res.body);
                    console.log("Failed");
                    console.log(detail);
                });
            }
        },
        show_del_modal: function show_del_modal(msg_id) {
            this.modal_delete = true;
            this.del_msg_id = msg_id;
            console.log(this.del_msg_id);
        },
        del: function del() {
            var params = { 'user_id': this.GLOBAL.email, 'message_id': this.del_msg_id };
            this.$http.post(this.GLOBAL.domain + '/api/v1/delete_message', params).then(function (res) {
                var _this6 = this;

                var detail = JSON.parse(res.body);
                console.log(detail);
                if (detail.state == 'success') {
                    this.refresh_news();
                    setTimeout(function () {
                        _this6.modal_delete = false;
                        _this6.$Message.success('成功删除');
                    }, 300);
                } else {
                    this.modal_delete = false;
                    this.$Message.error('出现错误，删除失败');
                }
            }, function (res) {
                console.log("Failed");
                var detail = JSON.parse(res.body);
                console.log(detail);
            });
        },
        change_news_status: function change_news_status(id) {
            console.log(id);
            var params = { 'msg_id': id };
            this.$http.get(this.GLOBAL.domain + '/api/v1/change_message_status', { params: params }).then(function (res) {
                var detail = JSON.parse(res.body);
                console.log(detail);
                if (detail.state == 'success') {
                    console.log('success');
                    this.refresh_news();
                } else {
                    this.$Message.error(detail.reason);
                }
            }, function (res) {
                var detail = JSON.parse(res.body);
                console.log("Failed");
                console.log(detail);
            });
        },
        refresh_news: function refresh_news() {
            var all_news = [];
            this.verify_news = [];
            this.system_news = [];
            this.comments_news = [];
            this.like_news = [];
            this.$http.get(this.GLOBAL.domain + '/api/v1/get_sys_message', { params: { 'email': this.GLOBAL.email } }).then(function (res) {
                var detail = JSON.parse(res.body);
                console.log(detail);
                console.log(detail.messages);
                // console.log(this.verify_news);
                // console.log(this.system_news);
                if (detail.state == 'fail') {
                    this.$Message.info('未查找到信息');
                } else {
                    // console.log('Test' + detail);
                    all_news = detail.messages;
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                        for (var _iterator = all_news[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var news = _step.value;

                            // console.log(news);
                            switch (news.type) {
                                case 'APPLY':
                                    this.verify_news.unshift(news);
                                    break;
                                case 'SYSTEM':
                                    this.system_news.unshift(news);
                                    break;
                                case 'REPLY':
                                    this.comments_news.unshift(news);
                                    break;
                                case 'APPLYRESULT':
                                    this.system_news.unshift(news);
                                default:
                                    break;
                            }
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }

                    console.log(this.verify_news);
                    console.log(this.system_news);
                }
            }, function (res) {
                console.log(res);
            });
        }
    },
    created: function created() {
        this.refresh_news();
    }
});

/***/ }),

/***/ 856:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 857:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 870:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1334c9184c32f14b8d38725b5ed83da2.png";

/***/ }),

/***/ 875:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "news_page",
    staticStyle: {
      "width": "100%",
      "background-color": "white",
      "height": "650px"
    }
  }, [_c('MenuBar', {
    staticStyle: {
      "background": "#515a6e"
    },
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
  }), _vm._v(" "), (_vm.identity == 'VISITOR') ? _c('div', {
    staticStyle: {
      "width": "100%",
      "text-align": "center",
      "height": "450px"
    }
  }, [_c('img', {
    staticStyle: {
      "margin-left": "3%",
      "height": "600px",
      "width": "80%"
    },
    attrs: {
      "src": __webpack_require__(870)
    }
  })]) : _c('div', {
    staticStyle: {
      "margin-top": "60px"
    }
  }, [_c('Row', [_c('Col', {
    attrs: {
      "span": "7"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (false),
      expression: "false"
    }],
    staticClass: "user-intro",
    staticStyle: {
      "text-align": "center",
      "width": "100%",
      "margin-top": "20px",
      "margin-bottom": "20px"
    }
  }, [_c('div', {
    staticClass: "person-image",
    staticStyle: {
      "text-align": "center"
    }
  }, [_c('img', {
    staticStyle: {
      "margin": "5px"
    },
    attrs: {
      "src": __webpack_require__(407),
      "height": "50px"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "person-detail"
  }, [_vm._v("\n                            用户名：" + _vm._s(this.GLOBAL.userName) + "\n                            "), _c('br'), _vm._v("\n                            邮箱：" + _vm._s(this.GLOBAL.email) + "\n                        ")])]), _vm._v(" "), _c('Menu', {
    staticStyle: {
      "padding-top": "20px",
      "max-width": "80%",
      "z-index": "0"
    },
    attrs: {
      "theme": _vm.theme3,
      "active-name": "1"
    }
  }, [_c('MenuItem', {
    attrs: {
      "name": "1"
    },
    nativeOn: {
      "click": function($event) {
        _vm.news_type = 'comments'
      }
    }
  }, [_c('Icon', {
    attrs: {
      "type": "md-chatbubbles"
    }
  }), _vm._v("\n                            评论\n                        ")], 1), _vm._v(" "), _c('MenuItem', {
    attrs: {
      "name": "3"
    },
    nativeOn: {
      "click": function($event) {
        _vm.news_type = 'system'
      }
    }
  }, [_c('Icon', {
    attrs: {
      "type": "md-alert"
    }
  }), _vm._v("\n                            系统通知\n                        ")], 1), _vm._v(" "), (_vm.identity == 'ADMIN') ? _c('MenuItem', {
    attrs: {
      "name": "4"
    },
    nativeOn: {
      "click": function($event) {
        _vm.news_type = 'verify'
      }
    }
  }, [_c('Icon', {
    attrs: {
      "type": "md-checkbox"
    }
  }), _vm._v("\n                            认证信息\n                        ")], 1) : _vm._e()], 1)], 1), _vm._v(" "), _c('Modal', {
    attrs: {
      "width": "240"
    },
    model: {
      value: (_vm.modal_delete),
      callback: function($$v) {
        _vm.modal_delete = $$v
      },
      expression: "modal_delete"
    }
  }, [_c('p', {
    staticStyle: {
      "color": "#f60",
      "text-align": "center"
    },
    attrs: {
      "slot": "header"
    },
    slot: "header"
  }, [_c('Icon', {
    attrs: {
      "type": "ios-information-circle"
    }
  }), _vm._v(" "), _c('span', [_vm._v("删除确认")])], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "text-align": "center"
    }
  }, [_c('p', {
    staticStyle: {
      "font-size": "16px"
    }
  }, [_vm._v("您是否要删除该信息")])]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('Button', {
    attrs: {
      "type": "error",
      "size": "large",
      "long": ""
    },
    on: {
      "click": _vm.del
    }
  }, [_vm._v("删除")])], 1)]), _vm._v(" "), _c('Modal', {
    attrs: {
      "width": "240"
    },
    model: {
      value: (_vm.modal_clean),
      callback: function($$v) {
        _vm.modal_clean = $$v
      },
      expression: "modal_clean"
    }
  }, [_c('p', {
    staticStyle: {
      "color": "#2baee9",
      "text-align": "center"
    },
    attrs: {
      "slot": "header"
    },
    slot: "header"
  }, [_c('Icon', {
    attrs: {
      "type": "ios-information-circle"
    }
  }), _vm._v(" "), _c('span', [_vm._v("清空确认")])], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "text-align": "center"
    }
  }, [_c('p', {
    staticStyle: {
      "font-size": "16px"
    }
  }, [_vm._v("您是否要清空该页面所有信息")])]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('Button', {
    attrs: {
      "type": "warning",
      "size": "large",
      "long": ""
    },
    on: {
      "click": _vm.delete_news
    }
  }, [_vm._v("清空")])], 1)]), _vm._v(" "), _c('Modal', {
    attrs: {
      "draggable": "",
      "scrollable": "",
      "title": "消息详情"
    },
    model: {
      value: (_vm.modal_msg),
      callback: function($$v) {
        _vm.modal_msg = $$v
      },
      expression: "modal_msg"
    }
  }, [_c('div', {
    staticStyle: {
      "font-size": "13px",
      "margin": "10px"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.news_detail) + "\n                    ")]), _vm._v(" "), _c('div', {
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
      "click": _vm.check_news
    }
  }, [_vm._v("确定")])], 1)]), _vm._v(" "), _c('Modal', {
    attrs: {
      "draggable": "",
      "scrollable": "",
      "title": "申请人详细信息"
    },
    model: {
      value: (_vm.modal_verify),
      callback: function($$v) {
        _vm.modal_verify = $$v
      },
      expression: "modal_verify"
    }
  }, [_c('div', {
    staticStyle: {
      "font-size": "14px"
    },
    model: {
      value: (_vm.apply_msg),
      callback: function($$v) {
        _vm.apply_msg = $$v
      },
      expression: "apply_msg"
    }
  }, [_c('Row', [_c('Col', {
    staticStyle: {
      "text-align": "right"
    },
    attrs: {
      "span": "8"
    }
  }, [_vm._v("\n                                姓名："), _c('br'), _vm._v("\n                                Email："), _c('br'), _vm._v("\n                                绑定ScholarID："), _c('br'), _vm._v("\n                                身份证号："), _c('br'), _vm._v("\n                                专家领域："), _c('br'), _vm._v("\n                                备注："), _c('br'), _vm._v("\n                                申请日期："), _c('br'), _vm._v("\n                                申请状态："), _c('br')]), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "16"
    }
  }, [_vm._v("\n                                " + _vm._s(_vm.apply_msg.name) + " "), _c('br'), _vm._v("\n                                " + _vm._s(_vm.apply_msg.email) + " "), _c('br'), _vm._v("\n                                " + _vm._s(_vm.apply_msg.scid) + " "), _c('br'), _vm._v("\n                                " + _vm._s(_vm.apply_msg.ID) + " "), _c('br'), _vm._v("\n                                " + _vm._s(_vm.apply_msg.field) + " "), _c('br'), _vm._v("\n                                " + _vm._s(_vm.apply_msg.text) + " "), _c('br'), _vm._v("\n                                " + _vm._s(_vm.apply_msg.date) + " "), _c('br'), _vm._v("\n                                " + _vm._s(_vm.apply_msg.state)), _c('br')])], 1)], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('Button', {
    attrs: {
      "type": "success",
      "size": "large",
      "disabled": _vm.apply_msg.state !== 'waiting'
    },
    on: {
      "click": function($event) {
        return _vm.check_verify('Yes')
      }
    }
  }, [_vm._v("同意")]), _vm._v(" "), _c('Button', {
    attrs: {
      "type": "error",
      "size": "large",
      "disabled": _vm.apply_msg.state !== 'waiting'
    },
    on: {
      "click": function($event) {
        return _vm.check_verify('No')
      }
    }
  }, [_vm._v("拒绝")])], 1)]), _vm._v(" "), _c('Col', {
    staticStyle: {
      "padding-top": "30px",
      "margin": "0px",
      "min-height": "470px"
    },
    attrs: {
      "span": "16"
    }
  }, [(_vm.news_type == 'comments') ? _c('div', {
    staticClass: "comments_news"
  }, [_c('Button', {
    staticStyle: {
      "float": "right"
    },
    on: {
      "click": function($event) {
        _vm.modal_clean = true
      }
    }
  }, [_vm._v("\n                            清空\n                        ")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('h3', [_vm._v("评论消息页")]), _vm._v(" "), _c('div', {
    staticClass: "message-list"
  }, [_c('ul', {
    staticStyle: {
      "list-style-type": "none",
      "margin-left": "5px",
      "margin-top": "5px"
    }
  }, _vm._l((_vm.comments_news), function(item) {
    return _c('li', [_c('div', {
      staticClass: "relevant-detail"
    }, [_c('Row', [_c('Col', {
      attrs: {
        "span": "19"
      }
    }, [_vm._v("\n                                                " + _vm._s(item.content) + "\n                                                "), _c('div', {
      staticStyle: {
        "display": "inline",
        "color": "#8391a5",
        "font-size": "12px",
        "margin-left": "10px",
        "float": "right"
      }
    }, [_vm._v(_vm._s(item.date))])]), _vm._v(" "), _c('Col', {
      attrs: {
        "span": "5"
      }
    }, [_c('Button', {
      staticStyle: {
        "float": "right",
        "margin-left": "5px"
      },
      attrs: {
        "type": "error",
        "size": "small"
      },
      on: {
        "click": function($event) {
          return _vm.show_del_modal(item.msg_id)
        }
      }
    }, [_vm._v("删除")]), _vm._v(" "), _c('Button', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (item.status == 'Yes'),
        expression: "item.status == 'Yes'"
      }],
      staticStyle: {
        "float": "right"
      },
      attrs: {
        "type": "success",
        "size": "small"
      }
    }, [_vm._v("已查看")]), _vm._v(" "), _c('Button', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (item.status == 'No'),
        expression: "item.status == 'No'"
      }],
      staticStyle: {
        "float": "right"
      },
      attrs: {
        "type": "info",
        "size": "small"
      },
      on: {
        "click": function($event) {
          return _vm.show_msg_modal(item.content, item.msg_id)
        }
      }
    }, [_vm._v("未查看")])], 1)], 1)], 1), _vm._v(" "), _c('Divider', {
      attrs: {
        "dashed": ""
      }
    })], 1)
  }), 0)])], 1) : _vm._e(), _vm._v(" "), (_vm.news_type == 'like') ? _c('div', {
    staticClass: "like_news"
  }, [_c('Button', {
    staticStyle: {
      "float": "right"
    },
    on: {
      "click": function($event) {
        _vm.modal_clean = true
      }
    }
  }, [_vm._v("\n                            清空\n                        ")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('h3', [_vm._v("关注消息页")]), _vm._v(" "), _c('div', {
    staticClass: "message-list"
  }, [_c('ul', {
    staticStyle: {
      "list-style-type": "none",
      "margin-left": "5px",
      "margin-top": "5px"
    }
  }, _vm._l((_vm.like_news), function(item) {
    return _c('li', [_c('div', {
      staticClass: "relevant-detail"
    }, [_c('Row', [_c('Col', {
      attrs: {
        "span": "19"
      }
    }, [_vm._v("\n                                                " + _vm._s(item.content) + "\n                                                "), _c('div', {
      staticStyle: {
        "display": "inline",
        "color": "#8391a5",
        "font-size": "12px",
        "margin-left": "10px",
        "float": "right"
      }
    }, [_vm._v(_vm._s(item.date))])]), _vm._v(" "), _c('Col', {
      attrs: {
        "span": "5"
      }
    }, [_c('Button', {
      staticStyle: {
        "float": "right",
        "margin-left": "5px"
      },
      attrs: {
        "type": "error",
        "size": "small"
      },
      on: {
        "click": function($event) {
          return _vm.show_del_modal(item.msg_id)
        }
      }
    }, [_vm._v("删除")]), _vm._v(" "), _c('Button', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (item.status == 'Yes'),
        expression: "item.status == 'Yes'"
      }],
      staticStyle: {
        "float": "right"
      },
      attrs: {
        "type": "success",
        "size": "small"
      }
    }, [_vm._v("已查看")]), _vm._v(" "), _c('Button', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (item.status == 'No'),
        expression: "item.status == 'No'"
      }],
      staticStyle: {
        "float": "right"
      },
      attrs: {
        "type": "info",
        "size": "small"
      },
      on: {
        "click": function($event) {
          return _vm.show_msg_modal(item.content, item.msg_id)
        }
      }
    }, [_vm._v("未查看")])], 1)], 1)], 1), _vm._v(" "), _c('Divider', {
      attrs: {
        "dashed": ""
      }
    })], 1)
  }), 0)])], 1) : _vm._e(), _vm._v(" "), (_vm.news_type == 'system') ? _c('div', {
    staticClass: "system_news"
  }, [_c('Button', {
    staticStyle: {
      "float": "right"
    },
    on: {
      "click": function($event) {
        _vm.modal_clean = true
      }
    }
  }, [_vm._v("\n                            清空\n                        ")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('h3', [_vm._v("系统消息页")]), _vm._v(" "), _c('div', {
    staticClass: "message-list"
  }, [_c('ul', {
    staticStyle: {
      "list-style-type": "none",
      "margin-left": "5px",
      "margin-top": "5px"
    }
  }, _vm._l((_vm.system_news), function(item) {
    return _c('li', [_c('div', {
      staticClass: "relevant-detail"
    }, [_c('Row', [_c('Col', {
      attrs: {
        "span": "19"
      }
    }, [_vm._v("\n                                                " + _vm._s(item.content) + "\n                                                "), _c('div', {
      staticStyle: {
        "display": "inline",
        "color": "#8391a5",
        "font-size": "12px",
        "margin-left": "10px",
        "float": "right"
      }
    }, [_vm._v(_vm._s(item.date))])]), _vm._v(" "), _c('Col', {
      attrs: {
        "span": "5"
      }
    }, [_c('Button', {
      staticStyle: {
        "float": "right",
        "margin-left": "5px"
      },
      attrs: {
        "type": "error",
        "size": "small"
      },
      on: {
        "click": function($event) {
          return _vm.show_del_modal(item.msg_id)
        }
      }
    }, [_vm._v("删除")]), _vm._v(" "), _c('Button', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (item.status == 'Yes'),
        expression: "item.status == 'Yes'"
      }],
      staticStyle: {
        "float": "right"
      },
      attrs: {
        "type": "success",
        "size": "small"
      }
    }, [_vm._v("已查看")]), _vm._v(" "), _c('Button', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (item.status == 'No'),
        expression: "item.status == 'No'"
      }],
      staticStyle: {
        "float": "right"
      },
      attrs: {
        "type": "info",
        "size": "small"
      },
      on: {
        "click": function($event) {
          return _vm.show_msg_modal(item.content, item.msg_id)
        }
      }
    }, [_vm._v("未查看")])], 1)], 1)], 1), _vm._v(" "), _c('Divider', {
      attrs: {
        "dashed": ""
      }
    })], 1)
  }), 0)])], 1) : _vm._e(), _vm._v(" "), (_vm.news_type == 'verify') ? _c('div', {
    staticClass: "verify_news"
  }, [_c('Button', {
    staticStyle: {
      "float": "right"
    },
    on: {
      "click": function($event) {
        _vm.modal_clean = true
      }
    }
  }, [_vm._v("\n                            清空\n                        ")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('h3', [_vm._v("认证消息页")]), _vm._v(" "), _c('div', {
    staticClass: "message-list"
  }, [_c('ul', {
    staticStyle: {
      "list-style-type": "none",
      "margin-left": "5px",
      "margin-top": "5px"
    }
  }, _vm._l((_vm.verify_news), function(item) {
    return _c('li', [_c('div', {
      staticClass: "relevant-detail"
    }, [_c('Row', [_c('Col', {
      attrs: {
        "span": "19"
      }
    }, [_vm._v("\n                                                " + _vm._s(item.content) + "\n                                                "), _c('div', {
      staticStyle: {
        "display": "inline",
        "color": "#8391a5",
        "font-size": "12px",
        "margin-left": "10px",
        "float": "right"
      }
    }, [_vm._v(_vm._s(item.date))])]), _vm._v(" "), _c('Col', {
      attrs: {
        "span": "5"
      }
    }, [_c('Button', {
      staticStyle: {
        "float": "right",
        "margin-left": "5px"
      },
      attrs: {
        "type": "error",
        "size": "small"
      },
      on: {
        "click": function($event) {
          return _vm.show_del_modal(item.msg_id)
        }
      }
    }, [_vm._v("删除")]), _vm._v(" "), _c('Button', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (item.status == 'Yes'),
        expression: "item.status == 'Yes'"
      }],
      staticStyle: {
        "float": "right"
      },
      attrs: {
        "type": "success",
        "size": "small"
      },
      on: {
        "click": function($event) {
          return _vm.show_verify_modal(item.apply_id, item.msg_id, item.status)
        }
      }
    }, [_vm._v("已查看")]), _vm._v(" "), _c('Button', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (item.status == 'No'),
        expression: "item.status == 'No'"
      }],
      staticStyle: {
        "float": "right"
      },
      attrs: {
        "type": "info",
        "size": "small"
      },
      on: {
        "click": function($event) {
          return _vm.show_verify_modal(item.apply_id, item.msg_id, item.status)
        }
      }
    }, [_vm._v("未查看")])], 1)], 1)], 1), _vm._v(" "), _c('Divider', {
      attrs: {
        "dashed": ""
      }
    })], 1)
  }), 0)])], 1) : _vm._e()])], 1), _vm._v(" "), _c('Layout', {
    attrs: {
      "id": "layout"
    }
  }, [_c('Footer', {
    staticClass: "layout-footer-center",
    staticStyle: {
      "background-color": "#666666",
      "color": "#eeeeee"
    }
  }, [_vm._v("\n                    2019-2019 © ZebraScience\n                    "), _c('router-link', {
    staticStyle: {
      "margin-left": "20px",
      "color": "#eeeeee"
    },
    attrs: {
      "to": {
        path: '/aboutUs'
      }
    }
  }, [_vm._v("联系我们")])], 1)], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-1b7adf5e", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=1.chunk.js.map