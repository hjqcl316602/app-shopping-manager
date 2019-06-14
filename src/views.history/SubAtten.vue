<script type="text/ecmascript-6">
  import VaConfirm  from './component/va.confirm.vue'
  import VaBtnGroup  from './component/va.btn.group.vue'
  import manager  from './mixin/manager'
  export default {
    name: "SubAtten",
    components: { VaBtnGroup,VaConfirm },
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
    },
    mounted(){

    },
    activated(){
      if(this.$route.meta.noLoading){

      }else{
        this._init_page();
      }

    },
    computed:{
      attenList(){
        return  this.$store.state.manager['attenList']
      }
    },
    data(){
      return {
        tab:{
          options:[
            { text:'今日考勤' ,value:'1'},
            { text:'更多考勤' ,value:'2'},
          ],
          active:0
        },
        popup:{
          show:false
        },
        time:'after',
        show:true,
        stepper:{
          value:''
        }
      }
    },
    methods: {
      async _init_page(){

        await this.$get_atten_list()
      },
      _change_atten_status(type){
        let selectStu = this._get_select_student();
        if( selectStu.length == 0 ){
          //this.$toast({duration:1500,message:'请选择要考勤的学生！'})
          this.$dialog.alert({
            message: '请选择要考勤的学生!'
          });
          setTimeout(()=>{
            //
          },2000)
        }else{
          this.$dialog.confirm({
            title:'请假确认',
            message:selectStu.join('、')
          }).then(()=>{}).catch(()=>{})
        }

      },
      _get_select_student(){
        let newStudent = [];
        this.attenList.forEach((item,i)=>{
          if(item['active']){
            newStudent.push(item['name'])
          }
        })
        return newStudent;
      }

    },
    watch: {/*'': {handler(val, olval){}, deep: true ,immediate:true}  */},
    destroy(){
    }
  }
