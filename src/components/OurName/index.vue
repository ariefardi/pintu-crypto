<template>
    <div class="container-image">
        <div v-if="version==='english'" class="center">
            <v-card-text class="header-title color-white font-weight-bold">Our Name</v-card-text>
            <v-card-text class="paragraph">
                Pintu is the Indonesian word for door. Doors area not only to
                safeguard belongings when closed, but also allow for new encounters and
                exchanges when opened.
            </v-card-text>
            <v-card-text class="paragraph">
                Our founders were frustrated with the existing financial system, especially
                when they encountered high fees, the painful process, and non-transparent
                nature of the existing financial system. Our experience led us to believe in
                moving towards an open financial system, one that is not controlled by one
                company or country (just like what the internet did for information).
            </v-card-text>
            <v-card-text class="paragraph">
                Imagine if anyone who had a smartphone can have access to the same
                financial services enjoyed by the upper tier
            </v-card-text>
            <v-card-text class="paragraph">
                We believe an open financial system can bring the biggest impact and lift
                billions out of peverty. Our plan is to take this opportunity to change the
                world.
            </v-card-text>
        </div>
        <div v-if="version==='indonesia'" class="center">
            <v-card-text class="header-title color-white font-weight-medium">Our Name</v-card-text>
            <v-card-text class="paragraph">
                Pintu adalah kata bahasa Indonesia untuk pintu. Area pintu tidak hanya untuk
                mengamankan barang-barang ketika ditutup, tetapi juga memungkinkan untuk pertemuan baru dan
                pertukaran saat dibuka.
            </v-card-text>
            <v-card-text class="paragraph">
                Pendiri kami frustrasi dengan sistem keuangan yang ada, khususnya
                ketika mereka menghadapi biaya tinggi, proses yang menyakitkan, dan tidak transparan
                sifat dari sistem keuangan yang ada. Pengalaman kami membuat kami percaya
                bergerak menuju sistem keuangan terbuka, yang tidak dikendalikan oleh satu
                perusahaan atau negara (seperti apa yang dilakukan internet untuk mendapatkan informasi).
            </v-card-text>
            <v-card-text class="paragraph">
                Bayangkan jika siapa pun yang memiliki smartphone dapat memiliki akses yang sama
                jasa keuangan dinikmati oleh tingkat atas
            </v-card-text>
            <v-card-text class="paragraph">
                Kami percaya sistem keuangan terbuka dapat membawa dampak dan pengangkatan terbesar
                miliaran dari peverty. Rencana kami adalah mengambil kesempatan ini untuk mengubah
                dunia.
            </v-card-text>
        </div>

        <!--<div class="opacity-image">-->
            <img :src="image" alt="Cinque Terre" class="hero-image-name">
        <!--</div>-->
    </div>
</template>

<script>
import {BlueCandi} from "../../config/images";
import {mapState} from 'vuex'
    export default {
    computed: {
        ...mapState([
            'version'
        ])
    },
        data () {
            return {
                image: BlueCandi
            }
        }
    }
</script>

<style>
    .container-image {
        position: relative;
        height: auto;

    }

    .center {
        position: absolute;
        top: 50%;
        left: 50%;
        margin: auto;
        width: 100%;
        padding: 3rem;
        transform: translate(-50%, -50%);
    }
    .hero-image-name {
        width: 100%;
        height: auto;
    }
    .header-title {
        z-index: 9999;
        color: white;
        font-size: 44px;
        text-align: center;
        margin-top: -12rem;
        margin-bottom: 2rem;
    }
    .paragraph {
        z-index: 9999;
        color: white;
        font-size: 28px;
        text-align: center;
    }
    @media only screen and (max-width: 1200px) {
        .header-title {
            font-weight: 700;
            z-index: 9999;
            color: white;
            font-size: 40px;
            text-align: center;
            margin-top: 1rem;
            margin-bottom: 2rem;
        }
        .paragraph {
            z-index: 9999;
            color: white;
            font-size: 26px;
            text-align: center;
        }
    }
    @media only screen and (max-width: 1040px) {
        .header-title {
            font-weight: 700;
            z-index: 9999;
            color: white;
            font-size: 36px;
            text-align: center;
            margin-top: -1rem;
            margin-bottom: -1rem;
        }
        .paragraph {
            z-index: 9999;
            color: white;
            font-size: 20px;
            text-align: center;
        }
    }
    @media only screen and (max-width: 800px) {
        .header-title {
            font-weight: 700;
            z-index: 9999;
            color: white;
            font-size: 24px;
            text-align: center;

            margin-top: -1rem;
            margin-bottom: -1rem;
        }
        .paragraph {
            z-index: 9999;
            color: white;
            font-size: 14px;
            text-align: center;
        }
    }
    @media only screen and (max-width: 630px) {
        .header-title {
            font-weight: 700;
            z-index: 9999;
            color: white;
            font-size: 16px;
            text-align: center;

            margin-top: -1rem;
            margin-bottom: -1rem;
        }
        .paragraph {
            z-index: 9999;
            color: white;
            font-size: 10px;
            text-align: center;
        }
    }

    @media only screen and (max-width: 560px) {
        .header-title {
            font-weight: 700;
            z-index: 9999;
            color: white;
            font-size: 14px;
            text-align: center;
            padding-bottom: 0 !important;
        }
        .paragraph {
            margin-top: -8px;
            z-index: 9999;
            color: white;
            font-size: 8px;
            text-align: center;
        }
    }
    @media only screen and (max-width: 420px) {
        .header-title {
            font-weight: 700;
            z-index: 9999;
            color: white;
            font-size: 14px;
            text-align: center;
            margin-bottom: 1rem;
            margin-top: 1rem;

        }
        .paragraph {
            z-index: 9999;
            color: white;
            font-size: 8px;
            text-align: center;
            padding-top: 10px;
            padding-bottom: 10px;
        }
    }
    @media only screen and (max-width: 400px) {
        .header-title {
            font-weight: 700;
            z-index: 9999;
            color: white;
            font-size: 12px;
            text-align: center;

        }
        .paragraph {
            z-index: 9999;
            color: white;
            font-size: 8px;
            padding-top: 4px;
            text-align: center;
        }
    }

</style>

