<template>
  <div class="top">

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
    <b-modal
      id="modal1"
      title="Submit your name"
      save-title="Make a booking"
    >
      One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought. It wasn't a dream. His room, a proper human
    </b-modal>
  </div>
</template>

<script>
  class Bike {
    constructor(name, bikeClass, desc, img) {
      this.name = name;
      this.bikeClass = bikeClass;
      this.desc = desc;
      this.img = img;
    }
  }
  export default {
    name: 'top',
    data() {
      return {
        items: [
          new Bike(
            'Honda Vario Black',
            '110cc',
            'Super bike for YOU!',
            'http://placehold.it/400x300',
          ),
          new Bike(
            'Honda Vario White',
            '110cc',
            'Super bike only today!',
            'http://placehold.it/400x300',
          ),
          new Bike(
            'Honda Vario Blue',
            '110cc',
            'JUST arrived, book it!',
            'http://placehold.it/400x300',
          ),
        ],
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
    max-width:100%;
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
