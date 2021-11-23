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
        name: "02srv00qwe",
        lifecycle: "configured",
        location: "CAGE-A",
        virtual: "true",
        resilienza: "SI",
        owner: "CC_PAAS_HS_SYS_LINUXUNIX",
      },
      {
        name: "02srv00vgh",
        lifecycle: "in use ",
        location: "CAGE-A1",
        virtual: "true",
        resilienza: "NO",
        owner: "CC_PAAS_HS_SYS_LINUXUNIX",
      },
      {
        name: "02srv00xcf",
        lifecycle: "configured",
        location: "CAGE-A",
        virtual: "true",
        resilienza: "SI",
        owner: "CC_PAAS_HS_SYS_LINUXUNIX",
      },
      {
        name: "02srv00dfg",
        lifecycle: "configured",
        location: "CAGE-A",
        virtual: "true",
        resilienza: "SI",
        owner: "CC_PAAS_HS_SYS_LINUXUNIX",
      },
      {
        name: "02srv00tgb",
        lifecycle: "in use",
        location: "CAGE-A",
        virtual: "false",
        resilienza: "NO",
        owner: "CC_PAAS_HS_SYS_LINUXUNIX",
      },
      {
        name: "02srv00dfg",
        lifecycle: "configured",
        location: "CAGE-A",
        virtual: "false",
        resilienza: "NO",
        owner: "CC_PAAS_HS_SYS_LINUXUNIX",
      },
      {
        name: "02srv00ert",
        lifecycle: "configured",
        location: "CAGE-A",
        virtual: "false",
        resilienza: "SI",
        owner: "CC_PAAS_HS_SYS_LINUXUNIX",
      },
      {
        name: "02srv00zxc",
        lifecycle: "in use",
        location: "CAGE-A",
        virtual: "true",
        resilienza: "NO",
        owner: "CC_PAAS_HS_SYS_LINUXUNIX",
      },
      {
        name: "02srv00azx",
        lifecycle: "in use",
        location: "CAGE-A",
        virtual: "true",
        resilienza: "NO",
        owner: "CC_PAAS_HS_SYS_LINUXUNIX",
      },
      {
        name: "02srv00eed",
        lifecycle: "in use",
        location: "CAGE-A",
        virtual: "true",
        resilienza: "SI",
        owner: "CC_PAAS_HS_SYS_LINUXUNIX",
      },
      {
        name: "02srv00ezx",
        lifecycle: "in use",
        location: "CAGE-A",
        virtual: "true",
        resilienza: "NO",
        owner: "CC_PAAS_HS_SYS_LINUXUNIX",
      },
      {
        name: "02srv00csd",
        lifecycle: "in use",
        location: "CAGE-A",
        virtual: "true",
        resilienza: "SI",
        owner: "CC_PAAS_HS_SYS_LINUXUNIX",
      },
      {
        name: "02srv00czx",
        lifecycle: "in use",
        location: "CAGE-A",
        virtual: "true",
        resilienza: "NO",
        owner: "CC_PAAS_HS_SYS_LINUXUNIX",
      },
      {
        name: "02srv00asd",
        lifecycle: "in use",
        location: "CAGE-A",
        virtual: "true",
        resilienza: "SI",
        owner: "CC_PAAS_HS_SYS_LINUXUNIX",
      },
    ],
  }),
  computed: {
    headerTable() {
      return [
        {
          text: "Nome nodo".toUpperCase(),
          align: "center",
          value: "name",
          sortable: true,
          class: "primary lighten-4 white--text",
        },
        {
          text: "Lifecycle".toUpperCase(),
          align: "center",
          value: "lifecycle",
          sortable: true,
          class: "primary lighten-4 white--text",
        },
        {
          text: "Location".toUpperCase(),
          align: "center",
          value: "location",
          sortable: true,
          class: "primary lighten-4 white--text",
        },
        {
          text: "Is Virtual".toUpperCase(),
          align: "center",
          value: "virtual",
          sortable: true,
          class: "primary lighten-4 white--text",
          width: 30,
        },
        {
          text: "Resilienza Infracheck".toUpperCase(),
          align: "center",
          value: "resilienza",
          sortable: true,
          class: "primary lighten-4 white--text",
          width: 30,
        },
        {
          text: "Owner CI".toUpperCase(),
          align: "center",
          value: "owner",
          sortable: true,
          class: "primary lighten-4 white--text",
          width: 20,
        },
      ];
    },
  },
};
</script>

<style scoped>
.headerFont {
  font-size: 20px;
}
</style>
