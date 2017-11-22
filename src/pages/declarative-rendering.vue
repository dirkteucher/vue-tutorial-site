<template>
  <div>
		<headermain></headermain>

		<v-container grid-list-md >
			<v-layout row wrap>
				<v-flex xs12>
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
	  message: ''
    }
  }
}
</script>