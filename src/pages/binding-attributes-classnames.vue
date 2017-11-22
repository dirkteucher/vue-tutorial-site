<template>
  <div>
		<headermain></headermain>

		<v-container grid-list-md >
			<v-layout row wrap>
				<v-flex xs12>
					<h1> Binding Attributes</h1>
                    <h3>Bind the title of the button with v-bind</h3>
					<v-btn 
                        color="blue white--text" 
                        v-bind:title="title">
                            Hover over me
                    </v-btn>
				</v-flex>
			</v-layout>

            <v-layout row wrap>
				<v-flex xs12>
                    <h3>Bind a class to this button and toggle it with a click event</h3>
					<v-btn 
                        color="white--text" 
                        :class="className">
                            Simple class binding   
                    </v-btn>
				</v-flex>
			</v-layout>


            <v-layout row wrap>
				<v-flex xs12>
                    <h3>Toggle the button color with a boolean</h3>
					<v-btn color="white--text" 
                        v-on:click="toggleClass()" 
                        :class="{'red': toggleRedAndBlue, 'blue': !toggleRedAndBlue}">
                            Toggle button color    
                    </v-btn>
				</v-flex>
			</v-layout>


			<v-layout row wrap>
				<v-flex xs5  >
					<div>
						<a href="https://github.com/dirkteucher/vue-tutorial-site/blob/master/src/pages/binding-attributes-classnames.vue" target="_blank">
							<v-btn color="green white--text">Get CODE: binding-attributes-classnames.vue</v-btn>
						</a>

					</div>
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
      title: 'This is a dynamically bound title attribute',
      className: "red",
      toggleRedAndBlue : true
    }
  },
  methods: {
      toggleClass(){
          this.toggleRedAndBlue = !this.toggleRedAndBlue;
      }
  }
}
</script>

<style>
.red-text {
    color: red;
}
.purple-text {
    color: rebeccapurple;
}
</style>