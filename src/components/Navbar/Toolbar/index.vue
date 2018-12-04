<template>
    <div>

        <!--Toolbar versi Web-->
        <v-toolbar id="nav-class" style="margin-right: 300px" fixed flat>
            <img v-if="width>960" class="logo-image" :src="logo" alt="">
            <v-btn-toggle v-if="width>960" style="margin-left: 1rem" @change="triggerToggle" v-model="toggle_exclusive">
                <v-btn class="button-toggle" v-if="!this.toggle_exclusive" color="blue darken-4" :value="0" >
                    <img class="img-flag" :src="flagUSA" alt="">
                </v-btn>
                <v-btn  v-if="this.toggle_exclusive" color="blue-grey lighten-4" :value="0" >
                    <img class="img-flag" :src="flagUSA" alt="">
                </v-btn>
                <v-btn class="button-toggle" v-if="this.toggle_exclusive" color="blue darken-4" :value="1">
                    <img class="img-flag" :src="flagINDO" alt="">
                </v-btn>
                <v-btn v-if="!this.toggle_exclusive" color="blue-grey lighten-4"  :value="1">
                    <img class="img-flag" :src="flagINDO" alt="">
                </v-btn>
            </v-btn-toggle>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down" style="margin-right: 4rem">
                <v-btn :ripple="false" v-if="page!=='home'" to="/" class="button-menu" @click="topScroll" flat>
                    <p style="padding: 0;margin: 0;">App</p>
                </v-btn>
                <v-btn :ripple="false" v-if="page==='home'"  to="/" class="button-menu" style="border-bottom: 3px solid blue; margin-bottom: 2px" @click="topScroll" flat>
                    <p style="padding: 0;margin: 0;">App</p>
                </v-btn>


                <v-btn :ripple="false" v-if="page!=='about'" to="/about" class="button-menu" @click="topScroll" flat>
                    About
                </v-btn>
                <v-btn :ripple="false" v-if="page==='about'" to="/about" class="button-menu" style="border-bottom: 3px solid blue; margin-bottom: 2px" @click="topScroll"  flat>
                    About
                </v-btn>

                <v-btn :ripple="false" v-if="page!=='blog'"  to="/blog" class="button-menu" @click="topScroll"  flat>
                    Blog
                </v-btn>
                <v-btn :ripple="false" v-if="page==='blog'" to="/blog" class="button-menu" style="border-bottom: 3px solid blue; margin-bottom: 2px" @click="topScroll"  flat>
                    Blog
                </v-btn>
            </v-toolbar-items>
            <v-spacer></v-spacer>
            <v-btn  v-if="width>=960" @click="toDownload" class="button-download" color="#1867c0">Download</v-btn>
            <v-toolbar-side-icon  v-if="width<960" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        </v-toolbar>
        <!--Toolbar versi Web-->


        <!--Toolbar versi Mobile-->
        <v-toolbar v-if="width<960" style="margin-right: 400px" fixed id="nav-class" flat >
            <!--<v-btn-toggle v-if="width<960" @change="triggerToggle" v-model="toggle_exclusive">-->
                <!--<v-btn small class="button-toggle" v-if="!this.toggle_exclusive" color="blue darken-4" :value="0" >-->
                    <!--<img class="img-flag" :src="flagUSA" alt="">-->
                <!--</v-btn>-->
                <!--<v-btn small  v-if="this.toggle_exclusive" color="blue-grey lighten-4" :value="0" >-->
                    <!--<img class="img-flag" :src="flagUSA" alt="">-->
                <!--</v-btn>-->
                <!--<v-btn small class="button-toggle" v-if="this.toggle_exclusive" color="blue darken-4" :value="1">-->
                    <!--<img class="img-flag" :src="flagINDO" alt="">-->
                <!--</v-btn>-->
                <!--<v-btn small v-if="!this.toggle_exclusive" color="blue-grey lighten-4" :value="1">-->
                    <!--<img class="img-flag" :src="flagINDO" alt="">-->
                <!--</v-btn>-->
            <!--</v-btn-toggle>-->
            <v-menu offset-y >
                <!--<v-btn-->
                        <!--slot="activator"-->
                        <!--color="primary"-->
                        <!--dark-->
                <!--&gt;-->
                    <!--Dropdown-->
                <!--</v-btn>-->
                <v-btn slot="activator" small class="button-toggle width-button" v-if="!this.toggle_exclusive" flat >
                    <img class="img-flag" :src="flagUSA" style="padding: 0;text-align: center;" alt="">
                    <v-icon small >arrow_drop_down</v-icon>
                </v-btn>
                <v-btn  slot="activator" small class="button-toggle width-button" v-if="this.toggle_exclusive" flat >
                    <img class="img-flag" :src="flagINDO" style="padding: 0; text-align: center;" alt="">
                    <v-icon small >arrow_drop_down</v-icon>
                </v-btn>
                <v-list>
                    <v-list-tile
                            v-for="(item, index) in itemsButton"
                            :key="index"
                            @click="triggerToggle(item.value)"
                    >
                        <img class="img-flag" :src="item.flag" alt="">
                    </v-list-tile>
                </v-list>
            </v-menu>
            <v-spacer></v-spacer>
            <!--<img class="logo-image" :src="logoAja" style="margin-right: 1.5rem" alt="">-->
            <img class="logo-image" :src="logo" style="margin-right: 1.5rem; width: 38px; height: auto;" alt="">
            <v-spacer></v-spacer>
            <!--<v-toolbar-side-icon style="color: black" v-if="width<960 && page==='blog' && scroll<180" @click.stop="drawer = !drawer"></v-toolbar-side-icon>-->
            <!--<v-toolbar-side-icon style="color: black;" v-if="width<960 && page==='blog' && scroll>180" @click.stop="drawer = !drawer"></v-toolbar-side-icon>-->
            <!--<v-toolbar-side-icon  v-if="width<960 && page==='home'" @click.stop="drawer = !drawer"></v-toolbar-side-icon>-->
            <!--<v-toolbar-side-icon  v-if="width<960 && page==='about'" @click.stop="drawer = !drawer"></v-toolbar-side-icon>-->
            <v-toolbar-side-icon  v-if="width<960" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        </v-toolbar>
        <!--Toolbar versi Mobile-->



        <v-navigation-drawer
                v-model="drawer"
                fixed
                temporary
                right
                v-if="drawer"
                width="200"
        >
            <v-list class="pt-0 position-drawer" dense>
                <v-divider></v-divider>
                <v-layout align-center justify-end row fill-height>
                    <v-flex xs12>
                        <v-list-tile
                                v-for="item in items"
                                :key="item.title"
                                @click="toLocation(item.location)"
                        >

                                <v-list-tile-content >
                                    <v-list-tile-title style="text-align: right">{{ item.title }}</v-list-tile-title>
                                </v-list-tile-content>
                        </v-list-tile>
                    </v-flex>
                </v-layout>

            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
    import  {logoImage, flagUSA, flagINDO, logoAja} from "../../../config/images";
    import {mapState, mapActions} from 'vuex'
    import $ from "jquery";
    export default {
        created () {
            // this.checkPage()
            this.checkVersionsStorage()
        },
        mounted () {
            this.checkingSize()
            this.checkPage()
            // this.checkVersionsStorage()
            this.onScroll()
        },
        components: {
        },
        computed: {
            ...mapState([
                "page"
            ]),
            page : {
                get () {
                    return this.$store.state.page
                },
                set (value) {
                    this.$store.commit('setPage', value)
                }
            }
        },
        data () {
            return {
                flagUSA: flagUSA,
                flagINDO: flagINDO,
                toggle_exclusive: 0,
                downloadPosition: false,
                logo : logoImage,
                logoAja: logoAja ,
                width: 2000,
                height: 2000,
                drawer: null,
                items: [
                    { title: 'App', location: '/' },
                    { title: 'Blog', location: '/blog' },
                    { title: 'About', location: '/about' },
                    { title: 'Download', location: '/download' }
                ],
                right: null,
                scroll: 0,
                // itemsButton: [flagUSA, flagINDO]
                itemsButton:[
                    {
                        flag: flagUSA,
                        value: 0
                    },
                    {
                        flag: flagINDO,
                        value: 1
                    }
                ]
            }
        },
        methods: {
            ...mapActions([
                'changeVersion'
            ]),
            checkButton() {
              console.log('oke deh')
            },
            toDownload () {
              $('html, body').animate({
                  scrollTop: $("#playstore").offset().top
              }, 2000)
            },
            topScroll () {
                $('html, body').animate({
                    scrollTop: (0,0)
                }, 0)

            },
            onScroll () {
                $(window).scroll(function() {
                    let temp = $(window).scrollTop()
                    if (temp>200)  {
                        this.downloadPosition = true
                        document.getElementById('nav-class').style.backgroundColor = "white"
                    }
                    else if(temp<=200) {
                        this.downloadPosition = false
                        document.getElementById('nav-class').style.backgroundColor = "transparent"
                    }

                })
            },
            checkVersionsStorage () {
              let version = localStorage.getItem('version')
              if (version==1) {
                  this.toggle_exclusive = 1
                  this.$store.dispatch('changeVersion', 1)
              }
              else {
                  this.toggle_exclusive = 0
                  this.$store.dispatch('changeVersion', 0)
              }
            },
            triggerToggle (e) {
                this.toggle_exclusive = e
                this.changeVersion(e)
            },
            toLocation (location) {
                if (location=="/download") {
                    this.toDownload()
                }
                else {
                    this.$router.push(location)
                }
            },
            checkPage () {
                this.page = this.$route.name
            },
            checkingSize () {
                window.addEventListener('resize', (e) => {
                    this.width = e.target.innerWidth
                    this.height = e.target.innerHeight
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


<style>
    #nav-class {
        background-color: transparent ;
    }
    #download-layout {
        background-color: transparent ;
    }
    .logo-image {
        width: 64px;
    }
    .button-download {
        text-transform: capitalize;
        color: white !important;
    }
    .button-menu {
        font-size: 24px;
        margin-left: 2rem !important;
        margin-right: 2rem !important;
        text-transform: capitalize;
        color: lightslategrey !important;
    }
    .button-toggle {
        color: white !important;
    }
    .img-flag {
        width: 24px;
        height: auto;
        margin: 0;
    }
    .position-drawer {
        margin-top: 2rem;
    }

    @media only screen and (max-width: 960px) {
        .logo-image {
            width: 64px;
            margin-left: -36px !important;
        }
        .width-button {
            width: 32px !important;
        }
    }
    @media only screen and (max-width: 756px) {
        .img-flag {
            width: 24px;
            height: auto;
        }
    }
</style>