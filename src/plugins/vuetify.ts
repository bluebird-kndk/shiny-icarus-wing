import Vue from 'vue';
import { colors } from 'vuetify/lib';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.lightBlue.lighten2,
        secondary: colors.lightBlue.darken2,
        accent: colors.pink.accent2,
        Vo: colors.pink.accent1,
        Da: colors.blue.accent2,
        Vi: colors.yellow.darken2,
      },
    },
  },
});
