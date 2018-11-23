<template>
    <v-container>
        <v-layout>
            <v-card flat width="100%">
                <v-container class="container-card">
                    <v-card-title v-if="version=='indonesia'" class="title-header font-weight-bold">
                        {{title_indo}}
                    </v-card-title>

                    <v-card-title v-if="version=='english'" class="title-header font-weight-bold">
                        {{title_english}}
                    </v-card-title>
                </v-container>
                <v-container fluid>
                    <v-layout align-center justify-center row wrap>
                        <v-flex xs12 md4>
                            <v-layout align-center justify-center row fill-height>
                                <v-text-field
                                        label="Enter your email address"
                                        solo
                                        v-model="email"
                                ></v-text-field>
                            </v-layout>
                        </v-flex>
                        <v-flex style="margin-bottom: 2rem" xs12 md3>
                            <v-layout align-center justify-center row fill-height>
                                <v-btn
                                       class="white--text"
                                       style="text-transform: capitalize; background-color: blue !important;border-radius: 5px !important;"
                                       @click="subs"
                                >
                                    Join Our Waitlist
                                </v-btn>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                </v-container>
                <v-container>
                    <v-layout row wrap align-center justify-center>
                        <v-flex xs12 sm6 md4 v-for="(card, index) in cardData_ind" :key="index">
                            <v-card flat>
                                <v-layout align-end justify-start row fill-height>
                                    <v-flex xs3>
                                        <v-img class="image-subs" :src="card.image" alt="" />
                                    </v-flex>
                                </v-layout>
                                <v-card-text class="subheader ">
                                    {{card.string1}}
                                </v-card-text>
                                <v-card-text class="content-subscribe color-grey">
                                    {{card.string2}}
                                </v-card-text>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card>
        </v-layout>
        <v-snackbar
                v-model="snackbar"
                :bottom="y === 'bottom'"
                :left="x === 'left'"
                :multi-line="mode === 'multi-line'"
                :right="x === 'right'"
                :timeout="timeout"
                :top="y === 'top'"
                :vertical="mode === 'vertical'"
        >
            {{ text }}
            <v-btn
                    color="pink"
                    flat
                    @click="snackbar = false"
            >
                Close
            </v-btn>
        </v-snackbar>
    </v-container>
</template>


<script>
    import { defender, free, arah} from '../../config/images.js'
    import {DB, swal} from '../../config'
    import {mapState} from 'vuex'
    export default {
        computed: {
            ...mapState([
                'version'
            ])
        },
        methods: {
          subs () {
              if (this.email) {
                  console.log("kenapa dah")
                  this.snackbar = true
                  DB.collection('subscribers').add({
                      email: this.email
                  }).then(function(docRef) {
                          console.log("Document written with ID: ", docRef.id);
                          this.email = ""
                      })
                      .catch(function(error) {
                          console.log("Error adding document: ", error);
                      });
              }
              else {
                  if (this.version==='english') {
                      swal('Please Input your Email Address!!')
                  }
                  else {
                      swal("Mohon Masukkan Alamat Email Anda!!")
                  }
              }


          }
        },

        data () {
            return {
                snackbar: false,
                y: 'top',
                x: null,
                mode: '',
                timeout: 6000,
                text: 'Hello!! Email anda telah di tambahkan ke daftar waiting list kami ^^',
                email: "",
                title_indo: "Tempat terbaik untuk masuk dunia kripto",
                title_english: "Take your step with Pintu",
                content_english: "Pintu is easiest place, fastest, and most trusted for buy, trading, transfer and saving cryptocurrency",
                content_indo: "Pintu adalah tempat termudah, tercepat, dan paling terpercaya untuk " +
                    "membeli, menjual, mentransfer, dan deposit cryptocurrency.",
                cardData_ind: [
                    {
                        image: defender,
                        string1: "sistem kemanan yang terjamin oleh asuransi.",
                        string2: `Lebih dari 90% kripto anda disimpan secara offline dan sisanya
                        dilindungi oleh sistem kemanan online yang terjamin oleh asuransi`
                    },
                    {
                        image: free,
                        string1: "Jual beli kripto bebas biaya komisi.",
                        string2: `Pintu bekerja sama dengan berbagai exchange ternama untuk
                        memberikan harga beli dan jual terbaik apapun produk dan jumlahnya`

                    },
                    {
                        image: arah,
                        string1: "Aggregator pastikan dapat harga lebih baik.",
                        string2: `Kami percaya bahwa kripto harus bisa diakses oleh semua orang,
                         sehingga kami menawarkan perdagangan tanpa komisi.`
                    },
                ],
                cardData_eng: [
                    {
                        image: defender,
                        string1: "Keamanan Andalan.",
                        string2: "Terjamin oleh Asuransi."
                    },
                    {
                        image: free,
                        string1: "Jual Beli.",
                        string2: "Biaya Gratis."
                    },
                    {
                        image: arah,
                        string1: "Aggregator.",
                        string2: "Biaya Gratis."
                    },
                ]
            }
        }
    }
</script>


<!--<style >-->
<!--.title-subscribe {-->
<!--font-weight: 500;-->
<!--font-size: 24px;-->
<!--}-->
<!--.content-subscribe {-->
<!--color: slategray;-->
<!--font-size: 18px;-->
<!--font-weight: 500;-->
<!--padding-top: 0 !important;-->
<!--}-->
<!--.image-subs{-->
<!--width: 64px;-->
<!--height: auto;-->
<!--margin-left: 1rem;-->
<!--margin-bottom: -1rem;-->
<!--}-->
<!--@media only screen and (max-width: 480px) {-->
<!--.title-subscribe {-->
<!--font-weight: 500;-->
<!--font-size: 14px;-->
<!--padding-top: 8px !important;-->
<!--padding-left: 4px;-->
<!--padding-right: 4px;-->
<!--}-->
<!--.content-subscribe {-->
<!--color: slategray;-->
<!--font-size: 12px;-->
<!--font-weight: 500;-->
<!--padding-top: 0 !important;-->
<!--padding-left: 4px;-->
<!--padding-right: 4px;-->
<!--}-->
<!--.image-subs{-->
<!--width: 48px;-->
<!--height: auto;-->
<!--margin-left: 1rem;-->
<!--margin-bottom: -1rem;-->
<!--}-->
<!--}-->
<!--</style>-->
