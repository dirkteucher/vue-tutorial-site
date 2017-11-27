<template>
  <div>
		<headermain>
				<span slot="headerTitle">Vue Tutorials - Loops</span>
		</headermain>

		<v-container grid-list-md >
            <!-- Example 1 -->
			<v-layout row wrap>
				<v-flex xs12>
					<h1> Example 1 (Loop through an array and add fruit data to the array)</h1>
                    <h3>Notice the index of the array next to Tesla, SpaceX and Spaceship One</h3>
                    <ul>
                        <li v-for="(name, index) in names">{{name}} ({{index}})</li>
                    </ul>
				</v-flex>
			</v-layout>

            <!-- Example 2 -->
            <v-layout row wrap>
				<v-flex xs12>
                    <h3>Example 2 (v-text)</h3>
                    <ul>
                        <li v-for="name in names" v-text="name"></li>
                    </ul>
				</v-flex>
			</v-layout>

            <!-- Example 3 -->
            <v-layout row wrap>
				<v-flex xs12>
                    <h3>Example 3 (Append to the list)</h3>
                    <ul>
                        <li v-for="food in fruit" v-text="food"></li>
                    </ul>
              		<v-text-field	class="input-group--focused" v-model="fruitInput"></v-text-field>
                    <v-btn color="blue white--text" v-on:click="addFruit()">Add fruit</v-btn>
				</v-flex>
			</v-layout>

			<v-layout row wrap>
				<v-flex xs5  >
					<div>
						<a href="https://github.com/dirkteucher/vue-tutorial-site/blob/master/src/pages/loops.vue" target="_blank">
							<v-btn color="green white--text">Get CODE - loops.vue</v-btn>
						</a>

					</div>
				</v-flex>
			</v-layout>

            <v-layout row wrap>
				<v-flex xs12  >
                    <h1> Example 2 (Loop through an object)</h1>
					<div>
						<iframe height='265' scrolling='no' title='vuejs loop through objects' src='//codepen.io/dirkteucher/embed/YEOKaz/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/dirkteucher/pen/YEOKaz/'>vuejs loop through objects</a> by Dirk Teucher (<a href='https://codepen.io/dirkteucher'>@dirkteucher</a>) on <a href='https://codepen.io'>CodePen</a></iframe>
					</div>
				</v-flex>
			</v-layout>

		</v-container>
  </div>
</template>

<script>
export default {
  name: 'loops',
  data () {
    return {
      names: ["Tesla", "SpaceX", "Spaceship One"],
      fruit: ["Apple", "Banana", "Cherry"],
      fruitInput: ""
    }
  },
  methods:{
      addFruit(){
        this.fruit.push(this.fruitInput);
        this.fruitInput = "";
      }
  }
}
</script>