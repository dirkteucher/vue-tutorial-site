<template>
  <div>

		<v-container grid-list-md >
			<v-layout row wrap>
				<v-flex xs12>

					<div class="child">
							<p>This is the child: {{name}}</p>
					</div>

				</v-flex>
			</v-layout>


		</v-container>
  </div>
</template>

<script>
export default {
	name: 'propsChild',
	props: ["name"],
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