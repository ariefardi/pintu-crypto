<template>
        <v-layout align-center >
            <v-card  flat style="width: 100%">
                <v-card-title
                        class="headline font-weight-bold justify-center"
                        primary-title
                >
                    Thank You
                </v-card-title>

                <v-card-text class="align-center">
                    <h2>We will notify you on update for Pintu</h2>
                    <h2>
                        We will send news to your inbox!
                    </h2>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-text class="font-weight-bold">
                    <p>Back to our <a class="link-home" @click="toHome">home</a></p>
                </v-card-text>

            </v-card>
        </v-layout>
</template>

<script>
    export default {
        mounted () {
            this.$store.commit('setPage', 'thank')
        },
        methods: {
            toHome() {
                this.$router.push('/')
            }
        }
    }
</script>

<style>
    .link-home {
        text-decoration: none;
    }
</style>