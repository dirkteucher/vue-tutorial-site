<template>
  <div>
    		<headermain>
				  <span slot="headerTitle">Vue Tutorials- Lists</span>
		    </headermain>

		<v-container grid-list-md >
			<v-layout row wrap>
				<v-flex xs12>
					<h1> Example 1</h1>
 					<h3>Looping over a list and pushing data into the array.</h3>	


					<ul>
						<li v-for="(ingredient, i) in ingredients" :key="ingredient">{{ ingredient }} ({{ i }})</li>
					</ul>
					<v-btn color="blue white--text" @click="ingredients.push('spices')">Add new spice</v-btn>
					<hr>
  				<h1> Example 2</h1>
					 <h3>If you would like to create a loop without data do this:</h3>
					<span v-for="n in 10">{{ n }}</span>		
			
				</v-flex>
			</v-layout>

			<v-layout row wrap>
				<v-flex xs5  >
					<div>
						<a href="https://github.com/dirkteucher/vue-tutorial-site/blob/master/src/pages/lists.vue" target="_blank">
							<v-btn color="green white--text">GET THIS CODE- lists.vue </v-btn>
						</a>

					</div>
				</v-flex>
			</v-layout>

			<iframe height='265' scrolling='no' title='vuejs lists and push' src='//codepen.io/dirkteucher/embed/OOwKeJ/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/dirkteucher/pen/OOwKeJ/'>vuejs lists and push</a> by Dirk Teucher (<a href='https://codepen.io/dirkteucher'>@dirkteucher</a>) on <a href='https://codepen.io'>CodePen</a></iframe>

		</v-container>
  </div>
</template>

<script>
export default {
  name: 'default',
  data () {
    return {
			ingredients: ['meat', 'fruit', 'cookies']
    }
  }
}
</script>