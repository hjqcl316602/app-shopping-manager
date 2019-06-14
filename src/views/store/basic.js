/**
 * Created by 41587 on 2018/8/14.
 */

export default {
  state:{



    menus:[
      { name:'商品管理',open:false,
        child: [
          { name :'商品信息',active: false ,pathName:'AppMainGood' },
          { name :'商品编辑',active: false ,pathName:'AppMainGoodEdit' }
        ]
      },
      { name:'订单管理',open:false,
        child: [
          { name :'订单信息',active: false ,pathName:'AppMainOrder'}
        ]
      },
      { name:'系统管理',open:false,
        child: [
          { name :'基本信息',active: false ,pathName:'AppMainMessage' },
          { name :'密码修改',active: false ,pathName:'AppMainPassword' }
        ]
      }

    ],
    areaList:[],
    bankTypeList:[]
  },

  mutations:{

    ['nav_open'](state,index){
      state.menus[index]['open'] = !state.menus[index]['open']
    },
    ['nav_active'](state,toName){
      for (let n = 0 ; n < state.menus.length ; n++){
        let child = state.menus[n]['child'] || [];
        let index = Arrays.index(child,(item)=>{ return item['pathName'] == toName })
        if(index > -1){
          state.menus[n]['open'] = true
        }
        for(let k = 0; k < child.length;k++){
          if(child[k]['pathName'] == toName ){
            state.menus[n]['child'][k]['active'] = true;
          }else{
            state.menus[n]['child'][k]['active'] = false;
          }
        }
      }
    },

    ['get_area_list'](state,list){
      state.areaList = list
    },
    ['get_bank_type_list'](state,list){
      state.bankTypeList = list
    }
  }
}
