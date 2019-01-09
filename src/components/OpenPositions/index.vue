<template>
    <v-container id="positions-job" fluid>
        <v-layout align-center justify-center column fill-height>
            <v-card flat>
                <div v-if="version=='english'" class="container-job">
                    <v-card-title>
                        <h1 class="title-header font-weight-heavy"> {{title_english}} </h1>
                    </v-card-title>
                    <div v-for="(value, index) in values_english" :key="index" style="width: 100%;padding: 2rem;">
                        <v-card-text class="position-title font-weight-heavy color-blue align-left">
                            {{value.job_name}}
                        </v-card-text>
                        <v-card-text>
                            <p class="position-container">
                                {{value.job_desc}}
                            </p>
                        </v-card-text>
                    </div>
                    <v-card-text class="position-container font-weight-heavy align-center">
                        {{our_position.sub_content_1_english}}
                    </v-card-text>
                    <v-card-text class="position-container font-weight-heavy align-center">
                        {{our_position.sub_content_2_english}} <a href="/" class="color-blue font-weight-heavy hrd-link" > {{our_position.email}} </a>
                    </v-card-text>
                </div>

                <div v-if="version=='indonesia'" class="container-job">
                    <v-card-title>
                        <h1 class="title-header font-weight-heavy"> {{title_english}} </h1>
                    </v-card-title>
                    <div v-for="(value, index) in values_indo" :key="index" style="width: 100%;padding: 2rem;">
                        <v-card-text class="position-title font-weight-heavy color-blue align-left">
                            {{value.job_name}}
                        </v-card-text>
                        <v-card-text>
                            <p class="position-container">
                                {{value.job_desc}}
                            </p>
                        </v-card-text>
                    </div>
                    <v-card-text class="position-container font-weight-heavy align-center">
                        {{our_position.sub_content_1_indo}}
                    </v-card-text>
                    <v-card-text class="position-container font-weight-heavy align-center">
                        {{our_position.sub_content_2_indo}} <a @click="emailSend()" class="color-blue font-weight-heavy hrd-link" > {{our_position.email}} </a>
                    </v-card-text>
                </div>
            </v-card>
        </v-layout>
    </v-container>
</template>

<script>
    import {mapState} from 'vuex'
    import {our_position} from '../../config/documentAbout'
    export default {
        computed: {
            ...mapState([
                'version'
            ])
        },
        data () {
            return {
                title_english: "Open Positions",
                our_position: our_position,
                values_english: our_position.values_english,
                values_indo: our_position.values_indo
            }
        },
        methods: {
            emailSend () {
                window.location.href = "mailto:hr@pintu.co.id?subject=Subject&body=message%20goes%20here";
            }
        }

    }
</script>


<style>
    .container-job {
        padding: 1rem 2rem;
    }
    .position-title {
        margin: auto;
        font-size: 28px !important;
    }

    .position-container {
        text-align: left;
        margin: auto;
        font-weight: 500;
        font-size: 24px;
    }
    @media only screen and (max-width: 480px) {
        .container-job {
            padding: 0px 1rem !important;
        }
        .position-title{
            text-align: center;
            margin: auto;
            font-size: 28px !important;
            font-weight: 500;
        }
        .position-sub-title {
            text-align: left;
            margin: auto;
            font-size: 14px !important;
            font-weight: 500;
            color: blue;
            padding-top: 0px !important;
        }

        .position-container {
            text-align: left;
            margin: auto;
            font-weight: 500;
            font-size: 14px;
            padding-top: 0px !important;
        }
    }
    .hrd-link {
        color: #1347C9;
    }
    .hrd-link:link {
        text-decoration: none;
    }
    .hrd-link:hover {
        text-decoration: none;
        cursor: pointer;
        color: dodgerblue;
    }
    no-padding {
        padding: 0;
    }
</style>