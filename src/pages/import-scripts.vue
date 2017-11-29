<template>
  <div>
    		<headermain>
				  <span slot="headerTitle">Vue Tutorials- Importing local scripts into a page or component</span>
		    </headermain>

		<v-container grid-list-md >
			<v-layout row wrap>
				<v-flex xs12>

					<p class="test">This is how you can attach a script and ensure that it is run each time the page/component is created.
					</p>
					<p>Where possible if an external script needs to be added this should be done with NPM where possible or included in 
						the webpack buil process.</p>
						<p>The method shown here should be avoided but may be useful in some circumstances.</p>

				
						<p class="blue-grey darken-2 white--text">
<pre>
  name: 'default',
  data () {
    return {
	  message: ''
    }
	},
	created() {
    let alertScript = document.createElement('script');
    alertScript.setAttribute('src', './src/lib/alert.js');
    document.head.appendChild(alertScript);
  }
}
</pre>
						</p>					
				</v-flex>
			</v-layout>

			<v-layout row wrap>
				<v-flex xs5  >
					<div>
						<a href="https://github.com/dirkteucher/vue-tutorial-site/blob/master/src/pages/import-scripts.vue" target="_blank">
							<v-btn color="green white--text">GET CODE- import-scripts.js</v-btn>
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
	  message: ''
    }
	},
	created() {
    let alertScript = document.createElement('script');
    alertScript.setAttribute('src', './src/lib/alert.js');
    document.head.appendChild(alertScript);
  }
}
</script>