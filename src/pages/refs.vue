<template>
  <div>
    		<headermain>
				  <span slot="headerTitle">Vue Tutorials- $refs</span>
		    </headermain>

		<v-container grid-list-md >
			<v-layout row wrap>
				<v-flex xs12>
					<h1> $refs</h1>

					<h3 ref="storeThisAsReference">Get the content of a html element using $refs</h3>

					<v-btn color="blue white--text" v-on:click="getText()">GET inner text </v-btn>
					{{textTakenFromRef}}				
				</v-flex>
			</v-layout>

			<v-layout row wrap>
				<v-flex xs5  >
					<div>
						<a href="https://github.com/dirkteucher/vue-tutorial-site/blob/master/src/pages/refs.vue" target="_blank">
							<v-btn color="green white--text">GET CODE- refs.vue </v-btn>
						</a>

					</div>
				</v-flex>
			</v-layout>
			<iframe height='265' scrolling='no' title='vuejs $refs access html elements' src='//codepen.io/dirkteucher/embed/qVMEbj/?height=265&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/dirkteucher/pen/qVMEbj/'>vuejs $refs access html elements</a> by Dirk Teucher (<a href='https://codepen.io/dirkteucher'>@dirkteucher</a>) on <a href='https://codepen.io'>CodePen</a></iframe>
		</v-container>
  </div>
</template>

<script>

export default {
  name: 'default',
  data () {
    return {
	  default: "",
    textTakenFromRef: ""
    }
	},
	methods: {
    getText: function(){
      var getText = this.$refs.storeThisAsReference.innerText;
      this.textTakenFromRef = getText;
      console.log(this.$refs);
    }
  }
}


</script>