<template>
    <v-container id="positions-job" fluid>
        <v-layout align-center justify-center column fill-height>
            <v-card flat>
                <div class="container-job">
                    <v-card-title>
                        <h1 class="title-header"> {{title_english}} </h1>
                    </v-card-title>
                    <div v-for="(value, index) in values_english" :key="index" style="width: 100%;padding: 2rem;">
                        <v-card-text class="subheader font-weight-medium color-blue align-left">
                            {{value.position}}
                        </v-card-text>
                        <v-card-text>
                            <p class="position-container">
                                {{value.description}}
                            </p>
                        </v-card-text>
                    </div>
                    <v-card-text class="position-container font-weight-medium align-center">
                        Interested?
                    </v-card-text>
                    <v-card-text class="position-container font-weight-medium align-center">
                        Let's Talk! <a href="/" class="color-blue font-weight-medium hrd-link" > hr@pintu.co.id </a>
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
                title_english: "Open Positions",
                values_english: [
                    {
                        position: "Senior Backend Engineer",
                        description: `We Focus on delivering meaningful impact by creating a revolutionary
                                    experience through the product and the customer's experience. We push
                                    the boundary with our thirst for engineering excellence and pefection.`
                    },
                    {
                        position: "Other Positions",
                        description: `We share information openly and proactively. You area responsible and
                        accountable for the work you have agreed so that poeple can trust you.
                        No politics. You only say things about other employees to their face, not
                        behind their back. You admit mistakes openly`
                    }
                ]
            }
        }
    }
</script>


<style>
    .container-job {
        padding: 1rem 2rem;
    }
    .position-sub-title {
        text-align: left;
        margin: auto;
        font-size: 28px !important;
        font-weight: 500;
        color: blue;
    }

    .position-container {
        text-align: left;
        margin: auto;
        font-weight: 500;
        font-size: 24px;
    }
    @media only screen and (max-width: 480px) {
        .container-job {
            padding: 0px 1rem !important;
        }
        .position-title{
            text-align: center;
            margin: auto;
            font-size: 28px !important;
            font-weight: 500;
        }
        .position-sub-title {
            text-align: left;
            margin: auto;
            font-size: 14px !important;
            font-weight: 500;
            color: blue;
            padding-top: 0px !important;
        }

        .position-container {
            text-align: left;
            margin: auto;
            font-weight: 500;
            font-size: 14px;
            padding-top: 0px !important;
        }
    }
    .hrd-link {
        color: #1347C9;
    }
    .hrd-link:link {
        text-decoration: none;
    }
    .hrd-link:hover {
        text-decoration: none;
        cursor: pointer;
        color: dodgerblue;
    }
    no-padding {
        padding: 0;
    }
</style>