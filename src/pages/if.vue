<template>
  <div>
    		<headermain>
				  <span slot="headerTitle">Vue Tutorials- If/Else + v-show</span>
		    </headermain>

		<v-container grid-list-md >
			<v-layout row wrap>
				<v-flex xs12>
 					<h1>IF/ELSE</h1>	
                     <h3>Attach and detach html elements based on the truthiness of data variable</h3>
                    <p v-if="show">You can see me! <span>Hello!</span></p>
                    <p v-else>Now you see me!</p>
                    <template v-if="show">
                        <h3>This heading shown if show=true</h3>
                        <p>Inside a template</p>
                    </template>
    
                    <v-btn 
                        color="blue white--text" 
                        @click="show = !show">
                            Switch
                    </v-btn>
				</v-flex>
			</v-layout>

			<v-layout row wrap>
				<v-flex xs12>
                    <h1>v-show</h1>	
 					<h3>v-show="displayShowHide" or hide html elements based on logic and by using display:none</h3>	
                    <p v-show="displayShowHide">You can see me and I will always be available in the dom even when hidden!</p>
   					<v-btn 
                        color="blue white--text" 
                        @click="show = !show; displayShowHide = !displayShowHide">
                            Switch
                    </v-btn>
				</v-flex>
                 <iframe height='265' scrolling='no' title='vuejs if ' src='//codepen.io/dirkteucher/embed/MOBNmy/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/dirkteucher/pen/MOBNmy/'>vuejs if </a> by Dirk Teucher (<a href='https://codepen.io/dirkteucher'>@dirkteucher</a>) on <a href='https://codepen.io'>CodePen</a></iframe>
			</v-layout>

			<v-layout row wrap>
				<v-flex xs5  >
					<div>
						<a href="https://github.com/dirkteucher/vue-tutorial-site/blob/master/src/pages/if.vue" target="_blank">
							<v-btn color="green white--text">GET CODE- if.vue</v-btn>
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
      show: 'true',
      displayShowHide: 'true'
    }
  }
}
</script>