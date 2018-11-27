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
                    <v-flex sm12 md9>
                    <v-layout justify-end align-center row  class="logo-margin to-center-content" >
                    <v-flex xs4 sm2 md2 v-for="(icon, index) in icons" :key="index">
                        <a  href="/">
                            <img class="icon-footer" :src="icon" alt="">
                        </a>
                    </v-flex>
                    </v-layout>
                    </v-flex>
                    <v-flex xs12 sm12 md3>
                    <v-layout justify-end align-end>
                    <v-flex xs12 sm12 >
                        <v-card-text class="align-right align-center-change white--text no-padding justify-end to-center-content">
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
        message,
        playstore
    } from '../../config/images.js'
    export default {
        data: () => ({
            image: playstore,
            icons: [
                instagram, facebook, twitter, message
            ]
        })
    }
</script>

<style>
    .icon-footer {
        width: 36px;
        height: 36px;
    }
    .title-footer {
        font-size: 28px;
        margin-top: 2rem;
        font-weight: 600;
    }
    .color-card {
        background-color: #1347C9 !important;
    }
    .image-footer {
        width: 20%;
    }
    @media only screen and (max-width: 1200px) {

        .logo-margin {
            margin-right: 2.5rem !important;
        }
    }
    @media only screen and (max-width: 960px) {
        .to-center-content {
            justify-content: center !important;
            margin-top: 2rem;
        }
        .align-center-change {
            text-align: center !important;
        }
    }
    @media only screen and (max-width: 720px) {
        .image-footer {
            width: 40%;
        }
        .logo-margin {
            margin-right: 0rem !important;
        }
    }
</style>