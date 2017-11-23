<template>
  <div>
		<headermain>
				<span slot="headerTitle">Vue Tutorials - Declarative rendering</span>
		</headermain>

		<v-container grid-list-md >
			<v-layout row wrap>
				<v-flex xs12>

				<h3>Attach a data variable called message using the vue template </h3>
				<p class="blue-grey darken-2 white--text">
<pre>
	&#123; &#123; message }}
</pre>
				</p>


				<h3>Then add v-model"message" as an attribute to an input field.</h3>
				<p class="blue-grey darken-2 white--text">
					This will keep track of the data as it changes.
<pre>
			&#60;v-text-field	class="input-group--focused" v-model="message"></v-text-field>
</pre>
				</p>


					<h1> As you type into the input box below the message will update.</h1>
					<div>
						{{ message }}
					</div>
					<div>
						<v-text-field	class="input-group--focused" v-model="message"></v-text-field>
					</div>
				</v-flex>
			</v-layout>

			<v-layout row wrap>
				<v-flex xs5  >
					<div>
						<a href="https://github.com/dirkteucher/vue-tutorial-site/blob/master/src/pages/declarative-rendering.vue" target="_blank">
							<v-btn color="green white--text">Get Code: declarative-rendering.vue</v-btn>
						</a>

					</div>
				</v-flex>
			</v-layout>

		</v-container>
  </div>
</template>

<script>
export default {
  name: 'declarative-rendering',
  data () {
    return {
	  message: 'message'
    }
  }
}
</script>