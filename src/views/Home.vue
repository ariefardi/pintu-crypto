<template>
  <v-container  style="margin-top: 3rem;" fluid class="page-wrapper">
    <GooglePlay />
      <Subscribe v-if="subs" />
      <HowTo v-if="howto" />
      <div v-if="card_step" class="max-width">
        <div v-if="version=='indonesia'" class="max-width" >
            <CardStep  v-for="(card, index) in cardData_ind"
                      :key="index"
                      :title1="card.top"
                      :title2="card.bottom"
                      :phoneImage="phoneImage[index]"
                      :isi="card.content"/>
        </div>
        <div v-if="version=='english'" class="max-width" >
            <CardStep  v-for="(card, index) in cardData_eng"
                       :key="index"
                       :title1="card.top"
                       :title2="card.bottom"
                       :phoneImage="phoneImage[index]"
                       :isi="card.content"/>
        </div>
      </div>
      <Footer v-if="footer" />
  </v-container>
</template>

<script>
// const GooglePlay = () => import(/* webpackChunkName: "GooglePlay" */ '../components/GooglePlay')
import GooglePlay from '../components/GooglePlay'
// const Subscribe = () => import(/* webpackChunkName: "Subscribe" */ '../components/Subscribe')
import Subscribe from '../components/Subscribe'
import HowTo from '../components/HowTo'
// const HowTo = () => import(/* webpackChunkName: "HowTo" */ '../components/HowTo')
// const CardStep = () => import(/* webpackChunkName: "CardStep" */ '../components/CardStep')
import CardStep from '../components/CardStep'
// const Footer = () => import(/* webpackChunkName: "Footer" */ '../components/Footer')
import Footer from '../components/Footer'


import {mapState} from 'vuex'
import {card_step} from '../config/documentHome.json'
import edukasiKecil from '../assets/edukasi kecil.png'
import feelesKecil from '../assets/feeless kecil.png'
import stabilKecil from '../assets/stabil kecil.png'
import amanKecil from '../assets/aman kecil.png'
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

  export default {
    // components: {
    //     GooglePlay, HowTo, CardStep, Subscribe, Footer
    // },
      components: {
          GooglePlay,
          Subscribe,
          HowTo,
          CardStep,
          Footer
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
            cardData_isnd: card_step.card_indo,
            subs: false,
            howto: false,
            card_step: false,
            footer: false
        }
    },
      methods: {
          checkSubs() {
              if (this.$route.name==='subscribe') {
                  this.subs = true
              }

          },
          onScroll () {
              let self = this
              $(window).scroll(function() {
                  let temp = $(window).scrollTop()
                  if (temp>100) {
                      self.subs = true
                  }
                  if (temp>700) {
                      self.howto = true
                  }
                  if (temp>1200) {
                      self.card_step = true
                      self.footer = true
                  }
              })
          },
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
          this.checkSubs()
          this.checkVersionsStorage()
          this.checkingRoute()
          this.onScroll()
      }
  }
</script>

