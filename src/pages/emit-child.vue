<template>
  <div>

		<v-container grid-list-md >
			<v-layout row wrap>
				<v-flex xs12>

					<div class="child">
							<p>This is the child: {{name}}</p>
					<v-btn
					 	@click="updateParentProp()"
                        color="blue white--text" 
						>
                            Click to update parent "name" prop from the child component
                    </v-btn>

					</div>

				</v-flex>
			</v-layout>


		</v-container>
  </div>
</template>

<script>
export default {
	name: 'emitChild',
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
</script>

<style scoped>
	.child {
		background-color: red;
	}
</style>