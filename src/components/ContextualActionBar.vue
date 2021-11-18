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
      <v-toolbar-title>Schede operative</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-banner single-line sticky dark>
      <v-row class="d-flex flex-row justify-end align-center">
        <v-col cols="3">
          <!-- <v-responsive width="100%"> -->
          <v-select
            :items="orders"
            outlined
            label="Ordine di visualizzazione"
            dense
            hide-details
            class="pt-2"
          ></v-select>
          <!-- </v-responsive> -->
        </v-col>
        <v-col cols="3">
          <!-- <v-responsive width="100%"> -->
          <v-select
            :items="filters"
            outlined
            label="Filtri"
            dense
            hide-details
            class="pt-2"
          ></v-select>
          <!-- </v-responsive> -->
        </v-col>

        <v-col cols="3" class="ml-auto">
          <v-text-field
            label="Cerca"
            placeholder="scrivi una o più parole"
            filled
            rounded
            dense
            hide-details
            prepend-inner-icon="mdi-magnify"
            single-line
            class="pt-2 pr-3"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-banner>
  </div>
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
