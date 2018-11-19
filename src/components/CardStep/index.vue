<template>
    <v-flex xs12>
    <v-container>
        <v-card flat>
            <v-container class="container-card">
                <v-layout align-center justify-center column fill-height>
                    <h1 class="title-style">{{title1}}</h1>
                    <h1 class="title-style">{{title2}}</h1>
                </v-layout>
                <v-container>
                    <v-layout align-center justify-center column fill-height>
                        <img class="image-phone" width="30% !important" :src="phoneImage" />
                    </v-layout>
                    <v-card-text class="isi-blog">
                        {{isi}}
                    </v-card-text>
                </v-container>
            </v-container>
        </v-card>
    </v-container>
    </v-flex>
</template>

<script>
    import phone1 from '../../assets/phone.png'
    import playstore from '../../assets/google_play.png'
    export default {
        props: ['title1','title2' ,'phoneImage', 'isi'],
        data () {
            return {
                image1: phone1,
                image2: playstore
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
        text-align: center !important;
    }
    .image-phone {
        padding-left: 0px;
    }
    .isi-blog {
        font-size: 24px;
        font-weight: 700;
        color: slategrey;
        padding-left: 3rem;
        padding-right: 3rem;
    }
    @media only screen and (max-width: 720px) {
        .isi-blog {
            font-size: 14px !important;
            padding: 0px;
            padding-bottom: 0px !important;
            padding-top: 0px !important;
            width: 100% !important;
            margin: auto;
            font-weight: 500;
        }
    }

</style>