webpackJsonp([6],{

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(866)

var Component = __webpack_require__(70)(
  /* script */
  __webpack_require__(592),
  /* template */
  __webpack_require__(882),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\大三上\\软件系统需求和设计\\frontend\\src\\views\\setting.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] setting.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d43186d6", Component.options)
  } else {
    hotAPI.reload("data-v-d43186d6", Component.options)
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

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menuBar_vue__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menuBar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__menuBar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_image_crop_upload__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_image_crop_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_image_crop_upload__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        'my-upload': __WEBPACK_IMPORTED_MODULE_1_vue_image_crop_upload___default.a
    },
    name: "setting",
    data: function data() {
        var _this = this;

        return {
            previewImageSrc: '',
            userName: '',
            identity: this.GLOBAL.userType,
            //identity:'EXPERT', //EXPERT USER VISITOR
            //old_pwd:'123',
            //change_pwd: false,
            show: false,
            upload_url: this.GLOBAL.domain + '/api/v1/upload_avatar',
            params: {
                token: '123456798',
                name: 'avatar'
            },
            headers: {
                smail: '*_~'
            },
            imgDataUrl: this.GLOBAL.avatar, // the datebase64 url of created image
            change_name: {
                name: ''
            },
            change_pwd: {
                old_password: '',
                password: '',
                cpwd: ''
            },
            change_name_rule: {
                name: [{ required: true, message: '用户名不能为空', trigger: 'blur' }]
            },
            change_pwd_rule: {
                old_password: [{ required: true, message: '旧密码不能为空', trigger: 'blur' }],
                password: [{ required: true, message: '密码不能为空', trigger: 'blur' }],
                cpwd: [{ required: true, message: '密码不能为空', trigger: 'blur' }, {
                    validator: function validator(rule, value, callback) {
                        if (value === '') {
                            callback(new Error('请再次输入密码'));
                        } else if (value !== _this.change_pwd.password) {
                            callback(new Error('两次输入密码不一致'));
                        } else {
                            callback();
                        }
                    }, trigger: 'blur' }]
            }
        };
    },

    methods: {
        handleSubmit: function handleSubmit(name) {
            var _this2 = this;

            // console.log(name);
            console.log(this.GLOBAL.userName);
            this.$refs[name].validate(function (valid) {
                if (valid) {
                    if (name === 'change_name') {
                        console.log('if ' + _this2.change_name.name);
                        // this.GLOBAL.setUserName(this.change_name.name);
                        // console.log('this is ' + this.GLOBAL.userName)
                        var params = { 'user_id': _this2.GLOBAL.email, 'username': _this2.change_name.name };
                        _this2.$http.post(_this2.GLOBAL.domain + '/api/v1/information_change', params).then(function (res) {
                            var detail = JSON.parse(res.body);
                            console.log(detail);
                            if (detail.state === 'success') {
                                this.refresh_user_info();
                                this.$Message.success('修改成功!');
                            } else {
                                this.$Message.error('修改失败!');
                            }
                        }, function (res) {
                            console.log('Failed');
                            var detail = JSON.parse(res.body);
                            console.log(detail);
                        });
                    } else if (name === 'change_pwd') {
                        console.log('else if');
                        var _params = { 'user_id': _this2.GLOBAL.email, 'old_password': _this2.change_pwd.old_password, 'new_password': _this2.change_pwd.password };
                        console.log(_params);
                        _this2.$http.post(_this2.GLOBAL.domain + '/api/v1/password_change', _params).then(function (res) {
                            var detail = JSON.parse(res.body);
                            console.log(detail);
                            if (detail.state === 'fail') {
                                this.$Message.error(detail.reason);
                            } else {
                                this.$Message.success(detail.reason);
                            }
                        }, function (res) {
                            console.log('Failed');
                            var detail = JSON.parse(res.body);
                            console.log(detail);
                        });
                    } else {
                        console.log('else');
                    }
                    _this2.$refs[name].resetFields();
                    // this.$Message.success('提交成功!')
                } else {
                    _this2.$Message.error('表单验证失败!');
                }
            });
        },
        handleReset: function handleReset(name) {
            if (this.identity !== 'EXPERT') this.$refs[name].resetFields();
        },
        displayImage: function displayImage() {
            var _this3 = this;

            var file = this.$refs.fileInput.files[0];
            var fr = new FileReader();
            fr.onload = function (e) {
                _this3.previewImageSrc = e.target.result;
            };
            fr.readAsDataURL(file);
        },
        upload: function upload() {
            if (this.previewImageSrc == "") return;
            alert("cxk");
        },
        refresh_user_info: function refresh_user_info() {
            this.$http.get(this.GLOBAL.domain + '/api/v1/user_detail/' + this.GLOBAL.email).then(function (res) {
                var detail = JSON.parse(res.body);
                console.log(detail);
                this.GLOBAL.setUserName(detail.msg.username);
                this.GLOBAL.setAvatar(detail.msg.avatar);
            }, function (res) {
                console.log('Failed');
                var detail = JSON.parse(res.body);
                console.log(detail);
            });
        },
        toggleShow: function toggleShow() {
            this.show = !this.show;
        },
        cropSuccess: function cropSuccess(imgDataUrl, field) {
            console.log('-------- crop success --------');
            this.imgDataUrl = imgDataUrl;
        },

        /**
        * upload success
        *
        * [param] jsonData   服务器返回数据，已进行json转码
        * [param] field
        */
        cropUploadSuccess: function cropUploadSuccess(jsonData, field) {
            console.log('-------- upload success --------');
            console.log(jsonData);
            console.log('field: ' + field);
            var detail = JSON.parse(jsonData);
            console.log(detail.url);
            if (detail.state == 'success') {
                var params = { 'user_id': this.GLOBAL.email, 'avatar': detail.url };
                this.$http.post(this.GLOBAL.domain + '/api/v1/information_change', params).then(function (res) {
                    var detail = JSON.parse(res.body);
                    console.log(detail);
                    if (detail.state === 'success') {
                        this.refresh_user_info();
                        this.show = !this.show;
                        this.$Message.success('修改成功!');
                    } else {
                        this.$Message.error('修改失败!');
                    }
                }, function (res) {
                    console.log('Failed');
                    var detail = JSON.parse(res.body);
                    console.log(detail);
                });
            } else {
                this.$Message.error('服务器出错，上传失败');
            }
        },

        /**
         * upload fail
         *
         * [param] status    server api return error status, like 500
         * [param] field
         */
        cropUploadFail: function cropUploadFail(status, field) {
            console.log('-------- upload fail --------');
            console.log(status);
            console.log('field: ' + field);
        }
    }
});

