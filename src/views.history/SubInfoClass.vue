<script type="text/ecmascript-6">
  //import Header  from './components/header.vue'
  import manager  from './mixin/manager'
  import { VaPopupRadio }  from './component'
  export default {
    name: "",
    components: { VaPopupRadio },
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
        options:{
          sex:[ { text :'男',value:'male'},{ text:'女' ,value:'female'}],
          school:[
            { text:'成都一中',value:'1'},
            { text:'成都二中' ,value:'2'},
            { text:'成都三中',value:'3'},
            { text:'成都四中' ,value:'4'},
            { text:'成都一中',value:'1'},
            { text:'成都二中' ,value:'2'},
            { text:'成都三中',value:'3'},
            { text:'成都四中' ,value:'4'},
            { text:'成都一中',value:'1'},
            { text:'成都二中' ,value:'2'},
            { text:'成都三中',value:'3'},
            { text:'成都四中' ,value:'4'},
          ]
        },
        params:{
          sex:{},
          nickname:'',
          name:'',
          school:''
        }
      }
    },
    methods: {
      async _init_page(){

      },
      _select_sex(){

      },
      _save_class(){},
      _select_radio(value,type){
        this.params[type] = value
      }

    },
    watch: {/*'': {handler(val, olval){}, deep: true ,immediate:true}  */},
    destroy(){
    }
  }
