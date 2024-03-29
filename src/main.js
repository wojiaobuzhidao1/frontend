import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import Routers from './router';
import Util from './libs/util';
import App from './app.vue';
import 'iview/dist/styles/iview.css';
import Global from './views/global';
import VueResource from 'vue-resource';
import myUpload from 'vue-image-crop-upload';
import 'babel-polyfill';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(iView);
Vue.use(VueResource);
Vue.prototype.GLOBAL = Global;
// 路由配置
const RouterConfig = {
    //  mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    if(to.matched[0].name=='search_detail'){
        to.meta.title = to.query.search_content;
    }
    Util.title(to.meta.title);
    next();
});

router.afterEach((to, from, next) => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
