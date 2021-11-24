<template>
  <v-card>
    <v-card-subtitle class="white--text text-overline" :class="classStyle">{{
      label
    }}</v-card-subtitle>
    <v-card-title
      ><h5 class="text-truncate">{{ namecard }}</h5></v-card-title
    >
    <v-card-text>{{ idcame }}</v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            rounded
            icon
            v-bind="attrs"
            v-on="on"
            to="/operatingcarddetails"
          >
            <v-icon color="primary">mdi-card-text-outline</v-icon>
          </v-btn>
        </template>
        <span>apri Scheda Operativa</span>
      </v-tooltip>
      <v-spacer></v-spacer>

      <v-menu top left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list dense>
          <v-list-item
            v-for="(item, i) in itemsMenu"
            :key="i"
            to="/operatingcarddetails"
            :disabled="item.title != 'Scheda Operativa' ? true : false"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu></v-card-actions
    >
  </v-card>
</template>

<script>
export default {
  props: { type: String, label: String, namecard: String, idcame: String },
  data() {
    return {
      itemsMenu: [
        { title: "Scheda Operativa" },
        { title: "Piano operativo" },
        { title: "Vista GDC" },
        { title: "Info" },
        { title: "Azioni opz." },
      ],
    };
  },
  computed: {
    classStyle: function () {
      return {
        blue: this.type === "business_service",
        red: this.type === "cluster_software",
        green: this.type === "infrastructure_service",
        purple: this.type === "business_application",
      };
    },
  },
};
</script>

<style></style>
