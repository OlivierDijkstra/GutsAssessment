<template>
  <div id="app">
    <SeatMap :map="layout" :groups="groups" />
  </div>
</template>

<script>
import SeatMap from './components/SeatMap.vue';
import { layout, groups } from './assets/data';

export default {
  name: 'App',
  components: {
    SeatMap,
  },
  data() {
    return {
      layout,
      groups,
    };
  },

};
</script>
