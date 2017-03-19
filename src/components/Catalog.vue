<template>
  <div class="catalog">

    <div class='searchCatalog col-4'>
      <h3>Motorbikes Catalog</h3>
      <b-form-input type='text' size='md' v-model='keyword' placeholder='Search by name'/>
    </div>

    <div class="pageBlock">
      <div v-if="!filteredCatalog[0]" class="alert alert-warning" role="alert">
        <strong>We are sorry, </strong>no motorbikes found. Please try to type another name
      </div>
      <div class='d-flex flex-wrap justify-content-center v-if="filteredCatalog[0]"'>
        <div v-for='item in filteredCatalog'>
          <div class="card cardCatalog" @click="$root.$emit('show::modal','modal2')">
            <img :src="item.img" alt="Card image cap">
            <div class="card-block">
              <h6 class="card-title">{{item.name}}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>

    <b-modal
      id="modal2"
      title="Motorbike details"
      save-title="Make a booking"
    >
      One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible
      vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly
      domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready
      to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about
      helplessly as he looked. "What's happened to me?" he thought. It wasn't a dream. His room, a proper human.
    </b-modal>
  </div>
</template>

<script>
  import { items } from '../utils';

  export default {
    name: 'catalog',
    data() {
      return {
        keyword: '',
        items: items(18, '200x200'),
      };
    },
    computed: {
      filteredCatalog() {
        return this.items.filter(item =>
          item.name.toLowerCase().includes(this.keyword.toLowerCase()));
      },
    },
  };
</script>

<style scoped>
  .cardCatalog {
    margin: 10px;
    max-width: 150px;
    cursor: pointer;
  }

  .cardCatalog p {
    font-size: 12px;
  }

  img {
    max-width: 100%;
  }

  .top {
    padding-left: 10px;
    padding-right: 10px;
  }

  .modal2 {
    display: flex;
    align-items: center;
  }

  .searchCatalog {
    margin: 40px auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .card-title {
    margin: 0;
  }
</style>
