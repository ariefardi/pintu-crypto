<template>
    <!--<div class="container-image">-->
    <v-card>
        <v-responsive :aspect-ratio="16/9">
        <div v-if="version==='english'" class="center">
            <v-card-text class="header-title color-white font-weight-heavy margin-top-minus"> {{content.title_english}} </v-card-text>
            <v-card-text class="paragraph .text-no-wrap">
                {{content.p1_english}}
            </v-card-text>
            <v-card-text class="paragraph .text-no-wrap">
                {{content.p2_english}}
            </v-card-text>
            <v-card-text class="paragraph">
                {{content.p3_english}}
            </v-card-text>
            <v-card-text class="paragraph .text-no-wrap">
                {{content.p4_english}}
            </v-card-text>
        </div>
        <div v-if="version==='indonesia'" class="center">
            <v-card-text class="header-title color-white font-weight-heavy margin-top-minus">{{content.title_indo}}</v-card-text>
            <v-card-text class="paragraph .text-no-wrap">
                {{content.p1_indo}}
            </v-card-text>
            <v-card-text class="paragraph .text-no-wrap">
                {{content.p2_indo}}
            </v-card-text>
            <v-card-text class="paragraph .text-no-wrap">
                {{content.p3_indo}}
            </v-card-text>
            <v-card-text class="paragraph .text-no-wrap">
                {{content.p4_indo}}
            </v-card-text>
        </div>

        <!--<div class="opacity-image">-->
            <img :src="image" alt="Cinque Terre" class="hero-image-name">
        <!--</div>-->
    <!--</div>-->
        </v-responsive>
    </v-card>
</template>

<script>
import {BlueCandi} from "../../config/images";
import {mapState} from 'vuex'
import {our_name} from '../../config/documentAbout'
    export default {
    computed: {
        ...mapState([
            'version'
        ])
    },
        data () {
            return {
                image: BlueCandi,
                content: our_name
            }
        }
    }
</script>

<style>
    .center {
        position: absolute;
        top: 45%;
        left: 50%;
        margin: auto;
        width: 100%;
        padding: 3rem;
        transform: translate(-50%, -50%);
    }
    .hero-image-name {
        width: 100%;
        height: auto;
    }
    .header-title {
        z-index: 9999;
        color: white;
        font-size: 4.5vw;
        text-align: center;
    }
    .paragraph {
        z-index: 9999;
        color: white;
        font-size: 2vw;
        text-align: center;
        padding-top: 16px;
        padding-bottom: 16px;
    }
    /*.margin-top-minus {*/
        /*margin-top: -12rem;*/
    /*}*/
    @media only screen and (max-width: 720px) {
        .paragraph {
            z-index: 9999;
            color: white;
            font-size: 2vw;
            text-align: center;
            padding-top: 4px;
            padding-bottom: 4px;
        }
        .header-title {
            z-index: 9999;
            color: white;
            font-size: 4.5vw;
            text-align: center;
            padding-top: 4px;
            padding-bottom: 4px;
        }
    }
    /*@media only screen and (max-width: 1200px) {*/
        /*.header-title {*/
            /*font-weight: 700;*/
            /*z-index: 9999;*/
            /*color: white;*/
            /*font-size: 40px;*/
            /*text-align: center;*/
            /*margin-top: 1rem;*/
            /*margin-bottom: 2rem;*/
        /*}*/
        /*.paragraph {*/
            /*z-index: 9999;*/
            /*color: white;*/
            /*font-size: 26px;*/
            /*text-align: center;*/
        /*}*/
    /*}*/
    /*@media only screen and (max-width: 1040px) {*/
        /*.header-title {*/
            /*font-weight: 700;*/
            /*z-index: 9999;*/
            /*color: white;*/
            /*font-size: 36px;*/
            /*text-align: center;*/
            /*margin-top: -1rem;*/
            /*margin-bottom: -1rem;*/
        /*}*/
        /*.paragraph {*/
            /*z-index: 9999;*/
            /*color: white;*/
            /*font-size: 20px;*/
            /*text-align: center;*/
        /*}*/
    /*}*/
    /*@media only screen and (max-width: 800px) {*/
        /*.header-title {*/
            /*font-weight: 700;*/
            /*z-index: 9999;*/
            /*color: white;*/
            /*font-size: 24px;*/
            /*text-align: center;*/

            /*margin-top: -1rem;*/
            /*margin-bottom: -1rem;*/
        /*}*/
        /*.paragraph {*/
            /*z-index: 9999;*/
            /*color: white;*/
            /*font-size: 14px;*/
            /*text-align: center;*/
        /*}*/
    /*}*/
    /*@media only screen and (max-width: 630px) {*/
        /*.header-title {*/
            /*font-weight: 700;*/
            /*z-index: 9999;*/
            /*color: white;*/
            /*font-size: 16px;*/
            /*text-align: center;*/

            /*margin-top: -1rem;*/
            /*margin-bottom: -1rem;*/
        /*}*/
        /*.paragraph {*/
            /*z-index: 9999;*/
            /*color: white;*/
            /*font-size: 10px;*/
            /*text-align: center;*/
        /*}*/
    /*}*/

    /*@media only screen and (max-width: 560px) {*/
        /*.header-title {*/
            /*font-weight: 700;*/
            /*z-index: 9999;*/
            /*color: white;*/
            /*font-size: 14px;*/
            /*text-align: center;*/
            /*padding-bottom: 0 !important;*/
        /*}*/
        /*.paragraph {*/
            /*margin-top: -8px;*/
            /*z-index: 9999;*/
            /*color: white;*/
            /*font-size: 8px;*/
            /*text-align: center;*/
        /*}*/
    /*}*/
    /*@media only screen and (max-width: 420px) {*/
        /*.header-title {*/
            /*font-weight: 700;*/
            /*z-index: 9999;*/
            /*color: white;*/
            /*font-size: 14px;*/
            /*text-align: center;*/
            /*margin-bottom: 1rem;*/
            /*margin-top: 1rem;*/

        /*}*/
        /*.paragraph {*/
            /*z-index: 9999;*/
            /*color: white;*/
            /*font-size: 8px;*/
            /*text-align: center;*/
            /*padding-top: 10px;*/
            /*padding-bottom: 10px;*/
        /*}*/
    /*}*/
    /*@media only screen and (max-width: 400px) {*/
        /*.header-title {*/
            /*font-weight: 700;*/
            /*z-index: 9999;*/
            /*color: white;*/
            /*font-size: 12px;*/
            /*text-align: center;*/

        /*}*/
        /*.paragraph {*/
            /*z-index: 9999;*/
            /*color: white;*/
            /*font-size: 8px;*/
            /*padding-top: 4px;*/
            /*text-align: center;*/
        /*}*/
    /*}*/

</style>