</script>
<template>
  <div>

    <VaPopupRadio :options="options.sex" v-model="popups[0]" @select="_select_radio($event,'sex')"></VaPopupRadio>

    <van-popup position="right" v-model="popups[1]">
        <div class="vc-fluid vc-bg vc-flex vc-items--center">
          <div class="vc-fluid--w vc-padding__lg--ad">
            <div class="vp-input vc-margin--bm">
              <input type="text" v-model="params.nickname" placeholder="请输入孩子对您的称呼" class="vp-input__inner">
            </div>
            <div class="vp-btn__submit vp-btn--theme" @click="popups[1] = false">返回</div>
          </div>
        </div>
    </van-popup>

    <van-popup position="right" v-model="popups[2]">
      <div class="vc-fluid vc-bg vc-flex vc-items--center">
        <div class="vc-fluid--w vc-padding__lg--ad">
          <div class="vp-input vc-margin--bm">
            <input type="text" v-model="params.name" placeholder="请输入孩子的姓名" class="vp-input__inner">
          </div>
          <div class="vp-btn__submit vp-btn--theme" @click="popups[2] = false">返回</div>
        </div>
      </div>
    </van-popup>

    <van-popup position="right" v-model="popups[3]">
      <div class="">

        <div class="vp-header vp-header--shadow vc-padding__lg--ad vc-padding--ud vc-bg">
          <div class="vp-input">
            <input type="text" v-model="params.school" placeholder="请输入学校名称或选择以下学校" class="vp-input__inner">
          </div>
        </div>

        <div class="vc-fluid vc-padding__xl-x--bm vc-padding__xl-xx--tp  vc-bg vc-flow" >
          <div class="">
            <div class="vp-row vc-flex--center vc-text--light vc-text--lg vc-border--bm" v-for="(item,index) in options.school" @click="params.school = item.text">{{ item.text }}</div>
          </div>
        </div>

        <div class="vp-footer vp-footer--shadow">
          <div class="vc-flex vp-row" >
            <div  class=" vp-btn__simple vp-btn--white " @click="popups[3] = false">返回</div>
          </div>
        </div>

      </div>
    </van-popup>

    <div class="vc-bg">
      <div class="vp-row  vc-border--bm  vc-flex vc-items--center vc-content--between vc-padding__lg--ad">
        <div class="vc-text--bold vc-text--lg">省市区</div>
        <div class="vp-icon__outer">
          <span class=" vc-text vc-text--gray ">请选择省市区</span>
          <i class=" vc-text iconfont icon-iconfontjiantou2 vc-text--lg vc-text--gray vc-margin__sm--lt"></i>
        </div>
      </div>

      <div class="vp-row  vc-border--bm  vc-flex vc-items--center vc-content--between vc-padding__lg--ad" @click="popups[3] = true">
        <div class="vc-text--bold vc-text--lg">学校名称</div>
        <div class="vp-icon__outer">
          <span class=" vc-text vc-text--gray " v-if="!params.school">请输入或选择学校名称</span>
          <span class=" vc-text vc-text--light vc-text--lg" v-if="!!params.school">{{ params.school }}</span>
          <i class=" vc-text iconfont icon-iconfontjiantou2 vc-text--lg vc-text--gray vc-margin__sm--lt"></i>
        </div>
      </div>

      <div class="vp-row  vc-border--bm  vc-flex vc-items--center vc-content--between vc-padding__lg--ad">
        <div class="vc-text--bold vc-text--lg">年级</div>
        <div class="vp-icon__outer">
          <span class=" vc-text vc-text--gray ">请选择年级</span>
          <i class=" vc-text iconfont icon-iconfontjiantou2 vc-text--lg vc-text--gray vc-margin__sm--lt"></i>
        </div>
      </div>

      <div class="vp-row  vc-border--bm  vc-flex vc-items--center vc-content--between vc-padding__lg--ad">
        <div class="vc-text--bold vc-text--lg">班级</div>
        <div class="vp-icon__outer">
          <span class=" vc-text vc-text--gray ">请输入班级</span>
          <i class=" vc-text iconfont icon-iconfontjiantou2 vc-text--lg vc-text--gray vc-margin__sm--lt"></i>
        </div>
      </div>

      <div class="vp-row  vc-border--bm  vc-flex vc-items--center vc-content--between vc-padding__lg--ad" @click="popups[2] = true ">
        <div class="vc-text--bold vc-text--lg">孩子姓名</div>
        <div class="vp-icon__outer">
          <span class=" vc-text vc-text--gray " v-if="!params.name">请输入孩子的姓名</span>
          <span class=" vc-text vc-text--light vc-text--lg" v-if="!!params.name">{{ params.name }}</span>
          <i class=" vc-text iconfont icon-iconfontjiantou2 vc-text--lg vc-text--gray vc-margin__sm--lt"></i>
        </div>
      </div>

      <div class="vp-row  vc-border--bm  vc-flex vc-items--center vc-content--between vc-padding__lg--ad" @click="popups[0] = true ">
        <div class="vc-text--bold vc-text--lg">孩子性别</div>
        <div class="vp-icon__outer">
          <span class=" vc-text vc-text--gray " v-if="!params.sex.text">请选择孩子性别</span>
          <span class=" vc-text vc-text--light vc-text--lg" v-if="!!params.sex.text">{{ params.sex.text }}</span>
          <i class=" vc-text iconfont icon-iconfontjiantou2 vc-text--lg vc-text--gray vc-margin__sm--lt"></i>
        </div>
      </div>

      <div   class="vp-row    vc-flex vc-items--center vc-content--between vc-padding__lg--ad" @click="popups[1] = true">
        <div class="vc-text--bold vc-text--lg">孩子对您的称呼</div>
        <div class="vp-icon__outer">
          <span class=" vc-text vc-text--light vc-text--lg" v-if="!!params.nickname">{{ params.nickname }}</span>
          <span class=" vc-text vc-text--gray "  v-if="!params.nickname">请输入称呼</span>
          <i class=" vc-text iconfont icon-iconfontjiantou2 vc-text--lg vc-text--gray vc-margin__sm--lt"></i>
        </div>
      </div>

    </div>

    <div class="vp-footer vp-footer--shadow">
      <div class="vc-flex vp-row" >
        <div  class=" vp-btn__simple vp-btn--white vc-text--lg" @click="_save_class">保存</div>
      </div>
    </div>

  </div>
</template>
<style scoped></style>
