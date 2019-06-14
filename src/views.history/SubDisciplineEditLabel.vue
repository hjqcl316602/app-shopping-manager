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
      return {
        labels:[]
      }
    },
    methods: {
      async _init_page(){
        this.labels = JSON.parse( localStorage.getItem('labels')) || [];
      },
      _add_label(){
        this.labels.push( { name :'' })
      },
      _del_label(index){
        this.labels.splice(index,1)
      },
      _save_label(){

        let newArrays = Arrays.filter(this.labels,(item)=>{ return !!item.text });
        if(newArrays.length == 0 ){
          this.$toast({duration:1500,message:'请填写标签！'})
        }else{
          this.$dialog.confirm({
            title:'信息确认',
            message:'是否保存这些标签?'
          }).then(()=>{
            localStorage.setItem('labels',JSON.stringify(newArrays));
            setTimeout(()=>{ this.$router.go(-1) },1000) ;
            this.$toast({duration:1500,message:'保存成功！'})
          }).catch(()=>{
          })
        }
      }

    },
    watch: {/*'': {handler(val, olval){}, deep: true ,immediate:true}  */},
    destroy(){
    }
  }
</script>
<template>
  <div class="vc-fluid vc-bg">

    <div class="vc-padding__lg" >
    <div class=" vc-margin--bm  vc-flex vc-items--center vc-content--between" v-for="(label,index) in labels">
      <div class="vp-input vc-flex--fit ">
        <input type="text"  placeholder="请输入标签" class="vp-input__inner" v-model="label['text']">
      </div>
      <div class="vp-icon__cancel vc-margin--lt" v-if="labels.length > 1" @click="_del_label(index)"></div>
    </div>
    <div class="vp-btn__submit vp-btn--theme" @click="_add_label ">添加标签</div>
  </div>


    <div class="vp-footer vp-footer--shadow">
      <div class="vc-flex vp-row" >
        <div  class=" vp-btn__simple vp-btn--white " @click="_save_label">保存</div>
      </div>
    </div>

  </div>

</template>
<style scoped></style>
