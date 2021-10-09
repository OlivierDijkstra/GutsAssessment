<template>
  <div class="flex items-center gap-2 capitalize mb-4">
    <div
      class="relative rounded h-8 w-8 grid place-items-center"
      :style="{ backgroundColor: color }"
    />

    <span>{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'ColorValue',
  props: {
    color: String,
    text: String,
  },
};
</script>
