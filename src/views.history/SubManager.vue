<script type="text/ecmascript-6">
  //import Header  from './components/header.vue'
  import manager  from './mixin/manager'
  import VaBtnGroup  from './component/va.btn.group.vue'
  export default {
    name: "SubManager",
    components: { VaBtnGroup },
    mixins: [ manager ],
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
    computed:{
      discList(){
        return  this.$store.state.manager['discList']
      }
    },
    data(){
      return {
        tab:{
          options:[
            { text:'课表' ,value:'1'},
            { text:'作息' ,value:'2'},
            { text:'纪律' ,value:'3'},
            { text:'操行' ,value:'4'},
          ],
          active:0
        },
      }
    },
    methods: {
      async _init_page(){
          await this.$get_disc_list()
      }

    },
    watch: {
      ['tab.active']: {handler(val, olval){
        if(val == 2){
          this.$get_disc_list()
        }
      },
        deep: true ,immediate:true}  },
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
      <template v-if="true">
        <div class=" vc-padding__lg--ad vc-padding__xl-x--ud vc-bg vc-fluid vc-flex--center" >
          <div class="" >
            <div class="vc-text--light vc-text--center vc-padding__lg--ud">当前还没有课表哦～～</div>
          </div>
        </div>
      </template>
      <template v-if="false">
        <div class="vc-bg vc-padding__xl-x--ud vc-fluid--h-min">
          <table class="vp-table vc-border--tp">
            <tr>
              <td colspan="8" class="vc-border--bm vc-border--rt ">
                <div class="vc-padding__lg vc-flex vc-content--between">
                  <div class="vc-text--bold">双龙小学五年级课表</div>
                </div>
              </td>
            </tr>
            <tr class="">
              <td class="vc-text--center  vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light vc-text--bold"></span></td>
              <td class="vc-text--center  vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light vc-text--bold">周一</span></td>
              <td class="vc-text--center  vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light vc-text--bold">周二</span></td>
              <td class="vc-text--center  vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light vc-text--bold">周三</span></td>
              <td class="vc-text--center  vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light vc-text--bold">周四</span></td>
              <td class="vc-text--center  vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light vc-text--bold">周五</span></td>
              <td class="vc-text--center  vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light vc-text--bold">周六</span></td>
              <td class="vc-text--center  vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light vc-text--bold">周日</span></td>
            </tr>
            <tr>
              <td colspan="8" class="vc-border--bm vc-border--rt ">
                <div class="vc-padding--ud">
                  <div class="vc-text--center">上午</div>
                </div>
              </td>
            </tr>
            <tr class="" v-for="(item,index) in 4">
              <td class="vc-text--right vc-padding--rt  vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light">{{ index+1  }}</span></td>
              <td class="vc-text--center  vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light">语文</span></td>
              <td class="vc-text--center  vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light">语文</span></td>
              <td class="vc-text--center  vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light">语文</span></td>
              <td class="vc-text--center  vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light">英语</span></td>
              <td class="vc-text--center  vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light">数学</span></td>
              <td class="vc-text--center  vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light">语文</span></td>
              <td class="vc-text--center  vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light">语文</span></td>
            </tr>

            <tr>
              <td colspan="8" class="vc-border--bm vc-border--rt ">
                <div class="vc-padding--ud">
                  <div class="vc-text--center">下午</div>
                </div>
              </td>
            </tr>
            <tr class="" v-for="(item,index) in 4">
              <td class="vc-text--right vc-padding--rt vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light">{{ index + 5 }}</span></td>
              <td class="vc-text--center  vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light">语文</span></td>
              <td class="vc-text--center  vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light">语文</span></td>
              <td class="vc-text--center  vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light">语文</span></td>
              <td class="vc-text--center  vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light">英语</span></td>
              <td class="vc-text--center  vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light">数学</span></td>
              <td class="vc-text--center  vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light">语文</span></td>
              <td class="vc-text--center  vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light">语文</span></td>
            </tr>

            <tr>
              <td colspan="8" class="vc-border--bm vc-border--rt ">
                <div class="vc-padding--ud">
                  <div class="vc-text--center">晚上</div>
                </div>
              </td>
            </tr>
            <tr class="" v-for="(item,index) in 4">
              <td class="vc-text--right vc-padding--rt  vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light">{{ index + 9 }}</span></td>
              <td class="vc-text--center  vp-row vp-table--center vc-padding--ud vc-padding--ad vc-border--bm vc-border--rt"><span class="vc-text--light">语文</span></td>
              <td class="vc-text--center  vp-row vp-table--center vc-padding--ud vc-padding--ad vc-border--bm vc-border--rt"><span class="vc-text--light">语文语文</span></td>
              <td class="vc-text--center  vp-row vp-table--center vc-padding--ud vc-padding--ad vc-border--bm vc-border--rt"><span class="vc-text--light">语文</span></td>
              <td class="vc-text--center  vp-row vp-table--center vc-padding--ud vc-padding--ad vc-border--bm vc-border--rt"><span class="vc-text--light">英语语文</span></td>
              <td class="vc-text--center  vp-row vp-table--center vc-padding--ud vc-padding--ad vc-border--bm vc-border--rt"><span class="vc-text--light">数学</span></td>
              <td class="vc-text--center  vp-row vp-table--center vc-padding--ud vc-padding--ad vc-border--bm vc-border--rt"><span class="vc-text--light">语文语文</span></td>
              <td class="vc-text--center  vp-row vp-table--center vc-padding--ud vc-padding--ad vc-border--bm vc-border--rt"><span class="vc-text--light">语文语文</span></td>
            </tr>
          </table>
        </div>
      </template>


      <div class="vp-footer vp-footer--shadow">
        <div class="vc-flex vp-row" >

          <router-link tag="div" :to="{name :'SubTimetableEdit'}" class="vc-flex--aut   vp-btn__simple vp-btn--theme vp-btn--border">编辑课表</router-link>
          <router-link tag="div" :to="{name :'SubTimetableEditWeekend'}" class="vc-flex--aut   vp-btn__simple vp-btn--theme " >自定周末</router-link>

        </div>
      </div>

    </template>

    <template v-if="tab.active == 1 ">

      <template v-if="true">
        <div class=" vc-padding__lg--ad vc-padding__xl-x--ud vc-bg vc-fluid vc-flex--center" >
          <div class="" >
            <div class="vc-text--light vc-text--center vc-padding__lg--ud">当前还没有作息表哦～～</div>
          </div>
        </div>
      </template>
      <template v-if="false">
        <div class="vc-bg vc-padding__xl-x--ud vc-fluid--h-min">
          <table class="vp-table vc-border--tp">
            <tr>
              <td colspan="6" class="vc-border--bm vc-border--rt ">
                <div class="vc-padding__lg vc-flex vc-content--between">
                  <div class="vc-text--bold">我的作息表</div>
                </div>
              </td>
            </tr>
            <tr class="">
              <td class="vc-text--left vc-padding__lg--lt vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light vc-text--bold">时间</span></td>
              <td class="vc-text--left vc-padding__lg--lt vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light vc-text--bold">安排</span></td>
            </tr>

            <tr class="" v-for="item in 9">
              <td class="vc-text--left vc-padding__lg--lt vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt vc-padding--ad " ><span class="vc-text--light">6：40</span></td>
              <td class="vc-text--left vc-padding__lg--lt vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light">起床</span></td>
            </tr>
          </table>

          <!--<div class=" vc-padding__lg&#45;&#45;ad "style="padding-top: 150px;" >
            <div class="" >
              <div class="vc-text&#45;&#45;light vc-text&#45;&#45;center vc-padding__lg&#45;&#45;ud">当前还没有作息表哦～～</div>
              <div class="vp-btn__submit vp-btn&#45;&#45;theme">点击创建</div>
            </div>
          </div>-->

        </div>
      </template>

      <div class="vp-footer vp-footer--shadow">
        <div class="vc-flex vp-row" >
          <router-link tag="div" :to="{ name :'SubWorkrestEdit'}" class="vc-flex--aut   vp-btn__simple vp-btn--theme " >编辑作息表</router-link>
        </div>
      </div>

    </template>

    <template v-if="tab.active == 2 ">
      <div class="vc-bg vc-padding__xl-x--ud vc-fluid--h-min">

        <table class="vp-table vc-border--tp">

          <tr class="">
            <td class="vc-text--left vc-padding__lg--ad vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt">
              <div class="vc-flex vc-content--between">
                <div class="vp-icon__outer">
                  <div class="vc-text--bold vc-text--light">优秀</div>
                  <div class="vp-icon__status--fine vc-margin--lt"></div>
                </div>
                <div class="vp-icon__outer">
                  <div class="vc-text--bold vc-text--light">一般</div>
                  <div class="vp-icon__status--normal vc-margin--lt"></div>
                </div>
                <div class="vp-icon__outer">
                  <div class="vc-text--bold vc-text--light">较差</div>
                  <div class="vp-icon__status--poor vc-margin--lt"></div>
                </div>
              </div>
            </td>
            <td class="vc-text--center vc-padding__lg--ad vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light vc-text--bold">选择</span></td>
          </tr>

          <tr class="" v-for="(item,index) in discList">
            <td class="vc-text--left vc-padding__lg--lt vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt vc-padding--ad " >
              <div class="vc-box--inline-block">
                <div class="vp-icon__outer">
                  <div class="vp-icon__status--poor " v-if="item.status == 0"></div>
                  <div class="vp-icon__status--normal " v-if="item.status == 1"></div>
                  <div class="vp-icon__status--fine " v-if="item.status == 2"></div>
                  <div class=" vc-text--light vc-text--md vc-margin--lt">李晓佳</div>
                </div>
              </div>

            </td>
            <td class="vc-text--center  vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt" @click="$store.commit('set_disc_select',index)">
              <div class="vp-icon__select" :class="{ 'vp-icon__select--active':item.active }" ></div>
            </td>
          </tr>
        </table>
      </div>

      <div class="vp-footer vp-footer--shadow">
        <div class="vc-flex vp-row" >
          <router-link tag="div" :to="{ name :'SubDisciplineReport'}" class="vc-flex--aut   vp-btn__simple vp-btn--theme vp-btn--border" >纪律报表</router-link>
          <router-link tag="div" :to="{ name :'SubDisciplineEdit',query:{ type:'1'} }" class="vc-flex--aut   vp-btn__simple vp-btn--theme vp-btn--border">表扬</router-link>
          <router-link tag="div" :to="{ name :'SubDisciplineEdit',query:{ type:'0'} }" class="vc-flex--aut   vp-btn__simple vp-btn--theme " >批评</router-link>
        </div>
      </div>

    </template>

  </div>
</template>
<style scoped></style>
