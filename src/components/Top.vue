<template>
  <div class="top">

    <div class='pageBlock'>
      <div class='d-flex justify-content-center'>
        <div v-for='item in items'>
          <div class="card">
            <img :src="item.img" alt="Card image cap">
            <div class="card-block">
              <h5 class="card-title">{{item.name}}</h5>
              <p class="card-text">{{item.desc}}</p>
              <b-btn class="btn btn-info" @click="$root.$emit('show::modal','modal1')">Show details</b-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-modal
      id="modal1"
      title="Motorbike details"
      save-title="Make a booking"
    >
      One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible
      vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly
      domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide
      off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as
      he looked. "What's happened to me?" he thought. It wasn't a dream. His room, a proper human
    </b-modal>
  </div>
</template>

<script>
  import { items } from '../utils';

  export default {
    name: 'top',
    data() {
      return {
        items: items(3, '400x300'),
      };
    },
  };
</script>

<style>
  .card {
    margin: 10px;
    max-width: 400px;
  }

  img {
    max-width: 100%;
  }

  .top {
    padding-left: 10px;
    padding-right: 10px;
  }

  .modal {
    display: flex;
    align-items: center;
  }
</style>
