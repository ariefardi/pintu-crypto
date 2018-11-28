<template>
    <v-container class="page-wrapper" fluid>
        <HeroImage />
        <BlogContainer v-if="blogs.length" :blogs="blogs" />
        <h1 v-if="!blogs.length">Loading....</h1>
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
            this.$store.dispatch('changeVersion', version)
        }
    }
</script>

<style scoped>
    .page-wrapper {
        padding: 0;
    }
</style>