<template>
  <div>
		<headermain>Vue Totorials- Filters</headermain>

		<v-container grid-list-md >
			<v-layout row wrap>
				<v-flex xs12>
					


				<h3>Filters are pretty simple, you simply define a data variable </h3> 
				<p class="blue-grey darken-2 white--text">
<pre>
data () {
	return {
		message: 1
	}
}
</pre>
				</p>

				<h3>And then pipe message into one or more filters (addTen, addSeven) (1+10+7 = 18) </h3>
				<p class="blue-grey darken-2 white--text">
				<pre>
					&#123; &#123; message | addTen | addSeven}}
				</pre>
				</p>
				{{message | addTen | addSeven }}
				</v-flex>
			</v-layout>

			<v-layout row wrap>
				<v-flex xs5  >
					<div>
						<a href="https://github.com/dirkteucher/vue-tutorial-site/blob/master/src/pages/filters.vue" target="_blank">
							<v-btn color="green white--text">Get CODE: filters.vue</v-btn>
						</a>

					</div>
				</v-flex>
			</v-layout>

		</v-container>
  </div>
</template>

<script>
	export default {
		name: 'filters',
		data () {
			return {
			message: 1
			}
		},
		filters: {
			addTen(value){
					return value+10;
			},
			addSeven(value){
					return value+7;
			}
		}
	}
</script>