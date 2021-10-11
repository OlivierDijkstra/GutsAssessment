<template>
   <div
    @mouseover="showTooltip = true"
    @mouseleave="showTooltip = false"
    class="relative bg-gray-200 rounded h-8 w-8
    grid place-items-center transition-colors cursor-pointer"
    :class="{'border-b-8': order}"
    :style="{backgroundColor: backgroundColor, borderColor: order ? order.color : 'transparent'}"
    :data-has-order="order ? true : null"
   >
    <ToolTip
       v-if="showTooltip"
       :id="order ? order.id : null"
       :number="number"
       :rank="rank"
    />
   </div>
</template>

<script>
import ToolTip from './ToolTip.vue';

export default {
  name: 'Seat',
  data() {
    return {
      showTooltip: false,
    };
  },
  components: {
    ToolTip,
  },
  props: {
    number: String,
    rank: String,
    order: Object,
  },
  inject: ['ranks'],
  computed: {
    backgroundColor() {
      return this.ranks.find((rank) => rank.rank === this.rank).color;
    },
  },
};
</script>
