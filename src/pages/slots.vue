<template>
  <div>
		<headermain>
				<span slot="headerTitle">Vue Tutorials - Slots</span>
		</headermain>

		<v-container grid-list-md >

			<v-layout row wrap>
				<v-flex xs8>
					<h3>
						Here we will import the header component and slot custom information into it.
					</h3>
					<p class="blue-grey darken-2 white--text">
<pre>
&#60;headermain>
	&#60;span slot="headerTitle">Vue Tutorials - Slots</span>
&#60;/headermain>
</pre>
					</p>

				</v-flex>
			</v-layout>



			<v-layout row wrap>
				<v-flex xs12>
					<h3>Header</h3> 
					<headermain>
						<span slot="headerTitle">Vue Tutorials - Slots</span>
					</headermain>
				</v-flex>
			</v-layout>

			<v-layout row wrap>
				<v-flex xs8>
					<p class="blue-grey darken-2 white--text" >
						So now we can create components like a header that can be loaded in with one line of code and we can then 
						very easily slot custom	content into the component where ever we want. 
					</p>

					<p class="blue-grey darken-2 white--text" >
						This is very useful but it does mean we need to understand what content the component requires as not 
						including the slot information can cause issues in some cases. 
					</p>
					<p class="blue-grey darken-2 white--text" >
						Another way to achieve virtually the same thing is by using props.
					</p>
				</v-flex>
			</v-layout>

			<v-layout row wrap>
				<v-flex xs5  >
					<div>
						<a href="https://github.com/dirkteucher/vue-tutorial-site/blob/master/src/pages/slots.vue" target="_blank">
							<v-btn color="green white--text">Get CODE: slots.vue</v-btn>
						</a>
						<a href="https://github.com/dirkteucher/vue-tutorial-site/blob/master/src/components/header.vue" target="_blank">
							<v-btn color="green white--text">Get CODE: header.vue</v-btn>
						</a>
					</div>
				</v-flex>
			</v-layout>

		</v-container>
  </div>
</template>

<script>
export default {
  name: 'slots',
  data () {
    return {
	  message: ''
    }
  }
}
</script>