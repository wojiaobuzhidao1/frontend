webpackJsonp([4],{

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(517)

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(243),
  /* template */
  __webpack_require__(532),
  /* scopeId */
  "data-v-41345060",
  /* cssModules */
  null
)
Component.options.__file = "D:\\专家科技成果平台\\frontend\\src\\views\\aboutUs.vue"
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

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menuBar_vue__ = __webpack_require__(52);
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


/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        MenuBar: __WEBPACK_IMPORTED_MODULE_0__menuBar_vue___default.a
    },
    name: "aboutUs"
});

/***/ }),

/***/ 46:
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

/***/ 47:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(47)

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(46),
  /* template */
  __webpack_require__(49),
  /* scopeId */
  "data-v-14f43d51",
  /* cssModules */
  null
)
Component.options.__file = "D:\\专家科技成果平台\\frontend\\src\\views\\cookieUtil.vue"
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

/***/ 49:
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

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cookieUtil_vue__ = __webpack_require__(48);
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

/***/ 51:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 517:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(51)

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(50),
  /* template */
  __webpack_require__(53),
  /* scopeId */
  "data-v-3baacb0e",
  /* cssModules */
  null
)
Component.options.__file = "D:\\专家科技成果平台\\frontend\\src\\views\\menuBar.vue"
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

/***/ 53:
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

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('MenuBar'), _vm._v(" "), _vm._m(0)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "aboutUs"
  }, [_c('img', {
    staticStyle: {
      "height": "220px"
    },
    attrs: {
      "src": __webpack_require__(66)
    }
  }), _c('br'), _vm._v(" "), _c('span', {
    staticStyle: {
      "font-size": "35px"
    }
  }, [_vm._v("Zebra  Science")]), _c('br'), _vm._v(" "), _c('span', {
    staticStyle: {
      "color": "#2db7f5"
    }
  }, [_vm._v("v1.0")]), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('span', {
    staticStyle: {
      "font-size": "30px"
    }
  }, [_vm._v("团队介绍：")]), _c('br'), _vm._v("\n        前端工程狮："), _c('b', [_vm._v("赵楠")]), _vm._v("、"), _c('b', [_vm._v("何浩乾")]), _vm._v("、"), _c('b', [_vm._v("胡琦")]), _c('br'), _vm._v("\n        后端工程狮："), _c('b', [_vm._v("黎昆昌")]), _vm._v("、"), _c('b', [_vm._v("仇善召")]), _vm._v("、"), _c('b', [_vm._v("杜予同")]), _c('br'), _vm._v("\n        数据库工程狮："), _c('b', [_vm._v("阙子烝")]), _vm._v("、"), _c('b', [_vm._v("郭子溢")]), _c('br'), _vm._v("\n        爬虫工程狮："), _c('b', [_vm._v("许志达")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('span', {
    staticStyle: {
      "font-size": "30px"
    }
  }, [_vm._v("联系我们：")]), _c('br'), _vm._v("\n        斑马会所群号：473326561"), _c('br'), _vm._v("\n        办公地址：主南210"), _c('br')])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-41345060", module.exports)
  }
}

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d4c0a1aaae1dba8d0c5d074236d58897.png";

/***/ })

});
//# sourceMappingURL=4.chunk.js.map