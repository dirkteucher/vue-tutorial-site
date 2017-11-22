<template>
  <div>
		<headermain></headermain>

		<v-container grid-list-md >
            <!-- Example 1 -->
			<v-layout row wrap>
				<v-flex xs12>
					<h1> This is how you loop through data and attach it to the dom</h1>
                    <h3>Example 1</h3>
                    <ul>
                        <li v-for="name in names">{{name}}</li>
                    </ul>
				</v-flex>
			</v-layout>

            <!-- Example 2 -->
            <v-layout row wrap>
				<v-flex xs12>
                    <h3>Example 2 (v-text)</h3>
                    <ul>
                        <li v-for="name in names" v-text="name"></li>
                    </ul>
				</v-flex>
			</v-layout>

            <!-- Example 3 -->
            <v-layout row wrap>
				<v-flex xs12>
                    <h3>Example 3 (Append to the list)</h3>
                    <ul>
                        <li v-for="food in fruit" v-text="food"></li>
                    </ul>
              		<v-text-field	class="input-group--focused" v-model="fruitInput"></v-text-field>
                    <v-btn color="blue white--text" v-on:click="addFruit()">Add fruit</v-btn>
				</v-flex>
			</v-layout>

			<v-layout row wrap>
				<v-flex xs5  >
					<div>
						<a href="https://github.com/dirkteucher/vue-tutorial-site/blob/master/src/pages/loops.vue" target="_blank">
							<v-btn color="blue white--text">CODE - loops.vue</v-btn>
						</a>

					</div>
				</v-flex>
			</v-layout>

		</v-container>
  </div>
</template>

<script>
export default {
  name: 'loops',
  data () {
    return {
      names: ["Tesla", "SpaceX", "Spaceship One"],
      fruit: ["Apple", "Banana", "Cherry"],
      fruitInput: ""
    }
  },
  methods:{
      addFruit(){
        this.fruit.push(this.fruitInput);
        this.fruitInput = "";
      }
  }
}
</script>