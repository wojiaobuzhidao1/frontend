webpackJsonp([2],{

/***/ 1016:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1017:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1030:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "userpage"
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
  }), _vm._v(" "), _c('Layout', {
    attrs: {
      "id": "layout"
    }
  }, [(_vm.identity == 'VISITOR') ? _c('div', {
    staticStyle: {
      "width": "100%",
      "text-align": "center",
      "height": "480px"
    }
  }, [_c('h2', {
    staticStyle: {
      "margin-top": "80px"
    }
  }, [_vm._v("您还未登录！"), _c('br'), _vm._v(" 无法查看个人主页")])]) : _c('Content', {
    staticStyle: {
      "padding": "0 50px",
      "min-height": "480px"
    }
  }, [_c('div', {
    staticClass: "user-intro"
  }, [_c('Row', [_c('Col', {
    attrs: {
      "span": "5"
    }
  }, [_c('div', {
    staticClass: "person-image",
    staticStyle: {
      "text-align": "center"
    }
  }, [_c('img', {
    staticStyle: {
      "margin": "5px",
      "border-radius": "20%",
      "padding": "3px",
      "background-color": "#fff",
      "border": "1px solid rgba(0, 0, 0, 0.15)"
    },
    attrs: {
      "src": this.GLOBAL.avatar,
      "height": "125px"
    }
  }), _vm._v(" "), _c('br'), _vm._v(" "), (_vm.identity == 'USER') ? _c('Button', {
    staticStyle: {
      "width": "90%",
      "font-size": "14px"
    },
    nativeOn: {
      "click": function($event) {
        return _vm.applyfor($event)
      }
    }
  }, [_vm._v("\n                                    申请认证\n                                ")]) : _vm._e()], 1)]), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "19"
    }
  }, [_c('div', {
    staticClass: "person-detail",
    staticStyle: {
      "margin-left": "30px",
      "padding": "30px",
      "border-left": "1px dashed #8391a5"
    }
  }, [_c('h2', {
    staticStyle: {
      "font-family": "华文中宋",
      "padding-left": "10px"
    }
  }, [_vm._v(_vm._s(this.GLOBAL.userName))]), _vm._v(" "), _c('br'), _vm._v(" "), _c('h3', {
    staticStyle: {
      "font-family": "微软雅黑"
    }
  }, [_vm._v("邮箱：" + _vm._s(this.GLOBAL.email))]), _vm._v(" "), _c('br')])])], 1)], 1), _vm._v(" "), _c('Tabs', {
    attrs: {
      "value": "name2"
    }
  }, [(_vm.identity == 'EXPERT') ? _c('TabPane', {
    attrs: {
      "label": "我的论文",
      "name": "name1"
    }
  }, [_c('div', {
    staticClass: "paper-list"
  }, [_c('ul', {
    staticStyle: {
      "list-style-type": "none"
    }
  }, _vm._l((_vm.my_paper_items.slice((_vm.pageNum_M - 1) * _vm.pageSize, _vm.pageNum_M * _vm.pageSize)), function(item) {
    return _c('li', [_c('div', {
      staticClass: "paper-detail"
    }, [_c('div', {
      staticStyle: {
        "cursor": "pointer",
        "color": "#2b85e4"
      },
      on: {
        "click": function($event) {
          return _vm.to_paper(item.paperid)
        }
      }
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('div', {
      staticStyle: {
        "font-size": "14px"
      }
    }, [_vm._v("\n                                            年份：" + _vm._s(item.year) + "\n                                             \n                                            作者："), _vm._l((item.author), function(key, value) {
      return _c('div', {
        staticStyle: {
          "display": "inline"
        }
      }, [_vm._v(_vm._s(key) + "  ")])
    }), _vm._v(" "), _c('br'), _vm._v("\n                                            出处：" + _vm._s(item.source_journal.name) + "  " + _vm._s(item.source_journal.date) + "\n                                        ")], 2)])])
  }), 0)]), _vm._v(" "), _c('Page', {
    staticStyle: {
      "text-align": "center",
      "margin-bottom": "20px"
    },
    attrs: {
      "current": _vm.pageNum_M,
      "total": _vm.my_paper_num,
      "page-size": _vm.pageSize,
      "simple": ""
    },
    on: {
      "on-change": _vm.change_page_M
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('TabPane', {
    attrs: {
      "label": "我的收藏",
      "name": "name2"
    }
  }, [_c('div', {
    staticClass: "paper-list"
  }, [_c('ul', {
    staticStyle: {
      "list-style-type": "none"
    }
  }, _vm._l((_vm.star_paper_items.slice((_vm.pageNum_S - 1) * _vm.pageSize, _vm.pageNum_S * _vm.pageSize)), function(item) {
    return _c('li', [_c('div', {
      staticClass: "paper-detail"
    }, [_c('div', {
      staticStyle: {
        "cursor": "pointer",
        "color": "#2b85e4"
      },
      on: {
        "click": function($event) {
          return _vm.to_paper(item.paperid)
        }
      }
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('div', {
      staticStyle: {
        "font-size": "14px"
      }
    }, [_vm._v("\n                                            年份：" + _vm._s(item.year) + "\n                                             \n                                            作者："), _vm._l((item.author), function(key, value) {
      return _c('div', {
        staticStyle: {
          "display": "inline"
        }
      }, [_vm._v(_vm._s(key) + "  ")])
    }), _vm._v(" "), _c('br'), _vm._v("\n                                            出处：" + _vm._s(item.source_journal.name) + "  " + _vm._s(item.source_journal.date) + "\n                                        ")], 2)])])
  }), 0)]), _vm._v(" "), _c('Page', {
    staticStyle: {
      "text-align": "center",
      "margin-bottom": "20px"
    },
    attrs: {
      "current": _vm.pageNum_S,
      "total": _vm.star_paper_num,
      "page-size": _vm.pageSize,
      "simple": ""
    },
    on: {
      "on-change": _vm.change_page_S
    }
  })], 1), _vm._v(" "), _c('TabPane', {
    attrs: {
      "label": "我的关注",
      "name": "name3"
    }
  }, [_c('div', {
    staticClass: "relevant-info"
  }, [_c('ul', {
    staticStyle: {
      "list-style-type": "none",
      "margin-left": "5px",
      "margin-top": "5px"
    }
  }, _vm._l((_vm.like_sch), function(item) {
    return _c('li', {
      staticStyle: {
        "width": "40%",
        "float": "left",
        "margin-left": "20px",
        "min-width": "320px"
      }
    }, [_c('div', {
      staticStyle: {
        "cursor": "pointer",
        "margin": "5px",
        "padding": "5px",
        "border": "#2b85e4 solid 1px",
        "border-radius": "5px",
        "overflow": "hidden"
      },
      on: {
        "click": function($event) {
          return _vm.to_scholar(item.scid)
        }
      }
    }, [_c('Row', [_c('Col', {
      staticStyle: {
        "text-align": "center",
        "overflow": "hidden",
        "white-space": "nowrap",
        "padding-top": "5px"
      },
      attrs: {
        "span": "9"
      }
    }, [_c('div', {
      staticClass: "relevant-detail"
    }, [_c('b', [_vm._v(_vm._s(item.name))])]), _vm._v(" "), _c('Tag', {
      attrs: {
        "color": "blue"
      }
    }, [_vm._v("ID:" + _vm._s(item.scid))])], 1), _vm._v(" "), _c('Col', {
      staticStyle: {
        "font-size": "13px",
        "overflow": "hidden",
        "white-space": "nowrap"
      },
      attrs: {
        "span": "14",
        "offset": "1"
      }
    }, [_vm._v("\n                                                机构：" + _vm._s(item.mechanism)), _c('br'), _vm._v("\n                                                领域："), _vm._l((item.field), function(value) {
      return _c('div', {
        staticStyle: {
          "display": "inline"
        }
      }, [_vm._v(_vm._s(value) + " ")])
    }), _vm._v(" "), _c('br'), _vm._v("\n                                                论文数量：" + _vm._s(item.resultsnumber) + "  被引数量：" + _vm._s(item.citedtimes) + "\n                                            ")], 2)], 1)], 1)])
  }), 0)])])], 1)], 1), _vm._v(" "), _c('Footer', {
    staticClass: "layout-footer-center",
    staticStyle: {
      "background-color": "#515a6e",
      "color": "#515a6e"
    }
  }, [_c('AboutUs')], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-8f15f754", module.exports)
  }
}

/***/ }),

/***/ 522:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(1016)
__webpack_require__(1017)

var Component = __webpack_require__(98)(
  /* script */
  __webpack_require__(747),
  /* template */
  __webpack_require__(1030),
  /* scopeId */
  "data-v-8f15f754",
  /* cssModules */
  null
)
Component.options.__file = "D:\\大三上\\软件系统需求和设计\\frontend\\src\\views\\user.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] user.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8f15f754", Component.options)
  } else {
    hotAPI.reload("data-v-8f15f754", Component.options)
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

/***/ 747:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menuBar_vue__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menuBar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__menuBar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__aboutUs_vue__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__aboutUs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__aboutUs_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        MenuBar: __WEBPACK_IMPORTED_MODULE_0__menuBar_vue___default.a,
        AboutUs: __WEBPACK_IMPORTED_MODULE_1__aboutUs_vue___default.a
    },
    name: 'user',
    data: function data() {
        return {
            identity: this.GLOBAL.userType,
            userName: '姓名',
            introduction: '个人简介',
            pageNum_M: 1,
            pageNum_S: 1,
            pageSize: 10,
            // my_paper_items: [
            //     {
            //         name: 'This is Paper Title One This is Paper Title One This is Paper Title One This is Paper Title One',
            //         year: '2018',
            //         author: {'郭婉如':'1', '蒙春怡':'2', '杨增锴':'3', '朱天乐':'4'},
            //         source_journal: {
            //             name: 'This is Paper Source',
            //             date: 2018,
            //         }
            //     },
            //     {
            //         name: 'This is Paper Title One',
            //         year: '2018',
            //         author: {'郭婉如':'1', '蒙春怡':'2', '杨增锴':'3', '朱天乐':'4'},
            //         source_journal: {
            //             name: 'This is Paper Source',
            //             date: 2019,
            //         }
            //     },
            // ],
            my_paper_items: this.GLOBAL.paperList,
            my_paper_num: 0,
            star_paper_items: this.GLOBAL.collectList,
            star_paper_num: this.GLOBAL.collectList.length,
            like_sch: this.GLOBAL.followList
        };
    },

    methods: {
        applyfor: function applyfor() {
            this.$router.push({ path: '/certify' });
        },
        to_scholar: function to_scholar(profID) {
            //跳转到专家页面
            console.log('toProfID');
            this.$router.push({
                path: '/professorDetails',
                query: { profID: profID }
            });
        },
        to_paper: function to_paper(paperID) {
            this.$router.push({
                path: '/paperDetails',
                query: { paperID: paperID }
            });
        },
        change_page_S: function change_page_S(value) {
            this.pageNum_S = value;
            console.log(this.pageNum_S);
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        },
        change_page_M: function change_page_M(value) {
            this.pageNum_M = value;
            console.log(this.pageNum_M);
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
    },
    created: function created() {
        this.userName = this.GLOBAL.userName;
        this.email = this.GLOBAL.email;
        this.star_paper_items = this.GLOBAL.collectList;
        this.like_sch = this.GLOBAL.followList;
        this.my_paper_num = this.my_paper_items.length;
        console.log(this.my_paper_items.length);
    }
});

/***/ })

});
//# sourceMappingURL=2.chunk.js.map