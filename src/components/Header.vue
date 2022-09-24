<script>
export default {
  name: "Header",
  props: {
    title: String,
  },
};
</script>

<template>
  <h1 class="text-3xl text-stone-700 font-bold font-bold">
    {{ title }}
  </h1>
</template>

<style scoped></style>
