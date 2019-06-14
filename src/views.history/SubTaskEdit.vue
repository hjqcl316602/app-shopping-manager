<script type="text/ecmascript-6">
  //import Header  from './components/header.vue'
  //import basic  from '../Mixin/basic'
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
        task:{
          params:[ { name:''}],
          active:0,
          options: [
            {
              text: '英语',value:'1'
            },
            {
              text: '语文',value:'2'
            },
            {
              text:'数学',value:'3'
            },
            {
              text: '体育',value:'4'
            },
            {
              text: '英语',value:'1'
            },
            {
              text: '语文',value:'2'
            },
            {
              text:'数学',value:'3'
            },
            {
              text: '体育',value:'4'
            },
            {
              text: '英语',value:'1'
            },
            {
              text: '语文',value:'2'
            },
            {
              text:'数学',value:'3'
            },
            {
              text: '体育',value:'4'
            },
          ]
        },


      }
    },
    methods: {
      async _init_page(){

      },
      _add_task(){
        this.task.params.push(  { name : '' }  );
        console.log(this.task.params)
      },
      _del_task(index){
        if(this.task.params.length > 1){
          this.task.params.splice(index,1)
        }
      },
      _save_task(){
        this.$dialog.confirm({
          message:'是否确认创建作业？'
        }).then(()=>{
          //this.$destroy();
          this.$router.go(-1);
        }).catch(()=>{})
      },
      _select_class_open(index){
        this.task.active = index ;
        this.popup.show = true;
      },
      _select_class(item){
        this.task.params[this.task.active]['name'] = item['text'];
      }
    },
    watch: {/*'': {handler(val, olval){}, deep: true ,immediate:true}  */},
    destroy(){
    }
  }
</script>
<template>
  <div class="vc-padding__xl-x--bm vc-fluid--h-min">


    <VaPopupRadio :options="task.options" v-model="popup.show" @select="_select_class"></VaPopupRadio>

    <div class="vc-bg vc-padding__lg vc-margin--bm" v-for="(item,index) in task.params">
      <div class="vc-flex vc-content--between vc-items--center">
        <div class="vc-flex--fit">
          <div class="vc-margin--bm">
            <div class="vp-row--sm vc-bor--theme-light vc-bg--theme--gray vc-radius ">
              <div class="vc-cover vc-padding--ad vc-flex vc-items--center vc-content--between" @click="_select_class_open(index)">
                <span class="vc-text--bold" v-if="!item.name">请选择课程</span>
                <span class="vc-text--bold " v-if="!!item.name">{{ item.name }}</span>
                <i class="iconfont icon-iconfontjiantou2 vc-text--bold vc-text--gray"></i>
              </div>
            </div>
          </div>
          <div class="">
            <textarea name="" id="" cols="20" rows="8" class="vc-cover vp-row--sm vc-bor--theme-light vc-bg--theme--gray vc-radius vc-padding" v-model="item['name']"></textarea>
          </div>
        </div>
        <div class="vp-icon__cancel vc-margin--lt" v-if="task.params.length > 1" @click="_del_task(index)"></div>
      </div>


      <!--<div class="vp-btn__submit  vp-btn&#45;&#45;danger " @click="_del_task(index)"> 删除此条</div>-->
      <div class="vp-btn__submit  vp-btn--theme vc-margin--tp"  v-if="index == ( task.params.length - 1 )"  @click="_add_task"> 添加新作业</div>
    </div>



    <div class="vp-footer vp-footer--shadow">
      <div class="vc-flex vp-row" >
        <div  class=" vp-btn__simple vp-btn--white " @click="_save_task">保存</div>
      </div>
    </div>


  </div>
</template>
<style scoped></style>
