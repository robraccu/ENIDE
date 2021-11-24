import Vue from "vue";
import Vuex from "vuex";
import loginModule from "@/store/modules/login.js";
import apiModule from "@/store/modules/api.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { loginModule, apiModule },
});
