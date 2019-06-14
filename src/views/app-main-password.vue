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
        params:{
          oldPwd : '',
          newPwd : '',
          newAgainPwd : ''
        }
      }
    },
    methods: {
      async _init_page() {

      },
      _save_pwd(){
        let valid  =  this._validation( this.params ) ;
        if( valid == 'yes'){
          let params = {
            userId : this.$store.state.user['userMessage']['userId'],
            oldPwd : this.params.oldPwd,
            newPwd : this.params.newPwd,
          };
          this.$update_user_pwd(params).then((response)=>{
            if(response['data'].indexOf('成功') > -1 ){
              this.$message({
                message: response['data'],
                type: 'success'
              });
              sessionStorage.setItem('isLogin',false );
              sessionStorage.setItem('redirect','/app/main');
              this.$destroy();
              setTimeout(()=>{
                this.$router.replace({ name :'AppLogin'})
              },500)
            }else{
              this.$message({
                message: response['data'],
                type: 'error'
              });
            }

          });
        }else{
          this.$message({
            message:valid ,
            type: 'error'
          });

        }
      },
      _validation( params){
        if( params.oldPwd == ''){
          return '原登录密码不能为空！'
        }else{
          if(    params.oldPwd.length < 6  || params.oldPwd.length > 12      ){
            return '请输入6-12位的原登录密码!'
          }
        }

        if( params.newPwd == ''){
          return '新登录密码不能为空！'
        }else{
          if(    params.newPwd.length < 6  || params.newPwd.length > 12      ){
            return '请输入6-12位的新登录密码!'
          }
        }

        if( params.newAgainPwd == ''){
          return '确认登录不能为空！'
        }else{
          if(    params.newAgainPwd.length < 6  || params.newAgainPwd.length > 12      ){
            return '请输入6-12位的确认登录密码!'
          }
        }

        if( params.newPwd === params.oldPwd ){
          return '新密码和原密码不能一致!'
        }

        if( params.newPwd !== params.newAgainPwd ){
          return '两次输入的密码不一致!'
        }

        return 'yes'

      }
    },
    watch: {/*'': {handler(val, olval){}, deep: true ,immediate:true}  */},
    destroy() {
    }
  }
</script>
<template>
  <div>
    <div class="vc-text--bold vc-text--lg ">密码修改</div>
    <div class="vc-row">
      <div class="vc-col--08">
        <div class="vc-flex vc-margin--bm">
          <div  style="width: 200px" class="vc-flex vc-content--end vc-items--center vc-padding--rt">原密码：</div>
          <div class="vc-flex--fit">
            <el-input  type="password" v-model="params.oldPwd" placeholder="请输入原密码"></el-input>
          </div>
        </div>
        <div class="vc-flex vc-margin--bm">
          <div  style="width: 200px" class="vc-flex vc-content--end vc-items--center vc-padding--rt">新登录密码：</div>
          <div class="vc-flex--fit">
            <el-input  type="password" v-model="params.newPwd" placeholder="请输入新登录密码"></el-input>
          </div>
        </div>
        <div class="vc-flex vc-margin--bm">
          <div  style="width: 200px" class="vc-flex vc-content--end vc-items--center vc-padding--rt">确认登录密码：</div>
          <div class="vc-flex--fit">
            <el-input  type="password" v-model="params.newAgainPwd" placeholder="请再次输入登录密码"></el-input>
          </div>
        </div>

        <div class="vc-flex vc-margin--bm">
          <div  style="width: 200px" class="vc-flex vc-content--end vc-items--center vc-padding--rt">原密码：</div>
          <div class="vc-flex--fit el-cover">
            <el-button type="primary" @click.native="_save_pwd">确认</el-button>
          </div>
        </div>

      </div>


    </div>

  </div>
</template>
<style scoped></style>
