<template>
  <div class="px-6 space-y-4">
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Footer,
  },
};
</script>

<style scoped></style>
