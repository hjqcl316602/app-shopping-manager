import Vue from 'vue'
import Router from 'vue-router'
import Routes from './vue.router.routes'
import store from '../views/store'
Vue.use(Router);


const router = new Router({

  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop
      }
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  },
  routes: Routes
})

router.beforeEach( ( to, from, next ) => {

  store.commit('nav_active',to.name);

  let isLogin = to.meta.isLogin;
  if( isLogin && !sessionStorage.getItem('isLogin') ){   // 只能存store，不然刷新session存在，则不能获取到用户类型等数据
    sessionStorage.setItem('redirect',to.fullPath);
    next({ path: '/app/login' });
  }else{
    next();
  }

});

export default router
