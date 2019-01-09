import Vue from 'vue'
import Vuex from 'vuex'
import {DB} from './config'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        drawer: null,
        page: "",
        version: "",
        blogs: [],
        dialog: false,
        toggle_exclusive: 0

    },
    mutations: {
        setToggle (state, payload) {
          state.toggle_exclusive = payload
        },
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
        },
        setDialog (state, payload) {
            state.dialog = payload
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
                if (this.state.page==="blog") {
                    this.dispatch('fetchingBlogs', 'english')
                }
            }
            else if(payload===1) {
                localStorage.setItem('version', 1)
                commit('setVersion', 'indonesia')
                if (this.state.page==="blog") {
                    this.dispatch('fetchingBlogs', 'indonesia')
                }
            }
        },
        fetchingBlogs ({commit}, payload) {
            DB.collection("blogs")
                .where("published", "==", true)
                .orderBy("publish_date", "desc")
                .get()
                .then(function(querySnapshot) {
                    let temp = []
                    querySnapshot.forEach(function(doc) {
                        let data = doc.data()
                        if (payload==='english'){
                            let obj = {
                                title: data.title_english,
                                content: data.content_english,
                                publish_date: data.publish_date,
                                images: data.images
                            }
                            temp.push(obj)
                        }
                        else {
                            let obj = {
                                title: data.title_indo,
                                content: data.content_indo,
                                publish_date: data.publish_date,
                                images: data.images
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



/* eslint-disable */
// import React from 'react';
// import {connect} from 'react-redux';
// import Album from './index'
// import Nav from '../../components/Nav/index';
// import ListAlbums from '../../components/ListAlbum/index';
// import Footer from '../../components/Footer/index';
// import AlbumsData from '../../store/action/albumsAction';
// import LoadingView from '../../components/LoadingView';
// import MapBox from '../../components/MapBox';
// import Intercom from '../../components/Intercom';
// import MetaTag from '../../components/MetaTag';
// import OGMetaTagHeader from '../../components/OGMetaTagHeader';
// import OGMetaTagTitle from '../../components/OGMetaTagTitle';
// import OGMetaTagUrl from '../../components/OGMetaTagUrl';
//
// const mapStateToProps = state => ({
//     albumsData: state.albums.albums,
//     statusError: state.albums.statusError,
//     allImages: state.albums.allImages,
//     rawData: state.albums,
// });
//
// const mapDispatchToProps = dispatch => ({
//     retrievesAlbum(c) {
//         dispatch(AlbumsData.retrieveAlbum(c));
//     },
// });
//
// describe("<Album />", () => {
//     let wrapper = shallow(<Album />);
//     it("should exist", () => {
//         expect(wrapper.exists()).to.be.true;
//     });
// })

