import store from './vuex'

require('./bootstrap');

window.Vue = require('vue');

Vue.component('survey', require('./app/survey/components/Survey.vue'));
Vue.component('dropzone', require('./app/survey/components/DropZone.vue'));
Vue.component('question-types', require('./app/survey/components/Question/QuestionTypes.vue'));
Vue.component('question-type', require('./app/survey/components/Question/QuestionType.vue'));
Vue.component('questions', require('./app/survey/components/Question/Questions.vue'));
Vue.component('question', require('./app/survey/components/Question/Question.vue'));
Vue.component('choices', require('./app/survey/components/Choice/Choices.vue'));
Vue.component('choice', require('./app/survey/components/Choice/Choice.vue'));
Vue.component('multipleChoice', require('./app/survey/components/Choice/MultipleChoice.vue'));
Vue.component('singleChoice', require('./app/survey/components/Choice/SingleChoice.vue'));
Vue.component('new-choice', require('./app/survey/components/Choice/NewChoice.vue'));


const app = new Vue({
    el: '#app',
    store: store
});
