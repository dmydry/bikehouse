<template>
  <div class="page">
    <div class="jumbotron">
      <h1 class="display-4">{{title}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page',
  props: ['title'],
};
</script>
