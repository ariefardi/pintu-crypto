<template>
  <v-container  style="margin-top: 3rem;" fluid class="page-wrapper">
    <GooglePlay />
      <Subscribe />
      <HowTo />
      <div v-if="version=='indonesia'" class="max-width" >
          <CardStep  v-for="(card, index) in cardData_ind"
                    :key="index"
                    :title1="card.title1"
                    :title2="card.title2"
                    :phoneImage="card.phoneImage"
                    :isi="card.isi"/>
      </div>
      <div v-if="version=='english'" lass="max-width" >
          <CardStep  v-for="(card, index) in cardDate_eng"
                     :key="index"
                     :title1="card.title1"
                     :title2="card.title2"
                     :phoneImage="card.phoneImage"
                     :isi="card.isi"/>
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
import phoneImage from '../assets/phone.png'
import {mapState} from 'vuex'

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
            phoneImage: phoneImage,
            cardDate_eng: [
                {
                    phoneImage: phoneImage,
                    title1: 'Trade Buy.',
                    title2: 'No Fee.',
                    isi: 'We believe that crypto must be accessible to everyone, so we offer' +
                         'trade without commission'
                },
                {
                    phoneImage: phoneImage,
                    title1: 'Mainstay Security.',
                    title2: 'Secured.',
                    isi: 'More than 90% of your crypto is stored offline and the rest is protected by the system' +
                        'online security guaranteed by insurance'
                },
                {
                    phoneImage: phoneImage,
                    title1: 'Kripto.',
                    title2: 'Without Risk.',
                    isi: 'Door provides crypto assets that are supported by real currencies stored in the bank and regulated by' +
                        'the government, so the price is stable.'
                },
                {
                    phoneImage: phoneImage,
                    title1: 'Learn Crypto.',
                    title2: 'Practice immediately.',
                    isi: 'Learn about crypto through various categories and explore knowledge about excellence, weaknesses,' +
                         'and the use of each crypto'
                },
            ],
            cardData_ind: [
                {
                    phoneImage: phoneImage,
                    title1: 'Jual Beli.',
                    title2: 'Biaya Gratis.',
                    isi: 'Kami percaya bahwa kripto harus bisa diakses oleh semua orang, sehingga kami menawarkan ' +
                        'perdagangan tanpa komisi'
                },
                {
                    phoneImage: phoneImage,
                    title1: 'Keamanan Andalan.',
                    title2: 'Terjamin Asuransi.',
                    isi: 'Lebih dari 90% kripto anda disimpan secara offline dan sisanya dilindungi oleh sistem ' +
                        'keamanan online yang terjamin oleh asuransi'
                },
                {
                    phoneImage: phoneImage,
                    title1: 'Kripto.',
                    title2: 'Tanpa Resiko.',
                    isi: 'Pintu menyediakan aset kripto yang didukung mata uang nyata yang tersimpan di bank dan diatur oleh ' +
                        'pemerintah, sehingga harga tersebut stabil.'
                },
                {
                    phoneImage: phoneImage,
                    title1: 'Belajar Kripto.',
                    title2: 'Langsung Praktek.',
                    isi: 'Belajar tentang kripto melalui berbagai kategori dan gali pengetahuan tentang keunggulan, kelemahan, ' +
                        'dan kegunaan setiap kripto'
                },
            ]
        }
    },
      mounted () {
          this.$store.commit('setPage', this.$route.name)
      }
  }
</script>

