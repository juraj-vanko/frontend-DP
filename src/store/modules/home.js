import axios from 'axios'

const state = {
    taggerResult: [],
    homeLoading: false,
    darkTheme: false,
}

const getters = {
    getTaggerResult: (state) => state.taggerResult,
    getHomeLoading: (state) => state.homeLoading,
    getDarkTheme: (state) => state.darkTheme,
}

const actions = {
    async tagSentence({commit}, sentence) {
        commit('setHomeLoading', true)
        var formData = new FormData()
        formData.append('sentence', sentence)
        console.log(sentence)
        axios({
            method: 'get',
            url: "http://127.0.0.1:8000/tagger/?sentence="+sentence,
            params: formData,
            data: formData,
            body: formData,
        }).then(function (response) {
            console.log(response.data[0]['tagger'])
            if(response.data[0]['tagger']){
                commit('setTaggerResult', response.data[0]['tagger']);
            }
            commit('setHomeLoading', false)
        })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
    },
    async changeDarkTheme({commit}, theme) {
        commit('setDarkTheme', theme)
    }
}

const mutations = {
    setTaggerResult: (state, result) => (state.taggerResult = result),
    setHomeLoading: (state, result) => (state.homeLoading = result),
    setDarkTheme: (state, theme) => (state.darkTheme = theme),
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}