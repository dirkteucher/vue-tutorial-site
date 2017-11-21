<template>
  <div
    id="e3"
    style="margin: auto;"
    class="grey lighten-3"
  >
    <v-toolbar color="light-blue">
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">Vue tutorials</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar>
    <v-container
      fluid
      style="min-height: 0;"
      grid-list-lg
    >
      <v-layout row wrap>


        <v-flex xs6 sm3>
          <router-link to="/declarative-rendering">
            <v-card color="blue-grey darken-2" class="white--text">
              <v-card-title primary-title>
                <div class="headline">Declarative rendering</div>
              </v-card-title>
            </v-card>
          </router-link>
        </v-flex>
        

        <v-flex xs6 sm3>
          <v-card color="blue-grey darken-2" class="white--text">
            <v-card-title primary-title>
              <div class="headline">Declarative rendering</div>
            </v-card-title>
          </v-card>
        </v-flex>

      </v-layout>

    

    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Home page',
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
    }
</style>
