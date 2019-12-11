webpackJsonp([10],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var util = {};
util.title = function (title) {
    title = title ? title + '- Zebra Science' : 'Zebra Science';
    window.document.title = title;
};

/* harmony default export */ __webpack_exports__["a"] = (util);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var routers = [{
    path: '/',
    name: 'index',
    meta: {
        title: ''
    },
    component: function component(resolve) {
        return __webpack_require__.e/* require */(8).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(24)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    }
}, {
    path: '/register',
    name: 'register',
    meta: {
        title: '注册'
    },
    component: function component(resolve) {
        return __webpack_require__.e/* require */(9).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(27)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    }
}, {
    path: '/search_detail',
    name: 'search_detail',
    meta: {
        title: '搜索详情'
    },
    component: function component(resolve) {
        return __webpack_require__.e/* require */(3).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(28)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    }
}, {
    path: '/professorDetails',
    meta: {
        title: '专家详情'
    },
    component: function component(resolve) {
        return __webpack_require__.e/* require */(0).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(21)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    }
}, {
    path: '/user',
    meta: {
        title: '个人主页'
    },
    component: function component(resolve) {
        return __webpack_require__.e/* require */(2).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(30)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    }
}, {
    path: '/paperDetails',
    meta: {
        title: '论文详情'
    },
    component: function component(resolve) {
        return __webpack_require__.e/* require */(6).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(26)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    }
}, {
    path: '/news',
    name: 'news',
    meta: {
        title: '消息页面'
    },
    component: function component(resolve) {
        return __webpack_require__.e/* require */(1).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(25)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    }
}, {
    path: '/certify',
    name: 'certify',
    meta: {
        title: '申请认证'
    },
    component: function component(resolve) {
        return __webpack_require__.e/* require */(7).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(23)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    }
}, {
    path: '/setting',
    name: 'setting',
    meta: {
        title: '设置'
    },
    component: function component(resolve) {
        return __webpack_require__.e/* require */(5).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(29)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    }
}, {
    path: '/aboutUs',
    name: 'aboutUs',
    meta: {
        title: '关于我们'
    },
    component: function component(resolve) {
        return __webpack_require__.e/* require */(4).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(22)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    }
}];
/* harmony default export */ __webpack_exports__["a"] = (routers);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(16)

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(11),
  /* template */
  __webpack_require__(20),
  /* scopeId */
  "data-v-ebb540f2",
  /* cssModules */
  null
)
Component.options.__file = "D:\\专家科技成果平台\\frontend\\src\\app.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] app.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ebb540f2", Component.options)
  } else {
    hotAPI.reload("data-v-ebb540f2", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(15)

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(12),
  /* template */
  __webpack_require__(19),
  /* scopeId */
  "data-v-1c245f6e",
  /* cssModules */
  null
)
Component.options.__file = "D:\\专家科技成果平台\\frontend\\src\\views\\global.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] global.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1c245f6e", Component.options)
  } else {
    hotAPI.reload("data-v-1c245f6e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 11 */
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {};
    },
    mounted: function mounted() {},
    beforeDestroy: function beforeDestroy() {},

    methods: {}
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    domain: 'http://qsz.lkc1621.xyz',
    // domain:'127.0.0.1:5000',
    name: "global",
    userID: '',
    userName: '',
    email: '',
    password: '', // Just For Test
    userType: 'VISITOR',
    wordcloud_path: '',
    avatar: 'http://qsz.lkc1621.xyz/static/photo/1559356265_img.png',
    collectList: [
        // {
        //     name: 'This is Paper Title One This is Paper Title One This is Paper Title One This is Paper Title One',
        //     year: '2018',
        //     author: {'郭子溢':'1', '黎昆昌':'2', '许志达':'3', '何浩乾':'4'},
        //     source_journal: {
        //         name: 'This is Paper Source',
        //         date: 2018,
        //     }
        // },
        // {
        //     name: 'This is Paper Title One',
        //     year: '2018',
        //     author: {'郭子溢':'1', '黎昆昌':'2', '许志达':'3', '何浩乾':'4'},
        //     source_journal: {
        //         name: 'This is Paper Source',
        //         date: 2019,
        //     }
        // },
    ],
    followList: [
        // {
        //     scid: 1005,
        //     name: '郭子溢',
        //     field: ['计算机'],
        //     mechanism: '北航',
        //     resultsnumber: 99,
        //     citedtimes: 98,
        // },
        // {
        //     scid: 1022,
        //     name: '黎昆昌黎昆昌',
        //     field: ['计算机计算机计算机'],
        //     mechanism: '北航北航北航北航北航',
        //     resultsnumber: 97,
        //     citedtimes: 96,
        // },
        // {
        //     scid: 1020,
        //     name: '许志达',
        //     field: ['计算机','软件'],
        //     mechanism: '北航',
        //     resultsnumber: 95,
        //     citedtimes: 94,
        // },
        // {
        //     scid: 1026,
        //     name: '何浩乾',
        //     field: ['计算机'],
        //     mechanism: '北航',
        //     resultsnumber: 93,
        //     citedtimes: 92,
        // }
    ],
    paperList: [
        // {
        //     name: 'This is Paper Title One',
        //     year: '2018',
        //     author: {'郭子溢':'1', '黎昆昌':'2', '许志达':'3', '何浩乾':'4'},
        //     source_journal: {
        //         name: 'This is Paper Source',
        //         date: 2018,
        //     }
        // },
        // {
        //     name: 'This is Paper Title One',
        //     year: '2018',
        //     author: {'郭子溢':'1', '黎昆昌':'2', '许志达':'3', '何浩乾':'4'},
        //     source_journal: {
        //         name: 'This is Paper Source',
        //         date: 2019,
        //     }
        // },
    ],
    setUserID: function setUserID(id) {
        this.userID = id;
    },
    setUserType: function setUserType(type) {
        this.userType = type;
    },
    setUserName: function setUserName(name) {
        this.userName = name;
    },
    setUserEmail: function setUserEmail(email) {
        this.email = email;
    },
    setFollowList: function setFollowList(flist) {
        this.followList = flist;
    },
    setCollectList: function setCollectList(clist) {
        this.collectList = clist;
    },
    setMyList: function setMyList(plist) {
        this.paperList = plist;
    },
    setAvatar: function setAvatar(a_url) {
        this.avatar = a_url;
    },
    setWordCloud: function setWordCloud(url) {
        this.wordcloud_path = url;
    }
});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_iview__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_iview___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_iview__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__libs_util__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__app_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_iview_dist_styles_iview_css__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_iview_dist_styles_iview_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_iview_dist_styles_iview_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_global__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_global___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__views_global__);
throw new Error("Cannot find module \"vue-resource\"");
throw new Error("Cannot find module \"vue-image-crop-upload\"");
throw new Error("Cannot find module \"babel-polyfill\"");












