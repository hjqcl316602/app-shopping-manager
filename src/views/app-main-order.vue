<script type="text/ecmascript-6">
  //import Header  from './components/header.vue'
  //import basic  from '../Mixin/basic'\
  //import { VaPopupRadio }  from './component'
  import order  from './mixin/order'
  export default {
    name: "",
    components: {},
    mixins: [ order ],
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
          pageSize:10,
          orderStatus:'',
          detailStatus:'',
          condition: '',
          startDate:'',
          endDate:'',
          date:'',
          status:'0'
        },

        options: {
          status:[
             {
              value: '0',
              label: '待发货'
            }, {
              value: '1',
              label: '已发货'
            }, {
              value: '2',
              label: '已收货'
            }, {
              value: '3',
              label: '待付款'
            },

          ]
        },

        order:{
          list:[],
          count:0
        },
        orderDetail:{
          orderDetail:[],
          orderMaster:{},
          logisticList:[]
        },
        dialog:{
          show:false,
          show2:false // 发货
        },
        delivery:[ { name : "" ,sn:'' } ]
      }
    },
    methods: {
      async _init_page() {
        this._get_order_list()
      },
      _page_change(page){
        this.params.pageNum = page;
        this._get_order_list( this.params )
      },
      _popup_before_close(){

      },
      _operate(item,index){
        let params = {
          orderSn:item['sn'],
          businessOrderNum:item['businessOrderNum'],
          detailStatus:item['detailStatus']
        };
        this.$get_order_detail(params).then((response)=>{

          this.orderDetail  = response['data'];
          if( item['orderStatus'] == 1 && item['detailStatus'] == 0){
            this.popups[0] = true
          }else {
            this.popups[1] = true
          }


        });
      },
      _get_order_list(){
        let params = {
          pageNum:'',
          pageSize:'',
          orderStatus:'',
          detailStatus:'',
          condition: '',
          startDate:'',
          endDate:'',
        };
        params = Objects.copy(params,this.params);
        this.$get_order_list(params).then((response)=>{
          this.order.list = response['data']['orderList'];
          this.order.count = response['data']['totalCount'];
        })
      },
      _add_delivery(){
        this.delivery.push({ name :"" ,sn: ""})
      },
      _del_delivery(index){
        (this.delivery.length > 1 )  && this.delivery.splice(index,1)
      },
      _save_delivery(){
        this.$confirm('请仔细检查快递单号，保存后不能进行更改，确认保存?', '保存提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {

        }).catch(() => {

        });
      }
    },
    watch: {
      ['params.date'](val,oldval){
        this.params.startDate = val  ? Dates.format(val[0],'yyyy-MM-dd') :'';
        this.params.endDate = val  ? Dates.format(val[1],'yyyy-MM-dd') :'';
      },
      ['params.status']:{
        handler(val,oldval){
           if(val == '0'){   // 待收货
              this.params.orderStatus = '1';
              this.params.detailStatus = '0';
           }else if( val == '1'){ // 已发货
             this.params.orderStatus = '1';
             this.params.detailStatus = '1';
           }else if( val == '2'){ // 已收货
             this.params.orderStatus = '1';
             this.params.detailStatus = '2';
           }else if( val == '3'){ // 待付款
             this.params.orderStatus = '0';
             this.params.detailStatus = '';
           }
        },
        immediate:true
      },
    },
    destroy() {
    }
  }
