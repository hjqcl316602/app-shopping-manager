<script type="text/ecmascript-6">
        //import Header  from './components/header.vue'
        //import basic  from '../Mixin/basic'\
        //import { VaPopupRadio }  from './component'
        //import manager  from './mixin/manager'
        export default {
                name: "",
                components: {},
                mixins: [],
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
                        this._init_page()
                },
                mounted(){

                },
                activated(){
                },
                props: [],
                data(){
                        return {}
                },
                methods: {
                        async _init_page(){

                        }

                },
                watch: {/*'': {handler(val, olval){}, deep: true ,immediate:true}  */},
                destroy(){
                }
        }
</script>
<template>
<div class="vc-fluid--h-min vc-bg vc-padding__xl-x--bm">

  <div class="vc-padding__lg ">
    <div class="vc-margin__lg--bm">
      <div class="vc-text--bold vc-text--light">考试信息</div>
      <div class="vp-input vc-margin--tp">
        <input type="text" class="vp-input__inner" placeholder="请输入考试名称">
      </div>
    </div>

    <div class="vc-margin--bm" v-for="item in 5">
      <div class="vc-text--bold vc-text--light">科目一</div>
      <div class="vp-input vc-margin--tp">
        <div   class="vp-input__inner vc-flex--center"  >
          <div class="vp-icon__outer">
            <span class="vc-text--bold vc-text--light">请选择科目</span>
            <i class="icon-iconfontjiantou2 iconfont vc-text--light"></i>
          </div>
        </div>
      </div>
      <div class="vc-margin--tp">
        <div class="vc-row" data-gutter="10">
          <div class="vc-col--12">
            <div   class="vp-input__inner vc-flex--center"  >
              <div class="vp-icon__outer">
                <span class="vc-text--bold vc-text--light">请开始时间</span>
                <i class="icon-iconfontjiantou2 iconfont vc-text--light"></i>
              </div>
            </div>
          </div>
          <div class="vc-col--12">
            <div   class="vp-input__inner vc-flex--center"  >
              <div class="vp-icon__outer">
                <span class="vc-text--bold vc-text--light">请结束时间</span>
                <i class="icon-iconfontjiantou2 iconfont vc-text--light"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="vp-btn__submit vp-btn--theme">添加科目</div>
  </div>
  
  <div class="vp-footer vp-footer--shadow">
    <div class="vc-flex vp-row" >
      <div  class=" vp-btn__simple vp-btn--white " @click="">保存</div>
    </div>
  </div>

</div>
</template>
<style scoped></style>
