<template>
  <div>
    		<headermain>
				  <span slot="headerTitle">Vue Tutorials-Dynamic components</span>
		    </headermain>

		<v-container grid-list-md >
			<v-layout row wrap>
				<v-flex xs12>

					<p>Select which component you would like to dynamically load into this page.</p>
						<v-btn color="blue white--text" @click="selectedComponent='axios'">Axios</v-btn>
						<v-btn color="blue white--text" @click="selectedComponent='refs'">Refs</v-btn>
						<v-btn color="blue white--text" @click="selectedComponent='componentsExample'">Component Example</v-btn>
						<keep-alive><!--Keep alive stops the component from being deystroyed when navigating away.-->
								<component :is="selectedComponent"></component>
						</keep-alive>
				</v-flex>
			</v-layout>

			<v-layout row wrap>
				<v-flex xs5>
					<div>
						<a href="https://github.com/dirkteucher/vue-tutorial-site/blob/master/src/pages/dynamic-components.vue" target="_blank">
							<v-btn color="green white--text">GET CODE- dynamic-components.vue</v-btn>
						</a>

					</div>
				</v-flex>
			</v-layout>

		</v-container>
  </div>
</template>

<script>
import axios from '../pages/axios.vue'
import refs from '../pages/refs.vue'
import componentsExample from '../pages/components.vue'

export default {
  name: 'default',
  data () {
    return {
				titleText: 'Default text',
				selectedComponent: ''
    }
	},
	components: {
		axios: axios,
		refs: refs,
		componentsExample: componentsExample
	}
}
</script>