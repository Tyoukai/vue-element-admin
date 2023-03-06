<template>
  <el-container>
    <Menu />
    <Main />
  </el-container>
</template>

<script>
import Menu from './components/Menu.vue';
import Main from './components/Main.vue';

  export default {
    name: 'App',
    components: {
      Menu,
      Main
    },
  }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
