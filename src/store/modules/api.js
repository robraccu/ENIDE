export default {
  namespaced: true,

  state: () => ({
    api_config: {
      api_host: "",
      api_key: "",
    },
  }),
  mutations: {
    SET_APIHOST(state, value) {
      if (value != undefined) return (state.apihost = value);
    },
  },
  actions: {
    setApiHost({ commit }, value) {
      commit("SET_APIHOST", value);
    },
  },
  getters: {
    getApi: (state) => {
      return state.api_config;
    },
  },
};
