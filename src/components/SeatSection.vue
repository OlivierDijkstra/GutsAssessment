<template>
  <div class="mb-6">
    <h1 class="text-center font-medium text-xl capitalize mb-2">{{ section.name }}</h1>

    <div v-for="row in section.rows" :key="row.row">
      <SeatRow :number="row.row" :seats="row.seats" :orders="ordersForRow(row.row)" />
    </div>
  </div>
</template>

<script>
import SeatRow from './SeatRow.vue';
import { groupBy } from '../lib/helpers';

export default {
  name: 'SeatSection',
  components: {
    SeatRow,
  },
  props: {
    section: Object,
    groups: Array,
  },
  computed: {
    // Because this is a computed value, the orders are
    // only grouped once instead once for every section render.
    rowedGroups() {
      return this.groups ? groupBy(this.groups, 'row') : [];
    },
  },
  methods: {
    ordersForRow(row) {
      return this.rowedGroups[row] || null;
    },
  },
};
</script>
