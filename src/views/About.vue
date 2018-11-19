<template>
  <v-container fluid class="page-wrapper">
    <AboutHeroImage />
    <JoinUs />
  </v-container>
</template>


<script>
  import AboutHeroImage from '../components/AboutHeroImage'
  import JoinUs from '../components/JoinUs'
  export default {
      components: {
          AboutHeroImage, JoinUs
      },
      mounted () {
          this.$store.commit('setPage', this.$route.name)
      }

  }
</script>
<style scoped>
  .page-wrapper {
    padding: 0;
  }
</style>
