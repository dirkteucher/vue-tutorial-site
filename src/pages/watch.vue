<template>
  <div>
    		<headermain>
				  <span slot="headerTitle">Vue Tutorials- Watch</span>
		    </headermain>

		<v-container grid-list-md >
			<v-layout row wrap>
				<v-flex xs12>
				 <h3>Watch a variable for changes.</h3>

					<p>If we want Vue to execute a method when it has detected a change in the state of a variable we use "watch".
					</p>

					{{myNumber}}
				  <v-btn class="blue white--text" v-on:click="incrementMyNumber">Primary</v-btn>
						<p class="blue-grey darken-2 white--text">
<pre>
&#60;v-btn  class="blue white--text"  v-on:click="incrementMyNumber">Primary &#60;/v-btn>
</pre>
						</p>


						<p class="blue-grey darken-2 white--text">
<pre>
export default {
  name: 'default',
  data () {
    return {
	  myNumber: 0
    }
	},
	methods: {
		incrementMyNumber: function(){
			// Increase the value of myNumber by 1 on each click
			this.myNumber = this.myNumber+1;
		}
	},
	watch:{
		myNumber: function(){
			// Wait 3 seconds and then set myNumber back to 0
			var localVue = this;
			setTimeout(function(){
				localVue.myNumber = 0;
			},3000)
		}
	}
}
</pre>
						</p>
					
				</v-flex>
			</v-layout>

			<v-layout row wrap>
				<v-flex xs5  >
					<div>
						<a href="https://github.com/dirkteucher/vue-tutorial-site/blob/master/src/pages/watch.vue.vue" target="_blank">
							<v-btn color="green white--text">GET CODE: watch.vue</v-btn>
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
	  myNumber: 0
    }
	},
	methods: {
		incrementMyNumber: function(){
			// Increase the value of myNumber by 1 on each click
			this.myNumber = this.myNumber+1;
		}
	},
	watch:{
		myNumber: function(){
			// Wait 3 seconds and then set myNumber back to 0
			var localVue = this;
			setTimeout(function(){
				localVue.myNumber = 0;
			},3000)
		}
	}
}
</script>