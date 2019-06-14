<script type="text/ecmascript-6">
  //import Header  from './components/header.vue'
  //import basic  from '../Mixin/basic'\
  //import { VaPopupRadio }  from './component'
  import basic  from './mixin/basic'
  import user  from './mixin/user'
  export default {
    name: "",
    components: {},
    mixins: [ basic , user ],
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
      areaList(){
        let areaList = this.$store.state.basic['areaList'];
        console.log(areaList);
        return areaList ;
      },
      bankTypeList(){
        let bankTypeList = this.$store.state.basic['bankTypeList'];
        console.log(bankTypeList);
        return bankTypeList ;
      },
    },
    data() {
      return {
        params:{
          userId:'',
          sex:'1',
          companyName:'',
          companyContact:'',
          contactPhone:'',
          areaId:'',//"0"+","+address.provinceId+","+address.cityId+","+address.countyId,
          areaName:'',//address.provinceName+address.cityName+address.countyName,
          address:'',
          bankNumber:'',
          bankOwner:''
        },
        area:{
          province:[],
          city:[],
          county:[],
          value:[]
        },
        options: {
          area: [],
          bank:[
            { label:'中国银行',value:'11'}
          ]
        }
      }
    },
    methods: {
      async _init_page() {
        await  this.$get_area_list();
        this._init_area();
        await this.$get_bank_type_list();

        // 初始化用户基础信息
        let detail = await  this.$get_user_detail();

        let data = detail['data'];
        data['sex'] = data['sex'].toString();
        data['areaId'] = data['areaId'] ? data['areaId'].split(',').splice(1) : '';

        this.params = Objects.copy(this.params,detail['data']);

      },

      _save_user_info(){

        let valid = this._validation(this.params);
        if( valid == 'yes'){
          let areaId = this.params['areaId'].slice(0).join(',');

          let params = Objects.extend({},this.params);
          params['areaId'] = '0,' + areaId ;

          this.$update_user_detail(params)
        }else{
          this.$message({
            message: valid,
            type: 'error'
          });
        }

      },

      _validation(params){

        if(params.companyName == ''){
          return '公司名不能为空！'
        }else{
          if( !Valids.isCodeNoSpecial(params.companyName) ) {
            return '公司名格式错误，不包含特殊字符！'
          }
        }

        if(params.companyContact == ''){
          return '公司联系人姓名不能为空！'
        }else{
          if( !Valids.isCN(params.companyContact) ) {
            return '公司联系人姓名格式错误，只能是中文字符！'
          }
        }

        if(params.contactPhone == ''){
          return '公司联系人电话不能为空！'
        }else{
          if( !Valids.isMobile(params.contactPhone) ) {
            return '公司联系人电话格式错误！'
          }
        }

        if(params.areaId == ''){
          return '公司地址不能为空！'
        }

        if(params.address == ''){
          return '公司详细地址不能为空！'
        }else{
          if( !Valids.isCodeNoSpecial(params.address) ) {
            return '公司详细地址格式错误，不能包含特殊字符！'
          }
        }

        if(params.bankNumber == ''){
          return '公司银行账户不能为空！'
        }else{
          if( !Valids.isNumbers(params.bankNumber) ) {
            return '公司银行账户格式错误！'
          }
        }

        if(params.bankOwner == ''){
          return '银行卡户主不能为空！'
        }else{
          if( !Valids.isCN(params.bankOwner) ) {
            return '银行卡户主格式错误，只能是中文字符！'
          }
        }
        return 'yes'
      },

      // 地址数据的格式化
      object_format(obj,children=true){
        let arr = [];
        Object.keys(obj).forEach(key => {
          let newObj = { };
          if(children){
            newObj = {
              value:key,
              label:obj[key],
              children:[]
            };
          }else{
            newObj = {
              value:key,
              label:obj[key],
            };
          }
          arr.push(newObj)
        });
        return arr;
      },
      _init_area(){
        let province =this.areaList['0'];
        let new_province = this.object_format(province);
        new_province.forEach((item,i)=>{

          let value = item.value;
          let city = this.object_format(this.areaList['0,'+ value ]) ;
          item['children'] = city;
        });

        new_province.forEach(( item , i )=>{
          let city = item['children'];
          let provinceValue = item['value'];
          city.forEach((cityItem,cityIndex)=>{
            let cityValue = cityItem.value;
            let county  = this.object_format(this.areaList['0,'+ provinceValue +','+ cityValue  ],false ) ;
            cityItem['children'] = county ;
          })
        });

        this.options.area = new_province;

         console.log(new_province)
      },
      _change_cascader(value){
         this.params['areaName'] = value.target.defaultValue.replace(/\//g,'')
      }
    },
    watch: {/*'': {handler(val, olval){}, deep: true ,immediate:true}  */},
    destroy() {
    }
  }
