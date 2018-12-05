<template>
    <v-container style="margin-top: 1rem">
        <v-card flat>
            <v-container class="card-container">
                <v-card-title  v-if="version=='english'" class="title-header font-weight-heavy align-center justify-center" >
                    {{title_english}}
                </v-card-title>
                <v-card-title v-if="version=='indonesia'" class="title-header font-weight-heavy align-center justify-center" >
                    {{title_indo}}
                </v-card-title>
                <v-container>
                    <v-layout align-center justify-center column fill-height>
                        <!--<v-img class="phone-image image-web image-mobile" :src="image1+'?lazy'" />-->
                        <video class="phone-image image-web image-mobile" style="background-color: transparent !important;" loop muted autoplay>
                            <source :src="video" type="video/mp4">
                        </video>
                        <v-img class="phone-image google-play"  :src="image2+'?lazy'" />
                    </v-layout>
                </v-container>
            </v-container>
        </v-card>
    </v-container>
</template>

<script>
    import {playstore, phone, video} from "../../config/images";
    import {mapState} from 'vuex'
    import {google_play} from '../../config/documentHome.json'
    export default {
        mounted () {
            this.checkingSize()
        },
        data () {
            return {
                image1: phone,
                image2: playstore,
                width: 2000,
                height: 2000,
                title_english: google_play.title_english,
                title_indo: google_play.title_indo,
                video

            }
        },
        computed: {
            ...mapState([
                "version"
            ])
        },
        methods: {
            checkingSize () {
                window.addEventListener('resize', (e) => {
                    this.width = e.target.innerWidth
                    this.height = e.target.innerHeight
                })
                var w = window,
                    d = document,
                    e = d.documentElement,
                    g = d.getElementsByTagName('body')[0],
                    x = w.innerWidth || e.clientWidth || g.clientWidth,
                    y = w.innerHeight|| e.clientHeight|| g.clientHeight;
                this.width = x
                this.height = y
            }
        }
    }
</script>


<!--<style >-->
    <!--.container-card {-->
        <!--text-align: center;-->
    <!--}-->
    <!--.title-style {-->
        <!--font-size: 56px;-->
        <!--padding: 4rem;-->
        <!--padding-bottom: 0px !important;-->
        <!--padding-top: 0px !important;-->
        <!--width: 70%;-->
        <!--margin: auto;-->
        <!--font-weight: 500;-->
    <!--}-->
    <!--.image-phone {-->
        <!--padding-left: 0px;-->
    <!--}-->
    <!--@media only screen and (max-width: 720px) {-->
        <!--.container-card {-->
            <!--text-align: center !important;-->
        <!--}-->
        <!--.title-style {-->
            <!--font-size: 22px !important;-->
            <!--padding: 4rem;-->
            <!--padding-bottom: 0px !important;-->
            <!--padding-top: 0px !important;-->
            <!--width: 100% !important;-->
            <!--margin: auto;-->
            <!--font-weight: 500;-->
        <!--}-->
    <!--}-->

<!--</style>-->