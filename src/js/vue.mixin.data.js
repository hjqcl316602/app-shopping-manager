

// data 不能以特殊字符开头 如$ _ __ ...等字符串
import Vue from 'vue'

const LOGIN = '/supplier/login';
const LOGOUT = '/supplier/logout';

const BANKLIST = '/constant/getBankType';
const RANDCODE = '/common/randCode';
const VERIFYRANDCOD = '/common/verifyRandCode';
const ADDRESSSELECT = '/common/getAreaList';
const REGISTER = '/supplier/register';
const PHONEISEXIST = '/supplier/phoneIsExist';
const USERNAMEEXIST = '/supplier/userNameIsExist';
const COMPANYISEXIST = '/supplier/companyIsExist';
const UPDATEPASSWORD = '/supplier/changePwd';
const UPDATEUSER = '/supplier/updateUser';
const GETUSERINFO = '/supplier/getUserInfo';

const GOODLIST = '/goods/getGoodsList';
const GOODINFO = '/goods/getGood';
const SGOODLIST = '/goods/search';
const AUDITGOOD = '/goods/submitAuth';
const SHELFGOOD = '/goods/upShelf';
const DSHELFGOOD = '/goods/downShelf';
const DELETEGOOD = '/goods/delete';
const UPDATEGOOD = '/goods/update';

const ADDGOOD = '/goods/add';
const GOODTYPE = '/goods/getCategoryList';
const GOODSPEC = '/goods/getCategorySpecList';
const UNITTYPE = '/constant/getUnitType';
const GETIMG = '/res/getRes/image';
const UPLOADIMG = '/res/upload/image';

const ORDERLIST = '/order/list';
const ORDERDETAIL = '/order/detail';
const DELIVERY = '/order/delivery';

Vue.mixin( {
  data(){
    return　{
      api:{
        ['USER']:'user/detail'
      }
    }
  },
});
