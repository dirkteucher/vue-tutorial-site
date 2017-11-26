<template>
  <div>
    		<headermain>
				  <span slot="headerTitle">Vue Tutorials-</span>
		    </headermain>

		<v-container grid-list-md >
			<v-layout row wrap>
				<v-flex xs12>
 					<h3>Example</h3>	

					<p>Example</p>

				
						<p class="blue-grey darken-2 white--text">
<pre>
&#60;input type="text">
</pre>
						</p>					
				</v-flex>
			</v-layout>

			<v-layout row wrap>
				<v-flex xs5  >
					<div>
						<a href="https://github.com/dirkteucher/vue-tutorial-site/blob/master/src/pages/declarative-rendering.vue" target="_blank">
							<v-btn color="green white--text">default</v-btn>
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
  }
}
</script>