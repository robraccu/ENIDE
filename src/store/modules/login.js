export default {
  namespaced: true,

  state: () => ({
    username: "no name",
    email: "no mail",
    token: "",
    keycloak_config: "",
  }),
  mutations: {},
  actions: {},
  getters: {
    getUser: (state) => {
      return state.username;
    },
    getEmail: (state) => {
      return state.email;
    },
    getToken: (state) => {
      return state.token;
    },
    getKeycloakConfig: (state) => {
      return state.keycloak_config;
    },
  },
};
