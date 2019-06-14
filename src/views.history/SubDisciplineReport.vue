<script type="text/ecmascript-6">
        //import Header  from './components/header.vue'
        //import basic  from '../Mixin/basic'
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
<div class="">
  <template v-if="false">
    <div class="vc-fluid vc-flex--center vc-bg">
      <div class="vc-text--light vc-text--center vc-padding__lg--ud">当前还没有课表哦～～</div>
    </div>
  </template>
  <template v-if="true">
    <div class="">
      <div class="vc-bg vc-margin--bm" v-for="(item,index) in 5">
        <div class="vc-padding__lg vc-text--bold vc-border--bm">2018年8月纪律月报</div>
        <div class="vc-padding__lg ">
          <p class="vc-text--baseline--md">【表扬】 李小花、韩梅梅、王小明、李雷 ，【详情】 遵守纪律；认真听课</p>
        </div>
      </div>
    </div>
  </template>
</div>
</template>
<style scoped></style>
