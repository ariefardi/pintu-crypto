<template>
    <div>
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
            <!--<v-menu style="margin-left: 16px" open-on-hover top offset-y>-->
                <!--<div slot="activator">-->
                    <!--<img v-if="!toggle_exclusive" class="img-flag"  :src="flagUSA" alt="">-->
                    <!--<img v-if="toggle_exclusive" class="img-flag"  :src="flagINDO" alt="">-->
                <!--<v-icon>keyboard_arrow_down</v-icon>-->
                <!--</div>-->

                <!--<v-list>-->
                    <!--<v-list-tile-->
                            <!--v-for="(flag, index) in flags"-->
                            <!--:key="index"-->
                            <!--@click="changeLanguage(flag.value)"-->
                    <!--&gt;-->
                        <!--&lt;!&ndash;<v-list-tile-title>{{ flag.value }}</v-list-tile-title>&ndash;&gt;-->
                        <!--<img class="img-flag"  :src="flag.image" alt="">-->
                    <!--</v-list-tile>-->
                <!--</v-list>-->
            <!--</v-menu>-->
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn :ripple="false" v-if="page!=='home'" to="/" class="button-menu" @click="topScroll" flat>
                    <p style="padding: 0;margin: 0;">App</p>
                </v-btn>
                <v-btn :ripple="false" v-if="page==='home'"  to="/" class="button-menu" style="border-bottom: 3px solid blue" @click="topScroll" flat>
                    <p style="padding: 0;margin: 0;">App</p>
                </v-btn>


                <v-btn :ripple="false" v-if="page!=='about'" to="/about" class="button-menu" @click="topScroll" flat>
                    About
                </v-btn>
                <v-btn :ripple="false" v-if="page==='about'" to="/about" class="button-menu" style="border-bottom: 3px solid blue" @click="topScroll"  flat>
                    About
                </v-btn>

                <v-btn :ripple="false" v-if="page!=='blog'"  to="/blog" class="button-menu" @click="topScroll"  flat>
                    Blog
                </v-btn>
                <v-btn :ripple="false" v-if="page==='blog'" to="/blog" class="button-menu" style="border-bottom: 3px solid blue" @click="topScroll"  flat>
                    Blog
                </v-btn>
            </v-toolbar-items>
            <v-spacer></v-spacer>
            <v-btn  v-if="width>=960" class="button-download" color="#1867c0">Download</v-btn>
            <v-toolbar-side-icon  v-if="width<960" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        </v-toolbar>
        <v-toolbar v-if="width<960" style="margin-right: 400px" fixed id="nav-class" flat >
            <v-btn-toggle v-if="width<960" @change="triggerToggle" v-model="toggle_exclusive">
                <v-btn class="button-toggle" v-if="!this.toggle_exclusive" color="blue darken-4" :value="0" >
                    <img class="img-flag" :src="flagUSA" alt="">
                </v-btn>
                <v-btn  v-if="this.toggle_exclusive" color="blue-grey lighten-4" :value="0" >
                    <img class="img-flag" :src="flagUSA" alt="">
                </v-btn>
                <v-btn class="button-toggle" v-if="this.toggle_exclusive" color="blue darken-4" :value="1">
                    <img class="img-flag" :src="flagINDO" alt="">
                </v-btn>
                <v-btn v-if="!this.toggle_exclusive" color="blue-grey lighten-4" :value="1">
                    <img class="img-flag" :src="flagINDO" alt="">
                </v-btn>
            </v-btn-toggle>
            <v-spacer></v-spacer>
            <img class="logo-image" :src="logo" alt="">
            <v-spacer></v-spacer>
            <!--<v-toolbar-side-icon style="color: black" v-if="width<960 && page==='blog' && scroll<180" @click.stop="drawer = !drawer"></v-toolbar-side-icon>-->
            <!--<v-toolbar-side-icon style="color: black;" v-if="width<960 && page==='blog' && scroll>180" @click.stop="drawer = !drawer"></v-toolbar-side-icon>-->
            <!--<v-toolbar-side-icon  v-if="width<960 && page==='home'" @click.stop="drawer = !drawer"></v-toolbar-side-icon>-->
            <!--<v-toolbar-side-icon  v-if="width<960 && page==='about'" @click.stop="drawer = !drawer"></v-toolbar-side-icon>-->
            <v-toolbar-side-icon  v-if="width<960" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        </v-toolbar>

        <v-navigation-drawer
                v-model="drawer"
                fixed
                temporary
                right
                v-if="drawer"
                width="100"
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
    import  {logoImage, flagUSA, flagINDO} from "../../../config/images";
    import {mapState, mapActions} from 'vuex'
    import $ from "jquery";
    export default {
        created () {
            this.checkPage()
            this.checkVersionsStorage()
        },
        mounted () {
            this.checkingSize()
            this.checkPage()
            this.checkVersionsStorage()
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
                width: 2000,
                height: 2000,
                drawer: null,
                items: [
                    { title: 'App', location: '/' },
                    { title: 'Blog', location: '/blog' },
                    { title: 'About', location: '/about' },
                    { title: 'Download', location: '/' }
                ],
                flags: [
                    {
                        image: flagUSA,
                        value: 0,
                    },
                    {
                        image: flagINDO,
                        value: 1,
                    }
                ],
                right: null,
                scroll: 0
            }
        },
        methods: {
            ...mapActions([
                'changeVersion'
            ]),
            topScroll () {
              window.scrollTo(0,0)
            },
            onScroll () {
                console.log('scrollll')
                $(window).scroll(function(e) {
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
                  this.$store.dispatch('changeVersion', 'indonesia')
              }
              else {
                  this.toggle_exclusive = 0
                  this.$store.dispatch('changeVersion', 'english')
              }
            },
            triggerToggle (e) {
                console.log(e)
                this.changeVersion(e)
            },
            changeLanguage (value) {
                console.log(value)
                this.toggle_exclusive = value
                this.changeVersion(value)
            },
            toLocation (location) {
                this.$router.push(location)
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
        margin-left: 2rem;
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
    }
    .position-drawer {
        margin-top: 2rem;
    }

    @media only screen and (max-width: 960px) {
        .logo-image {
            width: 64px;
            margin-left: -24px !important;
        }
    }
</style>