<template>
    <v-container>
        <v-layout align-center justify-center column fill-height>
            <v-card flat>
                <v-card-title>
                    <h1 v-if="version=='english'" class="title-header font-weight-heavy"> {{values.title_english}} </h1>
                    <h1 v-if="version=='indonesia'" class="title-header font-weight-heavy"> {{values.title_indo}} </h1>
                </v-card-title>



                <div v-if="version=='english'" style="width: 100%;padding: 2rem">
                    <v-card-text>
                        <p class="subheader color-grey font-weight-medium">
                            {{values.content_english_p1}}
                        </p>
                    </v-card-text>
                    <v-card-text>
                        <p class="subheader color-grey font-weight-medium">
                            {{values.content_english_p2}}
                        </p>
                    </v-card-text>
                </div>
                <div v-if="version=='indonesia'" style="width: 100%;padding: 2rem">
                    <v-card-text>
                        <p class="subheader color-grey font-weight-medium">
                            {{values.content_indo_p1}}
                        </p>
                    </v-card-text>
                    <v-card-text>
                        <p class="subheader color-grey font-weight-medium">
                            {{values.content_indo_p2}}
                        </p>
                    </v-card-text>
                </div>

                <div style="width: 100%; margin-top: 6rem">
                    <v-card-title>
                        <h1 class="title-header font-weight-heavy"> Our People </h1>
                    </v-card-title>
                    <v-container class="image-container">
                        <v-layout align-center justify-center row fill-height>
                            <div style="width: 100%">
                                <img v-for="(image, index) in imagesTop" :key="index" class="image-flex filter-grey" :src="image" alt="">
                            </div>
                        </v-layout>
                    </v-container>
                    <v-container class="image-container">
                        <v-layout align-center justify-center row fill-height>
                            <div style="width: 100%">
                                <img v-for="(image, index) in imagesBot" :key="index" class="image-flex-2 filter-grey" :src="image" alt="">
                            </div>
                        </v-layout>
                    </v-container>
                </div>
            </v-card>
        </v-layout>
    </v-container>
</template>

<script>
    import {tokopedia,
        concensys,
        goldman_sachs,
        mit_logo,
        kampus_logo,
        yale_logo,
        harvard
    } from '../../config/images'
    import {our_workplace} from '../../config/documentAbout'
    import {mapState} from 'vuex'
    export default {
        computed: {
            ...mapState([
                'version'
            ])
        },
        data () {
            return {
                values : our_workplace,
                imagesTop : [
                    tokopedia, concensys, goldman_sachs
                ],
                imagesBot : [
                    mit_logo, kampus_logo, harvard, yale_logo
                ]
            }
        }
    }
</script>

<style>
    .image-container {
        padding: 0;
    }
    .work-title{
        text-align: center;
        margin: auto;
        font-size: 44px !important;
        font-weight: 500;
    }
    .work-contain {
        text-align: center;
        margin: auto;
        font-size: 22px !important;
        color: slategrey;
        font-weight: 500;
    }
    .image-flex {
        width: calc(100% / 3);
        margin: auto;
        height: auto;
        padding: 2rem 4rem;
    }
    .image-flex-2 {
        width: calc(100% / 4);
        margin: auto;
        height: auto;
        padding: 2rem 4rem;
    }
    .filter-grey {
        filter: grayscale(100%) ;
    }

    @media only screen and (max-width: 820px) {
        .image-flex {
            width: calc(100% / 3);
            margin: auto;
            height: auto;
            padding: 1rem 2rem;
        }
        .image-flex-2 {
            width: calc(100% / 4);
            margin: auto;
            height: auto;
            padding: 1rem 2rem;
        }
    }
    @media only screen and (max-width: 480px) {
        .image-flex {
            width: calc(100% / 3);
            margin: auto;
            height: auto;
            padding: 0.5rem 1rem;
        }
        .image-flex-2 {
            width: calc(100% / 4);
            margin: auto;
            height: auto;
            padding: 0.5rem 1rem;
        }
    }
</style>