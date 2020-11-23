<template>
  <div class="storeManagement">
    <div class="storeManagement_top">

    </div>
    <div class="storeManagement_main">
      <el-button type="success"
                 class="establish_warehouse">
        <i class="el-icon-plus"></i>
        新建仓库
      </el-button>
      <el-button type="primary"
                 class="management_warehouse">
        <i class="el-icon-s-tools"></i>
        管理仓库
      </el-button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'storeManagement'
}
</script>

<style lang="scss">
// 盒模块显示
/* .storeManagement {
  .storeManagement_top {
    background-color: pink;
  }
  .storeManagement_main {
    background-color: bisque;
  }
} */
.storeManagement {
  width: 100%;
  display: flex;
  height: 100%;
  flex-direction: column;
  // justify-content: space-between;
  align-items: center;
  .storeManagement_top {
    width: 100%;
    min-height: 200px;
    height: 20%;
  }
  .storeManagement_main {
    display: flex;
    width: 80%;
    height: 50%;
    margin-top: 20px;
    min-height: 500px;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    .establish_warehouse,
    .management_warehouse {
      font-size: 20px;
      letter-spacing: 2px;
      min-width: 300px;
      height: 100px;
      display: flex;
      border-radius: 20px;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
