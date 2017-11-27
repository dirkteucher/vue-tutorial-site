<template>
  <div>
    		<headermain>
				  <span slot="headerTitle">Vue Tutorials- components</span>
		    </headermain>

		<v-container grid-list-md >
			<v-layout row wrap>
				<v-flex xs12>
 					<h1>Codepen example</h1>
					 <h3> 
							The codepen code below is one example of how to create a template. However this is not the best approach to use. 
							Instead when developing a real world app, the preferred method of creating templates is to create separate .vue files 
							which contain your template + script + CSS in a neat modular approach.
						</h3>
						<h3>
							This component based approach to development is extremely powerfull and much like the react framework allows a team to 
							create re-usable components in an object oriented approach which is also similar to that of Angular but with less restrictions.
						</h3>
						<h5>
							Take a look at this header.vue component as a good example of how to create a component
						</h5>
						 	<a href="https://github.com/dirkteucher/vue-tutorial-site/blob/master/src/components/header.vue" target="_blank">
							<v-btn color="green white--text">header.vue </v-btn>
						</a>
					 <iframe height='265' scrolling='no' title='vuejs components' src='//codepen.io/dirkteucher/embed/OOoMxq/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/dirkteucher/pen/OOoMxq/'>vuejs components</a> by Dirk Teucher (<a href='https://codepen.io/dirkteucher'>@dirkteucher</a>) on <a href='https://codepen.io'>CodePen</a></iframe>			
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
	  message: ''
    }
  }
}
</script>