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
      mounted () {
          this.$store.commit('setPage', this.$route.name)
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
