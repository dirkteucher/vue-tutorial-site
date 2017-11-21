<template>
  <div>
      Home page
         <router-link to="/secondPage">Second page</router-link>
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

</style>
