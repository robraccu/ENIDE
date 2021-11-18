<template>
  <v-sheet rounded="lg" color="accent" max-height="calc(100vh - 88px)">
    <HomeSectionLinks />
  </v-sheet>
</template>

<script>
import HomeSectionLinks from "../components/HomeSectionLinks.vue";

export default {
  name: "Home",

  components: {
    HomeSectionLinks,
  },
};
</script>
