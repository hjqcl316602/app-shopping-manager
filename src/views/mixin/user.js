

export default {

  methods:{
    // 获取考勤列表
    $get_login(params,loading = true){
      return new Promise((resovle,reject)=>{

        this.$request({
          url:'/supplier/login',
          loading:loading,
          data:params
        }).then((response)=>{

          this.$store.commit('get_user_message',response['data']);

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
    $get_user_detail( loading = true){
      return new Promise((resovle,reject)=>{

        this.$request({
          url:'/supplier/getUserInfo',
          loading:loading,
          data:{
            userId:this.$store.state.user['userMessage']['userId']
          }
        }).then((response)=>{

          this.$store.commit('get_user_detail',response['data']);

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
    // 更新用户信息
    $update_user_detail(params,loading = true ){
      return new Promise((resovle,reject)=>{

        this.$request({
          url:'/supplier/updateUser',
          loading:loading,
          data: params
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

    // 更新用户信息
    $update_user_pwd(params,loading = true ){
      return new Promise((resovle,reject)=>{

        this.$request({
          url:'/supplier/changePwd',
          loading:loading,
          data: params
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
    }
  }
}
