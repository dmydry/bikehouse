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
              <b-btn class="btn btn-info" @click="showModal(item)">Show details</b-btn>
            </div>
          </div>
        </div>
      </div>
    </div>

    <b-modal
      id="modal1"
      title="Motorbike details"
      ok-title="Make a booking"
      close-title="Cancel"
      :disable-success="invalidRange"
      @ok='book'
      @cancel='closePicker'
    >
      <datepicker v-on:selected="datePick" :disabled='disabled' v-model="from" name="From"></datepicker>
      <datepicker v-on:selected="datePick" :disabled='disabled' v-model="to" name="To"></datepicker>

      <div v-if="invalidRange" class="alert alert-warning" role="alert">
        <strong>Oops! </strong>Minimum 5 days rental is required
      </div>

      One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible
      vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly
      domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide
      off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as
      he looked. "What's happened to me?" he thought. It wasn't a dream. His room, a proper human
    </b-modal>
  </div>
</template>

<script>
  import moment from 'moment';
  import Vue from 'vue';
  import { items } from '../utils';

  export default {
    name: 'top',
    data() {
      return {
        items: items(3, '400x300'),
        invalidRange: false,
        bike: {},
        from: '',
        to: '',
        disabled: {
          from: '',
          to: '',
        },
      };
    },
    methods: {
      showModal(item) {
        const { today, from, to } = item.dates.disabled;
        const todayPlusOne = moment(today).add(1, 'd').toDate();
        const todayPlusSix = moment(today).add(6, 'd').toDate();

        if (moment(today).isBetween(moment(to), moment(from), null, '[]')) {
          this.from = todayPlusOne;
        }
        if (moment(todayPlusSix).isBetween(moment(to), moment(from), null, '[]')) {
          this.to = todayPlusSix;
        }

        this.bike = item;
        this.disabled = item.dates.disabled;
        this.$root.$emit('show::modal', 'modal1');
      },
      datePick() {
        Vue.nextTick(() => {
          this.invalidRange = false;
          if (moment(this.to).diff(this.from, 'd') < 5) {
            this.invalidRange = true;
          }
          if (this.to && this.from > this.to) {
            this.invalidRange = true;
          }
        });
      },
      closePicker() {
        this.invalidRange = false;
        this.from = '';
        this.to = '';
        this.invalidRange = false;
      },
      book() {
        console.log(this.bike, this.from, this.to);
      },
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
    padding-left: 20px;
    padding-right: 20px;
  }

  .modal {
    display: flex;
    align-items: center;
  }
</style>
