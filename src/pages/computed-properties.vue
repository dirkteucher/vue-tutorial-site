<template>
  <div>
		<headermain></headermain>

		<v-container grid-list-md >
			<v-layout row wrap>
				<v-flex xs12>
					<h1> Computed properties, filtering through an object.</h1>

					<h3>List all the food types</h3>
					<ul>
						<li v-for="foodItem in food" v-text="foodItem.food"></li>
					</ul>
					<h3>List only the fruit using COMPUTED PROPERTIES</h3>
					<ul>
						<li v-for="foodItem in filterListDisplayOnlyFruit" v-text="foodItem.food"></li>
					</ul>
				</v-flex>
			</v-layout>



			<v-layout row wrap>
				<v-flex xs6>
					<p class="blue-grey darken-2 white--text"> 
						The same outcome as above can also be completed using methods, filters, mixins and the mounted component 
						lifecycle. It depends on what you want to do. 
					</p>
					<p class="blue-grey darken-2 white--text">
						Computed caches the data and will be faster to use in some cases.
					</p>
					<p class="blue-grey darken-2 white--text">
						For an even greater controll over performance you can use a watcher which includes a debounce method to determine
						how often something like a data variable should be watched for a change. <br/>
						This is useful for autocomplete in a text input for example and is similar to a recursive setTimeout().
					</p class="blue-grey darken-2 white--text">
				</v-flex>
			</v-layout>



			<v-layout row wrap>
				<v-flex xs5  >
					<div>
						<a href="https://github.com/dirkteucher/vue-tutorial-site/blob/master/src/pages/computed-properties.vue" target="_blank">
							<v-btn color="green white--text">Get CODE: computed-properties.vue </v-btn>
						</a>
					</div>
				</v-flex>
			</v-layout>

		</v-container>
  </div>
</template>

<script>
export default {
  name: 'computed-properties',
  data () {
    return {
		message: '',
		food: [
			{food: 'apple' , typeOfFood: "fruit"},
			{food: 'orange' , typeOfFood: "fruit"},
			{food: 'cake' , typeOfFood: "baked"},
			{food: 'orange juice' , typeOfFood: ""},
			{food: 'bread' , typeOfFood: ""},
			{food: 'cachew nuts' , typeOfFood: "nut"},
			{food: 'fig' , typeOfFood: "fruit"},
			{food: 'milk' , typeOfFood: "drink"},
			{food: 'broccoli' , typeOfFood: "vegetable"},
		]
		}
	},
		computed: {
				filterListDisplayOnlyFruit() {
					return this.food.filter(typeOfFood => typeOfFood.typeOfFood === "fruit")
				}
		},
		mounted: function(){
				
		}
}
</script>