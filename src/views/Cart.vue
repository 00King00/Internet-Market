<template lang="pug">
v-container
	v-layout(align-content-space-between)
		v-flex(sm2 )
			img(src="/assets/images/box_01.png")
		v-flex(sm6)
			v-card
				v-card-title.font-weight-black.title Бокс автомобильный Евродеталь Эклипс 300
		v-flex(sm1)
			v-card
				v-layout(justify-center align-center)
					v-card-title.warning--text.font-weight-bold.title.px-0 1100 $
		v-flex(sm2)
			v-card
				v-layout(justify-space-around align-center)
					v-flex
						v-btn.mx-1(fab small color="warning")
							v-icon add
					v-flex
						span.font-weight-bold.title 2
					v-flex
						v-btn.mx-1(fab small color="warning")
							v-icon remove

		v-flex(sm1)
			v-card
				v-layout(justify-center align-center)
					v-card-title.warning--text.font-weight-bold.title.px-0 1100 $


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
