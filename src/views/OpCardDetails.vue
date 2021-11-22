<template>
  <v-card
    class="overflow-hidden"
    min-height="calc(100vh - 88px)"
    color="accent"
  >
    <ContextualActionBar
      :title="'Scheda Operativa: ' + bs_name"
    ></ContextualActionBar>

    <v-banner single-line sticky dark px-6>
      <v-row class="d-flex flex-row justify-center align-center">
        <v-col cols="9">
          <h4>
            [CAME] – Classe [Classe] [Stato] – Compliance Classe [Compliance] –
            Ref. [Referente]
          </h4>
        </v-col>

        <v-col cols="3" class="text-right">
          <v-btn rounded color="primary" class="ma-2" disabled
            >Esporta Card</v-btn
          >
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
            <v-col cols="12">
              <!-- <OperatingCard></OperatingCard> -->
              <OpCardDetailsTabs></OpCardDetailsTabs>
            </v-col>
          </v-row>
        </v-container>
      </perfect-scrollbar>
    </v-sheet>
  </v-card>
</template>

<script>
import ContextualActionBar from "../components/ContextualActionBar.vue";
import OpCardDetailsTabs from "@/components/OpCardDetailsTabs.vue";
export default {
  name: "OperatingCardDetails",
  components: {
    ContextualActionBar,
    OpCardDetailsTabs,
  },
  data() {
    return {
      bs_name: "[BS NAME]",
    };
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
  },
};
</script>
