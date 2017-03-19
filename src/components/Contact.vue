<template>
  <div class="contact">
    <page
      :title='title'
      :subtitle='subtitle'
    />
  </div>
</template>

<script>
  export default {
    name: 'contact',
    data() {
      return {
        title: 'Contact',
        subtitle: 'this is a contact page',
      };
    },
  };
</script>
