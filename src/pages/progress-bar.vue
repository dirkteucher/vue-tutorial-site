<template>
  <div>
    		<headermain>
				  <span slot="headerTitle">Vue Tutorials- Progress Bar</span>
		    </headermain>

		<v-container grid-list-md >
			<v-layout row wrap>
				<v-flex xs12>
 					<h3>Setting style properties dynamically</h3>	

			<div class="box" :style="{backgroundColor: bcolor}"></div>
			<div class="box" :style="progressBar"></div>
					
					<h3>backgroundColor = background-color:"" . You must use camelcase where a - is present in a class property.</h3>
					
						<p class="blue-grey darken-2 white--text">
<pre>
&#60;div class="box" :style="{backgroundColor: bcolor}">&#60;/div>
&#60;div class="box" :style="progressBar">&#60;/div>
</pre>
						</p>		
			
				</v-flex>
				<iframe height='265' scrolling='no' title='vuejs progress bar' src='//codepen.io/dirkteucher/embed/NwBZme/?height=265&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/dirkteucher/pen/NwBZme/'>vuejs progress bar</a> by Dirk Teucher (<a href='https://codepen.io/dirkteucher'>@dirkteucher</a>) on <a href='https://codepen.io'>CodePen</a></iframe>
			</v-layout>

			<v-layout row wrap>
				<v-flex xs5  >
					<div>
						<a href="https://github.com/dirkteucher/vue-tutorial-site/blob/master/src/pages/progress-bar.vue" target="_blank">
							<v-btn color="green white--text">GET CODE: progress-bar.vue</v-btn>
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
		bcolor: "blue",
		progressBarWidth: '1'
    }
	},
	computed: {
		progressBar: function(){
			return {
				width: this.progressBarWidth+"%"
			}
		}
	},
	mounted: function(){
		var vueLocal = this; 
		var timer = 1;
		function increaseProgressBarWidth(){
			if(timer<100){
				timer = timer+1;
				vueLocal.progressBarWidth = timer;
			}

		setTimeout(function(){
			increaseProgressBarWidth();
		},10);

		}
		increaseProgressBarWidth();

	}
}
</script>


<style>
.box {
	width:200px;
	height: 20px;
	background-color: green;
}
</style>
