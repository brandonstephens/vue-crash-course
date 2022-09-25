<template>
  <div>
    <header
      class="flex justify-between items-baseline py-9 border-b border-stone-200 mb-8"
    >
      <Header title="About" />
    </header>

    <p>
      This project was made by following
      <a href="https://www.youtube.com/watch?v=qZXt1Aom3Cs">this tutorial</a> by
      Brad Traversy. I diverged on layout and organization when I felt like it
      🤷‍♂️.
    </p>
  </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  name: "About page",
  components: {
    Header,
  },
};
</script>

<style></style>
