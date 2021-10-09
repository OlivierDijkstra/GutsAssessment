<template>
   <div
    @mouseover="showTooltip = true"
    @mouseleave="showTooltip = false"
    class="relative bg-gray-200 rounded h-8 w-8 grid place-items-center
    hover:bg-gray-300 focus:bg-gray-300 transition-colors cursor-pointer"
    :style="{backgroundColor: order ? order.color : '#eaeaea'}"
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
};
</script>
