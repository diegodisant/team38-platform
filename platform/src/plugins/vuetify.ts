import '@mdi/font/css/materialdesignicons.css';
import Vue from 'vue';
// @ts-ignore
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
  },
  icons: {
    iconfont: 'mdi',
  },
});
