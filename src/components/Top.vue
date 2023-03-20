<template>
  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container-fluid">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#person-header"  aria-expanded="false" aria-controls="navbar">
        <span class="sr-only">移动端</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Process-management</a>
      
      <div id="person-header" class="navbar-collapse collapse">
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#">管理源配置</a></li>
          <li><a href="#">个人中心</a></li>
        </ul>
        <form class="navbar-form navbar-right">
          <input type="text" class="form-control" placeholder="查询">
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>

</style>