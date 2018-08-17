<template>
  <div>
    		<headermain>
				  <span slot="headerTitle">Vue Tutorials-Animation simple</span>
		    </headermain>

		<v-container grid-list-md >
			<v-layout row wrap>
				<v-flex xs12>
 					<h3>Animations</h3>
					<v-btn color="blue white--text" @click="slideAnimation = !slideAnimation">Lets toggle animation</v-btn>
					<transition name="slideAnimation">
						<p class="slideAnimation" v-if="slideAnimation">
							Transitioning in
						</p>					
					</transition>
					
				
				</v-flex>
			</v-layout>

			<v-layout row wrap>
				<v-flex xs5  >
					<div>
						<a href="https://github.com/dirkteucher/vue-tutorial-site/blob/master/src/pages/animation-simple.vue" target="_blank">
							<v-btn color="green white--text">GET CODE- animation-simple.vue </v-btn>
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
	animation: slide-in 1s ease-out forwards;
}

.slideAnimation-leave{

}

.slideAnimation-leave-active {
	animation: slide-out 0.5s ease-out forwards;
}



@keyframes slide-in {
	0%{
		transform: translateY(20px);
		opacity: 0;
	}
	100%{
		transform: translateY(0px);
		opacity: 1;
	}
}
@keyframes slide-out {
	0%{
		transform: translateY(0px);
	}
	100%{
		transform: translateY(20px);
		opacity:0;
	}
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