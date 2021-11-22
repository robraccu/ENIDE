<template>
  <div id="tabsDetails">
    <v-tabs v-model="tab" background-color="secondary" grow color="#000">
      <v-tab> Topologia Infrastruttura </v-tab>
      <v-tab disabled> Topologie Running Software </v-tab>
      <v-tab disabled> Dipendenze </v-tab>
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
    };
  },
};
</script>

<style></style>
