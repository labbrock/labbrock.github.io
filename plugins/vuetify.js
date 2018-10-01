import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: '#79B791',
    secondary: colors.grey.darken1,
    login: '#263238',
    accent: colors.shades.black,
    error: colors.red.accent3
  }
})
