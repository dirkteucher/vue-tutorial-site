<template>
  <div>
    		<headermain>
				  <span slot="headerTitle">Vue Tutorials-Animation simple</span>
		    </headermain>

		<v-container grid-list-md >
			<v-layout row wrap>
				<v-flex xs12>
 					<h3>Dynamic Animations</h3>
				
					<select v-model="alertAnimation">
						<option value="slideAnimationClass">Slide</option>
						<option value="someOtherCSS">Fade</option>
					</select>
					<v-btn color="blue white--text" @click="slideAnimation = !slideAnimation">Start </v-btn>
					<transition :name="alertAnimation" mode="in-out">
						<p  v-if="slideAnimation">
							Select slide in or slide out
						</p>
					</transition>
					
				
				</v-flex>
			</v-layout>

			<v-layout row wrap>
				<v-flex xs5  >
					<div>
						<a href="https://github.com/dirkteucher/vue-tutorial-site/blob/master/src/pages/animation-dynamic.vue" target="_blank">
							<v-btn color="green white--text">GET CODE- animation-dynamic.vue </v-btn>
						</a>

					</div>
				</v-flex>
			</v-layout>

		</v-container>
  </div>
</template>


<style>

.slideAnimationClass {
	/*Set the initial CSS state of the element before and after any enter animation occurs*/
	/*These styles will be applied AFTER the enter-active transition has run*/
	
	background-color: purple;
	color: #fff;
	opacity: 1;
	padding: 5px;
}

.slideAnimationClass-enter {
		/*Animate from these styles into those contained within enter-active*/
		opacity:0;
		background-color:red;
}

.slideAnimationClass-enter-active{
	animation: slide-in 1s ease-out forwards;
}

.slideAnimationClass-leave{

}

.slideAnimationClass-leave-active {
	animation: slide-out 0.5s ease-out forwards;
}



@keyframes slide-in {
	0%{
		transform: translateY(20px);
	}
	100%{
		transform: translateY(0px);
	}
}
@keyframes slide-out {
	0%{
		transform: translateY(0px);
	}
	100%{
		transform: translateY(20px);
	}
}





.someOtherCSS {
	/*Set the initial CSS state of the element before and after any enter animation occurs*/
	/*These styles will be applied AFTER the enter-active transition has run*/
	
	background-color: purple;
	color: #fff;
	opacity: 1;
	padding: 5px;
}

.someOtherCSS-enter {
		/*Animate from these styles into those contained within enter-active*/
		opacity:0;
		background-color:red;
}

.someOtherCSS-enter-active{
	animation: slide-in-otherCSS 1s ease-out forwards;
}

.someOtherCSS-leave{

}

.someOtherCSS-leave-active {
	animation: slide-out-otherCSS 0.5s ease-out forwards;
}



@keyframes slide-in-otherCSS {
	0%{
		opacity: 0;
	}
	100%{
		opacity: 1;
	}
}
@keyframes slide-out-otherCSS {
	0%{
		opacity: 1;
	}
	100%{
		opacity:0;
	}
}


select {
    border: 1px solid black;
    padding: 5px;
    width: 100px;
    box-shadow: 1px 1px 1px black;
    outline: none;
}

</style>

<script>
export default {
  name: 'default',
  data () {
    return {
		message: '',
		slideAnimation: false,
		alertAnimation: "slideAnimationClass"
    }
  }
}
</script>