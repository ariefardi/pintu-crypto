<template>
    <v-container>
        <v-card flat>
            <v-container class="container-card">
                <v-card-title v-if="version=='english'" class="title-style" >
                    {{title_english}}
                </v-card-title>
                <v-card-title v-if="version=='indonesia'" class="title-style" >
                    {{title_indo}}
                </v-card-title>
                <v-container>
                    <v-layout align-center justify-center column fill-height>
                        <img class="image-phone" width="30% !important" :src="image1" />
                        <img class="image-phone" width="25% !important" :src="image2" />
                    </v-layout>
                </v-container>
            </v-container>
        </v-card>
    </v-container>
</template>

<script>
    import {playstore, phone} from "../../config/images";
    import {mapState} from 'vuex'
    export default {
        mounted () {
            this.checkingSize()
        },
        data () {
            return {
                image1: playstore,
                image2: phone,
                width: 2000,
                height: 2000,
                title_english: "Easiest place for buying crypto",
                title_indo: "Tempat termudah untuk jual beli crypto"

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
                console.log("ini x", x)
            }
        }
    }
</script>


<style >
    .container-card {
        text-align: center;
    }
    .title-style {
        font-size: 56px;
        padding: 4rem;
        padding-bottom: 0px !important;
        padding-top: 0px !important;
        width: 70%;
        margin: auto;
        font-weight: 500;
    }
    .image-phone {
        padding-left: 0px;
    }
    @media only screen and (max-width: 720px) {
        .container-card {
            text-align: center !important;
        }
        .title-style {
            font-size: 22px !important;
            padding: 4rem;
            padding-bottom: 0px !important;
            padding-top: 0px !important;
            width: 100% !important;
            margin: auto;
            font-weight: 500;
        }
    }

</style>