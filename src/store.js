import Vue from 'vue'
import Vuex from 'vuex'
import {DB} from './config'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        drawer: null,
        page: "",
        version: "english",
        blogs: []

    },
    mutations: {
        setDrawer (state, payload) {
            state.drawer = payload
        },
        setPage (state, payload) {
            state.page = payload
        },
        setVersion (state, payload) {
            state.version = payload
        },
        setBlogs (state, payload) {
            state.blogs = payload
        }
    },
    actions: {
        openDrawer ({commit}, payload) {
            commit('setDrawer', payload)
        },
        changeVersion({commit}, payload) {
            if (payload===0) {
                localStorage.setItem('version', 0)
                commit('setVersion', 'english')
                this.dispatch('fetchingBlogs', 'english')
            }
            else {
                localStorage.setItem('version', 1)
                commit('setVersion', 'indonesia')
                this.dispatch('fetchingBlogs', 'indonesia')
            }
        },
        fetchingBlogs ({commit}, payload) {
            DB.collection("blogs")
                .where("published", "==", true)
                .get()
                .then(function(querySnapshot) {
                    let temp = []
                    querySnapshot.forEach(function(doc) {
                        let data = doc.data()
                        if (payload==='english'){
                            let obj = {
                                title: data.title_english,
                                content: data.content_english,
                                publish_date: data.publish_date
                            }
                            temp.push(obj)
                        }
                        else {
                            let obj = {
                                title: data.title_indo,
                                content: data.content_indo,
                                publish_date: data.publish_date
                            }
                            temp.push(obj)
                        }

                    });
                    commit('setBlogs', temp )
                })
                .catch(function(error) {
                    console.log("Error getting documents: ", error);
                });
        }
    }
})
