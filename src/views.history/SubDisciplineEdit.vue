<script type="text/ecmascript-6">
  import { VaCheckbox }  from './component'
  //import basic  from '../Mixin/basic'
  export default {
    name: "",
    components: { VaCheckbox },
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
      this._init_page()
    },
    computed:{
      discSelectList(){
        let arr = this.$store.state.manager['discList'] ;
        let newArr = Arrays.filter(arr,(item)=>{ return !!item.active})
        return  newArr
      }
    },
    data(){
      return {
        label:{
          options:[],
        },
        type:''
      }
    },
    methods: {
      async _init_page(){
          this.type = this.$route.query['type'];
        document.title = ( this.type == 0 ) ? '批评': '表扬';
        this.label.options = JSON.parse( localStorage.getItem('labels')) || [];

      },
      _select_label(value){
        console.log(value)
      }
    },
    watch: {/*'': {handler(val, olval){}, deep: true ,immediate:true}  */},
    destroy(){
    }
  }
</script>
<template>
  <div class="vc-bg vc-fluid--h-min vc-padding__lg--bm">
    <div class="vc-padding__lg--ad vc-border--bm">
      <div class="vc-text--bold vc-padding__lg--ud vc-border--bm">学生：</div>
      <div class="vc-padding__lg">
        <p class="vc-text--light vc-text--baseline--md">
          <span v-for="(item,index) in discSelectList" >{{ item['name'] }} {{ (index != discSelectList.length - 1 ) ? '、':'' }}</span>
        </p>
      </div>
    </div>

    <div class="vc-padding__lg--ad vc-border--bm">
      <div class="vc-text--bold vc-padding__lg--ud vc-border--bm">批评内容：</div>
      <div class="vc-padding__lg">
        <VaCheckbox :options="label.options" @select="_select_label"></VaCheckbox>
        <router-link tag="div" :to="{ name:'SubDisciplineEditLabel'}" class="vc-text--bold vc-text--theme">+标签管理</router-link>
      </div>
    </div>

    <div class="vc-padding__lg--ad ">
      <div class="vc-text--bold vc-padding__lg--ud ">备注信息：</div>
      <div class="vc-margin--bm">
        <textarea name="" id="" cols="20" rows="8" class="vc-cover vp-row--sm vc-bor--theme-light vc-bg--theme--gray vc-radius vc-padding" maxlength="200"></textarea>
      </div>

      <div class="vp-btn__submit vp-btn--theme">确定</div>
    </div>

  </div>
</template>
<style scoped></style>
