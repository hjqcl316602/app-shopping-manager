

export default {
  data(){
    return {
      good:{
        count:0,
        list:[]
      }
    }
  },

  methods:{
    // 获取考勤列表
    $get_good_list(params,loading = true){
      return new Promise((resovle,reject)=>{

        this.$request({
          url:'/goods/search',
          loading:loading,
          data:params
        }).then((response)=>{



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
  }
}
