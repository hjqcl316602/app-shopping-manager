<script type="text/ecmascript-6">
  //import Header  from './components/header.vue'
  //import basic  from '../Mixin/basic'\
   import { VaCropper }  from './component'
  //import manager  from './mixin/manager'
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

    },
    mounted() {
      this._init_page()
    },
    activated() {
    },
    props: [],
    data() {
      return {
        selectedOptions:[],
        options: [
          {
            value: 'zhinan',
            label: '指南',
            children: [{
              value: 'shejiyuanze',
              label: '设计原则',
              children: [{
                value: 'yizhi',
                label: '一致'
              }, {
                value: 'fankui',
                label: '反馈'
              }, {
                value: 'xiaolv',
                label: '效率'
              }, {
                value: 'kekong',
                label: '可控'
              }]
            }, {
              value: 'daohang',
              label: '导航',
              children: [{
                value: 'cexiangdaohang',
                label: '侧向导航'
              }, {
                value: 'dingbudaohang',
                label: '顶部导航'
              }]
            }]
          }, {
            value: 'zujian',
            label: '组件',
            children: [{
              value: 'basic',
              label: 'Basic',
              children: [{
                value: 'layout',
                label: 'Layout 布局'
              }, {
                value: 'color',
                label: 'Color 色彩'
              }, {
                value: 'typography',
                label: 'Typography 字体'
              }, {
                value: 'icon',
                label: 'Icon 图标'
              }, {
                value: 'button',
                label: 'Button 按钮'
              }]
            }, {
              value: 'form',
              label: 'Form',
              children: [{
                value: 'radio',
                label: 'Radio 单选框'
              }, {
                value: 'checkbox',
                label: 'Checkbox 多选框'
              }, {
                value: 'input',
                label: 'Input 输入框'
              }, {
                value: 'input-number',
                label: 'InputNumber 计数器'
              }, {
                value: 'select',
                label: 'Select 选择器'
              }, {
                value: 'cascader',
                label: 'Cascader 级联选择器'
              }, {
                value: 'switch',
                label: 'Switch 开关'
              }, {
                value: 'slider',
                label: 'Slider 滑块'
              }, {
                value: 'time-picker',
                label: 'TimePicker 时间选择器'
              }, {
                value: 'date-picker',
                label: 'DatePicker 日期选择器'
              }, {
                value: 'datetime-picker',
                label: 'DateTimePicker 日期时间选择器'
              }, {
                value: 'upload',
                label: 'Upload 上传'
              }, {
                value: 'rate',
                label: 'Rate 评分'
              }, {
                value: 'form',
                label: 'Form 表单'
              }]
            }, {
              value: 'data',
              label: 'Data',
              children: [{
                value: 'table',
                label: 'Table 表格'
              }, {
                value: 'tag',
                label: 'Tag 标签'
              }, {
                value: 'progress',
                label: 'Progress 进度条'
              }, {
                value: 'tree',
                label: 'Tree 树形控件'
              }, {
                value: 'pagination',
                label: 'Pagination 分页'
              }, {
                value: 'badge',
                label: 'Badge 标记'
              }]
            }, {
              value: 'notice',
              label: 'Notice',
              children: [{
                value: 'alert',
                label: 'Alert 警告'
              }, {
                value: 'loading',
                label: 'Loading 加载'
              }, {
                value: 'message',
                label: 'Message 消息提示'
              }, {
                value: 'message-box',
                label: 'MessageBox 弹框'
              }, {
                value: 'notification',
                label: 'Notification 通知'
              }]
            }, {
              value: 'navigation',
              label: 'Navigation',
              children: [{
                value: 'menu',
                label: 'NavMenu 导航菜单'
              }, {
                value: 'tabs',
                label: 'Tabs 标签页'
              }, {
                value: 'breadcrumb',
                label: 'Breadcrumb 面包屑'
              }, {
                value: 'dropdown',
                label: 'Dropdown 下拉菜单'
              }, {
                value: 'steps',
                label: 'Steps 步骤条'
              }]
            }, {
              value: 'others',
              label: 'Others',
              children: [{
                value: 'dialog',
                label: 'Dialog 对话框'
              }, {
                value: 'tooltip',
                label: 'Tooltip 文字提示'
              }, {
                value: 'popover',
                label: 'Popover 弹出框'
              }, {
                value: 'card',
                label: 'Card 卡片'
              }, {
                value: 'carousel',
                label: 'Carousel 走马灯'
              }, {
                value: 'collapse',
                label: 'Collapse 折叠面板'
              }]
            }]
          }, {
            value: 'ziyuan',
            label: '资源',
            children: [{
              value: 'axure',
              label: 'Axure Components'
            }, {
              value: 'sketch',
              label: 'Sketch Templates'
            }, {
              value: 'jiaohu',
              label: '组件交互文档'
            }]
          }],
        option2: [
          {
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        imageUrl:'',
        checkList:[],
        editor:null,
        CropperOption: {
          img: '',
          outputSize:1, //剪切后的图片质量（0.1-1）
          full: false,//输出原图比例截图 props名full
          outputType: 'png',
          canMove: true,
          original: false,
          canMoveBox: false,
          autoCrop: true,
          autoCropWidth: 320,
          autoCropHeight: 180,
          fixedBox: true
        },
        visible2:false
      }
    },
    methods: {
      async _init_page() {
        this.$nextTick(()=>{

        })
      },
      handleChange(){},
      handleAvatarSuccess(data){
        console.log(data)
      },
      beforeAvatarUpload(){},
      _img_cropper_show(){
        //this.$refs['croppers'].show()
      },
      _change_file(e){
        let file = e.target.files[0];
        let img = Images.getBlob(file);
        this.CropperOption.img = img ;
        this.visible2 = true
      }

    },
    watch: {/*'': {handler(val, olval){}, deep: true ,immediate:true}  */},
    destroy() {
    }
  }
</script>
<template>
  <div>
    <input type="file" @change="_change_file">
      <div class="vp-popover" v-if="visible2">
        <VueCropper
          ref="cropper"
          :img="CropperOption.img"
          :outputSize="CropperOption.size"
          :outputType="CropperOption.outputType"
          :info="true"
          :full="CropperOption.full"
          :canMove="CropperOption.canMove"
          :canMoveBox="CropperOption.canMoveBox"
          :original="CropperOption.original"
          :autoCrop="CropperOption.autoCrop"
          :autoCropWidth="CropperOption.autoCropWidth"
          :autoCropHeight="CropperOption.autoCropHeight"
          :fixedBox="CropperOption.fixedBox"
          @realTime="realTime"
          @imgLoad="imgLoad"
        ></VueCropper>
        <div class="vc-pos--ae vc-pos--lb">
          <div class=" ">
            <el-button type="primary" >确定</el-button>
            <el-button type="primary" @click.native="visible2 = false ">取消</el-button>
          </div>
        </div>
      </div>

    <div class="vc-text--bold vc-text--lg">商品信息</div>
    <div class="vc-margin__lg--tp">
      <div class="vc-flex vc-margin__lg--bm">
        <div  style="width: 100px" class="vc-flex vc-content--end vc-items--center vc-padding--rt">商品类型</div>

        <div class="vc-flex--fit">
          <el-cascader
            :options="options"
            v-model="selectedOptions"
            @change="handleChange"  >
          </el-cascader>
        </div>

      </div>

      <div class="vc-flex vc-margin__lg--bm">
        <div  style="width: 100px" class="vc-flex vc-content--end vc-items--center vc-padding--rt">计量单位</div>

        <div class="vc-flex--fit">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in option2"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>

      </div>

      <div class="vc-flex vc-margin__lg--bm">
        <div  style="width: 100px" class="vc-flex vc-content--end vc-items--center vc-padding--rt">商品名称</div>

        <div class="vc-flex--fit">
          <el-input   placeholder="请输入商品名称"></el-input>
        </div>

      </div>

      <div class="vc-flex vc-margin__lg--bm">
        <div  style="width: 100px" class="vc-flex vc-content--end vc-items--center vc-padding--rt">关键字</div>

        <div class="vc-flex--fit">
          <el-input
            type="textarea"
            :rows="3"
            placeholder="请输入内容" >
          </el-input>
        </div>

      </div>

      <div class="vc-flex vc-margin__lg--bm">
        <div  style="width: 100px" class="vc-flex vc-content--end vc-items--center vc-padding--rt">商品规格</div>

        <div class="vc-flex--fit">
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="复选框 A"></el-checkbox>
            <el-checkbox label="复选框 B"></el-checkbox>
            <el-checkbox label="复选框 C"></el-checkbox>
          </el-checkbox-group>
        </div>

      </div>

      <div class="vc-flex vc-margin__lg--bm">
        <div  style="width: 100px" class="vc-flex vc-content--end vc-items--center vc-padding--rt">当前规格</div>
        <div class="vc-flex--fit ">
          <div class="vc-table">
            <div class="vc-table--tr">
              <div class="vc-table--td">库存</div>
              <div class="vc-table--td">成本价</div>
              <div class="vc-table--td">销售价</div>
              <div class="vc-table--td">操作</div>
            </div>
            <div class="vc-table--tr">
              <div class="vc-table--td">
                <el-input   placeholder = "请输入库存" type="number"></el-input>
              </div>
              <div class="vc-table--td">
                <el-input   placeholder = "请输入库存" type="number"></el-input>
              </div>
              <div class="vc-table--td">
                <el-input   placeholder = "请输入库存" type="number"></el-input>
              </div>
              <div class="vc-table--td">
                <el-button type="" @click.native="_is_login">删除</el-button>
              </div>
            </div>
            <div class="vc-table--tr">
              <div class="vc-table--td">
                <el-input   placeholder = "请输入库存" type="number"></el-input>
              </div>
              <div class="vc-table--td">
                <el-input   placeholder = "请输入库存" type="number"></el-input>
              </div>
              <div class="vc-table--td">
                <el-input   placeholder = "请输入库存" type="number"></el-input>
              </div>
              <div class="vc-table--td">
                <el-button type="" @click.native="_is_login">删除</el-button>
              </div>
            </div>
            <div class="vc-table--tr">
              <div class="vc-table--td">
                <el-input   placeholder = "请输入库存" type="number"></el-input>
              </div>
              <div class="vc-table--td">
                <el-input   placeholder = "请输入库存" type="number"></el-input>
              </div>
              <div class="vc-table--td">
                <el-input   placeholder = "请输入库存" type="number"></el-input>
              </div>
              <div class="vc-table--td">
                <el-button type="" @click.native="_is_login">删除</el-button>
              </div>
            </div>
          </div>
          <div class="  vc-text--center">
            <div class="vc-text--theme vc-cursor">+添加规格</div>
          </div>
        </div>

      </div>

      <div class="vc-flex vc-margin__lg--bm">
        <div  style="width: 100px" class="vc-flex vc-content--end vc-items--center vc-padding--rt">商品主图</div>
        <div class="vc-flex--fit">
          <el-upload
            class="avatar-uploader"
            action="http://dev.bstchain.com/bus/res/upload/image.do"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>

      </div>

      <div class="vc-flex vc-margin__lg--bm">
        <div  style="width: 100px" class="vc-flex vc-content--end vc-items--center vc-padding--rt">商品附图</div>
        <div class="vc-flex--fit">
          <el-upload
            :multiple="true"
            class="avatar-uploader"
            action="http://dev.bstchain.com/bus/res/upload/image.do"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>

      </div>

      <div class="vc-flex vc-margin__lg--bm">
        <div  style="width: 100px" class="vc-flex vc-content--end vc-items--center vc-padding--rt">商品附图</div>
        <div class="vc-flex--fit">
          <textarea id="textarea">Hello, World!</textarea>
        </div>
      </div>

      <div class="vc-flex vc-margin__lg--bm">
        <div  style="width: 100px" class="vc-flex vc-content--end vc-items--center vc-padding--rt"> </div>
        <div class="vc-flex--fit vc-flex--center">
          <el-button type="primary" style="width: 200px;" @click.native="_img_cropper_show">添加商品</el-button>
        </div>
      </div>

    </div>
  </div>
</template>
<style scoped></style>
