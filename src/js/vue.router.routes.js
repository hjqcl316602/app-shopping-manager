

/*
 import Login from '../views/Login.vue';
 import MainIndex from '../views/MainIndex.vue';
 import MainResource from '../views/MainResource.vue';
 import MainTesting from '../views/MainTesting.vue';
 import MainUser from '../views/MainUser.vue';

 import SubAtten from '../views/SubAtten.vue';
 import SubAttenDetail from '../views/SubAttenDetail.vue';
 */

const AppLogin = r => require.ensure([], () => r(require('@/views/app-login.vue')), 'AppLogin');
const AppMain = r => require.ensure([], () => r(require('@/views/app-main.vue')), 'AppMain');
const AppMainGood = r => require.ensure([], () => r(require('@/views/app-main-good.vue')), 'AppMainGood');
const AppMainGoodEdit = r => require.ensure([], () => r(require('@/views/app-main-good-edit.vue')), 'AppMainGoodEdit');
const AppMainOrder = r => require.ensure([], () => r(require('@/views/app-main-order.vue')), 'AppMainOrder');
const AppMainMessage = r => require.ensure([], () => r(require('@/views/app-main-message.vue')), 'AppMainMessage');
const AppMainPassword = r => require.ensure([], () => r(require('@/views/app-main-password.vue')), 'AppMainPassword');




export default  [
  { path: '*', redirect: '/app/main/good'},
  { path: '/', redirect: '/app/main/good'},
  { path: '/app/login', name: 'AppLogin', component:AppLogin   ,meta:{ keepAlive:true,title:"登录",isLogin:false }},
  { path: '/app/main', name: 'AppMain', redirect:{ name :'AppMainGood' },component:AppMain   ,meta:{ keepAlive:true,title:"主页",isLogin:true },
    children:[
      { path: 'good', name: 'AppMainGood', component:AppMainGood   ,meta:{ keepAlive:true,title:"商品",isLogin:true }},
      { path: 'good/edit', name: 'AppMainGoodEdit', component:AppMainGoodEdit   ,meta:{ keepAlive:true,title:"商品编辑",isLogin:true }},
      { path: 'order', name: 'AppMainOrder', component:AppMainOrder   ,meta:{ keepAlive:true,title:"订单",isLogin:true }},
      { path: 'message', name: 'AppMainMessage', component:AppMainMessage   ,meta:{ keepAlive:true,title:"基本信息",isLogin:true }},
      { path: 'password', name: 'AppMainPassword', component:AppMainPassword   ,meta:{ keepAlive:true,title:"密码修改",isLogin:true }}
    ]
  },

]
