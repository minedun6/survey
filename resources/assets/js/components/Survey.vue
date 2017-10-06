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
                <div class="dropzone" id="droppable-area">
                    Just drag question type to create survey questions ...
                </div>
                <div class="" id="sortable">
                    <div class="panel-body added-questions-area">
                        <div v-for=" (q, index) in ui.questions ">
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <h4 class="panel-title pull-left">Question {{ index + 1 }} : <span
                                            v-text="q.questionText"></span></h4>
                                    <button class="btn btn-danger btn-xs pull-right" @click="deleteQuestion(index)">
                                        <span class="glyphicon glyphicon-trash"></span>
                                    </button>
                                    <div class="clearfix"></div>
                                </div>
                                <div class="panel-body">
                                    <div class="row">
                                        <div class="col-md-10 ">
                                            <div class="form-group">
                                                <input type="text" class="form-control"
                                                       v-model="q.questionText" title="newQuestionText"
                                                       placeholder="Question Title"/>
                                            </div>
                                        </div>
                                        <div class="col-md-2" style="top: 5px;">
                                            <input id="newQuestionMandatory" type="checkbox"
                                                   v-model="q.mandatory">
                                            <label for="newQuestionMandatory">Mandatory</label>
                                        </div>
                                    </div>
                                    <!-- List of choices -->

                                    <!---->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
    import draggable from 'jquery-ui/ui/widgets/draggable'
    import sortable from 'jquery-ui/ui/widgets/sortable'
    import droppable from 'jquery-ui/ui/widgets/droppable'
    import QuestionType from "./Survey/Questions/QuestionType";

    export default {
        components: {QuestionType},
        mounted: function () {
            let vm = this;
            $('#droppable-area').droppable({
                classes: {
                    "ui-droppable-hover": "drop"
                },
                drop: function (event, ui) {
                    let draggable = ui.draggable;
                    vm.ui.questions.push(vm.newQuestionInstance(
                        draggable.attr('data-question-type')
                    ));
                }
            });
            $('.ui-draggable').draggable({
                cursor: "move",
                helper: "clone",
                revert: function (dropped) {
                    let $draggable = $(this),
                        hasBeenDroppedBefore = $draggable.data('hasBeenDropped'),
                        wasJustDropped = dropped && dropped[0].id === "droppable-area";
                    if (wasJustDropped) {
                        // don't revert, it's in the droppable
                        return false;
                    } else {
                        if (hasBeenDroppedBefore) {
                            // don't rely on the built in revert, do it yourself
                            $draggable.animate({top: 0, left: 0}, 'slow');
                            return false;
                        } else {
                            // just let the build in work, although really, you could animate to 0,0 here as well
                            return true;
                        }
                    }
                }
            });
        },
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
            },
            toggleChoiceCanComment(question, choice) {
                question.choices[choice].canComment = !question.choices[choice].canComment;
            },
            newQuestionInstance(type) {
                return {
                    type: type,
                    questionText: '',
                    mandatory: true,
                    choices: [
                        this.newChoiceInstance(),
                        this.newChoiceInstance(),
                        this.newChoiceInstance()
                    ]
                }
            },
            newChoiceInstance() {
                return {
                    choiceText: '',
                    canComment: false
                }
            },
            addQuestionChoice(question) {
                question.choices.push(this.newChoiceInstance());
            },
            deleteQuestionChoice(question, key) {
                // flash message with incapability to have less than 2 choices
                if (question.choices.length <= 2) return;
                question.choices.splice(key, 1);
            },
            deleteQuestion(question) {
                this.ui.questions.splice(question, 1);
            }
        }
    }
</script>

<style scoped>
    .form-control-feedback {
        pointer-events: initial;
    }

    .active {
        color: #15a4fa;
    }

    .dropzone {
        height: 12em;
        margin-bottom: 20px;
        color: #ccc;
        border: 2px dashed #ccc;
        line-height: 12em;
        text-align: center
    }

    .drop {
        color: #222;
        border-color: #222;
    }

</style>
