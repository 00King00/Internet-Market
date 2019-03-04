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
		let cookies = this.$cookies.get('cookiesCartProduct');
		if(cookies.hasOwnProperty('0') && this.$bus.$data.cartProduct.length<1){
			for (let key in cookies){
				let products = this.$bus.$data.cartProduct;
				products.push(cookies[key])
				this.$bus.$data.cartProduct = products;
			}
			console.log('take data from cookies');
			console.log(this.cartProduct);
			return
		}else{
			this.cartProduct = this.$bus.$data.cartProduct
			let cookiesCartProduct = {};
			this.cartProduct.map((p, i)=> {
				cookiesCartProduct[i] = p
			});
			this.$cookies.set('cookiesCartProduct', cookiesCartProduct);
		}





	},
	methods:{

	}

}
</script>
<style scoped lang="sass">

</style>
