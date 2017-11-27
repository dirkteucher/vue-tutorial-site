<template>
  <div>
		<headermain>
				<span slot="headerTitle">Vue Tutorials - Declarative rendering</span>
		</headermain>

		<v-container grid-list-md >
			<v-layout row wrap>
				<v-flex xs12>

				<h3>Attach a data variable called message using the vue template </h3>
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
		<h3>Anothe codepen example</h3>
		<iframe height='265' scrolling='no' title='vuejs declarative rendering' src='//codepen.io/dirkteucher/embed/dZjBQW/?height=265&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/dirkteucher/pen/dZjBQW/'>vuejs declarative rendering</a> by Dirk Teucher (<a href='https://codepen.io/dirkteucher'>@dirkteucher</a>) on <a href='https://codepen.io'>CodePen</a></iframe>
		</v-container>
  </div>
</template>

<script>
export default {
  name: 'declarative-rendering',
  data () {
    return {
	  message: 'Change this text'
    }
  }
}
</script>