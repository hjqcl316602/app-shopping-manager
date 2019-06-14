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

  <div class="">

    <table class="vp-table vc-border--tp">
      <tr>
        <td colspan="6" class="vc-border--bm vc-border--rt ">
          <div class="vc-padding__lg">
            <div class="vc-text--bold">2018-2019学年上学期第二次模考</div>
            <div class="vc-text--sm vc-text--light vc-text--baseline--md">考试时间：2018/08/01 14：00 —— 15：00</div>
          </div>
        </td>
      </tr>
      <tr class="">
        <td   class="vc-text--left vc-padding__lg--lt vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light vc-text--bold">排名</span></td>
        <td   class="vc-text--center vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light vc-text--bold">姓名</span></td>
        <td   class="vc-text--center vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light vc-text--bold">总成绩</span></td>
        <td   class="vc-text--center vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light vc-text--bold">语文</span></td>
        <td   class="vc-text--center vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light vc-text--bold">数学</span></td>
      </tr>

      <tr class="" v-for="item in 30">
        <td class="vc-text--left vc-padding__lg--lt vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt vc-padding--ad " ><span class="vc-text--light">1</span></td>
        <td class="vc-text--center vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light">黄军泉</span></td>
        <td class="vc-text--center vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light">100</span></td>
        <td class="vc-text--center vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light">99</span></td>
        <td class="vc-text--center vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light">99</span></td>
      </tr>
    </table>
  </div>

  <div class="vp-footer vp-footer--shadow">
    <div class="vc-flex vp-row" >
      <router-link tag="div" :to="{ name :'SubScoreEdit'}" class="vc-flex--aut   vp-btn__simple vp-btn--theme " >完善成绩</router-link>
    </div>
  </div>
</div>
</template>
<style scoped></style>
