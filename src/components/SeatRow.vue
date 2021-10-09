<template>
  <div
    class="grid items-center justify-end grid-flow-col
    gap-2 auto-cols-max p-2 mx-auto max-w-xl border-b pb-2"
  >
    <div v-for="seat in seats" :key="seat.seat">
      <Seat
        :number="seat.seat"
        :rank="seat.rank"
        :ranks="ranks"
        :order="orders ? orderForSeat(seat.seat) : null"
      />
    </div>
  </div>
</template>

<script>
import Seat from './Seat.vue';

export default {
  name: 'SeatRow',
  components: {
    Seat,
  },
  props: {
    seats: Array,
    number: String,
    orders: Array,
    ranks: Array,
  },
  methods: {
    // Returns the first findable order that is assigned to this seat.
    // We return the first findable because no other orders should be set to
    // the same seat.
    orderForSeat(seat) {
      return this.orders?.find((order) => order.seat === seat);
    },
  },
};
</script>
