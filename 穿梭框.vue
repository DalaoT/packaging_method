<template>
  <div>
             <div class="ta-transfer">
        <div class="ta-transfer_left">
          <div class="transfer-view-head">
            <div class="head_left">
              <el-checkbox :indeterminate="isIndeterminate"
                           v-model="checkAll"
                           @change="handleCheckAllChange($event)">待打包物品</el-checkbox>

            </div>
            <div class="head_right">
              <span>{{selected_num}}</span>
              <span>/</span>
              <span>{{dataAll.length}}</span>
            </div>

          </div>
          <div class="transfer-view-main">
            <el-checkbox-group v-model="checkedCities"
                               @change="handleCheckedCitiesChange">
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
                     :disabled='bgData[0].parameter.selected_num==0'
                     @click="removeGoods"
                     icon="el-icon-arrow-left">拿出</el-button>
          <el-button type="primary"
                     :disabled='selected_num==0'
                     @click='addRemoveGoods(0)'>放入
            <i class="el-icon-arrow-right el-icon--right"></i>
          </el-button>
        </div>

        <div class="ta-transfer_right">
          <div class="transfer-view-head">
            <div class="head_left">
              <!-- :disabled='bgData[0].wpinfo.length==0' -->
              <el-checkbox :indeterminate="bgData[0].parameter.isIndeterminate"
                           v-model="bgData[0].parameter.checkAll"
                           @change="handleCheckAllChange($event,0)">
                包裹1
              </el-checkbox>
            </div>
            <div class="head_right">
              <span>{{bgData[0].parameter.selected_num}}</span>
              <span>/</span>
              <span>{{bgData[0].wpinfo.length}}</span>
            </div>
          </div>
          <div class="transfer-view-main">
            <el-checkbox-group v-model="bgData[0].parameter.checkedCities"
                               @change="handleCheckedCitiesChange($event,0)">
              <div class="transfer-view-item"
                   v-for="(item, index) in bgData[0].wpinfo"
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
 methods:{
     handleCheckAllChange (val) { //点击全选
      // this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange (value) { //判断是否触发全选
    //自己写需要的方法
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
          font-size: 18px;
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
    width: 30%;
    height: 100px;
    background-color: rgb(172, 172, 172);
  }
}
</style>
