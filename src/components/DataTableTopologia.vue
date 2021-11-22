<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    class="elevation-1 mt-2"
    dense
    fixed-header="true"
    :loading="loading"
    loading-text="Caricamento... Attendere, per favore."
    multi-sort
  >
    <!-- <template v-slot:header.name="{ header }">
      {{ header.text.toUppercase() }}
    </template> -->
    <!-- <template v-slot:header="{ header }">
      {{ header.text.toUpperCase() }}
    </template> -->
  </v-data-table>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    headers: [
      {
        text: "Nome nodo",
        align: "start",
        value: "name",
      },
      { text: "Lifecycle", value: "lifecycle" },
      { text: "Location", value: "location" },
      { text: "Is Virtual", value: "virtual" },
      { text: "Resilienza Infracheck", value: "resilienza" },
      { text: "Owner CI", value: "owner" },
    ],
    desserts: [
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
        name: "02srv00asd",
        lifecycle: "in use",
        location: "CAGE-A",
        virtual: "true",
        resilienza: "SI",
        owner: "CC_PAAS_HS_SYS_LINUXUNIX",
      },
    ],
  }),
};
</script>

<style></style>
