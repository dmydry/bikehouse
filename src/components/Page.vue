<template>
  <div class="page">
    <div class="jumbotron">
      <h1 class="display-4">{{title}}</h1>
      <p class="lead">{{subtitle}}</p>
      <hr class="my-4">
      <div v-html="desc"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'page',
    props: ['title', 'subtitle', 'desc'],
  };
</script>

<style>
  .jumbotron {
    padding: 2rem;
  }
</style>
