<template>
    <div class="container-image">
        <img class="image-candi" :src="image_hero" alt="Cinque Terre">
    </div>
</template>

<script>
    import imageHero from '../../assets/candi_1.png'
    export default {
        data () {
            return {
                image_hero: imageHero
            }
        }
    }

</script>

<style scoped>
    .container-image {
        position: relative;
    }


    img {
        width: 100%;
        height: auto;
    }
    p {
        font-family: Avenir;
    }
    .header-title {
        font-weight: 700;
    }


</style>