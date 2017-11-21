<template>
  <div>
       <headermain></headermain>

	<v-container grid-list-md >
		<v-layout row wrap>
			<v-flex xs12>
				<h1> As you type into the input box below the message will update.</h1>
				<div>
					{{ message }}
				</div>
				<div>
					 <v-text-field	class="input-group--focused" v-model="message"></v-text-field>
				</div>
			</v-flex>
		</v-layout>

		<v-layout row wrap>
			<v-flex xs5>	
				<div>
					<p>
						This is particularly powerful because the data is stored inside the message variable and can be accesed at any time.
						It is a little bit like having global variables except that they are contained within this single vue file. This is
						how a component based approach to development works with VueJS.
					</p>
				</div>

				<a class="light-blue--text" href="#" target="_blank">TODO - Check out the code link to declarative-rendering.vue on github after commit</a>
			</v-flex>
		</v-layout>
	</v-container>
  </div>
</template>

<script>
export default {
  name: 'declarative-rendering',
  data () {
    return {
      message: ''
    }
  }, mounted: function(){

  }
}
</script>