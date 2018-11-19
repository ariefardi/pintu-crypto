<template>
    <v-container>
        <v-card flat>
            <v-container class="container-card">
                <v-card-text class="title-date">
                    10 November 2018
                </v-card-text>
                <v-card-title class="title-style" >
                    Keamanan Brankas.
                    Kemudahan Uang Kas.
                </v-card-title>
                <v-card-text class="isi-blog">
                    Setiap Transaksi Token dan Crypto Currency disimpan diatas ledger book yang
                </v-card-text>
            </v-container>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        data () {
            return {

            }
        }
    }
</script>

<style scoped>
    .container-card {
        text-align: center;
    }
    .title-style {
        font-size: 56px;
        padding: 0;
        width: 70%;
        margin: auto;
    }
    .title-date {
        font-size: 24px;
        font-weight: 500;
        color: slategrey;
        padding: 0;
    }
    .isi-blog {
        font-size: 24px;
        font-weight: 700;
        color: slategrey;
        padding-left: 3rem;
        padding-right: 3rem;
    }
</style>