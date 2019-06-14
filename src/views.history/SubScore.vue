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
<div class=" vc-padding__xl-x--bm">
  <div class="vc-bg vc-margin--bm" v-for="item in 10">

    <router-link tag="div" :to="{ name : 'SubScoreDetail' }" class="vc-flex vc-items--center vc-content--between vc-padding__lg" >
      <div class="vc-flex--fit" >
        <div class="vc-text--bold">2018-2019学年上学期第二次模考</div>
        <div class="vc-text--sm vc-text--light vc-text--baseline--md">考试时间：2018/08/01 14：00 —— 15：00</div>
      </div>
      <div class="iconfont icon-iconfontjiantou2 vc-text--gray vc-text--xl"></div>
    </router-link>

  </div>

  <div class="vp-footer vp-footer--shadow">
    <div class="vc-flex vp-row" >
      <router-link tag="div" :to="{ name :'SubTest'}" class="vc-flex--aut   vp-btn__simple vp-btn--theme " >添加考试</router-link>
    </div>
  </div>

</div>
</template>
<style scoped></style>
