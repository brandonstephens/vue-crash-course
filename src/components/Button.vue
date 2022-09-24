<template lang="">
  <button @click="onClick()" :class="className">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    className: String,
  },
  methods: {
    onClick() {
      console.log("click");
    },
  },
};
</script>

<style scoped>
button {
  @apply bg-white;
  @apply px-4;
  @apply py-2;
  @apply rounded-xl;
  @apply border;
  @apply border-stone-200;
  @apply font-medium;
  @apply shadow-md;
  @apply text-stone-600;
}

button:hover {
  @apply bg-amber-300;
  @apply border-amber-400;
  @apply text-amber-900;
  @apply shadow;
}
</style>
