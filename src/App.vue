<template>
  <v-app id="inspire">
    <v-app-bar color="secondary" flat extended>
      <v-container class="py-0 fill-height">
        <v-avatar class="mr-2" size="48" tile elevation="3">
          <img :src="require('./assets/Logo_ENI.svg')" alt="ENI" />
        </v-avatar>

        <v-responsive max-width="150"
          ><h1 class="text-left">VIRGILIO</h1></v-responsive
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
