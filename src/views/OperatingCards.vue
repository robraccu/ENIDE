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
            item-text="valore"
            item-value="chiave"
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
              v-for="(card, index) in cards"
              :key="index"
              cols="12"
              xl="3"
              lg="4"
              md="6"
              sm="12"
            >
              <OperatingCard
                :type="card.type"
                :namecard="card.name_card"
                :idcame="card.id_came"
              ></OperatingCard>
            </v-col>
          </v-row>
        </v-container>
      </perfect-scrollbar>
    </v-sheet>
  </v-card>
</template>

<script>
import connectionMixin from "@/mixins/connectionParams.js";
import ContextualActionBar from "../components/ContextualActionBar.vue";
import OperatingCard from "../components/OperatingCard.vue";
export default {
  name: "OperatingCards",
  components: { ContextualActionBar, OperatingCard },
  mixins: [connectionMixin],
  data() {
    return {
      orders: ["A-Z", "per codice CAME"],
      filters: [],
      cards: [],
    };
  },
  mounted() {
    this.getFilters();
    this.getCards();
  },
  methods: {
    async getFilters() {
      try {
        const response = await this.$http.get("http://localhost:3000/filters");
        // JSON responses are automatically parsed.
        this.filters = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getCards() {
      try {
        const response = await this.$http.get("http://localhost:3000/cards");
        // JSON responses are automatically parsed.
        this.cards = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.ps {
  height: calc(100vh - 208px);
}
</style>