</script>
<template>
  <div>
    <el-dialog
      title="订单详情"
      :visible.sync="popups[0]"
      width="70%" >
      <div>
        <div class="vc-row vc-margin--bm " v-for="(item ,index) in  delivery">
          <div class="vc-col--10 vc-flex">
            <div  style="width: 100px" class="vc-flex vc-content--end vc-items--center vc-padding--rt">快递公司：</div>

            <div class="vc-flex--fit">
              <el-select v-model=" item['name']" placeholder="请选择快递公司">
                <el-option
                  v-for="item in orderDetail.logisticList"
                  :key="item.value"
                  :label="item.name"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </div>
          <div class="vc-col--10 vc-flex">
            <div  style="width: 100px" class="vc-flex vc-content--end vc-items--center vc-padding--rt">快递单号：</div>

            <div class="vc-flex--fit">
              <el-input   placeholder="请输入快递单号" v-model="item['sn']"></el-input>
            </div>
          </div>

          <div class="vc-col--04 vc-text--right" v-if="delivery.length > 1 ">
            <el-button type="" @click.native="_del_delivery(index)">删除</el-button>
          </div>

        </div>
        <div class="vc-row vc-margin__lg--bm ">
          <div class="vc-col--offset-10 vc-col--04 el-cover">
            <el-button type="primary" @click.native="_add_delivery">添加快递单</el-button>
          </div>
        </div>
        <div class="vc-margin__lg--bm">
          <table class="vp-table">
            <colgroup>
              <col  width="100">
            </colgroup>
            <tr>
              <td><span class="vc-text--light vc-text--bold ">商品编号</span></td>
              <td><span class="vc-text--light vc-text--bold ">商品名称</span></td>
              <td><span class="vc-text--light vc-text--bold ">商品规格</span></td>
              <td><span class="vc-text--light vc-text--bold ">单价</span></td>
              <td><span class="vc-text--light vc-text--bold ">数量</span></td>
              <td><span class="vc-text--light vc-text--bold ">总价</span></td>
            </tr>
            <tr v-for="(item,index) in orderDetail.orderDetail">
              <td><span class="vc-text--light  ">{{ item['id'] }}</span></td>
              <td><span class="vc-text--light  ">{{item['name']  }}</span></td>
              <td><span class="vc-text--light  ">{{ item['specsName'] }}</span></td>
              <td><span class="vc-text--light  ">{{ item['price'] | str_money}}</span></td>
              <td><span class="vc-text--light  ">{{ item['num'] }}</span></td>
              <td><span class="vc-text--light  ">{{ item['totalAmount'] | str_money }}</span></td>
            </tr>

          </table>
        </div>

        <div >
          <div class="vc-row vc-margin--bm">
            <div class="vc-col--08 vc-flex">
              <div  style="width: 100px" class=" vc-padding--rt vc-text--right vc-text--light">订单编号：</div>

              <div class="vc-flex--fit">{{ orderDetail.orderMaster['sn']}}</div>
            </div>
            <div class="vc-col--08 vc-flex">
              <div  style="width: 100px" class=" vc-padding--rt vc-text--right vc-text--light">订单日期：</div>

              <div class="vc-flex--fit">{{ orderDetail.orderMaster['created'] | date_format }}</div>
            </div>
            <div class="vc-col--08 vc-flex">
              <div  style="width: 100px" class=" vc-padding--rt vc-text--right vc-text--light">订单状态：</div>

              <div class="vc-flex--fit">{{ orderDetail.orderMaster['detailStatusStr']}}</div>
            </div>


          </div>
          <div class="vc-row vc-margin--bm">
            <div class="vc-col--08 vc-flex">
              <div  style="width: 100px" class=" vc-padding--rt vc-text--right vc-text--light">客户名称：</div>

              <div class="vc-flex--fit">{{  orderDetail.orderMaster['name']}}</div>
            </div>
            <div class="vc-col--08 vc-flex">
              <div  style="width: 100px" class=" vc-padding--rt vc-text--right vc-text--light">客户电话：</div>

              <div class="vc-flex--fit">{{  orderDetail.orderMaster['mobile']}}</div>
            </div>
          </div>

          <div class="vc-row vc-margin--bm">
            <div class="vc-col--24 vc-flex">
              <div  style="width: 100px" class=" vc-padding--rt vc-text--right vc-text--light">收货地址：</div>

              <div class="vc-flex--fit">{{  orderDetail.orderMaster['address']}}</div>
            </div>
          </div>

          <div class="vc-row vc-margin--bm">
            <div class="vc-col--08 vc-flex">
              <div  style="width: 100px" class=" vc-padding--rt vc-text--right vc-text--light">订单总金额：</div>

              <div class="vc-flex--fit">{{  orderDetail.orderMaster['totalAmount'] | str_money }}</div>
            </div>

            <div class="vc-col--08 vc-flex">
              <div  style="width: 100px" class=" vc-padding--rt vc-text--right vc-text--light">支付总金额：</div>

              <div class="vc-flex--fit">{{  orderDetail.orderMaster['payAmount'] | str_money }}</div>
            </div>
            <div class="vc-col--08 vc-flex">
              <div  style="width: 100px" class=" vc-padding--rt vc-text--right vc-text--light">支付方式：</div>

              <div class="vc-flex--fit">{{  orderDetail.orderMaster['paymentMethod']}}</div>
            </div>

          </div>

          <div class="vc-row vc-margin--bm">
            <div class="vc-col--08 vc-flex">
              <div  style="width: 100px" class=" vc-padding--rt vc-text--right vc-text--light">运费：</div>

              <div class="vc-flex--fit">{{  orderDetail.orderMaster['logisticsAmount']  | str_money }}</div>
            </div>
            <div class="vc-col--08 vc-flex">
              <div  style="width: 100px" class=" vc-padding--rt vc-text--right vc-text--light">折扣：</div>

              <div class="vc-flex--fit">{{  orderDetail.orderMaster['couponDiscount']  | str_money }}</div>
            </div>
          </div>
        </div>

      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="popups[0] = false">取 消</el-button>
        <el-button type="primary" @click="_save_delivery">发 货</el-button>
      </span>
    </el-dialog>

    <el-dialog
      title="订单详情"
      :visible.sync="popups[1]"
      width="70%" >
      <div>

        <div class="vc-row vc-margin--bm " v-for="(item,index) in orderDetail.logisticList">
          <div class="vc-col--02 vc-flex">



              <span>快递序号：{{ index + 1 }}</span>


          </div>
          <div class="vc-col--08 vc-flex">
            <div  style="width: 100px" class="vc-flex vc-content--end vc-items--center vc-padding--rt">快递单号：</div>

            <div class="vc-flex--fit">
              <span>{{ item['logisticsNo']}}</span>
            </div>

          </div>
          <div class="vc-col--08 vc-flex">
            <div  style="width: 100px" class="vc-flex vc-content--end vc-items--center vc-padding--rt">发货时间：</div>

            <div class="vc-flex--fit">
              <span>{{ item['created'] }}</span>
            </div>
          </div>
        </div>

        <div class="vc-margin__lg--ud vp-border">
          <table class="vp-table">
            <colgroup>
              <col  width="100">
            </colgroup>
            <tr>
              <td><span class="vc-text--light vc-text--bold ">商品编号</span></td>
              <td><span class="vc-text--light vc-text--bold ">商品名称</span></td>
              <td><span class="vc-text--light vc-text--bold ">商品规格</span></td>
              <td><span class="vc-text--light vc-text--bold ">单价</span></td>
              <td><span class="vc-text--light vc-text--bold ">数量</span></td>
              <td><span class="vc-text--light vc-text--bold ">总价</span></td>
            </tr>
            <tr v-for="(item,index) in orderDetail.orderDetail">
              <td><span class="vc-text--light  ">{{ item['id'] }}</span></td>
              <td><span class="vc-text--light  ">{{item['name']  }}</span></td>
              <td><span class="vc-text--light  ">{{ item['specsName'] }}</span></td>
              <td><span class="vc-text--light  ">{{ item['price'] | str_money}}</span></td>
              <td><span class="vc-text--light  ">{{ item['num'] }}</span></td>
              <td><span class="vc-text--light  ">{{ item['totalAmount'] | str_money }}</span></td>
            </tr>

          </table>
        </div>

        <div >
          <div class="vc-row vc-margin--bm">
            <div class="vc-col--08 vc-flex">
              <div  style="width: 100px" class=" vc-padding--rt vc-text--right vc-text--light">订单编号：</div>

              <div class="vc-flex--fit">{{ orderDetail.orderMaster['sn']}}</div>
            </div>
            <div class="vc-col--08 vc-flex">
              <div  style="width: 100px" class=" vc-padding--rt vc-text--right vc-text--light">订单日期：</div>

              <div class="vc-flex--fit">{{ orderDetail.orderMaster['created'] | date_format }}</div>
            </div>
            <div class="vc-col--08 vc-flex">
              <div  style="width: 100px" class=" vc-padding--rt vc-text--right vc-text--light">订单状态：</div>

              <div class="vc-flex--fit">{{ orderDetail.orderMaster['detailStatusStr']}}</div>
            </div>


          </div>
          <div class="vc-row vc-margin--bm">
            <div class="vc-col--08 vc-flex">
              <div  style="width: 100px" class=" vc-padding--rt vc-text--right vc-text--light">客户名称：</div>

              <div class="vc-flex--fit">{{  orderDetail.orderMaster['name']}}</div>
            </div>
            <div class="vc-col--08 vc-flex">
              <div  style="width: 100px" class=" vc-padding--rt vc-text--right vc-text--light">客户电话：</div>

              <div class="vc-flex--fit">{{  orderDetail.orderMaster['mobile']}}</div>
            </div>
          </div>

          <div class="vc-row vc-margin--bm">
            <div class="vc-col--24 vc-flex">
              <div  style="width: 100px" class=" vc-padding--rt vc-text--right vc-text--light">收货地址：</div>

              <div class="vc-flex--fit">{{  orderDetail.orderMaster['address']}}</div>
            </div>
          </div>

          <div class="vc-row vc-margin--bm">
            <div class="vc-col--08 vc-flex">
              <div  style="width: 100px" class=" vc-padding--rt vc-text--right vc-text--light">订单总金额：</div>

              <div class="vc-flex--fit">{{  orderDetail.orderMaster['totalAmount'] | str_money }}</div>
            </div>

            <div class="vc-col--08 vc-flex">
              <div  style="width: 100px" class=" vc-padding--rt vc-text--right vc-text--light">支付总金额：</div>

              <div class="vc-flex--fit">{{  orderDetail.orderMaster['payAmount'] | str_money }}</div>
            </div>
            <div class="vc-col--08 vc-flex">
              <div  style="width: 100px" class=" vc-padding--rt vc-text--right vc-text--light">支付方式：</div>

              <div class="vc-flex--fit">{{  orderDetail.orderMaster['paymentMethod']}}</div>
            </div>

          </div>

          <div class="vc-row vc-margin--bm">
            <div class="vc-col--08 vc-flex">
              <div  style="width: 100px" class=" vc-padding--rt vc-text--right vc-text--light">运费：</div>

              <div class="vc-flex--fit">{{  orderDetail.orderMaster['logisticsAmount']  | str_money }}</div>
            </div>
            <div class="vc-col--08 vc-flex">
              <div  style="width: 100px" class=" vc-padding--rt vc-text--right vc-text--light">折扣：</div>

              <div class="vc-flex--fit">{{  orderDetail.orderMaster['couponDiscount']  | str_money }}</div>
            </div>
          </div>
        </div>

      </div>

      <span slot="footer" class="dialog-footer">

        <el-button type="primary" @click="popups[1] = false">关 闭</el-button>
      </span>
    </el-dialog>


    <div class="vc-text--bold vc-text--lg">订单信息</div>
    <div class="vc-row vc-margin__lg--tp" data-gutter="20">
      <div class="vc-col--06">
        <el-input v-model="params.condition" placeholder="请输入订单编号或手机号码"></el-input>
      </div>
      <div class="vc-col--06">
        <el-select v-model="params.status" placeholder="请选择付款状态">
          <el-option
            v-for="item in options.status"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="vc-col--08">
        <el-date-picker
          v-model="params.date"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </div>
      <div class="vc-col--04 el-cover">
        <el-button type="primary" @click.native="_get_order_list">查询</el-button>
      </div>
    </div>
    <div class="vc-margin__lg--tp">
      <table class="vp-table">
        <colgroup>
          <col  width="100"><col width="150"><col width="200"><col width="150"><col  ><col  ><col  ><col  >
        </colgroup>
        <tr>
          <td><span class="vc-text--light vc-text--bold ">序号</span></td>
          <td><span class="vc-text--light vc-text--bold ">订单编号</span></td>
          <td><span class="vc-text--light vc-text--bold ">订单日期</span></td>
          <td><span class="vc-text--light vc-text--bold ">客户名称</span></td>
          <td><span class="vc-text--light vc-text--bold ">客户电话号码</span></td>
          <td><span class="vc-text--light vc-text--bold ">客户收货地址</span></td>
          <td><span class="vc-text--light vc-text--bold ">订单状态</span></td>
          <td><span class="vc-text--light vc-text--bold ">操作</span></td>
        </tr>
        <tr v-for="(item,index) in order.list">
          <td><span class="vc-text--light  ">{{(params.pageNum-1) * params.pageSize + index + 1   }}</span></td>
          <td><span class="vc-text--light  ">{{ item['sn'] }}</span></td>
          <td><span class="vc-text--light  ">{{item['created'] | date_format}}</span></td>
          <td><span class="vc-text--light  ">{{ item['name'] }}</span></td>
          <td><span class="vc-text--light  ">{{ item['mobile'] }}</span></td>
          <td><span class="vc-text--light  ">{{ item['address'] }}</span></td>
          <td><span class="vc-text--light  ">{{ item['orderStatusStr']}}</span></td>
          <td>
            <el-button type="text" v-if="item['detailStatus'] == 0 && item['orderStatus'] == 1 " @click.native="_operate(item,index)">发货</el-button>
            <el-button type="text" v-else  @click.native="_operate(item,index)">查看</el-button>
          </td>
        </tr>

      </table>
      <div class="vc-text--center vc-text--gray vc-padding__xl-x--ud" v-if="order.list.length == 0 ">暂无订单数据~</div>

    </div>
    <div class="vc-padding__lg vc-text--center" v-if=" order.count > 0 ">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="order.count"
        :page-size="params.pageSize"
        @current-change="_page_change"
      >
      </el-pagination>
    </div>
  </div>
</template>
<style scoped></style>
