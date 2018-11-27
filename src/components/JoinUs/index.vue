<template>
    <v-container>
        <v-card flat>
            <v-card-title class="title-join no-padding justify-center"  >
                <h1 v-if="version==='english'" class="text-join font-weight-heavy " > {{title_english}}</h1>
                <h1 v-if="version==='indonesia'" class="text-join font-weight-heavy " > {{title_indo}}</h1>
            </v-card-title>
            <v-container>
                <v-layout align-center justify-center row fill-height>
                    <v-btn @click="scrollDown" class="button-join" color="#1867c0">Join Us!</v-btn>
                </v-layout>
            </v-container>
        </v-card>
    </v-container>
</template>

<script>
    import {mapState} from 'vuex'
    import {join_us} from '../../config/documentAbout.json'
    export default {
        computed: {
            ...mapState([
                'version'
            ])
        },
        data () {
            return {
                title_english : join_us.title_english ,
                title_indo: join_us.title_indo
            }

        },
        methods: {
            scrollDown () {
                console.log("image work")
                window.scrollBy({
                    top: 500, // could be negative value
                    left: 0,
                    behavior: 'smooth'
                });
                location.href = "#positions-job"

            }
        }
    }
</script>

<style scoped>
    .title-join {
        font-size: 56px;
        padding-bottom: 0px !important;
        padding-top: 0px !important;
        width: 100%;
        margin: auto;
        text-align: center;
        color: #1D1D1D;
    }

    .button-join {
        text-transform: capitalize;
        color: white !important;
    }
    .text-join {
        font-size: 56px;
    }
    @media only screen and (max-width: 720px) {
        .text-join {
            font-size: 28px;
        }
    }
</style>