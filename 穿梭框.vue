<template>
                <div class="PackView_transfer"
           v-for="(item,index_1) in bgData"
           :key="index_1">
        <el-divider>包裹{{index_1+1}}</el-divider>

        <div class="PackView_transfer_top" v-if="false">
          <el-form :model="bgData[index_1].zxdInfo"
                   ref="numberValidateForm"
                   label-width="100px">
            <el-form-item label="长度(cm)"
                          prop="long">
              <el-input type="number"
                        v-model.number="bgData[index_1].zxdInfo.long"
                        autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item label="宽度(cm)"
                          prop="long">
              <el-input type="number"
                        v-model.number="bgData[index_1].zxdInfo.long"
                        autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item label="高度(cm)"
                          prop="long">
              <el-input type="number"
                        v-model.number="bgData[index_1].zxdInfo.long"
                        autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item label="重量(kg)"
                          prop="long">
              <el-input type="number"
                        v-model.number="bgData[index_1].zxdInfo.long"
                        autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
        </div>

        <div class="ta-transfer">
          <div class="ta-transfer_left">
            <div class="transfer-view-head">
              <div class="head_left">
                <el-checkbox :indeterminate="bgData[index_1].invoking.isIndeterminate"
                             :disabled='allData.length==0'
                             v-model="bgData[index_1].invoking.checkAll"
                             @change="handleCheckAllChange($event,index_1,true)">待打包物品</el-checkbox>
              </div>
              <div class="head_right">
                <span>{{bgData[index_1].invoking.selected_num}}</span>
                <span>/</span>
                <span>{{allData.length}}</span>
              </div>

            </div>
            <div class="transfer-view-main">
              <el-checkbox-group v-model="bgData[index_1].invoking.checkedCities"
                                 @change="handleCheckedCitiesChange($event,index_1,true)">
                <div class="transfer-view-item"
                     v-for="(item, index) in allData"
                     :key="index">
                  <el-checkbox :label="item.id"
                               :key="item.name">{{item.name}}</el-checkbox>
                </div>
              </el-checkbox-group>
            </div>
          </div>

          <div class="ta-transfer_btn">
            <el-button type="primary"
                       :disabled='bgData[index_1].parameter.selected_num==0'
                       @click="removeGoods(index_1)"
                       icon="el-icon-arrow-left">拿出</el-button>
            <el-button type="primary"
                       :disabled='bgData[index_1].invoking.selected_num==0'
                       @click='addRemoveGoods(index_1)'>放入
              <i class="el-icon-arrow-right el-icon--right"></i>
            </el-button>
          </div>

          <div class="ta-transfer_right">
            <div class="transfer-view-head">
              <div class="head_left">

                <el-checkbox :indeterminate="bgData[index_1].parameter.isIndeterminate"
                             :disabled='bgData[index_1].wpinfo.length==0'
                             v-model="bgData[index_1].parameter.checkAll"
                             @change="handleCheckAllChange($event,index_1)">
                  包裹{{index_1+1}}
                </el-checkbox>
              </div>
              <div class="head_right">
                <span>{{bgData[index_1].parameter.selected_num}}</span>
                <span>/</span>
                <span>{{bgData[index_1].wpinfo.length}}</span>
              </div>
            </div>
            <div class="transfer-view-main">
              <el-checkbox-group v-model="bgData[index_1].parameter.checkedCities"
                                 @change="handleCheckedCitiesChange($event,index_1)">
                <div class="transfer-view-item"
                     v-for="(item, index) in bgData[index_1].wpinfo"
                     :key="index">

                  <el-checkbox :label="item.id"
                               :key="item.name">{{item.name}}</el-checkbox>
                </div>
              </el-checkbox-group>
            </div>
          </div>
        </div>

      </div>
</template>

