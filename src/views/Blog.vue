<template>
    <v-container class="page-wrapper" fluid>
        <HeroImage />
        <BlogContainer v-if="blogs.length" :blogs="blogs" />
        <Footer />
    </v-container>
</template>

<script>
    import HeroImage from '../components/HeroImage'
    import BlogContainer from '../components/BlogContainer'
    import {mapState} from 'vuex'
    import Footer from '../components/Footer'
    export default {
        components: {
            HeroImage, BlogContainer, Footer
        },
        data () {
            return {

            }
        },
        computed: {
            ...mapState([
                'blogs'
            ])
        },
        mounted () {
            let version = localStorage.getItem('version')
            this.$store.commit('setPage', this.$route.name)
            console.log('version berapa', version)
            if (version==0) {
                this.$store.dispatch('fetchingBlogs', 'english')
            }
            else if(version==1) {
                this.$store.dispatch('fetchingBlogs', 'indonesia')
            }

        }
    }
</script>

<style scoped>
    .page-wrapper {
        padding: 0;
    }
</style>