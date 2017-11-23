<template>
  <div>
		<headermain>
				<span slot="headerTitle">Vue Tutorials - Binding attributes</span>
		</headermain>

		<v-container grid-list-md >
			<v-layout row wrap>
				<v-flex xs12>
                    <h3>1) Bind the title of the button with v-bind</h3>

				
                    <p class="blue-grey darken-2 white--text">
    <pre>
    &#60;button class="blue white--text" v-bind:title="title">Hover over me &#60;/button>
    </pre>
                    </p>

					<v-btn 
                        color="blue white--text" 
                        v-bind:title="title">
                            Hover over me
                    </v-btn>
				</v-flex>
			</v-layout>

            <v-layout row wrap>
				<v-flex xs12>
                    <h3>2) Bind a class to this button and toggle it with a click event</h3>
                    <p class="blue-grey darken-2 white--text">
    <pre>
    &#60;button class="blue white--text" :class="className">Simple class binding&#60;/button>
    </pre>
                    </p>
					<v-btn 
                        color="white--text" 
                        :class="className">
                            Simple class binding   
                    </v-btn>
				</v-flex>
			</v-layout>


            <v-layout row wrap>
				<v-flex xs12>
                    <h3>3) Toggle the button color with a boolean</h3>
                    <p class="blue-grey darken-2 white--text">
    <pre>
    &#60;button 
        class="blue white--text" 
        v-on:click="toggleClass()" 
        :class="{'red': toggleRedAndBlue, 'blue': !toggleRedAndBlue}">
        Toggle button color 
    &#60;/button>
    </pre>
                    </p>

                    <p class="blue-grey darken-2 white--text">
    <pre>
  name: 'binding-attribute-classnames',
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
    </pre>
                    </p>



                    <p class="blue-grey darken-2 white--text">
    <pre>
.red-text {
    color: red;
}
.purple-text {
    color: rebeccapurple;
}
    </pre>
                    </p>

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
  name: 'binding-attribute-classnames',
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