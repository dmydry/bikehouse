<template>
  <div class="support">
    <page
      :title='title'
      :subtitle='subtitle'
    />
  </div>
</template>

<script>
  export default {
    name: 'support',
    data() {
      return {
        title: 'Support',
        subtitle: 'this is a support page',
      };
    },
  };
</script>
