<template>
  <v-app style="background-color: white !important;">
    <Navbar v-if="page!=='thanks'" id="navbar-tool" />
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
        computed: {
        page: {
            get () {
                return this.$store.state.page
            }
        }
        },
    data () {
      return {

      }
    }
  }
</script>
