import Vue from 'vue'

import 'normalize.css/normalize.css';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import locale from 'element-ui/lib/locale/lang/en';

import '@/styles/index.scss';

import App from './App'
import store from './store'
import router from './router'

import '@/icons';
import '@/permission';
import Video from 'video.js';
import 'video.js/dist/video-js.css'

import axios from 'axios';
// 高德地图
import VueAMap from 'vue-amap'
Vue.prototype.$axios = axios
Vue.prototype.$video = Video
import hls from 'videojs-contrib-hls'
import '@/plugins/video.js'




/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

// 如果想要中文版 element-ui，按如下方式声明
Vue.use(ElementUI)
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: '13b46bb580fdca29d6e545b57bd6079b',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  v: '1.4.4'
});
Vue.use(hls)


Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
