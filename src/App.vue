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

</style>
