<script type="text/ecmascript-6">
  //import Header  from './components/header.vue'
  //import basic  from '../Mixin/basic'\
  //import { VaPopupRadio }  from './component'
  import good  from './mixin/good'
  export default {
    name: "",
    components: {},
    mixins: [ good ],
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
        params:{
          pageNum:1,
          pageSize:20,
          condition: '',
          status:''
        },
        options: [{
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
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
      async _init_page() {
        this.$get_good_list(this.params)
      },
      _page_change(page){
        console.log(page)
        this.params.pageNum = page;
        //this.$get_good_list( this.params )
      }

    },
    watch: {/*'': {handler(val, olval){}, deep: true ,immediate:true}  */},
    destroy() {
    }
  }
</script>
<template>
  <div>
    <div class="vc-text--bold vc-text--lg">商品信息</div>
    <div class="vc-row vc-margin__lg--tp" data-gutter="20">
      <div class="vc-col--06  ">
        <el-input v-model="params.search" placeholder="请输入商品编号或名称"></el-input>
      </div>
      <div class="vc-col--06">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="vc-col--offset-06 vc-col--03 el-cover">
        <el-button type="primary" @click.native="_is_login">查询</el-button>
      </div>
      <router-link tag="div" :to="{ name :'AppMainGoodEdit',params:{ id: 0 }}" class="vc-col--03 el-cover">
        <el-button type="primary" >添加商品</el-button>
      </router-link>
    </div>
    <div class="vc-margin__lg--tp">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>
    </div>
    <div class="vc-padding__lg vc-text--center">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="50"
        @current-change="_page_change"
      >
      </el-pagination>
    </div>
  </div>
</template>
<style scoped></style>
