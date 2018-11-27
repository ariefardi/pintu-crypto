<template>
  <v-container fluid class="about-wrapper">
    <AboutHeroImage />
    <JoinUs class="margin-top-4-rem" />
    <OurName class="margin-top-4-rem" />
    <OurValues class="margin-top-6-rem" />
    <OurWorkplace class="margin-top-4-rem" />
    <OpenPositions class="margin-top-6-rem" />
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

<style>
  .about-wrapper {
    padding: 0 !important;
  }
  .margin-top-4-rem {
    margin-top: 4rem;
  }
  .margin-top-6-rem {
    margin-top: 12rem !important;
   }
</style>
