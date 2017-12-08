<template>
  <div
    id="e3"
    style="margin: auto;"
    class="grey lighten-3"
  >
    		<headermain>
				  <span slot="headerTitle">Vue Tutorials</span>
		    </headermain>
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
          <router-link to="/loops">
            <v-card color="blue-grey darken-2" class="white--text">
              <v-card-title primary-title>
                <div class="headline">Loops</div>
              </v-card-title>
            </v-card>
          </router-link>
        </v-flex>
        
        <v-flex xs6 sm3>
          <router-link to="/bindingAttributesClassnames">
            <v-card color="blue-grey darken-2" class="white--text">
              <v-card-title primary-title>
                <div class="headline">Binding attributes and class names dynamically</div>
              </v-card-title>
            </v-card>
          </router-link>
        </v-flex>

        <v-flex xs6 sm3>
          <router-link to="/computedProperties">
            <v-card color="blue-grey darken-2" class="white--text">
              <v-card-title primary-title>
                <div class="headline">Computed Properties</div>
              </v-card-title>
            </v-card>
          </router-link>
        </v-flex>

      </v-layout>



      <v-layout row wrap>

        <v-flex xs6 sm3>
          <router-link to="/slots">
            <v-card color="blue-grey darken-2" class="white--text">
              <v-card-title primary-title>
                <div class="headline">Slots</div>
              </v-card-title>
            </v-card>
          </router-link>
        </v-flex>


        <v-flex xs6 sm3>
          <router-link to="/axios">
            <v-card color="blue-grey darken-2" class="white--text">
              <v-card-title primary-title>
                <div class="headline">Axios/Ajax</div>
              </v-card-title>
            </v-card>
          </router-link>
        </v-flex>



        <v-flex xs6 sm3>
          <router-link to="/filters">
            <v-card color="blue-grey darken-2" class="white--text">
              <v-card-title primary-title>
                <div class="headline">Filters</div>
              </v-card-title>
            </v-card>
          </router-link>
        </v-flex>


        <v-flex xs6 sm3>
          <router-link to="/vModel">
            <v-card color="blue-grey darken-2" class="white--text">
              <v-card-title primary-title>
                <div class="headline">v-model (2 way data binding)</div>
              </v-card-title>
            </v-card>
          </router-link>
        </v-flex>

      </v-layout>



      <v-layout row wrap>

        <v-flex xs6 sm3>
          <router-link to="/watch">
            <v-card color="blue-grey darken-2" class="white--text">
              <v-card-title primary-title>
                <div class="headline">Watch</div>
              </v-card-title>
            </v-card>
          </router-link>
        </v-flex>

        <v-flex xs6 sm3>
          <router-link to="/dynamicClasses">
            <v-card color="blue-grey darken-2" class="white--text">
              <v-card-title primary-title>
                <div class="headline">Computed CSS</div>
              </v-card-title>
            </v-card>
          </router-link>
        </v-flex>

        <v-flex xs6 sm3>
          <router-link to="/progressBar">
            <v-card color="blue-grey darken-2" class="white--text">
              <v-card-title primary-title>
                <div class="headline">Progress Bar- Setting style properties</div>
              </v-card-title>
            </v-card>
          </router-link>
        </v-flex>

        <v-flex xs6 sm3>
          <router-link to="/ifExample">
            <v-card color="blue-grey darken-2" class="white--text">
              <v-card-title primary-title>
                <div class="headline">if/else + v-show</div>
              </v-card-title>
            </v-card>
          </router-link>
        </v-flex>

      </v-layout>



      <v-layout row wrap>

        <v-flex xs6 sm3>
          <router-link to="/lists">
            <v-card color="blue-grey darken-2" class="white--text">
              <v-card-title primary-title>
                <div class="headline">Lists + push</div>
              </v-card-title>
            </v-card>
          </router-link>
        </v-flex>

        <v-flex xs6 sm3>
          <router-link to="/refs">
            <v-card color="blue-grey darken-2" class="white--text">
              <v-card-title primary-title>
                <div class="headline">$refs - accessing HTML elements</div>
              </v-card-title>
            </v-card>
          </router-link>
        </v-flex>

        <v-flex xs6 sm3>
          <router-link to="/componentsExample">
            <v-card color="blue-grey darken-2" class="white--text">
              <v-card-title primary-title>
                <div class="headline">Components</div>
              </v-card-title>
            </v-card>
          </router-link>
        </v-flex>

        <v-flex xs6 sm3>
          <router-link to="/importScripts">
            <v-card color="blue-grey darken-2" class="white--text">
              <v-card-title primary-title>
                <div class="headline">Importing scripts</div>
              </v-card-title>
            </v-card>
          </router-link>
        </v-flex>

      </v-layout>



      <v-layout row wrap>

        <v-flex xs6 sm3>
          <router-link to="/props">
            <v-card color="blue-grey darken-2" class="white--text">
              <v-card-title primary-title>
                <div class="headline">Props - Component communication </div>
              </v-card-title>
            </v-card>
          </router-link>
        </v-flex>

        <v-flex xs6 sm3>
          <router-link to="/propsValidation">
            <v-card color="blue-grey darken-2" class="white--text">
              <v-card-title primary-title>
                <div class="headline">Props - validation (strict) </div>
              </v-card-title>
            </v-card>
          </router-link>
        </v-flex>

        <v-flex xs6 sm3>
          <router-link to="/propsValidation">
            <v-card color="blue-grey darken-2" class="white--text">
              <v-card-title primary-title>
                <div class="headline">Props - validation (strict) </div>
              </v-card-title>
            </v-card>
          </router-link>
        </v-flex>

        <v-flex xs6 sm3>
          <router-link to="/emit">
            <v-card color="blue-grey darken-2" class="white--text">
              <v-card-title primary-title>
                <div class="headline">Props - emit $event </div>
              </v-card-title>
            </v-card>
          </router-link>
        </v-flex>

      </v-layout>


      <v-layout row wrap>

        <v-flex xs6 sm3>
          <router-link to="/dynamicComponents">
            <v-card color="blue-grey darken-2" class="white--text">
              <v-card-title primary-title>
                <div class="headline">Dynamic components (load)(is) </div>
              </v-card-title>
            </v-card>
          </router-link>
        </v-flex>

        <v-flex xs6 sm3>
          <router-link to="/forms">
            <v-card color="blue-grey darken-2" class="white--text">
              <v-card-title primary-title>
                <div class="headline">Forms</div>
              </v-card-title>
            </v-card>
          </router-link>
        </v-flex>

      </v-layout>

    </v-container>
  </div>
</template>

<script>
export default {
  name: 'home-page',
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
      overflow: hidden;
    }
    a {
      text-decoration: none;
    }
</style>
