import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'vuetify/dist/vuetify.min.css'
import '@/assets/sass/main.sass'
import Vuetify from 'vuetify'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies);
Vue.use(Vuetify);
Vue.prototype.$bus = new Vue({
	data: {
		cardCountProduct: 0,
		cartProduct: [],
	}
});
Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
