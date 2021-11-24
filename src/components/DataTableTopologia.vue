<template>
  <v-data-table
    :headers="headerTable"
    :items="records"
    :calculate-widths="false"
    class="main-table elevation-1 mt-0"
    :loading="loading"
    loading-text="Caricamento... Attendere, per favore."
    multi-sort
  >
  </v-data-table>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    fixHeader: true,
    records: [
      {
        name: "",
        lifecycle: "",
        location: "",
        virtual: "",
        resilienza: "",
        owner: "",
      },
    ],
  }),
  computed: {
    headerTable() {
      return [
        {
          text: "[BusinnesApplication] \nDisplay Label",
          align: "center",
          value: "BADisplayLabel",
          sortable: true,
          class: "primary lighten-4 white--text",
          width: 100,
        },
        {
          text: "[SolutionL0] Display Label",
          align: "center",
          value: "S0DisplayLabel",
          sortable: true,
          class: "primary lighten-4 white--text",
          cellClass: "cellFont",
          width: 105,
        },
        {
          text: "[Node] Display Label",
          align: "NodeDisplayLabel",
          value: "NodeDisplayLabel",
          sortable: true,
          class: "primary lighten-4 white--text",
        },
        {
          text: "[Node] LifecycleStatus",
          align: "center",
          value: "NodeLifecycleStatus",
          sortable: true,
          class: "primary lighten-4 white--text",
        },
        {
          text: "[Node] CalculatedLocation",
          align: "center",
          value: "NodeCalculatedLocation",
          sortable: true,
          class: "primary lighten-4 white--text",
        },
        {
          text: "[Node] Node is Virtual",
          align: "center",
          value: "NodeIsVirtual",
          sortable: true,
          class: "primary lighten-4 white--text",
        },
        {
          text: "Datacenter",
          align: "center",
          value: "Datacenter",
          sortable: true,
          class: "primary lighten-4 white--text",
        },
        {
          text: "Cluster",
          align: "center",
          value: "Cluster",
          sortable: true,
          class: "primary lighten-4 white--text",
        },
        {
          text: "Resilienza Infra.",
          align: "center",
          value: "ResilienzaInfra",
          sortable: true,
          class: "primary lighten-4 white--text",
        },
        {
          text: "[Node] OS Friendly Name",
          align: "center",
          value: "NodeOSFriendlyName",
          sortable: true,
          class: "primary lighten-4 white--text",
          width: 200,
        },
        {
          text: "[Node] DiscoveredModel",
          align: "center",
          value: "NodeDiscoveredModel",
          sortable: true,
          class: "primary lighten-4 white--text",
        },
        {
          text: "[Node] Owner Display Label",
          align: "center",
          value: "NodeOwnerDisplayLabel",
          sortable: true,
          class: "primary lighten-4 white--text",
        },
        {
          text: "Issue",
          align: "center",
          value: "Issue",
          sortable: true,
          class: "primary lighten-4 white--text",
        },
        {
          text: "Check Compliance",
          align: "center",
          value: "CheckCompliance",
          sortable: true,
          class: "primary lighten-4 white--text",
        },
      ];
    },
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      try {
        const response = await this.$http.get("http://localhost:3000/dati");
        // JSON responses are automatically parsed.
        this.records = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.headerFont {
  font-size: 20px;
}
.v-data-table >>> tbody td {
  font-size: 12px !important;
}
.main-table table {
  table-layout: fixed;
}
</style>
