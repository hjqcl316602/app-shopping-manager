<script type="text/ecmascript-6">
  //import Header  from './components/header.vue'
  //import basic  from '../Mixin/basic'\
  //import { VaPopupRadio }  from './component'
  // import manager  from './mixin/manager'
  import VueCropper from 'vue-cropper'
  export default {
    name: "",
    components: { VueCropper },
    mixins: [],
    beforeRouteEnter(to, from, next) {
      next(vm => {
      })
    },
    beforeRouteLeave(to, from, next) {
      next();
    },
    beforeRouteUpdate(to, from, next) {
      next();
    },
    beforeCreate() {
    },
    created() {
    },
    beforeMount() {
      this._init_page()
    },
    mounted() {

    },
    activated() {
    },
    props: {
      params:{
        type:Object,
        default:()=>{
          return {
            width:250,
            height:250
          }
        }
      },
      img:{
        type:String
      },
      successText:{
        type:String,
        default: '上传成功'
      }
    },
    data() {
      return {
        isShow:false,
        option:{
          outputSize:0.7,
          outputType:'png',
          fixed:false,
          fixedNumber:[1,1],
          autoCrop:true,
          canMoveBox:false,
          fixedBox:true,
          autoCropWidth: 200 ,
          autoCropHeight: 200
        },
      }
    },
    methods: {
      async _init_page() {

      },
      show(){
        this.isShow = true
      },
      hide(){
        this.isShow = false
      }

    },
    watch: {/*'': {handler(val, olval){}, deep: true ,immediate:true}  */},
    destroy() {
    }
  }
</script>
<template>
  <div class="">
    <div v-if="isShow">
      <vue-cropper
        ref="cropper"
        :img="img"
        :outputSize="option.outputSize"
        :outputType="option.outputType"
        :fixed="option.fixed"
        :fixedBox="option.fixedBox"
        :canMoveBox="option.canMoveBox"
        :autoCrop="option.autoCrop"
        :autoCropWidth="params.width"
        :autoCropHeight="params.height"
      ></vue-cropper>
    </div>

  </div>

</template>
<style scoped></style>
