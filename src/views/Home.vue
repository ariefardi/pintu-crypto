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
                    :phoneImage="phoneImage[index]"
                    :isi="card.content"/>
      </div>
      <div v-if="version=='english'" lass="max-width" >
          <CardStep  v-for="(card, index) in cardData_eng"
                     :key="index"
                     :title1="card.top"
                     :title2="card.bottom"
                     :phoneImage="phoneImage[index]"
                     :isi="card.content"/>
      </div>
      <Footer />
    <ModalSubs/>
  </v-container>
</template>

<script>
import GooglePlay from '../components/GooglePlay'
import HowTo from '../components/HowTo'
import CardStep from '../components/CardStep'
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'
import ModalSubs from '../components/ModalSubs'
import {mapState} from 'vuex'
import {card_step} from '../config/documentHome.json'
import edukasiKecil from '../assets/edukasi kecil.png'
import feelesKecil from '../assets/feeless kecil.png'
import stabilKecil from '../assets/stabil kecil.png'
import amanKecil from '../assets/aman kecil.png'


  export default {
    components: {
        GooglePlay, HowTo, CardStep, Subscribe, Footer, ModalSubs
    },
      computed: {
          ...mapState([
              "version"
          ])
      },
    data () {
        return {
            phoneImage: [feelesKecil, amanKecil, stabilKecil, edukasiKecil],
            cardData_eng: card_step.card_english,
            cardData_ind: card_step.card_indo
        }
    },
      methods: {
        checkingRoute () {
            // console.log(this.$route)
            for (var key in this.$route.query) {
                console.log(key)
                if (key) {
                    localStorage.setItem('ref', key)
                }
            }
        },
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
          this.checkingRoute()
      }
  }
</script>

