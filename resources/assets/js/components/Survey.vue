<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-heading text-center">
                        <span v-if="!ui.editingMode">
                            {{ ui.surveyTitle }}
                            <button class="btn btn-xs btn-danger" @click="toggleSurveyChangeTitle">
                                <span class="glyphicon glyphicon-edit"></span>
                            </button>
                        </span>
                        <span v-else>
                            <div class="form-group has-feedback ">
                                <input type="text" class="form-control" v-model="ui.surveyTitle"/>
                                <a href="#" @click="toggleSurveyChangeTitle">
                                    <span class="glyphicon glyphicon-check form-control-feedback">
                                    </span>
                                </a>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-9">
                <dropzone></dropzone>
                <questions :data="ui.questions"></questions>
            </div>
            <div class="col-md-3">
                <div class="row">
                    <div class="panel panel-default">
                        <div class="panel-heading">Question types :</div>
                        <div class="panel-body" id="draggable-questions-type">
                            <question-types :data="ui.questionsType"></question-types>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                ui: {
                    surveyTitle: 'Empty Survey',
                    editingMode: false,
                    questions: [],
                    questionsType: [
                        {
                            key: 'multiple',
                            label: 'Multiple Choice'
                        },
                        {
                            key: 'single',
                            label: 'Single Choice'
                        },
                        {
                            key: 'scale',
                            label: 'Scale'
                        },
                        {
                            key: 'free',
                            label: 'Free'
                        },
                    ]
                }
            }
        },
        methods: {
            toggleSurveyChangeTitle() {
                this.ui.editingMode = !this.ui.editingMode;
            }
        }
    }
</script>

<style scoped>
    .form-control-feedback {
        pointer-events: initial;
    }

</style>
