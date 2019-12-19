webpackJsonp([7],{

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(869)

var Component = __webpack_require__(70)(
  /* script */
  __webpack_require__(588),
  /* template */
  __webpack_require__(873),
  /* scopeId */
  "data-v-146d4d57",
  /* cssModules */
  null
)
Component.options.__file = "D:\\大三上\\软件系统需求和设计\\frontend\\src\\views\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-146d4d57", Component.options)
  } else {
    hotAPI.reload("data-v-146d4d57", Component.options)
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

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2658742e6c6f222f5c8f65eec5f9ecc7.jpg";

/***/ }),

/***/ 492:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "826b2b83dad0c3253a12653a37b6011f.png";

/***/ }),

/***/ 588:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__aboutUs_vue__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__aboutUs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__aboutUs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cookieUtil_vue__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cookieUtil_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__cookieUtil_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        AboutUs: __WEBPACK_IMPORTED_MODULE_0__aboutUs_vue___default.a
    },
    data: function data() {
        return {
            modal1: false,
            email: '',
            password: '',
            identity: this.GLOBAL.userType,
            search_item: '',
            search_content: '',
            professorDetails_url: '/professorDetails',
            user_url: '/user',
            paperDetails_url: '/paperDetails',
            news_url: '/news',
            certify_url: '/certify',
            setting_url: '/setting',
            advance: false,
            and_times: 1,
            or_times: 1,
            none_times: 1,
            advance_data: {
                and: [],
                or: [],
                none: []
            },
            advance_writer: '',
            advance_book: '',
            advance_time: [1900, 2019],
            extra_org: false,
            extra_org_name: ''
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
                console.log(res);
                var s = JSON.parse(res.body);
                if (s["state"] == "fail") {
                    this.$Message.info(s["reason"]);
                } else {
                    // this.$Message.info('成功登录');
                    console.log("qqqq" + this.GLOBAL.userType);
                    this.GLOBAL.setUserType(s["msg"]["user_type"]);
                    console.log("hhhh" + this.GLOBAL.userType);
                    this.identity = this.GLOBAL.userType;
                    this.GLOBAL.setUserName(s["msg"]["username"]);
                    this.GLOBAL.setUserEmail(s["msg"]["email"]);
                    this.email = this.GLOBAL.email;
                    this.GLOBAL.setFollowList(s["msg"]["follow_list"]);
                    this.like_sch = this.GLOBAL.followList;
                    this.GLOBAL.setCollectList(s["msg"]["star_list"]);
                    this.star_paper_items = this.GLOBAL.collectList;
                    if (s["msg"]["avatar"] != '' && s["msg"]["avatar"] != null) {
                        this.GLOBAL.setAvatar(s["msg"]["avatar"]);
                    }
                    if (this.GLOBAL.userType == 'EXPERT') {
                        // console.log(s["msg"]["paper_list"]);
                        this.GLOBAL.setMyList(s["msg"]["paper_list"]);
                    }
                    __WEBPACK_IMPORTED_MODULE_1__cookieUtil_vue___default.a.methods.setCookie('email', this.email);
                    __WEBPACK_IMPORTED_MODULE_1__cookieUtil_vue___default.a.methods.setCookie('password', this.password);

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
            __WEBPACK_IMPORTED_MODULE_1__cookieUtil_vue___default.a.methods.delCookie('email');
            __WEBPACK_IMPORTED_MODULE_1__cookieUtil_vue___default.a.methods.delCookie('password');
        },
        jump_register: function jump_register() {
            this.$router.push({ path: '/register' });
        },
        search: function search() {
            console.log(this.advance_data);
            if (this.search_content == "") {
                alert("请输入搜索内容");
                return;
            }
            if (this.search_item == '') {
                alert("请选择搜索类型");
                return;
            }

            if (this.search_item == 'paper' && this.advance) {
                console.log(this.advance_data);
                if (this.advance_time[0] < 0 || this.advance_time[1] > 2019) {
                    alert("请输入正确的时间");
                    return;
                }
                this.$router.push({
                    name: 'search_detail',
                    query: {
                        search_content: this.search_content,
                        search_type: this.search_item,
                        advance_data: this.advance_data,
                        advance_writer: this.advance_writer,
                        advance_time: this.advance_time,
                        advance_book: this.advance_book
                    }
                });
            } else if (this.search_item == 'professor' && this.extra_org) {
                // if(this.extra_org_name == '')
                // {
                //     alert("请输入所在机构");
                //     return;
                // }
                this.$router.push({
                    name: 'search_detail',
                    query: {
                        search_content: this.search_content,
                        search_type: this.search_item,
                        extra_org_name: this.extra_org_name
                    }
                });
            } else {
                this.$router.push({
                    name: 'search_detail',
                    query: {
                        search_content: this.search_content,
                        search_type: this.search_item
                    }
                });
            }
        },
        init: function init() {
            this.and_times = 1;
            this.or_times = 1;
            this.none_times = 1;
            this.advance_data.and = [];
            this.advance_data.or = [];
            this.advance_data.none = [];
            this.extra_org_name = '';
        }
    },
    created: function created() {
        this.email = __WEBPACK_IMPORTED_MODULE_1__cookieUtil_vue___default.a.methods.getCookie('email');
        this.password = __WEBPACK_IMPORTED_MODULE_1__cookieUtil_vue___default.a.methods.getCookie('password');
        if (this.email != '') {
            this.login();
        }
    }
});

