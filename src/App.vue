<template>
  <div id="app">
    <header-menu/>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
  };
</script>

<style>
  @import '../node_modules/bootstrap/dist/css/bootstrap.css';

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .pageBlock {
    margin: 40px auto;
    padding: 40px;
    -webkit-box-shadow: 0px 0px 24px -3px rgba(194,194,194,1);
    -moz-box-shadow: 0px 0px 24px -3px rgba(194,194,194,1);
    box-shadow: 0px 0px 24px -3px rgba(194,194,194,1);
  }
</style>
