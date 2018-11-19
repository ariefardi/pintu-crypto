<template>
    <v-container>
        <v-card flat>
            <v-card-title class="card-title">
                <h1 class="text-join" >Our Mission is to accelerate the transition to an open financial system</h1>
            </v-card-title>
            <v-container>
                <v-layout align-center justify-center row fill-height>
                    <v-btn class="button-join" color="#1867c0">Join Us!</v-btn>
                </v-layout>
            </v-container>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        data () {
            return {}

        }
    }
</script>

<style scoped>
    .card-title {
        padding-left: 14rem;
        padding-right: 14rem;
    }
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
        .card-title {
            padding-left: 0;
            padding: 0 !important;
        }
    }
</style>