/***/ }),

/***/ 869:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 870:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "28ee5174158fb9f4e85a9ff293304471.jpg";

/***/ }),

/***/ 873:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "index"
  }, [(_vm.identity != 'VISITOR') ? _c('Dropdown', {
    staticStyle: {
      "margin-left": "88%",
      "margin-top": "1%",
      "font-size": "14px",
      "background": "#ffffff"
    },
    attrs: {
      "placement": "bottom-start"
    }
  }, [_c('a', {
    staticStyle: {
      "color": "black"
    }
  }, [_c('Icon', {
    attrs: {
      "type": "ios-contact"
    }
  }), _vm._v("\n            " + _vm._s(this.GLOBAL.userName) + "\n            "), _c('Icon', {
    attrs: {
      "type": "ios-arrow-down"
    }
  })], 1), _vm._v(" "), _c('DropdownMenu', {
    staticStyle: {
      "font-size": "14px"
    },
    attrs: {
      "slot": "list"
    },
    slot: "list"
  }, [_c('DropdownItem', {
    nativeOn: {
      "click": function($event) {
        return _vm.user_page()
      }
    }
  }, [_vm._v("个人主页")]), _vm._v(" "), _c('DropdownItem', {
    nativeOn: {
      "click": function($event) {
        return _vm.news_page()
      }
    }
  }, [_vm._v("消息/通知")]), _vm._v(" "), _c('DropdownItem', {
    nativeOn: {
      "click": function($event) {
        return _vm.setting()
      }
    }
  }, [_vm._v("设置")]), _vm._v(" "), _c('DropdownItem', {
    nativeOn: {
      "click": function($event) {
        return _vm.logout()
      }
    }
  }, [_vm._v("退出登录")])], 1)], 1) : _c('div', {
    staticStyle: {
      "margin-left": "85%",
      "margin-top": "1%"
    }
  }, [_c('Button', {
    staticStyle: {
      "font-size": "15px",
      "text-align": "right",
      "margin-right": "2%"
    },
    attrs: {
      "type": "text"
    },
    on: {
      "click": function($event) {
        _vm.modal1 = true
      }
    }
  }, [_vm._v("登录")]), _vm._v(" "), _c('Modal', {
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
  }, [_c('p', {
    staticStyle: {
      "font-size": "15px",
      "margin-left": "10%"
    }
  }, [_vm._v("邮箱"), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.email),
      expression: "email"
    }],
    staticStyle: {
      "margin-left": "20%"
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
  })]), _c('br'), _vm._v(" "), _c('p', {
    staticStyle: {
      "font-size": "15px",
      "margin-left": "10%"
    }
  }, [_vm._v("密码"), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.password),
      expression: "password"
    }],
    staticStyle: {
      "margin-left": "20%"
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
  })])]), _vm._v(" "), _c('Button', {
    staticStyle: {
      "font-size": "15px"
    },
    attrs: {
      "type": "text"
    },
    on: {
      "click": _vm.jump_register
    }
  }, [_vm._v("注册")])], 1), _vm._v(" "), _c('Row', {
    staticStyle: {
      "height": "70%"
    },
    attrs: {
      "type": "flex",
      "justify": "center",
      "align": "middle"
    }
  }, [_c('Col', {
    attrs: {
      "span": "24",
      "offset": ""
    }
  }, [_c('h1', [_c('img', {
    staticStyle: {
      "height": "180px"
    },
    attrs: {
      "src": __webpack_require__(422)
    }
  })]), _vm._v(" "), _c('br'), _c('br'), _c('br'), _c('br'), _c('br'), _c('br'), _vm._v(" "), _c('h2', [_c('p', [_vm._v("Welcome to Science Searching Gate!")])]), _vm._v(" "), _c('Input', {
    staticStyle: {
      "width": "50%",
      "margin-left": "25%"
    },
    nativeOn: {
      "keyup": function($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) { return null; }
        return _vm.search($event)
      }
    },
    model: {
      value: (_vm.search_content),
      callback: function($$v) {
        _vm.search_content = $$v
      },
      expression: "search_content"
    }
  }, [_c('Select', {
    staticStyle: {
      "width": "80px",
      "background-color": "#515a6e",
      "color": "white"
    },
    attrs: {
      "slot": "prepend"
    },
    slot: "prepend",
    model: {
      value: (_vm.search_item),
      callback: function($$v) {
        _vm.search_item = $$v
      },
      expression: "search_item"
    }
  }, [_c('Option', {
    attrs: {
      "value": "professor"
    }
  }, [_c('b', [_vm._v("专家")])]), _vm._v(" "), _c('Option', {
    attrs: {
      "value": "paper"
    }
  }, [_c('b', [_vm._v("论文")])]), _vm._v(" "), _c('Option', {
    attrs: {
      "value": "organization"
    }
  }, [_c('b', [_vm._v("机构")])])], 1), _vm._v(" "), _c('Button', {
    attrs: {
      "slot": "append"
    },
    on: {
      "click": _vm.search
    },
    slot: "append"
  }, [(_vm.and_times < 4) ? _c('img', {
    staticStyle: {
      "vertical-align": "middle"
    },
    attrs: {
      "src": __webpack_require__(870),
      "height": "20",
      "width": "23"
    },
    on: {
      "click": function($event) {
        _vm.and_times++
      }
    }
  }) : _vm._e()]), _vm._v(" "), (_vm.search_item == 'paper') ? _c('Button', {
    attrs: {
      "slot": "append"
    },
    on: {
      "click": function($event) {
        _vm.advance = !_vm.advance
      }
    },
    slot: "append"
  }, [_vm._v("高级检索↓")]) : _vm._e(), _vm._v(" "), (_vm.search_item == 'professor') ? _c('Button', {
    attrs: {
      "slot": "append"
    },
    on: {
      "click": function($event) {
        _vm.extra_org = !_vm.extra_org
      }
    },
    slot: "append"
  }, [_vm._v("所在机构↓")]) : _vm._e()], 1), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.advance && _vm.search_item == 'paper'),
      expression: "advance&&search_item=='paper'"
    }],
    staticStyle: {
      "width": "50%",
      "margin-left": "25%",
      "text-align": "left"
    }
  }, [_c('div', {
    staticClass: "extra-item"
  }, [_vm._v("\n                    并含：\n                    "), _vm._l((_vm.and_times), function(item) {
    return _c('div', {
      staticClass: "advance_item"
    }, [_c('Input', {
      staticClass: "extra-input",
      model: {
        value: (_vm.advance_data.and[item - 1]),
        callback: function($$v) {
          _vm.$set(_vm.advance_data.and, item - 1, $$v)
        },
        expression: "advance_data.and[item - 1]"
      }
    })], 1)
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "display": "inline"
    }
  }, [(_vm.and_times < 4) ? _c('img', {
    staticStyle: {
      "vertical-align": "middle"
    },
    attrs: {
      "src": __webpack_require__(492),
      "height": "20",
      "width": "20"
    },
    on: {
      "click": function($event) {
        _vm.and_times++
      }
    }
  }) : _vm._e()])], 2), _vm._v(" "), _c('div', {
    staticClass: "extra-item"
  }, [_vm._v("\n                    或含：\n                    "), _vm._l((_vm.or_times), function(item) {
    return _c('div', {
      staticClass: "advance_item"
    }, [_c('Input', {
      staticClass: "extra-input",
      model: {
        value: (_vm.advance_data.or[item - 1]),
        callback: function($$v) {
          _vm.$set(_vm.advance_data.or, item - 1, $$v)
        },
        expression: "advance_data.or[item - 1]"
      }
    })], 1)
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "display": "inline"
    }
  }, [(_vm.or_times < 4) ? _c('img', {
    staticStyle: {
      "vertical-align": "middle"
    },
    attrs: {
      "src": __webpack_require__(492),
      "height": "20",
      "width": "20"
    },
    on: {
      "click": function($event) {
        _vm.or_times++
      }
    }
  }) : _vm._e()])], 2), _vm._v(" "), _c('div', {
    staticClass: "extra-item"
  }, [_vm._v("\n                    不含：\n                    "), _vm._l((_vm.none_times), function(item) {
    return _c('div', {
      staticClass: "advance_item"
    }, [_c('Input', {
      staticClass: "extra-input",
      model: {
        value: (_vm.advance_data.none[item - 1]),
        callback: function($$v) {
          _vm.$set(_vm.advance_data.none, item - 1, $$v)
        },
        expression: "advance_data.none[item - 1]"
      }
    })], 1)
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "display": "inline"
    }
  }, [(_vm.none_times < 4) ? _c('img', {
    staticStyle: {
      "vertical-align": "middle"
    },
    attrs: {
      "src": __webpack_require__(492),
      "height": "20",
      "width": "20"
    },
    on: {
      "click": function($event) {
        _vm.none_times++
      }
    }
  }) : _vm._e()])], 2), _vm._v(" "), _c('div', {
    staticClass: "extra-item"
  }, [_vm._v("\n                    作者：\n                    "), _c('Input', {
    staticClass: "extra-input",
    model: {
      value: (_vm.advance_writer),
      callback: function($$v) {
        _vm.advance_writer = $$v
      },
      expression: "advance_writer"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "extra-item"
  }, [_vm._v("\n                    刊物：\n                    "), _c('Input', {
    staticClass: "extra-input",
    model: {
      value: (_vm.advance_book),
      callback: function($$v) {
        _vm.advance_book = $$v
      },
      expression: "advance_book"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "extra-item"
  }, [_vm._v("\n                    发表时间：\n                    "), _c('Input', {
    staticClass: "extra-input",
    model: {
      value: (_vm.advance_time[0]),
      callback: function($$v) {
        _vm.$set(_vm.advance_time, 0, $$v)
      },
      expression: "advance_time[0]"
    }
  }), _vm._v("\n                    -\n                    "), _c('Input', {
    staticClass: "extra-input",
    model: {
      value: (_vm.advance_time[1]),
      callback: function($$v) {
        _vm.$set(_vm.advance_time, 1, $$v)
      },
      expression: "advance_time[1]"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.extra_org && _vm.search_item == 'professor'),
      expression: "extra_org&&search_item=='professor'"
    }],
    staticStyle: {
      "width": "50%",
      "margin-left": "25%",
      "text-align": "left"
    }
  }, [_c('div', {
    staticStyle: {
      "font-size": "16px",
      "line-height": "32px",
      "padding-top": "10px"
    }
  }, [_vm._v("\n                    机构：\n                    "), _c('Input', {
    staticStyle: {
      "width": "20%",
      "margin-right": "3px"
    },
    model: {
      value: (_vm.extra_org_name),
      callback: function($$v) {
        _vm.extra_org_name = $$v
      },
      expression: "extra_org_name"
    }
  })], 1)])], 1)], 1), _vm._v(" "), _c('div', {
    attrs: {
      "id": "ftCon"
    }
  }, [_c('AboutUs')], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-146d4d57", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=7.chunk.js.map