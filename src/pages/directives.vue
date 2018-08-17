<template>
  <div>
    		<headermain>
				  <span slot="headerTitle">Vue Tutorials-Directives</span>
		    </headermain>

		<v-container grid-list-md >
			<v-layout row wrap>
				<v-flex xs12>
					<h1>Built in directives:</h1>
					<p v-text="'Some text'"></p>
					<p v-html="'<strong>Some strong text</strong>'"></p>
				
					<p class="blue-grey darken-2 white--text">
<pre>
&#60;p v-text="'Some text'">&#60;/p>
&#60;p v-html="'<strong>Some strong text</strong>'">&#60;/p>
</pre>
						</p>					
				</v-flex>
			</v-layout>


			<v-layout row wrap>
				<v-flex xs12>
					<h1>
						Custom global directives:
					</h1>
					<!--
							To create a custom directive, just add the directive in main.js. 
							This attaches the directive to the VueJS instance.

							Then you can attach it to HTML elements as seen in the P tag below.
					-->
					<!-- <p v-highlight="'blue'">Color this</p> -->


					<!--Or use a Vue data variable-->
					<p v-highlight="aVueJsVariable">Color this</p>

				</v-flex>
			</v-layout>


			<v-layout row wrap>
				<v-flex xs12>
					<h1>
						Custom local directives:
					</h1>
					<p v-local-highlight="aVueJsVariable">Color this local directive</p>
				</v-flex>
			</v-layout>


			<v-layout row wrap>
				<v-flex xs5  >
					<div>
						<a href="https://github.com/dirkteucher/vue-tutorial-site/blob/master/src/pages/directives.vue" target="_blank">
							<v-btn color="green white--text">GET CODE- DIRECTIVES.VUE</v-btn>
						</a>
						<a href="https://github.com/dirkteucher/vue-tutorial-site/blob/master/src/main.js" target="_blank">
							<v-btn color="green white--text">GET CODE- main.js</v-btn>
						</a>

					</div>
				</v-flex>
			</v-layout>

		</v-container>
  </div>
</template>

<script>
export default {
	directives:{'local-highlight': {
		bind(el, binding, vnode){
			// This is to hard code a value that will not need to be changed 
			// EG: <p v-highlight></p>
			//el.style.backgroundColor = 'green';

			// This is to allow custom content to be included inside the HTML tag and v-highlight attribute 
			// EG: <p v-highlight="aVueDataVariable"></p>
			el.style.backgroundColor = binding.value;
		}
	}
},
  name: 'default',
  data () {
    return {
	  aVueJsVariable: 'grey'
    }
  }
}
</script>