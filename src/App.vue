<template>
  <div id="app">
    <Top/>
    <Menu/>
    <Footer />
  </div>
</template>

<script>
import Top from './components/Top.vue';
import Menu from './components/Menu.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Top,
    Menu,
    Footer
  }
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
