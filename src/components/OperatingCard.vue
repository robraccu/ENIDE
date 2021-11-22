<template>
  <v-card>
    <v-card-subtitle class="blue white--text text-overline">{{
      type
    }}</v-card-subtitle>
    <v-card-title>[{{ namecard }}]</v-card-title>
    <v-card-text>[{{ idcame }}]</v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn rounded icon>
        <v-icon color="error">mdi-delete</v-icon>
      </v-btn>
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
  props: { type: String, namecard: String, idcame: String },
  data: () => ({
    itemsMenu: [
      { title: "Scheda Operativa" },
      { title: "Piano operativo" },
      { title: "Vista GDC" },
      { title: "Info" },
      { title: "Azioni opz." },
    ],
  }),
};
</script>

<style></style>
