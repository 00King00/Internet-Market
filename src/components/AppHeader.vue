<template lang='pug'>
nav
	v-layout(row, wrap justify-center)
		v-dialog(v-model='login_dialog',  max-width='800px')
			v-card
				v-toolbar(dark color="primary")
					v-toolbar-title Login
				v-card-text
					v-container(grid-list-md)
						v-form
							v-layout(wrap)
								v-flex(xs12 align-content-start)
									div.text-sm-left Please fill out the following fields to login:
								v-flex(xs12)
									v-text-field(label='Email*', v-model="email" required)
								v-flex(xs12)
									span
									v-text-field(label='Password*', v-model="password" type='password', required)
								v-flex(xs12)
									v-checkbox(v-model="checkbox" label="Remember Me")
				v-card-actions
					v-spacer
					v-btn(color='blue darken-1', flat, @click='login_dialog = false') Close
					v-btn(color='blue darken-1', flat, @click='onSubmit') Submit
		v-dialog(v-model='signup_dialog',  max-width='800px')
			v-card
				v-toolbar(dark color="primary")
					v-toolbar-title Sign up
				v-card-text
					v-container(grid-list-md)
						v-form
							v-layout(wrap)
								v-flex(xs12)
									div.text-sm-left Please fill out the following fields to signup:
								v-flex(xs12)
									v-text-field(label='Email*', v-model="email" required)
								v-flex(xs12)
									span
									v-text-field(label='Password*', v-model="password" type='password', required)
				v-card-actions
					v-spacer
					v-btn(color='blue darken-1', flat, @click='signup_dialog = false') Close
					v-btn(color='blue darken-1', flat, @click='onSubmit') Submit
	v-navigation-drawer(v-model='drawer', :mini-variant="mini",  mobile-break-point="960" dark  app hide-overlay)
		v-list.pa-1
			v-list-tile( avatar to='/')
				v-list-tile-title Internet-Matket
		v-divider(light)
		v-list.pt-0(dense)
			v-list-tile(v-for='(item, index) in side_bar_menu', :key='`side_bar_menu_${index}`', :to='item.path')
				v-list-tile-action
					v-icon {{ item.icon }}
				v-list-tile-content
					v-list-tile-title {{ item.title }}
	v-toolbar(app )
		v-toolbar-side-icon.hidden-sm-and-down(v-if="logging" @click.stop='mini = !mini')
		v-toolbar-side-icon.hidden-md-and-up(v-if="logging" @click.stop='onNavShow')
		v-toolbar-title Internet-Matket
		v-spacer
		v-toolbar-items
			v-btn(flat @click='signup_dialog = true') Signup
			v-btn(flat @click='login_dialog = true') Login
			v-btn(flat fav)
				v-badge(color="transparent" lg)
					span(slot="badge") 0
					v-icon  shopping_cart
			
</template>

<script>
export default {
name: 'AppHeader',
data(){
	return {
		logging: true,
		login_dialog: false,
		signup_dialog:false,
		email: "",
		password:"",
		checkbox: false,
		drawer: true,
		mini: false,
		side_bar_menu: [
			{ title: 'Home', icon: 'home', path: '/'},
			{ title: 'Cart', icon: 'shopping_cart', path: '/cart'},
			{ title: 'Website settings', icon: 'bug_report', path: '/website-settings'},
			{ title: 'Other page', icon: 'edit', path: '/other'},
			{ title: 'Support groups', icon: 'contact_support', path: '/support-groups'},
		],
		drop_power_menu: [
			{ title: 'Click Me' },
			{ title: 'Click Me' },
			{ title: 'Click Me' },
			{ title: 'Click Me 2' }
		],
		country_menu:[
			{ title: 'country_menu' },
			{ title: 'country_menu' },
			{ title: 'country_menu' },
			{ title: 'country_menu 2' }
		]

	}
},
methods:{
	onSubmit(){
	},
	onNavShow(){
		this.mini= false
		this.drawer = !this.drawer
	}
}

}
</script>
<style scoped lang="sass">
/* .sidebar.flex
	//flex: initial */
.v-badge__badge
	top: -4px
.v-btn
	min-width: 60px
.header
	height: 100%
.pl-12
	padding-left: 12px
</style>
