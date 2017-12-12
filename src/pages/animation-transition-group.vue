<template>
  <div>
    		<headermain>
				  <span slot="headerTitle">Vue Tutorials- Animation transition group</span>
		    </headermain>

		<v-container grid-list-md >
			<v-layout row wrap>
				<v-flex xs12>
 					<h3>Dynamic Animations</h3>
				 	<button class="btn btn-primary" @click="addItem">Add Item</button>
					<ul class="list-group">
						<transition-group name="slideAnimationClass">
							<li
									class="list-group-item"
									v-for="(number, index) in numbers"
									@click="removeItem(index)"
									style="cursor: pointer"
									:key="number">{{ number }}
							</li>
						</transition-group>
                	</ul>
				</v-flex>
			</v-layout>

			<v-layout row wrap>
				<v-flex xs5  >
					<div>
						<a href="https://github.com/dirkteucher/vue-tutorial-site/blob/master/src/pages/animation-transition-group.vue" target="_blank">
							<v-btn color="green white--text">GET CODE- animation-transition-group.vue </v-btn>
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
	position: absolute; /*Important*/
}

/*Important -- This is required in li groups to help with smooth animation*/
.slideAnimationClass-move {
	transition: transform 1s;
}



@keyframes slide-in {
	0%{
		transform: translateX(20px);
	}
	100%{
		transform: translateX(0px);
	}
}
@keyframes slide-out {
	0%{
		transform: translateX(0px);
	}
	100%{
		transform: translateX(20px);
	}
}

</style>

<script>
export default {
  name: 'default',
  data () {
    return {
		message: '',
		numbers: [1,2,3,4,5]
    }
  },
  methods: {
			addItem() {
                const pos = Math.floor(Math.random() * this.numbers.length);
                this.numbers.splice(pos, 0, this.numbers.length + 1);
            },
            removeItem(index) {
                this.numbers.splice(index, 1);
            }
  }
}
</script>