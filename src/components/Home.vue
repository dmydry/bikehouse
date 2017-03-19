<template>
  <div class="home">
    <page
      :title='title'
      :subtitle='subtitle'
      :desc='desc'
    />
  </div>
</template>

<script>
  const desc = '<p>It uses utility classes for typography and spacing to space content out within the larger container.</p>';

  export default {
    name: 'home',
    data() {
      return {
        title: 'Home',
        subtitle: 'this is a home page',
        desc,
      };
    },
  };
</script>
