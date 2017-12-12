<template>
  <div>
    		<headermain>
				  <span slot="headerTitle">Vue Tutorials-Transitions</span>
		    </headermain>

		<v-container grid-list-md >
			<v-layout row wrap>
				<v-flex xs12>
 					<h3>Transitioning</h3>
					<v-btn color="blue white--text" @click="slideAnimation = !slideAnimation">Lets toggle animation</v-btn>
					<transition name="slideAnimation">
						<p class="slideAnimation" v-if="slideAnimation">Transitioning</p>
					</transition>
					
				
				</v-flex>
			</v-layout>

			<v-layout row wrap>
				<v-flex xs5  >
					<div>
						<a href="https://github.com/dirkteucher/vue-tutorial-site/blob/master/src/pages/transition-simple.vue" target="_blank">
							<v-btn color="green white--text">GET CODE- transition-simple.vue </v-btn>
						</a>

					</div>
				</v-flex>
			</v-layout>

		</v-container>
  </div>
</template>


<style>

.slideAnimation {
	/*Set the initial CSS state of the element before and after any enter animation occurs*/
	/*These styles will be applied AFTER the enter-active transition has run*/
	
	background-color: purple;
	color: #fff;
	opacity: 1;
	padding: 5px;
}

.slideAnimation-enter {
		/*Animate from these styles into those contained within enter-active*/
		opacity:0;
		background-color:red;
}

.slideAnimation-enter-active{
		transition: all 2s;
		background-color: blue;
}

.slideAnimation-leave{
	/*Set the initial state of element before any leave animation occurs*/
	background-color: blue;
	opacity: 1;
	color: #fff;
}

.slideAnimation-leave-active {
		transition: all 2s;
		background-color: black;
		opacity: 0;
		color: #fff;
}
</style>

<script>
export default {
  name: 'default',
  data () {
    return {
		message: '',
		slideAnimation: false
    }
  }
}
</script>