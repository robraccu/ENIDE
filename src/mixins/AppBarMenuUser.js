import Keycloak from "keycloak-js";
import { mapGetters } from "vuex";

export default {
  methods: {
    ...mapGetters("loginModule", ["getUser", "getEmail", "getKeycloakConfig"]),
    logout() {
      this.keycloack.init({
        onLoad: this.initOptions.onLoad,
        promiseType: "native",
        checkLoginIframeInterval: 200,
      });
      this.keycloack.logout();
    },
    openProfile() {
      window.open(
        this.initOptions.url + "/realms/" + this.initOptions.realm + "/account/"
      );
    },
  },
  computed: {
    user: {
      get() {
        return this.getUser();
      },
    },
    email: {
      get() {
        return this.getEmail();
      },
    },
    initOptions: {
      get() {
        return this.getKeycloakConfig();
      },
    },
    keycloack: {
      get() {
        return new Keycloak(this.initOptions);
      },
    },
  },
};
