<template>
    <v-container>
        <v-card flat>
            <v-card-title class="title-header font-weight-medium">
                <h1 v-if="version==='english'" class="text-join" > {{title_english}}</h1>
                <h1 v-if="version==='indonesia'" class="text-join" > {{title_indo}}</h1>
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
    export default {
        computed: {
            ...mapState([
                'version'
            ])
        },
        data () {
            return {
                title_english : "Our Mission is to accelerate the transition to an open financial system",
                title_indo: "Misi kami adalah mempercepat transisi menuju sistem keuangan terbuka"
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

    .button-join {
        text-transform: capitalize;
        color: white !important;
    }
    .text-join {
        font-size: 56px;
        font-weight: 500;
        text-align: center
    }
    @media only screen and (max-width: 720px) {
        .text-join {
            font-size: 28px;
            font-weight: 500;
            text-align: center
        }
    }
</style>