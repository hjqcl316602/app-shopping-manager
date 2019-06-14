<script type="text/ecmascript-6">
  export default {
    name: "",
    components: {   },
    beforeRouteEnter (to, from, next) {
      next(vm=> {
      })
    },
    beforeRouteLeave(to, from, next){
      next();
    },
    beforeRouteUpdate (to, from, next) {
      next();
    },
    beforeCreate(){
    },
    created(){
    },
    beforeMount(){
    },
    mounted(){
      this.login();
    },
    activated(){
    },
    props: [],
    data(){
      return {}
    },
    methods: {
      login(){

        console.log(this.$configs['HTTP_LOCATION']);
        if(this.$configs['HTTP_LOCATION'] == 'localhost'){
          //this.$store.commit('set_login',true);
          sessionStorage.setItem('isLogin',true)
        }

        if( sessionStorage.getItem('isLogin') ){
          let jumpPath = sessionStorage.getItem('redirect') || '/MainIndex';
          this.$router.replace({ path:jumpPath })
        }else{
          sessionStorage.setItem('isLogin',true);
          let href = `${ this.$configs['HTTP_REQUEST_WX']}/wxAuth/redirect.do?returnUrl=/Login&memType=${sessionStorage.getItem('memType')}`;
          window.location.href = href ;
        }
      },
    },
  }
</script>
<template>

  <div class="vc-fluid vc-bg vc-flex--center">
    <span class="vc-text--light vc-text--xl-xx">登录中...</span>
  </div>

</template>
<style scoped>

</style>
