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

console.log(
  "ENV: ",
  process.env.VUE_APP_KEYCLOAK_INIT_URL,
  " ",
  EnvProvider.value("KEYCLOAK_INIT_URL")
);

let initOptions = {
  url: EnvProvider.value("KEYCLOAK_INIT_URL"),
  realm: EnvProvider.value("KEYCLOAK_REALM"),
  clientId: EnvProvider.value("KEYCLOAK_CLIENTID"),
  onLoad: EnvProvider.value("KEYCLOAK_ONLOAD"),
};

let keycloak = Keycloak(initOptions);

keycloak
  .init({ onLoad: initOptions.onLoad })
  .then((auth) => {
    if (!auth) {
      console.log("Not logged!");
      window.location.reload();
    } else {
      console.log("I'm in logged! ", auth);
      console.info("Authenticated: ", keycloak.token);
      keycloak
        .loadUserProfile()
        .then(function (profile) {
          console.log("USER: ", profile.username, " ", profile.email);

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
            console.info("Token refreshed" + refreshed);
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
