<template>
	<div
	id="e3"
	style="margin: auto;"
	class="grey lighten-3"
	>
	<v-toolbar color="light-blue">
		<!-- <v-toolbar-side-icon class="white--text"></v-toolbar-side-icon> -->
		<v-toolbar-title class="white--text"><slot name="headerTitle">Vue tutorials</slot></v-toolbar-title>
		<v-spacer></v-spacer>
		<router-link to="/">
			<v-btn icon>
			<v-icon>home</v-icon>
			</v-btn>
		</router-link>
	</v-toolbar>

	</div>
</template>

<script>
export default {
	name: 'header',
		data () {
			return {
				msg: ''
			}
		}
	}
</script>

<style lang="scss">
    .headline {
      height: 100px;
    }
    a {
      text-decoration: none;
      color: #fff;
    }
</style>
