<template>
  <v-app id="inspire">
    <v-app-bar color="secondary" flat extended>
      <v-container class="py-0 fill-height">
        <v-avatar class="mr-10" color="grey darken-1" size="36" tile>
          <img :src="require('./assets/logo.jpg')" alt="ENI" />
        </v-avatar>

        <v-responsive max-width="400"
          ><h1>ICT Availability portal name</h1></v-responsive
        >
        <v-spacer></v-spacer>
        <app-bar-menu-user></app-bar-menu-user>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-4" style="margin-top: -64px">
      <v-container max-height="calc(100vh - 88px)">
        <perfect-scrollbar ref="scroll">
          <router-view />
        </perfect-scrollbar>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {
    AppBarMenuUser: () => import("@/components/AppBarMenuUser"),
  },
  watch: {
    $route() {
      this.$refs.scroll.$el.scrollTop = 0;
    },
  },
};
</script>

<style>
html {
  overflow: hidden !important;
}
</style>
