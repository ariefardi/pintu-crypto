<template>
    <div class="container-image">
        <div class="center">
            <p class="header-title">Dibalik Pintu</p>
            <p class="subheader-title">The Official Pintu Blog</p>
        </div>
        <img :src="image_hero" alt="Cinque Terre" class="hero-image">
    </div>
</template>

<script>
    import imageHero from '../../assets/pintu.png'
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

    .center {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 18px;
    }
    .hero-image {
        width: 100%;
        height: auto;
    }

    p {
        font-family: Avenir;
    }
    .header-title {
        font-weight: 700;
        z-index: 9999;
        color: white;
        font-size: 56px;
        text-align: center
    }
    .subheader-title {
        z-index: 9999;
        color: white;
        font-size: 44px;
        text-align: center;
    }
    @media only screen and (max-width: 720px) {
        .header-title {
            font-weight: 700;
            z-index: 9999;
            color: white;
            font-size: 28px !important;
            text-align: center
        }
        .subheader-title {
            z-index: 9999;
            color: white;
            font-size: 14px !important;
            text-align: center;
        }
        .center {
            position: absolute;
            top: 60%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 18px;
        }
        .hero-image {
            width: 100%;
            height: 200px;
        }
    }

</style>