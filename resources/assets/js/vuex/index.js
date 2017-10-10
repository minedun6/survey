import Vue from 'vue'
import Vuex from 'vuex'
import survey from '../app/survey/vuex'
import briefcase from '../app/briefcase/vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        survey,
        briefcase
    }
})