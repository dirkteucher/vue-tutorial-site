<template>
  <div>
    		<headermain>
				  <span slot="headerTitle">Vue Tutorials- v-model , two way data binding</span>
		    </headermain>

		<v-container grid-list-md >
			<v-layout row wrap>
				<v-flex xs12>
          <h1>Two way data binding with v-model</h1>

					<p>If we want Vue to continuously keep an eye on a variable that might be used in multiple places
						in the app then we could use v-model="variable-name"
					</p>

				
						<p class="blue-grey darken-2 white--text">
<pre>
&#60;input type="text" v-model="name">
</pre>
						</p>


						<p class="blue-grey darken-2 white--text">
<pre>
export default {
  name: 'vModel',
  data () {
    return {
	  name: '{{name}}'
    }
  }
}
</script>
</pre>
						</p>


						{{name}}
						<v-text-field	class="input-group--focused" v-model="name"></v-text-field>

				</v-flex>
			</v-layout>

			<v-layout row wrap>
				<v-flex xs5  >
					<div>
						<a href="https://github.com/dirkteucher/vue-tutorial-site/blob/master/src/pages/v-model-2-way-binding.vue" target="_blank">
							<v-btn color="green white--text">Get CODE: v-model-2-way-binding</v-btn>
						</a>

					</div>
				</v-flex>
			</v-layout>

		</v-container>
  </div>
</template>

<script>
export default {
  name: 'vModel',
  data () {
    return {
	  name: 'This text can be updated automatically and dynamically'
    }
  }
}
</script>