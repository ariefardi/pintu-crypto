<template>
    <v-footer
            dark
            height="auto"
    >
        <v-card
                flat
                tile
                class="color-card white--text text-xs-center"
                width="100%"
        >
            <v-card-text class="white--text pt-0 title-footer">
                    Buka Pintu ke Dunia Kripto
            </v-card-text>
            <a href="">
                <img class="image-footer" :src="image" alt="">
            </a>
            <v-container fluid>
                <v-layout row wrap>
                    <v-layout justify-end row>
                    <v-flex  xs4 sm2 v-for="(icon, index) in icons" :key="index">
                        <a  href="/">
                            <img class="icon-footer" :src="icon" alt="">
                        </a>
                    </v-flex>
                    </v-layout>
                    <v-flex xs12 sm2>
                    <v-layout justify-end>
                    <v-flex xs12 sm12 >
                        <v-card-text class="reserved white--text">
                            &copy;2018 — <strong>PT Valar Alpha Sejahtera.</strong>
                            <br>
                            <strong>All rights reserved.</strong>
                        </v-card-text>
                    </v-flex>
                    </v-layout>
                    </v-flex>
                </v-layout>
            </v-container>



            <v-divider></v-divider>

        </v-card>
    </v-footer>
</template>

<script>
    import {
        instagram,
        facebook,
        twitter,
        mail_logo,
        message,
        playstore
    } from '../../config/images.js'
    export default {
        data: () => ({
            image: playstore,
            icons: [
                instagram, facebook, twitter, mail_logo, message
            ]
        })
    }
</script>

<style>
    .icon-footer {
        width: 36px;
        height: 36px;
        margin: 2rem;
    }
    .title-footer {
        font-size: 28px;
        margin-top: 2rem;
        font-weight: 500;
    }
    .color-card {
        background-color: blue !important;
    }
    .image-footer {
        width: 20%;
    }
    .reserved {
        text-align: right;
    }
    @media only screen and (max-width: 720px) {
        .image-footer {
            width: 40%;
        }
    }
</style>