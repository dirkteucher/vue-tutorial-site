<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'app',
		data () {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		}
}
</script>

<style lang="scss">
/*TODO Refactore out all CSS into a separate main.css file*/
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}

h1, h2 {
	font-weight: normal;
}

h3 {
	margin: 20px 0;;
}

ul {
	list-style-type: none;
	padding: 0;
}

li {
	margin: 0 10px;
}

a {
	color: #fff;
}

p {
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.82);
    margin: 20px;
    padding: 20px;
    border-radius: 10px;
    font-size: 1.2rem;
}

</style>
