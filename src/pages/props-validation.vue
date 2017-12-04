<template>
  <div>
    		<headermain>
				  <span slot="headerTitle">Vue Tutorials-Props Validation</span>
		    </headermain>

		<v-container grid-list-md >
			<v-layout row wrap>
				<v-flex xs12>

 					<h3>Validating the props to ensure they are being sent to the child</h3>	
						<v-text-field	class="input-group--focused" v-model="parentToChild"></v-text-field>
					<div class="parent">
							<p>This is the parent</p>
							<appPropValidationChild :name="parentToChild"></appPropValidationChild>
					</div>
<p>
	Parent
<pre>
&#60;appPropValidationChild :name="parentToChild"> &#60;/appPropValidationChild>
</pre>		
</p>	
<p>Child</p>	
<pre>
	props: {
		name:{
			type: String,
			required: true,
			default: "This is the default text, overide it by ensuring you include the "
	}
</pre>				
					<p>
						In this example, the prop type is set to be a string, it's required and a default value is added in case the user forgets to add one.
					</p>
					<p> 
						If a developer forgets to include the required prop when they add the component they will get a console error message explaining this requirement.					
						This is great when creating re-usable components as it is possible to clearly define what is and is not absolutely essential and helps stricter 
						control over what types of prop can be accepted if this is something that the developer would like to do.
					</p>
				</v-flex>
			</v-layout>


			<v-layout row wrap>
				<v-flex xs5  >
					<div>
						<a href="https://github.com/dirkteucher/vue-tutorial-site/blob/master/src/pages/props-validation.vue" target="_blank">
							<v-btn color="green white--text">GET CODE- props-validation.vue</v-btn>
						</a>
						<a href="https://github.com/dirkteucher/vue-tutorial-site/blob/master/src/pages/props-validation-child.vue" target="_blank">
							<v-btn color="green white--text">GET CODE- props-validation-child.vue</v-btn>
						</a>

					</div>
				</v-flex>
			</v-layout>

		</v-container>
  </div>
</template>

<script>
import PropValidationChild from './props-validation-child.vue';
export default {
	name: 'parent',
	components: {
		appPropValidationChild: PropValidationChild
	},
  data () {
    return {
	  parentToChild: 'Message from parent'
    }
  }
}
</script>


<style scoped>
	.parent {
		background-color:#bdffe1;
		color: black;
		padding: 50px;

	}


</style>