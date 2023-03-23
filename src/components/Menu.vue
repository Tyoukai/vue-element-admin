<template>
  <div class="clo-md-2 sidebar">
    <ul class="nav nav-sidebar">
      <!-- <li class="active"><a href="#">首页</a></li>
      <li><a href="#">kafka配置</a></li>
      <li><a href="#">外挂机器人配置</a></li>
      <li><a href="#">看门狗配置</a></li> -->

      <li class="active"><router-link to="/home">首页</router-link></li>
      <li><router-link to="/kafkaConfig">kafka配置</router-link></li>
      <li><router-link to="/robotConfig">外挂机器人配置</router-link></li>
      <li><router-link to="/watchdogConfig">看门狗配置</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Menu"
}
</script>

<style scoped>
  .sidebar {
    position: fixed;
    top: 51px;
    bottom: 0;
    left: 0;
    z-index: 1000;
    display: block;
    padding: 0px;
    overflow-x: hidden;
    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
    background-color: #f5f5f5;
    border-right: 1px solid #eee;
  }
  
  .nav-sidebar {
    width: 212px
  }

  .nav-sidebar > li > a {
    padding-right: 20px;
    padding-left: 20px;
  }
  .nav-sidebar > .active > a,
  .nav-sidebar > .active > a:hover,
  .nav-sidebar > .active > a:focus {
    color: #fff;
    background-color: #428bca;
  }
</style>