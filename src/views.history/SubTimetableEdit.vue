<script type="text/ecmascript-6">
  //import Header  from './components/header.vue'
  //import basic  from '../Mixin/basic'
  import VaBtnGroup  from './component/va.btn.group.vue'
  import VaConfirm  from './component/va.confirm.vue'
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
      this._init_page()
    },
    mounted(){

    },
    activated(){
    },
    props: [],
    data(){
      return {
        tab:{
          options:[
            { text:'周一' ,value:'1'},
            { text:'周二' ,value:'2'},
            { text:'周三' ,value:'3'},
            { text:'周四' ,value:'4'},
            { text:'周五' ,value:'5'},
          ],
          active:0
        },
        timeTable:[
          [ [  [ { name :''} ]  ],  [  [ { name :''} ]  ],[  [ { name :''} ]  ] ],
          [ [  [ { name :''} ]  ],  [  [ { name :''} ]  ],[  [ { name :''} ]  ] ],
          [ [  [ { name :''} ]  ],  [  [ { name :''} ]  ],[  [ { name :''} ]  ] ],
          [ [  [ { name :''} ]  ],  [  [ { name :''} ]  ],[  [ { name :''} ]  ] ],
          [ [  [ { name :''} ]  ],  [  [ { name :''} ]  ],[  [ { name :''} ]  ] ],
        ]
      }
    },
    methods: {
      async _init_page(){

      },
      _add_timetable(index){
        this.timeTable[this.tab.active][index].push( { name :''})
      },
      _del_timetable(index,i){
        this.timeTable[this.tab.active][index].splice(i,1)
      },
      _save_timetable(){
        console.log(this.timeTable)
      }

    },
    watch: {/*'': {handler(val, olval){}, deep: true ,immediate:true}  */},
    destroy(){
    }
  }
</script>
<template>
  <div class="">
    <va-confirm v-model="popup.show" title="课程表确认">
       <div slot="content">
         <table class="vp-table vc-border--tp vc-border--lt">
           <tr class="">
             <td class="vc-text--center  vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light vc-text--bold"></span></td>
             <td class="vc-text--center  vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light vc-text--bold">周一</span></td>
             <td class="vc-text--center  vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light vc-text--bold">周二</span></td>
             <td class="vc-text--center  vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light vc-text--bold">周三</span></td>
             <td class="vc-text--center  vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light vc-text--bold">周四</span></td>
             <td class="vc-text--center  vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light vc-text--bold">周五</span></td>

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
             <td class="vc-text--center  vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light">语文</span></td>
             <td class="vc-text--center  vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light">语文</span></td>
             <td class="vc-text--center  vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light">语文</span></td>
             <td class="vc-text--center  vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light">英语</span></td>
             <td class="vc-text--center  vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light">数学</span></td>
           </tr>
         </table>
       </div>
    </va-confirm>

    <div class="vp-header vc-bg--theme vp-header--shadow vc-flex--center vp-row" >
      <VaBtnGroup :options="tab.options" v-model="tab.active"></VaBtnGroup>
    </div>
    <div class="vc-bg vc-padding__xl-x--ud vc-padding__lg--ad vc-fluid--h-min">

      <div class="vc-margin--bm" v-for="(item,index) in timeTable[tab.active]">
        <div class="vc-padding--ud vc-text--light vc-text--bold">上午课程</div>
        <div class=" vc-margin--bm vc-flex vc-items--center vc-content--between" v-for="(timetable ,i) in item">
          <div class="vp-input vc-flex--fit ">
            <input type="text" v-model="timetable['name']" placeholder="请输入课程名称" class="vp-input__inner">
          </div>
          <div class="vp-icon__cancel vc-margin--lt"  v-if="item.length > 1 " @click="_del_timetable(index,i)"></div>
        </div>
        <div class="vp-btn__submit vp-btn--theme" @click="_add_timetable(index)">添加课程</div>
      </div>
    </div>

    <div class="vp-footer vp-footer--shadow">
      <div class="vc-flex vp-row" >
        <div  class=" vp-btn__simple vp-btn--white " @click="_save_timetable">保存</div>
      </div>
    </div>

  </div>
</template>
<style scoped></style>
