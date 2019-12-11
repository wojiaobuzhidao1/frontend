webpackJsonp([7],{

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(514)

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(244),
  /* template */
  __webpack_require__(529),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\专家科技成果平台\\frontend\\src\\views\\certify.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] certify.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-126a149d", Component.options)
  } else {
    hotAPI.reload("data-v-126a149d", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 244:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: "certify",
    data: function data() {
        return {
            identity: this.GLOBAL.userType,
            same_name: false,
            modal1: false,
            profID: '',
            showedMessage: '正在检测同名专家...',
            formValidate: {
                name: '',
                id_num: '',
                field: '',
                organization: '',
                else_info: ''
            },
            ruleValidate: {
                name: [{ required: true, message: '真实姓名不能为空', trigger: 'blur' }],
                id_num: [{ required: true, message: '身份证号码不能为空', trigger: 'blur' }],
                field: [{ required: true, message: '研究领域不能为空', trigger: 'blur' }],
                organization: [{ required: true, message: '所属机构不能为空', trigger: 'blur' }]
            },
            same_name_sch: ''
        };
    },

    methods: {
        handleSubmit: function handleSubmit(name) {
            var _this = this;

            this.$refs[name].validate(function (valid) {
                if (valid) {
                    _this.$Message.success('提交成功!');
                    console.log(_this.formValidate.name);
                    //获取同名专家列表
                    _this.same_name = true;
                    _this.$http.get(_this.GLOBAL.domain + '/api/v1/common_name', { params: { 'professor_name': _this.formValidate.name } }).then(function (res) {
                        this.same_name = true;
                        var detail = JSON.parse(res.body);
                        if (detail.state === 'fail') {
                            this.showedMessage = detail.reason;
                        } else {
                            this.same_name_sch = detail.msg;
                            this.showedMessage = '检测到同名专家，请选择您是哪一位';
                        }
                        console.log(detail);
                    }, function (res) {
                        console.log('Failed');
                        var detail = JSON.parse(res.body);
                        console.log(detail);
                        this.$Message.info(detail);
                    });
                    // this.same_name = true;
                    // this.$http.get(this.GLOBAL.domain + '/api/v1/search_professor/' + this.formValidate.name)
                    //     .then(function (res) {
                    //         //this.same_name = true;
                    //         var detail = JSON.parse(res.body);
                    //         if(detail.state === 'fail'){
                    //             this.showedMessage = detail.reason;
                    //         }
                    //         else{
                    //             this.same_name_sch = detail.msg;
                    //             this.showedMessage = '检测到同名专家，请选择您是哪一位';
                    //         }
                    //         console.log(detail);
                    //     },function (res) {
                    //         console.log('Failed');
                    //         var detail = JSON.parse(res.body);
                    //         console.log(detail);
                    //         this.$Message.info(detail);
                    //     })
                } else {
                    _this.$Message.error('表单验证失败!');
                }
            });
        },
        handleReset: function handleReset(name) {
            this.$refs[name].resetFields();
        },
        confirm_prof_id: function confirm_prof_id(id) {
            this.profID = id;
            console.log(id);
            var form = this.formValidate;
            var params = { 'email': this.GLOBAL.email, 'name': form.name, 'ID_num': form.id_num, 'field': form.field, 'text': form.else_info, 'scid': id };
            console.log(params);
            this.$http.get(this.GLOBAL.domain + '/api/v1/certification', { params: params }).then(function (res) {
                console.log('SuccessFFF');
                var detail = JSON.parse(res.body);
                console.log(detail);
                if (detail.state == 'fail') {
                    this.$Message.error(detail.reason);
                } else {
                    this.modal1 = true;
                }
            }, function (res) {
                console.log("Failed");
                var detail = JSON.parse(res.body);
                console.log(detail);
            });
        },
        check_ok: function check_ok() {
            var _this2 = this;

            setTimeout(function () {
                _this2.modal1 = false;
                _this2.$Message.success('成功提交申请');
            }, 300);
            this.$router.push({
                path: '/user'
            });
        }
    }
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

/***/ 514:
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

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "background": "white"
    }
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
  }), _vm._v(" "), _c('Modal', {
    attrs: {
      "cancel-text": "取消",
      "draggable": "",
      "scrollable": "",
      "title": "发送申请成功"
    },
    on: {
      "on-cancel": _vm.check_ok
    },
    model: {
      value: (_vm.modal1),
      callback: function($$v) {
        _vm.modal1 = $$v
      },
      expression: "modal1"
    }
  }, [_c('h3', [_vm._v("您已成功发送申请，请耐心等待管理员审核")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('Button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.check_ok
    }
  }, [_vm._v("确定")])], 1)]), _vm._v(" "), _c('Layout', [_c('Content', [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.same_name),
      expression: "same_name"
    }],
    staticClass: "same-name-expert"
  }, [_c('h2', {
    staticStyle: {
      "margin-left": "30%"
    }
  }, [_vm._v(_vm._s(_vm.showedMessage))]), _vm._v(" "), _c('ul', {
    staticStyle: {
      "list-style-type": "none",
      "margin-left": "5px",
      "margin-top": "5px"
    }
  }, _vm._l((_vm.same_name_sch), function(item) {
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
      attrs: {
        "onmouseover": "this.style.background = '#e7e7e7'",
        "onmouseout": "this.style.background = '#ffffff'"
      },
      on: {
        "click": function($event) {
          return _vm.confirm_prof_id(item.scid)
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
    }, [_vm._v("\n                                        机构：" + _vm._s(item.mechanism)), _c('br'), _vm._v("\n                                        领域："), _vm._l((item.field), function(value) {
      return _c('div', {
        staticStyle: {
          "display": "inline"
        }
      }, [_vm._v(_vm._s(value) + " ")])
    }), _vm._v(" "), _c('br'), _vm._v("\n                                        论文数量：" + _vm._s(item.resultsnumber) + "  被引数量：" + _vm._s(item.citedtimes) + "\n                                    ")], 2)], 1)], 1)])
  }), 0)]), _vm._v(" "), _c('div', {
    staticClass: "certify-detail"
  }, [(_vm.identity == 'VISITOR') ? _c('div', {
    staticStyle: {
      "width": "100%",
      "text-align": "center",
      "min-height": "450px"
    }
  }, [_c('h2', {
    staticStyle: {
      "margin-top": "80px"
    }
  }, [_vm._v("您还未登录！"), _c('br'), _vm._v(" 请登录后再申请认证")])]) : _vm._e(), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: ((_vm.identity == 'USER' || _vm.identity == 'ADMIN') && _vm.same_name == false),
      expression: "(identity == 'USER' || identity == 'ADMIN') && same_name == false"
    }],
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
      "label": "真实姓名",
      "prop": "name"
    }
  }, [_c('Input', {
    staticClass: "input-select-class",
    attrs: {
      "placeholder": "请输入真实名"
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
      "label": "身份证号",
      "prop": "id_num"
    }
  }, [_c('Input', {
    staticClass: "input-select-class",
    attrs: {
      "placeholder": "请输入身份证号"
    },
    model: {
      value: (_vm.formValidate.id_num),
      callback: function($$v) {
        _vm.$set(_vm.formValidate, "id_num", $$v)
      },
      expression: "formValidate.id_num"
    }
  })], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label": "研究领域",
      "prop": "field"
    }
  }, [_c('Input', {
    staticClass: "input-select-class",
    attrs: {
      "placeholder": "研究领域"
    },
    model: {
      value: (_vm.formValidate.field),
      callback: function($$v) {
        _vm.$set(_vm.formValidate, "field", $$v)
      },
      expression: "formValidate.field"
    }
  })], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label": "所属机构",
      "prop": "organization"
    }
  }, [_c('Input', {
    staticClass: "input-select-class",
    attrs: {
      "placeholder": "所属机构"
    },
    model: {
      value: (_vm.formValidate.organization),
      callback: function($$v) {
        _vm.$set(_vm.formValidate, "organization", $$v)
      },
      expression: "formValidate.organization"
    }
  })], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label": "备注",
      "prop": "else_info"
    }
  }, [_c('Input', {
    staticClass: "input-select-class",
    attrs: {
      "type": "textarea",
      "placeholder": "备注信息",
      "maxlength": 140,
      "rows": 6
    },
    model: {
      value: (_vm.formValidate.else_info),
      callback: function($$v) {
        _vm.$set(_vm.formValidate, "else_info", $$v)
      },
      expression: "formValidate.else_info"
    }
  })], 1), _vm._v(" "), _c('FormItem', [_c('Button', {
    staticStyle: {
      "margin-left": "6%"
    },
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.handleSubmit('formValidate')
      }
    }
  }, [_vm._v("提交")]), _vm._v(" "), _c('Button', {
    staticStyle: {
      "margin-left": "6%"
    },
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.handleReset('formValidate')
      }
    }
  }, [_vm._v("重置")])], 1)], 1)], 1)])]), _vm._v(" "), _c('Footer', {
    staticClass: "layout-footer-center",
    staticStyle: {
      "background-color": "#666666",
      "color": "#eeeeee"
    }
  }, [_vm._v("\n            2019-2019 © ZebraScience\n            "), _c('router-link', {
    staticStyle: {
      "margin-left": "20px",
      "color": "#eeeeee"
    },
    attrs: {
      "to": {
        path: '/aboutUs'
      }
    }
  }, [_vm._v("联系我们")])], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-126a149d", module.exports)
  }
}

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

/***/ })

});
//# sourceMappingURL=7.chunk.js.map