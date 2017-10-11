import Vue from 'vue'
import Vuex from 'vuex'
import survey from '../app/survey/vuex'
import briefcase from '../app/briefcase/vuex'
import dashboard from '../app/dashboard/vuex/';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        dashboard,
        survey,
        briefcase
    }
})