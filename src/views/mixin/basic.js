

export default {

  methods:{
    // 获取考勤列表
    $get_area_list( loading = false){
      return new Promise((resovle,reject)=>{

        this.$request({
          url:'/common/getAreaList',
          loading:loading,
        }).then((response)=>{

          this.$store.commit('get_area_list',response['data']);

          resovle(response)
        },(error)=>{
          this.$message({
            message: error['msg'] ,
            type: 'error'
          });
          reject(error)
        })
      })
    },
    // 获得银行类型
    $get_bank_type_list( loading = false){
      return new Promise((resovle,reject)=>{

        this.$request({
          url:'/constant/getBankType',
          loading:loading,
        }).then((response)=>{

          this.$store.commit('get_bank_type_list',response['data']);

          resovle(response)
        },(error)=>{
          this.$message({
            message: error['msg'] ,
            type: 'error'
          });
          reject(error)
        })
      })
    },

    // 获取用户基本信息


  }
}
