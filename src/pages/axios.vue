<template>
  <div>
		<headermain>
				<span slot="headerTitle">Vue Tutorials - Axios</span>
		</headermain>

		<v-container grid-list-md >
			<v-layout row wrap>
				<v-flex xs6 sm12>
                     <h3>Check out the Axios docs </h3>
					<p class="blue-grey darken-2 white--text">
                        <a class="blue lighten-1--text" href="https://www.npmjs.com/package/axios" target="_blank">
                            https://www.npmjs.com/package/axios
                        </a>
                    </p>

                    <h3>And then take a look at this dummy json data that we are going to use </h3>
                    <p class="blue-grey darken-2 white--text">
                        
                        <a class="blue lighten-1--text" href="https://jsonplaceholder.typicode.com/users" target="_blank">
                            https://jsonplaceholder.typicode.com/users
                        </a> 
                    </p>

					<h3>Next, install Axios with NPM</h3>
                    <p class="blue-grey darken-2 white--text">npm install axios --save</p>

                    <h3>Import axios inside the script tag of the .vue file you working in</h3>
                    <p class="blue-grey darken-2 white--text">import axios from 'axios';</p>

                    <h3>Get some data </h3>
                    <p class="blue-grey darken-2 white--text">
<pre>
    getData(){
            var localScope = this;
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then(function (response) {
                localScope.fetchedJsonData = response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
    }
</pre>
                    </p>

                    <h3>Add a list to display the data that is returned </h3>
                    <p class="blue-grey darken-2 white--text">
<pre>
        &#60;li v-for="data in fetchedJsonData" v-text="data.name"></li>
</pre>
                    </p>
                    
				</v-flex>
			</v-layout>


			<v-layout row wrap>
				<v-flex xs5>
					<div>		
                        <v-btn color="blue white--text" v-on:click="getData()">Get data</v-btn>
					</div>
				</v-flex>
			</v-layout>


			<v-layout row wrap>
				<v-flex xs5>
					<div>		
                       <ul>
                           <li v-for="data in fetchedJsonData" v-text="data.name"></li>
                       </ul>
					</div>
				</v-flex>
			</v-layout>


			<v-layout row wrap>
				<v-flex xs5>
					<div>
						<a href="https://github.com/dirkteucher/vue-tutorial-site/blob/master/src/pages/axios.vue" target="_blank">
							<v-btn color="green white--text">Get CODE: axios.vue</v-btn>
						</a>

					</div>
				</v-flex>
			</v-layout>

		</v-container>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'default',
  data () {
    return {
	  fetchedJsonData: []
    }
  },
  methods: {
      getData(){
            var localScope = this;
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then(function (response) {
                localScope.fetchedJsonData = response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
      }
  }
}
</script>