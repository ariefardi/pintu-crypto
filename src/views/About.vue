<template>
  <v-container fluid class="page-wrapper">
    <AboutHeroImage />
    <JoinUs />
    <OurName />
    <OurValues />
    <OurWorkplace />
    <OpenPositions />
    <Footer />
  </v-container>
</template>


<script>
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
