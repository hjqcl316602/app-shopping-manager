<script type="text/ecmascript-6">
        import Navbar  from './component/page.navbar.vue'

        //import basic  from '../Mixin/basic'
        export default {
                name: "MainIndex",
                components: { Navbar },
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
                  let qrcode = new QRCode('qrcode', {
                    width: 100,     // 设置宽度
                    height: 100,   // 设置高度
                    text: 'http://www.baidu.com',
                  });
                  console.log(qrcode)
                },
                activated(){
                },
                props: [],
                data(){
                        return {}
                },
                methods: {
                        async _init_page(){

                        }

                },
                watch: {/*'': {handler(val, olval){}, deep: true ,immediate:true}  */},
                destroy(){
                }
        }
</script>
<template>
  <div class="vi-index vc-padding__xl-x--bm">
    <div id="qrcode" style="height:100px;width: 100px;"></div>
    <div class="">
      <template>
        <van-swipe :autoplay="0" >
          <van-swipe-item   >
            <div class="vp-ratio">
              <div class="vp-ratio__outer" data-ratio="375:147">
                <div class="vp-ratio__inner">
                  <div class="vp-img__inner">
                    <img src="../img/banner.jpg" alt="" class="vp-img--max"  >
                    <img src="../img/test1.jpg" alt="" class="vp-img--error">
                  </div>
                </div>
              </div>
            </div>
          </van-swipe-item>
          <van-swipe-item   >
            <div class="vp-ratio">
              <div class="vp-ratio__outer" data-ratio="375:147">
                <div class="vp-ratio__inner">
                  <div class="vp-img__inner">
                    <img src="../img/banner.jpg" alt="" class="vp-img--max"  >
                    <img src="../img/test1.jpg" alt="" class="vp-img--error">
                  </div>
                </div>
              </div>
            </div>
          </van-swipe-item>
        </van-swipe>
      </template>
      <template>
        <div class="vc-bg vc-padding__lg ">
          <div class="vc-flex vc-content--between vc-padding--ud">
            <router-link tag="div" :to="{ name : 'SubScore'}"  >
              <div class="vp-box">
                <div class="vp-img__inner">
                  <img src="../img/icon-modal-cj.png" alt="" class="vp-img--max"  >
                </div>
              </div>
              <div class="vc-text--light vc-text--center vc-padding__sm--tp">成绩</div>
            </router-link>
            <router-link tag="div" :to="{ name : 'SubInfoStudent'}" >
              <div class="vp-box">
                <div class="vp-img__inner">
                  <img src="../img/icon-modal-hd.png" alt="" class="vp-img--max"  >
                </div>
              </div>
              <div class="vc-text--light vc-text--center vc-padding__sm--tp">互动</div>
            </router-link>
            <router-link tag="div" :to="{ name : 'SubInfoClass'}" >
              <div class="vp-box">
                <div class="vp-img__inner">
                  <img src="../img/icon-modal-xc.png" alt="" class="vp-img--max"  >
                </div>
              </div>
              <div class="vc-text--light vc-text--center vc-padding__sm--tp">相册</div>
            </router-link>
            <router-link tag="div" :to="{ name : 'SubInfoTeacher'}" >
              <div class="vp-box">
                <div class="vp-img__inner">
                  <img src="../img/icon-modal-zy.png" alt="" class="vp-img--max"  >
                </div>
              </div>
              <div class="vc-text--light vc-text--center vc-padding__sm--tp">资源</div>
            </router-link>
          </div>
          <div class="vc-flex vc-content--between vc-padding--ud">
            <router-link tag="div" :to="{ name : 'SubAtten'}" >
              <div class="vp-box">
                <div class="vp-img__inner">
                  <img src="../img/icon-modal-kq.png" alt="" class="vp-img--max"  >
                </div>
              </div>
              <div class="vc-text--light vc-text--center vc-padding__sm--tp">考勤</div>
            </router-link>
            <router-link tag="div" :to="{ name : 'SubManager'}" >
              <div class="vp-box">
                <div class="vp-img__inner">
                  <img src="../img/icon-modal-kj.png" alt="" class="vp-img--max"  >
                </div>
              </div>
              <div class="vc-text--light vc-text--center vc-padding__sm--tp">课纪</div>
            </router-link>
            <router-link tag="div" :to="{ name : 'SubTask'}" >
              <div class="vp-box">
                <div class="vp-img__inner">
                  <img src="../img/icon-modal-zyy.png" alt="" class="vp-img--max"  >
                </div>
              </div>
              <div class="vc-text--light vc-text--center vc-padding__sm--tp">作业</div>
            </router-link>
            <router-link tag="div" :to="{ name : 'SubTask'}" >
              <div class="vp-box">
                <div class="vp-img__inner">
                  <img src="../img/icon-modal-sf.png" alt="" class="vp-img--max"  >
                </div>
              </div>
              <div class="vc-text--light vc-text--center vc-padding__sm--tp">收费</div>
            </router-link>
          </div>
        </div>
      </template>
      <template>
        <div class="vc-bg vc-padding__lg vc-margin--tp">
          <div class="vc-flex vc-content--between vc-padding--bm">
            <div class="vc-text--bold vc-text--xl ">最新通知</div>
            <div class="vp-icon__outer">
              <span class="vc-text--theme vc-text--bold  ">查看详情</span>
              <i class="vc-text--theme vc-text--bold iconfont icon-iconfontjiantou2"></i>
            </div>
          </div>
          <div>
            <div class="vc-flex vc-padding--tp">
              <div class="vp-icon__info vc-flex--center vc-text--white vc-text--sm">活动</div>
              <div class="vc-text--light vc-text--sm vc-flex--fit vc-padding--lt vc-text--baseline--md">班级举办春游活动，各位家长要记得给孩子准备行李哦各位家长要记得给孩子准备行李哦各位家长要记得给孩子准备行李哦各位家长要记得给孩子准备行李哦</div>
            </div>
            <div class="vc-flex vc-padding--tp">
              <div class="vp-icon__warning vc-flex--center vc-text--white vc-text--sm">表扬</div>
              <div class="vc-text--light vc-text--sm vc-flex--fit vc-padding--lt vc-text--baseline--md">班级举办春游活动，各位家长要记得给孩子准备行李哦各位家长要记得给孩子准备行李哦各位家长要记得给孩子准备行李哦各位家长要记得给孩子准备行李哦</div>
            </div>
            <div class="vc-flex vc-padding--tp">
              <div class="vp-icon__danger vc-flex--center vc-text--white vc-text--sm">批评</div>
              <div class="vc-text--light vc-text--sm vc-flex--fit vc-padding--lt vc-text--baseline--md">班级举办春游活动，各位家长要记得给孩子准备行李哦各位家长要记得给孩子准备行李哦各位家长要记得给孩子准备行李哦各位家长要记得给孩子准备行李哦</div>
            </div>
          </div>
        </div>
      </template>
    </div>

    <Navbar active="index"></Navbar>
  </div>

</template>
<style scoped></style>
