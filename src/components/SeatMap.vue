<template>
  <div class="mx-auto max-w-4xl p-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
    <SeatMapLegend :ranks="ranks" :groups="sectionedGroups" />

    <div class="col-span-2">
      <div v-for="section in map.sections" :key="section.name">
        <SeatSection :section="section" :groups="ordersForSection(section.name)" :ranks="ranks" />
      </div>
    </div>
  </div>
</template>

<script>
import SeatSection from './SeatSection.vue';
import SeatMapLegend from './SeatMapLegend/SeatMapLegend.vue';
import { randomColor } from '../lib/helpers';

export default {
  name: 'SeatMap',
  components: {
    SeatSection,
    SeatMapLegend,
  },
  props: {
    map: {
      type: Object,
      required: true,
    },
    groups: Array,
    colors: Object,
  },
  data() {
    return {
      ranks: [],
    };
  },
  computed: {
    // Because this is a computed value, the orders are
    // only grouped once instead once for every section render.
    sectionedGroups() {
      // Groups orders together by their section. This will assist us
      // rendering out the sections and passing the correct orders while
      // only having to do this once instead once for every render of a section.
      function groupGroupsToSection(groups, colors) {
        const grouped = [];

        groups.forEach((group) => {
          // Check if a custom color is provider by the `colors` prop for this rank.
          // If a color is given, we will use that instead of randomly generating one.
          let color = null;

          if (colors && colors.groups && colors.groups[group.id]) {
            color = colors.groups[group.id];
          }

          group.seats.forEach(({ section, row, seat }) => {
            // If the group section does not exist yet, create
            // a new one with the key `section`.
            if (!grouped[section]) {
              grouped[section] = [];
            }

            // Push the row, seat together with the
            // group id (phone number) and a random color
            // to the grouped section.
            grouped[section].push({
              id: group.id,
              row,
              seat,
              color: color || randomColor(),
            });
          });
        });

        return grouped;
      }

      return this.groups ? groupGroupsToSection(this.groups, this.colors) : [];
    },

  },
  provide() {
    return {
      ranks: this.map.ranks.map((rank) => {
        let color = null;

        if (this.colors && this.colors.ranks && this.colors.ranks[rank]) {
          color = this.colors.ranks[rank];
        }

        return {
          rank,
          color: color || randomColor(),
        };
      }),
    };
  },
  methods: {
    // Returns the orders from a section.
    ordersForSection(section) {
      return this.sectionedGroups[section] || null;
    },
  },
};
</script>
