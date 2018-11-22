<template>
    <v-footer
            dark
            height="auto"
    >
        <v-card
                flat
                tile
                class="color-card white--text text-xs-center"
                width="100%"
        >
            <v-card-text class="white--text pt-0 title-footer">
                    Buka Pintu ke Dunia Kripto
            </v-card-text>
            <a href="">
                <img class="image-footer" :src="image" alt="">
            </a>
            <div>
                <a v-for="(icon, index) in icons" :key="index" href="/">
                    <img class="icon-footer" :src="icon" alt="">
                </a>
                <v-card-text class="reserved white--text">
                    &copy;2018 — <strong>PT Valar Alpha Sejahtera.</strong>
                    <br>
                    <strong>All rights reserved.</strong>
                </v-card-text>
            </div>



            <v-divider></v-divider>

        </v-card>
    </v-footer>
</template>

<script>
    import instagram from '../../assets/instagram.png'
    import facebook from '../../assets/facebook.png'
    import twitter from '../../assets/twitter.png'
    import mail_logo from '../../assets/mail_logo.png'
    import message from '../../assets/message.png'
    import google_play from '../../assets/google_play.png'
    export default {
        data: () => ({
            image: google_play,
            icons: [
                instagram, facebook, twitter, mail_logo, message
            ]
        })
    }
</script>

<style>
    .icon-footer {
        width: 36px;
        height: 36px;
        margin: 2rem;
    }
    .title-footer {
        font-size: 28px;
        margin-top: 2rem;
        font-weight: 500;
    }
    .color-card {
        background-color: blue !important;
    }
    .image-footer {
        width: 20%;
    }
    .reserved {
        text-align: right;
    }
</style>