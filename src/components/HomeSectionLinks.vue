<template>
  <v-container id="containerSection" class="d-flex align-center justify-center">
    <v-row class="d-flex flex-row justify-center align-center"
      ><v-col class="d-flex flex-column justify-center align-center">
        <v-card class="my-4 align-self-center">
          <v-list-item two-line>
            <v-list-item-avatar tile size="72" color="secondary"
              ><v-icon x-large color="primary"
                >mdi-view-dashboard-outline</v-icon
              ></v-list-item-avatar
            >
            <v-list-item-content>
              <v-list-item-title class="text-h5 mb-1">
                Schede Operative
              </v-list-item-title>
              <v-list-item-subtitle
                >Visualizzazione schede operative</v-list-item-subtitle
              >
            </v-list-item-content>
            <v-list-item-action>
              <v-btn
                rounded
                color="secondary"
                class="text--primary"
                elevation="0"
                to="/operatingcards"
              >
                apri
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-card>
        <v-card class="my-4" disabled>
          <v-list-item two-line>
            <v-list-item-avatar tile size="72" color="secondary"
              ><v-icon x-large color="primary"
                >mdi-toolbox-outline</v-icon
              ></v-list-item-avatar
            >
            <v-list-item-content>
              <v-list-item-title class="text-h5 mb-1">
                Vista BS in GDC
              </v-list-item-title>
              <v-list-item-subtitle
                >Mappa BS con dettalio vista del GDC</v-list-item-subtitle
              >
            </v-list-item-content>
            <v-list-item-action>
              <v-btn
                rounded
                color="secondary"
                class="text--primary"
                elevation="0"
              >
                apri
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-card>
        <v-card class="my-4" disabled>
          <v-list-item two-line>
            <v-list-item-avatar tile size="72" color="secondary"
              ><v-icon x-large color="primary"
                >mdi-clipboard-list-outline</v-icon
              ></v-list-item-avatar
            >
            <v-list-item-content>
              <v-list-item-title class="text-h5 mb-1">
                Piano Operativo
              </v-list-item-title>
              <v-list-item-subtitle
                >Generazione piano operativo per GDC</v-list-item-subtitle
              >
            </v-list-item-content>
            <v-list-item-action>
              <v-btn
                rounded
                color="secondary"
                class="text--primary"
                elevation="0"
              >
                apri
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
#containerSection {
  height: calc(100vh - 88px);
}
</style>
