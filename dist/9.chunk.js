webpackJsonp([9],{

/***/ 249:
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
//
//
//
//
//
//
//
//
//
//
//
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

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(524)

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(249),
  /* template */
  __webpack_require__(537),
  /* scopeId */
  "data-v-b5efaca4",
  /* cssModules */
  null
)
Component.options.__file = "D:\\专家科技成果平台\\frontend\\src\\views\\register.vue"
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

/***/ 524:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 537:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "layout-content"
  }, [_c('p', {
    staticStyle: {
      "font-size": "40px"
    }
  }, [_vm._v("欢迎注册 Zebra Science")]), _vm._v(" "), _c('div', {
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
      "type": "primary"
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
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.handleReset('formValidate')
      }
    }
  }, [_vm._v("重置")])], 1)], 1)], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-b5efaca4", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=9.chunk.js.map