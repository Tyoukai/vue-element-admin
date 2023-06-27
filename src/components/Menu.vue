<template>
  <div class="clo-md-2 sidebar">
    <ul class="nav nav-sidebar">
      <li :class="activeData.home" @click="changeCss('home')"><router-link to="/home">首页</router-link></li>
      <li :class="activeData.kafka" v-on:click="changeCss('kafka')"><router-link to="/kafkaConfig" >kafka配置</router-link></li>
      <li :class="activeData.robot" v-on:click="changeCss('robot')"><router-link to="/robotConfig">外挂机器人配置</router-link></li>
      <li :class="activeData.watchdog" v-on:click="changeCss('watchdog')"><router-link to="/watchdogConfig" >看门狗配置</router-link></li>
      <li :class="activeData.operation" v-on:click="changeCss('operation')"><router-link to="/operationConfig" >智能运维</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      activeData: {
        home: 'active',
        kafka: '',
        robot: '',
        watchdog: '',
        operation: ''
      }
    }
  },
  methods: {
    changeCss(item){
      if (item === 'home') {
        this.activeData.home = 'active'
        this.activeData.kafka = ''
        this.activeData.robot = ''
        this.activeData.watchdog = ''
        this.activeData.operation = ''
      } else if (item === 'kafka') {
        this.activeData.home = ''
        this.activeData.kafka = 'active'
        this.activeData.robot = ''
        this.activeData.watchdog = ''
        this.activeData.operation = ''
      } else if (item === 'robot') {
        this.activeData.home = ''
        this.activeData.kafka = ''
        this.activeData.robot = 'active'
        this.activeData.watchdog = ''
        this.activeData.operation = ''
      } else if (item === 'watchdog') {
        this.activeData.home = ''
        this.activeData.kafka = ''
        this.activeData.robot = ''
        this.activeData.watchdog = 'active'
        this.activeData.operation = ''
      } else {
        this.activeData.home = ''
        this.activeData.kafka = ''
        this.activeData.robot = ''
        this.activeData.watchdog = ''
        this.activeData.operation = 'active'
      }
    }
  }
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