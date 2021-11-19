<template>
  <div id="tabsDetails">
    <v-tabs v-model="tab" background-color="secondary" grow color="#000">
      <v-tab v-for="item in items" :key="item" dark>
        {{ item }}
      </v-tab>
      <v-tabs-slider color="accent"></v-tabs-slider>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item class="secondary">
        <!-- <v-card flat> -->
        <DataTableTopologia></DataTableTopologia>
        <!-- </v-card> -->
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import DataTableTopologia from "./DataTableTopologia.vue";
export default {
  components: { DataTableTopologia },
  data() {
    return {
      tab: null,
      items: [
        "Topologia Infrastruttura",
        "Topologie Running Software",
        "Dipendenze",
      ],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
};
</script>

<style></style>
