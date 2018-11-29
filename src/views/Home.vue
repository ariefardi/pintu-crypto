<template>
  <v-container  style="margin-top: 3rem;" fluid class="page-wrapper">
    <GooglePlay />
      <Subscribe />
      <HowTo />
      <div v-if="version=='indonesia'" class="max-width" >
          <CardStep  v-for="(card, index) in cardData_ind"
                    :key="index"
                    :title1="card.top"
                    :title2="card.bottom"
                    :phoneImage="phoneImage"
                    :isi="card.content"/>
      </div>
      <div v-if="version=='english'" lass="max-width" >
          <CardStep  v-for="(card, index) in cardData_eng"
                     :key="index"
                     :title1="card.top"
                     :title2="card.bottom"
                     :phoneImage="phoneImage"
                     :isi="card.content"/>
      </div>
      <Footer />
  </v-container>
</template>

<script>
import GooglePlay from '../components/GooglePlay'
import HowTo from '../components/HowTo'
import CardStep from '../components/CardStep'
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'
import {phone} from '../config/images'
import {mapState} from 'vuex'
import {card_step} from '../config/documentHome.json'

  export default {
    components: {
        GooglePlay, HowTo, CardStep, Subscribe, Footer
    },
      computed: {
          ...mapState([
              "version"
          ])
      },
    data () {
        return {
            phoneImage: phone,
            cardData_eng: card_step.card_english,
            cardData_ind: card_step.card_indo
        }
    },
      methods: {

      },
      mounted () {
          this.$store.commit('setPage', this.$route.name)
      }
  }
</script>

