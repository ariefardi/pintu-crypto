import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        drawer: null,
        page: ""
    },
    mutations: {
        setDrawer (state, payload) {
            state.drawer = payload
        },
        setPage (state, payload) {
            state.page = payload
        }
    },
    actions: {
        openDrawer ({commit}, payload) {
            commit('setDrawer', payload)
        }
    }
})
