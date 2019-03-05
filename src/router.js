import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Cart from '@/views/Cart.vue'
import Other from '@/views/Other.vue'
import SupportGroups from '@/views/SupportGroups.vue'
import WebsiteSettings from '@/views/WebsiteSettings.vue'
Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/cart',
			name: 'cart',
			component: Cart
		},
		{
			path: '/other',
			name: 'other',
			component: Other
		},
		{
			path: '/support-groups',
			name: 'support-groups',
			component:SupportGroups
		},
		{
			path: '/website-settings',
			name: 'website-settings',
			component: WebsiteSettings
		},
	]
})
