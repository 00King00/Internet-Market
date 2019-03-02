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
export default{
	data(){
		return{

		}
	},
	components:{
		AppHeader,
		AppFooter
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
