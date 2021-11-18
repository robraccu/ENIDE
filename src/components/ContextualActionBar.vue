<template>
  <v-app-bar
    absolute
    elevate-on-scroll
    scroll-target="#scrolling-techniques-7"
    color="accent"
    dark
  >
    <v-btn icon @click="goBack()"><v-icon>mdi-arrow-left</v-icon></v-btn>
    <v-toolbar-title>Schede operative</v-toolbar-title>

    <v-spacer></v-spacer>
    <v-responsive max-width="250">
      <v-text-field
        label="Cerca"
        placeholder="scrivi una o più parole"
        filled
        rounded
        dense
        hide-details
        prepend-inner-icon="mdi-magnify"
        single-line
      ></v-text-field
    ></v-responsive>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
  },
};
</script>
