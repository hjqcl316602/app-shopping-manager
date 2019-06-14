<script type="text/ecmascript-6">
  //import Header  from './components/header.vue'
  //import basic  from '../Mixin/basic'\
  //import { VaPopupRadio }  from './component'
  //import manager  from './mixin/manager'
  export default {
    name: "",
    components: {},
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
    computed:{
      menus(){
        let menus = this.$store.state.basic['menus'];
        return menus;
      },
      userMessage(){
        return this.$store.state.user['userMessage']
      }
    },
    data() {
      return {
        active:true
      }
    },
    methods: {
      async _init_page() {

      },
      _open_nav(index){
          this.$store.commit('nav_open',index)
      },
      handleClose(){

      }

    },
    watch: {/*'': {handler(val, olval){}, deep: true ,immediate:true}  */},
    destroy() {
    }
  }
</script>
<template>
<div class="vi-main">
  <div class="vi-main--header vc-flex--center">欢迎您，{{ userMessage['userName']  }}</div>
  <div class="vi-main--center">
    <div class="vi-main--left">
      <div class="vi-nav">
        <div class="vi-nav__item" v-for="(item,index) in menus"  :class="{'active':item.open }" >
          <div class="vi-nav__item--title" @click="_open_nav(index)" >
            <span class="text">{{ item['name'] }}</span><i class="icon iconfont icon-iconfontadd "></i>
          </div>
          <div class="vi-nav-sub">
            <router-link tag="div" :to="{ name : child['pathName']}" :key="i" class="vi-nav-sub__item" :class="{'active':child['active']}" v-for="(child,i) in item.child" >{{ child['name'] }}</router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="vi-main--content">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
  </div>
</div>
</template>
<style scoped></style>
