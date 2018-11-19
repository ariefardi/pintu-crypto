<template>
    <div>
        <v-toolbar v-if="width>=960" style="margin-right: 300px" fixed class="nav-class" flat scroll-off-screen>
            <img class="logo-image" :src="logo" alt="">
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn to="/" class="button-menu" flat>App</v-btn>
                <v-btn to="/blog" class="button-menu" flat>Blog</v-btn>
                <v-btn to="/about" class="button-menu" flat>About</v-btn>
            </v-toolbar-items>
            <v-spacer></v-spacer>
            <v-btn v-if="width>=960" class="button-download" color="#1867c0">Download</v-btn>
            <v-toolbar-side-icon  v-if="width<960" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        </v-toolbar>
        <v-toolbar v-if="width<960" style="margin-right: 300px" fixed class="nav-class" flat scroll-off-screen>
            <v-spacer></v-spacer>
            <img class="logo-image" :src="logo" alt="">
            <v-spacer></v-spacer>
            <v-toolbar-side-icon style="color: white" v-if="width<960 && page==='blog'" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-side-icon  v-if="width<960 && page==='home'" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-side-icon  v-if="width<960 && page==='about'" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
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
    import logoImage from "../../../assets/Artboard 1.png"
    import {mapState} from 'vuex'
    export default {
        created () {
            this.checkPage()
        },
        mounted () {
            this.checkingSize()
            this.checkPage()
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
            }
        },
        methods: {
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
                console.log(this.width)
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
</style>