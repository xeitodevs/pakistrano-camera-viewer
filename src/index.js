import Vue from 'vue'
import router from './router'
import App from './App'

import 'assets/css/app.styl'
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VBtn,
  VIcon,
  VList,
  VToolbar,
  VTooltip,
  VFooter,
  VLayout,
  VListTile,
  VListTileAction,
  VContent,
  VContainer,
  VFlex
} from 'vuetify'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VIcon,
    VBtn,
    VList,
    VLayout,
    VListTile,
    VListTileAction,
    VToolbar,
    VContent,
    VContainer,
    VFlex,
    VTooltip,
    VFooter
  }
})

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
