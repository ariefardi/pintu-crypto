<template>
    <v-container>
        <v-layout align-center justify-center column fill-height>
            <v-card flat>
                <v-card-title>
                    <h1 class="work-title"> Our Workplace </h1>
                </v-card-title>
                <div style="width: 100%;padding: 2rem">
                    <v-card-text>
                        <p class="work-contain">
                            Our version of the great workplace in not comprised of gourmet food,
                            great gyms, fancy offices, or frequent parties. Our version of the great
                            workplace is a dream team in pursuit of ambitious commons goals, for which
                            we spend heavily. It is on such a team that you learn the most, perform
                            you best work, improve the fastest, and have the most fun.
                        </p>
                    </v-card-text>
                    <v-card-text>
                        <p class="work-contain">
                            We model ourselves on being a team, not a family. A family is about
                            unconditional love, despite your siblings' unusual behavior. A dream team is
                            about pushing yourself to be the best teammate you can be, caring
                            intensely about your teammates, and knowing that you may not be on the
                            team forever.
                        </p>
                    </v-card-text>
                </div>
                <div style="width: 100%">
                    <v-card-title>
                        <h1 class="work-title"> Our People </h1>
                    </v-card-title>
                    <v-container class="image-container">
                        <v-layout align-center justify-center row fill-height>
                            <div style="width: 100%">
                                <img v-for="(image, index) in imagesTop" :key="index" class="image-flex" :src="image" alt="">
                            </div>
                        </v-layout>
                    </v-container>
                    <v-container class="image-container">
                        <v-layout align-center justify-center row fill-height>
                            <div style="width: 100%">
                                <img v-for="(image, index) in imagesBot" :key="index" class="image-flex-2" :src="image" alt="">
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
        yale_logo} from '../../config/images'
    export default {
        data () {
            return {
                imagesTop : [
                    tokopedia, concensys, goldman_sachs
                ],
                imagesBot : [
                    mit_logo, kampus_logo, kampus_logo, yale_logo
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