__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_2_vue_router__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_iview___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_8_vue_resource___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].prototype.GLOBAL = __WEBPACK_IMPORTED_MODULE_7__views_global___default.a;
// 路由配置
var RouterConfig = {
    //  mode: 'history',
    routes: __WEBPACK_IMPORTED_MODULE_3__router__["a" /* default */]
};
var router = new __WEBPACK_IMPORTED_MODULE_2_vue_router__["a" /* default */](RouterConfig);

router.beforeEach(function (to, from, next) {
    __WEBPACK_IMPORTED_MODULE_1_iview___default.a.LoadingBar.start();
    if (to.matched[0].name == 'search_detail') {
        to.meta.title = to.query.search_content;
    }
    __WEBPACK_IMPORTED_MODULE_4__libs_util__["a" /* default */].title(to.meta.title);
    next();
});

router.afterEach(function (to, from, next) {
    __WEBPACK_IMPORTED_MODULE_1_iview___default.a.LoadingBar.finish();
    window.scrollTo(0, 0);
});

new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
    el: '#app',
    router: router,
    render: function render(h) {
        return h(__WEBPACK_IMPORTED_MODULE_5__app_vue___default.a);
    }
});

/***/ }),
/* 14 */,
/* 15 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c("div")
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-1c245f6e", module.exports)
  }
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('router-view')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-ebb540f2", module.exports)
  }
}

/***/ })
],[13]);
//# sourceMappingURL=main.js.map