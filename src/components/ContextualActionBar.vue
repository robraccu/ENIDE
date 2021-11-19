<template>
  <div>
    <v-app-bar
      relative
      elevate-on-scrol
      flat
      scroll-target="#scrolling-techniques-7"
      color="accent"
      dark
      dense
    >
      <v-btn icon @click="goBack()"><v-icon>mdi-arrow-left</v-icon></v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: "",
      String,
    },
  },
  data() {},
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
  },
};
</script>
