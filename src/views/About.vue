<template>
  <v-container fluid class="about-wrapper">
    <AboutHeroImage />
    <JoinUs class="margin-top-web" />
    <OurName class="margin-top-web" />
    <OurValues class="margin-top-web" />
    <OurWorkplace class="margin-top-web" />
    <OpenPositions class="margin-top-web" />
    <Footer />
  </v-container>
</template>


<script>
  // const AboutHeroImage = () => import(/* webpackChunkName: "AboutHeroImage" */ '../components/AboutHeroImage')
  // const JoinUs = () => import(/* webpackChunkName: "JoinUs" */ '../components/JoinUs')
  // const OurName = () => import(/* webpackChunkName: "OurName" */ '../components/OurName')
  // const OurValues = () => import(/* webpackChunkName: "OurValues" */ '../components/OurValues')
  // const OurWorkplace = () => import(/* webpackChunkName: "OurWorkplace" */ '../components/OurWorkplace')
  // const OpenPositions = () => import(/* webpackChunkName: "OpenPositions" */ '../components/OpenPositions')
  // const Footer = () => import(/* webpackChunkName: "Footer" */ '../components/Footer')
  import AboutHeroImage from '../components/AboutHeroImage'
  import JoinUs from '../components/JoinUs'
  import OurName from '../components/OurName'
  import OurValues from '../components/OurValues'
  import OurWorkplace from '../components/OurWorkplace'
  import OpenPositions from '../components/OpenPositions'
  import Footer from '../components/Footer'
  export default {
      components: {
          AboutHeroImage, JoinUs, OurName, OurValues, OurWorkplace, OpenPositions, Footer
      },
      methods: {
          checkVersionsStorage () {
              let version = localStorage.getItem('version')
              console.log('ini version', version)
              console.log(this.$route)
              if (this.$route.name==='en-home') {
                  version = 0
              }
              else if (this.$route.name==='id-home') {
                  version = 1
              }
              console.log('version', version)
              if (version==1) {
                  // this.toggle_exclusive = 1
                  this.$store.commit('setToggle', 1)
                  this.$store.dispatch('changeVersion', 1)
              }
              else {
                  this.$store.commit('setToggle', 0)
                  this.$store.dispatch('changeVersion', 0)
              }
          },
      },
      mounted () {
          this.$store.commit('setPage', this.$route.name)
          this.checkVersionsStorage()
      }

  }
</script>

<style>
  .about-wrapper {
    padding: 0 !important;
  }
  margin-top-web {
    margin-top: 4rem;
  }
</style>
