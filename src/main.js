import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueYouTubeEmbed from 'vue-youtube-embed'
import vueSignature from "vue-signature"

Vue.config.productionTip = false

Vue.use(VueYouTubeEmbed)
Vue.use(vueSignature)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
