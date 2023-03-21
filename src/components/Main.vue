<template>
  <div class="clo-md-10 col-md-offset-2 main">
    <div style="width: 100%; height: 100%; background-color: rgb(95, 95, 101);">
      主区域
    </div>
  </div>
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
  @media (min-width: 768px) {
    .main {
      padding-right: 0px;
      padding-left: 0px;
      height: 559px;
    }
  }
</style>