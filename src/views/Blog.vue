<template>
    <v-container class="page-wrapper" fluid>
        <HeroImage />
        <BlogContainer />
    </v-container>
</template>

<script>
    import HeroImage from '../components/HeroImage'
    import BlogContainer from '../components/BlogContainer'
    export default {
        components: {
            HeroImage, BlogContainer
        },
        data () {
            return {

            }
        },
        mounted () {
            this.$store.commit('setPage', this.$route.name)
        }
    }
</script>

<style scoped>
    .page-wrapper {
        padding: 0;
    }
</style>