webpackJsonp([4],{

/***/ 1018:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1031:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('MenuBar'), _vm._v(" "), _c('div', {
    staticClass: "layout-content"
  }, [_c('br'), _vm._v(" "), _c('p', {
    staticStyle: {
      "font-size": "40px"
    }
  }, [_vm._v("欢迎注册Science Searching Gate")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
    staticClass: "layout-content-main"
  }, [_c('Form', {
    ref: "formValidate",
    attrs: {
      "model": _vm.formValidate,
      "rules": _vm.ruleValidate,
      "label-width": 100
    }
  }, [_c('FormItem', {
    attrs: {
      "label": "用户名",
      "prop": "name"
    }
  }, [_c('Input', {
    staticClass: "input-select-class",
    attrs: {
      "placeholder": "请输入用户名"
    },
    model: {
      value: (_vm.formValidate.name),
      callback: function($$v) {
        _vm.$set(_vm.formValidate, "name", $$v)
      },
      expression: "formValidate.name"
    }
  })], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label": "邮箱",
      "prop": "mail"
    }
  }, [_c('Input', {
    staticClass: "input-select-class",
    attrs: {
      "placeholder": "请输入邮箱",
      "icon": "ios-mail"
    },
    model: {
      value: (_vm.formValidate.mail),
      callback: function($$v) {
        _vm.$set(_vm.formValidate, "mail", $$v)
      },
      expression: "formValidate.mail"
    }
  }), _vm._v(" "), _c('Button', {
    attrs: {
      "type": "primary",
      "shape": "circle"
    },
    on: {
      "click": function($event) {
        return _vm.requ_ecode(_vm.formValidate.mail)
      }
    }
  }, [_vm._v(_vm._s(_vm.codeContent))])], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label": "验证码",
      "prop": "code"
    }
  }, [_c('Input', {
    staticClass: "input-select-class",
    attrs: {
      "placeholder": "验证码"
    },
    model: {
      value: (_vm.formValidate.code),
      callback: function($$v) {
        _vm.$set(_vm.formValidate, "code", $$v)
      },
      expression: "formValidate.code"
    }
  })], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label": "密码",
      "prop": "password"
    }
  }, [_c('Input', {
    staticClass: "input-select-class",
    attrs: {
      "type": "password",
      "placeholder": "请输入长度不超过10的密码"
    },
    model: {
      value: (_vm.formValidate.password),
      callback: function($$v) {
        _vm.$set(_vm.formValidate, "password", $$v)
      },
      expression: "formValidate.password"
    }
  })], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label": "确认密码",
      "prop": "cpwd"
    }
  }, [_c('Input', {
    staticClass: "input-select-class",
    attrs: {
      "type": "password",
      "placeholder": "请再次输入密码"
    },
    model: {
      value: (_vm.formValidate.cpwd),
      callback: function($$v) {
        _vm.$set(_vm.formValidate, "cpwd", $$v)
      },
      expression: "formValidate.cpwd"
    }
  })], 1), _vm._v(" "), _c('FormItem', [_c('Button', {
    attrs: {
      "type": "primary",
      "round": ""
    },
    on: {
      "click": function($event) {
        return _vm.handleSubmit('formValidate', _vm.formValidate)
      }
    }
  }, [_vm._v("提交")]), _vm._v(" "), _c('Button', {
    staticStyle: {
      "margin-left": "6%"
    },
    attrs: {
      "type": "primary",
      "round": ""
    },
    on: {
      "click": function($event) {
        return _vm.handleReset('formValidate')
      }
    }
  }, [_vm._v("重置")])], 1)], 1)], 1)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-b5efaca4", module.exports)
  }
}

/***/ }),

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(1018)

