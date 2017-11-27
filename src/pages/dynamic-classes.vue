<template>
  <div>
		<headermain>
				<span slot="headerTitle">Vue Tutorials- Computed CSS</span>
		</headermain>

		<!--First example-->
		<v-container grid-list-md >
			<v-layout row wrap>
				<v-flex xs12>
 					<h3>Change the color in the input box to see the class name change, accepted inputs are red, green, blue</h3>
						<div class="box" :class="[color]"></div>
						<v-text-field	class="input-group--focused" v-model="color">red</v-text-field>
				</v-flex>
			</v-layout>

			<!--Second example-->
			<v-layout row wrap>
				<v-flex xs12>
 					<h3>Click the red box below to toggle the color with computed methods (Complex CSS class management possible this way)</h3>
						<div class="box" @click="changeColor = !changeColor" :class="divClasses"></div>
					
					

				</v-flex>
			</v-layout>


			<v-layout row wrap>
				<v-flex xs5  >
					<div>
						<a href="https://github.com/dirkteucher/vue-tutorial-site/blob/master/src/pages/dynamic-classes.vue" target="_blank">
							<v-btn color="green white--text">GET THIS CODE- dynamic-classes.vue </v-btn>
						</a>

					</div>
				</v-flex>
			</v-layout>
			<h3>Another example in codepen</h3>
				
			<iframe height='265' scrolling='no' title='vuejs dynamic classes' src='//codepen.io/dirkteucher/embed/aVjgWz/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/dirkteucher/pen/aVjgWz/'>vuejs dynamic classes</a> by Dirk Teucher (<a href='https://codepen.io/dirkteucher'>@dirkteucher</a>) on <a href='https://codepen.io'>CodePen</a></iframe>

		</v-container>
  </div>
</template>

<script>
export default {
  name: 'default',
  data () {
    return {
		color: 'red',
		changeColor: true
    }
	},
	computed: {
		divClasses: function(){
			return {
				red: this.changeColor,
				blue: !this.changeColor
			}
		}
	}
}
</script>

<style>
.box {
	width:200px;
	height: 200px;
	background-color: grey;
}
.red {
		background-color:red;
}

.blue {
		background-color:blue;
}
.green {
	background-color:green;
}
</style>
