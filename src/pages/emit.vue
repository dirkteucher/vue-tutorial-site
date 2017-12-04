<template>
  <div>
    		<headermain>
				  <span slot="headerTitle">Vue Tutorials-Emit</span>
		    </headermain>

		<v-container grid-list-md >
			<v-layout row wrap>
				<v-flex xs12>

 					<h3>Communicate from child component to parent component</h3>	
						<v-text-field	class="input-group--focused" v-model="parentToChild"></v-text-field>
					<div class="parent">
							<p>This is the parent</p>
						<v-btn
					 	@click="parentToChild = 'updated text from parent'"
                        color="blue white--text" 
                        >
                            Click to change the parentToChild variable content in the parent and have it propogate down to the child.
                    </v-btn>
							<appPropChild :name="parentToChild" @nameWasReset="name = $event"></appPropChild>
					</div>
				
					<p>
						Parent
<pre>
&#60;appPropChild :name="parentToChild" @nameWasReset="name = $event"> &#60;/appPropChild>
</pre>		
					</p>	
					<p>Child</p>	
<pre>
export default {
	name: 'propsChild',
	props: ["name"],
	data () {
		return {
		message: ''
		}
	},
	methods:{
		updateParentProp(){
				this.name = "Message to parent from child and back to child again";
				this.$emit('nameWasResetEvent', this.name);
		}
	}
}
</pre>		


				</v-flex>
			</v-layout>


			<v-layout row wrap>
				<v-flex xs5  >
					<div>
						<a href="https://github.com/dirkteucher/vue-tutorial-site/blob/master/src/pages/emit.vue" target="_blank">
							<v-btn color="green white--text">GET CODE- emit.vue</v-btn>
						</a>
						<a href="https://github.com/dirkteucher/vue-tutorial-site/blob/master/src/pages/emit-child.vue" target="_blank">
							<v-btn color="green white--text">GET CODE- emit-child.vue</v-btn>
						</a>


					</div>
				</v-flex>
			</v-layout>

		</v-container>
  </div>
</template>

<script>
import PropChild from './emit-child.vue';
export default {
	name: 'parent',
	components: {
		appPropChild: PropChild
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