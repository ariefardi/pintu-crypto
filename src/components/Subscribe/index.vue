<template>
    <v-container id="subscribe-page">
        <v-layout>
            <v-card flat width="100%">
                <v-container class="container-card">
                </v-container>
                <v-container fluid>
                    <v-layout align-center justify-center row wrap>
                        <v-flex xs12 md4>
                            <v-layout align-center justify-center row fill-height>
                                <v-text-field
                                        label="Enter your email address"
                                        solo
                                        v-model="email"
                                        full-width
                                ></v-text-field>
                            </v-layout>
                        </v-flex>
                        <v-flex style="margin-bottom: 2rem" xs12 md3>
                            <v-layout align-center justify-center row fill-height>
                                <v-btn
                                        id="button-subs"
                                       class="white--text button-subs-class"
                                       style="text-transform: capitalize; background-color: blue !important;border-radius: 5px !important;"
                                       @click="subs"
                                >
                                    Join Our List
                                </v-btn>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                </v-container>


                <v-container>
                    <v-layout v-if="version=='indonesia'" row wrap align-start justify-center>
                        <v-flex  xs12 sm12 md4 v-for="(card, index) in cardData_ind" :key="index">
                            <v-card flat>
                                <v-container>
                                    <v-layout row wrap class="to-center to-center-content">
                                        <v-flex xs12>
                                            <img class="image-subs to-center-content" :src="images[index]" alt="" />
                                        </v-flex >
                                        <v-flex xs12>
                                            <v-card-text class="subheader font-weight-heavy to-center ">
                                                {{card.title}}
                                            </v-card-text>
                                        </v-flex>
                                        <v-flex xs12>
                                            <v-card-text class="content font-weight-heavy color-grey to-center">
                                                {{card.content}}
                                            </v-card-text>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                            </v-card>
                        </v-flex>
                    </v-layout>

                    <v-layout v-if="version=='english'" row wrap align-start justify-center>
                        <v-flex  xs12 sm12 md4 v-for="(card, index) in cardData_eng" :key="index">
                            <v-card flat>
                                <v-container>
                                    <v-layout row wrap class="to-center to-center-content">
                                        <v-flex xs12>
                                            <img class="image-subs to-center-content" :src="images[index]" alt="" />
                                        </v-flex >
                                        <v-flex xs12>
                                            <v-card-text class="subheader font-weight-heavy to-center ">
                                                {{card.title}}
                                            </v-card-text>
                                        </v-flex>
                                        <v-flex xs12>
                                            <v-card-text class="content font-weight-heavy color-grey to-center">
                                                {{card.content}}
                                            </v-card-text>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
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
    import {subscribe} from '../../config/documentHome.json'
    import $ from 'jquery'
    export default {
        mounted () {
          this.toSubsScroll()
        },
        computed: {
            ...mapState([
                'version'
            ])
        },
        methods: {
            toSubsScroll () {
                // subscribe-page
                console.log('in idari subs',this.$route.name)
                if (this.$route.name==='subscribe') {
                        $([document.documentElement, document.body]).animate({
                            scrollTop: $("#subscribe-page").offset().top

                        }, 0);

                        $([document.documentElement, document.body]).animate({
                            scrollTop: 500

                        }, 100);

                }
            },
            subs () {
                let ref = localStorage.getItem('ref')
                let ref_link = 'web'
                if (ref) {
                    ref_link = ref
                }
                else {
                    ref_link = 'web'
                }

                  if (this.email && this.validateEmail(this.email)) {
                      let self = this
                      DB.collection('subscribers').add({
                          email: this.email,
                          subscribe_date: new Date(),
                          ref_link
                      }).then(function(docRef) {
                              console.log("Document written with ID: ", docRef);
                                self.email = ""
                                // self.$store.commit('setDialog', true)
                          self.$router.push('/thank')
                          })
                          .catch(function(error) {
                              console.log("Error adding document: ", error);
                          });
                  }
                  else if (!this.validateEmail(this.email) && this.email) {
                      if (this.version==='english') {
                          swal('Please enter your correct email!')
                      }
                      else {
                          swal('Alamat email anda tidak valid!')
                      }
                  }
                  else {
                      if (this.version==='english') {
                          swal('Please Input your Email Address!!')
                      }
                      else {
                          swal("Mohon Masukkan Alamat Email Anda!!")
                      }
                  }

            },
            validateEmail (email) {
                // eslint-disable-next-line
                const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(email).toLowerCase());
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
                title_indo: subscribe.title_indo,
                title_english: subscribe.title_english,
                cardData_eng: subscribe.card_english,
                cardData_ind: subscribe.card_indo,
                images: [defender, free, arah]
            }
        }
    }
</script>

<style>
    .content {
        font-size: 18px;
        padding-top: 0 !important;
    }
    .to-left {
        text-align: left;
    }
    .to-left-content {
        justify-content: flex-start;
    }
    .to-center-image {
        justify-content: center;
    }
    @media only screen and (max-width: 1200px) {
        .content {
            font-size: 14px;
            padding-top: 0 !important;
        }
        .to-center {
            text-align: center;
        }
        .to-center-content {
            justify-content: center;
        }
    }
</style>


