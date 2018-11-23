
import App from './App.vue';
import Vue from 'vue';
import router from './router'
// import iView from 'iview';
// import 'iview/dist/styles/iview.css';
// import '../less/app-theme.less';
// Vue.use(iView);

export default new Vue({
    router,
    render: h => h(App)
});
