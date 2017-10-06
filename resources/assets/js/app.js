require('./bootstrap');

window.Vue = require('vue');
window.eventHub = new Vue;

Vue.component('survey', require('./components/Survey.vue'));
Vue.component('questions', require('./components/Survey/Questions/Questions'));
Vue.component('choices', require('./components/Survey/Choice/Choices'));
Vue.component('question-types', require('./components/Survey/Questions/QuestionTypes'));
Vue.component('dropzone', require('./components/Survey/DropArea'));

const app = new Vue({
    el: '#app'
});