/***/ }),

/***/ 866:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 882:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('MenuBar', {
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
  }), _vm._v(" "), _c('div', {
    staticClass: "certify-detail"
  }, [(_vm.identity == 'VISITOR') ? _c('div', {
    staticStyle: {
      "width": "100%",
      "text-align": "center",
      "height": "480px"
    }
  }, [_vm._m(0)]) : _vm._e(), _vm._v(" "), _c('Tabs', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.identity != 'VISITOR'),
      expression: "identity != 'VISITOR'"
    }],
    staticStyle: {
      "min-height": "480px",
      "margin-top": "60px",
      "width": "100%",
      "text-align": "center"
    },
    attrs: {
      "value": "name2",
      "animated": false
    }
  }, [(_vm.identity != 'EXPERT') ? _c('TabPane', {
    attrs: {
      "label": "修改用户名",
      "name": "name1"
    },
    nativeOn: {
      "click": function($event) {
        _vm.handleReset('change_pwd')
      }
    }
  }, [_c('div', {
    staticClass: "layout-content-main"
  }, [_c('Form', {
    ref: "change_name",
    attrs: {
      "model": _vm.change_name,
      "rules": _vm.change_name_rule,
      "label-width": 100
    }
  }, [_c('FormItem', {
    attrs: {
      "label": "新用户名",
      "prop": "name"
    }
  }, [_c('Input', {
    staticClass: "input-select-class",
    attrs: {
      "placeholder": "请输入用户名",
      "onkeypress": "if(event.keyCode == 13) return false;"
    },
    model: {
      value: (_vm.change_name.name),
      callback: function($$v) {
        _vm.$set(_vm.change_name, "name", $$v)
      },
      expression: "change_name.name"
    }
  })], 1), _vm._v(" "), _c('FormItem', [_c('Button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.handleSubmit('change_name')
      }
    }
  }, [_vm._v("修改")])], 1)], 1)], 1)]) : _vm._e(), _vm._v(" "), _c('TabPane', {
    attrs: {
      "label": "修改密码",
      "name": "name2"
    },
    nativeOn: {
      "click": function($event) {
        _vm.handleReset('change_name')
      }
    }
  }, [_c('div', {
    staticClass: "layout-content-main"
  }, [_c('Form', {
    ref: "change_pwd",
    attrs: {
      "model": _vm.change_pwd,
      "rules": _vm.change_pwd_rule,
      "label-width": 100
    }
  }, [_c('FormItem', {
    attrs: {
      "label": "旧密码",
      "prop": "old_password"
    }
  }, [_c('Input', {
    staticClass: "input-select-class",
    attrs: {
      "type": "password",
      "placeholder": "请输入旧密码"
    },
    model: {
      value: (_vm.change_pwd.old_password),
      callback: function($$v) {
        _vm.$set(_vm.change_pwd, "old_password", $$v)
      },
      expression: "change_pwd.old_password"
    }
  })], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label": "新密码",
      "prop": "password"
    }
  }, [_c('Input', {
    staticClass: "input-select-class",
    attrs: {
      "type": "password",
      "placeholder": "请输入长度不超过10的新密码"
    },
    model: {
      value: (_vm.change_pwd.password),
      callback: function($$v) {
        _vm.$set(_vm.change_pwd, "password", $$v)
      },
      expression: "change_pwd.password"
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
      value: (_vm.change_pwd.cpwd),
      callback: function($$v) {
        _vm.$set(_vm.change_pwd, "cpwd", $$v)
      },
      expression: "change_pwd.cpwd"
    }
  })], 1), _vm._v(" "), _c('FormItem', [_c('Button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.handleSubmit('change_pwd')
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
        return _vm.handleReset('change_pwd')
      }
    }
  }, [_vm._v("重置")])], 1)], 1)], 1)]), _vm._v(" "), _c('TabPane', {
    attrs: {
      "label": "修改头像",
      "name": "name3"
    }
  }, [_c('div', {
    staticClass: "layout-content-main"
  }, [_c('my-upload', {
    attrs: {
      "field": "img",
      "width": 150,
      "height": 150,
      "url": this.upload_url,
      "params": _vm.params,
      "headers": _vm.headers,
      "img-format": "png"
    },
    on: {
      "crop-success": _vm.cropSuccess,
      "crop-upload-success": _vm.cropUploadSuccess,
      "crop-upload-fail": _vm.cropUploadFail
    },
    model: {
      value: (_vm.show),
      callback: function($$v) {
        _vm.show = $$v
      },
      expression: "show"
    }
  }), _vm._v(" "), _c('img', {
    staticStyle: {
      "border-radius": "20%",
      "padding": "3px",
      "background-color": "#fff",
      "border": "1px solid rgba(0, 0, 0, 0.15)"
    },
    attrs: {
      "src": _vm.imgDataUrl
    }
  }), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('Button', {
    on: {
      "click": _vm.toggleShow
    }
  }, [_vm._v("设置头像")])], 1)])], 1)], 1), _vm._v(" "), _c('Layout', [_c('Footer', {
    staticClass: "layout-footer-center",
    staticStyle: {
      "background-color": "#666666",
      "color": "#eeeeee"
    }
  }, [_vm._v("\n                2019-2019 © ZebraScience\n                "), _c('router-link', {
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
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h2', {
    staticStyle: {
      "margin-top": "80px"
    }
  }, [_vm._v("您还未登录！"), _c('br'), _vm._v(" Zebra 请您登录")])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-d43186d6", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=6.chunk.js.map