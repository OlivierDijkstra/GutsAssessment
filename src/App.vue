<template>
  <div id="app">
    <Test msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Test from './components/Test.vue';

export default {
  name: 'App',
  components: {
    Test,
  },
};
</script>