</script>
<template>
  <div>
    <div class="vc-text--bold vc-text--lg ">基本信息</div>
    <div class="vc-margin__lg--ud">
      <span class="vc-text--bold ">设置身份信息</span><span class="vc-text--light">(请务必填写正确的本人身份信息，以便快速通过审核)</span>
    </div>
    <div class="vc-row ">
      <div class="vc-col--10">
        <div class="vc-flex vc-items--center vc-margin--bm">
          <div  style="width: 200px" class="vc-flex vc-content--end vc-items--center vc-padding--rt">性别：</div>

          <div class="vc-flex--fit">
            <el-radio v-model="params.sex" label="1">男</el-radio>
            <el-radio v-model="params.sex" label="2">女</el-radio>

          </div>
        </div>

        <div class="vc-flex vc-items--center vc-margin--bm">
          <div  style="width: 200px" class="vc-flex vc-content--end vc-items--center vc-padding--rt">公司名称：</div>

          <div class="vc-flex--fit">
            <el-input type="text"  placeholder="请输入公司名称" v-model="params.companyName"></el-input>
          </div>
        </div>

        <div class="vc-flex vc-items--center vc-margin--bm">
          <div  style="width: 200px" class="vc-flex vc-content--end vc-items--center vc-padding--rt">公司联系人姓名：</div>

          <div class="vc-flex--fit">
            <el-input type="text"  placeholder="请输入公司联系人姓名" v-model="params.companyContact"></el-input>
          </div>
        </div>

        <div class="vc-flex vc-items--center vc-margin--bm">
          <div  style="width: 200px" class="vc-flex vc-content--end vc-items--center vc-padding--rt">公司联系人电话：</div>

          <div class="vc-flex--fit">
            <el-input type="tel"  placeholder="请输入公司联系人电话" v-model="params.contactPhone"></el-input>
          </div>
        </div>

        <div class="vc-flex vc-items--center vc-margin--bm">
          <div  style="width: 200px" class="vc-flex vc-content--end vc-items--center vc-padding--rt">公司地址：</div>

          <div class="vc-flex--fit">

            <el-cascader
              :options="options.area"
              v-model="params.areaId"
              @blur="_change_cascader"  >
            </el-cascader>
          </div>
        </div>


        <div class="vc-flex vc-items--center vc-margin--bm">
          <div  style="width: 200px" class="vc-flex vc-content--end vc-items--center vc-padding--rt">详细地址：</div>

          <div class="vc-flex--fit">
            <el-input   placeholder="请输入详细地址" v-model="params.address"></el-input>
          </div>
        </div>

        <!--<div class="vc-flex vc-items&#45;&#45;center vc-margin&#45;&#45;bm">
          <div  style="width: 200px" class="vc-flex vc-content&#45;&#45;end vc-items&#45;&#45;center vc-padding&#45;&#45;rt">公司银行：</div>

          <div class="vc-flex&#45;&#45;fit">
            <el-select v-model="params.type" placeholder="请选择">
              <el-option
                v-for="item in options.bank"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>-->

        <div class="vc-flex vc-items--center vc-margin--bm">
          <div  style="width: 200px" class="vc-flex vc-content--end vc-items--center vc-padding--rt">公司银行账户：</div>

          <div class="vc-flex--fit">
            <el-input  type="tel" placeholder="请输入公司银行账户" v-model="params.bankNumber"></el-input>
          </div>
        </div>

        <div class="vc-flex vc-items--center vc-margin--bm">
          <div  style="width: 200px" class="vc-flex vc-content--end vc-items--center vc-padding--rt">银行卡户主：</div>

          <div class="vc-flex--fit">
            <el-input type="text"  placeholder="请输入银行卡户主" v-model="params.bankOwner"></el-input>
          </div>
        </div>

        <div class="vc-flex vc-items--center vc-margin--bm">
          <div  style="width: 200px" class="vc-flex vc-content--end vc-items--center vc-padding--rt"></div>

          <div class="vc-flex--fit el-cover">
            <el-button type="primary" @click.native="_save_user_info">提交信息</el-button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<style scoped></style>
