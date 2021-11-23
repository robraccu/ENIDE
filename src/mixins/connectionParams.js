import { mapGetters } from "vuex";
export default {
  data() {
    return {
      apihost: "",
      headers: "",
    };
  },
  computed: {
    apiConf: {
      get() {
        return this.getApi();
      },
    },
    tokenKey: {
      get() {
        return this.getKeycloakToken();
      },
    },
  },
  created() {
    this.apihost = this.apiConf.apihost;
    this.opts = {
      headers: {
        Authorization: "Bearer " + this.tokenKey,
      },
    };
  },
  methods: {
    ...mapGetters("loginModule", ["getKeycloakToken"]),
    ...mapGetters("apiModule", ["getApi"]),
  },
};
