export default {
  namespaced: true,

  state: () => ({
    api_config: {
      apihost: "",
      api_key: "",
    },
  }),
  mutations: {
    SET_SIDEDRAWER(state, value) {
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
