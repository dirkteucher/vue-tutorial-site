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
				
						<p class="blue-grey darken-2 white--text">
<pre>
&#60;input type="text"  v-model="color">
</pre>
						</p>
						<div class="box" :class="[color]"></div>
					<v-text-field	class="input-group--focused" v-model="color">red</v-text-field>

				</v-flex>
			</v-layout>



<!--Second example-->
			<v-layout row wrap>
				<v-flex xs12>
 					<h3>Click the red box below to toggle the color with computed methods (Complex CSS class management possible this way)</h3>	
				
						<p class="blue-grey darken-2 white--text">
<pre>
&#60;div class="box" @click="changeColor = !changeColor" :class="divClasses">&#60;/div>
</pre>
						</p>
						<div class="box" @click="changeColor = !changeColor" :class="divClasses"></div>
		<h3>JS Logic</h3>	
						<p  class="blue-grey darken-2 white--text">
<pre>
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
</pre>

						</p>
				</v-flex>
			</v-layout>


			<v-layout row wrap>
				<v-flex xs5  >
					<div>
						<a href="https://github.com/dirkteucher/vue-tutorial-site/blob/master/src/pages/dynamic-classes.vue" target="_blank">
							<v-btn color="green white--text">GET CODE- dynamic-classes.vue </v-btn>
						</a>

					</div>
				</v-flex>
			</v-layout>



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
