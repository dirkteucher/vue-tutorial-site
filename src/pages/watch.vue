<template>
  <div>
    		<headermain>
				  <span slot="headerTitle">Vue Tutorials- Watch</span>
		    </headermain>

		<v-container grid-list-md >
			<v-layout row wrap>
				<v-flex xs12>
				 <h3>Watch a variable for changes.</h3>
				<h3>If we want Vue to execute a method when it has detected a change in the state of a variable we use "watch".</h3>

				{{myNumber}}
				<v-btn class="blue white--text" v-on:click="incrementMyNumber">Primary</v-btn>
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
			<iframe height='265' scrolling='no' title='vuejs watchers' src='//codepen.io/dirkteucher/embed/bYjPvj/?height=265&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/dirkteucher/pen/bYjPvj/'>vuejs watchers</a> by Dirk Teucher (<a href='https://codepen.io/dirkteucher'>@dirkteucher</a>) on <a href='https://codepen.io'>CodePen</a></iframe>

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