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
            <v-card-text v-if="version==='indonesia'" class="white--text pt-0 title-footer">
                    Buka Pintu ke Dunia Kripto
            </v-card-text>
            <v-card-text v-if="version==='english'" class="white--text pt-0 title-footer">
                    Enter the crypto world through Pintu
            </v-card-text>
            <!--<a href="" id="playstore">-->
                <!--<img class="image-footer" :src="image" alt="">-->
            <!--</a>-->
            <v-container fluid>
                <v-layout row wrap>
                    <v-flex sm12 md9>
                    <v-layout justify-end align-center row  class="logo-margin to-center-content" >
                    <v-flex xs4 sm2 md2 v-for="(icon, index) in icons" :key="index">
                        <a @click="toSocialMedia(icon.url)">
                            <img class="icon-footer" :src="icon.icon" alt="">
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
    import {mapState} from 'vuex'
    export default {
        computed: {
            ...mapState([
                'version'
            ])
        },
        mounted () {
            this.checkingSize()
        },
        data: () => ({
            image: playstore,
            width: 2000,
            height: 1900,
            icons: [
                {
                    icon: instagram,
                    url: "https://www.instagram.com/pintu.co.id/"
                },
                {
                    icon: facebook,
                    url: "https://www.facebook.com/pintu.co.id/"
                },
                {
                    icon: twitter,
                    url: "https://twitter.com/pintuasset"
                },
                {
                    icon: message,
                    url: "https://api.whatsapp.com/send?phone=6282122828696&text=&source=&data="
                },
                // instagram, facebook, twitter, message
            ]
        }),
        methods: {
            toSocialMedia(url) {
                if (url==="https://api.whatsapp.com/send?phone=6282122828696&text=&source=&data=")  {
                    window.open(
                        url,
                        '_blank' // <- This is what makes it open in a new window.
                    );
                }
                else {
                    window.open(
                        url,
                        '_blank' // <- This is what makes it open in a new window.
                    );
                }
            },
            checkingSize () {
                window.addEventListener('resize', (e) => {
                    this.width = e.target.innerWidth
                    this.height = e.target.innerHeight
                    if (this.width<756) {
                        this.icons[3].url = 'https://api.whatsapp.com/send?phone=6282122828696&text=&source=&data='
                    }
                    else {
                        this.icons[3].url = 'https://web.whatsapp.com/send?phone=6282122828696'
                    }
                })
                var w = window,
                    d = document,
                    e = d.documentElement,
                    g = d.getElementsByTagName('body')[0],
                    x = w.innerWidth || e.clientWidth || g.clientWidth,
                    y = w.innerHeight|| e.clientHeight|| g.clientHeight;
                this.width = x
                this.height = y
                if (this.width<756) {
                    this.icons[3].url = 'https://api.whatsapp.com/send?phone=6282122828696&text=&source=&data='
                }
                else {
                    this.icons[3].url = 'https://web.whatsapp.com/send?phone=6282122828696'
                }

            }
        }
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