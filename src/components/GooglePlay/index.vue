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
                    <v-layout v-if="!saver" align-center justify-center column fill-height>
                        <!--<v-img class="phone-image image-web image-mobile" :src="image1+'?lazy'" />-->
                        <video  class="phone-image image-web image-mobile" style="background-color: transparent !important;" loop muted autoplay>
                            <source :src="video" type="video/mp4">
                            <img :src="image1" alt="">
                            your browser not support video tag
                        </video>
                        <!--<v-img class="phone-image google-play"  :src="image2+'?lazy'" />-->
                    </v-layout>
                    <v-layout v-if="saver" align-center justify-center column fill-height>
                        <!--<v-img class="phone-image image-web image-mobile" :src="image1+'?lazy'" />-->
                        <!--<video class="phone-image image-web image-mobile" style="background-color: transparent !important;" playsinline controls muted>-->
                            <!--<source :src="video" type="video/mp4">-->
                            <!--<img :src="image1" alt="">-->
                            <!--your browser not support video tag-->
                        <!--</video>-->
                        <img class="phone-image image-web image-mobile" :src="image1" alt="">
                        <!--<v-img class="phone-image google-play"  :src="image2+'?lazy'" />-->
                    </v-layout>
                </v-container>
            </v-container>
        </v-card>
    </v-container>
</template>

<script>
    import {playstore, video, video2} from "../../config/images";
    import {mapState} from 'vuex'
    import {google_play} from '../../config/documentHome.json'
    import feelesKecil from '../../assets/feeless kecil.png'
    export default {
        mounted () {
            this.checkingSize()
            this.checkingDataSaver()
        },
        data () {
            return {
                image1: feelesKecil,
                image2: playstore,
                width: 2000,
                height: 2000,
                title_english: google_play.title_english,
                title_indo: google_play.title_indo,
                video,
                video2,
                saver: null

            }
        },
        computed: {
            ...mapState([
                "version"
            ])
        },
        methods: {
            checkingDataSaver () {
                if('connection' in navigator){
                    if(navigator.connection.saveData){
                        console.log(`Your save data mode is = ${navigator.connection.saveData}`)
                        console.log('ini true', navigator.connection.saveData)
                        this.saver = true
                    }else{
                        console.log(`Your save data mode is = ${navigator.connection.saveData}`)
                        console.log('ini false', navigator.connection.saveData)
                        this.saver = false
                    }
                }
            },
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