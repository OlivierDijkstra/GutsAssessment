<template>
  <div
    class="absolute w-52 text-sm left-full bottom-full mb-1 ml-1 p-2 bg-white shadow rounded z-10"
  >
    <p v-if="id" class="grid grid-cols-2">
      <span class="font-semibold">ID:</span> <span class="text-right">{{ id }}</span>
    </p>
    <p class="grid grid-cols-2">
      <span class="font-semibold">Seat number:</span> <span class="text-right">{{ number }}</span>
    </p>
    <p class="grid grid-cols-2">
      <span class="font-semibold">Rank:</span> <span class="text-right">{{ rank.substr(4) }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'ToolTip',
  props: {
    id: String,
    number: String,
    rank: String,
  },
};
</script>
