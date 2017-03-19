<template>
  <div class="home">
    <page
      :title='title'
      :subtitle='subtitle'
      :desc='desc'
    />
    <top/>
    <catalog/>

    <div class="pageBlock" id="contact">
      <div>
        <h3 class='display-4'>BikeHouse</h3>
        <p>Indonesia, Bali, Perumahan Dalung Permai blok UU No.9, 80361 Denpasar</p>
        <p>balibikehouse@gmail.com</p>
        <p>+(62) 857 9277 4908</p>
        <p>+(62) 812 3994 4308</p>
      </div>
      <div class="div1">
        <div class="div2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.6630541583413!2d115.16861831438597!3d-8.628309690086436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd238c153ce0155%3A0xf62033fe09a3ccaa!2sBikeHouse+Bali!5e0!3m2!1sen!2sid!4v1489957791650"
            width="800" height="500" frameborder="0" style="border:0" allowfullscreen></iframe>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  const desc = `<p>It uses utility classes for typography and spacing to
                   space content out within the larger container.</p>`;

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

<style scoped>
  .pageBlock {
    display: flex;
    justify-content: center;
  }

  .pageBlock div {
    margin-left: 40px;
    width: 100%
  }

  .div1 {
    position: relative;
    height: 0;
    overflow: hidden;
    padding-bottom: 40%;
    flex-basis: 150%;
  }

  .div2 iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
