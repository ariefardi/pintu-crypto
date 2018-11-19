<template>
  <v-app style="background-color: white !important;">
    <Navbar id="navbar-tool" />
    <router-view></router-view>
  </v-app>
</template>

<script>
    import Navbar from './components/Navbar/Toolbar/index'
    export default {
    name: 'App',
    components: {
        Navbar,
    },
    data () {
      return {
        //
      }
    }
  }
</script>
