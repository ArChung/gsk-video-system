import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueYouTubeEmbed from 'vue-youtube-embed'
import vueSignature from "vue-signature"
import BootstrapVue from 'bootstrap-vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'



Vue.component('font-awesome-icon', FontAwesomeIcon)



Vue.config.productionTip = false

Vue.use(VueYouTubeEmbed)
Vue.use(vueSignature)
Vue.use(BootstrapVue)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
