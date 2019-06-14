

import Vue from 'vue'
Vue.mixin( {
  filters:{
    str_name(value){
      return value + '123456'
    },
    num_str(value){
      console.log(value)
      return Utils.SectionToChinese(value)
    },
    date_format(val){
      return Dates.format(new Date(val),'yyyy/MM/dd HH:mm:ss')
    },
    str_money:value=>{
      if(value){
        return (value / 100).toFixed(2) ;
      } else{
        return '0.00'
      }
    },
  },

});
