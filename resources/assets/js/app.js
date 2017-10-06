require('./bootstrap');

window.Vue = require('vue');
window.eventHub = new Vue;

Vue.component('survey', require('./components/Survey.vue'));
Vue.component('survey-title', require('./components/Survey/SurveyHeader.vue'));
Vue.component('questions', require('./components/Survey/Questions/Questions.vue'));
Vue.component('choices', require('./components/Survey/Choice/Choices.vue'));
Vue.component('question-types', require('./components/Survey/Questions/QuestionTypes.vue'));
Vue.component('dropzone', require('./components/Survey/DropArea.vue'));


Vue.component('multipleChoice', require('./components/Survey/Choice/MultipleChoice.vue'));
Vue.component('singleChoice', require('./components/Survey/Choice/SingleChoice.vue'));
Vue.component('freeChoice', require('./components/Survey/Choice/FreeChoice.vue'));



const app = new Vue({
    el: '#app'
});
