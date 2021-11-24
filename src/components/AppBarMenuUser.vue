<template>
  <v-menu :close-on-content-click="true" :nudge-width="200" offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on">
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-icon x-large>mdi-face</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ user }}</v-list-item-title>
            <v-list-item-subtitle>{{ email }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list>
        <v-list-item-group color="primary">
          <v-list-item>
            <v-list-item-title @click="openProfile()"
              >Profilo</v-list-item-title
            >
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item>
            <v-list-item-title @click="logout()">Logout</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script>
import userMixin from "@/mixins/AppBarMenuUser.js";

export default {
  name: "AppBarMenuUser",

  mixins: [userMixin],
};
</script>
