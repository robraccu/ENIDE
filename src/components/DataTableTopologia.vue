<template>
  <v-data-table
    :headers="headerTable"
    :items="records"
    :calculate-widths="true"
    class="elevation-1 mt-0"
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
          text: "[BusinnesApplication]:Display Label",
          align: "center",
          value: "BADisplayLabel",
          sortable: true,
          class: "primary lighten-4 white--text",
        },
        {
          text: "[SolutionL0]:Display Label",
          align: "center",
          value: "S0DisplayLabel",
          sortable: true,
          class: "primary lighten-4 white--text",
        },
        {
          text: "[Node]:Display Label",
          align: "NodeDisplayLabel",
          value: "NodeDisplayLabel",
          sortable: true,
          class: "primary lighten-4 white--text",
        },
        {
          text: "[Node]:LifecycleStatus",
          align: "center",
          value: "NodeLifecycleStatus",
          sortable: true,
          class: "primary lighten-4 white--text",
          width: 30,
        },
        {
          text: "[Node]:CalculatedLocation",
          align: "center",
          sortable: true,
          class: "primary lighten-4 white--text",
          width: 30,
          value: "NodeCalculatedLocation",
        },
        {
          text: "[Node]:Node is Virtual",
          align: "center",
          value: "NodeIsVirtual",
          sortable: true,
        },
        {
          text: "Datacenter",
          align: "center",
          value: "Datacenter",
          sortable: true,
        },
        {
          text: "Cluster",
          align: "center",
          value: "Cluster",
          sortable: true,
        },
        {
          text: "Resilienza Infra.",
          align: "center",
          value: "ResilienzaInfra",
          sortable: true,
        },
        {
          text: "[Node]:OS Friendly Name",
          align: "center",
          value: "NodeOSFriendlyName",
          sortable: true,
        },
        {
          text: "[Node]:DiscoveredModel",
          align: "center",
          value: "NodeDiscoveredModel",
          sortable: true,
        },
        {
          text: "[Node]:Owner Display Label",
          align: "center",
          value: "NodeOwnerDisplayLabel",
          sortable: true,
        },
        {
          text: "Issue",
          align: "center",
          value: "Issue",
          sortable: true,
        },
        {
          text: "Check Compliance",
          align: "center",
          value: "CheckCompliance",
          sortable: true,
          class: "primary lighten-4 white--text",
          width: 20,
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
</style>
