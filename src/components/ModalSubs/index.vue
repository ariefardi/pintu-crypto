<template>
    <div class="text-xs-center">
        <v-dialog
                v-model="dialogGet"
                width="500"
        >
            <v-card>
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
                <v-card-text>


                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                            color="primary"
                            flat
                            @click="closeDialog"
                    >
                        Close
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    export default {
        computed: {
            dialogGet: {
                get () {
                    return this.$store.state.dialog
                },
                set (value) {
                    this.$store.commit('setDialog', value)
                }
            }
        },
        methods: {
            closeDialog() {
                this.$store.commit('setDialog', false)
            }
        }
    }
</script>