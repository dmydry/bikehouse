import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Support from '@/components/Support';
import Docs from '@/components/Docs';
import Contact from '@/components/Contact';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/support',
      name: 'Support',
      component: Support,
    },
    {
      path: '/docs',
      name: 'Docs',
      component: Docs,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
  ],
});
