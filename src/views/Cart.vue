<template lang="pug">
.cart
	v-container(max-width='1100' :class="{'px-0': $vuetify.breakpoint.xsOnly}" )
		v-layout.grey.lighten-4.hidden-md-and-down(justify-start align-center wrap)
			v-flex(lg2)
			v-flex(lg6)
				.font-weight-regular.subheading.text--grey.lighten-5.text-xs-center.px-4.py-3 Наименование
			v-flex(lg1)
				.font-weight-regular.subheading.text--grey.lighten-5.text-xs-center.px-4.py-3 Цена$
			v-flex(lg2)
				.font-weight-regular.subheading.text--grey.lighten-5.text-xs-center.px-4.py-3 Количество
			v-flex(lg1)
				.font-weight-regular.subheading.text--grey.lighten-5.text-xs-left.py-3 Сумма $
			v-flex(xs12)
				v-alert(:value="Products.length==0" color="info" icon="info" outline) Корзина пустая пошалуста выберете товар.
		v-alert.hidden-lg-and-up(:value="Products.length==0" color="info" icon="info" outline) Корзина пустая пошалуста выберете товар.
		v-layout(align-content-space-between wrap align-center color="white" v-for="(product, index) in Products" :key="`product${index}`").mb-2.border
			v-flex(xs12)
				v-layout(justify-end)
					v-btn( small fab flat @click="deleteProduct(index)")
						v-icon(absolute color="warning") close
			v-flex.px-2( xs3 lg2 )
				img(:src="product.img")
			v-flex(xs9 lg6)
				.font-weight-black.title-name {{product.name}}
			v-flex(xs12).py-2.hidden-lg-and-up
				v-divider
			v-flex( xs3 lg1)
				v-layout(justify-center align-center wrap)
					v-flex(xs12).hidden-lg-and-up
						.subheading.text--grey.lighten-5 Цена
					v-flex(xs12)
						.warning--text.font-weight-bold.title.px-0.px-3 {{product.price}}
			v-flex( xs6 lg2)
				v-layout(justify-center align-center wrap)
					v-flex.subheading.text--grey.lighten-5(xs12).hidden-lg-and-up Количество
					v-flex(xs12)
						v-layout(justify-center align-center)
							v-flex( shrink="0")
								v-btn.mx-1(fab small color="warning" @click="addQuantity(index)")
									v-icon add
							v-flex(shrink="0")
								span.font-weight-bold.title.px-3 {{product.quantity}}
							v-flex(shrink="0")
								v-btn.mx-1(fab small color="warning"  @click="minusQuantity(index)" :disabled="product.quantity==0")
									v-icon remove
			v-flex( xs3 lg1)
				v-layout(justify-center align-center wrap)
					v-flex(xs12).hidden-lg-and-up
						.subheading.text--grey.lighten-5 Сумма
					v-flex(xs12)
						.warning--text.font-weight-bold.title.px-0.px-3 {{product.quantity * product.price}}
		v-layout(align-content-space-between align-center color="white").mb-2
			v-btn(color="warning" @click.native="deleteAll") remove cart
			v-spacer
			.total Total: {{total}} $
		v-layout(justify-center align-center color="white").mb-2
			v-btn(color="success" large :disabled="cartProduct.length==0") Заказать
</template>
<script>
export default {
  name: '',
	data(){
		return{
			cartProduct: [],
			total: 0,

		}
	},
	computed:{
		Products(){
			this.total = 0;
			this.cartProduct = this.$bus.$data.cartProduct
			this.cartProduct.map(p=>{this.total += p.quantity*p.price})
			return this.cartProduct
		},
	},
	created(){
		let cookies = this.$cookies.get('cookiesCartProduct');
		console.log(cookies);
		if(cookies && this.$bus.$data.cartProduct.length<1){
			for (let key in cookies){
				let products = this.$bus.$data.cartProduct;
				products.push(cookies[key])
				this.$bus.$data.cartProduct = products;
			}
			console.log('take data from cookies');
			return
		}else{
			this.cartProduct = this.$bus.$data.cartProduct
			if(this.cartProduct.length<1){
				this.$cookies.remove('cookiesCartProduct');
				console.log('remove cookies');
				return
			}
			let cookiesCartProduct = {};
			this.cartProduct.map((p, i)=> {
				cookiesCartProduct[i] = p
			});
			this.$cookies.set('cookiesCartProduct', cookiesCartProduct);

		}
	},
	methods:{
		addQuantity(index){
			this.$bus.$data.cartProduct[index].quantity++ ;
			let cookiesCartProduct = {};
			this.cartProduct.map((p, i)=> {
				cookiesCartProduct[i] = p
			});
			this.$cookies.set('cookiesCartProduct', cookiesCartProduct);
			console.log(this.$bus.$data.cartProduct[index].quantity)
		},
		minusQuantity(index){
			this.$bus.$data.cartProduct[index].quantity-- ;
				let cookiesCartProduct = {};
				this.cartProduct.map((p, i)=> {
					cookiesCartProduct[i] = p
				});
				this.$cookies.set('cookiesCartProduct', cookiesCartProduct);
			console.log(this.$bus.$data.cartProduct[index].quantity)
		},
		deleteAll(){
			this.$bus.$data.cartProduct = [];
			this.total = 0;
			this.$cookies.remove('cookiesCartProduct');
			console.log('delete cookies');
		},
		deleteProduct(index){
			console.log('delet');
			this.$bus.$data.cartProduct.splice(index, 1);
			console.log(this.$bus.$data.cartProduct);
			if(this.$bus.$data.cartProduct.length<1){
				this.$cookies.remove('cookiesCartProduct');
				console.log('delete cookies');
				return
			}
			this.cartProduct = this.$bus.$data.cartProduct
			let cookiesCartProduct = {};
			this.cartProduct.map((p, i)=> {
				cookiesCartProduct[i] = p
			});
			this.$cookies.set('cookiesCartProduct', cookiesCartProduct);

		}
	}

}
</script>
<style scoped lang="sass">
.cart
	height: 100%
.container
	max-width: 1100px
.border
	border: 1px solid orange
.title-name
	font-size: 20px
	@media screen and (max-width: 600px)
		font-size: 16px
.total
	font-size: 36px
	font-weight: bold
	@media screen and (max-width: 600px)
		font-size: 16px
		font-weight: bold

</style>
