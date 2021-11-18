<template>
  <v-card
    class="overflow-hidden"
    max-height="calc(100vh - 88px)"
    color="accent"
  >
    <ContextualActionBar></ContextualActionBar>
    <!-- <v-main> -->
    <v-sheet
      id="scrolling-techniques-7"
      class="overflow-y-auto mt-16 pt-4"
      max-height="calc(100vh - 150px)"
      color="accent"
    >
      <v-container>
        <v-row>
          <v-col v-for="n in 21" :key="n" cols="12" xl="2" lg="3" md="4" sm="6">
            <v-card height="200">
              <router-link to="/operatingcarddetails"
                >Go to Details</router-link
              >
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <!-- </v-main> -->
    </v-sheet>
  </v-card>
</template>

<script>
import ContextualActionBar from "../components/ContextualActionBar.vue";
export default {
  name: "OperatingCards",
  components: { ContextualActionBar },
};
</script>
