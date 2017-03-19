<template>
  <div class="docs">
    <page
      :title='title'
      :subtitle='subtitle'
    />
  </div>
</template>

<script>
  export default {
    name: 'docs',
    data() {
      return {
        title: 'Docs',
        subtitle: 'this is a docs page',
      };
    },
  };
</script>
