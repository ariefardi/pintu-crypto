<template>
    <v-container>
        <v-layout align-center justify-center column fill-height>
            <v-card flat>
                <v-card-title>
                    <h1 class="title-header font-weight-bold">{{title_english}}</h1>
                </v-card-title>
                <div v-for="(value, index) in values_english" :key="index" style="width: 100%;padding: 2rem;">
                    <v-card-text class="values-sub-title font-weight-medium align-center">
                        {{value.sub_title}}
                    </v-card-text>
                    <v-card-text>
                        <p class="values-contain color-grey">
                           {{value.container}}
                        </p>
                    </v-card-text>
                </div>
            </v-card>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data () {
            return {
                title_english: "Our Values",
                values_english: [
                    {
                        sub_title: "Impact through Innovation",
                        container: `We Focus on delivering meaningful impact by creating a revolutionary
                                    experience through the product and the customer's experience. We push
                                    the boundary with our thirst for engineering excellence and pefection.`
                    },
                    {
                        sub_title: "Integrity through Transparency",
                        container: `We share information openly and proactively. You area responsible and
                        accountable for the work you have agreed so that poeple can trust you.
                        No politics. You only say things about other employees to their face, not
                        behind their back. You admit mistakes openly`
                    },
                    {
                        sub_title: "Passion through teamwork and selflessness",
                        container: `You fight for what is best for Pintu's Vision above group/ team's
                        success and contribute your energy to make it happen. You area quietly
                        confident and openly humble You are acknowledged for your
                        performance and merit- not your tenure, age, pr seniority.
                        `
                    },
                ],
                values_indonesia: [
                    {
                        sub_title: "Dampak melalui Inovasi",
                        container: `Kami Fokus untuk memberikan dampak yang berarti dengan menciptakan revolusi
                                    pengalaman melalui produk dan pengalaman pelanggan. Kami mendorong batas dengan
                                    kehausan kita akan keunggulan teknik dan pefeksi.`
                    },
                    {
                        sub_title: "Integritas melalui Transparansi",
                        container: `Kami berbagi informasi secara terbuka dan proaktif. Anda bertanggung jawab danbertanggung jawab atas pekerjaan yang telah Anda sepakati sehingga poeple dapat mempercayai Anda.Tanpa politik. Anda hanya mengatakan hal-hal tentang karyawan lain ke wajah mereka,bukan di belakang punggung mereka. Anda mengakui kesalahan secara terbuka`
                    },
                    {
                        sub_title: "Passion through teamwork and selflessness",
                        container: `Anda berjuang untuk yang terbaik untuk Visi Pintu di atas grup / tim
                                    sukses dan sumbangkan energi Anda untuk mewujudkannya. Daerah Anda diam-diam
                                    percaya diri dan terbuka rendah hati Anda diakui untuk Anda
                                    kinerja dan tidak menghargai jabatan Anda, usia, dan senioritas.
                                    `
                    },
                ]
            }
        }
    }
</script>

<style>
    .values-title{
        text-align: center;
        margin: auto;
        font-size: 44px !important;
        font-weight: 500;
    }
    .values-sub-title {
        text-align: center;
        margin: auto;
        font-size: 28px !important;
        font-weight: 500;
    }
    .values-contain {
        text-align: center;
        margin: auto;
        font-size: 24px !important;
        font-weight: 500;
    }

    @media only screen and (max-width: 720px) {
        .values-contain {
            text-align: center;
            margin: auto;
            font-size: 14px !important;
            font-weight: 500;
        }
        .values-sub-title {
            text-align: center;
            margin: auto;
            font-size: 16px !important;
            font-weight: 500;
        }
    }
</style>