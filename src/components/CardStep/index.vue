<template>
    <v-flex >
    <v-container>
        <v-card flat>
            <v-container class="card-container">
                <v-layout align-start justify-center column fill-height>
                    <h1 class="title-header font-weight-heavy justify-center padding-mobile">{{title1}}</h1>
                    <h1 class="title-header font-weight-heavy justify-center padding-mobile">{{title2}}</h1>
                </v-layout>
                <v-container>
                    <v-layout align-center justify-center column fill-height>
                        <img class="phone-image image-web image-mobile"  :src="phoneImage" />
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
    import {playstore, phone} from "../../config/images";
    export default {
        props: ['title1','title2' ,'phoneImage', 'isi'],
        data () {
            return {
                image1: phone,
                image2: playstore
            }
        }
    }
</script>
<style>
@media only screen and (max-width: 300px) {
    .padding-mobile {
        padding-left: 0px;
        padding-right: 0px;
    }
}
</style>

