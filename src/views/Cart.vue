<template lang="pug">
div
	h1 This is a Cart page
</template>
<script>
export default {
  name: '',
	data(){
		return{
			cartProduct: [],

		}
	},
	computed:{
		Products(){
			this.cartProduct = this.$bus.$data.cartProduct
		}
	},
	created(){
		this.cartProduct = this.$bus.$data.cartProduct
		console.log( this.cartProduct);
		let cookiesCartProduct = {};
		this.cartProduct.map((p, i)=> {
			cookiesCartProduct[i] = p
		});
		this.$cookies.set('cookiesCartProduct', cookiesCartProduct);
		console.log(this.$cookies.get('cookiesCartProduct'))

	},
	methods:{

	}

}
</script>
<style scoped lang="sass">

</style>
