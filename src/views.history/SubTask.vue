<script type="text/ecmascript-6">
  //import Header  from './components/header.vue'
  //import basic  from '../Mixin/basic'
  import VaBtnGroup  from './component/va.btn.group.vue'
  export default {
    name: "",
    components: { VaBtnGroup },
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
    },
    mounted(){

    },
    activated(){
      if(this.$route.meta.noLoading){

      }else{
        this._init_page();
      }
    },
    props: [],
    data(){
      return {
        tab:{
          options:[
            { text:'各科作业' ,value:'1'},
            { text:'作业统计' ,value:'2'},
            { text:'作业报表' ,value:'3'},
          ],
          active:0
        },
      }
    },
    methods: {
      async _init_page(){
        console.log('subtask')
      }

    },
    watch: {/*'': {handler(val, olval){}, deep: true ,immediate:true}  */},
    destroy(){
    }
  }
</script>
<template>
  <div class="">
    <div class="vp-header vc-bg--theme vp-header--shadow vc-flex--center vp-row" >
      <VaBtnGroup :options="tab.options" v-model="tab.active"></VaBtnGroup>
    </div>
    <template v-if="tab.active == 0 ">
      <template v-if="false">
        <div class=" vc-padding__lg--ad vc-padding__xl-x--ud vc-bg vc-fluid vc-flex--center" >
          <div class="" >
            <div class="vc-text--light vc-text--center">当前还没有作业哦～～</div>
          </div>
        </div>
      </template>
      <template v-if="true">
        <div class=" vc-padding__xl-x--ud vc-fluid--h-min ">


          <div class="vc-bg vc-margin--bm" v-for="(item,index) in 5">
            <table class="vp-table ">
              <tr>
                <td  class="vc-border--bm vc-border--rt ">
                  <div class="vc-padding__lg vc-flex vc-content--between">
                    <div class="vc-text--bold">2018-08-01 星期一作业内容</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td  class=" vc-border--rt ">
                  <div class="vc-padding__lg  ">
                    <p class="vc-text--light vc-text--baseline--md">【语文】课后作业，1-15题</p>
                    <p class="vc-text--light vc-text--baseline--md">【数学】课后作业，1-15题</p>
                    <p class="vc-text--light vc-text--baseline--md">【英语】【英语】写一篇题为"my pen pal"的英文书信。</p>
                  </div>
                </td>
              </tr>

            </table>
          </div>

        </div>
      </template>

      <div class="vp-footer vp-footer--shadow">
        <div class="vc-flex vp-row" >
          <router-link tag="div" :to="{ name :'SubTaskEdit'}" class="vc-flex--aut   vp-btn__simple vp-btn--theme " >编辑今日作业</router-link>
        </div>
      </div>

    </template>

    <template v-if="tab.active == 1 ">

      <div class="vc-bg vc-padding__xl-x--ud vc-fluid--h-min">
        <table class="vp-table vc-border--tp">
          <tr>
            <td colspan="6" class="vc-border--bm vc-border--rt ">
              <div class="vc-padding__lg vc-flex vc-content--between">
                <div class="vc-text--bold">2018-08-01 星期一（今日）作业反馈情况</div>
              </div>
            </td>
          </tr>
          <tr class="">
            <td   class="vc-text--left vc-padding__lg--lt vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light vc-text--bold">姓名</span></td>
            <td   class="vc-text--center vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light vc-text--bold">完成</span></td>
            <td   class="vc-text--center vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light vc-text--bold">耗时</span></td>
            <td   class="vc-text--center vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light vc-text--bold">成绩</span></td>
          </tr>

          <tr class="" v-for="item in 30">
            <td class="vc-text--left vc-padding__lg--lt vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt vc-padding--ad " ><span class="vc-text--light">黄军泉</span></td>
            <td class="vc-text--center vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt">
              <i class="vp-icon__good" v-if="item % 2 == 1"></i><i class="vp-icon__bad" v-else></i>
            </td>
            <td class="vc-text--center vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light">1</span></td>
            <td class="vc-text--center vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light">1</span></td>
          </tr>
        </table>

        <div class="vp-footer vp-footer--shadow">
          <div class="vc-flex vp-row" >
            <div class="vc-flex--aut   vp-btn__simple vp-btn--theme vp-btn--border">上一页</div>
            <div class="vc-flex--aut   vp-btn__simple vp-btn--theme vp-btn--border">今日</div>
            <div class="vc-flex--aut   vp-btn__simple vp-btn--theme vp-btn--border">下一页</div>
          </div>
        </div>
      </div>
    </template>

    <template v-if="tab.active == 2 ">
      <div class=" vc-padding__xl-x--tp vc-fluid--h-min">
        <div class="vc-bg vc-margin--bm vc-padding__lg--bm" v-for="item in 3">
          <table class="vp-table ">
            <tr>
              <td colspan="8"  class="vc-border--bm vc-border--rt ">
                <div class="vc-padding__lg vc-flex vc-content--between">
                  <div>
                    <div class="vc-text--bold">2018-08-01 星期一作业内容</div>
                    <div class="vc-text--light "> 本周作业共5次</div>
                  </div>

                  <router-link tag="div" :to="{ name :'SubTaskReport'}" class="vp-icon__outer">
                    <span class="vc-text--theme vc-text--bold  ">查看更多</span>
                    <i class="vc-text--theme vc-text--bold iconfont icon-iconfontjiantou2"></i>
                  </router-link>
                </div>
              </td>
            </tr>
            <tr class="">
              <td class="vc-text--left vc-padding__lg--lt vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light vc-text--bold">姓名</span></td>
              <td class="vc-text--center  vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light vc-text--bold">完成次数</span></td>
              <td class="vc-text--center  vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light vc-text--bold">平均耗时(h)</span></td>
              <td class="vc-text--center  vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light vc-text--bold">综合评定</span></td>
            </tr>

            <tr class="" v-for="item in 5">
              <td class="vc-text--left vc-padding__lg--lt vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt vc-padding--ad " ><span class="vc-text--light">黄军泉</span></td>
              <td class="vc-text--center  vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light">1</span></td>
              <td class="vc-text--center  vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light">1</span></td>
              <td class="vc-text--center  vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light">1</span></td>
            </tr>
          </table>
        </div>
      </div>

      <!--<div class="vp-footer vp-footer&#45;&#45;shadow">
        <div class="vc-flex vp-row" >
          <div class="vc-flex&#45;&#45;aut   vp-btn__simple vp-btn&#45;&#45;theme vp-btn&#45;&#45;border" @click="_change_atten_status('cd')">纪律报表</div>
          <div class="vc-flex&#45;&#45;aut   vp-btn__simple vp-btn&#45;&#45;theme vp-btn&#45;&#45;border" @click="_change_atten_status('qj')">表扬</div>
          <div class="vc-flex&#45;&#45;aut   vp-btn__simple vp-btn&#45;&#45;theme " @click="_change_atten_status('cd')">批评</div>
        </div>
      </div>
-->
    </template>

  </div>
</template>
<style scoped></style>
