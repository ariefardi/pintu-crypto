<template>
    <v-container fluid>
        <v-card flat v-for="(blog, index) in blogs" :key="index">
            <v-container>
                <v-layout row wrap align-center justify-center>
                    <v-flex xs12>
                        <v-card-text class="title-date font-weight-heavy">
                            {{blog.publish_date | getDate}}
                        </v-card-text>
                    </v-flex>
                    <v-flex xs12>
                        <v-card-text class="title-header" >
                            {{blog.title}}
                        </v-card-text>
                    </v-flex>
                    <v-flex xs12>
                        <img class="image-content" :src="blog.images" alt="">
                    </v-flex>
                </v-layout>
            </v-container>
            <v-flex xs12>
                <v-card-text v-html="blog.content" class="isi-blog" />
            </v-flex>
            <v-divider></v-divider>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        props: ['blogs'],
        data () {
            return {

            }
        },
        filters : {
            getDate (value) {
                const data = new Date(value.seconds*1000)
                var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                const indexMonth = data.getMonth()
                let month = months[indexMonth]
                let day = data.getDate()
                let year = data.getFullYear()
                console.log(day,month, year)
                return `${day} ${month} ${year}`
            }
        }
    }
</script>

<style scoped>
    .container-card {
        text-align: center !important;
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
    @media only screen and (max-width: 756px) {
        .title-style {
            font-size: 28px;
            padding: 0;
            width: 70%;
        }
        .title-date {
            font-size: 14px;
            font-weight: 500;
            color: slategrey;
            padding: 0;
        }
        .isi-blog {
            font-size: 14px;
            font-weight: 700;
            color: slategrey;
            padding-left: 12px;
            padding-right: 12px;
        }
    }
    .image-content {
        width: 100% !important;
    }
</style>