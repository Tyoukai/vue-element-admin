<template>
  <el-container>
    <el-header style="text-align: right; font-size: 16px">
      <span>王小虎</span>
    </el-header>
    <el-main>
      <el-table :data="tableData">
        <el-table-column prop="date" label="日期" width="140">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</template>

<script>
export default {
    name: 'Main',
    data() {
      const item = {
        date: '2016-05-02' ,
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(7).fill(item)
      }
    }
}
</script>

<style>
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}
</style>