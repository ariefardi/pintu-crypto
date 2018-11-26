<template>
    <v-container>
        <v-card flat v-for="(blog, index) in blogs" :key="index">
            <v-container class="container-card">
                <v-card-text class="title-date font-weight-bold">
                    {{blog.publish_date | getDate}}
                </v-card-text>
                <v-card-text class="title-header" >
                    {{blog.title}}
                </v-card-text>
                <v-card-text v-html="blog.content" class="isi-blog" />
            </v-container>
            <v-divider></v-divider>
        </v-card>
    </v-container>
</template>

<script>
    import moment from 'moment'
    export default {
        props: ['blogs'],
        data () {
            return {

            }
        },
        filters : {
            getDate (value) {
                let date = moment(value.seconds*1000).format("MMMM Do YYYY");
                return date
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
    @media only screen and (max-width: 480px) {
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
            padding-left: 3rem;
            padding-right: 3rem;
        }
    }
</style>