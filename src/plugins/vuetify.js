import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import it from "vuetify/lib/locale/it";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: "#333",
        secondary: "#fdd300",
        accent: "#444",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
      },
    },
  },
  lang: {
    locales: { it },
    current: "it",
  },
});
