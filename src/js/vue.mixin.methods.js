import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'


Vue.mixin( {
  methods:{

    $request({ url ,type = 'POST' ,data ,responseType = 'json' ,headerContentType='application/x-www-form-urlencoded' , loading = false,interval=0 }){
      let load = null;
      if(loading){
        load = this.$loading({
          lock: true,
          text: '加载中...',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        interval = 300; // 如果需要加载动画，则延长返回时间，否则接口过快，出现页面闪烁
      }
      return new Promise((resolve,reject)=>{
        axios({
          url:url + '.do',
          baseURL:this.$configs['HTTP_REQUEST'] ,
          data:data,
          transformRequest: [function (request) {
            request = qs.stringify(request);
            return request
          }],
          method:type,
          headers: {'Content-Type': headerContentType },
          timeout:10000
        }).then((reponse)=>{

          setTimeout(()=>{
            load && load.close();

            let data = reponse.data;
            if(data['code'] == '000'){
              resolve(data)
            }else if(data['code'] == '004' ){
              this.$confirm('登录失效, 是否重新登录?', '登录失效提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
              }).then(() => {
                sessionStorage.setItem('isLogin',false );
                sessionStorage.setItem('redirect',this.$route.fullPath);
                setTimeout(()=>{
                  this.$router.push({ name :'AppLogin'})
                },500)
                this.$router.push({ name :'AppLogin'})
              }).catch(() => {});
            }else if (data['code'] == '005'){
              this.$confirm('没有权限?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
              }).then(() => {
                sessionStorage.setItem('isLogin',false );
                sessionStorage.setItem('redirect',this.$route.fullPath);
                setTimeout(()=>{
                  this.$router.push({ name :'AppLogin'})
                },500)
              }).catch(() => {});
            }else{
              reject(data);
            }
          },interval)

        },(data)=>{
          load &&  load.close();
          this.$message({
            message: '请求失败，请检查网络',
            type: 'error'
          });

        }).catch( (error)=> {
          load &&  load.close();
          this.$message({
            message: '请求异常',
            type: 'error'
          });
          console.error(error)
        })
      })
    },
    // 设置图片的高宽，通过图片的最小边占满盒子
    _pub_img_load(e){
      let  parentNode = e.target.parentNode || e.target.parentElement ;
      let imgBoxWidth = parentNode.offsetWidth;
      let imgBoxHeight = parentNode.offsetHeight;
      let imgHeight = e.target.height;
      let imgWidth = e.target.width;
      let imgBoxProp = imgBoxWidth / imgBoxHeight;
      let imgProp = imgWidth / imgHeight;
      if(imgProp >= imgBoxProp ){
        e.target.style.height = imgBoxHeight + 'px';
      }else{
        e.target.style.width = imgBoxWidth + 'px';
      }
    },
    // 设置页面滚动
    _pub_scroll_container(container,scrollbar){
      let box = container || '.swiper-container';
      this.$nextTick(() => {
        let that = this;
        // 使用swiper进行页面滑动时，一定注意要给 swiper-container  设置一个高度
        let swipe = new Swiper( box , {
          direction: 'vertical',
          slidesPerView: 'auto',//不定宽 或 高
          freeMode: true,
          centeredSlides: false,
          autoHeight:'auto',
          scrollbar: {
            el: scrollbar ,
          },
          mousewheel: true,
          on:{
            'slideChange':function(e){
              //alert(this.activeIndex)
              //that.swiper.index = this.activeIndex + 1
            }
          }
        } );
      });
    },
  }
});

