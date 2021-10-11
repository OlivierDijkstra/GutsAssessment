<template>
  <div class="border rounded-lg py-2 px-4 ">
    <p class="font-medium mb-4 text-lg">Legenda</p>

    <div v-for="rank in ranks" :key="rank.rank">
      <ColorValue :text="rank.rank" :color="rank.color" />
    </div>

    <div v-for="group in colorCodedGroups" :key="group.id">
      <ColorValue :text="group.id" :color="group.color" />
    </div>
  </div>
</template>

<script>
import ColorValue from './ColorValue.vue';

export default {
  name: 'SeatMapLegend',
  components: {
    ColorValue,
  },
  props: {
    groups: Array,
  },
  inject: ['ranks'],
  computed: {
    colorCodedGroups() {
      const groups = Object.values(this.groups).flat();
      const groupIds = [...new Set(groups.map((group) => group.id))];

      return groupIds.map((id) => {
        const { color } = groups.find((group) => group.id === id);

        return {
          id,
          color,
        };
      });
    },
  },
};
</script>
