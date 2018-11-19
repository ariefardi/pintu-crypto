<template>
  <v-container class="page-wrapper" fluid>
    <GooglePlay />
      <HowTo />
      <CardStep v-for="(card, index) in cardData"
                :key="index"
                :title1="card.title1"
                :title2="card.title2"
                :phoneImage="card.phoneImage"
                :isi="card.isi"/>
  </v-container>
</template>

<script>
import GooglePlay from '../components/GooglePlay'
import HowTo from '../components/HowTo'
import CardStep from '../components/CardStep'
import phoneImage from '../assets/phone.png'

  export default {
    components: {
        GooglePlay, HowTo, CardStep
    },
    data () {
        return {
            phoneImage: phoneImage,
            cardData: [
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

<style scoped>
    .page-wrapper {
        padding: 0;
        margin-top: 2rem
    }
</style>
