<template>
    <div class="container-image">
        <img v-if="width>480" class="image-candi" :src="image_hero" alt="Cinque Terre">
    </div>
</template>

<script>
    // import imageHero from '../../assets/candi_1.png'
    import {candi1} from "../../config/images";

    export default {
        mounted () {
        },
        data () {
            return {
                image_hero: candi1,
            }
        },

    }

</script>

<style scoped>
    .container-image {
        position: relative;
    }


    .image-candi {
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