<template>
            <v-card flat width="100%">
                <v-container class="card-container">
                    <v-card-title v-if="version=='indonesia'" class="title-header">
                        {{title_indo}}
                    </v-card-title>
                    <v-card-text v-if="version=='indonesia'" class="subheader color-grey">
                        {{content_indo}}
                    </v-card-text>

                    <v-card-title v-if="version=='english'" class="title-header">
                        {{title_english}}
                    </v-card-title>
                    <v-card-text v-if="version=='english'" class="subheader color-grey">
                        {{content_english}}
                    </v-card-text>
                </v-container>
                    <v-layout v-if="version=='indonesia'" align-center justify-center column fill-height>
                        <v-flex xs12 v-for="(card, index) in cardData_ind" :key="index">
                            <v-card class="card-how card-border">
                                <v-layout>
                                    <v-layout align-center justify-center column fill-height>
                                    <v-flex xs5>
                                        <v-img
                                                class="image-how"
                                                :src="card.image"
                                        ></v-img>
                                    </v-flex>
                                    </v-layout>
                                    <v-flex xs7>
                                            <div style="padding: 1rem;">
                                                <div class="card-content font-weight-bold"> {{card.string1}} </div>
                                                <div class="card-content font-weight-bold"> {{card.string2}} </div>
                                            </div>
                                    </v-flex>
                                </v-layout>
                            </v-card>
                        </v-flex>
                    </v-layout>
                <v-layout v-if="version=='english'" align-center justify-center column fill-height>
                    <v-flex xs12 v-for="(card, index) in cardData_eng" :key="index">
                        <v-card style="border-radius: 20px; margin-top: 2rem;" class="card-how card-border">
                            <v-layout>
                                <v-layout align-center justify-center column fill-height>
                                    <v-flex xs5>
                                        <v-img
                                                class="image-how"
                                                :src="card.image"
                                        ></v-img>
                                    </v-flex>
                                </v-layout>
                                <v-flex xs7>
                                    <div style="padding: 1rem;">
                                        <div class="card-content font-weight-bold"> {{card.string1}} </div>
                                        <div class="card-content font-weight-bold"> {{card.string2}} </div>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-card>
</template>


<script>
    import { defender, free, arah, sarjana} from '../../config/images.js'
    import {mapState} from 'vuex'
    export default {
        computed: {
            ...mapState([
                'version'
            ])
        },
        data () {
            return {
                title_indo: "Ambil langkah pertama dengan Pintu",
                title_english: "Take your step with Pintu",
                content_english: "Pintu is easiest place, fastest, and most trusted for buy, trading, transfer and saving cryptocurrency",
                content_indo: "Pintu adalah tempat termudah, tercepat, dan paling terpercaya untuk " +
                    "membeli, menjual, mentransfer, dan deposit cryptocurrency.",
                cardData_eng: [
                    {
                        image: defender,
                        string1: "Mainstay Security",
                        string2: "Secured Insurance"
                    },
                    {
                        image:free,
                        string1: "Trade Buy.",
                        string2: "No Fee."
                    },
                    {
                        image: arah,
                        string1: "Aggregator.",
                        string2: "Free."
                    },
                    {
                        image: sarjana,
                        string1: "Learn Crypto. ",
                        string2: "Practice immediately."
                    }
                ],
                cardData_ind: [
                    {
                        image: defender,
                        string1: "Keamanan Andalan.",
                        string2: "Terjamin oleh Asuransi."
                    },
                    {
                        image:free,
                        string1: "Jual Beli.",
                        string2: "Biaya Gratis."
                    },
                    {
                        image: arah,
                        string1: "Aggregator.",
                        string2: "Biaya Gratis."
                    },
                    {
                        image: sarjana,
                        string1: "Belajar Crypto. ",
                        string2: "Langsung Praktek."
                    }
                ]
            }
        }
    }
</script>

