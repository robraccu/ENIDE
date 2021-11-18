<template>
  <v-app-bar
    relative
    elevate-on-scroll
    scroll-target="#scrolling-techniques-7"
    color="accent"
    dark
    extended
  >
    <v-btn icon @click="goBack()"><v-icon>mdi-arrow-left</v-icon></v-btn>
    <v-toolbar-title>Schede operative</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-row class="pt-16 d-flex flex-row justify-end align-center">
      <v-col cols="3">
        <v-responsive width="100%">
          <v-select
            :items="orders"
            filled
            label="Ordine di visualizzazione"
            dense
            class=""
            hide-details
          ></v-select>
        </v-responsive>
      </v-col>
      <v-col cols="3">
        <v-responsive width="100%">
          <v-select
            :items="filters"
            filled
            label="Filtri"
            dense
            class=""
            hide-details
          ></v-select>
        </v-responsive>
      </v-col>

      <v-col cols="3">
        <v-responsive width="100%">
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
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      orders: ["alfabetico BS/IS/BA", "per codice CAME"],
      filters: ["Foo", "Bar", "Fizz", "Buzz"],
    };
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
  },
};
</script>