</script>
<template>
  <div class="vi-atten " >


    <VaConfirm v-model="popup.show">
      <div slot="title" class="vc-text--lg vc-text--bold vc-padding vc-border--bm">
        状态列表
      </div>
      <div slot="content" class="vc-padding">
        湖广会馆韩国货股份分割分割更丰富广泛广泛广泛给法国发过复古风格
      </div>
    </VaConfirm>

    <div class="vp-header vc-bg--theme vp-header--shadow vc-flex--center vp-row" >
      <VaBtnGroup :options="tab.options" v-model="tab.active"></VaBtnGroup>
    </div>
    <template v-if="tab.active == 0 ">
      <div class="vc-bg vc-padding__xl-x--ud vc-fluid--h-min">
        <div class="vc-row ">
          <div class="">
            <div class="vc-col--07 vc-border--rt vc-flex--center vc-border--bm vp-row"  >
              <div class="  ">
                <p class="vc-text--lg vc-text--bold">周一</p>
                <p class="vc-text--light vc-text--sm">(2018/08/01)</p>
              </div>
            </div>
            <div class="vc-col--06 vc-border--rt vc-flex--center vc-border--bm vp-row"  >
              <div class="vc-text--lg vc-text--bold  ">上午</div>
            </div>
            <div class="vc-col--06 vc-border--rt vc-flex--center vc-border--bm vp-row" >
              <div class="vc-text--lg vc-text--bold  ">下午</div>
            </div>
            <div class="vc-col--05 vc-flex--center vc-border--bm vp-row" >
              <div class="vc-text--lg vc-text--bold  ">考勤</div>
            </div>
          </div>
        </div>


        <div class="vc-row " v-for="(item,index) in attenList">
          <div class="">
            <div class="vc-col--07 vc-border--rt vc-flex vc-items--center vc-border--bm vp-row vc-padding--ad"  >
              <div class="vp-icon__outer">
                <div class="vp-icon__spot danger"></div>
                <div class="vc-flex--fit vc-text--light vc-padding--lt vc-text--ellipsis">黄军泉</div>
              </div>
            </div>
            <div class="vc-col--06 vc-border--rt vc-flex--center vc-border--bm vp-row vc-padding__sm--ad"  >
              <!--<div class="vc-text&#45;&#45;light">已到校</div>-->
              <div class="vp-img__inner vp-box">
                <img src="../img/icon-status-cd.png" alt="" class="vp-img--max" v-if="index == 0">
                <img src="../img/icon-status-zr.png" alt="" class="vp-img--max" v-if="index == 1">
                <img src="../img/icon-status-lx.png" alt="" class="vp-img--max" v-if="index == 2">
                <img src="../img/icon-status-zt.png" alt="" class="vp-img--max" v-if="index == 3">
                <img src="../img/icon-status-qj.png" alt="" class="vp-img--max" v-if="index == 4">
              </div>
            </div>
            <div class="vc-col--06 vc-border--rt vc-flex--center vc-border--bm vp-row vc-padding__sm--ad"  >
              <div class="vc-text--light">已离校</div>
            </div>
            <div class="vc-col--05 vc-border--rt vc-flex--center vc-border--bm vp-row vc-padding__sm--ad"  @click="$store.commit('set_atten_select',index)">
              <div class="vp-icon__select" :class="{'vp-icon__select--active':item.active }"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="vp-footer vp-footer--shadow">
        <div class="vc-flex vp-row" >
          <template v-if="time == 'morning'">
            <div class="vc-flex--aut   vp-btn__simple vp-btn--theme vp-btn--border" @click="_change_atten_status('qj')">请假</div>
            <div class="vc-flex--aut   vp-btn__simple vp-btn--theme vp-btn--border" @click="_change_atten_status('cd')">迟到</div>
            <div class="vc-flex--aut   vp-btn__simple vp-btn--theme " @click="_change_atten_status('yjdx')">一键到校</div>
          </template>
          <template v-if="time == 'after'">
            <div class="vc-flex--aut   vp-btn__simple vp-btn--theme vp-btn--border" @click="_change_atten_status('qj')">请假</div>
            <div class="vc-flex--aut   vp-btn__simple vp-btn--theme vp-btn--border" @click="_change_atten_status('zt')">早退</div>
            <div class="vc-flex--aut   vp-btn__simple vp-btn--theme vp-btn--border" @click="_change_atten_status('zr')">值日</div>
            <div class="vc-flex--aut   vp-btn__simple vp-btn--theme vp-btn--border" @click="_change_atten_status('lx')">留校</div>
            <div class="vc-flex--aut   vp-btn__simple vp-btn--theme " @click="_change_atten_status('yjlx')">一键离校</div>
          </template>
        </div>
      </div>
    </template>
    <template v-if="tab.active == 1 ">
      <div class="vc-bg vc-padding__xl-x--tp vc-fluid--h-min">

        <div class="vc-margin__lg--bm">

          <table class="vp-table vc-border--tp">
            <tr>
              <td colspan="6" class="vc-border--bm vc-border--rt ">
                <div class="vc-padding__lg vc-flex vc-content--between">
                  <div class="vc-text--bold">2018-08-01 星期一 考勤日报</div>
                  <router-link tag="div" :to="{ name : 'SubAttenDetail'}" class="vp-icon__outer">
                    <span class="vc-text--theme vc-text--bold  ">查看更多</span>
                    <i class="vc-text--theme vc-text--bold iconfont icon-iconfontjiantou2"></i>
                  </router-link>
                </div>
              </td>
            </tr>
            <tr class="">
              <td class="vc-text--center vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light vc-text--bold">姓名</span></td>
              <td class="vc-text--center vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light vc-text--bold">出勤</span></td>
              <td class="vc-text--center vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light vc-text--bold">迟到</span></td>
              <td class="vc-text--center vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light vc-text--bold">请假</span></td>
              <td class="vc-text--center vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light vc-text--bold">值日</span></td>
              <td class="vc-text--center vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light vc-text--bold">留校</span></td>
            </tr>

            <tr class="" v-for="item in 5">
              <td class="vc-text--left vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt vc-padding--ad " style="width: 80px"><span class="vc-text--light">姓名姓名</span></td>
              <td class="vc-text--center vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light">2</span></td>
              <td class="vc-text--center vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light">8</span></td>
              <td class="vc-text--center vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light">1</span></td>
              <td class="vc-text--center vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light">5</span></td>
              <td class="vc-text--center vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light">2</span></td>
            </tr>
          </table>
        </div>
        <div class="vc-border--tp vc-padding__lg--bm">

          <table class="vp-table vc-border--tp">
            <tr>
              <td colspan="2" class="vc-border--bm vc-border--rt vc-padding__lg">
                <span class="vc-text--bold">2018-08-01 星期一 考勤日报</span>
              </td>
            </tr>
            <tr class="">
              <td class="vc-text--center vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt"><span class="vc-text--light vc-text--bold">上午</span></td>
              <td class="vc-text--left vp-row  vc-padding__lg--ud vc-padding--ad vc-border--bm vc-border--rt">
                <p class="vc-text--light  ">【请假】李小花 </p>
                <p class="vc-text--light">【迟到】韩梅梅、王小明、李雷 </p>
              </td>
            </tr>

            <tr class="" >
              <td class="vc-text--center vp-row vp-table--center vc-padding--ud vc-border--bm vc-border--rt vc-padding--ad " style="width: 80px"><span class="vc-text--light vc-text--bold">下午</span></td>
              <td class="vc-text--left vp-row  vc-padding__lg--ud vc-padding--ad vc-border--bm vc-border--rt">
                <p class="vc-text--light  ">【请假】李小花 </p>
                <p class="vc-text--light">【迟到】韩梅梅、王小明、李雷 </p>
              </td>
            </tr>
          </table>

        </div>
      </div>
    </template>
  </div>
</template>
<style scoped></style>
