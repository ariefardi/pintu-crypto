<template>
    <div>
        <v-toolbar  v-if="width>=960" style="margin-right: 300px" fixed class="nav-class" flat scroll-off-screen>
            <img class="logo-image" :src="logo" alt="">
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn to="/" class="button-menu" flat>App</v-btn>
                <v-btn to="/blog" class="button-menu" flat>Blog</v-btn>
                <v-btn to="/about" class="button-menu" flat>About</v-btn>
            </v-toolbar-items>
            <v-spacer></v-spacer>
            <v-toolbar-side-icon  v-if="width<960" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-btn-toggle  @change="triggerToggle" v-model="toggle_exclusive">
                <v-btn class="button-toggle" v-if="!this.toggle_exclusive" color="blue" :value="0" >
                    EN
                </v-btn>
                <v-btn  v-if="this.toggle_exclusive" :value="0" >
                    EN
                </v-btn>
                <v-btn class="button-toggle" v-if="this.toggle_exclusive" color="blue" :value="1">
                    ID
                </v-btn>
                <v-btn v-if="!this.toggle_exclusive"  :value="1">
                    ID
                </v-btn>
            </v-btn-toggle>
            <v-layout slot="extension"  align-center row reverse fill-height>
                <v-btn  v-if="width>=960" class="button-download" color="#1867c0">Download</v-btn>
            </v-layout>
        </v-toolbar>
        <v-toolbar v-if="width<960" style="margin-right: 300px" fixed class="nav-class" flat scroll-off-screen>
            <v-spacer></v-spacer>
            <img class="logo-image" :src="logo" alt="">
            <v-spacer></v-spacer>
            <v-toolbar-side-icon style="color: grey" v-if="width<960 && page==='blog' && scroll<180" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-side-icon style="color: black;" v-if="width<960 && page==='blog' && scroll>180" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-side-icon  v-if="width<960 && page==='home'" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-side-icon  v-if="width<960 && page==='about'" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-layout slot="extension"  align-center row reverse fill-height>
                <v-btn-toggle slot="extension"  @change="triggerToggle" v-model="toggle_exclusive">
                    <v-btn small class="button-toggle" v-if="!this.toggle_exclusive" color="blue" :value="0" >
                        EN
                    </v-btn>
                    <v-btn small  v-if="this.toggle_exclusive" :value="0" >
                        EN
                    </v-btn>
                    <v-btn small class="button-toggle" v-if="this.toggle_exclusive" color="blue" :value="1">
                        ID
                    </v-btn>
                    <v-btn small v-if="!this.toggle_exclusive"  :value="1">
                        ID
                    </v-btn>
                </v-btn-toggle>
            </v-layout>
        </v-toolbar>

        <v-navigation-drawer
                v-model="drawer"
                absolute
                temporary
                right
                v-if="drawer"
        >
            <v-list style="margin-top: 2rem" class="pt-0" dense>
                <v-divider></v-divider>

                <v-list-tile
                        v-for="item in items"
                        :key="item.title"
                        @click="toLocation(item.location)"
                >
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
    import  {logoImage} from "../../../config/images";
    import {mapState, mapActions} from 'vuex'
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
                toggle_exclusive: 0,
                logo : logoImage,
                width: 2000,
                height: 2000,
                drawer: null,
                items: [
                    { title: 'App', icon: 'android', location: '/' },
                    { title: 'Blog', icon: 'question_answer', location: '/blog' },
                    { title: 'About', icon: 'face', location: '/about' }
                ],
                right: null,
                scroll: 0
            }
        },
        methods: {
            ...mapActions([
                'changeVersion'
            ]),
            onScroll () {
                // window.addEventListener('scroll', function(e) {
                //     // console.log("ini loh",e.path[1].scrollY)
                //     this.scroll = e.path[1].scrollY
                //     // console.log("ini this scroll",this.scroll)
                //     return e.path[1].scrollY
                // })
            },
            checkVersionsStorage () {
              let version = localStorage.getItem('version')
              if (version==1) {
                  this.toggle_exclusive = 1
              }
              else {
                  this.toggle_exclusive = 0
              }
            },
            triggerToggle (e) {
                this.changeVersion(e)
            },
            toLocation (location) {
                this.$router.push(location)
            },
            checkPage () {
                this.page = this.$route.name
                console.log(this.page)
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
    .nav-class {
        background-color: transparent !important;
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
        text-transform: capitalize;
        color: lightslategrey !important;
    }
    .button-toggle {
        color: white !important;
    }
</style>