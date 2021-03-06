// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Datepicker from 'vuejs-datepicker';
import BootstrapVue from '../node_modules/bootstrap-vue/lib';
import App from './App';
import Header from './components/Header';
import Page from './components/Page';
import Top from './components/Top';
import Catalog from './components/Catalog';
import Contact from './components/Contact';
import router from './router';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.component('datepicker', Datepicker);
Vue.component('header-menu', Header);
Vue.component('page', Page);
Vue.component('top', Top);
Vue.component('catalog', Catalog);
Vue.component('contact', Contact);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
