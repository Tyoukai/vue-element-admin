<template>
  <div class="clo-md-10 col-md-offset-2 main">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'Main',
}
</script>

<style>
  @media (min-width: 768px) {
    .main {
      padding-right: 0px;
      padding-left: 0px;
      height: 540px;
    }
  }
</style>