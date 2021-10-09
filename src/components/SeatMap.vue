<template>
  <div class="mx-auto max-w-4xl p-8">
    <div
      v-for="section in map.sections"
      :key="section.name"
    >
     <SeatSection :section="section" :groups="ordersForSection(section.name)" />
    </div>
  </div>
</template>

<script>
import SeatSection from './SeatSection.vue';
import { randomColor } from '../lib/helpers';

// Groups orders together by their section. This will assist us
// rendering out the sections and passing the correct orders while
// only having to do this once instead once for every render of a section.
function groupGroupsToSection(groups) {
  const grouped = [];

  groups.forEach((group) => {
    const color = randomColor();

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
        id: group.id, row, seat, color,
      });
    });
  });

  return grouped;
}

export default {
  name: 'SeatMap',
  components: {
    SeatSection,
  },
  props: {
    map: {
      type: Object,
      required: true,
    },
    groups: Array,
  },
  computed: {
    // Because this is a computed value, the orders are
    // only grouped once instead once for every section render.
    sectionedGroups() {
      return groupGroupsToSection(this.groups);
    },
  },
  methods: {
    // Returns the orders from a section.
    ordersForSection(section) {
      return this.sectionedGroups[section] || null;
    },
  },
};
</script>
