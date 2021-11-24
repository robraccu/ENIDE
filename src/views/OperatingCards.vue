<template>
  <v-card
    class="overflow-hidden"
    min-height="calc(100vh - 88px)"
    color="accent"
  >
    <ContextualActionBar title="Schede Operative"></ContextualActionBar>
    <v-banner single-line sticky dark>
      <v-row class="d-flex flex-row justify-end align-center">
        <v-col cols="3">
          <v-select
            :items="orders"
            outlined
            label="Ordine di visualizzazione"
            dense
            hide-details
            class="pt-2"
          ></v-select>
        </v-col>
        <v-col cols="3">
          <v-select
            :items="filters"
            outlined
            label="Filtri"
            dense
            hide-details
            class="pt-2"
          ></v-select>
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
    <v-sheet
      id="scrolling-techniques-7"
      class="overflow-y-auto pt-0"
      max-height="calc(100vh - 208px)"
      color="accent"
    >
      <perfect-scrollbar>
        <v-container>
          <v-row>
            <v-col
              v-for="(oc, i) in opCardsList"
              :key="i"
              cols="12"
              xl="2"
              lg="3"
              md="4"
              sm="6"
            >
              <OperatingCard
                :type="oc.type"
                :namecard="oc.name_card"
                :idcame="oc.id_came"
              ></OperatingCard>
            </v-col>
          </v-row>
        </v-container>
      </perfect-scrollbar>
    </v-sheet>
  </v-card>
</template>

<script>
import axios from "axios";
import connectionMixin from "@/mixins/connectionParams.js";
import ContextualActionBar from "../components/ContextualActionBar.vue";
import OperatingCard from "../components/OperatingCard.vue";
export default {
  name: "OperatingCards",
  components: { ContextualActionBar, OperatingCard },
  mixins: [connectionMixin],
  data() {
    return {
      orders: ["alfabetico BS/IS/BA", "per codice CAME"],
      filters: ["Foo", "Bar", "Fizz", "Buzz"],
      operatingCardsList: [],
    };
  },
  computed: {
    opCardsList() {
      return this.operatingCardsList;
    },
  },
  beforeMount() {
    this.getOperatingCardsList();
  },
  methods: {
    getOperatingCardsList() {
      axios
        .get("/card_list.json")
        .then((response) => {
          this.operatingCardsList = response.data.cards;
          console.log("Cards: ", this.operatingCardsList, this.startCreation);
        })
        .catch((err) => {
          console.error("Failed to retrieve Operating Cards list", err);
        });
    },
  },
};
</script>

<style scoped>
.ps {
  height: calc(100vh - 208px);
}
</style>
