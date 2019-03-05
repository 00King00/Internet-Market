<template lang="pug">
	v-app
		app-header
		v-content
			router-view
			app-footer

</template>
<script>
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
import firebase from 'firebase/app'
import 'firebase/auth'
const config = {
    apiKey: "AIzaSyDB8NVDv8B_p7o3O7dn8H_fnW9uRihW6kc",
    authDomain: "internet-market-57800.firebaseapp.com",
    databaseURL: "https://internet-market-57800.firebaseio.com",
    projectId: "internet-market-57800",
    storageBucket: "internet-market-57800.appspot.com",
    messagingSenderId: "291349801799"
  };
  firebase.initializeApp(config);

export default{
	data(){
		return{

		}
	},
	components:{
		AppHeader,
		AppFooter
	},
	created(){
	},
	methods:{

	}
}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
