import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";
import PerfectScrollbar from "vue2-perfect-scrollbar";
import "vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css";

import Keycloak from "../node_modules/keycloak-js/";
import EnvProvider from "jvjr-docker-env";

Vue.use(PerfectScrollbar);

Vue.config.productionTip = false;

store.state.apiModule.api_config.api_host = EnvProvider.value("API_HOST");
store.state.apiModule.api_config.api_key = EnvProvider.value("API_KEY");

let initOptions = {
  url: EnvProvider.value("KEYCLOAK_INIT_URL"),
  realm: EnvProvider.value("KEYCLOAK_REALM"),
  clientId: EnvProvider.value("KEYCLOAK_CLIENTID"),
  onLoad: EnvProvider.value("KEYCLOAK_ONLOAD"),
};
store.state.loginModule.keycloak_config = initOptions;
let keycloak = Keycloak(initOptions);

keycloak
  .init({ onLoad: initOptions.onLoad })
  .then((auth) => {
    if (!auth) {
      console.log("Not logged!");
      window.location.reload();
    } else {
      store.state.loginModule.token = keycloak.token;
      keycloak
        .loadUserProfile()
        .then(function (profile) {
          store.state.loginModule.username = profile.username;
          store.state.loginModule.email = profile.email;

          new Vue({
            router,
            store,
            vuetify,
            PerfectScrollbar,
            render: (h) => h(App, { props: { keycloak: keycloak } }),
          }).$mount("#app");
        })
        .catch(function () {
          alert("Failed to load user profile");
        });
    }

    //Token Refresh
    setInterval(() => {
      keycloak
        .updateToken(20000)
        .then((refreshed) => {
          if (refreshed) {
            console.info("Token refreshed " + refreshed);
            store.state.loginModule.token = keycloak.token;
          } else {
            console.warn(
              "Token not refreshed, valid for " +
              Math.round(
                keycloak.tokenParsed.exp +
                keycloak.timeSkew -
                new Date().getTime() / 1000
              ) +
              " seconds"
            );
          }
        })
        .catch(() => {
          console.error("Failed to refresh token");
        });
    }, 6000);
  })
  .catch((e) => {
    console.error("Keycloak Authentication error", e);
  });
