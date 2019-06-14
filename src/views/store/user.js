/**
 * Created by 41587 on 2018/8/14.
 */

export default {
  state:{
    isLogin:false,

    userMessage:JSON.parse(sessionStorage.getItem('userMessage') ) || {} ,

    userDetail: JSON.parse(sessionStorage.getItem('userDetail') ) || {} ,

  },

  mutations:{
    ['get_user_message'](state,obj){
      state.userMessage = obj;
      sessionStorage.setItem('userMessage',JSON.stringify(  obj ) );
    },

    ['get_user_detail'](state,obj){
      state.userMessage = obj;
      sessionStorage.setItem('userDetail',JSON.stringify(  obj ) );
    },

  }
}
