

export default {

  methods:{
    // 获取考勤列表
    $get_order_list(params,loading = true){
      return new Promise((resovle,reject)=>{

        this.$request({
          url:'/order/list',
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
    // 获取订单详情
    $get_order_detail(params,loading = true){
      return new Promise((resovle,reject)=>{

        this.$request({
          url:'/order/detail',
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
