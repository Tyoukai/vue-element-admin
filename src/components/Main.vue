<template>
  <div class="clo-md-10 col-md-offset-2 main">
    <KafkaConfig></KafkaConfig>
  </div>
</template>

<script>
  import KafkaConfig from '@/pages/KafkaConfig.vue';
  export default {
      name: 'Main',
      components: {
        KafkaConfig
      }
      // data() {
      //   const item = {
      //     date: '2016-05-02' ,
      //     name: '王小虎',
      //     address: '上海市普陀区金沙江路 1518 弄'
      //   };
      //   return {
      //     tableData: Array(7).fill(item)
      //   }
      // }
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