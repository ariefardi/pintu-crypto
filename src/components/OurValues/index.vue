<template>
    <v-container>
        <v-layout align-center justify-center column fill-height>
            <v-card v-if="version==='english'" flat>
                <v-card-title>
                    <h1 class="title-header font-weight-heavy">{{title_english}}</h1>
                </v-card-title>
                <div v-for="(value, index) in values_english" :key="index" style="width: 100%;padding: 2rem;">
                    <v-card-text class="values-sub-title font-weight-heavy align-center">
                        {{value.sub_title}}
                    </v-card-text>
                    <v-card-text>
                        <p class="values-contain color-grey">
                           {{value.content}}
                        </p>
                    </v-card-text>
                </div>
            </v-card>

            <v-card v-if="version==='indonesia'" flat>
                <v-card-title>
                    <h1 class="title-header font-weight-heavy">{{title_indo}}</h1>
                </v-card-title>
                <div v-for="(value, index) in values_indonesia" :key="index" style="width: 100%;padding: 2rem;">
                    <v-card-text class="values-sub-title font-weight-heavy align-center">
                        {{value.sub_title}}
                    </v-card-text>
                    <v-card-text>
                        <p class="values-contain color-grey">
                            {{value.content}}
                        </p>
                    </v-card-text>
                </div>
            </v-card>
        </v-layout>
    </v-container>
</template>

<script>
    import {our_values} from '../../config/documentAbout'
    import {mapState} from 'vuex'
    export default {
        computed: {
            ...mapState([
                'version'
            ])
        },
        data () {
            return {
                title_english: our_values.title_english,
                title_indo: our_values.title_indo,
                values_english: our_values.card_value.value_english ,
                values_indonesia: our_values.card_value.value_indo ,
            }
        }
    }
</script>

<style>
    .values-sub-title {
        text-align: center;
        margin: auto;
        font-size: 28px !important;
    }
    .values-contain {
        text-align: center;
        margin: auto;
        font-size: 24px !important;
    }

    @media only screen and (max-width: 720px) {
        .values-contain {
            text-align: center;
            margin: auto;
            font-size: 14px !important;
        }
        .values-sub-title {
            text-align: center;
            margin: auto;
            font-size: 16px !important;
        }
    }
</style>