var Component = __webpack_require__(98)(
  /* script */
  __webpack_require__(744),
  /* template */
  __webpack_require__(1031),
  /* scopeId */
  "data-v-b5efaca4",
  /* cssModules */
  null
)
Component.options.__file = "D:\\大三上\\软件系统需求和设计\\frontend\\src\\views\\register.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] register.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b5efaca4", Component.options)
  } else {
    hotAPI.reload("data-v-b5efaca4", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 538:
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

/***/ 539:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(539)

var Component = __webpack_require__(98)(
  /* script */
  __webpack_require__(538),
  /* template */
  __webpack_require__(541),
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

/***/ 541:
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

/***/ 542:
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

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cookieUtil_vue__ = __webpack_require__(540);
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

/***/ 544:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 545:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(545)

var Component = __webpack_require__(98)(
  /* script */
  __webpack_require__(542),
  /* template */
  __webpack_require__(549),
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

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(544)

var Component = __webpack_require__(98)(
  /* script */
  __webpack_require__(543),
  /* template */
  __webpack_require__(548),
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

/***/ 548:
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
  }, [(_vm.identity == 'VISITOR') ? _c('MenuItem', {
    attrs: {
      "name": "4"
    },
    nativeOn: {
      "click": function($event) {
        _vm.modal1 = true
      }
    }
  }, [_c('a', {
    staticStyle: {
      "size": "35px",
      "color": "#ffffff"
    },
    on: {
      "click": _vm.jump_register
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t注册\n\t\t\t\t\t\t\t\t")])]) : _vm._e()], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-3baacb0e", module.exports)
  }
}

/***/ }),

/***/ 549:
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

/***/ 744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__aboutUs_vue__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__aboutUs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__aboutUs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menuBar_vue__ = __webpack_require__(547);
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




/* harmony default export */ __webpack_exports__["default"] = ({
    name: "register",
    components: {
        MenuBar: __WEBPACK_IMPORTED_MODULE_1__menuBar_vue___default.a,
        AboutUs: __WEBPACK_IMPORTED_MODULE_0__aboutUs_vue___default.a
    },
    data: function data() {
        var _this = this;

        return {
            codeContent: '获取验证码',
            codeCanclick: true,
            totalTime: 60,
            formValidate: {
                name: '',
                mail: '',
                password: '',
                cpwd: '',
                code: ''
            },
            ruleValidate: {
                name: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
                mail: [{ required: true, message: '邮箱不能为空', trigger: 'blur' }, { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }],
                code: [{ required: true, message: '验证码不能为空', trigger: 'blur' }],
                password: [{ required: true, message: '密码不能为空', trigger: 'blur' }],
                cpwd: [{ required: true, message: '密码不能为空', trigger: 'blur' }, {
                    validator: function validator(rule, value, callback) {
                        if (value === '') {
                            callback(new Error('请再次输入密码'));
                        } else if (value !== _this.formValidate.password) {
                            callback(new Error('两次输入密码不一致'));
                        } else {
                            callback();
                        }
                    }, trigger: 'blur' }]
            }
        };
    },

    methods: {
        handleSubmit: function handleSubmit(name, f) {
            var _this2 = this;

            this.$refs[name].validate(function (valid) {
                if (valid) {
                    _this2.$Message.success('提交成功!');
                    var params = { 'username': f.name, 'email': f.mail, 'password': f.password, 'email_code': f.code };
                    _this2.$http.post(_this2.GLOBAL.domain + "/api/v1/register", params, {
                        headers: {
                            'Content-Type': "application/json"
                        }
                    }).then(function (res) {
                        console.log(res);
                        var s = JSON.parse(res.body);
                        if (s["state"] == "fail") {
                            alert(s["reason"]);
                        } else {
                            alert("注册成功！");
                            this.$router.push({
                                path: '/'
                            });
                        }
                    }, function (res) {
                        console.log(res);
                    });
                } else {
                    _this2.$Message.error('表单验证失败!');
                }
            });
        },
        handleReset: function handleReset(name) {
            this.$refs[name].resetFields();
        },
        requ_ecode: function requ_ecode(mail) {
            if (mail === '' || !this.codeCanclick) return;
            console.log(mail);
            var re = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
            if (re.test(mail)) {
                var params = { "email": mail };
                //let params = {"email":this.formValidate.mail};
                this.$http.post(this.GLOBAL.domain + "/api/v1/email_code", params, {
                    headers: {
                        'Content-Type': "application/json"
                    }
                }).then(function (res) {
                    var _this3 = this;

                    console.log(res);
                    this.$Message.success('发送成功!');
                    this.codeCanclick = false;
                    this.codeContent = this.totalTime + 's后可重新发送';
                    var clock = window.setInterval(function () {
                        _this3.totalTime--;
                        _this3.codeContent = _this3.totalTime + 's后重新发送';
                        if (_this3.totalTime < 0) {
                            window.clearInterval(clock);
                            _this3.codeContent = '重新发送验证码';
                            _this3.totalTime = 10;
                            _this3.codeCanclick = true;
                        }
                    }, 1000);
                }, function (res) {
                    console.log(res);
                    alert("发送验证码失败！");
                });
            }
        }
    }
});

/***/ })

});
//# sourceMappingURL=4.chunk.js.map