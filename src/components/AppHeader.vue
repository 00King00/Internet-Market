<template lang='pug'>
nav
	v-layout(row, wrap justify-center)
		v-dialog(v-model='success_dialog',  max-width='800px')
			v-toolbar(dark color="warning")
			v-card
				v-card-text Вітаємо ви залогінились
				v-card-actions
					v-spacer
					v-btn(color='blue darken-1', flat, @click='success_dialog = false') Close
		v-dialog(v-model='login_dialog',  max-width='800px')
			v-card
				v-toolbar(dark color="warning")
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
				v-toolbar(dark color="warning")
					v-toolbar-title Sign up
				v-form(ref='form').pa-4
					v-text-field(v-model='email', @change='validate', :rules='rules', prepend-icon='person', name='login', label='Email', type='text')
					v-text-field#password(v-model='password', @input='validatePassword', prepend-icon='lock', name='password', label='Password', type='password')
					v-text-field#repeat_password(v-model='repeat_password', @input='validatePassword', :rules='passwordRules', prepend-icon='lock', name='repeat_password', label='repeat password', type='password')
				v-card-text
					v-alert(type='error', v-model='alert', dismissible) {{errorMessage}}
				v-card-actions
					v-spacer
					v-btn(color='primary', @click='onSubmit', :disabled='!checkRegistration', :loading='loading') Registers
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
			v-btn(flat to='/cart')
				v-badge(color="warning")
					span(slot="badge" v-if="carQuantity") {{carQuantity}}
					v-icon(medium)  shopping_cart
</template>

<script>
import firebase from "firebase/app"
export default {
name: 'AppHeader',
data(){
	return {
		loading: false,
		logging: true,
		login_dialog: false,
		signup_dialog:false,
		success_dialog: false,
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
		email: '',
		password:"",
		repeat_password: "",
		rules:[],
		passwordRules:[],
		checkRegistration: false,
		errorMessage: null,
		alert: false
	}
},
computed:{
	carQuantity(){
		return this.$bus.$data.cartProduct.length
	}
},
methods:{
	onNavShow(){
		this.mini= false
		this.drawer = !this.drawer
	},
	validate() {
		this.rules = [(v) => !!v || 'E-mail is required',
			(v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
		];
	},
	validatePassword(){
		if(this.repeat_password.length === this.password.length && this.repeat_password.length >=6){
			this.passwordRules = [() => this.repeat_password == this.password  && this.password.length >= 6 || 'Password must be valid',
			() => this.repeat_password.length >= 6 || 'Password should be at least 6 characters'
		];
			if (this.$refs.form.validate()){
				this.checkRegistration= true
			}else{this.checkRegistration= false}
		}else{
			this.checkRegistration= false
		}

	},
	onSubmit(){
		if (this.$refs.form.validate()){
			const user = {
				email: this.email,
				password: this.password
			};
			firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
				.then(()=>{
					this.signup_dialog = false
					this.success_dialog = true

				}).catch((err)=>{
					this.errorMessage = err.message;
					this.alert = true
				})
		}
	},
}

}
</script>
<style scoped lang="sass">
/* .sidebar.flex
	//flex: initial */
.v-badge__badge
	top: -4px

.header
	height: 100%
.pl-12
	padding-left: 12px
</style>