<script>
export default {
data(){
return{
      dataAll: [],
      wptype: [],
      allData_copy: '',
      allData: [
        {
          id: 1,
          name: '手机',
          wptype: { id: 1, name: '带电', info: '说明' },
          num: '物品数量',
          unitprice: '单价',
          totalamoun: '总价',
          bakinfo: '备注说明',
          enname: '英文名',
          unit: '12',
          currencty: '货币类型',
          extendinfo: '扩展类型'
        },
        {
          id: 2,
          name: '游戏机',
          wptype: { id: 1, name: '带电', info: '说明' },
          num: '物品数量',
          unitprice: '单价',
          totalamoun: '总价',
          bakinfo: '备注说明',
          enname: '英文名',
          unit: '12',
          currencty: '货币类型',
          extendinfo: '扩展类型'
        },
        {
          id: 3,
          name: '电视机',
          wptype: { id: 1, name: '带电', info: '说明' },
          num: '物品数量',
          unitprice: '单价',
          totalamoun: '总价',
          bakinfo: '备注说明',
          enname: '英文名',
          unit: '12',
          currencty: '货币类型',
          extendinfo: '扩展类型'
        },
        {
          id: 4,
          name: '空调',
          wptype: { id: 1, name: '带电', info: '说明' },
          num: '物品数量',
          unitprice: '单价',
          totalamoun: '总价',
          bakinfo: '备注说明',
          enname: '英文名',
          unit: '12',
          currencty: '货币类型',
          extendinfo: '扩展类型'
        }
      ],
      bgData: [
        {
          invoking: {
            checkedCities: [],
            selected_num: 0,
            isIndeterminate: false,
            checkAll: false
          },
          parameter: {
            isIndeterminate: false,
            checkAll: false,
            checkedCities: [],
            selected_num: 0,
            dataAll: []
          },
          wpinfo: [
          ],
          zxdInfo: {}
        }
      ],
}
},
 methods:{
 addRemoveGoods (index) { //添加或者删除物品
      let formData = this.bgData[index].invoking.checkedCities
      for (const key in formData) {
        for (const k in this.allData) {
          if (this.allData[k].id == formData[key]) {
            this.bgData[index].wpinfo.push.apply(this.bgData[index].wpinfo, this.allData.splice(k, 1))

          }
        }
      }
      for (const key in this.bgData[index].wpinfo) {
        this.bgData[index].parameter.dataAll.push(this.bgData[index].wpinfo[key].id)
      }
      this.bgData[index].invoking.selected_num = 0
      this.bgData[index].invoking.isIndeterminate = false
      this.bgData[index].invoking.checkedCities = []
      this.bgData[index].invoking.checkAll = false
    },
    removeGoods (index) { //拿出
      let formData = this.bgData[index].parameter.checkedCities
      for (const key in formData) {
        for (const k in this.bgData[index].wpinfo) {
          if (this.bgData[index].wpinfo[k].id == formData[key]) {
            this.allData.push.apply(this.allData, this.bgData[index].wpinfo.splice(k, 1))
          }
        }
      }
      this.bgData[index].parameter.selected_num = 0
      this.bgData[index].parameter.isIndeterminate = false
      this.bgData[index].parameter.checkedCities = []
      this.bgData[index].parameter.checkAll = false

    },
    // ----------------------------
    handleCheckAllChange (val, index, falg) { //点击全选
      if (falg) {
        this.bgData[index].invoking.checkedCities = val ? this.dataAll : [];
        this.bgData[index].invoking.selected_num = val ? this.dataAll.length : 0
        this.bgData[index].invoking.isIndeterminate = false;
      } else {
        this.bgData[index].parameter.checkedCities = val ? this.bgData[index].parameter.dataAll : []

        this.bgData[index].parameter.selected_num = val ? this.bgData[index].parameter.dataAll.length : 0

        this.bgData[index].parameter.isIndeterminate = false;

      }

    },
    handleCheckedCitiesChange (value, index, falg) { //判断是否触发全选
      if (falg) {
        this.bgData[index].invoking.selected_num = value.length
        value.length >= 1 ? this.bgData[index].invoking.isIndeterminate = true : this.bgData[index].invoking.isIndeterminate = false

        if (this.allData.length == value.length) {
          this.bgData[index].invoking.checkAll = true
          this.bgData[index].invoking.isIndeterminate = false
        } else {
          this.bgData[index].invoking.checkAll = false
        }
      } else {
        this.bgData[index].parameter.selected_num = value.length
        value.length >= 1 ? this.bgData[index].parameter.isIndeterminate = true : this.bgData[index].parameter.isIndeterminate = false
        if (this.bgData[index].wpinfo.length == value.length) {
          this.bgData[index].parameter.checkAll = true
          this.bgData[index].parameter.isIndeterminate = false
        } else {
          this.bgData[index].parameter.checkAll = false
        }

      }

    },
    ConfirmSubmit () { //确认提交修改物品信息
      this.$confirm('确定修改物品信息吗,该修改只用于提交使用,刷新页面会还原数据', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.allData = this.allData_copy
        this.$message({
          type: 'success',
          message: '修改成功!'
        });
      })
    },
    }
}
</script >

<style lang='scss>
.ta-transfer {
  height: 400px;
  width: 900px;
  margin-bottom: 50px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .ta-transfer_left,
  .ta-transfer_right {
    width: 30%;
    height: 100%;
    background-color: #ffffff;
    border: 1px solid #ebeef5;
    border-radius: 5px;
    .transfer-view-head {
      width: 100%;
      height: 50px;
      background-color: #f5f7fa;
      border-bottom: 1px solid #ebeef5;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;
      box-sizing: border-box;
      .head_left {
        display: flex;
        width: 100%;
        height: 100%;

        .el-checkbox {
          display: flex;
          align-items: center;
          height: 100%;
          width: 100%;
        }
        .el-checkbox__label {
          font-size: 16px;
        }
      }
      .head_right {
        span {
          font-size: 14px;
          color: #909399;
        }
      }
    }
    .transfer-view-main {
      width: 100%;
      height: 100%;
      padding: 10px 10px 0 10px;
      box-sizing: border-box;
      overflow-y: auto;
      .transfer-view-item {
        margin-bottom: 10px;
        width: 100%;
        height: 20px;
        // background-color: #c5c1c1;
        display: flex;
        align-items: center;
        .el-checkbox {
          display: flex;
          align-items: center;
          width: 100%;
          height: 100%;
          .el-checkbox__label {
            color: #606266;
          }
          .el-checkbox__input.is-checked + .el-checkbox__label {
            color: #409eff;
          }
        }
        .el-checkbox:hover {
          .el-checkbox__label {
            color: #409eff;
          }
        }
      }
    }
  }
  .ta-transfer_btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    height: 100px;
  }
}
</style>
