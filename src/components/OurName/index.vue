<template>
    <div class="container-image">
        <div v-if="version==='english'" class="center">
            <p class="header-title">Our Name</p>
            <p  class="paragraph">
                Pintu is the Indonesian word for door. Doors area not only to
                safeguard belongings when closed, but also allow for new encounters and
                exchanges when opened.
            </p>
            <p class="paragraph">
                Our founders were frustrated with the existing financial system, especially
                when they encountered high fees, the painful process, and non-transparent
                nature of the existing financial system. Our experience led us to believe in
                moving towards an open financial system, one that is not controlled by one
                company or country (just like what the internet did for information).
            </p>
            <p class="paragraph">
                Imagine if anyone who had a smartphone can have access to the same
                financial services enjoyed by the upper tier
            </p>
            <p class="paragraph">
                We believe an open financial system can bring the biggest impact and lift
                billions out of peverty. Our plan is to take this opportunity to change the
                world.
            </p>
        </div>
        <div v-if="version==='indonesia'" class="center">
            <p class="header-title">Our Name</p>
            <p  class="paragraph">
                Pintu adalah kata bahasa Indonesia untuk pintu. Area pintu tidak hanya untuk
                mengamankan barang-barang ketika ditutup, tetapi juga memungkinkan untuk pertemuan baru dan
                pertukaran saat dibuka.
            </p>
            <p class="paragraph">
                Pendiri kami frustrasi dengan sistem keuangan yang ada, khususnya
                ketika mereka menghadapi biaya tinggi, proses yang menyakitkan, dan tidak transparan
                sifat dari sistem keuangan yang ada. Pengalaman kami membuat kami percaya
                bergerak menuju sistem keuangan terbuka, yang tidak dikendalikan oleh satu
                perusahaan atau negara (seperti apa yang dilakukan internet untuk mendapatkan informasi).
            </p>
            <p class="paragraph">
                Bayangkan jika siapa pun yang memiliki smartphone dapat memiliki akses yang sama
                jasa keuangan dinikmati oleh tingkat atas/
            </p>
            <p class="paragraph">
                Kami percaya sistem keuangan terbuka dapat membawa dampak dan pengangkatan terbesar
                miliaran dari peverty. Rencana kami adalah mengambil kesempatan ini untuk mengubah
                dunia.
            </p>
        </div>

        <div class="opacity-image">
            <img :src="image" alt="Cinque Terre" class="hero-image-name">
        </div>
    </div>
</template>

<script>
import {candi2} from "../../config/images";
import {mapState} from 'vuex'
    export default {
    computed: {
        ...mapState([
            'version'
        ])
    },
        data () {
            return {
                image: candi2
            }
        }
    }
</script>

<style>
    .container-image {
        position: relative;
        height: auto;
    }
    .opacity-image {
        background-color: blue;
    }

    .center {
        position: absolute;
        top: 50%;
        left: 50%;
        margin: auto;
        width: 100%;
        padding: 3rem;
        transform: translate(-50%, -50%);
        filter: opacity(100%);
        -webkit-filter: opacity(100%);
    }
    .hero-image-name {
        width: 100%;
        height: auto;
        filter: opacity(30%);
        -webkit-filter: opacity(30%);
    }

    p {
        font-family: Avenir;
    }
    .header-title {
        font-weight: 700;
        z-index: 9999;
        color: white;
        font-size: 56px;
        text-align: center;
        filter: opacity(100%);
        -webkit-filter: opacity(100%);
    }
    .paragraph {
        z-index: 9999;
        color: white;
        font-size: 24px;
        text-align: center;
        filter: opacity(100%);
        -webkit-filter: opacity(100%);
    }
    @media only screen and (max-width: 900px) {
        .header-title {
            font-weight: 700;
            z-index: 9999;
            color: white;
            font-size: 44px;
            text-align: center;

            filter: opacity(100%);
            -webkit-filter: opacity(100%);
        }
        .paragraph {
            z-index: 9999;
            color: white;
            font-size: 20px;
            text-align: center;
            filter: opacity(100%);
            -webkit-filter: opacity(100%);
        }
    }
    @media only screen and (max-width: 760px) {
        .header-title {
            font-weight: 700;
            z-index: 9999;
            color: white;
            font-size: 28px;
            text-align: center;

            filter: opacity(100%);
            -webkit-filter: opacity(100%);
        }
        .paragraph {
            z-index: 9999;
            color: white;
            font-size: 14px;
            text-align: center;
            filter: opacity(100%);
            -webkit-filter: opacity(100%);
        }
    }

    @media only screen and (max-width: 560px) {
        .header-title {
            font-weight: 700;
            z-index: 9999;
            color: white;
            font-size: 20px;
            text-align: center;
padding-top: 8px;
            padding-bottom: 0 !important;
            filter: opacity(100%);
            -webkit-filter: opacity(100%);
        }
        .paragraph {
            margin-top: -8px;
            z-index: 9999;
            color: white;
            font-size: 10px;
            text-align: center;
            filter: opacity(100%);
            -webkit-filter: opacity(100%);
        }
    }
    @media only screen and (max-width: 420px) {
        .header-title {
            font-weight: 700;
            z-index: 9999;
            color: white;
            font-size: 16px;
            text-align: center;

            filter: opacity(100%);
            -webkit-filter: opacity(100%);
        }
        .paragraph {
            z-index: 9999;
            color: white;
            font-size: 8px;
            text-align: center;
            filter: opacity(100%);
            -webkit-filter: opacity(100%);
        }
    }@media only screen and (max-width: 370px) {
        .header-title {
            font-weight: 700;
            z-index: 9999;
            color: white;
            font-size: 12px;
            text-align: center;

            filter: opacity(100%);
            -webkit-filter: opacity(100%);
        }
        .paragraph {
            z-index: 9999;
            color: white;
            font-size: 8px;
            text-align: center;
            filter: opacity(100%);
            -webkit-filter: opacity(100%);
        }
    }

</style>

