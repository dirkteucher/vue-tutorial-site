<template>
  <div>

		<v-container grid-list-md >
			<v-layout row wrap>
				<v-flex xs12>

					<div class="child">
							<p>This is the child and prop: {{name}}</p>
					</div>

				</v-flex>
			</v-layout>


		</v-container>
  </div>
</template>

<script>
export default {
	name: 'propsValidationChild',
	props: {
		name:{
			type: String,
			required: true,
			default: "This is the default text, overide it by ensuring you include the "
	}
	},
  data () {
    return {
	  message: ''
    }
  }
}
</script>

<style scoped>
	.child {
		background-color: red;
	}
</style>