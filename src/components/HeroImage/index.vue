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
    import {imageHero} from '../../config/images'
    import {heroImageMobile} from "../../config/images";

    export default {
        mounted () {
            this.changeImage()
            this.onResize()
        },
        data () {
            return {
                image_hero: imageHero,
                width: 0,
                height: 0
            }
        }
        ,
        methods: {
            changeImage () {
                if (window.innerWidth<=480) {
                    this.image_hero  = heroImageMobile
                    this.width = 480
                }
                else {
                    this.image_hero  = imageHero
                    this.width = 1440
                }
            },
            onResize () {
                window.addEventListener('resize', (e) => {
                    this.width = e.target.innerWidth
                    this.height = e.target.innerHeight
                    if (this.width<=480) {
                        this.image_hero  = heroImageMobile
                    }
                    else {
                        this.image_hero  = imageHero
                    }
                })
                var w = window,
                    d = document,
                    e = d.documentElement,
                    g = d.getElementsByTagName('body')[0],
                    x = w.innerWidth || e.clientWidth || g.clientWidth,
                    y = w.innerHeight|| e.clientHeight|| g.clientHeight;
                this.width = x
                this.height = y

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