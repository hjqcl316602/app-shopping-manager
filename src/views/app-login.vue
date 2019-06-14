<script type="text/ecmascript-6">
  //import Header  from './components/header.vue'
  //import basic  from '../Mixin/basic'\
  //import { VaPopupRadio }  from './component'
  import user  from './mixin/user'
  export default {
    name: "",
    components: {},
    mixins: [ user ],
    beforeRouteEnter(to, from, next) {
      next(vm => {
      })
    },
    beforeRouteLeave(to, from, next) {
      next();
    },
    beforeRouteUpdate(to, from, next) {
      next();
    },
    beforeCreate() {
    },
    created() {
    },
    beforeMount() {
      this._init_page()
    },
    mounted() {

    },
    activated() {
    },
    props: [],
    data() {
      return {
        nameRe:/^[\u4E00-\u9FA5A-Za-z0-9]+$/,
        nameErrStr: '用户名不能为空！',
        nameErrInfo: '请输入由中文、数字、字母组成的用户名！',

        passErrStr: '密码不能为空！',
        passErrInfo: '请输入6-12位的密码!',

        params:{
          userName:'ling123',
          pwd:'123456'
        },
        error:{
          userName:'',
          pwd:''
        }

      }
    },
    methods: {
      async _init_page() {

      },
      _validation (params){
        if( params.userName == ''){

          return '用户名不能为空！'
        }
        if( !Valids.isUserName(params.userName ) ){
          return '请输入由中文、数字、字母组成的用户名！'
        }
        if( params.pwd == ''){
          return  '密码不能为空！'
        }
        if(params.pwd.length < 6 || params.pwd.length>12 ){
          return  '请输入6-12位的密码！'
        }
        return 'yes'

      },
      _is_login(){
        let error = this._validation(this.params);
        if(error=='yes'){

          this.$get_login(this.params).then(()=>{
            sessionStorage.setItem('isLogin',true )
            let jumpPath = sessionStorage.getItem('redirect') || '/app/main';
            this.$router.replace({ path:jumpPath })
            sessionStorage.setItem('redirect','')
          })

        }else{
          this.$message({
            message: error,
            type: 'error'
          });
        }

      }

    },
    watch: {/*'': {handler(val, olval){}, deep: true ,immediate:true}  */},
    destroy() {
    }
  }
</script>
<template>
  <div class="vc-fluid vc-bg vc-flex--center">
    <div class="vc-row" style="width: 300px">

      <div class="vc-margin--bm">
        <el-input v-model="params.userName" placeholder="请输入您的账户名"></el-input>
      </div>
      <div class="vc-margin--bm">
        <el-input type="password" v-model="params.pwd" placeholder="请输入您的登录密码"></el-input>
      </div>
      <div class="el-cover">
        <el-button type="primary" @click.native="_is_login">登录</el-button>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
