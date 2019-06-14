import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import user from './user';
import manager from './manager';
import basic from './basic';

export default new Vuex.Store({
  modules:{ basic,user,manager },
  strict:false
})
