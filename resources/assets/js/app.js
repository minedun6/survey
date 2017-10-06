require('./bootstrap');

window.Vue = require('vue');

Vue.component('survey', require('./components/Survey.vue'));
Vue.component('questions', require('./components/Survey/Questions/Question'));
Vue.component('choices', require('./components/Survey/Choice/Choices'));
Vue.component('question-types', require('./components/Survey/Questions/QuestionTypes'));

const app = new Vue({
    el: '#app'
});
