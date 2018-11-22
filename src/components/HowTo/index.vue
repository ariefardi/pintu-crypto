<template>
            <v-card flat width="100%">
                <v-container class="container-card">
                    <v-card-title v-if="version=='indonesia'" class="title-style">
                        {{title_indo}}
                    </v-card-title>
                    <v-card-text v-if="version=='indonesia'" class="card-text">
                        {{content_indo}}
                    </v-card-text>

                    <v-card-title v-if="version=='english'" class="title-style">
                        {{title_english}}
                    </v-card-title>
                    <v-card-text v-if="version=='english'" class="card-text">
                        {{content_english}}
                    </v-card-text>
                </v-container>
                    <v-layout v-if="version=='indonesia'" align-center justify-center column fill-height>
                        <v-flex xs12 v-for="(card, index) in cardData_ind" :key="index">
                            <v-card style="border-radius: 20px; margin-top: 2rem;" class="width-card">
                                <v-layout>
                                    <v-layout align-center justify-center column fill-height>
                                    <v-flex xs5>
                                        <v-img
                                                class="image-title"
                                                :src="card.image"
                                        ></v-img>
                                    </v-flex>
                                    </v-layout>
                                    <v-flex xs7>
                                            <div style="padding: 1rem;">
                                                <div class="title-string"> {{card.string1}} </div>
                                                <div class="title-string"> {{card.string2}} </div>
                                            </div>
                                    </v-flex>
                                </v-layout>
                            </v-card>
                        </v-flex>
                    </v-layout>
                <v-layout v-if="version=='english'" align-center justify-center column fill-height>
                    <v-flex xs12 v-for="(card, index) in cardData_eng" :key="index">
                        <v-card style="border-radius: 20px; margin-top: 2rem;" class="width-card">
                            <v-layout>
                                <v-layout align-center justify-center column fill-height>
                                    <v-flex xs5>
                                        <v-img
                                                class="image-title"
                                                :src="card.image"
                                        ></v-img>
                                    </v-flex>
                                </v-layout>
                                <v-flex xs7>
                                    <div style="padding: 1rem;">
                                        <div class="title-string"> {{card.string1}} </div>
                                        <div class="title-string"> {{card.string2}} </div>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-card>
</template>


<script>
    import image1 from '../../assets/defender.png'
    import image2 from '../../assets/free.png'
    import image3 from '../../assets/3_arah.png'
    import image4 from '../../assets/sarjana_logo.png'
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
                        image: image1,
                        string1: "Mainstay Security",
                        string2: "Secured Insurance"
                    },
                    {
                        image:image2,
                        string1: "Trade Buy.",
                        string2: "No Fee."
                    },
                    {
                        image: image3,
                        string1: "Aggregator.",
                        string2: "Free."
                    },
                    {
                        image: image4,
                        string1: "Learn Crypto. ",
                        string2: "Practice immediately."
                    }
                ],
                cardData_ind: [
                    {
                        image: image1,
                        string1: "Keamanan Andalan.",
                        string2: "Terjamin oleh Asuransi."
                    },
                    {
                        image:image2,
                        string1: "Jual Beli.",
                        string2: "Biaya Gratis."
                    },
                    {
                        image: image3,
                        string1: "Aggregator.",
                        string2: "Biaya Gratis."
                    },
                    {
                        image: image4,
                        string1: "Belajar Crypto. ",
                        string2: "Langsung Praktek."
                    }
                ]
            }
        }
    }
</script>


<style >
    .title-string {
        font-size: 18px;
        font-weight: 500;
        text-align: center;
    }
    .container-card {
        text-align: center;
    }
    .card-text {
        font-size: 24px;
        font-weight: 700;
        color: slategrey;
        padding-left: 3rem;
        padding-right: 3rem;
    }
    .image-title {
        width: 64px;
        height: auto !important;
        padding: 1rem;
        margin-top: 12px !important;


    }
    .width-card {
        width: 400px;
    }
    @media only screen and (max-width: 720px) {
        .card-text {
            font-size: 14px;
            font-weight: 500;
            color: slategrey;
        }
        .title-string {
            font-size: 14px !important;
            font-weight: 500;
            text-align: center;
        }
        .width-card {
            width: 300px;
        }
    }
    @media only screen and (max-width: 360px) {
        .width-card {
            width: 200px;
        }
    }
    @media only screen and (max-width: 200px) {
        .width-card {
            width: 100%;
        }
    }

</style>