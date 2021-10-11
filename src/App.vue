<template>
  <div id="app">
    <SeatMap :map="layout" :groups="groups" :colors="customColorScheme" />
  </div>
</template>

<script>
import SeatMap from './components/SeatMap.vue';
import { layout, groups } from './assets/data';

const customColorScheme = {
  ranks: {
    rank1: '#262B37',
    rank2: '#AFCBAD',
    rank3: '#FBF8C2',
  },
  groups: {
    '+31611111111': '#F1C440',
    '+31622222222': '#BBC232',
    '+31633333333': '#EE4646',
  },
};

export default {
  name: 'App',
  components: {
    SeatMap,
  },
  data() {
    return {
      layout,
      groups,
      customColorScheme,
    };
  },

};
</script>
