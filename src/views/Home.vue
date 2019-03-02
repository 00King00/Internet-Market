<template lang="pug">
.home
	v-card.text-sm-left
		v-card-text Title
	v-container(fluid grid-list-md :class="{'px-0': $vuetify.breakpoint.xsOnly}")
		v-layout(wrap)
			v-flex(xs6 md4 lg3 v-for="(product, index) in products" :key="`product${index}`")
				v-card
					v-card-text
						.product
							.product__stripe(v-if="product.stripe")
								img(:src="product.stripe" alt="foto")
							v-btn(flat fab absolute right )
								v-icon favorite_border
							.product__img
								a(href="#")
									img(:src="product.img" alt="foto")
							.product__name(href="#")
								| {{product.name}}
							.product__text.hidden-xs-only {{product.text}}
							v-layout
								.product__price {{product.price}} $
								v-spacer
								v-btn(color="warning")
									v-icon() add_shopping_cart
									span.hidden-sm-and-down В корзину
</template>
<script>
export default {
  name: 'home',
	data(){
		return{
			products: [
				{
					stripe:"@/assets/images/new_item.png",
					img: "./assets/images/box_01.png",
					name: "Бокс автомобильный Евродеталь Эклипс 300",
					text: "Максимально увеличивает объем. Водонепроницаемая. Плечевой ремень и ручки.",
					price: 1100	
				},
				{
					stripe: null,
					img: "assets/images/box_02.png",
					name: "Бокс автомобильный Евродеталь Эклипс 500",
					text: "Максимально увеличивает объем. Водонепроницаемая. Плечевой ремень и ручки.",
					price: 2400	
				},
				{
					stripe:"@/assets/images/new_item.png",
					img: "assets/images/box_03.png",
					name: "Грузовой бокс HAPRO Traxer 6.6 Silver Grey HP 25903",
					text: "Максимально увеличивает объем. Водонепроницаемая. Плечевой ремень и ручки.",
					price: 850	
				},
				{
					stripe: "@/assets/images/sale.png",
					img: "@/assets/images/box_04.png",
					name: "Грузовой бокс HAPRO Traxer 6.6 Silver Grey HP 25903",
					text: "Максимально увеличивает объем. Водонепроницаемая. Плечевой ремень и ручки.",
					price: 500	
				},
				{
					stripe: null,
					img: "@/assets/images/box_05.png",
					name: "Бокс автомобильный Евродеталь Эклипс 300",
					text: "Максимально увеличивает объем. Водонепроницаемая. Плечевой ремень и ручки.",
					price: 1666	
				},
				{
					stripe:"@/assets/images/new_item.png",
					img: "@/assets/images/box_01.png",
					name: "Бокс автомобильный Евродеталь Эклипс 300",
					text: "Максимально увеличивает объем. Водонепроницаемая. Плечевой ремень и ручки.",
					price: 1100	
				},
				{
					stripe: null,
					img: "@/assets/images/box_02.png",
					name: "Бокс автомобильный Евродеталь Эклипс 500",
					text: "Максимально увеличивает объем. Водонепроницаемая. Плечевой ремень и ручки.",
					price: 2400	
				},
				{
					stripe:"@/assets/images/new_item.png",
					img: "@/assets/images/box_03.png",
					name: "Грузовой бокс HAPRO Traxer 6.6 Silver Grey HP 25903",
					text: "Максимально увеличивает объем. Водонепроницаемая. Плечевой ремень и ручки.",
					price: 850	
				},
				{
					stripe: "@/assets/images/sale.png",
					img: "@/assets/images/box_04.png",
					name: "Грузовой бокс HAPRO Traxer 6.6 Silver Grey HP 25903",
					text: "Максимально увеличивает объем. Водонепроницаемая. Плечевой ремень и ручки.",
					price: 500	
				},
				{
					stripe: null,
					img: "@/assets/images/box_05.png",
					name: "Бокс автомобильный Евродеталь Эклипс 300",
					text: "Максимально увеличивает объем. Водонепроницаемая. Плечевой ремень и ручки.",
					price: 1666	
				},
				{
					stripe:"@/assets/images/new_item.png",
					img: "@/assets/images/box_01.png",
					name: "Бокс автомобильный Евродеталь Эклипс 300",
					text: "Максимально увеличивает объем. Водонепроницаемая. Плечевой ремень и ручки.",
					price: 1100	
				},
				{
					stripe: null,
					img: "@/assets/images/box_02.png",
					name: "Бокс автомобильный Евродеталь Эклипс 500",
					text: "Максимально увеличивает объем. Водонепроницаемая. Плечевой ремень и ручки.",
					price: 2400	
				},
				{
					stripe:"@/assets/images/new_item.png",
					img: "@/assets/images/box_03.png",
					name: "Грузовой бокс HAPRO Traxer 6.6 Silver Grey HP 25903",
					text: "Максимально увеличивает объем. Водонепроницаемая. Плечевой ремень и ручки.",
					price: 850	
				},
				{
					stripe: "@/assets/images/sale.png",
					img: "@/assets/images/box_04.png",
					name: "Грузовой бокс HAPRO Traxer 6.6 Silver Grey HP 25903",
					text: "Максимально увеличивает объем. Водонепроницаемая. Плечевой ремень и ручки.",
					price: 500	
				},
				{
					stripe: null,
					img: "@/assets/images/box_05.png",
					name: "Бокс автомобильный Евродеталь Эклипс 300",
					text: "Максимально увеличивает объем. Водонепроницаемая. Плечевой ремень и ручки.",
					price: 1666	
				},
				
			]

		}
	},
	methods:{

	}

}
</script>
<style scoped lang="sass">
.v-btn.v-btn--absolute
	top: 0px
a
	color: #007bff
	text-decoration: none
	padding: 0 10px
	font-size: 1rem
	&:hover
		color: #0056b3
ul
	padding-left: 40px
</style>
