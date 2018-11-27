<template>
            <v-card flat width="100%">
                <v-container class="card-container">
                    <v-card-title v-if="version=='indonesia'" class="title-header font-weight-heavy justify-center">
                        {{title_indo}}
                    </v-card-title>
                    <v-card-text v-if="version=='indonesia'" class="subheader color-grey">
                        {{content_indo}}
                    </v-card-text>

                    <v-card-title v-if="version=='english'" class="title-header font-weight-heavy justify-center">
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
                                                :src="images[index]"
                                        ></v-img>
                                    </v-flex>
                                    </v-layout>
                                    <v-flex xs7>
                                            <div style="padding: 1rem;">
                                                <div class="card-content font-weight-heavy"> {{card.top}} </div>
                                                <div class="card-content font-weight-heavy"> {{card.bottom}} </div>
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
                                                :src="images[index]"
                                        ></v-img>
                                    </v-flex>
                                </v-layout>
                                <v-flex xs7>
                                    <div style="padding: 1rem;">
                                        <div class="card-content font-weight-heavy"> {{card.top}} </div>
                                        <div class="card-content font-weight-heavy"> {{card.bottom}} </div>
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
    import {how_to} from '../../config/documentHome.json'
    export default {
        computed: {
            ...mapState([
                'version'
            ])
        },
        data () {
            return {
                title_indo: how_to.title_indo,
                title_english: how_to.title_english,
                content_english: how_to.content_english,
                content_indo: how_to.content_english ,
                cardData_eng: how_to.card_english,
                cardData_ind: how_to.card_indo,
                images: [defender, free, arah, sarjana]
            }
        }
    }
</script>

